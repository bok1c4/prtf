import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import { positioning } from "@/data";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[3px] border border-line bg-canvas-2 p-4">
      <h3 className="text-sm font-bold text-gb-aqua">
        <span aria-hidden="true" className="text-gb-bg4">
          ##{" "}
        </span>
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <Pane id="about" title="~/about.md" labelledBy="about-title">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-8">
        <div>
          <SectionHeader id="about-title" command="cat about.md" title="About" />
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-2">
            {positioning.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-4 self-end">
          <Card title="university">
            <p className="text-[14px] leading-relaxed text-ink-2">
              {positioning.university}
            </p>
          </Card>
          {positioning.person.length > 0 && (
            <Card title="off the keyboard">
              <ul className="space-y-1.5">
                {positioning.person.map((fact) => (
                  <li key={fact} className="flex gap-2 text-[14px] text-ink-2">
                    <span aria-hidden="true" className="text-gb-bg4">
                      -
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>

      <h3 className="mt-8 text-sm font-bold text-gb-aqua">
        <span aria-hidden="true" className="text-gb-bg4">
          ##{" "}
        </span>
        How I work
      </h3>
      <dl className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {positioning.principles.map((principle) => (
          <div
            key={principle.title}
            className="rounded-[3px] border border-line bg-canvas-2 p-3.5"
          >
            <dt className="text-[14px] font-bold text-ink">{principle.title}</dt>
            <dd className="mt-1 text-[13.5px] leading-relaxed text-ink-2">
              {principle.detail}
            </dd>
          </div>
        ))}
      </dl>
    </Pane>
  );
}
