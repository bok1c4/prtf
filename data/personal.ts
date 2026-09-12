import type { PersonalInfo, Positioning } from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolic",
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
  eyebrow: "Software developer · Belgrade, Serbia",
  headline: "I build platforms and ship software",
  headlineEmphasis: "with AI agents in the loop.",
  story:
    "Started with robots in middle school, got hooked on Linux in a VM, learned the trade through Hack The Box and frontend work in high school, and I've been building software professionally for the past two years while finishing a Software Engineering degree.",
  summary: [
    "I write software for work and for fun. I've been building software professionally for the past two years, and most of that work has been backend and data systems: Odoo modules, ERP data replication, and the services around them. Beside the home lab, the rest of the time goes into finishing university.",
    "AI agents are part of the everyday loop: written briefs and role prompts, Claude Code and Codex with plugins and MCP servers, and my own read of every change before it ships. I love what I do.",
  ],
  university:
    "BSc Software Engineering. Enrolled in 2023, finishing by the end of 2027, working as a software developer alongside it.",
  person: [
    "Sim racing, Counter-Strike, and cars.",
    "The gym, trying to stay in shape.",
    "A good meal: pasta, or anything protein-rich.",
  ],
  workingWith: [
    "Direct communication with stakeholders, no layer in between.",
    "Explaining technical terms and trade-offs in plain language to non-technical people.",
    "Working alongside the people who use the software, from the first requirement to delivery.",
  ],
  capabilities: [
    {
      title: "Backend services and APIs",
      detail: "Go, Python, NestJS; REST design, auth, gateway-fronted services",
    },
    {
      title: "Odoo modules and PostgreSQL",
      detail: "ERP modules, query optimization, triggers, reporting over large datasets",
    },
    {
      title: "ERP integration and data replication",
      detail: "Odoo data into analytical warehouses, built for reliable delivery",
    },
    {
      title: "AI-assisted engineering",
      detail: "Claude Code, role prompts, plugins, MCP servers for pipelines and infrastructure",
    },
    {
      title: "Full-stack delivery",
      detail:
        "React, Angular, and Next.js frontends; Express, Laravel, Django, and Spring Boot backends; JWT auth, payments, admin tooling",
    },
    {
      title: "Linux and self-hosting",
      detail: "Ubuntu servers, iptables firewalls, SSH hardening, monitoring, Docker Compose",
    },
    {
      title: "Working with stakeholders",
      detail:
        "Direct communication, technical terms explained in plain language to non-technical people, delivery against what they actually need",
    },
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
      title: "AI in the loop, developer accountable",
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
    { label: "based", value: "Belgrade, Serbia (CET)" },
    { label: "degree", value: "BSc Software Engineering, 2023 – 2027" },
  ],
  short:
    "Software Developer · Backend-focused full-stack · Go, Python, Rust, TypeScript, PostgreSQL, Odoo. Two years of professional work, final year of a Software Engineering degree, AI agents (Claude Code, Codex, MCP tools) in the loop.",
};
