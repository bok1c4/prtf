import type { HomeLab } from "@/types";

/** Self-hosted infrastructure plus the free-time projects that run on it. */
export const homelab: HomeLab = {
  intro: "Self-hosted infrastructure and free-time projects, run like production.",
  items: [
    { label: "forge", detail: "Forgejo git forge on a self-hosted server." },
    { label: "servers", detail: "Hardened Linux servers." },
    { label: "monitoring", detail: "Prometheus and Grafana over the stack." },
    {
      label: "irc",
      detail: "IRC chats hosted over onion services (Tor) and garlic routing (I2P).",
    },
    { label: "rust", detail: "Rust implementations for systems work, built in free time." },
  ],
};
