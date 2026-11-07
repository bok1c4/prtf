import type { Education, Role } from "@/types";

/** Newest first, wording as on the CV. */
export const roles: Role[] = [
  {
    title: "Software Developer (B2B contract)",
    company: "Fairphone",
    period: "2025 – Present",
    meta: "Contracted via KIBNET, Belgrade",
    summary:
      "Python · Odoo 16 · PostgreSQL · OWL · GitLab. Responsible for the EU-side sustainability modules, both in production.",
    highlights: [
      "FairMaterials, designed and built from scratch (live since August 2026): turns received purchase lines into grams of gold, cobalt, tin and tungsten through time-versioned product recipes, splits them across fair-sourcing programs with largest-remainder rounding at 1 µg, and posts them to a signed material ledger.",
      "GHG carbon accounting: backported Odoo's ESG module from v19 to v16 and built finance and supply collectors that turn journal items and received purchase lines into kgCO₂e across GHG Protocol scopes 1–3, using rule-matched emission factors and per-period currency rates.",
      "Resumable background jobs: chunked rebuilds under PostgreSQL advisory locks, an atomic UPDATE … RETURNING job claim and idempotent replays; new rows are swapped in one step, so a failed run never leaves a period empty.",
      "Reporting: OWL dashboards on JSON routes backed by materialized SQL views refreshed in dependency order; FairMaterials dashboard load cut from 2.8 s to 0.55 s.",
      "CDC API (prototype): external systems such as data warehouses read Odoo changes in cursor-based batches, acknowledged in order so no change is skipped.",
      "Full cycle with stakeholders: requirements, plain-language trade-offs, GitLab merge-request review, deployment to production.",
    ],
    note: "Client-owned, licensed software; details limited by agreement.",
  },
  {
    title: "Independent Full-Stack Developer",
    company: "Self-directed",
    period: "2024",
    meta: "Belgrade",
    highlights: [
      "Moved from frontend into backend: built NestJS servers and REST APIs with auth and PostgreSQL, plus the React frontends consuming them.",
    ],
  },
  {
    title: "Frontend Developer (part-time)",
    company: "High school partner company",
    period: "2023",
    meta: "Zaječar",
    highlights: [
      "Contributed to a production React codebase: built UI components and styling to spec.",
      "Prepared request data for backend APIs and handled responses and state on the frontend.",
    ],
  },
  {
    title: "Web Development Intern (school programme)",
    company: "Local team, Zaječar",
    period: "2022",
    meta: "Alongside school",
    highlights: ["Built and styled websites in HTML, CSS, and JavaScript."],
  },
];

export const education: Education = {
  degree: "BSc Software Engineering",
  institution: "Singidunum University, Belgrade",
  status: "Expected 2027",
};

/** Spoken languages, shown on /resume under Education. */
export const languages: string[] = [
  "English: fluent, all work communication in English",
  "Serbian: native",
];
