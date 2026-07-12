"use client"

import { motion } from "framer-motion"
import { MapPin, RotateCcw } from "lucide-react"

interface EmptyLocationsStateProps {
  isAr: boolean
  onReset: () => void
  hasFilters: boolean
}

export function EmptyLocationsState({
  isAr,
  onReset,
  hasFilters,
}: EmptyLocationsStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
          <MapPin className="h-8 w-8 text-slate-300" strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-slate-50/50 blur-xl" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#0b0d36]">
        {isAr ? "لا توجد نتائج مطابقة" : "No Matching Locations"}
      </h3>

      <p className="mb-6 max-w-[240px] text-sm leading-relaxed text-slate-500">
        {hasFilters
          ? isAr
            ? "جرب تغيير معايير البحث أو إعادة تعيين الفلاتر"
            : "Try changing your search criteria or resetting filters"
          : isAr
          ? "لا توجد مواقع متاحة حالياً"
          : "No locations are currently available"}
      </p>

      {hasFilters && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-[#262b80]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#262b80] shadow-sm transition-all hover:bg-[#262b80]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]"
        >
          <RotateCcw className="h-4 w-4" />
          {isAr ? "إعادة تعيين الفلاتر" : "Reset Filters"}
        </button>
      )}
    </motion.div>
  )
}
