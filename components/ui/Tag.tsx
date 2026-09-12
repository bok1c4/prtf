import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  default: "text-ink-2",
  accent: "text-gb-yellow",
  muted: "text-muted",
} as const;

/** Bracketed tag, [like this], instead of a pill. */
export default function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={cn("inline-flex items-center text-[12px] leading-5", tones[tone])}
    >
      <span aria-hidden="true" className="text-gb-bg4">
        [
      </span>
      {children}
      <span aria-hidden="true" className="text-gb-bg4">
        ]
      </span>
    </span>
  );
}
