import type { Metadata } from "next";
import Link from "next/link";
import {
  personal,
  experience,
  projects,
  education,
  resume,
} from "@/data";

export const metadata: Metadata = {
  title: `${personal.name} — Resume`,
  description: personal.bio,
};

export default function Resume() {
  return (
    <>
      <style>{`
        @page { size: A4; margin: 14mm; }
        @media print {
          html, body { background: #fff !important; }
          .no-print { display: none !important; }
          a { color: inherit; text-decoration: none; }
        }
      `}</style>

      <div className="min-h-screen bg-white text-neutral-900 font-sans">
        <div className="no-print sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-neutral-200">
          <div className="mx-auto max-w-3xl px-8 py-3 flex items-center justify-between text-[12px]">
            <Link
              href="/"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              ← Back to portfolio
            </Link>
            <a
              href={resume.url}
              download
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 hover:bg-neutral-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-8 py-10 print:px-0 print:py-0 text-[13px] leading-relaxed">
          <header className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">
              {personal.name}
            </h1>
            <p className="text-neutral-700">{personal.title}</p>
            <p className="mt-2 text-[12px] text-neutral-600">
              {personal.location}
              {" · "}
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              {personal.links.map((link) => (
                <span key={link.label}>
                  {" · "}
                  <a href={link.url}>{link.label}</a>
                </span>
              ))}
            </p>
          </header>

          <p className="mb-6 text-neutral-800">{personal.bio}</p>

          <Section title="Experience">
            {experience.map((e) => (
              <div key={e.company} className="mb-4 last:mb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">
                    {e.role} · {e.company}
                  </h3>
                  <span className="text-[12px] text-neutral-600 whitespace-nowrap">
                    {e.period}
                  </span>
                </div>
                <p className="text-neutral-700 mt-1">{e.description}</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-800">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Projects">
            {projects.map((p) => (
              <div key={p.title} className="mb-3 last:mb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-[12px] text-neutral-600 whitespace-nowrap">
                    {p.tags.join(" · ")}
                  </span>
                </div>
                {p.context && (
                  <p className="text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    {p.context}
                  </p>
                )}
                <p className="text-neutral-800 mt-0.5">{p.description}</p>
              </div>
            ))}
          </Section>

          <Section title="Education">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">{education.degree}</h3>
              <span className="text-[12px] text-neutral-600 whitespace-nowrap">
                {education.status}
              </span>
            </div>
          </Section>

        </div>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 border-b border-neutral-300 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
