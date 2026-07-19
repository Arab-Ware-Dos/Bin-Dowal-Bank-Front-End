export const dynamic = "force-static";

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo/site-config";
import { getProductionSitemapFamilies } from "@/lib/seo/sitemap-routes";
import { Locale } from "@/i18n/config";

function buildLocalizedUrl(locale: Locale, pathname: string): string {
  const normalizedPath = pathname === "/" ? "" : pathname;
  return `${SITE_URL}/${locale}${normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getProductionSitemapFamilies().flatMap((route) => {
    const arUrl = buildLocalizedUrl("ar", route.pathname);
    const enUrl = buildLocalizedUrl("en", route.pathname);

    const languages = {
      ar: arUrl,
      en: enUrl,
    };

    return [
      {
        url: arUrl,
        alternates: { languages },
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        ...(route.lastModified ? { lastModified: route.lastModified } : {}),
      },
      {
        url: enUrl,
        alternates: { languages },
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        ...(route.lastModified ? { lastModified: route.lastModified } : {}),
      },
    ];
  });
}
