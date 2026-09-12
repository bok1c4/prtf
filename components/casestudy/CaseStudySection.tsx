import type { ReactNode } from "react";

export default function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-20 border-t border-dashed border-line py-7 first:border-t-0 first:pt-0"
    >
      <h2 id={`${id}-title`} className="text-lg font-bold text-gb-yellow">
        <span aria-hidden="true" className="text-gb-bg4">
          ##{" "}
        </span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
