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
    ],
    secondary: [
      { name: "Java (Spring Boot)" },
      { name: "PHP (Laravel)" },
      { name: "C# (.NET)" },
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
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "ERP data replication" },
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
      { name: "Prometheus" },
      { name: "Grafana" },
    ],
  },
  {
    category: "Also",
    primary: [
      { name: "AI-assisted development (Claude Code, Codex)" },
      { name: "Motion & graphic design" },
    ],
  },
];
