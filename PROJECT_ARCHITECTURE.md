# Project Architecture Notes

Notes on the systems shown on the portfolio. Client work is licensed and under agreement, so it is not documented here beyond what the site itself says.

## Client work (Fairphone, 2025 – present)

Odoo modules for sustainability and procurement operations that replaced manual, hand-kept tracking; replication of ERP data into analytical warehouses; the architecture of a customer-facing web shop on top of Odoo. Stack: Odoo, Python, PostgreSQL. Nothing about internals, data, or numbers is recorded in this repository; the site's client page carries a visible note to that effect.

## Toy Store (university project, public repository)

Everything below is from the repository README.

- Nginx reverse proxy with rate limiting (auth 10 req/min, other API 200 req/min) as the only public entry point.
- Go 1.23 + Gin API in three layers (handlers, services, repositories); JWT middleware; RBAC by role claim.
- Next.js 14 App Router: server components for the home page, client components with Zustand and Axios elsewhere; Axios interceptor refreshes tokens on 401; Zod validation; next-themes.
- PostgreSQL 16 (users, orders, order_items, cart_items, wishlist_items; UUID keys; golang-migrate).
- Redis 7: refresh tokens (15-minute access, 7-day refresh, rotation) and catalog cache (cache-aside, 5-minute TTL, graceful degradation).
- Stripe two-step PaymentIntent flow; order lines snapshot name, price, image.
- Docker Compose with health-checked startup order.
- Known limitations: in-memory search, client-side pagination, HTTP only, webhooks need the Stripe CLI, no email.

## RPG campaign manager (university coursework, public repository)

Final project for the Internet Software Architecture course: Spring Boot 3.4 REST API (Java 21) with JWT access and refresh tokens and role-based authorization, Spring Data JPA over PostgreSQL 16, a React 18 SPA (Vite, React Router, Axios), Docker Compose, Postman collection for the API.

## HTTP forward proxy (C++, public repository)

From the README: a C++ HTTP forward proxy on native sockets. Phases 1 and 2 complete: an HTTP server with GET and POST handling, single-hop forwarding, and multi-hop chain routing (Proxy A → Proxy B → destination). Phase 3 in progress: AES symmetric encryption between nodes, RSA for key exchange, layered encryption and decryption at each hop.

## Terminal password manager (C++20, public repository)

From the README: secrets stored in PostgreSQL; each password encrypted with a fresh random AES-256 key, that key GPG-encrypted (OpenPGP) to the user's key fingerprint and stored alongside the ciphertext; new entries use AES-256-GCM (`v2` envelope), legacy AES-256-CBC rows still read; C++20 (GCC 13+ / Clang 16+), CMake, Docker Compose for the database.

## Control Management System Platform

Multi-role CMS web application with authentication, order management, revenue reports, a notification system, and role-based access control (Go, Next.js, React, TypeScript, PostgreSQL). No public repository.

## Home lab

Self-hosted Ubuntu servers with a Forgejo git forge; home network and custom iptables firewall rules; SSH hardening automated end to end with the owner's own script; Grafana and Prometheus monitoring; local blockchains for experiments. Origins: Hack The Box (Linux, Git, Nmap, Kali Linux).
