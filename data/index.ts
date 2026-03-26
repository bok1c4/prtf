import type {
  PersonalInfo,
  Project,
  Skill,
  Experience,
  Education,
} from "@/types";

export const personal: PersonalInfo = {
  name: "Boris Nikolic",
  title: "Software Engineer & AI Developer",
  bio: "Software Engineer with 3.5+ years of experience building backend systems. Specialized in distributed systems, API-driven architectures, and AI-augmented development workflows. Building with Claude, OpenCode, and multi-agent architectures to deliver production systems 10x faster.",
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
    items: ["Node.js", "NestJS", "Odoo (Python)"],
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
    items: [
      "Claude (Anthropic)",
      "OpenCode",
      "Multi-Agent Orchestration",
      "Context Engineering",
      "Cursor/Windsurf",
      "AI Code Review",
    ],
  },
  {
    category: "AI Workflow",
    items: [
      "Agent Task Decomposition",
      "Iterative Refinement",
      "Human-in-the-Loop Review",
      "Automated Testing Pipelines",
      "Documentation Generation",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: ["PostgreSQL", "RabbitMQ", "Docker", "Docker Swarm", "CI/CD"],
  },
  {
    category: "Auth & Security",
    items: ["Keycloak", "OAuth2", "OpenID Connect", "Encryption"],
  },
];

export const projects: Project[] = [
  {
    title: "GHG Emissions Tracker",
    description:
      "Enterprise-grade system for tracking and reporting greenhouse gas emissions across supply chain operations at Fairphone. Designed the reporting layer using SQL views and aggregated data models, optimized complex queries on large datasets, and contributed to CO2e emissions calculation pipelines.",
    tags: ["Python", "Odoo", "PostgreSQL"],
  },
  {
    title: "FairMaterials",
    description:
      "Procurement and material planning platform for supply chain management at Fairphone. Implemented inventory validation, automated procurement workflows, purchase order generation, and material coverage tracking — with transactional integrity and correct workflow state transitions.",
    tags: ["Python", "Odoo", "PostgreSQL"],
  },
  {
    title: "Toy Store",
    description:
      "Full-stack Serbian e-commerce platform for selling toys, built with a Go backend API, Next.js 14 frontend, PostgreSQL database, and Redis cache — all orchestrated through Docker Compose and served behind an Nginx reverse proxy. Features user authentication with dual-token JWT (access + refresh with Redis revocation), shopping cart and wishlist management, Stripe test mode payments, order history with cancellation requests, and an admin panel with user/order analytics. The catalog is fetched from an external API and cached in Redis using a cache-aside strategy.",
    tags: [
      "Go",
      "Gin",
      "Next.js 14",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "Stripe",
      "TypeScript",
      "Tailwind CSS",
    ],
    repo: "https://github.com/bok1c4/toy_store",
    demo: { repoUrl: "https://github.com/bok1c4/toy_store" },
  },
  {
    title: "pwman",
    description:
      "Secure, open-source password manager with peer-to-peer synchronization — in active development. Implements hybrid encryption (AES-256-GCM + X25519), P2P LAN sync via mDNS and TLS 1.3, Lamport clock conflict resolution, TOTP device pairing, and multiple vault support. Exposes CLI, REST API, and a Tauri desktop app.",
    tags: ["Go", "SQLite", "React", "TypeScript", "Tauri 2", "libp2p"],
    repo: "https://github.com/bok1c4/password_manager",
  },
  {
    title: "Sales Report System",
    description:
      "Backend system for generating business analytics and automated reports. Features invoice CRUD, scheduled daily report generation, RabbitMQ message queue processing, and email notifications — built with a hybrid microservice architecture (HTTP + RabbitMQ in a single process).",
    tags: ["NestJS", "TypeScript", "MongoDB", "RabbitMQ", "Docker"],
    repo: "https://github.com/bok1c4/sales-report-system",
  },
  {
    title: "Olympic Games Simulator",
    description:
      "JavaScript simulation of an Olympic basketball tournament with realistic win probability calculations. Implements a circular rotation algorithm for fair round-robin scheduling, FIBA-compliant tiebreaker logic including the 'circle method', and a constraint-based draw system for elimination brackets.",
    tags: ["JavaScript", "Node.js"],
    repo: "https://github.com/bok1c4/cdbhnd-olimpijske-igre",
  },
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "AMT Group",
    period: "2025 — Present",
    description:
      "Delivering production systems for EU clients including Fairphone in sustainability and supply chain domains. Designing and implementing backend services with AI-augmented development workflows using Claude and OpenCode. Building multi-agent pipelines for accelerated delivery.",
    highlights: [
      "Built GHG emissions tracking and reporting system for Fairphone supply chain operations",
      "Implemented procurement and material planning platform with automated workflow logic",
      "Optimized complex PostgreSQL queries and improved performance on large datasets",
      "Implemented traversal of account.move journal items and purchase.order.line records to derive actual received quantities; applied emission factor and assignation rules to compute CO2e (GHG) and material coverage (FairMaterials) using product recipes",
      "Worked in containerized, service-based environments using Docker",
      "Pioneered AI-driven development workflows reducing implementation time by 10x",
      "Built multi-agent architectures with Claude and OpenCode for complex feature development",
      "Implemented iterative AI review cycles ensuring code quality and architectural coherence",
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
