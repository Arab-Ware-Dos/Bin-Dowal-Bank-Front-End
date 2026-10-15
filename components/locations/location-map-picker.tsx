"use client"

import dynamic from "next/dynamic"
import { useState, useCallback } from "react"
import { MapPin, Navigation, Copy, Check, Crosshair } from "lucide-react"

const LocationMapPickerInner = dynamic(
  () => import("./location-map-picker-inner"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[350px] w-full items-center justify-center rounded-2xl bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 animate-spin rounded-full border-3 border-[#262b80]/20 border-t-[#262b80]" />
          <p className="text-xs font-medium text-slate-500">جاري تحميل الخريطة...</p>
        </div>
      </div>
    ),
  }
)

export interface LocationCoordinates {
  latitude: number
  longitude: number
}

export interface LocationMapPickerProps {
  value?: LocationCoordinates
  defaultValue?: LocationCoordinates
  onChange?: (coords: LocationCoordinates) => void
  isAr?: boolean
  className?: string
  height?: string | number
  showInputs?: boolean
  showQuickCities?: boolean
}

const YEMEN_CITIES = [
  { nameAr: "المكلا", nameEn: "Mukalla", lat: 14.5322, lng: 49.1255 },
  { nameAr: "سيئون", nameEn: "Sayun", lat: 15.9877, lng: 48.7871 },
  { nameAr: "الشحر", nameEn: "Al-Shihr", lat: 14.7583, lng: 49.6053 },
  { nameAr: "عدن", nameEn: "Aden", lat: 12.7855, lng: 45.0187 },
  { nameAr: "صنعاء", nameEn: "Sana'a", lat: 15.3694, lng: 44.191 },
  { nameAr: "تعز", nameEn: "Taiz", lat: 13.5795, lng: 44.0209 },
]

export function LocationMapPicker({
  value,
  defaultValue = { latitude: 14.5322, longitude: 49.1255 },
  onChange,
  isAr = true,
  className = "",
  height = "420px",
  showInputs = true,
  showQuickCities = true,
}: LocationMapPickerProps) {
  const [internalCoords, setInternalCoords] = useState<LocationCoordinates>(
    value || defaultValue
  )
  const [copied, setCopied] = useState(false)
  const [isLocating, setIsLocating] = useState(false)
  const [locateError, setLocateError] = useState<string | null>(null)

  const coords = value !== undefined ? value : internalCoords

  const handleCoordsChange = useCallback(
    (newCoords: LocationCoordinates) => {
      setInternalCoords(newCoords)
      onChange?.(newCoords)
    },
    [onChange]
  )

  const handleManualInput = (field: "latitude" | "longitude", strVal: string) => {
    const num = parseFloat(strVal)
    if (!isNaN(num)) {
      const updated = {
        ...coords,
        [field]: num,
      }
      handleCoordsChange(updated)
    }
  }

  const handleCopy = () => {
    const text = `${coords.latitude}, ${coords.longitude}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setLocateError(isAr ? "المتصفح لا يدعم تحديد الموقع" : "Geolocation not supported")
      return
    }

    setIsLocating(true)
    setLocateError(null)

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false)
        const newCoords = {
          latitude: Number(pos.coords.latitude.toFixed(6)),
          longitude: Number(pos.coords.longitude.toFixed(6)),
        }
        handleCoordsChange(newCoords)
      },
      (err) => {
        setIsLocating(false)
        setLocateError(
          isAr
            ? "تعذر الحصول على موقعك، يرجى تفعيل إذن الموقع"
            : "Could not access location, please enable permissions"
        )
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_12px_40px_rgba(11,13,54,0.06)] ${className}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Quick city selectors header */}
      {showQuickCities && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/70 px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0b0d36]">
            <MapPin className="h-4 w-4 text-[#262b80]" />
            <span>{isAr ? "تحديد سريع للمدينة:" : "Quick City Jump:"}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {YEMEN_CITIES.map((city) => (
              <button
                key={city.nameEn}
                type="button"
                onClick={() =>
                  handleCoordsChange({ latitude: city.lat, longitude: city.lng })
                }
                className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 transition hover:border-[#262b80] hover:bg-[#262b80]/5 hover:text-[#262b80]"
              >
                {isAr ? city.nameAr : city.nameEn}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Map container with action overlay */}
      <div className="relative w-full" style={{ height }}>
        {/* Floating Controls Overlay */}
        <div className="absolute end-3 top-3 z-[1000] flex flex-col gap-2">
          {/* Locate Me button */}
          <button
            type="button"
            onClick={handleLocateMe}
            disabled={isLocating}
            title={isAr ? "موقعي الحالي" : "Locate Me"}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/95 text-slate-700 shadow-[0_4px_16px_rgba(11,13,54,0.1)] backdrop-blur-sm transition hover:bg-[#262b80] hover:text-white disabled:opacity-50"
          >
            {isLocating ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#262b80] border-t-transparent" />
            ) : (
              <Navigation className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Instructions badge */}
        <div className="pointer-events-none absolute bottom-3 start-3 z-[1000] rounded-lg border border-slate-200/80 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
            <Crosshair className="h-3.5 w-3.5 text-[#262b80]" />
            {isAr
              ? "انقر على الخريطة أو اسحب الماركر لضبط الإحداثيات"
              : "Click map or drag pin to adjust coordinates"}
          </p>
        </div>

        <LocationMapPickerInner
          latitude={coords.latitude}
          longitude={coords.longitude}
          isAr={isAr}
          onChange={handleCoordsChange}
        />
      </div>

      {/* Coordinate Display and Inputs Footer */}
      {showInputs && (
        <div className="border-t border-slate-100 bg-white p-4">
          {locateError && (
            <p className="mb-2 text-xs font-medium text-rose-600">{locateError}</p>
          )}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
            {/* Latitude input */}
            <div className="lg:col-span-5">
              <label className="mb-1 block text-[11px] font-bold text-slate-500">
                {isAr ? "خط العرض (Latitude)" : "Latitude"}
              </label>
              <input
                type="number"
                step="0.000001"
                value={coords.latitude}
                onChange={(e) => handleManualInput("latitude", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-slate-800 transition focus:border-[#262b80] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#262b80]"
              />
            </div>

            {/* Longitude input */}
            <div className="lg:col-span-5">
              <label className="mb-1 block text-[11px] font-bold text-slate-500">
                {isAr ? "خط الطول (Longitude)" : "Longitude"}
              </label>
              <input
                type="number"
                step="0.000001"
                value={coords.longitude}
                onChange={(e) => handleManualInput("longitude", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-slate-800 transition focus:border-[#262b80] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#262b80]"
              />
            </div>

            {/* Copy button */}
            <div className="flex items-end lg:col-span-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#262b80] hover:bg-[#262b80]/5 hover:text-[#262b80]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-600">{isAr ? "تم النسخ" : "Copied"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>{isAr ? "نسخ" : "Copy"}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default LocationMapPicker
