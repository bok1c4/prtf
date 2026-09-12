import type { CSSProperties } from "react";

export type FlowStage = {
  title: string;
  tone?: "input" | "process" | "store" | "output";
  items: { label: string; note?: string }[];
};

/** Left-to-right flow on wide screens, top-to-bottom on small ones.
 *  Rendered as an ordered list so the reading order is the data order. */
export default function FlowDiagram({
  stages,
  label,
}: {
  stages: FlowStage[];
  label: string;
}) {
  return (
    <ol
      className="flow"
      style={{ "--stages": stages.length } as CSSProperties}
      aria-label={label}
    >
      {stages.map((stage, index) => (
        <li
          key={stage.title}
          className="flow-stage"
          data-tone={stage.tone ?? "process"}
        >
          {index > 0 && (
            <span aria-hidden="true" className="flow-connector">
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          )}
          <p className="eyebrow">
            {String(index + 1).padStart(2, "0")} · {stage.title}
          </p>
          <ul className="mt-3 space-y-2.5">
            {stage.items.map((item) => (
              <li key={item.label} className="text-sm leading-snug text-ink">
                {item.label}
                {item.note && (
                  <span className="mt-0.5 block text-xs leading-snug text-muted">
                    {item.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
