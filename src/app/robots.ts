import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/edit/", "/admin"],
    },
    sitemap: "https://xn--9t4b19booo6a320c.com/sitemap.xml",
  };
}
