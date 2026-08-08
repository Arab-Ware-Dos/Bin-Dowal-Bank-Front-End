"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import {
  fetchLocations,
  computeStats,
  extractCities,
} from "@/services/locations-service"
import type {
  LocationItem,
  LocationFilters,
  LocationTypeFilter,
} from "@/types/locations"

const DEFAULT_FILTERS: LocationFilters = {
  type: "all",
  city: "",
  search: "",
}

export interface UseLocationsReturn {
  /** All fetched locations (unfiltered) */
  allLocations: LocationItem[]
  /** Client-side filtered locations based on current filters */
  filteredLocations: LocationItem[]
  /** Loading state */
  loading: boolean
  /** Error message if fetch failed */
  error: string | null
  /** Currently selected location ID (for map/list sync) */
  selectedId: string | null
  /** Update the selected location */
  setSelectedId: (id: string | null) => void
  /** Current active filters */
  filters: LocationFilters
  /** Update a single filter */
  setFilter: <K extends keyof LocationFilters>(
    key: K,
    value: LocationFilters[K]
  ) => void
  /** Reset all filters to defaults */
  resetFilters: () => void
  /** Whether any filter is currently active */
  hasActiveFilters: boolean
  /** Computed stats from API data */
  stats: { branches: number; atms: number; cities: number }
  /** Available cities from API data */
  cities: { ar: string; en: string }[]
}

export function useLocations(): UseLocationsReturn {
  const [allLocations, setAllLocations] = useState<LocationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filters, setFilters] = useState<LocationFilters>(DEFAULT_FILTERS)

  // Initial fetch — loads all data once, filtering is done client-side
  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError(null)

    fetchLocations()
      .then((data) => {
        if (!cancelled) {
          setAllLocations(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("فشل تحميل بيانات المواقع. يرجى المحاولة مرة أخرى.")
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  // Compute stats from fetched data
  const stats = useMemo(() => computeStats(allLocations), [allLocations])

  // Extract available cities from fetched data
  const cities = useMemo(() => extractCities(allLocations), [allLocations])

  // Client-side filtering
  const filteredLocations = useMemo(() => {
    let results = allLocations

    if (filters.type !== "all") {
      results = results.filter((l) => l.type === filters.type)
    }

    if (filters.city) {
      results = results.filter(
        (l) =>
          l.cityEn.toLowerCase() === filters.city.toLowerCase() ||
          l.cityAr === filters.city
      )
    }

    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase()
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
  }, [allLocations, filters])

  const setFilter = useCallback(
    <K extends keyof LocationFilters>(key: K, value: LocationFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS)
  }, [])

  const hasActiveFilters =
    filters.type !== "all" || filters.city !== "" || filters.search !== ""

  return {
    allLocations,
    filteredLocations,
    loading,
    error,
    selectedId,
    setSelectedId,
    filters,
    setFilter,
    resetFilters,
    hasActiveFilters,
    stats,
    cities,
  }
}
