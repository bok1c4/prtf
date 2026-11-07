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
    slug: "snapsyncai",
    title: "SnapSyncAi: AI image-editing SaaS",
    problem:
      "An image-editing SaaS: sign in, buy credits, and edit photos with AI transformations.",
    stack: ["Next.js 14", "TypeScript", "MongoDB", "Cloudinary AI", "Clerk", "Stripe"],
    highlights: [
      "Photo restore, generative fill, object removal and recolor by text prompt, and background removal through Cloudinary's AI transformations; Clerk auth with webhooks syncing users to MongoDB; Stripe-paid credit packages.",
    ],
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
    slug: "insightify",
    title: "Insightify: website analysis tool",
    problem:
      "Submit a website URL and get an analysis of its design, content, and user experience.",
    stack: ["Go", "chi", "chromedp", "OpenAI API", "OpenAI GPT-4o", "Redis", "WebSockets", "Next.js"],
    highlights: [
      "Go (chi) service scrapes a submitted site with chromedp and passes the content to OpenAI's GPT-4o (first direct API calls, later the Assistants API) for an analysis of design, content, and UX; Next.js frontend.",
    ],
    repo: "https://github.com/bok1c4/website-scraper",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
