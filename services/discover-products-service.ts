import { fetchAPI } from "@/lib/api-client";
import { getNavigationData } from "@/services/navigation-service";
import { NavigationItem, NavigationSection } from "@/types/navigation";
import { BankServiceItemData } from "@/types/banking-service-api";

export interface DiscoverProduct {
  id: string | number;
  title: string;
  title_ar?: string;
  title_en?: string;
  description: string;
  description_ar?: string;
  description_en?: string;
  category: "personal" | "business";
  image: string;
  href: string;
  order: number;
}

const DEFAULT_PRODUCT_IMAGES: Record<string, string> = {
  "current-account": "/images/customer-services/Current-account.webp",
  "savings-account": "/images/customer-services/Savings.webp",
  "investment-deposits": "/images/customer-services/Investment-deposits.webp",
  "minors-account": "/images/customer-services/minors-account.webp",
  "minor-account": "/images/customer-services/minors-account.webp",
  "expat-account": "/images/customer-services/Current-account.webp",

  "corporate-current-account": "/images/business-services/Corporate-current-account.webp",
  "corporate-investment-deposits": "/images/business-services/Investment-deposits.webp",
  "corporate-swift-transfers": "/images/business-services/SWIFT-transfer.webp",
  "swift-transfers": "/images/business-services/SWIFT-transfer.webp",
  "corporate-bank-guarantees": "/images/business-services/Letter-of-guarantee.webp",
  "bank-guarantees": "/images/business-services/Letter-of-guarantee.webp",
  "business-banking-payroll": "/images/business-services/Corporate-current-account.webp",
  "payroll-transfer": "/images/business-services/Corporate-current-account.webp",
};

/**
 * Normalizes URL or slug to find matching BankService and Image keys.
 */
