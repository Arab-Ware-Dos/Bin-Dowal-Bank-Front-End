"use client"

import { useRef, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { LocationCard } from "./location-card"
import { LocationsSkeleton } from "./locations-skeleton"
import { EmptyLocationsState } from "./empty-locations-state"
import type { LocationItem } from "@/types/locations"

interface LocationListProps {
  locations: LocationItem[]
  loading: boolean
  error: string | null
  selectedId: string | null
  isAr: boolean
  onSelect: (id: string) => void
  onViewOnMap: (id: string) => void
  onReset: () => void
  hasActiveFilters: boolean
}

export function LocationList({
  locations,
  loading,
  error,
  selectedId,
  isAr,
  onSelect,
  onViewOnMap,
  onReset,
  hasActiveFilters,
}: LocationListProps) {
  const selectedRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the selected card when it changes
  useEffect(() => {
    if (selectedId && listRef.current) {
      const el = document.getElementById(`location-card-${selectedId}`)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }
  }, [selectedId])

  if (loading) {
    return (
      <div ref={listRef} className="px-1">
        <LocationsSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-sm font-semibold text-[#262b80] underline underline-offset-2"
        >
          {isAr ? "أعد المحاولة" : "Try again"}
        </button>
      </div>
    )
  }

  if (locations.length === 0) {
    return (
      <EmptyLocationsState
        isAr={isAr}
        onReset={onReset}
        hasFilters={hasActiveFilters}
      />
    )
  }

  return (
    <div ref={listRef} className="space-y-3 px-1">
      <AnimatePresence mode="popLayout">
        {locations.map((location, index) => (
          <div ref={selectedId === location.id ? selectedRef : null} key={location.id}>
            <LocationCard
              location={location}
              isAr={isAr}
              isSelected={selectedId === location.id}
              onSelect={onSelect}
              onViewOnMap={onViewOnMap}
              index={index}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}
