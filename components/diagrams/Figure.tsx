import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Figure({
  caption,
  children,
  scroll = false,
}: {
  caption: string;
  children: ReactNode;
  scroll?: boolean;
}) {
  return (
    <figure className="my-6">
      <div
        className={cn(
          "rounded-[3px] border border-line bg-canvas p-3 sm:p-5",
          scroll && "overflow-x-auto",
        )}
      >
        {children}
      </div>
      <figcaption className="mt-2 text-[13px] leading-relaxed text-muted">
        <span aria-hidden="true" className="text-gb-bg4">
          {"// "}
        </span>
        {caption}
      </figcaption>
    </figure>
  );
}
