import { fetchAPI } from "@/lib/api-client";
import { bankingServicesData } from "@/data/banking-services/banking-services";
import { ServicePageData, ServiceFeatureCard, ServiceStep, ServiceFaq, ServiceSimpleItem, ServiceTableRow } from "@/types/banking-service-page";
import { BankServiceItemData, BankServiceSingleApiResponse } from "@/types/banking-service-api";

/**
 * Map of alias slugs to canonical slugs between DB API, Navigation, and Static Fallback.
 */
const SLUG_ALIASES: Record<string, string> = {
  "dool-express": "dowal-express",
  "investment-deposit": "investment-deposits",
  "swift-transfers": "corporate-swift-transfers",
  "bank-guarantees": "corporate-bank-guarantees",
  "payroll-transfer": "business-banking-payroll",
  "business-accounts": "corporate-current-account",

  "financing-takamul": "takamul-alternative-energy-financing",
  "financing-thimar": "thimar-sme-financing",
  "financing-taameer": "tameer-construction-financing",
  "financing-noor": "noor-women-projects-financing",
  "financing-zad": "financing-zad",
  "zad-financing": "financing-zad",

  "expat": "expat-account",
  "expat-savings-deposits": "expat-account",
  "expat-international-transfer": "expat-account",
  "expat-local-transfer": "expat-account",
  "expat-digital-services": "expat-account",

  "minors-investment-deposits": "minors-account",

  "noor": "noor-ladies-account",
  "noor-savings-account": "noor-ladies-account",
  "noor-investment-deposits": "noor-ladies-account",
  "noor-digital-services": "noor-ladies-account",
  "noor-card": "noor-ladies-card",

  "mobile-banking-app": "mobile-banking",
  "business-platform": "internet-banking",
  "pos-network": "mushtarayati-network",
  "atm-cards-services": "debit-card",
};

export function resolveSlug(slug: string): string {
  return SLUG_ALIASES[slug] || slug;
}

/**
 * Maps raw backend API response into frontend ServicePageData layout structure.
 */
