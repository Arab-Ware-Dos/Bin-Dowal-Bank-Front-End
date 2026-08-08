// ============================================================
// Locations Service — API Adapter
// Bin Dowal Islamic Microfinance Bank
//
// Currently uses mock data. To connect to a Laravel backend:
// 1. Replace the import below with an `axios` or `fetch` call
// 2. Adjust the response mapping if needed
// 3. Update the API base URL from env: process.env.NEXT_PUBLIC_API_URL
//
// Future endpoints:
//   GET /api/locations           — all locations
//   GET /api/locations?type=branch&city=Mukalla
//   GET /api/locations/:id       — single location
//   GET /api/branches            — branches only
//   GET /api/atms               — ATMs only
// ============================================================

import {
  mockLocations,
  locationStats,
  availableCities,
} from "@/data/locations"
import type {
  LocationItem,
  LocationFilters,
  LocationType,
} from "@/types/locations"

// ─── Simulated async delay (remove for real API) ───────────
const simulateDelay = (ms = 400) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))

// ─── Fetch all locations (with optional filters) ───────────

export async function fetchLocations(
  filters?: Partial<LocationFilters>
): Promise<LocationItem[]> {
  // TODO: Replace with real API call:
  // const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/locations`)
  // if (filters?.type && filters.type !== "all") url.searchParams.set("type", filters.type)
  // if (filters?.city) url.searchParams.set("city", filters.city)
  // const response = await fetch(url.toString())
  // const json = await response.json()
  // return json.data

  await simulateDelay()

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

// ─── Fetch single location by ID ─────────────────────────

export async function fetchLocationById(
  id: string
): Promise<LocationItem | null> {
  // TODO: Replace with real API call:
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations/${id}`)
  // const json = await response.json()
  // return json.data

  await simulateDelay(200)
  return mockLocations.find((l) => l.id === id) ?? null
}

// ─── Fetch locations by type ──────────────────────────────

export async function fetchLocationsByType(
  type: LocationType
): Promise<LocationItem[]> {
  // TODO: Replace with real API call:
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${type}s`)
  // const json = await response.json()
  // return json.data

  await simulateDelay()
  return mockLocations.filter((l) => l.type === type && l.isActive)
}

// ─── Fetch stats ──────────────────────────────────────────

export async function fetchLocationStats(): Promise<typeof locationStats> {
  // TODO: Replace with real API call:
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations/stats`)
  // return response.json()

  return locationStats
}

// ─── Fetch available cities ───────────────────────────────

export async function fetchAvailableCities(): Promise<
  typeof availableCities
> {
  return availableCities
}
