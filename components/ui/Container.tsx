import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const widths = {
  prose: "max-w-[72ch]",
  wide: "max-w-[1120px]",
  full: "max-w-[1280px]",
} as const;

export default function Container({
  width = "wide",
  className,
  children,
}: {
  width?: keyof typeof widths;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", widths[width], className)}>
      {children}
    </div>
  );
}
