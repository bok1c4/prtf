# Content Review

Source of truth: the content in `data/`, from which `/resume` and the CV PDF (`public/Boris_Nikolic_CV.pdf`, one A4 page) are generated. Everything in it traces to the owner's statements recorded here (the CV wording of 2026-09-23 and the verified facts of 2026-11-07), to a public GitHub repository, or to an earlier explicit statement by the owner that those do not contradict.

## From the CV, not verifiable from public sources

- Building for the web since 2022 (owner's statement, 2026-11-07; replaces "close to five years of hands-on web development", which counted school internships): web development intern (school programme, Zaječar, 2022), frontend developer (part-time internship, local software company, Zaječar, 2023), independent full-stack developer (self-directed, Belgrade, 2024), software developer on a B2B contract for Fairphone (2025 – present). Employer names for 2022 and 2023 are not given on the CV; the 2023 internship was at a high school partner company (shown as such), whose name the owner will give in interviews.
- Fairphone work (owner's verified facts, 2026-11-07; the owner confirmed the agreement allows this level of detail): B2B contract since May 2025, contracted via KIBNET (Belgrade); Odoo 16, Python, PostgreSQL; the owner owns the EU-side client modules. FairMaterials: critical-material traceability, written from scratch, in production since August 2026; converts received purchase lines into grams of focus materials (gold, cobalt, and tin are confirmed examples; the full list is not) through time-versioned product recipes, and allocates them across fair-sourcing programs with largest-remainder rounding into a signed per-program stock ledger. GHG: backport of Odoo's ESG module from v19 to v16; emissions across GHG Protocol scopes 1–3 from purchase, supply, and accounting data; background rebuild jobs and materialized SQL views feed the dashboards. CDC: a change data capture API, a prototype and not in production; cursor-based batches, in-order client acknowledgements. Full cycle: requirements with stakeholders, GitLab merge-request review, deployment to production (Odoo.sh / Dooba, not a VPS). Not used because unverified: per-day proration in GHG.
- Removed on 2026-11-07: the customer-facing web shop and API gateway bullet (another team's project, not to be mentioned), "replication of ERP data into analytical warehouses" (the CDC system is a prototype), "reporting over large datasets", "production VPS", the C#/.NET internship bullet and skill, and motion & graphic design.
- Working knowledge of Java (Spring Boot) and PHP (Laravel); Angular; GitLab CI. Rust and Forgejo Actions added on 2026-11-07 (owner's statement).
- E-commerce store with crypto payments (owner's statement, 2026-11-07): written in Rust, deployed to the owner's server through a CI/CD pipeline on self-hosted Forgejo. The repository is self-hosted, so there is no public link. Stack details, the gateway, and the payment flow are not yet recorded and are not on the site.
- The Order & revenue management platform was removed on 2026-11-07 to keep the CV on one page; it had no public repository.
- The 2024 backend work is described as NestJS (owner's statement, 2026-09-23: NestJS was the primary framework, on Node.js with Express); the CV text before that said Node.js/Express. The Backend skill item reads "NestJS (Node.js, Express)".
- BSc Software Engineering, Singidunum University, Belgrade, expected 2027.
- Availability (owner's statements, 2026-09-23): backend, full-stack, or DevOps roles; full-time, or part-time with flexible working hours; remote friendly (CET); B2B contractor or employee; open to relocation within Europe for hybrid roles with a couple of office days a week (the owner named Switzerland, the Netherlands, and Slovenia as examples; the site says only within Europe). The DevOps sentence in the summary (deploying and managing services, hardened Linux servers, Docker, CI/CD, monitoring) is the owner's wording too. The site, /resume, and the generated CV PDF carry the same lines.

## From the owner's earlier statements, kept because the CV does not contradict them

- "Off the keyboard": sim racing, Counter-Strike, cars; the gym; pasta and protein-rich meals.
- The six working principles under "How I work" in About.
- The "Working with people" list in the projects section, which matches the CV's stakeholder bullet.
- The "How I work with AI" section (loop, prompting, day to day, real systems). The CV mentions AI-assisted development (Claude Code, Codex) only under Skills; the section stays as site-only material.
- Home lab: Forgejo, hardened Linux servers, Prometheus and Grafana (the CV's Ops line names Forgejo and hardened home-lab servers), plus two free-time items the owner asked for on 2026-09-23: IRC chats hosted over Tor onion services and I2P garlic routing, and Rust implementations for systems work.

## Verified from public repositories

- E-commerce platform (`toy_store`, a university project per its GitHub description): the highlights are the CV's plus the API gateway point (owner's statement, 2026-11-07: the browser never calls the external product API directly; caching, error fallbacks, and auth sit in one place) and Nginx rate limiting (README); the problem statement draws on the README (external product catalog, cache-aside Redis, graceful degradation).
- Insightify (2024, owner's statement plus code): the app repository `bok1c4/Insightify` is private (Next.js 14, `openai` SDK), so the site links the public Go service `bok1c4/website-scraper` (chi router, chromedp in `go.mod`, Redis and WebSockets in `internal/analyze/scraper/`, an OpenAI client in `internal/analyze/openai/`). The problem statement draws on the Insightify README (analysis of design, content, and user experience).
- Systems & networking in C/C++ (`HTTP-Proxy`, plus `micro-http-server` and `Password-Manager`): the CV's highlights; the proxy README marks its encryption phase as in progress.
- RPG campaign manager (`rpg-campaign-manager`): Internet Software Architecture coursework; Java 21, Spring Boot 3, JWT access and refresh tokens, role-based authorization, React SPA.
- None of the linked repositories contains a screenshot or an architecture diagram, so the project cards have no images.

## Deliberately not on the site

- Any metric, and any count of years of experience: the site says "building for the web since 2022". The project count in the projects lede is computed from `data/projects.ts`.
- Penetration testing and red or blue team practice (removed from the main page at the owner's request; not on the CV). IRC hosting over Tor and I2P returned to the home lab section the same day, on the owner's request, as a free-time project.
- Editor and tool lists (Neovim, tmux, lazygit) and plugin names.
- Client data, figures, or code. The Fairphone modules are described only at the level recorded above, and the private client repositories are never linked.
- A statement that the degree is completed. It is expected in 2027.

## Open questions

1. Should the "How I work with AI" section stay? It is not on the CV.
2. Employer names for the 2022 and 2023 internships, if they should appear.
3. The `/resume` page mirrors the CV content in HTML; the download button serves the CV PDF itself. If the PDF changes, update `data/` to match, or drop `/resume`.
