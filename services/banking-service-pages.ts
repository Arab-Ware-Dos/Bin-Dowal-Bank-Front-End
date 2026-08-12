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
  if (categoryAr.includes("أعمال") || categoryEn.toLowerCase().includes("business") || categoryEn.toLowerCase().includes("corporate")) {
    section = "business";
  } else if (categoryAr.includes("إلكترونية") || categoryAr.includes("رقمية") || categoryEn.toLowerCase().includes("digital") || categoryEn.toLowerCase().includes("electronic")) {
    section = "e-services";
  } else if (categoryAr.includes("حسابات") || categoryEn.toLowerCase().includes("account")) {
    section = "accounts";
  }

  // Feature cards extraction (deduplicated)
  const featureCardsItems: ServiceFeatureCard[] = [];
  const seenFeatureKeys = new Set<string>();

  const addFeature = (titleAr: string, titleEn: string, descAr: string, descEn: string, id: string) => {
    const key = `${titleAr.trim()}-${descAr.trim()}`;
    if (key.length > 1 && seenFeatureKeys.has(key)) return;
    if (key.length > 1) seenFeatureKeys.add(key);
    featureCardsItems.push({
      id,
      title: { ar: titleAr || titleEn, en: titleEn || titleAr },
      description: { ar: descAr || descEn, en: descEn || descAr },
      icon: "CheckCircle2",
    });
  };

  if (apiData.features && Array.isArray(apiData.features)) {
    apiData.features.forEach((f: any, idx: number) => {
      const tAr = f.title_ar || f.title || "";
      const tEn = f.title_en || f.title || tAr;
      const dAr = f.content_ar || f.description_ar || f.content || f.description || "";
      const dEn = f.content_en || f.description_en || f.content || f.description || dAr;
      if (tAr || tEn || dAr || dEn) {
        addFeature(tAr, tEn, dAr, dEn, `feature-${f.id || idx}`);
      }
    });
  }

  if (apiData.sections_content && Array.isArray(apiData.sections_content)) {
    apiData.sections_content
      .filter((sc) => sc.type === "feature")
      .forEach((sc, idx) => {
        const tAr = sc.title_ar || sc.title || "";
        const tEn = sc.title_en || sc.title || tAr;
        const dAr = sc.content_ar || sc.content || "";
        const dEn = sc.content_en || sc.content || dAr;
        if (tAr || tEn || dAr || dEn) {
          addFeature(tAr, tEn, dAr, dEn, `sc-feature-${sc.id || idx}`);
        }
      });
  }

  // Steps extraction (deduplicated)
  const stepsItems: ServiceStep[] = [];
  const seenStepKeys = new Set<string>();

  const addStep = (titleAr: string, titleEn: string, descAr: string, descEn: string, id: string) => {
    const key = `${titleAr.trim()}-${descAr.trim()}`;
    if (key.length > 1 && seenStepKeys.has(key)) return;
    if (key.length > 1) seenStepKeys.add(key);
    stepsItems.push({
      id,
      title: { ar: titleAr || titleEn, en: titleEn || titleAr },
      description: (descAr || descEn) ? { ar: descAr || descEn, en: descEn || descAr } : undefined,
    });
  };

  if (apiData.steps && Array.isArray(apiData.steps)) {
    apiData.steps.forEach((s: any, idx: number) => {
      const tAr = s.title_ar || s.title || "";
      const tEn = s.title_en || s.title || tAr;
      const dAr = s.content_ar || s.description_ar || s.content || s.description || "";
      const dEn = s.content_en || s.description_en || s.content || s.description || dAr;
      if (tAr || tEn || dAr || dEn) {
        addStep(tAr, tEn, dAr, dEn, `step-${s.id || idx}`);
      }
    });
  }

  if (apiData.sections_content && Array.isArray(apiData.sections_content)) {
    apiData.sections_content
      .filter((sc) => sc.type === "step")
      .forEach((sc, idx) => {
        const tAr = sc.title_ar || sc.title || "";
        const tEn = sc.title_en || sc.title || tAr;
        const dAr = sc.content_ar || sc.content || "";
        const dEn = sc.content_en || sc.content || dAr;
        if (tAr || tEn || dAr || dEn) {
          addStep(tAr, tEn, dAr, dEn, `sc-step-${sc.id || idx}`);
        }
      });
  }

  // FAQs extraction (deduplicated)
  const faqItems: ServiceFaq[] = [];
  const seenFaqKeys = new Set<string>();

  const addFaq = (qAr: string, qEn: string, aAr: string, aEn: string, id: string) => {
    const key = `${qAr.trim()}-${aAr.trim()}`;
    if (key.length > 1 && seenFaqKeys.has(key)) return;
    if (key.length > 1) seenFaqKeys.add(key);
    faqItems.push({
      id,
      question: { ar: qAr || qEn, en: qEn || qAr },
      answer: { ar: aAr || aEn, en: aEn || aAr },
    });
  };

  if (apiData.faqs && Array.isArray(apiData.faqs)) {
    apiData.faqs.forEach((f: any, idx: number) => {
      const qAr = f.question_ar || f.question || f.title_ar || f.title || "";
      const qEn = f.question_en || f.question || f.title_en || f.title || qAr;
      const aAr = f.answer_ar || f.answer || f.content_ar || f.content || "";
      const aEn = f.answer_en || f.answer || f.content_en || f.content || aAr;
      if (qAr || qEn || aAr || aEn) {
        addFaq(qAr, qEn, aAr, aEn, `faq-${f.id || idx}`);
      }
    });
  }

  if (apiData.sections_content && Array.isArray(apiData.sections_content)) {
    apiData.sections_content
      .filter((sc) => sc.type === "faq")
      .forEach((sc, idx) => {
        const qAr = sc.title_ar || sc.title || "";
        const qEn = sc.title_en || sc.title || qAr;
        const aAr = sc.content_ar || sc.content || "";
        const aEn = sc.content_en || sc.content || aAr;
        if (qAr || qEn || aAr || aEn) {
          addFaq(qAr, qEn, aAr, aEn, `sc-faq-${sc.id || idx}`);
        }
      });
  }

  // Why items
  const whyItems: ServiceSimpleItem[] = [];
  if (apiData.why_content && Array.isArray(apiData.why_content)) {
    apiData.why_content.forEach((item, idx) => {
      if (typeof item === "string") {
        if (item.trim()) {
          whyItems.push({ id: `why-${idx}`, text: { ar: item, en: item } });
        }
      } else if (item && typeof item === "object") {
        const textAr = (item as any).text_ar || (item as any).content_ar || (item as any).ar || (item as any).title_ar || (item as any).text || "";
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
        if (item.trim()) {
          audienceItems.push({ id: `aud-${idx}`, text: { ar: item, en: item } });
        }
      } else if (item && typeof item === "object") {
        const textAr = (item as any).text_ar || (item as any).content_ar || (item as any).ar || (item as any).title_ar || (item as any).text || "";
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
        if (item.trim()) {
          conditionItems.push({ id: `cond-${idx}`, text: { ar: item, en: item } });
        }
      } else if (item && typeof item === "object") {
        const textAr = (item as any).text_ar || (item as any).content_ar || (item as any).ar || (item as any).title_ar || (item as any).text || "";
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

  // Pricing table (supports currency_ar/currency_en + amount OR label_ar/label_en + value_ar/value_en)
  const tableRows: ServiceTableRow[] = [];
  if (apiData.pricing_table && Array.isArray(apiData.pricing_table)) {
    apiData.pricing_table.forEach((row: any, idx) => {
      const labelAr = row.label_ar || row.currency_ar || "";
      const labelEn = row.label_en || row.currency_en || labelAr;
      const valueAr = row.value_ar || row.amount || "";
      const valueEn = row.value_en || row.amount || valueAr;
      if (labelAr || labelEn || valueAr || valueEn) {
        tableRows.push({
          id: `table-${idx}`,
          label: { ar: labelAr, en: labelEn },
          value: { ar: valueAr, en: valueEn },
        });
      }
    });
  }

  // Related Services
  let mappedRelatedServices: any[] | undefined = undefined;
  if (apiData.related_services_data && Array.isArray(apiData.related_services_data) && apiData.related_services_data.length > 0) {
    mappedRelatedServices = apiData.related_services_data.map((rs: any, idx: number) => ({
      service_id: rs.service_id || idx,
      service_slug: rs.service_slug || rs.slug || "",
      title_ar: rs.title_ar || rs.name_ar || rs.title || "",
      title_en: rs.title_en || rs.name_en || rs.title || rs.title_ar || "",
      summary_ar: rs.summary_ar || rs.summary || "",
      summary_en: rs.summary_en || rs.summary || rs.summary_ar || "",
      category_ar: rs.category_ar || categoryAr,
      category_en: rs.category_en || categoryEn,
      link_url: rs.link_url || (rs.slug ? `/services/${rs.slug}` : (rs.service_slug ? `/services/${rs.service_slug}` : '#')),
      image_url: rs.image_url || "/images/company-header-cover.png",
    }));
  } else if (apiData.related_services && Array.isArray(apiData.related_services) && apiData.related_services.length > 0) {
    mappedRelatedServices = apiData.related_services.map((rs: any) => ({
      service_id: rs.id,
      service_slug: rs.slug,
      title_ar: rs.title_ar || rs.name_ar || "",
      title_en: rs.title_en || rs.name_en || rs.title_ar || "",
      summary_ar: rs.summary_ar || rs.summary || "",
      summary_en: rs.summary_en || rs.summary || rs.summary_ar || "",
      category_ar: rs.category_ar || categoryAr,
      category_en: rs.category_en || categoryEn,
      link_url: `/services/${rs.slug}`,
      image_url: "/images/company-header-cover.png",
    }));
  }

  const titleAr = apiData.title_ar || apiData.hero_title || apiData.page_name_ar || apiData.name_ar || "";
  const titleEn = apiData.title_en || apiData.hero_title || apiData.page_name_en || apiData.name_en || titleAr;

  const pageNameAr = apiData.page_name_ar || apiData.name_ar || apiData.title_ar || "";
  const pageNameEn = apiData.page_name_en || apiData.name_en || apiData.title_en || pageNameAr;

  const subtitleAr = apiData.summary_ar || apiData.hero_description || apiData.about_content_ar || apiData.title_ar || "";
  const subtitleEn = apiData.summary_en || apiData.hero_description || apiData.about_content_en || apiData.title_en || subtitleAr;

  const overviewTitleAr = apiData.about_title_ar || apiData.about_title || "";
  const overviewTitleEn = apiData.about_title_en || apiData.about_title || overviewTitleAr;
  const overviewDescAr = apiData.about_content_ar || apiData.about_content || "";
  const overviewDescEn = apiData.about_content_en || apiData.about_content || overviewDescAr;

  const overviewSection = (overviewTitleAr || overviewDescAr || overviewDescEn)
    ? {
        title: { ar: overviewTitleAr || "عن الخدمة", en: overviewTitleEn || "About Service" },
        description: { ar: overviewDescAr, en: overviewDescEn },
      }
    : undefined;

  const whyTitleAr = apiData.why_title_ar || apiData.why_title || "";
  const whyTitleEn = apiData.why_title_en || apiData.why_title || whyTitleAr;
  const whyDescAr = apiData.why_description_ar || "";
  const whyDescEn = apiData.why_description_en || whyDescAr;

  const whySection = (whyTitleAr || whyDescAr || whyDescEn || whyItems.length > 0)
    ? {
        title: { ar: whyTitleAr || "لماذا تختار هذه الخدمة؟", en: whyTitleEn || "Why Choose This Service?" },
        description: (whyDescAr || whyDescEn) ? { ar: whyDescAr, en: whyDescEn } : undefined,
        items: whyItems.length > 0 ? whyItems : undefined,
      }
    : undefined;

  const featuresTitleAr = apiData.features_title_ar || "";
  const featuresTitleEn = apiData.features_title_en || featuresTitleAr;
  const featuresDescAr = apiData.features_description_ar || "";
  const featuresDescEn = apiData.features_description_en || featuresDescAr;

  const featureCardsSection = (featuresTitleAr || featuresTitleEn || featureCardsItems.length > 0)
    ? {
        title: { ar: featuresTitleAr || "مميزات الخدمة", en: featuresTitleEn || "Service Features" },
        subtitle: (featuresDescAr || featuresDescEn) ? { ar: featuresDescAr, en: featuresDescEn } : undefined,
        items: featureCardsItems,
      }
    : undefined;

  const condTitleAr = apiData.conditions_title_ar || "";
  const condTitleEn = apiData.conditions_title_en || condTitleAr;
  const condDescAr = apiData.conditions_description_ar || "";
  const condDescEn = apiData.conditions_description_en || condDescAr;

  const requirementsSection = (condTitleAr || condTitleEn || conditionItems.length > 0 || tableRows.length > 0)
    ? {
        title: { ar: condTitleAr || "شروط ومتطلبات الخدمة", en: condTitleEn || "Conditions & Requirements" },
        subtitle: (condDescAr || condDescEn) ? { ar: condDescAr, en: condDescEn } : undefined,
        items: conditionItems,
        table: tableRows.length > 0 ? tableRows : undefined,
      }
    : undefined;

  const stepsTitleAr = apiData.steps_title_ar || "";
  const stepsTitleEn = apiData.steps_title_en || stepsTitleAr;
  const stepsDescAr = apiData.steps_description_ar || "";
  const stepsDescEn = apiData.steps_description_en || stepsDescAr;

  const stepsSection = (stepsTitleAr || stepsTitleEn || stepsItems.length > 0)
    ? {
        title: { ar: stepsTitleAr || "خطوات التقديم", en: stepsTitleEn || "Application Steps" },
        subtitle: (stepsDescAr || stepsDescEn) ? { ar: stepsDescAr, en: stepsDescAr } : undefined,
        steps: stepsItems,
      }
    : undefined;

  const iconConfigData = apiData.icon_config || apiData.icon || null;

  return {
    slug: apiData.slug,
    section,
    title: { ar: titleAr, en: titleEn },
    subtitle: { ar: subtitleAr, en: subtitleEn },
    heroImage: "/images/company-header-cover.png",
    iconConfig: iconConfigData,
    breadcrumbs: [
      { label: { ar: categoryAr || "خدمات البنك", en: categoryEn || "Bank Services" }, href: "/services" },
      { label: { ar: pageNameAr, en: pageNameEn } },
    ],
    tagline: { ar: categoryAr || "خدمات البنك", en: categoryEn || "Bank Services" },
    seoDescription: {
      ar: apiData.meta_description || apiData.summary_ar || apiData.about_content_ar || "",
      en: apiData.meta_description || apiData.summary_en || apiData.about_content_en || "",
    },
    overview: overviewSection,
    why: whySection,
    featureCards: featureCardsSection,
    audience: (apiData.target_audiences && audienceItems.length > 0)
      ? {
          title: { ar: "الفئات المستهدفة", en: "Target Audience" },
          items: audienceItems,
        }
      : undefined,
    requirementsSection,
    stepsSection,
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
    relatedServicesData: mappedRelatedServices,
  };
}

/**
 * Fetches a single banking service page data by slug from API with fallback to local static data.
 * Supports legacy calling signatures: (slug, locale) or (section, slug, locale).
 */
export async function getBankingServicePageData(
  slugOrSection: string,
  localeOrSlug?: string,
  possibleLocale?: string
): Promise<ServicePageData | null> {
  let slug = slugOrSection;
  let locale = localeOrSlug;

  const knownSections = ["business", "accounts", "personal", "e-services", "services"];
  if (knownSections.includes(slugOrSection) && localeOrSlug && !localeOrSlug.startsWith("ar") && !localeOrSlug.startsWith("en")) {
    slug = localeOrSlug;
    locale = possibleLocale;
  }

  const targetSlug = resolveSlug(slug);

  const candidateSet = new Set<string>([slug, targetSlug]);
  if (targetSlug === "expat-account" || slug === "expat-account" || targetSlug === "expat" || slug === "expat") {
    candidateSet.add("expat");
    candidateSet.add("expat-account");
  }
  if (targetSlug === "noor-ladies-account" || slug === "noor-ladies-account" || targetSlug === "noor" || slug === "noor") {
    candidateSet.add("noor");
    candidateSet.add("noor-ladies-account");
  }
  if (targetSlug === "mobile-banking" || slug === "mobile-banking" || targetSlug === "mobile-banking-app" || slug === "mobile-banking-app") {
    candidateSet.add("mobile-banking");
    candidateSet.add("mobile-banking-app");
  }
  if (targetSlug === "internet-banking" || slug === "internet-banking" || targetSlug === "business-platform" || slug === "business-platform") {
    candidateSet.add("internet-banking");
    candidateSet.add("business-platform");
  }
  if (targetSlug === "mushtarayati-network" || slug === "mushtarayati-network" || targetSlug === "pos-network" || slug === "pos-network") {
    candidateSet.add("mushtarayati-network");
    candidateSet.add("pos-network");
  }
  if (targetSlug === "financing-zad" || slug === "financing-zad" || targetSlug === "zad-financing" || slug === "zad-financing") {
    candidateSet.add("financing-zad");
    candidateSet.add("zad-financing");
  }
  if (targetSlug === "noor-ladies-card" || slug === "noor-ladies-card" || targetSlug === "noor-card" || slug === "noor-card") {
    candidateSet.add("noor-ladies-card");
    candidateSet.add("noor-card");
  }
  if (targetSlug === "corporate-current-account" || slug === "corporate-current-account" || targetSlug === "business-accounts" || slug === "business-accounts") {
    candidateSet.add("corporate-current-account");
    candidateSet.add("business-accounts");
  }
  if (targetSlug === "minors-account" || slug === "minors-account" || targetSlug === "minors-investment-deposits" || slug === "minors-investment-deposits") {
    candidateSet.add("minors-account");
    candidateSet.add("minors-investment-deposits");
  }

  const candidateSlugs = Array.from(candidateSet);

  // Try API with candidate slugs
  for (const s of candidateSlugs) {
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
    (item) => candidateSlugs.includes(item.slug)
  );
  return fallbackItem || null;
}

export const getBankingServiceBySlug = getBankingServicePageData;

/**
 * Helper to fetch all services list for dynamic routes / static paths.
 * Combines API slugs, static fallback slugs, and all alias keys/values.
 */
export async function getAllServicesSlugs(): Promise<string[]> {
  const slugsSet = new Set<string>();

  // Add all static banking services slugs
  bankingServicesData.forEach((item) => {
    if (item.slug) slugsSet.add(item.slug);
  });

  // Add all keys and values from SLUG_ALIASES
  Object.entries(SLUG_ALIASES).forEach(([key, val]) => {
    if (key) slugsSet.add(key);
    if (val) slugsSet.add(val);
  });

  // Try adding API slugs
  try {
    const response = await fetchAPI<{ data: BankServiceItemData[] }>('/services', {
      cache: 'no-store',
    });
    if (response && Array.isArray(response.data)) {
      response.data.forEach((item) => {
        if (item.slug) slugsSet.add(item.slug);
      });
    }
  } catch {
    // Ignore API errors
  }

  return Array.from(slugsSet);
}
