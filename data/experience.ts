import type { Education, Role, TimelineEntry } from "@/types";

/** Current role, at the level the engagement allows. Used by the resume. */
export const roles: Role[] = [
  {
    company: "Fairphone (contract)",
    title: "Software Developer",
    period: "2025 – Present",
    summary:
      "Data-heavy ERP engineering for supply-chain and sustainability operations.",
    highlights: [
      "Built Odoo modules (Python, PostgreSQL) for sustainability and procurement operations, replacing manual, hand-kept tracking with automated workflows and reporting over large datasets.",
      "Designed and built the replication of ERP data into analytical warehouses, with reliable delivery as the core requirement.",
      "Designed the architecture of a customer-facing web shop on top of Odoo: an API gateway in front of the ERP and separate frontend services.",
      "Worked directly with stakeholders: gathered requirements from the people doing the work, explained technical trade-offs in plain language, and shipped modules and features end to end, tested and tailored to the production VPS.",
    ],
    note: "Client-owned, licensed software; details limited by agreement.",
  },
];

/** The story, oldest first. Rendered newest first like `git log`. */
export const timeline: TimelineEntry[] = [
  {
    ref: "init",
    title: "robots, middle school",
    detail:
      "First programs, written for school robots in a language long since forgotten. The interest stuck.",
  },
  {
    ref: "feat",
    title: "linux in a vm",
    detail: "Got hooked on Linux running in virtual machines on Windows 10.",
  },
  {
    ref: "feat",
    title: "hack the box, high school",
    detail:
      "Hack The Box is where Linux, Git, Nmap, and Kali Linux really came from. Same years: C# and .NET systems, and custom frontends in HTML, CSS, and JavaScript, then React.",
  },
  {
    ref: "feat",
    title: "software engineering, university",
    detail: "BSc Software Engineering: enrolled in 2023, finishing by the end of 2027.",
  },
  {
    ref: "feat",
    title: "frontend developer",
    detail:
      "First year of professional work: frontend only, building web frontends, Angular included.",
  },
  {
    ref: "feat",
    title: "backend servers",
    detail:
      "Got introduced to backend servers while the paid work was still frontend websites.",
  },
  {
    ref: "feat",
    title: "software developer",
    detail:
      "Frontend and backend at once since then: full stack. Four years of professional experience in software development. Today: Odoo modules and data systems for Fairphone, with AI as a daily pair.",
  },
];

export const education: Education = {
  degree: "Bachelor of Software Engineering",
  status: "Enrolled 2023, finishing by the end of 2027",
};
