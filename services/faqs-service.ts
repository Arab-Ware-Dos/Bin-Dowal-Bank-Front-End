import { fetchAPI } from "@/lib/api-client";

export interface ApiBankFaq {
  id: number | string;
  category: string;
  question_ar: string;
  question_en: string;
  question?: string;
  answer_ar: string;
  answer_en: string;
  answer?: string;
  is_popular?: boolean;
  is_active?: boolean;
  order_index?: number;
}

export async function getBankFaqs(category?: string, locale = "ar"): Promise<ApiBankFaq[]> {
  try {
    const query = category ? ('?category=' + category) : '';
    const res = await fetchAPI<{ data: ApiBankFaq[] }>('/faqs' + query, {
      locale,
      next: { revalidate: 60 },
    });
    if (res?.data && res.data.length > 0) {
      return res.data;
    }
  } catch (e) {
    console.warn("[FaqsService] Falling back to default FAQs", e);
  }
  return [];
}
