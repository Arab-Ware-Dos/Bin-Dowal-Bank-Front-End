// ============================================================
// Bank Partners Service — API Adapter
// Bin Dowal Islamic Microfinance Bank
//
// Fetches strategic bank partners from Laravel backend API:
//   GET /api/v1/partners — List all partners
//
// Gracefully falls back to local mock data if the API is offline.
// ============================================================

import { fetchAPI } from "@/lib/api-client"
import { partnersData as fallbackPartners, type Partner, type PartnerCategory } from "@/data/partners"

export interface ApiPartnerRaw {
  id: number | string
  name?: string
  name_ar?: string
  nameAr?: string
  name_en?: string
  nameEn?: string
  logo_url?: string
  logo?: string
  logo_path?: string
  website_url?: string | null
  websiteUrl?: string | null
  href?: string | null
  partner_type?: string
  partnerType?: string
  type?: string
  category?: string
  order_index?: number
  orderIndex?: number
  order?: number
  show_in_carousel?: boolean
  showInCarousel?: boolean
}

export interface PartnersListApiResponse {
  data: ApiPartnerRaw[]
  links?: Record<string, unknown>
  meta?: Record<string, unknown>
}

function resolveLogoUrl(url?: string): string {
  if (!url) return "/images/partners/local/Asset 22@3x.png"
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) {
    return url
  }
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1"
  const storageBase = apiBase.replace(/\/api\/v1\/?$/, "")
  return `${storageBase}/${url.replace(/^\//, "")}`
}

export function normalizePartner(raw: ApiPartnerRaw): Partner {
  const nameAr = (raw.name_ar ?? raw.nameAr ?? raw.name ?? "").trim()
  const rawNameEn = (raw.name_en ?? raw.nameEn ?? "").trim()
  const nameEn = rawNameEn || (raw.name && raw.name !== nameAr ? raw.name.trim() : nameAr)

  const rawType = (raw.partner_type ?? raw.partnerType ?? raw.type ?? raw.category ?? "local").toLowerCase().trim()
  let category: PartnerCategory = "local"
  if (rawType.includes("international") || rawType === "international") {
    category = "international"
  } else if (rawType.includes("correspond") || rawType === "corresponding_bank") {
    category = "correspondent"
  } else {
    category = "local"
  }

  const logo = resolveLogoUrl(raw.logo_url ?? raw.logo ?? raw.logo_path)
  const href = raw.website_url ?? raw.websiteUrl ?? raw.href ?? undefined

  return {
    id: String(raw.id),
    name: {
      ar: nameAr || "شريك",
      en: nameEn || "Partner",
    },
    logo,
    category,
    href: href || undefined,
    showInCarousel: raw.show_in_carousel ?? raw.showInCarousel ?? true,
    carouselOrder: raw.order_index ?? raw.orderIndex ?? raw.order ?? 0,
  }
}

export async function fetchPartners(): Promise<Partner[]> {
  try {
    const response = await fetchAPI<PartnersListApiResponse>("/partners")
    const rawList = response.data ?? []
    if (rawList.length === 0) {
      return fallbackPartners
    }
    return rawList.map(normalizePartner)
  } catch (error) {
    console.error("[partners-service] API fetch failed, using local fallback partners:", error)
    return fallbackPartners
  }
}
