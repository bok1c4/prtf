import SmartLink from "@/components/ui/SmartLink";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

/** One row of an `ls -la work/` listing: problem, highlights, stack, repo. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li
      id={`project-${project.slug}`}
      className="grid scroll-mt-20 gap-1.5 py-4 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-6"
    >
      <div className="text-xs leading-5 text-muted">
        <p className="text-gb-purple">{project.slug}/</p>
        {project.repo ? (
          <SmartLink href={project.repo} external className="link-inline">
            repository ↗
          </SmartLink>
        ) : (
          project.note && <p>{project.note}</p>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="text-[15px] leading-snug font-bold text-ink">
          {project.repo ? (
            <SmartLink href={project.repo} external className="link-inline">
              {project.title}
            </SmartLink>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{project.problem}</p>
        <ul className="mt-2 space-y-1">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-[14px] leading-relaxed text-ink-2">
              <span aria-hidden="true" className="text-gb-bg4">
                -
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1" aria-label="Stack">
          {project.stack.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
