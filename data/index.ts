import type {
  PersonalInfo,
  Project,
  Skill,
  Experience,
  Education,
} from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolic",
  title: "Software Engineer",
  bio: "Software Engineer with around 3 years of experience building production-grade backend systems, distributed architectures, and full-stack applications for enterprise clients. Deep expertise in Go, Python, and TypeScript. Uses modern AI tooling (Claude) as a core part of the engineering loop, from design to code review and refactoring, not just code completion.",
  email: "borisnikolic2302@gmail.com",
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
    items: ["Go", "Python", "TypeScript", "JavaScript", "Java", "PHP", "SQL"],
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
      "Event-Driven Design",
      "Clean Architecture",
    ],
  },
  {
    category: "AI Engineering",
    items: ["Claude", "Kimi", "ChatGPT", "Local LLMs", "Prompt Engineering"],
  },
  {
    category: "Data & Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "CI/CD"],
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
    period: "2025 - Present",
    description:
      "Production systems for EU clients (Fairphone) in the sustainability and supply chain domains.",
    highlights: [
      "Built GHG emissions tracking and reporting system for the Fairphone supply chain: CO2e calculations via emission factors, optimized complex PostgreSQL queries on large datasets",
      "Implemented FairMaterials procurement platform: automated workflow logic, material coverage tracking, and period-based reporting over supply chain data",
      "Designed and building a multi-client CDC engine replicating Odoo ERP data to OLAP warehouses: per-client cursor isolation, 3-stage acknowledgment protocol, and coordinated garbage collection with PostgreSQL triggers for hard-delete capture",
      "Designed system architecture for a client-facing web shop integrating API Gateway, Odoo backend, and frontend services",
      "Claude for AI-assisted development: design, code review, and refactoring using prompt engineering techniques and iterative AI review cycles to cut implementation time by 10x",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor in Software Engineering",
  status: "In progress · 4th year",
};

export const resume = {
  url: "/resume.pdf",
  label: "Download Resume",
};
