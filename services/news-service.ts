// ============================================================
// News Service — API Adapter
// Bin Dowal Islamic Microfinance Bank
//
// Fetches news articles from the Laravel backend API:
//   GET /api/v1/news         — List all news articles
//   GET /api/v1/news/{slug}  — Get single news article details
//
// Gracefully falls back to local mock data if the API is offline.
// ============================================================

import { fetchAPI } from "@/lib/api-client"
import { newsItems as fallbackNews } from "@/data/news"
import type { NewsArticle, ArticleContent } from "@/types/news-article"

// ─── API Raw Data Types ─────────────────────────────────────

export interface ApiNewsRaw {
  id: number | string
  title?: string
  title_ar?: string
  titleAr?: string
  title_en?: string
  titleEn?: string
  slug: string
  brief?: string
  brief_ar?: string
  briefAr?: string
  brief_en?: string
  briefEn?: string
  content?: string
  content_ar?: string
  contentAr?: string | ArticleContent
  content_en?: string
  contentEn?: string | ArticleContent
  image?: string
  image_path?: string
  category?: string
  category_ar?: string
  categoryAr?: string
  category_en?: string
  categoryEn?: string
  published_at?: string
  publishedAt?: string
  created_at?: string
  views_count?: number
  is_featured?: boolean
  isFeatured?: boolean
}

export interface NewsListApiResponse {
  data: ApiNewsRaw[]
  links?: Record<string, unknown>
  meta?: {
    current_page?: number
    from?: number
    last_page?: number
    per_page?: number
    total?: number
  }
}

export interface NewsSingleApiResponse {
  data: ApiNewsRaw
}

// ─── Helper to resolve image URLs ───────────────────────────

function resolveImageUrl(image?: string, imagePath?: string): string | undefined {
  const img = image || imagePath
  if (!img) return undefined
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("/")) {
    return img
  }
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1"
  const storageBase = apiBase.replace(/\/api\/v1\/?$/, "")
  return `${storageBase}/${img.replace(/^\//, "")}`
}

// ─── Normalize API raw article to frontend NewsArticle ─────

export function normalizeNewsArticle(raw: ApiNewsRaw): NewsArticle {
  const titleAr = raw.title_ar ?? raw.titleAr ?? raw.title ?? ""
  const titleEn = raw.title_en ?? raw.titleEn ?? raw.title ?? ""
  const excerptAr = raw.brief_ar ?? raw.briefAr ?? raw.brief ?? ""
  const excerptEn = raw.brief_en ?? raw.briefEn ?? raw.brief ?? ""
  const contentAr = raw.content_ar ?? raw.contentAr ?? raw.content ?? ""
  const contentEn = raw.content_en ?? raw.contentEn ?? raw.content ?? ""
  const image = resolveImageUrl(raw.image, raw.image_path)
  const publishedAt = raw.published_at ?? raw.publishedAt ?? raw.created_at ?? ""
  const date = publishedAt ? publishedAt.split("T")[0] : ""

  return {
    id: String(raw.id),
    slug: raw.slug,
    titleAr,
    titleEn,
    excerptAr,
    excerptEn,
    contentAr,
    contentEn,
    categoryAr: raw.category_ar ?? raw.categoryAr ?? raw.category ?? "أخبار البنك",
    categoryEn: raw.category_en ?? raw.categoryEn ?? raw.category ?? "Bank News",
    image,
    date,
    publishedAt,
    isFeatured: raw.is_featured ?? raw.isFeatured ?? false,
    url: `/news/${raw.slug}`,
  }
}

// ─── Query options for fetchNews ───────────────────────────

export interface FetchNewsOptions {
  search?: string
  category?: string
  is_featured?: boolean
  show_in_home?: boolean
  per_page?: number
}

// ─── Fetch All News Articles ────────────────────────────────

export async function fetchNews(options: FetchNewsOptions = {}): Promise<NewsArticle[]> {
  try {
    const params = new URLSearchParams()
    if (options.search) params.set("search", options.search)
    if (options.category) params.set("category", options.category)
    if (options.is_featured !== undefined) params.set("is_featured", String(options.is_featured))
    if (options.show_in_home !== undefined) params.set("show_in_home", String(options.show_in_home))
    if (options.per_page) params.set("per_page", String(options.per_page))

    const queryStr = params.toString()
    const endpoint = `/news${queryStr ? `?${queryStr}` : ""}`

    const response = await fetchAPI<NewsListApiResponse>(endpoint)
    const rawList = response.data ?? []

    return rawList.map(normalizeNewsArticle)
  } catch (error) {
    console.error("[news-service] API fetch failed, using local fallback news:", error)

    let results = [...fallbackNews]

    if (options.is_featured) {
      results = results.filter((item) => item.isFeatured)
    }

    if (options.search) {
      const q = options.search.toLowerCase()
      results = results.filter(
        (item) =>
          item.titleAr.toLowerCase().includes(q) ||
          item.titleEn.toLowerCase().includes(q) ||
          item.excerptAr.toLowerCase().includes(q) ||
          item.excerptEn.toLowerCase().includes(q)
      )
    }

    return results
  }
}

// ─── Fetch Single News Article by Slug ──────────────────────

export async function fetchNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await fetchAPI<NewsSingleApiResponse>(`/news/${slug}`)
    if (!response.data) return null
    return normalizeNewsArticle(response.data)
  } catch (error) {
    console.error(`[news-service] API fetch for slug "${slug}" failed, using fallback:`, error)
    return fallbackNews.find((item) => item.slug === slug || item.id === slug) ?? null
  }
}

// ─── Fetch All News Slugs (for static paths) ────────────────

export async function fetchAllNewsSlugs(): Promise<string[]> {
  try {
    const news = await fetchNews()
    return news.map((item) => item.slug || item.id)
  } catch {
    return fallbackNews.map((item) => item.slug || item.id)
  }
}
