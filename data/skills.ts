import type { SkillGroup } from "@/types";

/** Grouped as on the CV. Secondary items are working knowledge. */
export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    primary: [
      { name: "Python" },
      { name: "Go" },
      { name: "TypeScript/JavaScript" },
      { name: "SQL" },
      { name: "C/C++" },
      { name: "Rust" },
    ],
    secondary: [
      { name: "Java (Spring Boot)" },
      { name: "PHP (Laravel)" },
    ],
  },
  {
    category: "Backend",
    primary: [
      { name: "Odoo module development" },
      { name: "Go (Gin, chi)" },
      { name: "NestJS (Node.js, Express)" },
      { name: "REST API design" },
      { name: "JWT auth & RBAC" },
      { name: "Stripe" },
    ],
  },
  {
    category: "Data",
    primary: [
      { name: "PostgreSQL (materialized views, partial indexes, advisory locks, PL/pgSQL)" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "Change data capture" },
      { name: "Query optimization" },
      { name: "RabbitMQ" },
      { name: "Scheduled jobs" },
    ],
  },
  {
    category: "Frontend",
    primary: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "Odoo OWL" },
    ],
  },
  {
    category: "Ops",
    primary: [
      { name: "Linux" },
      { name: "Docker/Compose" },
      { name: "Nginx" },
      { name: "GitHub Actions" },
      { name: "GitLab CI" },
      { name: "Forgejo Actions" },
      { name: "Prometheus" },
      { name: "Grafana" },
    ],
  },
  {
    category: "Generative AI",
    usage: "daily agentic coding with Claude Code and Codex",
    primary: [
      { name: "OpenAI API (GPT-4o, Assistants)" },
      { name: "Cloudinary AI" },
      { name: "prompt engineering" },
    ],
  },
];
