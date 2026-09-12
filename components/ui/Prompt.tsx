import { personal } from "@/data";

/** Decorative shell prompt line: boris@prtf:~/path$ command */
export default function Prompt({
  path = "~",
  command,
  className = "",
}: {
  path?: string;
  command: string;
  className?: string;
}) {
  return (
    <p className={`prompt ${className}`} aria-hidden="true">
      <span className="text-gb-green">{personal.handle}</span>
      <span className="text-muted">:</span>
      <span className="text-gb-blue">{path}</span>
      <span className="text-muted">$ </span>
      <span className="text-ink">{command}</span>
    </p>
  );
}
