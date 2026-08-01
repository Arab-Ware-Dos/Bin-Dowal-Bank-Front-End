"use client"

import { useRef, useEffect, useCallback } from "react"
import { Search, X, ChevronDown, RotateCcw } from "lucide-react"
import type { LocationFilters, LocationTypeFilter } from "@/types/locations"

interface LocationFiltersProps {
  filters: LocationFilters
  onTypeChange: (type: LocationTypeFilter) => void
  onSearchChange: (q: string) => void
  onCityChange: (city: string) => void
  onReset: () => void
  hasActiveFilters: boolean
  isAr: boolean
  resultCount: number
  cities: { ar: string; en: string }[]
}

const TYPE_OPTIONS: { value: LocationTypeFilter; arLabel: string; enLabel: string }[] = [
  { value: "all", arLabel: "الكل", enLabel: "All" },
  { value: "branch", arLabel: "الفروع", enLabel: "Branches" },
  { value: "atm", arLabel: "الصرافات", enLabel: "ATMs" },
]

export function LocationFilters({
  filters,
  onTypeChange,
  onSearchChange,
  onCityChange,
  onReset,
  hasActiveFilters,
  isAr,
  resultCount,
  cities,
}: LocationFiltersProps) {
  const searchRef = useRef<HTMLInputElement>(null)

  const handleSearchClear = useCallback(() => {
    onSearchChange("")
    searchRef.current?.focus()
  }, [onSearchChange])

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          ref={searchRef}
          type="search"
          id="location-search"
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={
            isAr
              ? "ابحث بالاسم أو المدينة أو الحي..."
              : "Search by name, city or district..."
          }
          className="
            h-11 w-full rounded-xl border border-slate-200 bg-white ps-10 pe-9
            text-[14px] text-[#0b0d36] placeholder-slate-400
            shadow-[0_2px_8px_rgba(11,13,54,0.04)]
            outline-none transition-all
            focus:border-[#262b80]/40 focus:ring-2 focus:ring-[#262b80]/10
          "
        />
        {filters.search && (
          <button
            onClick={handleSearchClear}
            className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]"
            aria-label={isAr ? "مسح البحث" : "Clear search"}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Type Toggle */}
      <div
        className="flex rounded-xl border border-slate-200 bg-slate-50/60 p-1"
        role="group"
        aria-label={isAr ? "تصفية حسب النوع" : "Filter by type"}
      >
        {TYPE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onTypeChange(opt.value)}
            className={`
              flex-1 rounded-lg px-3 py-2 text-[13px] font-semibold transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]
              ${
                filters.type === opt.value
                  ? "bg-[#262b80] text-white shadow-[0_2px_8px_rgba(38,43,128,0.25)]"
                  : "text-slate-500 hover:text-[#262b80]"
              }
            `}
            aria-pressed={filters.type === opt.value}
          >
            {isAr ? opt.arLabel : opt.enLabel}
          </button>
        ))}
      </div>

      {/* City Selector */}
      <div className="relative">
        <select
          value={filters.city}
          onChange={(e) => onCityChange(e.target.value)}
          className="
            h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white
            ps-4 pe-9 text-[14px] text-[#0b0d36]
            shadow-[0_2px_8px_rgba(11,13,54,0.04)]
            outline-none transition-all
            focus:border-[#262b80]/40 focus:ring-2 focus:ring-[#262b80]/10
          "
          aria-label={isAr ? "اختر المدينة" : "Select city"}
        >
          <option value="">
            {isAr ? "جميع المدن" : "All Cities"}
          </option>
          {cities.map((city) => (
            <option key={city.en} value={city.en}>
              {isAr ? city.ar : city.en}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
      </div>

      {/* Result count + Reset */}
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-slate-500">
          <span className="font-bold text-[#262b80]">{resultCount}</span>{" "}
          {isAr ? "نتيجة" : "results"}
        </p>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold text-[#7a1f3d] transition-colors hover:bg-[#7a1f3d]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f3d]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {isAr ? "إعادة تعيين" : "Reset"}
          </button>
        )}
      </div>
    </div>
  )
}
