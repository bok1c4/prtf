import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data";

/** `tree skills/` rendered as nested lists with decorative prefixes. */
export default function Capabilities() {
  return (
    <Pane id="capabilities" title="~/skills" labelledBy="capabilities-title">
      <SectionHeader
        id="capabilities-title"
        command="tree skills/"
        title="Technologies, grouped by how I've used them"
        lede="First-level items are in regular use on client and personal work; entries marked (also) are used less often or in specific projects."
      />
      <p className="text-[14px] text-gb-blue" aria-hidden="true">
        skills/
      </p>
      <ul className="text-[14px]">
        {skillGroups.map((group, groupIndex) => {
          const lastGroup = groupIndex === skillGroups.length - 1;
          const items = [
            ...group.primary.map((item) => ({ name: item.name, also: false })),
            ...(group.secondary ?? []).map((item) => ({
              name: item.note ? `${item.name} (${item.note})` : item.name,
              also: true,
            })),
          ];
          return (
            <li key={group.category}>
              <p className="pt-2">
                <span aria-hidden="true" className="text-gb-bg4">
                  {lastGroup ? "└── " : "├── "}
                </span>
                <span className="font-bold text-gb-blue">{group.category}/</span>
              </p>
              <p className="pl-[4ch] text-[13px] leading-relaxed text-muted">
                {group.usage}
              </p>
              <ul>
                {items.map((item, itemIndex) => {
                  const lastItem = itemIndex === items.length - 1;
                  return (
                    <li key={item.name} className={item.also ? "text-muted" : "text-ink"}>
                      <span aria-hidden="true" className="text-gb-bg4">
                        {lastGroup ? "    " : "│   "}
                        {lastItem ? "└── " : "├── "}
                      </span>
                      {item.name}
                      {item.also && (
                        <span className="text-gb-bg4">
                          {" "}
                          (also)
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Pane>
  );
}
