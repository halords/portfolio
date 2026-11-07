import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-three-smoky-nsmn4d28em.vercel.app",
      lastModified: new Date("2026-11-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
