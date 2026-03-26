import { NextRequest } from "next/server";
import { getInstance } from "@/lib/demo";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ instanceId: string }> }
) {
  const { instanceId } = await params;
  const instance = getInstance(instanceId);

  if (!instance) {
    return new Response("Instance not found", { status: 404 });
  }

  const encoder = new TextEncoder();
  let cleanupFn: (() => void) | undefined;

  const stream = new ReadableStream({
    start(controller) {
      const enqueue = (data: string) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        } catch {
          // Controller closed
        }
      };

      // Replay buffered logs to new subscriber
      for (const chunk of instance.logBuffer) {
        enqueue(chunk);
      }

      const onLog = (data: string) => enqueue(data);
      const onStatus = (status: string) => {
        try {
          controller.enqueue(
            encoder.encode(`event: status\ndata: ${JSON.stringify(status)}\n\n`)
          );
        } catch {}
        if (status === "stopped" || status === "error") {
          cleanup();
          try { controller.close(); } catch {}
        }
      };

      const keepAlive = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": ping\n\n"));
        } catch {
          cleanup();
        }
      }, 15_000);

      function cleanup() {
        clearInterval(keepAlive);
        instance!.emitter.off("log", onLog);
        instance!.emitter.off("status", onStatus);
      }

      cleanupFn = cleanup;
      instance.emitter.on("log", onLog);
      instance.emitter.on("status", onStatus);
    },
    cancel() {
      cleanupFn?.();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
