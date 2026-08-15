import { fetchAPI } from '@/lib/api-client';
import type { CheckRemittanceResponse } from '@/types/unclaimed-remittances';

/**
 * Check if a four-part name has an unclaimed remittance.
 * POST /api/v1/unclaimed-remittances/check
 */
export async function checkUnclaimedRemittance(
  name: string,
  locale?: string
): Promise<CheckRemittanceResponse> {
  try {
    return await fetchAPI<CheckRemittanceResponse>('/unclaimed-remittances/check', {
      method: 'POST',
      locale,
      body: JSON.stringify({ name }),
    });
  } catch (error: any) {
    try {
      const parsed = JSON.parse(error.message);
      if (parsed && typeof parsed === 'object') {
        return {
          status: parsed.status || 'invalid_name',
          found: false,
          message:
            parsed.message ||
            (locale === 'en'
              ? 'Please enter a valid 4-part full name.'
              : 'يرجى إدخال الاسم الرباعي بشكل صحيح.'),
        };
      }
    } catch {
      // Ignore JSON parse errors
    }

    return {
      status: 'invalid_name',
      found: false,
      message:
        error?.message ||
        (locale === 'en'
          ? 'Unable to check remittance. Please try again later.'
          : 'تعذر فحص الحوالة. يرجى المحاولة لاحقاً.'),
    };
  }
}