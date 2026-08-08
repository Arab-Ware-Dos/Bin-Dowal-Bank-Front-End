/**
 * Types for the Contact Us form and API communication.
 */

/** Data sent from the contact form to the API */
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

/** Successful API response after submitting a contact message */
export interface ContactApiResponse {
  message: string;
  data?: {
    id: number;
  };
}

/** API validation error response (422) */
export interface ContactApiError {
  message: string;
  errors?: Record<string, string[]>;
}
