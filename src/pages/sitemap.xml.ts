import { CASE_STUDIES } from "@/data/portfolio-data";

const SITE = import.meta.env.SITE || "https://radurbae.github.io";
const BASE_URL = import.meta.env.BASE_URL || "/";

const base = new URL(BASE_URL, SITE);

function absolutePath(path: string) {
  if (path === "/") {
    return base.toString();
  }

  const normalized = path.replace(/^\/+/, "").replace(/\/?$/, "/");
  return new URL(normalized, base).toString();
}

export function GET() {
  const staticPages = ["/", "/about", "/work", "/contact"];

  const urls = [
    ...staticPages.map((path) => ({
      loc: absolutePath(path),
      lastmod: new Date().toISOString().split("T")[0]
    })),
    ...CASE_STUDIES.map((study) => ({
      loc: absolutePath(`/work/${study.slug}`),
      lastmod: study.updatedAt
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (entry) => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
