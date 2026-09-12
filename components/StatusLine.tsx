"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** lualine-style status bar fixed to the bottom of the viewport.
 *  Tracks the section in view on the home page and the scroll position. */
export default function StatusLine() {
  const pathname = usePathname();
  const [section, setSection] = useState<string>("");
  const [percent, setPercent] = useState<string>("Top");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    if (sections.length === 0) {
      setSection("");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return setPercent("All");
      const ratio = window.scrollY / max;
      setPercent(
        ratio <= 0.01 ? "Top" : ratio >= 0.99 ? "Bot" : `${Math.round(ratio * 100)}%`,
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const file =
    pathname === "/"
      ? `~/prtf/${section || "home"}.md`
      : `~/prtf${pathname.replace(/\/$/, "")}.md`;

  return (
    <div
      className="statusline fixed inset-x-0 bottom-0 z-40 border-t border-line print:hidden"
      aria-hidden="true"
    >
      <span className="seg-mode">NORMAL</span>
      <span className="seg-strong hidden sm:inline">main</span>
      <span className="min-w-0 flex-1 truncate">{file}</span>
      <span className="hidden text-muted md:inline">? help</span>
      <span className="hidden text-muted md:inline">: shell</span>
      <span className="seg-strong hidden sm:inline">utf-8</span>
      <span className="seg-accent">{percent}</span>
    </div>
  );
}
