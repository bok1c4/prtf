import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import { aiWorkflow } from "@/data";

function SubPane({
  title,
  summary,
  children,
}: {
  title: string;
  summary?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-[3px] border border-line bg-canvas-2 p-4">
      <h3 className="text-sm font-bold text-gb-aqua">
        <span aria-hidden="true" className="text-gb-bg4">
          ##{" "}
        </span>
        {title}
      </h3>
      {summary && (
        <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{summary}</p>
      )}
      <div className="mt-3 flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function ItemList({ items }: { items: { name: string; detail: string }[] }) {
  return (
    <dl className="space-y-2">
      {items.map((item) => (
        <div key={item.name} className="text-[13.5px]">
          <dt className="font-bold text-ink">
            <span aria-hidden="true" className="text-gb-bg4">
              -{" "}
            </span>
            {item.name}
          </dt>
          <dd className="pl-3 leading-relaxed text-ink-2">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AiWorkflow() {
  return (
    <Pane id="ai" title="~/ai-workflow.md" labelledBy="ai-title">
      <SectionHeader
        id="ai-title"
        command="cat ai-workflow.md"
        title="How I work with AI"
        lede={aiWorkflow.intro}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <SubPane title="loop" summary="Every task, every repository, the same six steps.">
          <ol className="space-y-2.5">
            {aiWorkflow.loop.map((step, index) => (
              <li
                key={step.step}
                className="grid grid-cols-[2.2rem_minmax(0,1fr)] gap-2 text-[14px]"
              >
                <span className="text-gb-yellow" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="font-bold text-ink">{step.step}</strong>
                  <span className="block text-ink-2">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </SubPane>

        <SubPane title="prompting" summary={aiWorkflow.prompting.summary}>
          <ul className="space-y-2">
            {aiWorkflow.prompting.practices.map((practice) => (
              <li
                key={practice}
                className="flex gap-2 text-[14px] leading-relaxed text-ink-2"
              >
                <span aria-hidden="true" className="text-gb-bg4">
                  -
                </span>
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </SubPane>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <SubPane title="claude code" summary={aiWorkflow.claudeCode.summary}>
          <ItemList items={aiWorkflow.claudeCode.items} />
        </SubPane>
        <SubPane title="mcp servers" summary={aiWorkflow.mcp.summary}>
          <ItemList items={aiWorkflow.mcp.items} />
        </SubPane>
        <SubPane
          title="environment"
          summary="The tools around the agent, all terminal-first."
        >
          <ul className="space-y-2">
            {aiWorkflow.environment.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[14px] leading-relaxed text-ink-2"
              >
                <span aria-hidden="true" className="text-gb-bg4">
                  -
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SubPane>
      </div>
    </Pane>
  );
}
