import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import Prompt from "@/components/ui/Prompt";
import SmartLink from "@/components/ui/SmartLink";
import ProjectCard from "@/components/ProjectCard";
import { featuredCaseStudies, moreWork, positioning, workNote } from "@/data";

export default function Work() {
  return (
    <Pane id="work" title="~/work" labelledBy="work-title">
      <SectionHeader
        id="work-title"
        path="~/work"
        command="ls -la"
        title="Case studies"
        lede="Two entries: client work on Odoo for Fairphone, and a full-stack personal project. The client page says only what the engagement allows."
      />
      <ul className="divide-y divide-line border-y border-line">
        {featuredCaseStudies.map((study) => (
          <ProjectCard key={study.slug} study={study} />
        ))}
      </ul>

      <div className="mt-8">
        <Prompt path="~/projects" command="ls | wc -l" />
        <p className="mt-1 text-[14px] leading-relaxed">
          <span className="font-bold text-gb-yellow">{workNote.count}</span>{" "}
          <span className="text-ink-2">{workNote.detail}</span>
        </p>
      </div>

      <div className="mt-8">
        <Prompt path="~/work" command="cat working-with-people.md" />
        <h3 className="mt-2 text-sm font-bold text-gb-aqua">
          <span aria-hidden="true" className="text-gb-bg4">
            ##{" "}
          </span>
          Working with people
        </h3>
        <ul className="mt-2 space-y-1.5">
          {positioning.workingWith.map((item) => (
            <li key={item} className="flex gap-2 text-[14px] leading-relaxed text-ink-2">
              <span aria-hidden="true" className="text-gb-bg4">
                -
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {moreWork.length > 0 && (
        <div className="mt-8">
          <Prompt path="~/work" command="ls -la more/" />
          <h3 className="mt-2 text-sm font-bold text-gb-aqua">
            <span aria-hidden="true" className="text-gb-bg4">
              ##{" "}
            </span>
            Also built
          </h3>
          <ul className="mt-2 divide-y divide-line border-y border-line">
            {moreWork.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
              >
                <div>
                  <h4 className="text-[14px] font-bold text-ink">
                    {item.link ? (
                      <SmartLink href={item.link.href} external className="link-inline">
                        {item.title}
                      </SmartLink>
                    ) : (
                      item.title
                    )}
                  </h4>
                  <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-2">
                    {item.description}
                  </p>
                </div>
                <p className="text-xs text-muted sm:pt-0.5 sm:text-right">
                  {item.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Pane>
  );
}
