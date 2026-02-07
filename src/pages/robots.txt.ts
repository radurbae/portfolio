const SITE = import.meta.env.SITE || "https://radurbae.github.io";
const BASE_URL = import.meta.env.BASE_URL || "/";

const sitemapUrl = new URL("sitemap.xml", new URL(BASE_URL, SITE)).toString();

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