export function normalizeBankServiceApiResponse(apiData: BankServiceItemData): ServicePageData {
  // Determine section key based on category
  const categoryAr = apiData.category_ar || "";
  const categoryEn = apiData.category_en || "";

  let section: "personal" | "business" | "accounts" | "e-services" = "personal";
  if (categoryAr.includes("أعمال") || categoryEn.toLowerCase().includes("business")) {
    section = "business";
  } else if (categoryAr.includes("إلكترونية") || categoryEn.toLowerCase().includes("digital") || categoryEn.toLowerCase().includes("electronic")) {
    section = "e-services";
  } else if (categoryAr.includes("حسابات") || categoryEn.toLowerCase().includes("account")) {
    section = "accounts";
  }

  // Feature cards extraction
  const featureCardsItems: ServiceFeatureCard[] = [];
  
  if (apiData.sections_content && Array.isArray(apiData.sections_content)) {
    apiData.sections_content
      .filter((sc) => sc.type === "feature")
      .forEach((sc, idx) => {
        featureCardsItems.push({
          id: `sc-feature-${sc.id || idx}`,
          title: { ar: sc.title_ar || sc.title || "", en: sc.title_en || sc.title || "" },
          description: { ar: sc.content_ar || sc.content || "", en: sc.content_en || sc.content || "" },
          icon: "CheckCircle2",
        });
      });
  }

  if (apiData.features && Array.isArray(apiData.features)) {
    apiData.features.forEach((f: any, idx: number) => {
      const titleAr = f.title_ar || f.title || "";
      const titleEn = f.title_en || f.title || titleAr;
      const descAr = f.description_ar || f.content_ar || f.description || f.content || "";
      const descEn = f.description_en || f.content_en || f.description || f.content || descAr;
      if (titleAr || titleEn || descAr || descEn) {
        featureCardsItems.push({
          id: `feature-${idx}`,
          title: { ar: titleAr, en: titleEn },
          description: { ar: descAr, en: descEn },
          icon: "CheckCircle2",
        });
      }
    });
  }

  // Steps extraction
  const stepsItems: ServiceStep[] = [];
  
  if (apiData.sections_content && Array.isArray(apiData.sections_content)) {
    apiData.sections_content
      .filter((sc) => sc.type === "step")
      .forEach((sc, idx) => {
        stepsItems.push({
          id: `sc-step-${sc.id || idx}`,
          title: { ar: sc.title_ar || sc.title || "", en: sc.title_en || sc.title || "" },
          description: { ar: sc.content_ar || sc.content || "", en: sc.content_en || sc.content || "" },
        });
      });
  }

  if (apiData.steps && Array.isArray(apiData.steps)) {
    apiData.steps.forEach((s: any, idx: number) => {
      const titleAr = s.title_ar || s.title || "";
      const titleEn = s.title_en || s.title || titleAr;
      const descAr = s.description_ar || s.content_ar || s.description || s.content || "";
      const descEn = s.description_en || s.content_en || s.description || s.content || descAr;
      if (titleAr || titleEn || descAr || descEn) {
        stepsItems.push({
          id: `step-${idx}`,
          title: { ar: titleAr, en: titleEn },
          description: { ar: descAr, en: descEn },
        });
      }
    });
  }

  // FAQs extraction
  const faqItems: ServiceFaq[] = [];
  
  if (apiData.sections_content && Array.isArray(apiData.sections_content)) {
    apiData.sections_content
      .filter((sc) => sc.type === "faq")
      .forEach((sc, idx) => {
        faqItems.push({
          id: `sc-faq-${sc.id || idx}`,
          question: { ar: sc.title_ar || sc.title || "", en: sc.title_en || sc.title || "" },
          answer: { ar: sc.content_ar || sc.content || "", en: sc.content_en || sc.content || "" },
        });
      });
  }

  if (apiData.faqs && Array.isArray(apiData.faqs)) {
    apiData.faqs.forEach((f: any, idx: number) => {
      const qAr = f.question_ar || f.question || f.title_ar || f.title || "";
      const qEn = f.question_en || f.question || f.title_en || f.title || qAr;
      const aAr = f.answer_ar || f.answer || f.content_ar || f.content || "";
      const aEn = f.answer_en || f.answer || f.content_en || f.content || aAr;
      if (qAr || qEn || aAr || aEn) {
        faqItems.push({
          id: `faq-${idx}`,
          question: { ar: qAr, en: qEn },
          answer: { ar: qAr, en: qEn },
        });
      }
    });
  }

  // Why items
  const whyItems: ServiceSimpleItem[] = [];
  if (apiData.why_content && Array.isArray(apiData.why_content)) {
    apiData.why_content.forEach((item, idx) => {
      if (typeof item === "string") {
        whyItems.push({ id: `why-${idx}`, text: { ar: item, en: item } });
      } else if (item && typeof item === "object") {
        const textAr = (item as any).text_ar || (item as any).content_ar || (item as any).ar || (item as any).title_ar || "";
        const textEn = (item as any).text_en || (item as any).content_en || (item as any).en || (item as any).title_en || textAr;
        if (textAr || textEn) {
          whyItems.push({
            id: `why-${idx}`,
            text: { ar: textAr, en: textEn },
          });
        }
      }
    });
  }

  // Audience items
  const audienceItems: ServiceSimpleItem[] = [];
  if (apiData.target_audiences && Array.isArray(apiData.target_audiences)) {
    apiData.target_audiences.forEach((item, idx) => {
      if (typeof item === "string") {
        audienceItems.push({ id: `aud-${idx}`, text: { ar: item, en: item } });
      } else if (item && typeof item === "object") {
        const textAr = (item as any).text_ar || (item as any).content_ar || (item as any).ar || (item as any).title_ar || "";
        const textEn = (item as any).text_en || (item as any).content_en || (item as any).en || (item as any).title_en || textAr;
        if (textAr || textEn) {
          audienceItems.push({
            id: `aud-${idx}`,
            text: { ar: textAr, en: textEn },
          });
        }
      }
    });
  }

  // Requirements / Conditions
  const conditionItems: ServiceSimpleItem[] = [];
  if (apiData.conditions && Array.isArray(apiData.conditions)) {
    apiData.conditions.forEach((item, idx) => {
      if (typeof item === "string") {
        conditionItems.push({ id: `cond-${idx}`, text: { ar: item, en: item } });
      } else if (item && typeof item === "object") {
        const textAr = (item as any).text_ar || (item as any).content_ar || (item as any).ar || (item as any).title_ar || "";
        const textEn = (item as any).text_en || (item as any).content_en || (item as any).en || (item as any).title_en || textAr;
        if (textAr || textEn) {
          conditionItems.push({
            id: `cond-${idx}`,
            text: { ar: textAr, en: textEn },
          });
        }
      }
    });
  }

  // Pricing table
  const tableRows: ServiceTableRow[] = [];
  if (apiData.pricing_table && Array.isArray(apiData.pricing_table)) {
    apiData.pricing_table.forEach((row, idx) => {
      tableRows.push({
        id: `table-${idx}`,
        label: { ar: row.label_ar || "", en: row.label_en || "" },
        value: { ar: row.value_ar || "", en: row.value_en || "" },
      });
    });
  }

  const titleAr = apiData.title_ar || apiData.hero_title || apiData.page_name_ar || apiData.name_ar || "";
  const titleEn = apiData.title_en || apiData.hero_title || apiData.page_name_en || apiData.name_en || titleAr;

  const pageNameAr = apiData.page_name_ar || apiData.name_ar || apiData.title_ar || "";
  const pageNameEn = apiData.page_name_en || apiData.name_en || apiData.title_en || pageNameAr;

  return {
    slug: apiData.slug,
    section,
    title: { ar: titleAr, en: titleEn },
    subtitle: {
      ar: apiData.hero_description || apiData.about_content_ar || apiData.title_ar || "",
      en: apiData.hero_description || apiData.about_content_en || apiData.title_en || "",
    },
    heroImage: "/images/company-header-cover.png",
    breadcrumbs: [
      { label: { ar: categoryAr || "خدمات البنك", en: categoryEn || "Bank Services" }, href: "/services" },
      { label: { ar: pageNameAr, en: pageNameEn } },
    ],
    tagline: { ar: categoryAr || "خدمات البنك", en: categoryEn || "Bank Services" },
    seoDescription: {
      ar: apiData.meta_description || apiData.about_content_ar || "",
      en: apiData.meta_description || apiData.about_content_en || "",
    },
    overview: (apiData.about_title_ar || apiData.about_content_ar || apiData.about_content_en || apiData.about_title)
      ? {
          title: { ar: apiData.about_title_ar || apiData.about_title || "عن الخدمة", en: apiData.about_title_en || "About Service" },
          description: { ar: apiData.about_content_ar || apiData.about_content || "", en: apiData.about_content_en || apiData.about_content || "" },
        }
      : undefined,
    why: (apiData.why_title_ar || apiData.why_title || whyItems.length > 0)
      ? {
          title: { ar: apiData.why_title_ar || apiData.why_title || "لماذا تختار هذه الخدمة؟", en: apiData.why_title_en || "Why Choose This Service?" },
          description: apiData.why_description_ar ? { ar: apiData.why_description_ar, en: apiData.why_description_en || "" } : undefined,
          items: whyItems.length > 0 ? whyItems : undefined,
        }
      : undefined,
    featureCards: (apiData.features_title_ar || apiData.features_title_en || featureCardsItems.length > 0)
      ? {
          title: { ar: apiData.features_title_ar || "مميزات الخدمة", en: apiData.features_title_en || "Service Features" },
          subtitle: apiData.features_description_ar ? { ar: apiData.features_description_ar, en: apiData.features_description_en || "" } : undefined,
          items: featureCardsItems,
        }
      : undefined,
    audience: (apiData.target_audiences && audienceItems.length > 0)
      ? {
          title: { ar: "الفئات المستهدفة", en: "Target Audience" },
          items: audienceItems,
        }
      : undefined,
    requirementsSection: (apiData.conditions_title_ar || conditionItems.length > 0 || tableRows.length > 0)
      ? {
          title: { ar: apiData.conditions_title_ar || "شروط ومتطلبات الخدمة", en: apiData.conditions_title_en || "Conditions & Requirements" },
          subtitle: apiData.conditions_description_ar ? { ar: apiData.conditions_description_ar, en: apiData.conditions_description_en || "" } : undefined,
          items: conditionItems,
          table: tableRows.length > 0 ? tableRows : undefined,
        }
      : undefined,
    stepsSection: (apiData.steps_title_ar || stepsItems.length > 0)
      ? {
          title: { ar: apiData.steps_title_ar || "خطوات التقديم", en: apiData.steps_title_en || "Application Steps" },
          subtitle: apiData.steps_description_ar ? { ar: apiData.steps_description_ar, en: apiData.steps_description_en || "" } : undefined,
          steps: stepsItems,
        }
      : undefined,
    faqs: faqItems.length > 0
      ? {
          title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
          items: faqItems,
        }
      : undefined,
    ctaSection: {
      title: { ar: "ابدأ مستقبلك المصرفي اليوم", en: "Start Your Banking Journey Today" },
      description: { ar: "توجه إلى أقرب فرع لبنك بن دول للاستفادة من هذه الخدمة أو تواصل مع خدمة العملاء.", en: "Visit the nearest Bin Dowal Bank branch to benefit from this service or contact support." },
      primaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "الفروع والصرافات", en: "Branches & ATMs" },
      secondaryHref: "/branches",
    },
    relatedServicesData: apiData.related_services_data || (apiData.related_services ? apiData.related_services.map(rs => ({
      service_slug: rs.slug,
      title_ar: rs.title_ar || rs.name_ar || "",
      title_en: rs.title_en || rs.name_en || "",
      link_url: `/services/${rs.slug}`
    })) : undefined),
  };
}

