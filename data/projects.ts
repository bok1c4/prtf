import type { Project } from "@/types";

/** In CV order. Problem statements come from each repository's README
 *  or from the owner's description; highlights are the CV's. */
export const projects: Project[] = [
  {
    slug: "rust-store",
    title: "E-commerce store with crypto payments",
    problem:
      "An online store written in Rust that takes cryptocurrency payments, deployed and run on my own server.",
    stack: ["Rust", "Forgejo", "CI/CD"],
    highlights: [
      "Deployed to my own server through a CI/CD pipeline on self-hosted Forgejo.",
    ],
    note: "Self-hosted on Forgejo",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce platform (university project)",
    problem:
      "A complete shop with real authentication, real payments, and an external product catalog that has to stay fast and keep working when the cache is down.",
    stack: ["Go", "Gin", "Next.js", "PostgreSQL", "Redis", "Stripe", "Nginx", "Docker Compose"],
    highlights: [
      "Go (Gin) API gateway in front of an external product API: the browser never calls it directly; caching, error fallbacks, and dual-token JWT auth with revocable refresh tokens sit in one place.",
      "Two-step Stripe PaymentIntent checkout, order line-item snapshots, and an admin dashboard.",
      "Cache-aside Redis catalog that degrades gracefully; Nginx reverse proxy with rate limiting; Docker Compose.",
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
      "Multi-client HTTP server from POSIX sockets up, and a multi-hop HTTP forward proxy with layered encryption (in progress).",
      "Terminal password manager with per-secret hybrid encryption (AES-256-GCM, GPG).",
    ],
    repo: "https://github.com/bok1c4/HTTP-Proxy",
  },
  {
    slug: "insightify",
    title: "Insightify: website analysis tool",
    problem:
      "Submit a website URL and get an analysis of its design, content, and user experience.",
    stack: ["Go", "chi", "chromedp", "OpenAI API", "Redis", "WebSockets", "Next.js"],
    highlights: [
      "Go (chi) service scrapes a submitted site with chromedp and passes the content to the OpenAI API for an analysis of design, content, and UX; Next.js frontend.",
    ],
    repo: "https://github.com/bok1c4/website-scraper",
  },
  {
    slug: "rpg-campaign-manager",
    title: "RPG campaign manager (university project)",
    problem:
      "University coursework: game masters run campaigns, sessions, and item catalogs while players manage characters and inventories.",
    stack: ["Java 21", "Spring Boot 3", "JWT", "React"],
    highlights: [
      "Spring Boot REST API with JWT access and refresh tokens and role-based authorization, consumed by a React SPA.",
    ],
    repo: "https://github.com/bok1c4/rpg-campaign-manager",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
