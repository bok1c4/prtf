import type { Decision } from "@/types";

export default function DecisionList({
  decisions,
}: {
  decisions: Decision[];
}) {
  return (
    <dl className="space-y-3">
      {decisions.map((item) => (
        <div
          key={item.decision}
          className="rounded-[3px] border border-line bg-canvas-2 p-3.5"
        >
          <dt className="text-[14.5px] font-bold text-ink">
            <span aria-hidden="true" className="text-gb-green">
              →{" "}
            </span>
            {item.decision}
          </dt>
          <dd className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
            {item.rationale}
          </dd>
        </div>
      ))}
    </dl>
  );
}
