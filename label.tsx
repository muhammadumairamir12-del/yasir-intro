import { SITE_CONFIG, ALL_SERVICES, CATEGORIES } from "@/config/multan";

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  const services = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const categories = CATEGORIES.map((c) => ({
    url: `${baseUrl}/categories/${c.id}`,
    lastModified: new Date(),
  }));

  const routes = ["", "/how-it-works", "/contact", "/services"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...services, ...categories];
}
