const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';

export interface FetchOptions extends RequestInit {
  locale?: string;
}

export async function fetchAPI<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { locale, ...initOptions } = options;
  const currentLocale = locale || (typeof window !== 'undefined' ? (document.documentElement.lang || 'ar') : 'ar');

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': currentLocale,
    ...initOptions.headers,
  };

  const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...initOptions,
    headers,
  });

  if (!response.ok) {
    let errorMessage = `API Error [${response.status}]: ${response.statusText}`;
    try {
      const errorData = await response.json();
      if (errorData?.message) {
        errorMessage = errorData.message;
      }
    } catch {
      // Ignore JSON parse error on non-JSON response
    }
    throw new Error(errorMessage);
  }

  return response.json();
}
