import type { Project } from "@/types";

/** In CV order. Problem statements come from each repository's README
 *  or from the project's own description; highlights are the CV's. */
export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce platform",
    problem:
      "A complete shop with real authentication, real payments, and an external product catalog that has to stay fast and keep working when the cache is down.",
    stack: ["Go", "Gin", "Next.js", "PostgreSQL", "Redis", "Stripe", "Nginx", "Docker Compose"],
    highlights: [
      "Go (Gin) backend with dual-token JWT auth and revocable refresh tokens.",
      "Two-step Stripe PaymentIntent checkout, order line-item snapshots, and an admin dashboard.",
      "Cache-aside Redis catalog that degrades gracefully; Nginx and Docker Compose in front.",
    ],
    repo: "https://github.com/bok1c4/toy_store",
  },
  {
    slug: "systems-networking",
    title: "Systems & networking in C/C++",
    problem:
      "Networking and security primitives written from the socket up, without a framework in between.",
    stack: ["C", "C++", "POSIX sockets", "AES-256-GCM", "GPG"],
    highlights: [
      "Multi-client HTTP server built from POSIX sockets up.",
      "Multi-hop HTTP forward proxy with layered encryption (in progress).",
      "Terminal password manager with per-secret hybrid encryption (AES-256-GCM, GPG).",
    ],
    repo: "https://github.com/bok1c4/HTTP-Proxy",
  },
  {
    slug: "order-revenue-platform",
    title: "Order & revenue management platform",
    problem:
      "One application for several roles to manage orders, follow revenue, and get notified, with access controlled per role.",
    stack: ["Go", "Next.js", "TypeScript", "PostgreSQL"],
    highlights: [
      "Multi-role web application with role-based access control.",
      "Order management, revenue reporting, and notifications.",
    ],
    note: "No public repository.",
  },
  {
    slug: "rpg-campaign-manager",
    title: "RPG campaign manager",
    problem:
      "University coursework: game masters run campaigns, sessions, and item catalogs while players manage characters and inventories.",
    stack: ["Java 21", "Spring Boot 3", "JWT", "React"],
    highlights: [
      "REST API with JWT access and refresh tokens and role-based authorization.",
      "React single-page frontend consuming the API.",
    ],
    repo: "https://github.com/bok1c4/rpg-campaign-manager",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
