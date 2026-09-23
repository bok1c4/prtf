import type { Education, Role } from "@/types";

/** Newest first, wording as on the CV. */
export const roles: Role[] = [
  {
    title: "Software Developer (B2B contract)",
    company: "Fairphone",
    period: "2025 – Present",
    meta: "Freelance B2B",
    summary: "ERP engineering for supply-chain and sustainability operations.",
    highlights: [
      "Built Odoo modules (Python, PostgreSQL) for sustainability and procurement teams, replacing manual, hand-kept tracking with automated workflows and reporting over large datasets.",
      "Designed and built replication of ERP data into analytical warehouses, with reliable delivery as the core requirement.",
      "Designed the architecture for a customer-facing web shop on top of Odoo: an API gateway in front of the ERP with separate frontend services.",
      "Worked directly with stakeholders: gathered requirements, explained technical trade-offs in plain language, and shipped tested features end to end to the production VPS.",
    ],
    note: "Client-owned, licensed software; details limited by agreement.",
  },
  {
    title: "Independent Full-Stack Developer",
    company: "Self-directed",
    period: "2024",
    meta: "Belgrade",
    highlights: [
      "Moved from frontend into backend: built Node.js/Express servers and REST APIs with auth and PostgreSQL, plus the React frontends consuming them.",
    ],
  },
  {
    title: "Frontend Developer (part-time internship)",
    company: "Local software company",
    period: "2023",
    meta: "Zaječar · alongside high school",
    highlights: [
      "Contributed to a production React codebase: built UI components and styling to spec.",
      "Prepared request data for backend APIs and handled responses and state on the frontend.",
      "Contributed to C# codebases on .NET in a Windows environment.",
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
