import type { MetadataRoute } from "next";

const BASE_URL = "https://dabcloud.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                                         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/billing`,                            lastModified: new Date("2026-03-26"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`,                               lastModified: new Date("2026-03-26"), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/blog/what-is-a-cli-agent`,           lastModified: new Date("2026-03-26"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog/best-ai-cli-agents-2026`,       lastModified: new Date("2026-03-26"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog/how-to-install-krud-ai`,        lastModified: new Date("2026-03-26"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
