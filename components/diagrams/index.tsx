import type { DiagramId } from "@/types";
import Figure from "./Figure";
import FlowDiagram from "./FlowDiagram";

/** Picks the figure for a case study. Only public projects have diagrams. */
export function CaseStudyDiagram({ id }: { id?: DiagramId }) {
  switch (id) {
    case "toy-store":
      return (
        <Figure caption="Runtime topology from the repository README: Nginx in front, the Next.js frontend and Go API behind it, PostgreSQL and Redis as stores, Stripe and the external catalog API as outside services.">
          <FlowDiagram
            label="Toy Store runtime topology"
            stages={[
              {
                title: "Edge",
                tone: "input",
                items: [
                  { label: "Browser" },
                  {
                    label: "Nginx reverse proxy",
                    note: "rate limits: auth 10 req/min, API 200 req/min",
                  },
                ],
              },
              {
                title: "Frontend",
                tone: "process",
                items: [
                  {
                    label: "Next.js 14 App Router",
                    note: "server components for the home page; Zustand and Axios for cart, checkout, profile",
                  },
                ],
              },
              {
                title: "API",
                tone: "process",
                items: [
                  {
                    label: "Go + Gin, three layers",
                    note: "handlers, services, repositories; JWT middleware and RBAC",
                  },
                ],
              },
              {
                title: "Stores and services",
                tone: "store",
                items: [
                  {
                    label: "PostgreSQL 16",
                    note: "users, orders, order items, cart, wishlist",
                  },
                  {
                    label: "Redis 7",
                    note: "refresh tokens; catalog cache, 5-minute TTL",
                  },
                  {
                    label: "Stripe",
                    note: "PaymentIntent; card tokenized in the browser",
                  },
                  {
                    label: "External toy catalog API",
                    note: "read through the Redis cache-aside layer",
                  },
                ],
              },
            ]}
          />
        </Figure>
      );

    default:
      return null;
  }
}
