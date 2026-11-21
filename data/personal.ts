import type { PersonalInfo, Positioning } from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolić",
  title: "Software Engineer",
  handle: "boris@prtf",
  email: "borisnikolic2302@gmail.com",
  location: "Belgrade, Serbia",
  links: [
    { label: "GitHub", href: "https://github.com/bok1c4", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/boris-nikolic-a44a2126a/",
      external: true,
    },
  ],
};

export const positioning: Positioning = {
  taglineLead: "Software Engineer",
  taglineFocus: "Backend-focused Full-Stack (Python, Go, PostgreSQL, React)",
  subline:
    "Based in Belgrade, Serbia · Remote friendly (CET) · Open to relocation within Europe · Looking for full-time or part-time backend, full-stack, or DevOps roles with flexible working hours · B2B contractor or employee",
  highlights: [
    "NestJS, Go, and Rust services, with the React and Next.js frontends that consume them",
    "In production at Fairphone (2025 – present): carbon accounting and critical-material traceability modules in Python and PostgreSQL",
    "DevOps with security in mind: deploying and managing services, hardened Linux servers, Docker, CI/CD, monitoring",
    "Building for the web since 2022, from frontend internships to contract engineering",
  ],
  summary: [
    "Software engineer with a backend focus: Python, Go, Rust, and PostgreSQL. Building for the web since 2022.",
    "I take features from stakeholder requirements to deployment, usually building something new while maintaining what is already in production, and I keep learning by building, at work and on my own projects. I build with AI coding agents daily, mostly Claude Code and Codex: I write the brief, and I read and verify every change.",
  ],
  university:
    "BSc Software Engineering, Singidunum University, Belgrade. Expected 2027, alongside the work; a master's degree is planned after.",
  person: [
    "Sim racing, Counter-Strike, and cars.",
    "The gym, trying to stay in shape.",
    "A good meal: pasta, or anything protein-rich.",
  ],
  contactLede:
    "Looking for full-time or part-time backend, full-stack, or DevOps roles with flexible working hours, remote friendly (CET), as a B2B contractor or an employee. Open to relocation within Europe for hybrid roles with a couple of office days a week. Email is the fastest way to reach me.",
  workingWith: [
    "Requirements gathered directly from the people who use the software, then turned into a scope both sides understand.",
    "Technical terms and trade-offs explained in plain language, so non-technical stakeholders can decide on priorities and timelines with the full picture.",
    "Modules and features shipped end to end: built, tested, reviewed in GitLab merge requests, and deployed to production.",
    "Alongside the stakeholders from the first requirement to delivery, so what ships matches how they actually work.",
  ],
  principles: [
    {
      title: "Model the domain before the endpoints",
      detail:
        "Schemas, states, and invariants come first. APIs and screens follow from them.",
    },
    {
      title: "Design for failure",
      detail:
        "Acknowledgments, retries, and idempotent steps, so a crash midway becomes a retry instead of a data gap.",
    },
    {
      title: "Measure the database",
      detail:
        "Query plans and real data volumes before optimizing. PostgreSQL usually has the answer.",
    },
    {
      title: "Keep boundaries clear",
      detail:
        "Layers and services that can be understood, tested, and changed on their own.",
    },
    {
      title: "AI writes, I answer for it",
      detail:
        "Agents work from written briefs and rules; every change is read, understood, and verified by me.",
    },
    {
      title: "Automate what would otherwise repeat",
      detail:
        "If something has to be done twice, it gets a script: server hardening, pipelines, reports.",
    },
  ],
  currently: [
    { label: "role", value: "Software Engineer" },
    { label: "open to", value: "Backend, full-stack, or DevOps · full-time or part-time, flexible hours · remote friendly (CET) · relocation within Europe for hybrid roles · B2B contractor or employee" },
    { label: "based", value: "Belgrade, Serbia" },
    {
      label: "degree",
      value: "BSc Software Engineering, Singidunum University, expected 2027",
    },
  ],
};
