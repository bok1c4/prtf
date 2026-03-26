"use client";

import { useEffect, useRef, useState } from "react";

interface DemoTerminalProps {
  instanceId: string;
  port: number;
  onStop: () => void;
}

type DemoStatus = "starting" | "running" | "stopped" | "error";

export default function DemoTerminal({ instanceId, port, onStop }: DemoTerminalProps) {
  const termRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<DemoStatus>("starting");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!termRef.current) return;

    let disposed = false;
    let fitAddon: import("@xterm/addon-fit").FitAddon | undefined;
    let terminal: import("xterm").Terminal | undefined;
    let eventSource: EventSource | undefined;
    let statusInterval: ReturnType<typeof setInterval> | undefined;

    async function init() {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("@xterm/addon-fit");

      if (disposed || !termRef.current) return;

      terminal = new Terminal({
        theme: {
          background: "#0a0a0a",
          foreground: "#ededed",
          cursor: "#ededed",
          selectionBackground: "#444",
        },
        fontSize: 12,
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        convertEol: true,
        scrollback: 2000,
        disableStdin: true,
      });

      fitAddon = new FitAddon();
      terminal.loadAddon(fitAddon);
      terminal.open(termRef.current);
      fitAddon.fit();

      eventSource = new EventSource(`/api/demo/logs/${instanceId}`);

      eventSource.addEventListener("message", (e: MessageEvent) => {
        try {
          terminal?.write(JSON.parse(e.data as string) as string);
        } catch {
          terminal?.write(e.data as string);
        }
      });

      eventSource.addEventListener("status", (e: MessageEvent) => {
        try {
          const s = JSON.parse(e.data as string) as DemoStatus;
          setStatus(s);
          if (s === "stopped" || s === "error") {
            eventSource?.close();
          }
        } catch {}
      });

      // Poll status to detect when all containers are healthy
      statusInterval = setInterval(async () => {
        try {
          const res = await fetch(`/api/demo/status/${instanceId}`);
          if (!res.ok) return;
          const data = (await res.json()) as {
            status: DemoStatus;
            ready?: boolean;
          };
          setStatus(data.status);
          if (data.ready) {
            setReady(true);
            clearInterval(statusInterval);
          }
          if (data.status === "stopped" || data.status === "error") {
            clearInterval(statusInterval);
          }
        } catch {}
      }, 3000);
    }

    const handleResize = () => fitAddon?.fit();
    window.addEventListener("resize", handleResize);

    init();

    return () => {
      disposed = true;
      window.removeEventListener("resize", handleResize);
      eventSource?.close();
      clearInterval(statusInterval);
      terminal?.dispose();
      fetch(`/api/demo/stop/${instanceId}`, { method: "DELETE" }).catch(() => {});
    };
  }, [instanceId]);

  const handleStop = async () => {
    await fetch(`/api/demo/stop/${instanceId}`, { method: "DELETE" }).catch(() => {});
    onStop();
  };

  return (
    <div className="mt-4 border border-neutral-700 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b border-neutral-700">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status === "running"
                ? "bg-green-500"
                : status === "error"
                  ? "bg-red-500"
                  : "bg-yellow-500 animate-pulse"
            }`}
          />
          <span className="text-xs text-neutral-400 font-mono">
            {status === "starting"
              ? "Building & starting containers..."
              : status === "running" && !ready
                ? "Waiting for services to be healthy..."
                : status === "running" && ready
                  ? "Running"
                  : status === "error"
                    ? "Error — check logs above"
                    : "Stopped"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {ready && (
            <a
              href={`http://localhost:${port}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              localhost:{port} ↗
            </a>
          )}
          <button
            onClick={handleStop}
            className="text-xs text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
          >
            Stop
          </button>
        </div>
      </div>
      <div ref={termRef} className="h-64" />
    </div>
  );
}
