import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { CaseStudy } from "@/types";

export const kindLabel: Record<CaseStudy["kind"], string> = {
  client: "Client work",
  personal: "Personal project",
};

/** One row of an `ls -la work/` listing. */
export default function ProjectCard({ study }: { study: CaseStudy }) {
  return (
    <li className="grid gap-1.5 py-4 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-6">
      <div className="text-xs leading-5 text-muted">
        <p className="text-gb-purple">{kindLabel[study.kind].toLowerCase()}</p>
        {study.client && <p>{study.client}</p>}
        {study.period && <p>{study.period}</p>}
      </div>
      <div className="min-w-0">
        <h3 className="text-[15px] leading-snug font-bold">
          <span className="font-normal text-muted">{study.slug}/ </span>
          <Link href={`/work/${study.slug}`} className="link-inline">
            {study.title}
          </Link>
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
          {study.summary}
        </p>
        <p className="mt-1.5 text-xs text-muted">role: {study.role}</p>
        <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1" aria-label="Technologies">
          {study.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
