import Link from "next/link";
import { personal } from "@/data";

export const windows = [
  { href: "/", label: "home", key: "h" },
  { href: "/#work", label: "work", key: "w" },
  { href: "/#experience", label: "exp", key: "e" },
  { href: "/#capabilities", label: "skills", key: "s" },
  { href: "/#ai", label: "ai", key: "a" },
  { href: "/#homelab", label: "lab", key: "l" },
  { href: "/#contact", label: "contact", key: "c" },
];

/** tmux-style window list. The tab strip scrolls on narrow screens;
 *  the session name and the resume link stay put. */
export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur print:hidden">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-11 w-full max-w-[1200px] items-center gap-2 px-3 text-[13px] sm:px-5"
      >
        <Link
          href="/"
          className="shrink-0 rounded-sm bg-gb-green px-2 py-0.5 font-bold text-canvas"
        >
          [prtf]
        </Link>
        <ul className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto [scrollbar-width:none]">
          {windows.map((w, index) => (
            <li key={w.href} className="shrink-0">
              <Link
                href={w.href}
                className="rounded-sm px-2 py-0.5 text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <span className="text-muted">{index}:</span>
                {w.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="hidden shrink-0 text-muted md:inline">
          {personal.handle}
        </span>
        <Link
          href="/resume"
          className="shrink-0 rounded-sm border border-line-strong px-2 py-0.5 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <span className="text-muted">[r]</span> resume
        </Link>
      </nav>
    </header>
  );
}
