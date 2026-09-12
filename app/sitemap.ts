import type { MetadataRoute } from "next";
import { caseStudies, SITE } from "@/data";

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
    ...caseStudies.map((study) => ({
      url: `${SITE.url}/work/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
