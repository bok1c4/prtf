import type { PersonalInfo, Positioning } from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolić",
  title: "Software Developer",
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
  taglineLead: "Software Developer",
  taglineFocus: "Backend-focused Full-Stack (Python, Go, PostgreSQL, React)",
  subline:
    "Based in Belgrade, Serbia · Remote friendly (CET) · Open to relocation within Europe · Looking for full-time or part-time backend, full-stack, or DevOps roles with flexible working hours · B2B contractor or employee",
  highlights: [
    "Odoo 16 modules in Python and PostgreSQL for Fairphone (2025 – present): carbon accounting and critical-material traceability",
    "NestJS, Go, and Rust services, with the React and Next.js frontends that consume them",
    "DevOps with security in mind: deploying and managing services, hardened Linux servers, Docker, CI/CD, monitoring",
    "Building for the web since 2022, from frontend internships to contract engineering",
  ],
  summary: [
    "Python/Odoo developer at Fairphone since 2025, building Odoo 16 modules in Python and PostgreSQL for carbon accounting and critical-material traceability; building for the web since 2022.",
    "I own features end to end, from stakeholder requirements to deployment, and also write Go and Rust services and take care of the DevOps side with security in mind: deploying and managing services, hardened Linux servers, Docker, CI/CD pipelines, and monitoring.",
  ],
  university:
    "BSc Software Engineering, Singidunum University, Belgrade. Expected 2027, alongside the work.",
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
    { label: "role", value: "Software Developer" },
    { label: "open to", value: "Backend, full-stack, or DevOps · full-time or part-time, flexible hours · remote friendly (CET) · relocation within Europe for hybrid roles · B2B contractor or employee" },
    { label: "based", value: "Belgrade, Serbia" },
    {
      label: "degree",
      value: "BSc Software Engineering, Singidunum University, expected 2027",
    },
  ],
};
