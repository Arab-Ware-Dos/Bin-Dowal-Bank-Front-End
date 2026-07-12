"use client"

import {
  useEffect,
  useId,
  useState,
  type ComponentType,
  type KeyboardEvent,
} from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import {
  ArrowRightLeft,
  Wallet,
  Receipt,
  CreditCard,
  ScanLine,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface AppFeature {
  key: string
  icon: LucideIcon
}

interface AppSlide {
  id: string
  image: string
  titleKey: string
  descKey: string
  accentColor: string
}

interface StoreButton {
  key: string
  href: string
  icon: ComponentType<{ className?: string }>
  eyebrowKey: string
  titleKey: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────────────────────────────────────

const AUTOPLAY_DELAY = 6500

const appFeatures: AppFeature[] = [
  { key: "feature1", icon: ArrowRightLeft },
  { key: "feature2", icon: Wallet },
  { key: "feature3", icon: Receipt },
  { key: "feature4", icon: CreditCard },
  { key: "feature5", icon: ScanLine },
  { key: "feature6", icon: Shield },
]

const appSlides: AppSlide[] = [
  {
    id: "home",
    image: "/images/bindowalpay/screenshot3.jpeg",
    titleKey: "binDowalPay.slide1.title",
    descKey: "binDowalPay.slide1.desc",
    accentColor: "#182770",
  },
  {
    id: "transfer",
    image: "/images/bindowalpay/screenshot2.jpeg",
    titleKey: "binDowalPay.slide2.title",
    descKey: "binDowalPay.slide2.desc",
    accentColor: "#6B4DB8",
  },
  {
    id: "purchase",
    image: "/images/bindowalpay/screenshot1.jpeg",
    titleKey: "binDowalPay.slide3.title",
    descKey: "binDowalPay.slide3.desc",
    accentColor: "#0D5754",
  },
  {
    id: "payments",
    image: "/images/bindowalpay/screenshot4.jpeg",
    titleKey: "binDowalPay.slide4.title",
    descKey: "binDowalPay.slide4.desc",
    accentColor: "#B8430D",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Store icons
// ─────────────────────────────────────────────────────────────────────────────

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M3.609 2.062 13.792 12 3.61 21.938a1.55 1.55 0 0 1-.36-.98V3.042c0-.36.13-.704.36-.98Z" />
      <path d="m14.53 12.74 2.55 2.49-9.96 5.66 7.41-8.15Z" opacity=".9" />
      <path d="m17.08 8.77-2.55 2.49-7.41-8.15 9.96 5.66Z" opacity=".9" />
      <path d="M20.33 10.61c.55.31.55 1.1 0 1.41l-3.25 1.85L14.53 12l2.55-1.87 3.25 1.48Z" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M15.18 3.25c0 1.08-.4 2.08-1.06 2.82-.67.74-1.73 1.3-2.78 1.22-.13-1.04.37-2.12 1.01-2.82.68-.75 1.85-1.29 2.83-1.22Z" />
      <path d="M18.6 12.83c.02 2.28 2 3.04 2.02 3.05-.02.05-.31 1.04-.98 2.06-.59.88-1.2 1.75-2.16 1.77-.93.02-1.23-.56-2.3-.56-1.06 0-1.4.54-2.28.58-.92.03-1.61-.92-2.2-1.8-1.2-1.77-2.11-5-.88-7.13.62-1.06 1.72-1.73 2.92-1.75.9-.02 1.76.61 2.3.61.54 0 1.56-.75 2.63-.64.45.02 1.71.18 2.52 1.37-.06.04-1.49.87-1.47 2.44Z" />
    </svg>
  )
}

const storeButtons: StoreButton[] = [
  {
    key: "play",
    href: "https://play.google.com/store/apps/details?id=com.mobile.newdemobanking&pcampaignid=web_share",
    icon: GooglePlayIcon,
    eyebrowKey: "binDowalPay.getItOn",
    titleKey: "binDowalPay.googlePlay",
  },
  {
    key: "apple",
    href: "https://apps.apple.com/ye/app/bindowal-bank/id6738337669?l=ar",
    icon: AppleIcon,
    eyebrowKey: "binDowalPay.downloadOn",
    titleKey: "binDowalPay.appStore",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function clampSlideIndex(index: number, total: number) {
  return (index + total) % total
}

// ─────────────────────────────────────────────────────────────────────────────
// Indicators
// ─────────────────────────────────────────────────────────────────────────────

interface SlideIndicatorsProps {
  slides: AppSlide[]
  activeIndex: number
  onSelect: (index: number) => void
  reduceMotion: boolean
  direction: "rtl" | "ltr"
  baseId: string
}

function SlideIndicators({
  slides,
  activeIndex,
  onSelect,
  reduceMotion,
  direction,
  baseId,
}: SlideIndicatorsProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "Home" && event.key !== "End") {
      return
    }

    event.preventDefault()

    if (event.key === "Home") {
      onSelect(0)
      return
    }

    if (event.key === "End") {
      onSelect(slides.length - 1)
      return
    }

    const step =
      direction === "rtl"
        ? event.key === "ArrowRight"
          ? -1
          : 1
        : event.key === "ArrowRight"
          ? 1
          : -1

    onSelect(clampSlideIndex(activeIndex + step, slides.length))
  }

  return (
    <div
      role="tablist"
      aria-label="App screens navigation"
      onKeyDown={handleKeyDown}
      className="flex items-center gap-2.5"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={slide.id}
            id={`${baseId}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#182770] focus-visible:ring-offset-2"
          >
            <motion.span
              layout
              className="block h-2 rounded-full bg-[#182770]"
              style={{ minWidth: 8 }}
              animate={isActive ? { width: 32, opacity: 1 } : { width: 8, opacity: 0.38 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: "easeInOut" }}
            />
          </button>
        )
      })}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Phone Mockup
// ─────────────────────────────────────────────────────────────────────────────

interface PhoneMockupProps {
  slides: AppSlide[]
  activeIndex: number
  onSelect: (index: number) => void
  reduceMotion: boolean
  baseId: string
  getSlideAlt: (slide: AppSlide, index: number) => string
}

function PhoneMockup({
  slides,
  activeIndex,
  onSelect,
  reduceMotion,
  baseId,
  getSlideAlt,
}: PhoneMockupProps) {
  const currentSlide = slides[activeIndex]

  return (
    <div className="relative mx-auto flex w-full max-w-[360px] justify-center">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[295/600] w-[min(82vw,295px)] sm:w-[295px]"
      >
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { opacity: [0.4, 0.72, 0.4], scale: [1, 1.04, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[11%] -z-10 rounded-full blur-3xl"
          style={{ backgroundColor: `${currentSlide.accentColor}24` }}
        />

        <div className="absolute inset-0 rounded-[46px] shadow-[0_35px_90px_rgba(24,39,112,0.18),0_0_0_1.5px_rgba(24,39,112,0.1)]">
          <div className="relative h-full overflow-hidden rounded-[44px] bg-[#F2F4FA] ring-1 ring-white/70">
            <div className="relative z-20 flex items-center justify-center bg-[#F2F4FA] pb-1 pt-3">
              <div className="h-[5px] w-[92px] rounded-full bg-[#324198]/15" />
            </div>

            <div
              id={`${baseId}-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${activeIndex}`}
              className="relative h-[calc(100%-28px)] w-full overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.985 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.38, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.image}
                    alt={getSlideAlt(currentSlide, activeIndex)}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 640px) 82vw, 295px"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{
                  boxShadow:
                    "inset 0 0 18px rgba(24,39,112,0.08), inset 0 -10px 20px rgba(255,255,255,0.08)",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-[3px] top-[20%] h-[7%] min-h-[36px] w-[3px] rounded-l-full bg-[#d0d6e8]" />
          <div className="absolute -right-[3px] top-[17%] h-[5%] min-h-[24px] w-[3px] rounded-r-full bg-[#d0d6e8]" />
          <div className="absolute -right-[3px] top-[24%] h-[10%] min-h-[52px] w-[3px] rounded-r-full bg-[#d0d6e8]" />
        </div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2"
        >
          <div className="flex items-center gap-1.5 rounded-[20px] border border-white/80 bg-white/85 px-3 py-2 shadow-[0_10px_28px_rgba(24,39,112,0.14)] backdrop-blur-md">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => onSelect(index)}
                  aria-label={`Preview slide ${index + 1}`}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#182770] focus-visible:ring-offset-2 ${
                    isActive ? "h-10 w-10 ring-2 ring-[#182770]" : "h-8 w-8 opacity-55 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function BinDowalPayApp() {
  const { t, locale, direction } = useI18n()
  const reduceMotionPreference = useReducedMotion()
  const reduceMotion = Boolean(reduceMotionPreference)
  const isArabic = locale === "ar"
  const baseId = useId()

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (reduceMotion || appSlides.length <= 1) return

    const interval = window.setInterval(() => {
      setActiveSlide((prev) => clampSlideIndex(prev + 1, appSlides.length))
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  const currentSlide = appSlides[activeSlide]

  const handleSelectSlide = (index: number) => {
    setActiveSlide(clampSlideIndex(index, appSlides.length))
  }

  const handlePrev = () => {
    setActiveSlide((prev) => clampSlideIndex(prev - 1, appSlides.length))
  }

  const handleNext = () => {
    setActiveSlide((prev) => clampSlideIndex(prev + 1, appSlides.length))
  }

  const getSlideAlt = (slide: AppSlide, index: number) => {
    return `${t("binDowalPay.title")} - ${t(slide.titleKey)} - ${index + 1}`
  }

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.52, ease: "easeOut" },
    },
  }

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.07 },
    },
  }

  const contentSlideIn = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : isArabic ? 28 : -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.62, ease: "easeOut" },
    },
  }

  const phoneSlideIn = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : isArabic ? -28 : 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.62, ease: "easeOut" },
    },
  }

  return (
    <section
      dir={direction}
      aria-labelledby="bin-dowal-pay-heading"
      className="relative overflow-hidden py-20 md:py-24 xl:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#f8f9fd_0%,#eff3fb_54%,#f5f7ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(24,39,112,0.08),transparent_36%),radial-gradient(circle_at_86%_72%,rgba(107,77,184,0.06),transparent_34%),radial-gradient(circle_at_68%_12%,rgba(13,87,84,0.05),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,#182770_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.78] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute start-[4%] top-16 h-48 w-48 rounded-full bg-[#2F37F0]/8 blur-3xl md:h-56 md:w-56" />
        <div className="absolute end-[6%] bottom-12 h-56 w-56 rounded-full bg-[#6B4DB8]/8 blur-3xl md:h-72 md:w-72" />
        <div className="absolute end-[24%] top-8 h-32 w-32 rounded-full bg-[#0D5754]/6 blur-3xl md:h-40 md:w-40" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          {/* Content */}
          <motion.div
            variants={contentSlideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7DEFF] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#182770] shadow-[0_8px_20px_rgba(24,39,112,0.06)] backdrop-blur"
            >
              <motion.span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#182770]"
                animate={reduceMotion ? undefined : { opacity: [1, 0.45, 1], scale: [1, 1.15, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              {t("binDowalPay.badge")}
            </motion.div>

            <motion.h2
              id="bin-dowal-pay-heading"
              variants={fadeUp}
              className="mb-4 text-3xl font-bold leading-[1.18] tracking-tight text-[#111B4D] md:text-4xl xl:text-[2.85rem]"
            >
              {t("binDowalPay.title")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-[58ch] text-base leading-8 text-[#5F678B] md:text-lg"
            >
              {t("binDowalPay.description")}
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.32 }}
                className="mb-7 overflow-hidden rounded-[24px] border border-[#D4D9FF]/70 bg-white/88 shadow-[0_12px_32px_rgba(24,39,112,0.08)] backdrop-blur"
                aria-live="polite"
              >
                <div className="h-1 w-full" style={{ backgroundColor: currentSlide.accentColor }} />

                <div className="flex items-start gap-3 p-5 md:p-6">
                  <div
                    className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${currentSlide.accentColor}18`,
                      color: currentSlide.accentColor,
                    }}
                  >
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-base font-bold text-[#111B4D] md:text-lg">
                      {t(currentSlide.titleKey)}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#5F678B] md:text-[15px]">
                      {t(currentSlide.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mb-8 flex flex-wrap gap-2.5"
            >
              {appFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <motion.div
                    key={feature.key}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -3, scale: 1.015, transition: { duration: 0.16 } }
                    }
                    className="flex cursor-default items-center gap-2 rounded-full border border-[#D4D9FF] bg-white/90 px-4 py-2 text-sm font-semibold text-[#182770] shadow-sm backdrop-blur"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t(`binDowalPay.${feature.key}`)}
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="flex flex-wrap gap-4"
            >
              {storeButtons.map((store, index) => {
                const StoreIcon = store.icon

                return (
                  <motion.a
                    key={store.key}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -4, scale: 1.01, transition: { duration: 0.18 } }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    aria-label={`${t(store.eyebrowKey)} ${t(store.titleKey)}`}
                    className="group relative flex min-w-[200px] items-center gap-3 overflow-hidden rounded-[20px] border border-[#D4D9FF] bg-white/92 px-4 py-3.5 shadow-[0_10px_24px_rgba(24,39,112,0.07)] backdrop-blur transition-shadow hover:shadow-[0_18px_40px_rgba(24,39,112,0.13)]"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7B87FF]/45 to-transparent" />

                    <motion.div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#182770] ring-1 ring-[#D4D9FF]"
                      animate={
                        reduceMotion
                          ? undefined
                          : { scale: [1, 1.04, 1], opacity: [1, 0.92, 1] }
                      }
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.18,
                      }}
                    >
                      <StoreIcon className="h-5 w-5" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7A82A6]">
                        {t(store.eyebrowKey)}
                      </div>
                      <div className="text-sm font-bold text-[#111B4D]">
                        {t(store.titleKey)}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Phone / Preview */}
          <motion.div
            variants={phoneSlideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-10 pb-6"
          >
            <PhoneMockup
              slides={appSlides}
              activeIndex={activeSlide}
              onSelect={handleSelectSlide}
              reduceMotion={reduceMotion}
              baseId={baseId}
              getSlideAlt={getSlideAlt}
            />

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={isArabic ? "الشريحة السابقة" : "Previous slide"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4D9FF] bg-white text-[#182770] shadow-sm transition-all duration-200 hover:bg-[#EEF1FF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#182770] focus-visible:ring-offset-2"
              >
                {direction === "rtl" ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </button>

              <SlideIndicators
                slides={appSlides}
                activeIndex={activeSlide}
                onSelect={handleSelectSlide}
                reduceMotion={reduceMotion}
                direction={direction}
                baseId={baseId}
              />

              <button
                type="button"
                onClick={handleNext}
                aria-label={isArabic ? "الشريحة التالية" : "Next slide"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4D9FF] bg-white text-[#182770] shadow-sm transition-all duration-200 hover:bg-[#EEF1FF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#182770] focus-visible:ring-offset-2"
              >
                {direction === "rtl" ? (
                  <ChevronLeft className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
