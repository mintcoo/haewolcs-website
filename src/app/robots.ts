import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/edit/", "/admin"],
    },
    sitemap: "https://해월씨에스.com/sitemap.xml",
  };
}