/**
 * Fetches a single banking service page data by slug from API with fallback to local static data.
 */
export async function getBankingServicePageData(
  slug: string,
  locale?: string
): Promise<ServicePageData | null> {
  const targetSlug = resolveSlug(slug);

  // Try API with targetSlug first, then raw slug
  for (const s of [targetSlug, slug]) {
    try {
      const response = await fetchAPI<BankServiceSingleApiResponse>(`/services/${s}`, {
        locale,
        cache: 'no-store',
      });

      if (response && response.data) {
        console.log(`🟢 [API Connected] Service data loaded LIVE from Backend API: GET /api/v1/services/${s}`);
        const normalized = normalizeBankServiceApiResponse(response.data);
        return normalized;
      }
    } catch {
      // Continue to next attempt or fallback
    }
  }

  // Fallback to local static JSON data ONLY if API fetch fails or API returns no data
  console.warn(`⚠️ [API Fallback] API fetch failed for slug "${slug}". Using local static fallback data.`);
  const fallbackItem = bankingServicesData.find(
    (item) => item.slug === targetSlug || item.slug === slug
  );
  return fallbackItem || null;
}

export const getBankingServiceBySlug = getBankingServicePageData;

/**
 * Helper to fetch all services list for dynamic routes / static paths.
 */
export async function getAllServicesSlugs(): Promise<string[]> {
  try {
    const response = await fetchAPI<{ data: BankServiceItemData[] }>('/services', {
      cache: 'no-store',
    });
    if (response && Array.isArray(response.data) && response.data.length > 0) {
      return response.data.map((item) => item.slug);
    }
  } catch {
    // Fallback to static slugs
  }

  return bankingServicesData.map((item) => item.slug);
}
