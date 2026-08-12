// ============================================================
// Locations Service — API-Integrated
// Bin Dowal Islamic Microfinance Bank
//
// Fetches locations from the Laravel backend API:
//   GET /api/v1/locations           — all locations
//   GET /api/v1/locations?type=branch&city=Mukalla
//
// Falls back to local mock data on network failure.
// ============================================================

import { fetchAPI } from "@/lib/api-client"
import {
  mockLocations,
  locationStats as fallbackStats,
  availableCities as fallbackCities,
} from "@/data/locations"
import type {
  LocationItem,
  LocationFilters,
  LocationType,
} from "@/types/locations"

// ─── API response shape ─────────────────────────────────────

interface ApiLocationRaw {
  id: string
  name_ar?: string
  nameAr?: string
  name_en?: string
  nameEn?: string
  type: LocationType
  city_ar?: string
  cityAr?: string
  city_en?: string
  cityEn?: string
  district_ar?: string
  districtAr?: string
  district_en?: string
  districtEn?: string
  address_ar?: string
  addressAr?: string
  address_en?: string
  addressEn?: string
  latitude: number
  longitude: number
  phone?: string
  working_hours?: { ar: string; en: string }
  workingHours?: { ar: string; en: string }
  services?: { ar: string; en: string }[]
  is_main?: boolean
  isMain?: boolean
  is_active?: boolean
  isActive?: boolean
}

interface LocationsApiResponseRaw {
  // Standard API shape
  data?: ApiLocationRaw[]
  // Current API shape (may be renamed to `data` later)
  mockLocations?: ApiLocationRaw[]
  // Stats and cities from the API
  locationStats?: { branches: number; atms: number; cities: number }
  availableCities?: { ar: string; en: string }[]
}

// ─── Normalize API response to internal LocationItem ────────

function normalizeLocation(raw: ApiLocationRaw): LocationItem {
  return {
    id: raw.id,
    nameAr: raw.name_ar ?? raw.nameAr ?? "",
    nameEn: raw.name_en ?? raw.nameEn ?? "",
    type: raw.type,
    cityAr: raw.city_ar ?? raw.cityAr ?? "",
    cityEn: raw.city_en ?? raw.cityEn ?? "",
    districtAr: raw.district_ar ?? raw.districtAr ?? "",
    districtEn: raw.district_en ?? raw.districtEn ?? "",
    addressAr: raw.address_ar ?? raw.addressAr ?? "",
    addressEn: raw.address_en ?? raw.addressEn ?? "",
    latitude: raw.latitude,
    longitude: raw.longitude,
    phone: raw.phone,
    workingHours: raw.working_hours ?? raw.workingHours,
    services: raw.services,
    isMain: raw.is_main ?? raw.isMain ?? false,
    isActive: raw.is_active ?? raw.isActive ?? true,
  }
}

// ─── Extract locations array from API response ──────────────
// Handles both `data` (standard) and `mockLocations` (current API) keys

function extractLocationsFromResponse(response: LocationsApiResponseRaw): LocationItem[] {
  const rawLocations = response.data ?? response.mockLocations ?? []
  return rawLocations.map(normalizeLocation)
}

// ─── Compute stats from location data ───────────────────────

export function computeStats(locations: LocationItem[]) {
  const active = locations.filter((l) => l.isActive)
  return {
    branches: active.filter((l) => l.type === "branch").length,
    atms: active.filter((l) => l.type === "atm").length,
    cities: [...new Set(active.map((l) => l.cityEn))].length,
  }
}

// ─── Extract unique cities from location data ───────────────

export function extractCities(locations: LocationItem[]): { ar: string; en: string }[] {
  return [
    ...new Map(
      locations.map((l) => [l.cityEn, { ar: l.cityAr, en: l.cityEn }])
    ).values(),
  ]
}

// ─── Fetch all locations (with optional filters) ────────────

export async function fetchLocations(
  filters?: Partial<LocationFilters>
): Promise<LocationItem[]> {
  try {
    // Build query params for server-side filtering
    const params = new URLSearchParams()
    if (filters?.type && filters.type !== "all") {
      params.set("type", filters.type)
    }
    if (filters?.city) {
      params.set("city", filters.city)
    }

    const queryStr = params.toString()
    const endpoint = `/locations${queryStr ? `?${queryStr}` : ""}`

    const response = await fetchAPI<LocationsApiResponseRaw>(endpoint)
    const locations = extractLocationsFromResponse(response)

    // Apply client-side search filter (API may not support text search)
    if (filters?.search) {
      const q = filters.search.toLowerCase()
      return locations.filter(
        (l) =>
          l.nameAr.toLowerCase().includes(q) ||
          l.nameEn.toLowerCase().includes(q) ||
          l.cityAr.toLowerCase().includes(q) ||
          l.cityEn.toLowerCase().includes(q) ||
          l.districtAr.toLowerCase().includes(q) ||
          l.districtEn.toLowerCase().includes(q) ||
          l.addressAr.toLowerCase().includes(q) ||
          l.addressEn.toLowerCase().includes(q)
      )
    }

    return locations
  } catch (error) {
    console.error("[locations-service] API fetch failed, using fallback data:", error)

    // Fallback to mock data
    let results = mockLocations.filter((l) => l.isActive)

    if (filters?.type && filters.type !== "all") {
      results = results.filter((l) => l.type === filters.type)
    }

    if (filters?.city) {
      results = results.filter(
        (l) =>
          l.cityEn.toLowerCase() === filters.city!.toLowerCase() ||
          l.cityAr === filters.city
      )
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase()
      results = results.filter(
        (l) =>
          l.nameAr.toLowerCase().includes(q) ||
          l.nameEn.toLowerCase().includes(q) ||
          l.cityAr.toLowerCase().includes(q) ||
          l.cityEn.toLowerCase().includes(q) ||
          l.districtAr.toLowerCase().includes(q) ||
          l.districtEn.toLowerCase().includes(q) ||
          l.addressAr.toLowerCase().includes(q) ||
          l.addressEn.toLowerCase().includes(q)
      )
    }

    return results
  }
}

// ─── Fetch single location by ID ────────────────────────────

export async function fetchLocationById(
  id: string
): Promise<LocationItem | null> {
  try {
    const response = await fetchAPI<{ data: ApiLocationRaw }>(`/locations/${id}`)
    return normalizeLocation(response.data)
  } catch (error) {
    console.error("[locations-service] API fetch by ID failed, using fallback:", error)
    return mockLocations.find((l) => l.id === id) ?? null
  }
}

// ─── Fetch locations by type ────────────────────────────────

export async function fetchLocationsByType(
  type: LocationType
): Promise<LocationItem[]> {
  return fetchLocations({ type })
}

// ─── Fetch stats (computed from API data) ───────────────────

export async function fetchLocationStats(): Promise<typeof fallbackStats> {
  try {
    const response = await fetchAPI<LocationsApiResponseRaw>("/locations")
    const locations = extractLocationsFromResponse(response)
    return computeStats(locations)
  } catch (error) {
    console.error("[locations-service] Stats fetch failed, using fallback:", error)
    return fallbackStats
  }
}

// ─── Fetch available cities (derived from API data) ─────────

export async function fetchAvailableCities(): Promise<typeof fallbackCities> {
  try {
    const response = await fetchAPI<LocationsApiResponseRaw>("/locations")
    const locations = extractLocationsFromResponse(response)
    return extractCities(locations)
  } catch (error) {
    console.error("[locations-service] Cities fetch failed, using fallback:", error)
    return fallbackCities
  }
}