function cleanSlug(urlOrSlug: string): string {
  if (!urlOrSlug) return "";
  return urlOrSlug
    .replace(/^https?:\/\/[^\/]+/, "")
    .replace(/^\/?(ar|en)\//, "")
    .replace(/^\/?services\//, "")
    .replace(/^\/?personal\//, "")
    .replace(/^\/?business\//, "")
    .replace(/^\/?/, "")
    .trim();
}

/**
 * Resolves full image URL if uploaded or falls back to standard card image.
 */
function resolveProductImage(iconConfig: { type?: string; value?: string } | null | undefined, slug: string, category: "personal" | "business"): string {
  const defaultFallback = category === "personal"
    ? "/images/customer-services/Current-account.webp"
    : "/images/business-services/Corporate-current-account.webp";

  const fallback = DEFAULT_PRODUCT_IMAGES[slug] || defaultFallback;

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

// Fallback initial products
export const FALLBACK_DISCOVER_PRODUCTS: DiscoverProduct[] = [
  {
    id: 1,
    title: "discoverProducts.prod1.title",
    description: "discoverProducts.productDesc",
    category: "personal",
    image: "/images/customer-services/Current-account.webp",
    href: "/services/current-account",
    order: 1,
  },
  {
    id: 2,
    title: "discoverProducts.prod2.title",
    description: "discoverProducts.productDesc",
    category: "personal",
    image: "/images/customer-services/Savings.webp",
    href: "/services/savings-account",
    order: 2,
  },
  {
    id: 3,
    title: "discoverProducts.prod3.title",
    description: "discoverProducts.productDesc",
    category: "personal",
    image: "/images/customer-services/Investment-deposits.webp",
    href: "/services/investment-deposits",
    order: 3,
  },
  {
    id: 4,
    title: "discoverProducts.prod4.title",
    description: "discoverProducts.productDesc",
    category: "personal",
    image: "/images/customer-services/minors-account.webp",
    href: "/services/minors-account",
    order: 4,
  },
  {
    id: 5,
    title: "discoverProducts.prod5.title",
    description: "discoverProducts.productDesc",
    category: "business",
    image: "/images/business-services/Corporate-current-account.webp",
    href: "/services/corporate-current-account",
    order: 5,
  },
  {
    id: 6,
    title: "discoverProducts.prod6.title",
    description: "discoverProducts.productDesc",
    category: "business",
    image: "/images/business-services/Investment-deposits.webp",
    href: "/services/corporate-investment-deposits",
    order: 6,
  },
  {
    id: 7,
    title: "discoverProducts.prod7.title",
    description: "discoverProducts.productDesc",
    category: "business",
    image: "/images/business-services/SWIFT-transfer.webp",
    href: "/services/swift-transfers",
    order: 7,
  },
  {
    id: 8,
    title: "discoverProducts.prod8.title",
    description: "discoverProducts.productDesc",
    category: "business",
    image: "/images/business-services/Letter-of-guarantee.webp",
    href: "/services/bank-guarantees",
    order: 8,
  },
];

/**
 * Fetches the first 4 products for Personal (from Navigation -> Individual Services -> Accounts)
 * and the first 4 products for Business (from Navigation -> Business Services -> Large & Medium Enterprises)
 * matching them with BankService descriptions and images.
 */
export async function getDiscoverProducts(locale: string = "ar"): Promise<DiscoverProduct[]> {
  const isAr = locale === "ar";

  try {
    const [navSections, servicesRes] = await Promise.all([
      getNavigationData(locale),
      fetchAPI<{ data: BankServiceItemData[] }>("/services", {
        locale,
        next: { revalidate: 60 },
      }),
    ]);

    const bankServices = servicesRes?.data || [];
    const bankServicesMap = new Map<string, BankServiceItemData>();
    bankServices.forEach((svc) => {
      if (svc.slug) {
        bankServicesMap.set(cleanSlug(svc.slug), svc);
      }
    });

    let personalItems: NavigationItem[] = [];
    let businessItems: NavigationItem[] = [];

    for (const section of navSections) {
      const secKey = (section.key || "").toLowerCase();
      const secTitle = (section.title_ar || section.title || "").toLowerCase();
      const secTitleEn = (section.title_en || "").toLowerCase();

      // 1. Individual / Personal Banking
      if (
        secKey.includes("individual") ||
        secKey.includes("personal") ||
        secTitle.includes("أفراد") ||
        secTitleEn.includes("individual") ||
        secTitleEn.includes("personal")
      ) {
        if (section.items && Array.isArray(section.items)) {
          for (const it of section.items) {
            const itTitle = (it.title_ar || it.title || "").trim();
            const itTitleEn = (it.title_en || "").toLowerCase();

            if (itTitle.includes("حساب") || itTitleEn.includes("account")) {
              if (it.children && it.children.length > 0) {
                personalItems = it.children.slice(0, 4);
                break;
              }
            }
          }
        }
      }

      // 2. Business Banking
      if (
        secKey.includes("business") ||
        secTitle.includes("أعمال") ||
        secTitleEn.includes("business")
      ) {
        if (section.items && Array.isArray(section.items)) {
          for (const it of section.items) {
            const itTitle = (it.title_ar || it.title || "").trim();
            const itTitleEn = (it.title_en || "").toLowerCase();

            if (
              itTitle.includes("كبيرة") ||
              itTitle.includes("متوسطة") ||
              itTitleEn.includes("large") ||
              itTitleEn.includes("corporate") ||
              itTitle.includes("شركات")
            ) {
              if (it.children && it.children.length > 0) {
                businessItems = it.children.slice(0, 4);
                break;
              }
            }
          }
        }
      }
    }

    const mapNavToProduct = (navItem: NavigationItem, index: number, category: "personal" | "business"): DiscoverProduct => {
      const url = navItem.url || "";
      const slug = cleanSlug(url);
      const matchedService = bankServicesMap.get(slug);

      // Title from Navigation
      const titleAr = navItem.title_ar || navItem.title || "";
      const titleEn = navItem.title_en || navItem.title || titleAr;
      const title = isAr ? titleAr : (titleEn || titleAr);

      // Description from Banking Service
      const descAr = matchedService?.summary_ar || matchedService?.about_content_ar || "";
      const descEn = matchedService?.summary_en || matchedService?.about_content_en || descAr;
      const description = isAr
        ? (descAr || "خدمة مصرفية رائدة وموثوقة مصممة لتلبية احتياجاتك المالية.")
        : (descEn || "Leading banking service designed to meet your financial needs.");

      // Image from Banking Service icon_config or fallback
      const image = resolveProductImage(matchedService?.icon_config, slug, category);

      return {
        id: `${category}-${slug || index + 1}`,
        title,
        title_ar: titleAr,
        title_en: titleEn,
        description,
        description_ar: descAr,
        description_en: descEn,
        category,
        image,
        href: url || `/services/${slug}`,
        order: navItem.order_index ?? (index + 1),
      };
    };

    const finalPersonal = personalItems.map((item, idx) => mapNavToProduct(item, idx, "personal"));
    const finalBusiness = businessItems.map((item, idx) => mapNavToProduct(item, idx, "business"));

    if (finalPersonal.length > 0 || finalBusiness.length > 0) {
      console.log(`🟢 [DiscoverProducts API Connected] Loaded ${finalPersonal.length} Personal and ${finalBusiness.length} Business products from Navigation & Services.`);
      return [
        ...(finalPersonal.length > 0 ? finalPersonal : FALLBACK_DISCOVER_PRODUCTS.filter(p => p.category === "personal")),
        ...(finalBusiness.length > 0 ? finalBusiness : FALLBACK_DISCOVER_PRODUCTS.filter(p => p.category === "business")),
      ];
    }
  } catch (error) {
    console.warn(
      "⚠️ [DiscoverProducts Fallback Active] Failed to fetch products from API. Using local fallback data.",
      error instanceof Error ? error.message : error
    );
  }

  return FALLBACK_DISCOVER_PRODUCTS;
}
