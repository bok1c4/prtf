import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Prompt from "@/components/ui/Prompt";
import PrintButton from "@/components/PrintButton";
import {
  education,
  personal,
  resume,
  roles,
  SITE,
  skillGroups,
  timeline,
} from "@/data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Boris Nikolic, software developer: backend-focused full-stack, Odoo modules and data systems on PostgreSQL, Go and Python services, React and Next.js, AI as a daily pair.",
  alternates: { canonical: "/resume" },
};

const bareUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Skills as "Category: a, b, c; also d, e", straight from the site's groups. */
function skillLine(group: (typeof skillGroups)[number]) {
  const primary = group.primary.map((item) => item.name).join(", ");
  const secondary = (group.secondary ?? []).map((item) => item.name).join(", ");
  return secondary ? `${primary}; also ${secondary}` : primary;
}

export default function ResumePage() {
  const path = timeline.map((entry) => entry.title).join(" → ");

  return (
    <Container width="prose" className="py-6 sm:py-8 print:max-w-none print:px-0 print:py-0">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div>
          <Prompt command="cat resume.txt" />
          <p className="mt-1 text-xs text-muted">
            Same data as the site. ATS-friendly, prints to A4. Updated {resume.updated}.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href={resume.url} download size="sm">
            download pdf
          </ButtonLink>
          <PrintButton />
        </div>
      </div>

      <article className="resume rounded-[3px] border border-line-strong bg-canvas px-5 py-6 text-ink sm:px-8 sm:py-8 print:rounded-none print:border-0 print:p-0">
        <header>
          <h1 className="text-2xl leading-tight font-bold">{personal.name}</h1>
          <p className="mt-1 text-[15px] text-ink-2">{resume.headline}</p>
          <p className="mt-2 text-[13.5px] text-ink-2">
            {personal.location} ·{" "}
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
            {personal.links.map((link) => (
              <span key={link.href}>
                {" "}
                · <a href={link.href}>{bareUrl(link.href)}</a>
              </span>
            ))}{" "}
            · <a href={SITE.url}>{bareUrl(SITE.url)}</a>
          </p>
        </header>

        <section aria-labelledby="resume-summary">
          <h2 id="resume-summary">Summary</h2>
          <p className="text-[14px] leading-relaxed text-ink-2">{resume.summary}</p>
        </section>

        <section aria-labelledby="resume-experience">
          <h2 id="resume-experience">Experience</h2>
          {roles.map((role) => (
            <article key={`${role.company}-${role.title}`} className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3>
                  {role.title}, {role.company}
                </h3>
                <p className="text-[13px] text-muted">{role.period}</p>
              </div>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{role.summary}</p>
              <ul className="text-[14px] leading-relaxed text-ink-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {role.note && (
                <p className="mt-1.5 text-[13px] text-muted">{role.note}</p>
              )}
            </article>
          ))}
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">{resume.note}</p>
        </section>

        <section aria-labelledby="resume-projects">
          <h2 id="resume-projects">Projects</h2>
          {resume.projects.map((project) => (
            <article key={project.name} className="mt-3">
              <h3>{project.name}</h3>
              <p className="text-xs text-muted">{project.stack}</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-2">
                {project.description}
                {project.link && (
                  <>
                    {" "}
                    <a href={project.link}>{bareUrl(project.link)}</a>
                  </>
                )}
              </p>
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
            {education.status}
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted print:hidden">
            Path: {path}.
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
