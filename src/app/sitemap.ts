import type { MetadataRoute } from "next";

const baseUrl = "https://velunna.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/refund-policy",
    "/shipping-policy",
    "/privacy-policy",
    "/terms-of-service",
    "/legal-notice",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
