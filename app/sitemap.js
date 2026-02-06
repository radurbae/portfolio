import { CASE_STUDIES } from "@/lib/portfolio-data";

export const dynamic = "force-static";

const BASE_URL = process.env.SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = ["/", "/work", "/about", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));

  const caseRoutes = CASE_STUDIES.map((study) => ({
    url: `${BASE_URL}/work/${encodeURIComponent(study.slug)}`,
    lastModified: study.updatedAt ? new Date(study.updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticRoutes, ...caseRoutes];
}
