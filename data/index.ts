import type {
  PersonalInfo,
  Project,
  Experience,
  Education,
} from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolic",
  title: "Full-Stack Software Engineer · Distributed Systems",
  bio: "Full-stack software engineer with ~3 years of experience shipping production systems end-to-end — backend services, distributed architectures, and the web frontends on top of them — for enterprise clients. Currently consulting under a B2B contract while finishing the third year of a Software Engineering bachelor's. Comfortable across Go, Python, and TypeScript, with hands-on PostgreSQL and event-driven design. Uses modern AI tooling (Claude, multi-agent pipelines) as a core part of the engineering loop — design, review, refactoring — not just code completion.",
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

export const projects: Project[] = [
  {
    title: "Multi-Client CDC Engine",
    description:
      "Change Data Capture engine that propagates inserts, updates, and deletes from Odoo ERP to downstream consumers (microservices, OLAP warehouses, search indexes) so each can keep its own state in sync. Agent + Control Plane architecture with PostgreSQL AFTER DELETE triggers, independent per-client cursors, 3-stage Request-Fetch-ACK fault tolerance, and coordinated garbage collection.",
    tags: ["Python", "Odoo", "PostgreSQL"],
    context: "Client work · AMT Group",
  },
  {
    title: "GHG Emissions Platform",
    description:
      "Production GHG emissions tracking & reporting system for Fairphone — spans both Finance and Supply domains. CO2e calculations via emission factors, optimized complex PostgreSQL queries over large datasets, and period-based reporting.",
    tags: ["Python", "Odoo", "PostgreSQL"],
    context: "Client work · AMT Group · Fairphone",
  },
  {
    title: "FairMaterials Procurement Platform",
    description:
      "Supply procurement platform for Fairphone — automated workflow logic, material coverage tracking, and period-based reporting over supply chain data.",
    tags: ["Python", "Odoo", "PostgreSQL"],
    context: "Client work · AMT Group · Fairphone",
  },
  {
    title: "Toy Store",
    description:
      "Full-stack e-commerce platform with dual-token JWT auth, shopping cart, Stripe payments, order management, and admin analytics. Catalog cached via Redis cache-aside strategy.",
    tags: ["Go", "Next.js 14", "PostgreSQL", "Redis", "Stripe"],
    repo: "https://github.com/bok1c4/toy_store",
  },
  {
    title: "Control Management System",
    description:
      "Multi-role CMS web application with authentication, orders, revenue reports, and a notification system with role-based access control.",
    tags: ["Go", "Next.js", "React", "TypeScript", "PostgreSQL"],
    context: "Client work",
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
    role: "Software Engineer · Consultant (B2B)",
    company: "AMT Group",
    period: "2025 — Present",
    description:
      "Production systems for EU clients (notably Fairphone) in sustainability and supply chain domains.",
    highlights: [
      "Designed and shipped multiple production systems for Fairphone — GHG emissions platform (Finance + Supply), FairMaterials supply procurement, and a multi-client CDC engine propagating Odoo ERP changes to downstream consumers (see Projects)",
      "Designed system architecture for client-facing web shop integrating API Gateway, Odoo backend, and frontend services across multiple service boundaries",
      "Used AI-augmented engineering workflows (Claude, multi-agent pipelines) across the design–build–review loop — applied as core engineering tooling, not just code completion",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor in Software Engineering",
  status: "3rd year — in progress",
};

export const resume = {
  url: "/resume.pdf",
  label: "Download Resume",
};
