import { fetchAPI } from "@/lib/api-client";

export interface CompanyProfileData {
  id?: number;
  title: string;
  title_ar: string;
  title_en?: string;
  description_ar?: string;
  description_en?: string;
  file_url: string;
  download_url?: string;
  file_name: string;
  file_size?: string;
  downloads_count?: number;
  updated_at?: string;
}

const FALLBACK_COMPANY_PROFILE: CompanyProfileData = {
  title: "تحميل الملف التعريفي",
  title_ar: "الملف التعريفي لبنك بن دول للتمويل الأصغر الإسلامي",
  title_en: "Bin Dowal Islamic Microfinance Bank Profile",
  file_url: "/documents/Bin-Dowal-Bank-Profile.pdf",
  download_url: "/documents/Bin-Dowal-Bank-Profile.pdf",
  file_name: "Bin-Dowal-Bank-Profile.pdf",
  file_size: "8.4 MB",
  downloads_count: 0,
};

/**
 * Fetch the active bank company profile download URL and metadata.
 */
export async function getCompanyProfile(): Promise<CompanyProfileData> {
  try {
    const res = await fetchAPI<{ success: boolean; data: CompanyProfileData }>(
      "/company-profile",
      {
        cache: "no-store",
      }
    );

    if (res?.data) {
      const data = res.data;
      const apiBase = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1").replace(/\/api\/v1\/?$/, "");

      let resolvedDownloadUrl = data.download_url || data.file_url;
      if (resolvedDownloadUrl) {
        // Fix localhost without port or relative paths
        if (resolvedDownloadUrl.startsWith("http://localhost/") || resolvedDownloadUrl.startsWith("http://localhost:80/")) {
          resolvedDownloadUrl = resolvedDownloadUrl.replace(/^http:\/\/localhost(:\d+)?/, apiBase);
        } else if (resolvedDownloadUrl.startsWith("/storage") || resolvedDownloadUrl.startsWith("/api")) {
          resolvedDownloadUrl = `${apiBase}${resolvedDownloadUrl}`;
        }
      }

      let resolvedFileUrl = data.file_url;
      if (resolvedFileUrl) {
        if (resolvedFileUrl.startsWith("http://localhost/") || resolvedFileUrl.startsWith("http://localhost:80/")) {
          resolvedFileUrl = resolvedFileUrl.replace(/^http:\/\/localhost(:\d+)?/, apiBase);
        } else if (resolvedFileUrl.startsWith("/storage")) {
          resolvedFileUrl = `${apiBase}${resolvedFileUrl}`;
        }
      }

      return {
        ...data,
        file_url: resolvedFileUrl || FALLBACK_COMPANY_PROFILE.file_url,
        download_url: resolvedDownloadUrl || resolvedFileUrl || FALLBACK_COMPANY_PROFILE.download_url,
      };
    }
  } catch (error) {
    console.warn(
      "⚠️ [CompanyProfile Fallback] Failed to fetch company profile from API. Using fallback.",
      error instanceof Error ? error.message : error
    );
  }

  return FALLBACK_COMPANY_PROFILE;
}
