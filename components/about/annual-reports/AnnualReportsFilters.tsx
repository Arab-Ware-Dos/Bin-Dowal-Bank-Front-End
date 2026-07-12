"use client"

import { Search, SortAsc, SortDesc, LayoutGrid } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export type SortOrder = "newest" | "oldest"

interface AnnualReportsFiltersProps {
  years: number[]
  selectedYear: number | null
  onYearChange: (year: number | null) => void
  sortOrder: SortOrder
  onSortChange: (order: SortOrder) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  totalCount: number
  filteredCount: number
}

export function AnnualReportsFilters({
  years,
  selectedYear,
  onYearChange,
  sortOrder,
  onSortChange,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: AnnualReportsFiltersProps) {
  const { locale } = useI18n()
  const isAr = locale === "ar"

  return (
    <div className="sticky top-[80px] z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(11,13,54,0.04)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-5">
          {/* Year Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {/* "All" chip */}
            <button
              type="button"
              onClick={() => onYearChange(null)}
              className={[
                "inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200",
                selectedYear === null
                  ? "bg-[#262b80] text-white shadow-md shadow-[#262b80]/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#262b80]/30 hover:text-[#262b80]",
              ].join(" ")}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              {isAr ? "الكل" : "All"}
            </button>

            {/* Year chips */}
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => onYearChange(year)}
                className={[
                  "inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-bold transition-all duration-200",
                  selectedYear === year
                    ? "bg-[#262b80] text-white shadow-md shadow-[#262b80]/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#262b80]/30 hover:text-[#262b80]",
                ].join(" ")}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Right controls: search + sort + count */}
          <div className="flex items-center gap-2.5">
            {/* Search */}
            <div className="relative flex-1 md:w-52 md:flex-none">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={isAr ? "ابحث..." : "Search..."}
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pe-4 ps-9 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-[#262b80]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#262b80]/10"
              />
            </div>

            {/* Sort toggle */}
            <button
              type="button"
              onClick={() => onSortChange(sortOrder === "newest" ? "oldest" : "newest")}
              title={isAr ? (sortOrder === "newest" ? "الأحدث أولاً" : "الأقدم أولاً") : (sortOrder === "newest" ? "Newest first" : "Oldest first")}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-[#262b80]/30 hover:text-[#262b80]"
            >
              {sortOrder === "newest" ? (
                <SortDesc className="h-4 w-4" />
              ) : (
                <SortAsc className="h-4 w-4" />
              )}
            </button>

            {/* Sort label */}
            <span className="hidden text-xs font-semibold text-slate-500 md:block">
              {isAr
                ? sortOrder === "newest"
                  ? "الأحدث أولاً"
                  : "الأقدم أولاً"
                : sortOrder === "newest"
                ? "Newest first"
                : "Oldest first"}
            </span>

            {/* Count */}
            <div className="hidden h-8 w-px bg-slate-200 md:block" />
            <span className="hidden text-xs text-slate-500 md:block">
              {isAr
                ? `${filteredCount} من ${totalCount}`
                : `${filteredCount} of ${totalCount}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
