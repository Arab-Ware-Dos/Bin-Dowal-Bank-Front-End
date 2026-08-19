"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useCallback, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FinancingSliderSkeleton } from "@/components/ui/loading-skeleton"
import { getHomeFinancingServices, HomeFinancingService } from "@/services/financing-services"
import { financingServices as fallbackFinancingData } from "@/data/financing-services"

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
  const [loading, setLoading] = useState(true)

  // Initial fallback list mapped to HomeFinancingService shape
  const initialFallbackServices: HomeFinancingService[] = useMemo(() => {
    return fallbackFinancingData
      .filter((service) => service.showOnHome)
      .sort((a, b) => a.order - b.order)
      .map((s) => ({
        id: s.id,
        title: s.titleKey,
        description: s.descriptionKey,
        image: s.image,
        href: s.href,
        order: s.order,
      }))
  }, [])

  const [homeServices, setHomeServices] = useState<HomeFinancingService[]>(initialFallbackServices)

  // Fetch live curated financing items from Navigation & Services API
  useEffect(() => {
    let isMounted = true
    setLoading(true)

    getHomeFinancingServices(locale)
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          setHomeServices(data)
        }
      })
      .catch((err) => {
        console.warn("Error loading financing services from API:", err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [locale])

  const total = homeServices.length || 1

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
    if (total <= 1) return
    const id = setInterval(() => {
      if (!dragging) next()
    }, 5000)
    return () => clearInterval(id)
  }, [dragging, next, total])

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
        opacity: 0.65,
        zIndex: 20,
        brightness: 0.72,
        visible: true,
      }
    }
    return {
      x: `${sign * (pos > 0 ? 1 : -1) * 110}%`,
      scale: 0.65,
      opacity: 0,
      zIndex: 10,
      brightness: 0.4,
      visible: false,
    }
  }

  const renderTitle = (service: HomeFinancingService) => {
    if (service.title && service.title.startsWith("financingServices.")) {
      return t(service.title as any)
    }
    return service.title
  }

  const renderDescription = (service: HomeFinancingService) => {
    if (service.description && service.description.startsWith("financingServices.")) {
      return t(service.description as any)
    }
    return service.description
  }

  return (
    <section className="relative py-14 overflow-hidden" aria-label="Financing Services">
      <div className="container mx-auto px-4 relative z-10">
        {/* ─── Section Header ─── */}
        <SectionHeader
          badge={t("financingServices.badge")}
          title={t("financingServices.title")}
          description={t("financingServices.description")}
          titleClassName="text-[#242835]"
          descriptionClassName="text-[#64748b]"
        />

        {/* ─── Slider Stage / Skeleton ─── */}
        {loading ? (
          <FinancingSliderSkeleton />
        ) : (
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
                const titleText = renderTitle(service)
                const descText = renderDescription(service)

                return (
                  <motion.div
                    key={service.id}
                    className="absolute cursor-pointer"
                    style={{
                      width: "min(460px, 86vw)",
                      pointerEvents: cfg.visible ? "auto" : "none",
                    }}
                    animate={{
                      x: cfg.x,
                      scale: cfg.scale,
                      opacity: cfg.opacity,
                      zIndex: cfg.zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 30,
                    }}
                    onClick={() => {
                      if (pos !== 0) setActive(i)
                    }}
                  >
                    {/* Card outer container */}
                    <div
                      className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-xl md:shadow-2xl transition-all duration-300 group"
                      style={{
                        height: 520,
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                      }}
                    >
                      {/* 1. Image Viewport (Top 62%) */}
                      <div className="relative w-full h-[60%] overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={titleText}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 86vw, 460px"
                          priority={pos === 0}
                        />
                        {/* Subtle bottom shadow overlay to separate from content */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                        {/* Top Category Badge */}
                        <div className="absolute top-4 start-4 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#324198] shadow-sm backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#324198]" />
                            {t("financingServices.islamicFinancing")}
                          </span>
                        </div>
                      </div>

                      {/* 2. Content Details (Bottom 40%) */}
                      <div className="relative h-[40%] p-5 md:p-6 flex flex-col justify-between bg-white">
                        <div>
                          {/* Title */}
                          <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] leading-snug line-clamp-1 mb-2">
                            {titleText}
                          </h3>

                          {/* Description */}
                          <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed line-clamp-2">
                            {descText}
                          </p>
                        </div>

                        {/* Card Footer: Action Button & Indicators */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          <Link
                            href={mode === "url" ? getLocalizedHref(service.href, locale) : service.href}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#324198] hover:text-[#1d2660] transition-colors group/link"
                            onClick={(e) => {
                              if (pos !== 0) e.preventDefault()
                            }}
                          >
                            <span>{t("common.readMore")}</span>
                            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1">
                              {isRTL ? "←" : "→"}
                            </span>
                          </Link>

                          {/* Mini active indicator */}
                          <span className="text-xs font-medium text-slate-400">
                            {i + 1} / {total}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* ─── Controls: Prev / Next Buttons ─── */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={prev}
                aria-label={t("common.previous")}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-[#324198] hover:text-white hover:border-[#324198] transition-all duration-200 active:scale-95"
              >
                {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2 px-2">
                {homeServices.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-7 bg-[#324198]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label={t("common.next")}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-[#324198] hover:text-white hover:border-[#324198] transition-all duration-200 active:scale-95"
              >
                {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

