import { NextRequest } from "next/server";
import { getInstance, stopInstance } from "@/lib/demo";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ instanceId: string }> }
) {
  const { instanceId } = await params;

  if (!getInstance(instanceId)) {
    return Response.json({ error: "Instance not found" }, { status: 404 });
  }

  await stopInstance(instanceId);
  return Response.json({ success: true });
}
