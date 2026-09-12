import type { Education, Role, TimelineEntry } from "@/types";

/** Current role, at the level the engagement allows. Used by the resume. */
export const roles: Role[] = [
  {
    company: "Fairphone (contract)",
    title: "Software Developer",
    period: "2025 – Present",
    summary:
      "Odoo modules and data systems for supply-chain and sustainability operations.",
    highlights: [
      "Built Odoo modules (Python, PostgreSQL) for sustainability and procurement operations, replacing manual, hand-kept tracking with automated workflows and reporting over large datasets.",
      "Designed and built the replication of ERP data into analytical warehouses, with reliable delivery as the core requirement.",
      "Designed the architecture of a customer-facing web shop on top of Odoo: an API gateway in front of the ERP and separate frontend services.",
      "Worked directly with stakeholders: gathered requirements from the people doing the work, explained technical terms and trade-offs in plain language to non-technical colleagues, and delivered against what they needed.",
      "Work with AI agents in the delivery loop: Claude Code and Codex with per-repository instructions, role prompts, plugins, and MCP servers for pipeline and infrastructure automation.",
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
      "Hack The Box is where Linux, Git, Nmap, and Kali Linux really came from. Same years: custom frontends in HTML, CSS, and JavaScript, then React.",
  },
  {
    ref: "feat",
    title: "software engineering, university",
    detail: "BSc Software Engineering: enrolled in 2023, finishing by the end of 2027.",
  },
  {
    ref: "feat",
    title: "software developer",
    detail:
      "Two years of building software for a living. Today: Odoo modules and data systems for Fairphone, with AI agents in the loop.",
  },
];

export const education: Education = {
  degree: "Bachelor of Software Engineering",
  status: "Enrolled 2023, finishing by the end of 2027",
};
