import type { MetadataRoute } from "next";
import { SITE } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE.url}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
