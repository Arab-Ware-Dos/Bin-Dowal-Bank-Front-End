// ============================================================
// Location Types — Bin Dowal Islamic Microfinance Bank
// API-ready: maps to GET /api/locations, GET /api/locations/:id
// ============================================================

export type LocationType = "branch" | "atm"

export interface WorkingHours {
  ar: string
  en: string
}

export interface LocationService {
  ar: string
  en: string
}

export interface LocationItem {
  id: string
  /** Arabic name */
  nameAr: string
  /** English name */
  nameEn: string
  /** 'branch' or 'atm' */
  type: LocationType
  /** City in Arabic */
  cityAr: string
  /** City in English */
  cityEn: string
  /** District / Area in Arabic */
  districtAr: string
  /** District / Area in English */
  districtEn: string
  /** Full address in Arabic */
  addressAr: string
  /** Full address in English */
  addressEn: string
  /** Geographic latitude */
  latitude: number
  /** Geographic longitude */
  longitude: number
  /** Contact phone number (optional) */
  phone?: string
  /** Working hours object */
  workingHours?: WorkingHours
  /** Available services */
  services?: LocationService[]
  /** Whether this is the main / flagship location */
  isMain?: boolean
  /** Whether the location is currently active */
  isActive: boolean
}

// ============================================================
// Filter & State Types
// ============================================================

export type LocationTypeFilter = "all" | LocationType

export interface LocationFilters {
  type: LocationTypeFilter
  city: string // empty string = all cities
  search: string
}

// ============================================================
// API Response Shape (for future Laravel integration)
// GET /api/locations?type=branch|atm&city=...
// GET /api/locations/:id
// ============================================================

export interface LocationsApiResponse {
  data: LocationItem[]
  total: number
  page?: number
  perPage?: number
}

export interface LocationApiResponse {
  data: LocationItem
}
