import Link from "next/link";
import type { CaseStudy } from "@/types";

function Card({
  study,
  direction,
}: {
  study: CaseStudy;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group flex flex-col rounded-[3px] border border-line bg-canvas-2 p-3.5 transition-colors hover:border-accent ${
        direction === "next" ? "sm:text-right" : ""
      }`}
    >
      <span className="text-xs text-muted">
        {direction === "prev" ? "← prev" : "next →"}
      </span>
      <span className="mt-1 text-[14px] font-bold text-ink group-hover:text-accent">
        {study.title}
      </span>
    </Link>
  );
}

export default function PrevNext({
  prev,
  next,
}: {
  prev?: CaseStudy;
  next?: CaseStudy;
}) {
  return (
    <nav
      aria-label="More case studies"
      className="mt-10 border-t border-dashed border-line pt-6"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? <Card study={prev} direction="prev" /> : <div />}
        {next ? <Card study={next} direction="next" /> : <div />}
      </div>
      <p className="mt-4 text-sm">
        <Link href="/#work" className="link-inline">
          cd ~/work
        </Link>
      </p>
    </nav>
  );
}
