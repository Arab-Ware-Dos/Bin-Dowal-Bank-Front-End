import { fetchAPI } from "@/lib/api-client";

export interface BankSectionItemRaw {
  id?: number | string;
  title?: string;
  title_ar?: string;
  title_en?: string;
  description?: string;
  description_ar?: string;
  description_en?: string;
  badge_text?: string;
  icon_config?: { type?: string; value?: string } | string;
  image_url?: string;
  link_url?: string;
  order_index?: number;
}

export interface BankSectionRaw {
  id?: number | string;
  section_code: string;
  page_key?: string;
  section_key?: string;
  title?: string;
  title_ar?: string;
  title_en?: string;
  subtitle?: string;
  subtitle_ar?: string;
  subtitle_en?: string;
  description?: string;
  description_ar?: string;
  description_en?: string;
  layout_type?: string;
  order_index?: number;
  is_active?: boolean;
  items?: BankSectionItemRaw[];
}

export async function getSection(sectionCode: string, locale = "ar"): Promise<BankSectionRaw | null> {
  try {
    const res = await fetchAPI<{ data: BankSectionRaw }>('/sections/' + sectionCode, {
      locale,
      next: { revalidate: 60 },
    });
    return res?.data || null;
  } catch {
    return null;
  }
}

export async function getPageSections(pageKey: string, locale = "ar"): Promise<BankSectionRaw[]> {
  try {
    const res = await fetchAPI<{ data: BankSectionRaw[] }>('/sections?page=' + pageKey, {
      locale,
      next: { revalidate: 60 },
    });
    return res?.data || [];
  } catch {
    return [];
  }
}
