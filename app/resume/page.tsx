import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Prompt from "@/components/ui/Prompt";
import PrintButton from "@/components/PrintButton";
import {
  education,
  personal,
  positioning,
  projects,
  resume,
  roles,
  SITE,
  skillGroups,
} from "@/data";

export const metadata: Metadata = {
  title: "Resume",
  description: SITE.description,
  alternates: { canonical: "/resume" },
};

const bareUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** "a, b, c; working knowledge of d, e", straight from the site's groups. */
function skillLine(group: (typeof skillGroups)[number]) {
  const primary = group.primary.map((item) => item.name).join(", ");
  const secondary = (group.secondary ?? []).map((item) => item.name).join(", ");
  return secondary ? `${primary}; working knowledge of ${secondary}` : primary;
}

export default function ResumePage() {
  return (
    <Container width="prose" className="py-6 sm:py-8 print:max-w-none print:px-0 print:py-0">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div>
          <Prompt command="cat resume.txt" />
          <p className="mt-1 text-xs text-muted">
            The same content as the site, printable. Updated {resume.updated}.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href={resume.url} download size="sm">
            {resume.label.toLowerCase()}
          </ButtonLink>
          <PrintButton />
        </div>
      </div>

      <article className="resume rounded-[3px] border border-line-strong bg-canvas px-5 py-6 text-ink sm:px-8 sm:py-8 print:rounded-none print:border-0 print:p-0">
        <header>
          <h1 className="text-2xl leading-tight font-bold">{personal.name}</h1>
          <p className="mt-1 text-[15px] text-ink-2">
            {positioning.taglineLead} · {positioning.taglineFocus}
          </p>
          <p className="mt-1 text-[13.5px] text-ink-2">{positioning.subline}</p>
          <p className="mt-1 text-[13.5px] text-ink-2">
            <a href={`mailto:${personal.email}`}>{personal.email}</a> ·{" "}
            <a href={SITE.url}>{bareUrl(SITE.url)}</a>
            {personal.links.map((link) => (
              <span key={link.href}>
                {" "}
                · <a href={link.href}>{bareUrl(link.href)}</a>
              </span>
            ))}
          </p>
        </header>

        <section aria-labelledby="resume-summary">
          <h2 id="resume-summary">Summary</h2>
          <p className="text-[14px] leading-relaxed text-ink-2">
            {positioning.summary.join(" ")}
          </p>
        </section>

        <section aria-labelledby="resume-experience">
          <h2 id="resume-experience">Experience</h2>
          {roles.map((role) => (
            <article key={`${role.period}-${role.title}`} className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3>
                  {role.title} · {role.company}
                </h3>
                <p className="text-[13px] text-muted">{role.period}</p>
              </div>
              {(role.meta || role.summary) && (
                <p className="text-[13px] text-muted">
                  {[role.meta, role.summary].filter(Boolean).join(" · ")}
                </p>
              )}
              <ul className="text-[14px] leading-relaxed text-ink-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-projects">
          <h2 id="resume-projects">Projects</h2>
          {projects.map((project) => (
            <article key={project.slug} className="mt-3">
              <h3>{project.title}</h3>
              <p className="text-xs text-muted">{project.stack.join(", ")}</p>
              <ul className="text-[14px] leading-relaxed text-ink-2">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.repo && (
                <p className="text-[13px]">
                  <a href={project.repo}>{bareUrl(project.repo)}</a>
                </p>
              )}
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-skills">
          <h2 id="resume-skills">Skills</h2>
          <ul className="text-[14px] leading-relaxed text-ink-2">
            {skillGroups.map((group) => (
              <li key={group.category}>
                <strong className="font-bold text-ink">{group.category}:</strong>{" "}
                {skillLine(group)}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resume-education">
          <h2 id="resume-education">Education</h2>
          <p className="text-[14px] leading-relaxed text-ink-2">
            <strong className="font-bold text-ink">{education.degree}</strong> ·{" "}
            {education.institution} · {education.status}
          </p>
        </section>
      </article>

      <div className="statusline mt-2 rounded-[3px] print:hidden" aria-hidden="true">
        <span className="seg-mode">NORMAL</span>
        <span className="seg-strong hidden sm:inline">main</span>
        <span className="min-w-0 flex-1 truncate">~/prtf/resume.txt</span>
        <span className="hidden text-muted sm:inline">text</span>
        <span className="seg-strong">utf-8</span>
      </div>
    </Container>
  );
}
