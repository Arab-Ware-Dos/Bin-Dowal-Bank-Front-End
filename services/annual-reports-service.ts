// ============================================================
// Annual Reports Service — API Adapter
// Bin Dowal Islamic Microfinance Bank
//
// Fetches annual reports from Laravel backend API:
//   GET /api/v1/annual-reports — List all published annual reports
//
// Gracefully falls back to local mock data if the API is offline.
// ============================================================

import { fetchAPI } from "@/lib/api-client"
import { annualReports as fallbackReports, type AnnualReport } from "@/data/annual-reports"

export interface ApiAnnualReportRaw {
  id: number | string
  title?: string
  title_ar?: string
  titleAr?: string
  title_en?: string
  titleEn?: string
  year?: number
  file_url?: string
  pdf_file?: string
  pdfFile?: string
  file_size?: string
  fileSize?: string
  size?: string
  page_count?: number
  pageCount?: number
  pages?: number
  brief_description?: string
  brief_description_ar?: string
  briefDescriptionAr?: string
  brief_description_en?: string
  briefDescriptionEn?: string
  description?: string
  description_ar?: string
  description_en?: string
  cover_image?: string
  coverImage?: string
  publish_date?: string
  publishDate?: string
  is_published?: boolean
  is_featured?: boolean
  featured?: boolean
  created_at?: string
}

export interface AnnualReportsListApiResponse {
  data: ApiAnnualReportRaw[]
  links?: Record<string, unknown>
  meta?: Record<string, unknown>
}

function resolveFileUrl(url?: string): string {
  if (!url) return "/documents/Bin-Dowal-Bank-Profile.pdf"
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) {
    return url
  }
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1"
  const storageBase = apiBase.replace(/\/api\/v1\/?$/, "")
  return `${storageBase}/${url.replace(/^\//, "")}`
}

export function normalizeAnnualReport(raw: ApiAnnualReportRaw, index: number = 0): AnnualReport {
  const year = raw.year ?? (raw.publish_date ? new Date(raw.publish_date).getFullYear() : 2024)
  const titleAr = (raw.title_ar ?? raw.titleAr ?? raw.title ?? "").trim()
  const rawTitleEn = (raw.title_en ?? raw.titleEn ?? "").trim()
  const titleEn = rawTitleEn || (raw.title && raw.title !== titleAr ? raw.title.trim() : titleAr)

  const descAr = (raw.brief_description_ar ?? raw.briefDescriptionAr ?? raw.brief_description ?? raw.description_ar ?? raw.description ?? "").trim()
  const rawDescEn = (raw.brief_description_en ?? raw.briefDescriptionEn ?? raw.description_en ?? "").trim()
  const descEn = rawDescEn || (raw.brief_description && raw.brief_description !== descAr ? raw.brief_description.trim() : descAr)

  const pdfFile = resolveFileUrl(raw.file_url ?? raw.pdf_file ?? raw.pdfFile)
  const coverImage = (raw.cover_image || raw.coverImage)
    ? resolveFileUrl(raw.cover_image ?? raw.coverImage)
    : `/images/annual-reports/cover-${year}.jpg`

  return {
    id: String(raw.id),
    year,
    titleAr: titleAr || `التقرير السنوي لعام ${year}`,
    titleEn: titleEn || `Annual Report ${year}`,
    descriptionAr: descAr,
    descriptionEn: descEn,
    coverImage,
    pdfFile,
    pages: raw.page_count ?? raw.pageCount ?? raw.pages ?? 100,
    size: raw.file_size ?? raw.fileSize ?? raw.size ?? "5.0 MB",
    featured: raw.featured ?? raw.is_featured ?? (index === 0),
    publishDate: raw.publish_date ?? raw.publishDate ?? raw.created_at ?? "",
  }
}

export async function fetchAnnualReports(): Promise<AnnualReport[]> {
  try {
    const response = await fetchAPI<AnnualReportsListApiResponse>("/annual-reports")
    const rawList = response.data ?? []
    if (rawList.length === 0) {
      return fallbackReports
    }
    return rawList.map((item, index) => normalizeAnnualReport(item, index))
  } catch (error) {
    console.error("[annual-reports-service] API fetch failed, using local fallback reports:", error)
    return fallbackReports
  }
}
