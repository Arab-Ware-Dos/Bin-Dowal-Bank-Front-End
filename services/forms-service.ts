import { fetchAPI } from '@/lib/api-client';
import { BankFormApiItem, FormsApiResponse, BankFormItem } from '@/types/forms';
import { bankFormsData } from '@/data/bank-forms';

/**
 * Normalizes API response item into BankFormItem format.
 */
export function normalizeFormItem(item: BankFormApiItem): BankFormItem {
  const titleAr = item.title_ar || item.title || '';
  const titleEn = item.title_en || item.title || titleAr;

  return {
    id: item.id,
    title: {
      ar: titleAr,
      en: titleEn,
    },
    fileSize: item.file_size || 'PDF',
    fileType: 'PDF',
    fileUrl: item.file_url,
    category: item.category || undefined,
  };
}

/**
 * Normalizes static local fallback data into BankFormItem format.
 */
export function normalizeFallbackFormItem(item: typeof bankFormsData[0]): BankFormItem {
  return {
    id: item.id,
    title: {
      ar: item.title.ar,
      en: item.title.en,
    },
    fileSize: item.fileSize,
    fileType: item.fileType || 'PDF',
    fileUrl: item.fileUrl,
  };
}

/**
 * Fetches bank forms list from API with automatic fallback to static local data.
 */
export async function getBankForms(locale?: string): Promise<BankFormItem[]> {
  try {
    const response = await fetchAPI<FormsApiResponse>('/forms', {
      locale,
      next: { revalidate: 60 },
    });

    if (response && Array.isArray(response.data) && response.data.length > 0) {
      return response.data.map(normalizeFormItem);
    }
  } catch (error) {
    console.warn('[Forms API] Failed to fetch bank forms, using fallback data:', error);
  }

  // Fallback to static data
  return bankFormsData.map(normalizeFallbackFormItem);
}
