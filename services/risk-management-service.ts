import { fetchAPI } from "@/lib/api-client";

export interface RiskManagementSection {
  id: number;
  title: string;
  title_ar: string;
  title_en?: string;
  content: string;
  content_ar: string;
  content_en?: string;
  points?: string[];
  points_ar?: string[];
  points_en?: string[];
  icon?: string;
  order_index?: number;
}

export interface RiskManagementData {
  id: number;
  badge: string;
  title: string;
  subtitle?: string;
  document_title?: string;
  document_version?: string;
  effective_date?: string;
  pdf_url?: string | null;
  pdf_file_name?: string | null;
  sections: RiskManagementSection[];
  updated_at?: string;
}

export async function getRiskManagement(locale: "ar" | "en" = "ar"): Promise<RiskManagementData | null> {
  try {
    const res = await fetchAPI<{ success: boolean; data: RiskManagementData }>(
      "/risk-management",
      {
        headers: {
          "Accept-Language": locale,
        },
        cache: "no-store",
      }
    );

    if (res?.data) {
      return res.data;
    }
  } catch (error) {
    console.warn(
      "⚠️ [RiskManagement Fallback] Failed to fetch risk management from API. Using static fallback.",
      error instanceof Error ? error.message : error
    );
  }

  return null;
}
