import type { CaseStudy, MoreWork } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "fairphone-odoo-platform",
    title: "Client Work: Odoo Platform for Fairphone",
    summary:
      "Platform work for Fairphone on Odoo: modules for sustainability and procurement operations, replication of ERP data into analytical warehouses, and the architecture of a customer-facing shop. Described at the level the engagement allows.",
    seoDescription:
      "Client work for Fairphone on Odoo: modules for sustainability and procurement operations, ERP data replication into analytical warehouses, and the architecture of a customer-facing web shop.",
    kind: "client",
    featured: true,
    client: "Fairphone",
    period: "2025 – present",
    note: "Client-owned, licensed software. What was built and what it replaced is shared; how it works inside, the data, and the numbers are not.",
    role: "Software developer",
    roleDetail:
      "Built the Odoo modules, designed and built the data replication, and designed the architecture of the web shop, working with the Fairphone team as a contractor. Worked directly with the stakeholders throughout: requirements from the people using the modules, technical trade-offs explained in plain language, and features shipped, tested, and tailored to the production VPS.",
    stakeholders: [
      "The colleagues whose manual tracking the modules replaced: requirements came from them directly, and they used the result day to day.",
      "Non-technical stakeholders, for whom technical terms and trade-offs were explained in plain language before decisions were made.",
      "Analytics consumers of the replicated ERP data.",
    ],
    context: [
      "Fairphone runs its supply-chain and sustainability operations on Odoo. Some of those operations were tracked by hand, the ERP data also needed to reach analytical warehouses, and a customer-facing shop needed a safe path to the ERP.",
    ],
    goals: [],
    features: [
      "Odoo modules for sustainability and procurement operations: automated workflows and reporting that replaced values colleagues entered and tracked by hand, on PostgreSQL queries tuned for large datasets.",
      "Replication of ERP data into analytical warehouses, built for reliable delivery.",
      "The architecture of a customer-facing web shop on top of Odoo: an API gateway in front of the ERP and separate frontend services.",
    ],
    architecture: [],
    dataFlow: [],
    implementation: [],
    decisions: [
      {
        decision: "Build the modules inside Odoo",
        rationale:
          "The data already lives in the ERP. A module keeps entries, rules, and reports next to it instead of in a separate tool or a spreadsheet.",
      },
    ],
    challenges: [],
    results: [
      "Manual entry and hand-kept tracking replaced by the modules.",
      "ERP data available in analytical warehouses.",
      "A gateway-fronted architecture for the shop.",
    ],
    stack: ["Odoo", "Python", "PostgreSQL"],
    tags: ["Odoo", "PostgreSQL", "Data replication"],
    links: [],
  },
  // Toy Store follows.
  {
    slug: "toy-store",
    title: "Toy Store: Full-Stack E-commerce",
    summary:
      "A full-stack e-commerce application with a Go API, a Next.js 14 frontend, PostgreSQL, Redis-backed sessions and caching, Stripe checkout, and an admin dashboard, run as one Docker Compose stack behind Nginx.",
    seoDescription:
      "Case study: a full-stack e-commerce application built with Go, Next.js 14, PostgreSQL, Redis, Stripe, and Nginx, with dual-token JWT auth and cache-aside catalog caching.",
    kind: "personal",
    featured: true,
    period: "University project",
    role: "Developer",
    roleDetail:
      "Built the Go API, the Next.js frontend, the database schema and migrations, and the Docker Compose deployment, and documented the architecture in the repository.",
    stakeholders: [
      "Shoppers browsing, buying, and tracking orders",
      "Admins managing orders, users, and cancellation requests",
    ],
    context: [
      "Built as a university web-application project, but designed like a production system: separate layers, real authentication, a real payment flow (Stripe test mode), caching, rate limiting, and a single-command startup.",
      "The catalog does not live in the app's own database. Toys come from an external API and are cached in Redis, which shaped several decisions: order snapshots, cache-aside reads, and graceful degradation when the cache is down.",
    ],
    goals: [
      "A complete purchase flow: browse, cart, wishlist, checkout, order history, cancellation requests.",
      "Authentication that can actually log users out, despite JWTs being stateless.",
      "Keep the external catalog fast, and keep the app usable when Redis is unavailable.",
      "Admin tooling for orders, users, and cancellation approvals.",
    ],
    features: [
      "Product catalog from an external API with Redis caching and filtering",
      "Cart and wishlist persisted per user",
      "Two-step Stripe PaymentIntent checkout; card data never touches the backend",
      "Dual-token JWT auth: 15-minute access token, 7-day refresh token stored in Redis with rotation on refresh",
      "Role-based access (user, admin) enforced in middleware",
      "Admin dashboard: orders, users, cancellation-request approval",
      "Nginx reverse proxy with rate limiting and a health-checked startup order in Docker Compose",
    ],
    architecture: [
      "Nginx is the single public entry point, with rate limits on auth endpoints and on the rest of the API.",
      "Go with Gin in three layers: HTTP handlers, services for business logic, repositories for SQL.",
      "Next.js 14 App Router: server components for the home page (SSR, server-side fetch inside the Docker network), client components with Zustand and Axios for cart, checkout, and profile.",
      "PostgreSQL 16 for users, orders, order items, cart items, and wishlist items, with golang-migrate migrations run at startup.",
      "Redis 7 for refresh tokens and the catalog cache.",
    ],
    dataFlow: [
      "Catalog: request → Redis (5-minute TTL) → on a miss, the external toy API. If Redis is down, the request continues without caching and logs a warning.",
      "Checkout: the frontend asks the API for a PaymentIntent, Stripe.js tokenizes the card in the browser, and the API verifies the intent succeeded before creating the order with line-item snapshots.",
      "Auth: login issues an access token and a refresh token; the Axios interceptor refreshes transparently on 401; logout deletes the refresh token from Redis.",
    ],
    implementation: [
      "Line-item snapshots: orders store name, price, and image at purchase time, because the external catalog can change or remove toys.",
      "UUID primary keys to avoid ID enumeration.",
      "bcrypt with cost factor 12 for passwords.",
      "Zod validation on every form, with Serbian error messages; next-themes dark mode.",
      "Docker Compose startup order: PostgreSQL → Redis → API (runs migrations, exposes /health) → frontend → Nginx.",
    ],
    decisions: [
      {
        decision: "Refresh tokens in Redis",
        rationale:
          "JWTs cannot be revoked on their own. Storing the refresh token server-side with a TTL makes logout real: no token in Redis, no session.",
      },
      {
        decision: "Snapshot order lines",
        rationale:
          "The catalog is external and can change. Paid orders must show exactly what was bought at the price it was bought.",
      },
      {
        decision: "Rate limiting in Nginx, not in Go",
        rationale:
          "Abusive traffic is dropped before it allocates anything in the application process.",
      },
      {
        decision: "Three-layer backend",
        rationale:
          "Handlers, services, and repositories can be tested and changed independently.",
      },
    ],
    challenges: [
      "Search is in-memory filtering and catalog pagination is client-side, which will not scale past a small catalog.",
      "Stripe webhooks need the Stripe CLI locally; the stack runs over HTTP with no TLS configured.",
      "No email notifications.",
    ],
    results: [
      "A complete, documented e-commerce stack that starts with one command and demonstrates production patterns end to end: layered backend, revocable JWT sessions, cache-aside reads with graceful degradation, and a PCI-friendly payment flow.",
    ],
    stack: [
      "Go 1.23",
      "Gin",
      "Next.js 14",
      "TypeScript",
      "PostgreSQL 16",
      "Redis 7",
      "Nginx",
      "Docker Compose",
      "Stripe",
      "JWT",
      "Zustand",
      "Zod",
      "Tailwind CSS",
    ],
    tags: ["Go", "Next.js", "PostgreSQL", "Redis", "Stripe"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/bok1c4/toy_store",
        external: true,
      },
    ],
    diagram: "toy-store",
  },
];

