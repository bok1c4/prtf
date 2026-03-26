import { EventEmitter } from "events";
import { spawn } from "child_process";
import type { ChildProcess } from "child_process";
import * as fs from "fs";
import * as net from "net";
import * as crypto from "crypto";
import * as yaml from "js-yaml";

export const DEMO_TTL_MS = 5 * 60 * 1000;
const PORT_RANGE_START = 12000;
const PORT_RANGE_END = 19999;
const MAX_INSTANCES = 2;

const ALLOWED_REPOS: Record<string, string> = {
  "https://github.com/bok1c4/toy_store": "https://github.com/bok1c4/toy_store.git",
};

export interface DemoInstance {
  instanceId: string;
  port: number;
  tmpDir: string;
  projectName: string;
  startedAt: number;
  ttlTimer: ReturnType<typeof setTimeout>;
  status: "starting" | "running" | "stopped" | "error";
  emitter: EventEmitter;
  logBuffer: string[];
  currentProcess?: ChildProcess;
}

const instances = new Map<string, DemoInstance>();

function isFreePort(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

async function allocatePort(): Promise<number> {
  for (let i = 0; i < 100; i++) {
    const port =
      Math.floor(Math.random() * (PORT_RANGE_END - PORT_RANGE_START)) +
      PORT_RANGE_START;
    if (await isFreePort(port)) return port;
  }
  throw new Error("Could not allocate a free port");
}

function generateDemoEnv(): string {
  const rand = () => crypto.randomBytes(24).toString("hex");
  return [
    "DB_USER=toystore_user",
    `DB_PASSWORD=${rand()}`,
    "DB_NAME=toystore",
    `REDIS_PASSWORD=${rand()}`,
    `JWT_SECRET=${crypto.randomBytes(32).toString("hex")}`,
    "JWT_ACCESS_TTL=15m",
    "JWT_REFRESH_TTL=168h",
    "EXTERNAL_API_URL=https://toy.pequla.com/api",
    "STRIPE_SECRET_KEY=sk_test_placeholder",
    "STRIPE_WEBHOOK_SECRET=whsec_placeholder",
    "NEXT_PUBLIC_API_URL=/api",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder",
    "ENVIRONMENT=development",
    "LOG_LEVEL=info",
  ].join("\n");
}

function overrideNginxPort(composePath: string, port: number): void {
  const raw = fs.readFileSync(composePath, "utf-8");
  const doc = yaml.load(raw) as Record<string, unknown>;
  const services = (doc.services ?? {}) as Record<string, Record<string, unknown>>;

  for (const service of Object.values(services)) {
    if (service && Array.isArray(service.ports)) {
      service.ports = (
        service.ports as (string | { target: number; published: number })[]
      ).map((p) => {
        if (typeof p === "string") {
          const colonIdx = p.indexOf(":");
          if (colonIdx !== -1) return `${port}:${p.slice(colonIdx + 1)}`;
        } else if (p && typeof p === "object") {
          return { ...p, published: port };
        }
        return p;
      });
    }
  }

  fs.writeFileSync(composePath, yaml.dump(doc));
}

function spawnProc(
  cmd: string,
  args: string[],
  opts: { cwd: string },
  onData: (chunk: string) => void
): Promise<number> {
  return new Promise((resolve) => {
    const proc = spawn(cmd, args, { ...opts, stdio: ["ignore", "pipe", "pipe"] });
    proc.stdout?.on("data", (c: Buffer) => onData(c.toString()));
    proc.stderr?.on("data", (c: Buffer) => onData(c.toString()));
    proc.on("exit", (code) => resolve(code ?? 1));
  });
}

function startDemo(instance: DemoInstance, cloneUrl: string): void {
  const { projectName, tmpDir, emitter, port } = instance;

  const emit = (data: string) => {
    instance.logBuffer.push(data);
    if (instance.logBuffer.length > 500) instance.logBuffer.shift();
    emitter.emit("log", data);
  };

  async function run() {
    emit(`\x1b[33m[demo] Cloning repository...\x1b[0m\r\n`);

    // Clone the repo into tmpDir
    const cloneCode = await spawnProc(
      "git",
      ["clone", "--depth=1", cloneUrl, tmpDir],
      { cwd: "/tmp" },
      emit
    );

    if (!instances.has(instance.instanceId)) return;
    if (cloneCode !== 0) {
      instance.status = "error";
      emit(`\r\n\x1b[31m[demo] Clone failed (exit ${cloneCode})\x1b[0m\r\n`);
      emitter.emit("status", "error");
      return;
    }

    // Patch compose file port and write .env
    overrideNginxPort(`${tmpDir}/docker-compose.yml`, port);
    fs.writeFileSync(`${tmpDir}/.env`, generateDemoEnv());

    emit(`\x1b[33m[demo] Starting containers on port ${port}...\x1b[0m\r\n`);

    const upProc = spawn(
      "docker",
      ["compose", "-p", projectName, "up", "-d", "--remove-orphans"],
      { cwd: tmpDir, stdio: ["ignore", "pipe", "pipe"] }
    );
    instance.currentProcess = upProc;
    upProc.stdout?.on("data", (c: Buffer) => emit(c.toString()));
    upProc.stderr?.on("data", (c: Buffer) => emit(c.toString()));

    upProc.on("exit", (code) => {
      if (!instances.has(instance.instanceId)) return;

      if (code === 0) {
        instance.status = "running";
        emit(`\r\n\x1b[32m[demo] All services started on port ${port}\x1b[0m\r\n`);
        emitter.emit("status", "running");

        const logsProc = spawn(
          "docker",
          ["compose", "-p", projectName, "logs", "--follow", "--no-color", "--timestamps"],
          { cwd: tmpDir, stdio: ["ignore", "pipe", "pipe"] }
        );
        instance.currentProcess = logsProc;
        logsProc.stdout?.on("data", (c: Buffer) => emit(c.toString()));
        logsProc.stderr?.on("data", (c: Buffer) => emit(c.toString()));
      } else {
        instance.status = "error";
        emit(`\r\n\x1b[31m[demo] Compose exited with code ${code}\x1b[0m\r\n`);
        emitter.emit("status", "error");
      }
    });
  }

  run().catch((err) => {
    instance.status = "error";
    emit(`\r\n\x1b[31m[demo] Unexpected error: ${err}\x1b[0m\r\n`);
    emitter.emit("status", "error");
  });
}

export function isAllowedRepo(repoUrl: string): boolean {
  return repoUrl in ALLOWED_REPOS;
}

export function getInstance(instanceId: string): DemoInstance | undefined {
  return instances.get(instanceId);
}

export async function createInstance(
  repoUrl: string
): Promise<{ instanceId: string; port: number }> {
  if (instances.size >= MAX_INSTANCES) {
    throw new Error("Max concurrent demo instances reached. Try again later.");
  }

  const cloneUrl = ALLOWED_REPOS[repoUrl];

  const instanceId = crypto.randomUUID();
  const port = await allocatePort();
  const projectName = `demo-${instanceId.slice(0, 8)}`;
  const tmpDir = `/tmp/${projectName}`;

  // tmpDir must NOT exist before git clone
  try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}

  const emitter = new EventEmitter();
  emitter.setMaxListeners(20);

  const ttlTimer = setTimeout(() => stopInstance(instanceId), DEMO_TTL_MS);

  const instance: DemoInstance = {
    instanceId,
    port,
    tmpDir,
    projectName,
    startedAt: Date.now(),
    ttlTimer,
    status: "starting",
    emitter,
    logBuffer: [],
  };

  instances.set(instanceId, instance);
  startDemo(instance, cloneUrl);

  return { instanceId, port };
}

export async function stopInstance(instanceId: string): Promise<void> {
  const instance = instances.get(instanceId);
  if (!instance) return;

  clearTimeout(instance.ttlTimer);
  instance.currentProcess?.kill();
  instance.status = "stopped";
  instance.emitter.emit("status", "stopped");
  instances.delete(instanceId);

  const { projectName, tmpDir } = instance;
  const down = spawn(
    "docker",
    ["compose", "-p", projectName, "down", "-v", "--remove-orphans"],
    { cwd: tmpDir, stdio: "ignore", detached: true }
  );
  down.unref();

  setTimeout(() => {
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }, 15_000);
}
