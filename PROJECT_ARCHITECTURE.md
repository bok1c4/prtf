# Project Architecture Notes

What may be said about each system on the site and where it comes from. Client work is licensed and under agreement; the owner confirmed on 2026-11-07 that the agreement allows the level of detail below, and nothing beyond it.

## Fairphone (since May 2025, B2B contract via KIBNET)

Odoo 16, Python, PostgreSQL; the owner owns the EU-side client modules and works the full cycle (requirements with stakeholders, GitLab merge-request review, deployment to production on Odoo.sh / Dooba).

- **FairMaterials**: critical-material traceability, written from scratch (an earlier prototype was not used), in production since August 2026. Reads received purchase lines, converts units to grams of each focus material (gold, cobalt, and tin are confirmed examples) through time-versioned product recipes, and splits quantities across fair-sourcing programs (for example Fairtrade, recycled) with an allocation engine using largest-remainder rounding. Signed per-program stock ledger. Depends only on purchase, stock, product, and uom; no accounting.
- **GHG (carbon accounting)**: backport of Odoo's ESG module from v19 to v16. Emissions across GHG Protocol scopes 1–3 from purchase, supply, and accounting data. A finance activity mapping assigns each account an activity type, an amount basis (balance, debit, or credit), and a sign rule; spend is converted with the period's currency rates and multiplied by the matching emission factor. Background rebuild jobs and materialized SQL views feed the dashboards.
- **CDC (prototype, not in production)**: change data capture API for external systems such as data warehouses. Cursor-based batches; client acknowledgements enforced in order so no records are skipped. Pull-based today; server push over WebSockets is planned, not built, so the site does not mention it.

Never on the site: the customer-facing web shop on top of Odoo (another team's project), client data, figures, or code, and links to the private client repositories.

## E-commerce store with crypto payments (self-hosted repository, no public link)

From the owner: written in Rust, takes cryptocurrency payments, deployed to the owner's own server through a CI/CD pipeline on self-hosted Forgejo. The stack, the gateway, and the payment flow are not yet recorded; add them here before they go on the site.

## E-commerce platform (university project, public repository: toy_store)

From the owner: the Go backend is an API gateway in front of the external product API, so the browser never calls that API directly, and caching, error fallbacks, and auth sit in one place. From the CV: Go (Gin) backend with dual-token JWT auth and revocable refresh tokens, two-step Stripe PaymentIntent checkout, order line-item snapshots, admin dashboard, cache-aside Redis catalog that degrades gracefully, Nginx and Docker Compose. From the README: the product catalog comes from an external API and is cached in Redis (5-minute TTL); when Redis is down the request continues without caching; Next.js 14 App Router frontend; PostgreSQL 16 with golang-migrate; Nginx rate limiting; health-checked Docker Compose startup order.

## Systems & networking in C/C++ (public repositories: HTTP-Proxy, micro-http-server, Password-Manager)

From the CV: a multi-client HTTP server built from POSIX sockets up, a multi-hop HTTP forward proxy with layered encryption (in progress), and a terminal password manager with per-secret hybrid encryption (AES-256-GCM, GPG). From the READMEs: the proxy has single-hop forwarding and multi-hop chain routing working, with AES and RSA layered encryption between hops in progress; the password manager stores secrets in PostgreSQL, each under a fresh AES-256 key that is GPG-encrypted to the user's key fingerprint (C++20, CMake, Docker Compose for the database).

## Insightify (2024; public repository: website-scraper, app repository private)

From the owner: a website analysis tool; a Go scraper collects site content and an LLM produces the analysis. From the code: the Go service (`bok1c4/website-scraper`) uses the chi router, chromedp, Redis, and WebSockets, with an OpenAI client in `internal/analyze/openai/`; the app (`bok1c4/Insightify`, private) is Next.js 14 with the `openai` SDK. The README describes the analysis as covering design, content, and user experience.

## RPG campaign manager (university project, public repository: rpg-campaign-manager)

Final project for the Internet Software Architecture course: Java 21, Spring Boot 3 REST API with JWT access and refresh tokens and role-based authorization, Spring Data JPA over PostgreSQL, a React single-page frontend, Docker Compose, a Postman collection for the API. Game masters run campaigns, sessions, and item catalogs; players manage characters and inventories.

## Home lab

Forgejo git forge on a self-hosted server, hardened Linux servers, Prometheus and Grafana monitoring; free-time projects on top: IRC chats hosted over Tor onion services and I2P garlic routing, and Rust implementations for systems work. Everything else the owner runs privately stays off the site.
