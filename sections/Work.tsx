import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import Prompt from "@/components/ui/Prompt";
import ProjectCard from "@/components/ProjectCard";
import { positioning, projects } from "@/data";

export default function Work() {
  return (
    <Pane id="work" title="~/work" labelledBy="work-title">
      <SectionHeader
        id="work-title"
        path="~/work"
        command="ls -la"
        title="Projects"
        lede="Four projects, three with public code. Client work is under Experience."
      />
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>

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
    </Pane>
  );
}
