import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import { education, roles } from "@/data";

/** Roles as `git log`, newest first, the period as the ref. */
export default function Experience() {
  return (
    <Pane id="experience" title="~/experience.md" labelledBy="experience-title">
      <SectionHeader
        id="experience-title"
        command="git log --oneline experience"
        title="Experience"
        lede="Newest first. Client work is described at the level the engagement allows."
      />
      <ol className="space-y-5 text-[14px]" aria-label="Experience, newest first">
        {roles.map((role) => (
          <li
            key={`${role.period}-${role.title}`}
            className="grid gap-1.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-3"
          >
            <span className="text-gb-yellow" aria-hidden="true">
              {role.period}
            </span>
            <div className="min-w-0">
              <p className="text-ink">
                <span className="font-bold">{role.title}</span>
                <span className="text-muted"> · </span>
                <span className="text-gb-green">{role.company}</span>
              </p>
              {(role.meta || role.summary) && (
                <p className="text-[13px] text-muted">
                  {[role.meta, role.summary].filter(Boolean).join(" · ")}
                </p>
              )}
              <ul className="mt-1.5 space-y-1">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2 leading-relaxed text-ink-2">
                    <span aria-hidden="true" className="text-gb-bg4">
                      -
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {role.note && <p className="mt-1.5 text-[13px] text-muted">{role.note}</p>}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-[13.5px] text-muted">
        <span className="text-gb-blue">education:</span> {education.degree},{" "}
        {education.institution}, {education.status.toLowerCase()}
      </p>
    </Pane>
  );
}
