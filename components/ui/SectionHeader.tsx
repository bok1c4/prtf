import { cn } from "@/lib/utils";
import Prompt from "./Prompt";

/** Prompt line + markdown-style heading for a pane. */
export default function SectionHeader({
  id,
  path,
  command,
  title,
  lede,
  className,
}: {
  id: string;
  path?: string;
  command: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 max-w-[72ch]", className)}>
      <Prompt path={path} command={command} />
      <h2 id={id} className="mt-3 text-xl font-bold text-gb-yellow sm:text-2xl">
        <span aria-hidden="true" className="text-gb-bg4">
          #{" "}
        </span>
        {title}
      </h2>
      {lede && <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{lede}</p>}
    </div>
  );
}
