import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    usage:
      "Go for services and CLIs, Python for Odoo, Django, and tooling, C and C++ for systems and networking work, Rust for a client platform, TypeScript across NestJS, Express, Angular, and Next.js, SQL daily in PostgreSQL.",
    primary: [
      { name: "Go" },
      { name: "Python" },
      { name: "TypeScript" },
      { name: "C/C++" },
      { name: "Rust" },
      { name: "SQL" },
    ],
    secondary: [
      { name: "JavaScript" },
      { name: "PHP", note: "Laravel, plain PHP MVC" },
      { name: "Java", note: "Spring Boot" },
      { name: "C#", note: ".NET, high school systems work" },
    ],
  },
  {
    category: "Backend and APIs",
    usage:
      "Odoo module development, layered Go services, NestJS and Express APIs with JWT auth and role-based access, and MVC frameworks (Laravel, Django, Spring Boot) on client and university work.",
    primary: [
      { name: "Odoo module development" },
      { name: "Go (Gin, chi)" },
      { name: "NestJS / Node.js" },
      { name: "Express" },
      { name: "REST API design" },
      { name: "JWT auth and RBAC" },
    ],
    secondary: [
      { name: "Laravel" },
      { name: "Django" },
      { name: "Spring Boot" },
      { name: "Stripe integration" },
      { name: "API gateway pattern" },
    ],
  },
  {
    category: "Data and storage",
    usage:
      "PostgreSQL as the system of record: query optimization over large datasets, triggers, migrations. Redis for caching and sessions. An ORM where the stack calls for one.",
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
      { name: "Prisma" },
      { name: "TypeORM" },
      { name: "Mongoose" },
      { name: "Spring Data JPA" },
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
      "Next.js App Router with server components where it helps SEO and data loading, React with Vite and React Router on personal projects, Angular on the frontend job, client work, and coursework.",
    primary: [
      { name: "React" },
      { name: "Next.js (SSR)" },
      { name: "Angular" },
      { name: "Tailwind CSS" },
    ],
    secondary: [
      { name: "React Router" },
      { name: "Redux Toolkit" },
      { name: "Vite" },
      { name: "Zustand" },
      { name: "Zod" },
      { name: "Axios" },
    ],
  },
  {
    category: "Infrastructure and operations",
    usage:
      "Self-hosted Ubuntu servers in the home lab with Grafana and Prometheus over them, Bash for the automation, and a Docker Compose setup with a reverse proxy where needed on every project.",
    primary: [
      { name: "Linux" },
      { name: "Ubuntu servers" },
      { name: "Bash scripting" },
      { name: "Docker and Docker Compose" },
      { name: "Nginx" },
      { name: "Grafana" },
      { name: "Prometheus" },
    ],
    secondary: [
      { name: "GitHub Actions" },
      { name: "GitLab CI" },
      { name: "Forgejo (self-hosted)" },
      { name: "Vercel" },
      { name: "Makefiles" },
    ],
  },
  {
    category: "Security and networking",
    usage:
      "Hack The Box is where this started; the home lab is where it is applied. Networking from the socket up in C and C++: a multi-client HTTP server, and a multi-hop HTTP forward proxy with layered encryption in progress.",
    primary: [
      { name: "Penetration testing" },
      { name: "iptables firewalls" },
      { name: "SSH hardening (automated)" },
      { name: "Socket programming (C/C++)" },
      { name: "Nmap" },
      { name: "Kali Linux" },
    ],
    secondary: [
      { name: "Red and blue team practice" },
      { name: "Qubes OS" },
      { name: "Whonix" },
      { name: "Tor and onion services" },
      { name: "I2P (garlic routing)" },
      { name: "HTTP servers and proxies from scratch" },
      { name: "PGP handling" },
      { name: "Data encryption (AES-256-GCM, GPG)" },
    ],
  },
  {
    category: "Architecture and practices",
    usage:
      "Distributed data movement with explicit failure handling, clean layer and service boundaries, MVC where the framework is built around it, and domain models that match how the business actually works.",
    primary: [
      { name: "Distributed systems" },
      { name: "Domain modeling" },
      { name: "Layered (clean) architecture" },
      { name: "MVC (Laravel, Spring MVC, Django)" },
      { name: "Caching strategies" },
      { name: "Fault-tolerant data pipelines" },
    ],
    secondary: [{ name: "Automated tests (Jest)" }],
  },
  {
    category: "AI-assisted workflow",
    usage:
      "An agent in every repository: briefed from files committed next to the code, planning before code, reviewing before merge, and acting on pipelines and infrastructure through MCP.",
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
    usage: "Terminal-first: Neovim with LazyVim (configured in Lua), tmux, lazygit, Git.",
    primary: [
      { name: "Neovim (LazyVim)" },
      { name: "tmux" },
      { name: "lazygit" },
      { name: "Git" },
    ],
    secondary: [{ name: "Lua (Neovim config)" }],
  },
];
