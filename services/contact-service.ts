import { fetchAPI } from '@/lib/api-client';
import type { ContactFormData, ContactApiResponse } from '@/types/contact';

/**
 * Submit a contact message to the backend API.
 * POST /api/v1/contact-messages
 */
export async function submitContactMessage(
  data: ContactFormData,
  locale?: string
): Promise<ContactApiResponse> {
  return fetchAPI<ContactApiResponse>('/contact-messages', {
    method: 'POST',
    locale,
    body: JSON.stringify(data),
  });
}
