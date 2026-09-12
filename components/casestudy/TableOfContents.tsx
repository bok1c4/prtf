/** aerial-style outline pane for a case study. */
export default function TableOfContents({
  sections,
}: {
  sections: { id: string; title: string }[];
}) {
  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <div className="relative sticky top-16 rounded-[3px] border border-line-strong bg-canvas px-4 py-4">
        <span className="pane-title" aria-hidden="true">
          ┤ aerial ├
        </span>
        <ol className="space-y-1 text-[13px]">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block truncate py-0.5 text-muted transition-colors hover:text-gb-yellow"
              >
                <span aria-hidden="true" className="text-gb-bg4">
                  {index === sections.length - 1 ? "└ " : "├ "}
                </span>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
