import type { Education, Role } from "@/types";

/** Newest first, wording as on the CV. */
export const roles: Role[] = [
  {
    title: "Software Developer (B2B contract)",
    company: "Fairphone",
    period: "2025 – Present",
    meta: "Contracted via KIBNET, Belgrade",
    summary: "ERP engineering for supply-chain and sustainability operations.",
    highlights: [
      "FairMaterials (written from scratch, live since August 2026): turns received purchases into grams of critical materials such as gold, cobalt, and tin via time-versioned recipes, allocated across fair-sourcing programs with largest-remainder rounding.",
      "GHG carbon accounting: backport of Odoo's ESG module from v19 to v16 that calculates scope 1–3 emissions from purchase, supply, and accounting data; background rebuild jobs and materialized SQL views feed the dashboards.",
      "Prototyped a change data capture API for external systems such as data warehouses: cursor-based batches with in-order client acknowledgements, so no record is skipped.",
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
    title: "Frontend Developer (part-time internship)",
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
    highlights: ["Built and styled websites in HTML and CSS."],
  },
];

export const education: Education = {
  degree: "BSc Software Engineering",
  institution: "Singidunum University, Belgrade",
  status: "Expected 2027",
};
