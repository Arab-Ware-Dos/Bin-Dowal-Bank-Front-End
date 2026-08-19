import { fetchAPI } from "@/lib/api-client";

export interface ComplianceStatementSection {
  id: number;
  title: string;
  title_ar: string;
  title_en?: string;
  content: string[] | string;
  content_ar: string[] | string;
  content_en?: string[] | string;
  points?: string[];
  points_ar?: string[];
  points_en?: string[];
  icon?: string;
  order_index?: number;
}

export interface ComplianceStatementData {
  id: number;
  badge: string;
  title: string;
  subtitle?: string;
  document_title?: string;
  document_version?: string;
  effective_date?: string;
  pdf_url?: string | null;
  pdf_file_name?: string | null;
  sections: ComplianceStatementSection[];
  updated_at?: string;
}

export async function getComplianceStatement(locale: "ar" | "en" = "ar"): Promise<ComplianceStatementData | null> {
  try {
    const res = await fetchAPI<{ success: boolean; data: ComplianceStatementData }>(
      "/compliance-statement",
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
      "⚠️ [ComplianceStatement Fallback] Failed to fetch compliance statement from API. Using static fallback.",
      error instanceof Error ? error.message : error
    );
  }

  return null;
}
