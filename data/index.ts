import type {
  PersonalInfo,
  Project,
  Skill,
  Experience,
  Education,
} from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolic",
  title: "Student Software Engineer",
  bio: "Student Software Engineer with around 3 years of experience building backend systems, distributed architectures, and full-stack applications. Focused on production-grade systems for enterprise clients, with deep expertise in Go, Python, and TypeScript. Experienced in modern development workflows.",
  email: "kibnet@pm.me",
  location: "Belgrade, Serbia",
  links: [
    { label: "GitHub", url: "https://github.com/bok1c4" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/boris-nikolic-a44a2126a",
    },
  ],
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Go", "Python", "TypeScript", "JavaScript", "PHP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Odoo"],
  },
  {
    category: "Architecture",
    items: [
      "Distributed Systems",
      "Microservices",
      "API Gateway",
      "Clean Architecture",
    ],
  },
  {
    category: "AI Development",
    items: ["Claude (Anthropic)", "Context Engineering"],
  },
  {
    category: "AI Workflow",
    items: [
      "Agent Task Decomposition",
      "Iterative Refinement",
      "Human-in-the-Loop Review",
      "Automated Testing Pipelines",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: ["PostgreSQL", "RabbitMQ", "Docker", "CI/CD"],
  },
];

export const projects: Project[] = [
  {
    title: "Multi-Client CDC Engine",
    description:
      "Change Data Capture engine replicating Odoo ERP data to downstream OLAP warehouses. Agent + Control Plane architecture with PostgreSQL AFTER DELETE triggers, independent per-client cursors, 3-stage Request-Fetch-ACK fault tolerance, and coordinated garbage collection.",
    tags: ["Python", "Odoo", "PostgreSQL"],
  },
  {
    title: "Toy Store",
    description:
      "Full-stack e-commerce platform with dual-token JWT auth, shopping cart, Stripe payments, order management, and admin analytics. Catalog cached via Redis cache-aside strategy.",
    tags: ["Go", "Next.js 14", "PostgreSQL", "Redis", "Stripe"],
    repo: "https://github.com/bok1c4/toy_store",
  },
  {
    title: "Control Management System Platform",
    description:
      "Multi-role CMS web application with authentication, orders, revenue reports, and notification system.",
    tags: ["Go", "Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Sales Report System",
    description:
      "Backend analytics with invoice CRUD, scheduled daily report generation, RabbitMQ queue processing, and email notifications in a hybrid microservice architecture.",
    tags: ["NestJS", "TypeScript", "MongoDB", "RabbitMQ"],
    repo: "https://github.com/bok1c4/sales-report-system",
  },
];

export const experience: Experience[] = [
  {
    role: "Contractor",
    company: "AMT Group",
    period: "2025 — Present",
    description:
      "Production systems for EU clients (Fairphone) in sustainability and supply chain domains using AI-augmented workflows.",
    highlights: [
      "Built GHG emissions tracking & reporting system for Fairphone supply chain — CO2e calculations via emission factors, optimized complex PostgreSQL queries on large datasets",
      "Implemented FairMaterials procurement platform — automated workflow logic, material coverage tracking, and period-based reporting over supply chain data",
      "Designed and building a multi-client CDC engine for replicating Odoo ERP data to OLAP warehouses — per-client cursor isolation, 3-stage acknowledgment protocol, and coordinated garbage collection with PostgreSQL triggers for hard-delete capture",
      "Designed system architecture for client-facing web shop integrating API Gateway, Odoo backend, and frontend services",
      "Pioneered multi-agent AI pipelines (Claude + OpenCode) reducing implementation time by 10x; iterative AI review cycles for code quality and architectural coherence",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor in Software Engineering",
  status: "In progress",
};

export const resume = {
  url: "/resume.pdf",
  label: "Download Resume",
};
