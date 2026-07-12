"use client"

import { motion } from "framer-motion"
import {
  Building2,
  CreditCard,
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react"
import type { LocationItem } from "@/types/locations"

interface LocationCardProps {
  location: LocationItem
  isAr: boolean
  isSelected: boolean
  onSelect: (id: string) => void
  onViewOnMap?: (id: string) => void
  index?: number
}

export function LocationCard({
  location,
  isAr,
  isSelected,
  onSelect,
  onViewOnMap,
  index = 0,
}: LocationCardProps) {
  const isBranch = location.type === "branch"
  const name = isAr ? location.nameAr : location.nameEn
  const city = isAr ? location.cityAr : location.cityEn
  const district = isAr ? location.districtAr : location.districtEn
  const address = isAr ? location.addressAr : location.addressEn
  const hours = isAr
    ? location.workingHours?.ar
    : location.workingHours?.en

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
      layout
    >
      <div
        role="button"
        tabIndex={0}
        id={`location-card-${location.id}`}
        onClick={() => onSelect(location.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onSelect(location.id)
          }
        }}
        aria-pressed={isSelected}
        className={`
          group relative w-full cursor-pointer rounded-[20px] border bg-white p-5
          text-start shadow-[0_8px_30px_rgba(11,13,54,0.05)]
          outline-none transition-all duration-300
          focus-visible:ring-2 focus-visible:ring-[#262b80] focus-visible:ring-offset-2
          hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(11,13,54,0.10)]
          ${
            isSelected
              ? "border-[#262b80] shadow-[0_12px_40px_rgba(38,43,128,0.15)] ring-2 ring-[#262b80]/20"
              : "border-slate-200/70"
          }
        `}
      >
        {/* Selected indicator bar */}
        {isSelected && (
          <motion.div
            layoutId="selected-bar"
            className="absolute start-0 top-4 bottom-4 w-[3px] rounded-full bg-[#262b80]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}

        {/* Top row: icon + name + badge */}
        <div className="mb-4 flex items-start gap-3">
          <div
            className={`
              mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl
              transition-colors duration-300
              ${
                isBranch
                  ? "bg-[#262b80]/8 text-[#262b80] group-hover:bg-[#262b80]/12"
                  : "bg-[#7a1f3d]/8 text-[#7a1f3d] group-hover:bg-[#7a1f3d]/12"
              }
            `}
          >
            {isBranch ? (
              <Building2 className="h-5 w-5" strokeWidth={1.8} />
            ) : (
              <CreditCard className="h-5 w-5" strokeWidth={1.8} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[15px] font-bold leading-snug text-[#0b0d36] truncate">
                {name}
              </h3>
              {location.isMain && (
                <span className="shrink-0 rounded-full bg-[#262b80] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  {isAr ? "رئيسي" : "Main"}
                </span>
              )}
            </div>

            {/* Type badge */}
            <span
              className={`
                mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold
                ${
                  isBranch
                    ? "bg-[#262b80]/8 text-[#262b80]"
                    : "bg-[#7a1f3d]/8 text-[#7a1f3d]"
                }
              `}
            >
              {isBranch
                ? isAr
                  ? "فرع"
                  : "Branch"
                : isAr
                ? "صراف آلي"
                : "ATM"}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-gradient-to-r from-slate-100 via-slate-200 to-transparent" />

        {/* Details */}
        <div className="space-y-2.5">
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <span className="leading-snug">
              {district}، {city}
            </span>
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-0" />
            <span className="leading-snug">{address}</span>
          </div>

          {hours && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 shrink-0 text-slate-400" />
              <span>{hours}</span>
            </div>
          )}

          {location.phone && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="h-4 w-4 shrink-0 text-slate-400" />
              <span dir="ltr" className="font-mono text-[13px]">
                {location.phone}
              </span>
            </div>
          )}
        </div>

        {/* Services */}
        {location.services && location.services.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {location.services.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
              >
                {isAr ? s.ar : s.en}
              </span>
            ))}
            {location.services.length > 3 && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
                +{location.services.length - 3}
              </span>
            )}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
          {onViewOnMap && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onViewOnMap(location.id)
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#262b80] px-3 py-2 text-[12px] font-semibold text-white transition-all hover:bg-[#0b0d36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]"
            >
              <MapPin className="h-3.5 w-3.5" />
              {isAr ? "عرض على الخريطة" : "View on Map"}
            </button>
          )}

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] font-semibold text-[#0b0d36] transition-all hover:border-[#262b80]/30 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]"
          >
            <Navigation className="h-3.5 w-3.5" />
            {isAr ? "الاتجاهات" : "Directions"}
          </a>

          {isBranch && location.phone && (
            <a
              href={`tel:${location.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] font-semibold text-[#0b0d36] transition-all hover:border-[#262b80]/30 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262b80]"
              aria-label={isAr ? "اتصل بالفرع" : "Contact Branch"}
            >
              <Phone className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
