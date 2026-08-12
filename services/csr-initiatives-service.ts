import { fetchAPI } from "@/lib/api-client"
import { initiatives as fallbackInitiatives, initiativeCategories, impactStats } from "@/data/social-responsibility"
import type { CsrInitiative, CsrCategory, CsrStatus } from "@/types/csr-initiative"

export interface ApiCsrInitiativeRaw {
  id: number | string
  slug: string
  title?: string
  title_ar?: string
  titleAr?: string
  title_en?: string
  titleEn?: string
  brief?: string
  brief_ar?: string
  briefAr?: string
  brief_en?: string
  briefEn?: string
  content?: string
  content_ar?: string
  contentAr?: string
  content_en?: string
  contentEn?: string
  main_image_url?: string
  main_image?: string
  image?: string
  image_path?: string
  category?: string
  status?: string
  status_ar?: string
  status_en?: string
  execution_year?: number
  published_at?: string
  created_at?: string
}

export interface CsrListApiResponse {
  data: ApiCsrInitiativeRaw[]
  links?: Record<string, unknown>
  meta?: {
    current_page?: number
    from?: number
    last_page?: number
    per_page?: number
    total?: number
  }
}

export interface CsrSingleApiResponse {
  data: ApiCsrInitiativeRaw
}

function resolveImageUrl(raw: ApiCsrInitiativeRaw): string {
  const img = raw.main_image_url || raw.main_image || raw.image || raw.image_path
  if (!img) return "/images/about-header-cover.jpg"
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("/")) {
    return img
  }
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1"
  const storageBase = apiBase.replace(/\/api\/v1\/?$/, "")
  return `${storageBase}/${img.replace(/^\//, "")}`
}

function normalizeStatus(status?: string): CsrStatus {
  if (!status) return "completed"
  const lower = status.toLowerCase().trim()
  if (lower.includes("منج") || lower.includes("complet") || lower === "completed") return "completed"
  if (lower.includes("مستمر") || lower.includes("ongo") || lower === "ongoing") return "ongoing"
  if (lower.includes("موسم") || lower.includes("season") || lower === "seasonal") return "seasonal"
  return "completed"
}

function normalizeCategory(cat?: string): CsrCategory {
  if (!cat) return "social"
  const lower = cat.toLowerCase().trim()
  if (lower === "environment") return "environment"
  if (lower === "social") return "social"
  if (lower === "disability" || lower === "disabilities") return "disability"
  if (lower === "health") return "health"
  return "social"
}

export function normalizeCsrInitiative(raw: ApiCsrInitiativeRaw): CsrInitiative {
  const titleAr = raw.title_ar ?? raw.titleAr ?? raw.title ?? ""
  const titleEn = raw.title_en ?? raw.titleEn ?? raw.title ?? ""
  const briefAr = raw.brief_ar ?? raw.briefAr ?? raw.brief ?? ""
  const briefEn = raw.brief_en ?? raw.briefEn ?? raw.brief ?? ""
  const contentAr = raw.content_ar ?? raw.contentAr ?? raw.content ?? ""
  const contentEn = raw.content_en ?? raw.contentEn ?? raw.content ?? ""
  const imageUrl = resolveImageUrl(raw)
  const status = normalizeStatus(raw.status)
  const category = normalizeCategory(raw.category)
  const year = raw.execution_year ?? new Date().getFullYear()

  return {
    id: String(raw.id),
    slug: raw.slug,
    titleAr,
    titleEn,
    briefAr,
    briefEn,
    contentAr,
    contentEn,
    imageUrl,
    category,
    status,
    year,
    publishedAt: raw.published_at ?? raw.created_at ?? "",
  }
}

export interface FetchCsrInitiativesOptions {
  category?: string
  year?: number
}

export async function fetchCsrInitiatives(options: FetchCsrInitiativesOptions = {}): Promise<CsrInitiative[]> {
  try {
    const params = new URLSearchParams()
    if (options.category) params.set("category", options.category)
    if (options.year) params.set("year", String(options.year))

    const queryStr = params.toString()
    const endpoint = `/csr-initiatives${queryStr ? `?${queryStr}` : ""}`

    const response = await fetchAPI<CsrListApiResponse>(endpoint)
    const rawList = response.data ?? []

    return rawList.map(normalizeCsrInitiative)
  } catch (error) {
    console.error("[csr-initiatives-service] API fetch failed, using local fallback:", error)
    return fallbackInitiatives as CsrInitiative[]
  }
}

export async function fetchCsrInitiativeBySlug(slug: string): Promise<CsrInitiative | null> {
  try {
    const response = await fetchAPI<CsrSingleApiResponse>(`/csr-initiatives/${slug}`)
    if (!response.data) return null
    return normalizeCsrInitiative(response.data)
  } catch (error) {
    console.error(`[csr-initiatives-service] API fetch for slug "${slug}" failed, using fallback:`, error)
    const fallback = fallbackInitiatives.find((item) => item.slug === slug || item.id === slug)
    if (!fallback) return null
    return fallback as CsrInitiative
  }
}

export async function fetchAllCsrInitiativeSlugs(): Promise<string[]> {
  try {
    const items = await fetchCsrInitiatives()
    return items.map((item) => item.slug || item.id)
  } catch {
    return fallbackInitiatives.map((item) => item.slug || item.id)
  }
}

export { initiativeCategories, impactStats }