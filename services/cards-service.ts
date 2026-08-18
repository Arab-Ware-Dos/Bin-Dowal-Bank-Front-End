import { fetchAPI } from "@/lib/api-client";
import { cards as fallbackCards } from "@/data/mock-data";

export interface ApiBankCard {
  id: number | string;
  slug: string;
  name_ar: string;
  name_en: string;
  name?: string;
  type: "debit" | "credit" | "prepaid";
  currency_ar?: string;
  currency_en?: string;
  annual_fee?: string;
  highlight_ar?: string;
  highlight_en?: string;
  desc_ar?: string;
  desc_en?: string;
  benefits_ar?: string[];
  benefits_en?: string[];
  requirements_ar?: string[];
  requirements_en?: string[];
  image_path?: string;
  image_url?: string;
  color_gradient?: string;
  apply_url?: string;
  is_featured?: boolean;
  is_active?: boolean;
  order_index?: number;
}

export async function getBankCards(locale = "ar"): Promise<ApiBankCard[]> {
  try {
    const res = await fetchAPI<{ data: ApiBankCard[] }>('/cards', {
      locale,
      next: { revalidate: 60 },
    });
    if (res?.data && res.data.length > 0) {
      return res.data;
    }
  } catch (e) {
    console.warn("[CardsService] Falling back to local cards data", e);
  }

  // Fallback to local mock data
  return fallbackCards.map((c) => ({
    id: c.id,
    slug: c.id,
    name_ar: c.nameAr,
    name_en: c.nameEn,
    name: locale === "ar" ? c.nameAr : c.nameEn,
    type: c.type,
    annual_fee: String(c.annualFee),
    desc_ar: c.descAr,
    desc_en: c.descEn,
    benefits_ar: c.benefitsAr,
    benefits_en: c.benefitsEn,
    image_path: c.imageUrl,
    image_url: c.imageUrl,
    is_featured: true,
    is_active: true,
    order_index: 0,
  }));
}

export async function getBankCardBySlug(slug: string, locale = "ar"): Promise<ApiBankCard | null> {
  try {
    const res = await fetchAPI<{ data: ApiBankCard }>('/cards/' + slug, {
      locale,
      next: { revalidate: 60 },
    });
    return res?.data || null;
  } catch {
    const all = await getBankCards(locale);
    return all.find((c) => c.slug === slug || String(c.id) === slug) || null;
  }
}
