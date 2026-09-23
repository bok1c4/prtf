# Project Architecture Notes

What may be said about each system on the site and where it comes from. Client work is licensed and under agreement, so it is described only at the level the owner's CV uses.

## Fairphone (2025 – present, B2B contract)

Odoo modules (Python, PostgreSQL) for sustainability and procurement teams that replaced manual, hand-kept tracking with automated workflows and reporting over large datasets; replication of ERP data into analytical warehouses with reliable delivery as the core requirement; the architecture of a customer-facing web shop on top of Odoo (an API gateway in front of the ERP with separate frontend services). Nothing about internals, data, or numbers is recorded in this repository.

## E-commerce platform (public repository: toy_store)

From the CV: Go (Gin) backend with dual-token JWT auth and revocable refresh tokens, two-step Stripe PaymentIntent checkout, order line-item snapshots, admin dashboard, cache-aside Redis catalog that degrades gracefully, Nginx and Docker Compose. From the README: the product catalog comes from an external API and is cached in Redis (5-minute TTL); when Redis is down the request continues without caching; Next.js 14 App Router frontend; PostgreSQL 16 with golang-migrate; Nginx rate limiting; health-checked Docker Compose startup order.

## Systems & networking in C/C++ (public repositories: HTTP-Proxy, micro-http-server, Password-Manager)

From the CV: a multi-client HTTP server built from POSIX sockets up, a multi-hop HTTP forward proxy with layered encryption (in progress), and a terminal password manager with per-secret hybrid encryption (AES-256-GCM, GPG). From the READMEs: the proxy has single-hop forwarding and multi-hop chain routing working, with AES and RSA layered encryption between hops in progress; the password manager stores secrets in PostgreSQL, each under a fresh AES-256 key that is GPG-encrypted to the user's key fingerprint (C++20, CMake, Docker Compose for the database).

## Order & revenue management platform (no public repository)

From the CV: Go, Next.js, TypeScript, PostgreSQL; a multi-role web application with RBAC, order management, revenue reporting, and notifications.

## RPG campaign manager (public repository: rpg-campaign-manager)

Final project for the Internet Software Architecture course: Java 21, Spring Boot 3 REST API with JWT access and refresh tokens and role-based authorization, Spring Data JPA over PostgreSQL, a React single-page frontend, Docker Compose, a Postman collection for the API. Game masters run campaigns, sessions, and item catalogs; players manage characters and inventories.

## Home lab

Forgejo git forge on a self-hosted server, hardened Linux servers, Prometheus and Grafana monitoring; free-time projects on top: IRC chats hosted over Tor onion services and I2P garlic routing, and Rust implementations for systems work. Everything else the owner runs privately stays off the site.
