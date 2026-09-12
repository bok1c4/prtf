import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import { education, timeline } from "@/data";

/** The story as `git log --oneline`, newest commit first. */
export default function Experience() {
  const commits = [...timeline].reverse();
  return (
    <Pane id="experience" title="~/experience.md" labelledBy="experience-title">
      <SectionHeader
        id="experience-title"
        command="git log --oneline story"
        title="How I got here"
        lede="From school robots to shipping software, one commit at a time."
      />
      <ol className="space-y-3 text-[14px]" aria-label="Story, newest first">
        {commits.map((entry, index) => (
          <li
            key={entry.title}
            className="grid gap-1 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-3"
          >
            <span className="text-gb-yellow" aria-hidden="true">
              {index === 0 ? "HEAD -> main" : `HEAD~${index}`}
            </span>
            <span>
              <span className="text-ink">
                <span className="text-gb-green">{entry.ref}:</span> {entry.title}
              </span>
              <span className="block leading-relaxed text-ink-2">{entry.detail}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-[13.5px] text-muted">
        <span className="text-gb-blue">education:</span> {education.degree},{" "}
        {education.status.toLowerCase()}
      </p>
    </Pane>
  );
}
