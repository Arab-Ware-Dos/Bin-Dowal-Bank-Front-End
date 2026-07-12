"use client"

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  type KeyboardEvent,
} from "react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { motion, useAnimation, useReducedMotion, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react"

export interface RelatedService {
  id: string | number
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
  href: string
  categoryAr?: string
  categoryEn?: string
}

interface RelatedServicesSliderProps {
  services: RelatedService[]
  titleAr?: string
  titleEn?: string
  subtitleAr?: string
  subtitleEn?: string
}

const GAP = 24
const AUTO_PLAY_DELAY = 4500

export function RelatedServicesSlider({
  services,
  titleAr = "خدمات أخرى قد تهمك",
  titleEn = "Other Services You May Like",
  subtitleAr = "اكتشف المزيد من الحلول المصرفية المصممة خصيصاً لتلبية احتياجاتك",
  subtitleEn = "Discover more banking solutions tailored specifically to your needs",
}: RelatedServicesSliderProps) {
  const { direction } = useI18n()
  const isRTL = direction === "rtl"
  const shouldReduceMotion = useReducedMotion()

  const viewportRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const element = viewportRef.current
    if (!element) return

    const updateWidth = () => {
      setViewportWidth(element.clientWidth)
    }

    updateWidth()

    const observer = new ResizeObserver(() => {
      updateWidth()
    })

    observer.observe(element)
    window.addEventListener("resize", updateWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  const visibleCardsCount = useMemo(() => {
    if (viewportWidth >= 1180) return Math.min(3, services.length)
    if (viewportWidth >= 768) return Math.min(2, services.length)
    return 1
  }, [services.length, viewportWidth])

  const cardWidth = useMemo(() => {
    if (!viewportWidth) return 320

    const safeVisibleCount = Math.max(1, visibleCardsCount)
    const calculatedWidth =
      (viewportWidth - GAP * (safeVisibleCount - 1)) / safeVisibleCount

    if (safeVisibleCount === 1) {
      return Math.max(220, calculatedWidth)
    }

    return Math.max(260, calculatedWidth)
  }, [viewportWidth, visibleCardsCount])

  const maxIndex = useMemo(
    () => Math.max(0, services.length - visibleCardsCount),
    [services.length, visibleCardsCount],
  )

  const totalSteps = maxIndex + 1
  const canSlide = maxIndex > 0

  const labels = useMemo(
    () => ({
      region: isRTL ? titleAr : titleEn,
      previous: isRTL ? "الشريحة السابقة" : "Previous slide",
      next: isRTL ? "الشريحة التالية" : "Next slide",
      viewDetails: isRTL ? "عرض التفاصيل" : "View details",
      goToSlide: isRTL ? "الانتقال إلى الشريحة" : "Go to slide",
      carousel: isRTL ? "شريط خدمات مقترحة" : "Suggested services carousel",
      stepLabel: isRTL ? "شريحة" : "Slide",
      relatedLabel: isRTL ? "حلول مرتبطة" : "RELATED SOLUTIONS",
    }),
    [isRTL, titleAr, titleEn],
  )

  const slideTo = useCallback(
    (index: number) => {
      const safeIndex = Math.max(0, Math.min(index, maxIndex))
      setCurrentIndex(safeIndex)
    },
    [maxIndex],
  )

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const autoNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    const xMovement = currentIndex * (cardWidth + GAP)

    controls.start({
      x: isRTL ? xMovement : -xMovement,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 220, damping: 28, mass: 0.85 },
    })
  }, [cardWidth, controls, currentIndex, isRTL, shouldReduceMotion])

  useEffect(() => {
    if (!canSlide || shouldReduceMotion || isHovered || isDragging) return

    const interval = window.setInterval(() => {
      autoNext()
    }, AUTO_PLAY_DELAY)

    return () => window.clearInterval(interval)
  }, [autoNext, canSlide, isDragging, isHovered, shouldReduceMotion])

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(false)

    if (!canSlide) return

    const offset = info.offset.x
    const velocity = info.velocity.x
    const threshold = Math.min(110, cardWidth * 0.18)
    const passedThreshold =
      Math.abs(offset) > threshold || Math.abs(velocity) > 500

    if (!passedThreshold) {
      slideTo(currentIndex)
      return
    }

    const shouldGoNext = isRTL ? offset > 0 : offset < 0

    if (shouldGoNext) {
      next()
      return
    }

    prev()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!canSlide) return

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      isRTL ? next() : prev()
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      isRTL ? prev() : next()
    }
  }

  if (!services?.length) return null

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] py-16"
      dir={direction}
      aria-label={labels.region}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mb-3 font-cairo text-3xl font-bold tracking-tight text-[#24356f] md:text-4xl"
            >
              {isRTL ? titleAr : titleEn}
            </motion.h2>

            {(subtitleAr || subtitleEn) && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.06 }}
                className="max-w-xl font-cairo text-base leading-8 text-slate-600 md:text-lg"
              >
                {isRTL ? subtitleAr : subtitleEn}
              </motion.p>
            )}
          </div>

          {canSlide && (
            <div className="hidden items-center gap-3 md:flex">
              <div className="rounded-full px-4 py-2 font-cairo text-sm font-semibold text-slate-500">
                {currentIndex + 1} / {totalSteps}
              </div>

              <button
                type="button"
                onClick={isRTL ? next : prev}
                disabled={currentIndex === (isRTL ? maxIndex : 0)}
                aria-label={labels.previous}
                className="flex h-12 w-12 items-center justify-center rounded-full  text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#324198]/20 hover:bg-[#324198] hover:text-white disabled:translate-y-0 disabled:opacity-40 disabled:hover:border-slate-200/80 disabled:hover:bg-white disabled:hover:text-slate-500"
              >
                <ChevronLeft className="h-5 w-5 rtl:hidden" />
                <ChevronRight className="hidden h-5 w-5 rtl:block" />
              </button>

              <button
                type="button"
                onClick={isRTL ? prev : next}
                disabled={currentIndex === (isRTL ? 0 : maxIndex)}
                aria-label={labels.next}
                className="flex h-12 w-12 items-center justify-center rounded-full  bg-white text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#324198]/20 hover:bg-[#324198] hover:text-white disabled:translate-y-0 disabled:opacity-40 disabled:hover:border-slate-200/80 disabled:hover:bg-white disabled:hover:text-slate-500"
              >
                <ChevronRight className="h-5 w-5 rtl:hidden" />
                <ChevronLeft className="hidden h-5 w-5 rtl:block" />
              </button>
            </div>
          )}
        </div>

        <div
          ref={viewportRef}
          className="relative overflow-hidden rounded-[32px] p-3 md:p-4"
          tabIndex={canSlide ? 0 : -1}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="region"
          aria-roledescription={isRTL ? "عارض شرائحي" : "carousel"}
          aria-label={labels.carousel}
        >
          <motion.div
            className="flex"
            style={{ gap: `${GAP}px` }}
            animate={controls}
            drag={canSlide ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.07}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.45, ease: "easeOut" }
            }
          >
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.96)_100%)] shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
                aria-label={`${labels.stepLabel} ${index + 1}`}
              >
                <div className="absolute inset-x-0 top-0 z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(50,65,152,0.35),transparent)]" />

                <div className="relative h-[240px] overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={isRTL ? service.titleAr : service.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,38,0.02)_0%,rgba(11,18,38,0.08)_35%,rgba(11,18,38,0.52)_100%)]" />

                  {(service.categoryAr || service.categoryEn) && (
                    <div className="absolute start-4 top-4 inline-flex items-center rounded-full border border-white/60 bg-white/90 px-4 py-1.5 font-cairo text-[12px] font-bold text-[#324198] shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-sm">
                      {isRTL ? service.categoryAr : service.categoryEn}
                    </div>
                  )}
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="mb-3 font-cairo text-[22px] font-bold leading-tight text-[#1f2d5c] transition-colors duration-300 group-hover:text-[#324198]">
                    {isRTL ? service.titleAr : service.titleEn}
                  </h3>

                  <p className="mb-8 min-h-[52px] line-clamp-2 font-cairo text-[15px] leading-7 text-slate-600">
                    {isRTL ? service.descriptionAr : service.descriptionEn}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 font-cairo text-[15px] font-bold text-[#324198]"
                    aria-label={`${labels.viewDetails}: ${
                      isRTL ? service.titleAr : service.titleEn
                    }`}
                  >
                    <span>{labels.viewDetails}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#324198]/12 bg-[#324198]/[0.05] text-[#324198] transition-all duration-300 group-hover:bg-[#324198] group-hover:text-white">
                      {isRTL ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {canSlide && (
          <div className="mt-8 flex items-center justify-between md:hidden">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => slideTo(index)}
                  aria-label={`${labels.goToSlide} ${index + 1}`}
                  aria-current={index === currentIndex}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "h-2 w-8 bg-[#324198]"
                      : "h-2 w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={isRTL ? next : prev}
                disabled={currentIndex === (isRTL ? maxIndex : 0)}
                aria-label={labels.previous}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-500 shadow-sm transition-colors hover:bg-[#324198] hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-500"
              >
                <ChevronLeft className="h-5 w-5 rtl:hidden" />
                <ChevronRight className="hidden h-5 w-5 rtl:block" />
              </button>

              <button
                type="button"
                onClick={isRTL ? prev : next}
                disabled={currentIndex === (isRTL ? 0 : maxIndex)}
                aria-label={labels.next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-500 shadow-sm transition-colors hover:bg-[#324198] hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-500"
              >
                <ChevronRight className="h-5 w-5 rtl:hidden" />
                <ChevronLeft className="hidden h-5 w-5 rtl:block" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}