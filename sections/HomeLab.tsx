import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import { homelab } from "@/data";

export default function HomeLab() {
  return (
    <Pane id="homelab" title="~/homelab" labelledBy="homelab-title">
      <SectionHeader
        id="homelab-title"
        path="~/homelab"
        command="cat README.md"
        title="Home lab"
        lede={homelab.intro}
      />
      <dl className="grid gap-x-8 gap-y-3 text-[14px] md:grid-cols-2">
        {homelab.items.map((item) => (
          <div key={item.label} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
            <dt className="text-gb-aqua">{item.label}:</dt>
            <dd className="leading-relaxed text-ink-2">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </Pane>
  );
}
