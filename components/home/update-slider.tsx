"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

type Slide = {
  id: number
  bgImage: string
  altAr: string
  altEn: string
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/images/bank-update/cover-two.jpg",
    altAr: "إعلان بصري لخدمات وتحديثات بنك بن دول",
    altEn: "Visual campaign for Bindowal Bank services and updates",
  },
  {
    id: 2,
    bgImage: "/images/bank-update/bindwal-pay.jpg",
    altAr: "إعلان بصري لخدمة بن دول باي",
    altEn: "Visual campaign for Bindowal Pay service",
  },
  {
    id: 3,
    bgImage: "/images/bank-update/Eid.jpg",
    altAr: "إعلان بصري لحملة موسمية من بنك بن دول",
    altEn: "Visual campaign for a seasonal Bindowal Bank promotion",
  },
]

const AUTOPLAY_DELAY = 6000
const SWIPE_THRESHOLD = 50

export function UpdateSlider() {
  const { locale, direction } = useI18n()
  const prefersReducedMotion = useReducedMotion()
  const isRTL = direction === "rtl"

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const totalSlides = slides.length

  const copy =
    locale === "ar"
      ? {
          carousel: "سلايدر إعلانات بنك بن دول",
          previous: "الشريحة السابقة",
          next: "الشريحة التالية",
          goTo: "الانتقال إلى الشريحة",
        }
      : {
          carousel: "Bindowal Bank promotional slider",
          previous: "Previous slide",
          next: "Next slide",
          goTo: "Go to slide",
        }

  const goToSlide = useCallback(
    (index: number) => {
      if (!totalSlides) return
      setCurrentSlide((index + totalSlides) % totalSlides)
    },
    [totalSlides]
  )

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return

    const interval = window.setInterval(nextSlide, AUTOPLAY_DELAY)
    return () => window.clearInterval(interval)
  }, [isPaused, nextSlide, totalSlides])

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return

    const endX = e.changedTouches[0]?.clientX ?? 0
    const deltaX = endX - touchStartX.current

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    touchStartX.current = null
  }

  if (!totalSlides) return null

  return (
    <section
      className="relative py-0"
      aria-roledescription="carousel"
      aria-label={copy.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="group relative h-[240px] overflow-hidden sm:h-[340px] md:h-[460px] lg:h-[650px]">
        <div className="absolute inset-0 bg-[#061120]" />

        {slides.map((slide, index) => {
          const isActive = index === currentSlide

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.008,
              }}
              transition={{
                opacity: {
                  duration: prefersReducedMotion ? 0.2 : 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: prefersReducedMotion ? 0.2 : 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={`absolute inset-0 ${isActive ? "z-20" : "z-10 pointer-events-none"}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.bgImage}
                alt={locale === "ar" ? slide.altAr : slide.altEn}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          )
        })}

        {totalSlides > 1 && (
          <>
            <button
              type="button"
              onClick={isRTL ? nextSlide : prevSlide}
              aria-label={copy.previous}
              className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white shadow-[0_14px_34px_rgba(2,8,23,0.22)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.06] hover:border-white/40 hover:bg-white hover:text-[#07172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-5 lg:left-6 lg:h-14 lg:w-14"
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.9} />
            </button>

            <button
              type="button"
              onClick={isRTL ? prevSlide : nextSlide}
              aria-label={copy.next}
              className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white shadow-[0_14px_34px_rgba(2,8,23,0.22)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.06] hover:border-white/40 hover:bg-white hover:text-[#07172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-5 lg:right-6 lg:h-14 lg:w-14"
            >
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.9} />
            </button>
          </>
        )}

        {totalSlides > 1 && (
          <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 md:bottom-6">
            <div className="flex items-center gap-2 rounded-full border border-white/14 bg-[#08172d]/38 px-3 py-2 shadow-[0_14px_30px_rgba(2,8,23,0.18)] backdrop-blur-xl">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`${copy.goTo} ${index + 1}`}
                    aria-current={isActive ? "true" : "false"}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                      isActive
                        ? "h-2.5 w-9 bg-white"
                        : "h-2.5 w-2.5 bg-white/45 hover:bg-white/72"
                    }`}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}