export const featuredCaseStudies = caseStudies.filter((s) => s.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}

/** Shown under the case studies as `ls ~/projects | wc -l`. */
export const workNote = {
  count: "50+",
  detail:
    "personal and client projects since school. Most are private, old, or under agreements not to talk about them. The ones on this page are the ones I can show.",
};

export const moreWork: MoreWork[] = [
  {
    title: "Control Management System Platform",
    description:
      "Multi-role CMS web application with authentication, order management, revenue reports, a notification system, and role-based access control.",
    stack: ["Go", "Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "RPG campaign manager (university coursework)",
    description:
      "Final project for the Internet Software Architecture course: a Spring Boot REST API with JWT access and refresh tokens and role-based authorization, a React SPA, PostgreSQL, and Docker Compose. Game masters run campaigns, sessions, and item catalogs; players manage characters and inventories.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "React", "Docker Compose"],
    link: {
      label: "Repository",
      href: "https://github.com/bok1c4/rpg-campaign-manager",
      external: true,
    },
  },
  {
    title: "HTTP forward proxy in C++",
    description:
      "Multi-hop HTTP forward proxy on native sockets: an HTTP server with GET and POST handling, single-hop forwarding, and chained routing through several proxy nodes. Layered AES and RSA encryption between hops is in progress.",
    stack: ["C++", "Sockets", "AES/RSA"],
    link: {
      label: "Repository",
      href: "https://github.com/bok1c4/HTTP-Proxy",
      external: true,
    },
  },
  {
    title: "Terminal password manager in C++20",
    description:
      "Secrets stored in PostgreSQL under a hybrid scheme: each password encrypted with a fresh AES-256-GCM key, that key GPG-encrypted to your key's fingerprint, so the same vault opens on any machine holding the key. CMake build, Docker Compose for the database.",
    stack: ["C++20", "PostgreSQL", "GPG", "AES-256-GCM", "CMake"],
    link: {
      label: "Repository",
      href: "https://github.com/bok1c4/Password-Manager",
      external: true,
    },
  },
];
