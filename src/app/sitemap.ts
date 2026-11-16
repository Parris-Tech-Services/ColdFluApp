import type { MetadataRoute } from "next";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://cold-flu-app.vercel.app";
  const staticRoutes = [
    "",
    "/health-reference",
    "/health-reference/roadmap",
    "/health-reference/resources",
    "/health-reference/research",
    "/health-reference/quizzes",
    "/health-reference/apps",
    "/modules",
    "/sources",
    "/about/methodology",
    "/about/privacy",
    "/about/corrections",
  ];

  return [
    ...staticRoutes.map((route, index) => ({
      url: `${base}${route}`,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...publicModules(await getCanonicalModules()).map((module) => ({
      url: `${base}/modules/${module.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
