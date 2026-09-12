import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Bordered TUI pane. `title` sits on the top border (decorative);
 *  give the pane an accessible name with `aria-labelledby` on a
 *  heading inside it. */
export default function Pane({
  title,
  id,
  labelledBy,
  className,
  children,
}: {
  title: string;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      tabIndex={-1}
      className={cn("pane scroll-mt-16 focus:outline-none", className)}
    >
      <span className="pane-title" aria-hidden="true">
        ┤ {title} ├
      </span>
      {children}
    </section>
  );
}
