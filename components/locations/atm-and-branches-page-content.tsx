"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import { Building2, CreditCard, MapPin, LayoutList, Map } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { LocationFilters } from "@/components/locations/location-filters"
import { LocationList } from "@/components/locations/location-list"
import { LocationMap } from "@/components/locations/location-map"
import { useLocations } from "@/hooks/use-locations"
import { locationStats } from "@/data/locations"
import { useState } from "react"

// ─── Stat strip item ─────────────────────────────────────

function StatItem({
  icon: Icon,
  value,
  labelAr,
  labelEn,
  isAr,
  delay,
  color,
}: {
  icon: React.ElementType
  value: number | string
  labelAr: string
  labelEn: string
  isAr: boolean
  delay: number
  color: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1 px-6 py-4 text-center"
    >
      <div
        className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl"
        style={{ background: `${color}12`, color }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <span className="text-2xl font-bold text-[#0b0d36]">{value}+</span>
      <span className="text-[13px] font-medium text-slate-500">
        {isAr ? labelAr : labelEn}
      </span>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────

export function AtmAndBranchesPageContent() {
  const { locale, mode } = useI18n()
  const isAr = locale === "ar"

  const {
    filteredLocations,
    loading,
    error,
    selectedId,
    setSelectedId,
    filters,
    setFilter,
    resetFilters,
    hasActiveFilters,
  } = useLocations()

  // Mobile view toggle: "list" | "map"
  const [mobileView, setMobileView] = useState<"list" | "map">("list")

  const handleSelect = useCallback(
    (id: string) => {
      setSelectedId(selectedId === id ? null : id)
      // On mobile, switch to map view when a location is selected
      if (window.innerWidth < 1024) {
        setMobileView("map")
      }
    },
    [selectedId, setSelectedId]
  )

  const handleViewOnMap = useCallback(
    (id: string) => {
      setSelectedId(id)
      setMobileView("map")
    },
    [setSelectedId]
  )

  const text = {
    home: isAr ? "الرئيسية" : "Home",
    heroTitle: isAr ? "الفروع والصرافات" : "Branches & ATMs",
    heroSubtitle: isAr
      ? "ابحث عن أقرب فرع أو صراف آلي لبنك بن دول للتمويل الأصغر الإسلامي بسهولة ويسر"
      : "Easily find the nearest Bin Dowal Islamic Microfinance Bank branch or ATM",
    panelTitle: isAr ? "ابحث عن موقع" : "Find a Location",
    mapTitle: isAr ? "الخريطة" : "Map",
    listView: isAr ? "القائمة" : "List",
    mapView: isAr ? "الخريطة" : "Map",
  }

  // resolveHref handler to correctly navigate based on mode
  const resolveHref = (target: string) => {
    if (!target.startsWith("/") || target.startsWith("//")) return target;
    return mode === "url" ? `/${locale}${target}` : target;
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* ── Hero ───────────────────────────────────────────── */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.heroTitle },
        ]}
      />

      {/* ── Stats Strip ─────────────────────────────────────── */}
      <section className="relative z-30 -mt-10 pb-0 md:-mt-12">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(11,13,54,0.09)] backdrop-blur-2xl">
            {/* Decorative layers */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(247,249,255,0.95))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0d36]/8 to-transparent" />

            {/* Vertical separators on desktop */}
            <div className="pointer-events-none absolute inset-y-6 left-1/3 hidden w-px bg-gradient-to-b from-transparent via-[#0b0d36]/8 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-6 left-2/3 hidden w-px bg-gradient-to-b from-transparent via-[#0b0d36]/8 to-transparent md:block" />

            <div className="relative grid grid-cols-3">
              <StatItem
                icon={Building2}
                value={locationStats.branches}
                labelAr="فرع"
                labelEn="Branches"
                isAr={isAr}
                delay={0}
                color="#262b80"
              />
              <StatItem
                icon={CreditCard}
                value={locationStats.atms}
                labelAr="صراف آلي"
                labelEn="ATMs"
                isAr={isAr}
                delay={0.07}
                color="#7a1f3d"
              />
              <StatItem
                icon={MapPin}
                value={locationStats.cities}
                labelAr="مدينة"
                labelEn="Cities"
                isAr={isAr}
                delay={0.14}
                color="#0b9b6a"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile Toggle ────────────────────────────────────── */}
      <div className="container mx-auto mt-6 flex px-4 lg:hidden">
        <div className="flex w-full rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setMobileView("list")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              mobileView === "list"
                ? "bg-[#262b80] text-white shadow-md"
                : "text-slate-500 hover:text-[#262b80]"
            }`}
          >
            <LayoutList className="h-4 w-4" />
            {text.listView}
          </button>
          <button
            onClick={() => setMobileView("map")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              mobileView === "map"
                ? "bg-[#262b80] text-white shadow-md"
                : "text-slate-500 hover:text-[#262b80]"
            }`}
          >
            <Map className="h-4 w-4" />
            {text.mapView}
          </button>
        </div>
      </div>

      {/* ── Main Split Layout ────────────────────────────────── */}
      <section className="container mx-auto px-4 py-6 pb-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          {/* Left panel: Filters + List (panel) */}
          <div
            className={`
              flex w-full flex-col gap-4 lg:w-[380px] lg:shrink-0 xl:w-[420px]
              ${mobileView === "map" ? "hidden lg:flex" : "flex"}
            `}
          >
            {/* Panel header */}
            {/* <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#0b0d36]">
                {text.panelTitle}
              </h2>
            </div> */}

            {/* Filters */}
            <div className="rounded-[20px] border border-slate-200/70 bg-white p-4 shadow-[0_8px_30px_rgba(11,13,54,0.04)]">
              <LocationFilters
                filters={filters}
                onTypeChange={(type) => setFilter("type", type)}
                onSearchChange={(q) => setFilter("search", q)}
                onCityChange={(city) => setFilter("city", city)}
                onReset={resetFilters}
                hasActiveFilters={hasActiveFilters}
                isAr={isAr}
                resultCount={filteredLocations.length}
              />
            </div>

            {/* Scrollable list */}
            <div className="max-h-[calc(100vh-340px)] min-h-[400px] overflow-y-auto rounded-[20px] pb-2 lg:max-h-[600px]">
              <LocationList
                locations={filteredLocations}
                loading={loading}
                error={error}
                selectedId={selectedId}
                isAr={isAr}
                onSelect={handleSelect}
                onViewOnMap={handleViewOnMap}
                onReset={resetFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </div>

          {/* Right panel: Map */}
          <div
            className={`
              relative flex-1 rounded-[24px]
              ${mobileView === "list" ? "hidden lg:block" : "block"}
            `}
            style={{ minHeight: 520 }}
          >
            {/* Sticky map on desktop */}
            <div className="sticky top-24 h-[520px] lg:h-[640px] xl:h-[680px]">
              <LocationMap
                locations={filteredLocations}
                selectedId={selectedId}
                isAr={isAr}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
