const BASE_URL = process.env.SITE_URL || "http://localhost:3000";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
