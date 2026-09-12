import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Prompt from "@/components/ui/Prompt";
import Tag from "@/components/ui/Tag";
import CaseStudySection from "@/components/casestudy/CaseStudySection";
import DecisionList from "@/components/casestudy/DecisionList";
import PrevNext from "@/components/casestudy/PrevNext";
import TableOfContents from "@/components/casestudy/TableOfContents";
import {
  Bullets,
  LinkList,
  Paragraphs,
  Steps,
  TagList,
} from "@/components/casestudy/Lists";
import { CaseStudyDiagram } from "@/components/diagrams";
import { kindLabel } from "@/components/ProjectCard";
import { caseStudies, getCaseStudy, SITE } from "@/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.seoDescription,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${study.slug}`,
      title: `${study.title} · ${SITE.name}`,
      description: study.seoDescription,
    },
  };
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-[14px]">
      <dt className="inline text-muted">{label}: </dt>
      <dd className="inline text-ink">{value}</dd>
    </div>
  );
}

type Section = { id: string; title: string; body: ReactNode };

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next =
    index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  const sections: Section[] = [];
  const add = (id: string, title: string, body: ReactNode, include = true) => {
    if (include) sections.push({ id, title, body });
  };

  add("context", "Problem and context", <Paragraphs items={study.context} />, study.context.length > 0);
  add("goals", "Goals", <Bullets items={study.goals} />, study.goals.length > 0);
  add(
    "role",
    "My role",
    <p className="text-[15px] leading-relaxed text-ink-2">{study.roleDetail}</p>,
  );
  add("stakeholders", "Users and stakeholders", <Bullets items={study.stakeholders} />, study.stakeholders.length > 0);
  add("features", "What was built", <Bullets items={study.features} />, study.features.length > 0);
  add(
    "architecture",
    "Technical architecture",
    <>
      <Bullets items={study.architecture} />
      <CaseStudyDiagram id={study.diagram} />
    </>,
    study.architecture.length > 0 || Boolean(study.diagram),
  );
  add("data-flow", "Data flow", <Steps items={study.dataFlow} />, study.dataFlow.length > 0);
  add("implementation", "Key implementation details", <Bullets items={study.implementation} />, study.implementation.length > 0);
  add("decisions", "Engineering decisions", <DecisionList decisions={study.decisions} />, study.decisions.length > 0);
  add("challenges", "Challenges and trade-offs", <Bullets items={study.challenges} />, study.challenges.length > 0);
  add("results", "Results and impact", <Bullets items={study.results} />, study.results.length > 0);
  add("technologies", "Technologies", <TagList items={study.stack} />, study.stack.length > 0);
  add("links", "Links", <LinkList links={study.links} />, study.links.length > 0);

  const context = [kindLabel[study.kind], study.client].filter(Boolean).join(" · ");

  return (
    <article>
      <Container width="full" className="py-6 sm:py-8">
        <div className="pane">
          <span className="pane-title" aria-hidden="true">
            ┤ ~/work/{study.slug}.md ├
          </span>
          <Prompt path="~/work" command={`nvim ${study.slug}.md`} />
          <p className="mt-3 text-xs text-muted">
            <Link href="/#work" className="link-inline">
              case study
            </Link>{" "}
            · {context.toLowerCase()}
          </p>
          <h1 className="mt-2 max-w-[30ch] text-2xl leading-tight font-bold text-gb-yellow sm:text-3xl">
            <span aria-hidden="true" className="text-gb-bg4">
              #{" "}
            </span>
            {study.title}
          </h1>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-relaxed text-ink-2">
            {study.summary}
          </p>
          {study.note && (
            <p className="mt-3 max-w-[70ch] text-[13px] leading-relaxed text-muted">
              <span aria-hidden="true" className="text-gb-bg4">
                {"// "}
              </span>
              {study.note}
            </p>
          )}
          <dl className="mt-5 grid gap-x-8 gap-y-2 border-t border-dashed border-line pt-4 sm:grid-cols-2">
            <Fact label="role" value={study.role} />
            <Fact label="context" value={study.client ?? kindLabel[study.kind]} />
            {study.period && <Fact label="period" value={study.period} />}
            <div className="text-[14px] sm:col-span-2">
              <dt className="inline text-muted">stack: </dt>
              <dd className="inline">
                <span className="inline-flex flex-wrap gap-x-2 gap-y-1 align-middle">
                  {(study.stack.length ? study.stack : study.tags).map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8">
          <TableOfContents
            sections={sections.map(({ id, title }) => ({ id, title }))}
          />
          <div className="min-w-0">
            <div className="pane">
              <span className="pane-title" aria-hidden="true">
                ┤ buffer ├
              </span>
              {sections.map((section) => (
                <CaseStudySection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                >
                  {section.body}
                </CaseStudySection>
              ))}
              <PrevNext prev={prev} next={next} />
            </div>
            <div className="statusline mt-2 rounded-[3px]" aria-hidden="true">
              <span className="seg-mode">NORMAL</span>
              <span className="seg-strong hidden sm:inline">main</span>
              <span className="min-w-0 flex-1 truncate">~/prtf/work/{study.slug}.md</span>
              <span className="hidden text-muted sm:inline">markdown</span>
              <span className="seg-strong">{sections.length} sections</span>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
