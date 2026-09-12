import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    usage:
      "Go for services and CLIs, Python for Odoo and data tooling, Rust for a client platform, TypeScript across NestJS and Next.js, SQL daily in PostgreSQL.",
    primary: [
      { name: "Go" },
      { name: "Python" },
      { name: "Rust" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
    secondary: [
      { name: "JavaScript" },
      { name: "Java", note: "university projects" },
      { name: "PHP", note: "university projects" },
      { name: "C/C++", note: "personal systems projects" },
    ],
  },
  {
    category: "Backend and APIs",
    usage:
      "Odoo module development, layered Go services, NestJS services, and gateway-fronted APIs with JWT auth and role-based access.",
    primary: [
      { name: "Odoo module development" },
      { name: "Go (Gin, chi)" },
      { name: "NestJS / Node.js" },
      { name: "REST API design" },
      { name: "JWT auth and RBAC" },
    ],
    secondary: [
      { name: "Stripe integration" },
      { name: "Prisma" },
      { name: "API gateway pattern" },
    ],
  },
  {
    category: "Data and storage",
    usage:
      "PostgreSQL as the system of record: query optimization over large datasets, triggers, migrations. Redis for caching and sessions.",
    primary: [
      { name: "PostgreSQL" },
      { name: "ERP data replication" },
      { name: "Redis" },
      { name: "Query optimization" },
    ],
    secondary: [
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Analytical warehouses" },
    ],
  },
  {
    category: "Messaging and workflows",
    usage:
      "Asynchronous pipelines with RabbitMQ, scheduled jobs, and reliable delivery for data replication.",
    primary: [
      { name: "RabbitMQ" },
      { name: "Event-driven design" },
      { name: "Scheduled jobs" },
      { name: "Reliable delivery" },
    ],
  },
  {
    category: "Frontend",
    usage:
      "Next.js App Router with server components where it helps SEO and data loading, client state only where the UI needs it.",
    primary: [
      { name: "React" },
      { name: "Next.js (SSR)" },
      { name: "Tailwind CSS" },
    ],
    secondary: [{ name: "Zustand" }, { name: "Zod" }, { name: "Axios" }],
  },
  {
    category: "Infrastructure and operations",
    usage:
      "Self-hosted Ubuntu servers in the home lab with Grafana and Prometheus over them; every project ships with a Docker Compose setup and a reverse proxy where needed.",
    primary: [
      { name: "Linux" },
      { name: "Ubuntu servers" },
      { name: "Docker and Docker Compose" },
      { name: "Nginx" },
      { name: "Grafana" },
      { name: "Prometheus" },
    ],
    secondary: [
      { name: "Forgejo (self-hosted)" },
      { name: "CI/CD pipelines" },
      { name: "Vercel" },
      { name: "Makefiles" },
    ],
  },
  {
    category: "Security and networking",
    usage:
      "Hack The Box is where this started; the home lab is where it is applied: firewalls, hardening, and the tooling to check the result.",
    primary: [
      { name: "iptables firewalls" },
      { name: "SSH hardening (automated)" },
      { name: "Nmap" },
      { name: "Kali Linux" },
    ],
    secondary: [{ name: "PGP handling" }, { name: "Data encryption" }],
  },
  {
    category: "Architecture and practices",
    usage:
      "Distributed data movement with explicit failure handling, clean layer and service boundaries, and domain models that match how the business actually works.",
    primary: [
      { name: "Distributed systems" },
      { name: "Domain modeling" },
      { name: "Layered (clean) architecture" },
      { name: "Caching strategies" },
      { name: "Fault-tolerant data pipelines" },
    ],
  },
  {
    category: "AI-assisted workflow",
    usage:
      "Agents in the delivery loop: Claude Code and Codex configured per repository, role prompts and agent instruction files, plugins for planning and review, and MCP servers so the agent can act on pipelines and infrastructure.",
    primary: [
      { name: "Claude Code" },
      { name: "Codex" },
      { name: "CLAUDE.md and role prompts" },
      { name: "superpowers plugin" },
      { name: "engineering plugin" },
      { name: "MCP servers" },
    ],
    secondary: [{ name: "qodo-standards plugin" }, { name: "Local LLMs" }],
  },
  {
    category: "Tools",
    usage: "Terminal-first: Neovim with LazyVim, tmux, lazygit, Git.",
    primary: [
      { name: "Neovim (LazyVim)" },
      { name: "tmux" },
      { name: "lazygit" },
      { name: "Git" },
    ],
  },
];
