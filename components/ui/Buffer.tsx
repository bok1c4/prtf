import type { ReactNode } from "react";

export type BufferLine = { content: ReactNode; key: string };

/** Editor-buffer look: numbered gutter plus a lualine-style status bar.
 *  Rows are real block content, so wrapping lines keep their number. */
export default function Buffer({
  lines,
  file,
  filetype = "markdown",
  mode = "NORMAL",
}: {
  lines: BufferLine[];
  file: string;
  filetype?: string;
  mode?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[3px] border border-line-strong bg-canvas">
      <div className="buffer px-3 py-3 sm:px-4 sm:py-4">
        {lines.map((line, index) => (
          <div key={line.key} className="buffer-row">
            <span className="gutter" aria-hidden="true">
              {index + 1}
            </span>
            <div className="min-w-0">{line.content}</div>
          </div>
        ))}
      </div>
      <div className="statusline border-t border-line" aria-hidden="true">
        <span className="seg-mode">{mode}</span>
        <span className="seg-strong hidden sm:inline">main</span>
        <span className="min-w-0 flex-1 truncate">{file}</span>
        <span className="hidden text-muted sm:inline">{filetype}</span>
        <span className="seg-strong">
          {lines.length}:1
        </span>
      </div>
    </div>
  );
}
