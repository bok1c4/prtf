import { NextRequest } from "next/server";
import { createInstance, isAllowedRepo } from "@/lib/demo";

export async function POST(request: NextRequest) {
  let repoUrl: string;
  try {
    ({ repoUrl } = await request.json());
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!repoUrl || !isAllowedRepo(repoUrl)) {
    return Response.json({ error: "Repository not in allowlist" }, { status: 403 });
  }

  try {
    const { instanceId, port } = await createInstance(repoUrl);
    return Response.json({ instanceId, port, status: "starting" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 429 });
  }
}
