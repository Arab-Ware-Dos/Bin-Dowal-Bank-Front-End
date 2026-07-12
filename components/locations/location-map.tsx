"use client"

import dynamic from "next/dynamic"
import type { LocationItem } from "@/types/locations"

// Dynamic import to prevent SSR issues with Leaflet (window dependency)
const LocationMapInner = dynamic(
  () => import("./location-map-inner"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#262b80]/20 border-t-[#262b80]" />
          <p className="text-sm text-slate-400">تحميل الخريطة...</p>
        </div>
      </div>
    ),
  }
)

interface LocationMapProps {
  locations: LocationItem[]
  selectedId: string | null
  isAr: boolean
  onSelect: (id: string) => void
}

export function LocationMap({
  locations,
  selectedId,
  isAr,
  onSelect,
}: LocationMapProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-slate-200/80 shadow-[0_20px_60px_rgba(11,13,54,0.08)]">
      {/* Map legend */}
      <div className="absolute start-3 top-3 z-[1000] flex flex-col gap-1.5 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-[0_4px_20px_rgba(11,13,54,0.08)] backdrop-blur-sm">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
          <span className="inline-block h-3 w-3 rounded-full bg-[#262b80]" />
          {isAr ? "فرع" : "Branch"}
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
          <span className="inline-block h-3 w-3 rounded-full bg-[#7a1f3d]" />
          {isAr ? "صراف آلي" : "ATM"}
        </div>
      </div>

      <LocationMapInner
        locations={locations}
        selectedId={selectedId}
        isAr={isAr}
        onSelect={onSelect}
      />
    </div>
  )
}
