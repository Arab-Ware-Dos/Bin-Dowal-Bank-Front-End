import { fetchAPI } from "@/lib/api-client";
import { getNavigationData } from "@/services/navigation-service";
import { NavigationItem, NavigationSection } from "@/types/navigation";
import { BankServiceItemData } from "@/types/banking-service-api";
import { financingServices as fallbackFinancingData } from "@/data/financing-services";

export interface HomeFinancingService {
  id: string;
  title: string;
  title_ar?: string;
  title_en?: string;
  description: string;
  description_ar?: string;
  description_en?: string;
  image: string;
  href: string;
  order: number;
}

const DEFAULT_SLUG_IMAGES: Record<string, string> = {
  "takamul-alternative-energy-financing": "/images/financing-services/1.webp",
  "financing-takamul": "/images/financing-services/1.webp",
  "takamul": "/images/financing-services/1.webp",

  "thimar-sme-financing": "/images/financing-services/2.webp",
  "financing-thimar": "/images/financing-services/2.webp",
  "thimar": "/images/financing-services/2.webp",

  "solar": "/images/financing-services/3.webp",

  "noor-women-projects-financing": "/images/financing-services/4.webp",
  "financing-noor": "/images/financing-services/4.webp",
  "noor": "/images/financing-services/4.webp",

  "financing-zad": "/images/financing-services/5.webp",
  "zad-financing": "/images/financing-services/5.webp",
  "zad": "/images/financing-services/5.webp",

  "tameer-construction-financing": "/images/financing-services/6.webp",
  "financing-taameer": "/images/financing-services/6.webp",
  "tameer": "/images/financing-services/6.webp",
};

/**
 * Normalizes a URL or slug to find matching BankService and Image keys.
 */
function cleanSlug(urlOrSlug: string): string {
  if (!urlOrSlug) return "";
  return urlOrSlug
    .replace(/^https?:\/\/[^\/]+/, "")
    .replace(/^\/?(ar|en)\//, "")
    .replace(/^\/?services\//, "")
    .replace(/^\/?personal\//, "")
    .replace(/^\/?/, "")
    .trim();
}

/**
 * Resolves full image URL if uploaded to backend or public path.
 */
function resolveServiceImage(iconConfig: { type?: string; value?: string } | null | undefined, slug: string): string {
  const fallback = DEFAULT_SLUG_IMAGES[slug] || "/images/financing-services/1.webp";

  if (iconConfig && iconConfig.type === "image" && iconConfig.value) {
    const val = iconConfig.value;
    if (val.startsWith("http://") || val.startsWith("https://")) {
      return val;
    }
    if (val.startsWith("/storage")) {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      return `${apiBase.replace(/\/api\/v1\/?$/, "")}${val}`;
    }
    if (val.startsWith("/")) {
      return val;
    }
    return `/${val}`;
  }

  return fallback;
}

/**
 * Fetches the Financing Services specifically curated from the Navigation's "التمويلات" tab
 * and matched with their respective Banking Services details from the Backend API.
 */
export async function getHomeFinancingServices(locale: string = "ar"): Promise<HomeFinancingService[]> {
  const isAr = locale === "ar";

  try {
    // 1. Fetch Navigation and Banking Services in parallel
    const [navSections, servicesRes] = await Promise.all([
      getNavigationData(locale),
      fetchAPI<{ data: BankServiceItemData[] }>("/services", {
        locale,
        next: { revalidate: 60 },
      }),
    ]);

    const bankServices = servicesRes?.data || [];

    // Map bank services by clean slug for quick lookup
    const bankServicesMap = new Map<string, BankServiceItemData>();
    bankServices.forEach((svc) => {
      if (svc.slug) {
        bankServicesMap.set(cleanSlug(svc.slug), svc);
      }
    });

    // 2. Find the "التمويلات" / "Financing" sub-group in Navigation
    let financingNavItems: NavigationItem[] = [];

    // Traverse navigation menus to locate the "التمويلات" group
    for (const section of navSections) {
      if (!section.items || !Array.isArray(section.items)) continue;

      for (const item of section.items) {
        const itemTitle = (item.title_ar || item.title || "").trim();
        const itemTitleEn = (item.title_en || "").toLowerCase();

        if (
          itemTitle.includes("تمويل") ||
          itemTitleEn.includes("financing") ||
          item.title === "التمويلات"
        ) {
          if (item.children && item.children.length > 0) {
            financingNavItems = item.children;
            break;
          }
        }

        // Also check if any child group contains "التمويلات"
        if (item.children && Array.isArray(item.children)) {
          for (const subItem of item.children) {
            const subTitle = (subItem.title_ar || subItem.title || "").trim();
            const subTitleEn = (subItem.title_en || "").toLowerCase();
            if (
              subTitle.includes("تمويل") ||
              subTitleEn.includes("financing") ||
              subItem.title === "التمويلات"
            ) {
              if (subItem.children && subItem.children.length > 0) {
                financingNavItems = subItem.children;
                break;
              }
            }
          }
        }

        if (financingNavItems.length > 0) break;
      }

      if (financingNavItems.length > 0) break;
    }

    // 3. If navigation items found under "التمويلات", map them with the Banking Services API
    if (financingNavItems.length > 0) {
      const mappedServices: HomeFinancingService[] = financingNavItems.map((navItem, index) => {
        const url = navItem.url || "";
        const slug = cleanSlug(url);
        const matchedService = bankServicesMap.get(slug);

        // Title: From Navigation item directly (e.g. "تكامل", "ثمار", "تعمير", "نور", "زاد")
        const titleAr = navItem.title_ar || navItem.title || "";
        const titleEn = navItem.title_en || navItem.title || titleAr;
        const title = isAr ? titleAr : (titleEn || titleAr);

        // Description: From BankService summary
        const descAr = matchedService?.summary_ar || matchedService?.about_content_ar || "";
        const descEn = matchedService?.summary_en || matchedService?.about_content_en || descAr;
        const description = isAr
          ? (descAr || "حلول تمويلية إسلامية متميزة تلبي تطلعاتك.")
          : (descEn || "Distinctive Islamic financing solutions tailored for you.");

        // Image: From BankService icon_config or fallback image
        const image = resolveServiceImage(matchedService?.icon_config, slug);

        return {
          id: slug || `financing-${index + 1}`,
          title,
          title_ar: titleAr,
          title_en: titleEn,
          description,
          description_ar: descAr,
          description_en: descEn,
          image,
          href: url || `/services/${slug}`,
          order: navItem.order_index ?? (index + 1),
        };
      });

      console.log(`🟢 [Financing API Connected] Loaded ${mappedServices.length} dynamic financing services from Navigation & Services API.`);
      return mappedServices;
    }
  } catch (error) {
    console.warn(
      "⚠️ [Financing API Fallback Active] Failed to fetch dynamic financing services from API. Using local fallback data.",
      error instanceof Error ? error.message : error
    );
  }

  // 4. Fallback to local data
  return fallbackFinancingData
    .filter((s) => s.showOnHome)
    .sort((a, b) => a.order - b.order)
    .map((s) => ({
      id: s.id,
      title: s.titleKey,
      description: s.descriptionKey,
      image: s.image,
      href: s.href,
      order: s.order,
    }));
}

