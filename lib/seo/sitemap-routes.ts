import { LOCALIZED_STATIC_ROUTES } from "@/lib/localized-routes";
import { newsItems } from "@/data/news";

export type SitemapRouteFamily = {
  pathname: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  lastModified?: Date | string;
};

const SITEMAP_POLICY_BY_PATH: Record<string, Partial<SitemapRouteFamily>> = {
  "/": {
    changeFrequency: "weekly",
    priority: 1.0,
  },
  "/news": {
    changeFrequency: "daily",
    priority: 0.7,
  },
  "/about": {
    changeFrequency: "yearly",
    priority: 0.5,
  },
};

function resolveSitemapPolicy(pathname: string): Omit<SitemapRouteFamily, "pathname"> {
  // If we have an exact match in the manual policy
  if (SITEMAP_POLICY_BY_PATH[pathname]) {
    return {
      changeFrequency: "monthly",
      priority: 0.6,
      ...SITEMAP_POLICY_BY_PATH[pathname],
    } as Omit<SitemapRouteFamily, "pathname">;
  }

  // News details
  if (pathname.startsWith("/news/")) {
    const slug = pathname.replace("/news/", "");
    const newsItem = newsItems.find((n) => n.slug === slug || n.id.toString() === slug);
    return {
      changeFrequency: "monthly",
      priority: 0.5,
      ...(newsItem?.publishedAt ? { lastModified: newsItem.publishedAt } : {}),
    };
  }

  // Products and Services
  if (
    pathname.startsWith("/personal/") ||
    pathname.startsWith("/business/") ||
    pathname.startsWith("/accounts/") ||
    pathname.startsWith("/e-services/") ||
    pathname.startsWith("/cards") ||
    pathname.startsWith("/financing") ||
    pathname.startsWith("/business-banking") ||
    pathname.startsWith("/personal-banking") ||
    pathname.startsWith("/digital-channels") ||
    pathname.startsWith("/custom-services")
  ) {
    return {
      changeFrequency: "monthly",
      priority: 0.7,
    };
  }

  // About & Governance
  if (pathname.startsWith("/about/")) {
    return {
      changeFrequency: "yearly",
      priority: 0.5,
    };
  }

  // Contact / FAQ / ATM
  if (
    pathname.startsWith("/contact") ||
    pathname.startsWith("/customer-service") ||
    pathname.startsWith("/knowledge") ||
    pathname.startsWith("/branches") ||
    pathname.startsWith("/atm-and-branches")
  ) {
    return {
      changeFrequency: "monthly",
      priority: 0.6,
    };
  }

  // Default fallback
  return {
    changeFrequency: "monthly",
    priority: 0.5,
  };
}

export function getProductionSitemapFamilies(): SitemapRouteFamily[] {
  // LOCALIZED_STATIC_ROUTES already contains the exhaustive 66 family paths including the spread registries.
  const productionPaths = Array.from(new Set([...LOCALIZED_STATIC_ROUTES]));

  if (productionPaths.length !== 66) {
    throw new Error(`Expected exactly 66 production family paths, found ${productionPaths.length}.`);
  }

  return productionPaths.map((pathname) => {
    // Failsafe checks
    if (pathname.includes("root-proof")) {
      throw new Error(`Proof route leaked into sitemap: ${pathname}`);
    }
    if (pathname.startsWith("/ar") || pathname.startsWith("/en")) {
      throw new Error(`Route contains prepended locale: ${pathname}`);
    }

    return {
      pathname,
      ...resolveSitemapPolicy(pathname),
    };
  });
}
