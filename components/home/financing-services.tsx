"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { ViewAllButton } from "@/components/ui/view-all-button"

import { financingServices } from "@/data/financing-services"
// Returns position index relative to active: -1 0 1 (side cards), ±2 (hidden)
function getPosition(index: number, active: number, total: number) {
  let diff = index - active
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export function FinancingServices() {
  const { t, direction, mode, locale } = useI18n()
  const isRTL = direction === "rtl"

  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)

  const homeServices = financingServices
    .filter((service) => service.showOnHome)
    .sort((a, b) => a.order - b.order)

  const total = homeServices.length

  const prev = useCallback(() => {
    setActive((a) => (a - 1 + total) % total)
  }, [total])

  const next = useCallback(() => {
    setActive((a) => (a + 1) % total)
  }, [total])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") isRTL ? next() : prev()
      if (e.key === "ArrowRight") isRTL ? prev() : next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isRTL, next, prev])

  // Auto-advance every 5 s
  useEffect(() => {
    const id = setInterval(() => {
      if (!dragging) next()
    }, 5000)
    return () => clearInterval(id)
  }, [dragging, next])

  /* ─── card visual config per position ─── */
  const cardConfig = (pos: number) => {
    // pos: -1 = incoming from right (next), 0 = center, 1 = leaving left (prev)
    // In RTL we swap left/right visually
    const sign = isRTL ? -1 : 1
    if (pos === 0) {
      return {
        x: "0%",
        scale: 1,
        opacity: 1,
        zIndex: 30,
        brightness: 1,
        visible: true,
      }
    }
    if (Math.abs(pos) === 1) {
      return {
        x: `${sign * pos * 62}%`,
        scale: 0.82,
        opacity: 0.72,
        zIndex: 20,
        brightness: 0.75,
        visible: true,
      }
    }
    return {
      x: `${sign * pos * 110}%`,
      scale: 0.65,
      opacity: 0,
      zIndex: 10,
      brightness: 0.4,
      visible: false,
    }
  }

  return (
    <section className="relative py-10 bg-white overflow-hidden" dir={direction}>
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={isRTL ? "برامج التمويل الإسلامي" : "Islamic Financing"}
          title={t("financingServices.title")}
          description={
            isRTL
              ? "حلول تمويلية مرنة ومبتكرة متوافقة مع أحكام الشريعة لتلبية كافة تطلعاتك بشفافية وموثوقية."
              : "Flexible and innovative Sharia-compliant financing solutions to meet all your aspirations with transparency and reliability."
          }
          titleClassName="text-[#242835]"
          descriptionClassName="text-[#64748b]"
        />

        {/* ─── Slider Stage ─── */}
        <div className="relative mx-auto select-none" style={{ maxWidth: 1200 }}>
          {/* Track */}
          <div
            className="relative h-[540px] md:h-[620px] flex items-center justify-center overflow-visible"
            onMouseDown={(e) => { setDragging(true); setDragStart(e.clientX) }}
            onMouseMove={(e) => {
              if (!dragging) return
              const diff = e.clientX - dragStart
              if (Math.abs(diff) > 60) {
                if (diff < 0) isRTL ? prev() : next()
                else isRTL ? next() : prev()
                setDragging(false)
              }
            }}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchStart={(e) => { setDragging(true); setDragStart(e.touches[0].clientX) }}
            onTouchEnd={(e) => {
              const diff = e.changedTouches[0].clientX - dragStart
              if (Math.abs(diff) > 50) {
                if (diff < 0) isRTL ? prev() : next()
                else isRTL ? next() : prev()
              }
              setDragging(false)
            }}
          >
            {homeServices.map((service, i) => {
              const pos = getPosition(i, active, total)
              const cfg = cardConfig(pos)

              return (
                <motion.div
                  key={service.id}
                  animate={{
                    x: cfg.x,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    zIndex: cfg.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  style={{ position: "absolute", transformOrigin: "center center" }}
                  className="w-[320px] md:w-[380px] aspect-[2/3] rounded-[30px] overflow-hidden shadow-[0_24px_60px_rgba(2,6,23,0.32)] cursor-pointer"
                  onClick={() => {
                    if (pos === -1) isRTL ? prev() : next()
                    else if (pos === 1) isRTL ? next() : prev()
                  }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={t(service.titleKey)}
                      fill
                      className="object-cover"
                      style={{ filter: `brightness(${cfg.brightness})` }}
                    />
                  </div>

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#081a36]/95 via-[#0f2f63]/55 to-transparent" />
                  <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_32%)]" />
                  <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.20),transparent_45%)]" />

                  {/* Center card content */}
                  {pos === 0 && (
                    <div className="absolute inset-0 z-30 flex flex-col justify-end p-7">
                      <span className="mb-3 inline-block h-[3px] w-14 rounded-full bg-[#ed1c24]" />
                      <h3 className="text-white text-[26px] md:text-[30px] font-bold font-cairo leading-tight mb-3">
                        {t(service.titleKey as any)}
                      </h3>
                      <p className="text-white/85 text-[14px] md:text-[15px] leading-7 font-cairo mb-5 line-clamp-3">
                        {t(service.descriptionKey as any)}
                      </p>
                      <Link
                        href={mode === "url" ? getLocalizedHref(service.href, locale) : service.href}
                        className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/18 hover:border-white/30 font-cairo"
                      >
                        <span>{isRTL ? "اعرف المزيد" : "Learn More"}</span>
                        <span className="text-sm">{isRTL ? "↗" : "↗"}</span>
                      </Link>
                    </div>
                  )}

                  {/* Side card label */}
                  {Math.abs(pos) === 1 && (
                    <div className="absolute inset-0 z-30 flex items-end p-5">
                      <div>
                        <span className="mb-2 inline-block h-[2px] w-10 rounded-full bg-[#ed1c24]" />
                        <h3 className="text-white/90 text-[18px] font-bold font-cairo leading-tight">
                          {t(service.titleKey as any)}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Premium border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/12" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[29px] ring-1 ring-inset ring-white/5" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent opacity-60" />
                </motion.div>
              )
            })}
          </div>

          {/* ─── Navigation Arrows ─── */}
          <button
            onClick={isRTL ? next : prev}
            aria-label="Previous"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#324198] hover:bg-[#324198] hover:text-white hover:border-[#324198] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={isRTL ? prev : next}
            aria-label="Next"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#324198] hover:bg-[#324198] hover:text-white hover:border-[#324198] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* ─── Dot Indicators ─── */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {homeServices.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-400 ${i === active
                ? "w-8 h-2.5 bg-[#324198]"
                : "w-2.5 h-2.5 bg-[#324198]/25 hover:bg-[#324198]/50"
                }`}
            />
          ))}
        </div>

        <ViewAllButton
          label={isRTL ? "استكشف جميع الخدمات" : "Explore All Services"}
          href={mode === "url" ? getLocalizedHref("/financing", locale) : "/financing"}
          buttonClassName="border-[#324198]/12 text-[#324198] hover:border-[#324198]/20 hover:bg-[#324198]/[0.02]"
        />
      </div>
    </section>
  )
}
