import { NextRequest } from "next/server";
import { getInstance, DEMO_TTL_MS } from "@/lib/demo";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ instanceId: string }> }
) {
  const { instanceId } = await params;
  const instance = getInstance(instanceId);

  if (!instance) {
    return Response.json({ error: "Instance not found" }, { status: 404 });
  }

  if (instance.status === "starting") {
    return Response.json({ status: "starting", port: instance.port });
  }

  if (instance.status === "stopped" || instance.status === "error") {
    return Response.json({ status: instance.status });
  }

  try {
    const { stdout } = await execFileAsync(
      "docker",
      ["compose", "-p", instance.projectName, "ps", "--format", "json"],
      { cwd: instance.tmpDir }
    );

    const containers = stdout
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as { State: string };
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    const allRunning =
      containers.length > 0 && containers.every((c) => c!.State === "running");

    return Response.json({
      status: instance.status,
      port: instance.port,
      ready: allRunning,
      ttlRemainingMs: DEMO_TTL_MS - (Date.now() - instance.startedAt),
    });
  } catch {
    return Response.json({
      status: instance.status,
      port: instance.port,
      ready: false,
    });
  }
}
