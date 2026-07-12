"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  ArrowRightLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Download,
  Landmark,
  MapPin,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/data/mock-data"

type HeroVisualType =
  | "bank"
  | "cards"
  | "mobile-app"
  | "branches"
  | "accounts"
  | "transfers"
  | "financing"

type HeroSlide = {
  id?: string
  eyebrowAr?: string
  eyebrowEn?: string
  titleAr: string
  titleEn: string
  subtitleAr: string
  subtitleEn: string
  primaryHref?: string
  secondaryHref?: string
  primaryCtaAr?: string
  primaryCtaEn?: string
  secondaryCtaAr?: string
  secondaryCtaEn?: string
  visual?: {
    type?: HeroVisualType
    image?: string
    altAr?: string
    altEn?: string
    badgeAr?: string
    badgeEn?: string
    stat?: {
      value: string
      labelAr: string
      labelEn: string
    }
  }
}

const AUTOPLAY_DELAY = 7000

const fallbackSlides: HeroSlide[] = [
  {
    id: "banking",
    eyebrowAr: "بنك بن دول",
    eyebrowEn: "Bin Dowal Bank",
    titleAr: "حلول مصرفية أكثر وضوحًا وثقة",
    titleEn: "Smarter banking with clarity and trust",
    subtitleAr: "خدمات مصرفية مصممة لتمنحك تجربة أسهل وأكثر أمانًا في كل خطوة.",
    subtitleEn:
      "Banking services designed to give you a simpler, safer experience at every step.",
    primaryHref: "/personal-banking",
    secondaryHref: "/digital-channels",
    primaryCtaAr: "استكشف الخدمات",
    primaryCtaEn: "Explore services",
    secondaryCtaAr: "القنوات الرقمية",
    secondaryCtaEn: "Digital channels",
    visual: {
      type: "bank",
      badgeAr: "تجربة مصرفية موثوقة",
      badgeEn: "Trusted banking experience",
      stat: {
        value: "24/7",
        labelAr: "خدمة رقمية",
        labelEn: "Digital service",
      },
    },
  },
]

export function HeroSection() {
  const { t, locale, direction } = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = useMemo(() => {
    const normalizedSlides = heroSlides as HeroSlide[]
    return normalizedSlides.length > 0 ? normalizedSlides : fallbackSlides
  }, [])

  const slide = slides[currentSlide] ?? slides[0]

  useEffect(() => {
    if (shouldReduceMotion || isPaused || slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, AUTOPLAY_DELAY)

    return () => clearInterval(timer)
  }, [isPaused, shouldReduceMotion, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const title = locale === "ar" ? slide.titleAr : slide.titleEn
  const subtitle = locale === "ar" ? slide.subtitleAr : slide.subtitleEn
  const eyebrow = locale === "ar" ? slide.eyebrowAr : slide.eyebrowEn

  const primaryCta =
    locale === "ar"
      ? slide.primaryCtaAr ?? t("hero.cta.primary")
      : slide.primaryCtaEn ?? t("hero.cta.primary")

  const secondaryCta =
    locale === "ar"
      ? slide.secondaryCtaAr ?? t("hero.cta.secondary")
      : slide.secondaryCtaEn ?? t("hero.cta.secondary")

  return (
    <section
      className="relative w-full h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero section"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero section background new.png"
          alt="Bank Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" />

        {/* <div className="absolute end-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent" /> */}

        {/* <motion.div
          className="absolute -end-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-1/4 -start-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}
      </div>

      <div className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id ?? currentSlide}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-3xl text-start"
            >
              {eyebrow ? (
                <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-sm backdrop-blur-md">
                  <span className="me-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                  {eyebrow}
                </div>
              ) : null}

              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg lg:text-xl">
                {subtitle}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-base font-semibold text-primary shadow-xl shadow-black/10 hover:bg-white/90"
                >
                  <Link href={slide.primaryHref ?? "/personal-banking"}>
                    {primaryCta}
                    <ArrowUpRight className="ms-2 h-4 w-4 rtl:rotate-[-90deg]" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-2xl border-white/20 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 hover:text-white"
                >
                  <Link href={slide.secondaryHref ?? "/digital-channels"}>
                    {secondaryCta}
                    <ArrowUpRight className="ms-2 h-4 w-4 rtl:rotate-[-90deg]" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Visual */}
          <div className="hidden lg:block">
            <HeroVisual
              slide={slide}
              locale={locale}
              currentSlide={currentSlide}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          </div>
        </div>

        {/* Slide Navigation */}
        {slides.length > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/15"
              aria-label="Previous slide"
            >
              {direction === "rtl" ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>

            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id ?? index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-9 bg-white"
                      : "w-2 bg-white/35 hover:bg-white/65"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/15"
              aria-label="Next slide"
            >
              {direction === "rtl" ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function HeroVisual({
  slide,
  locale,
  currentSlide,
  shouldReduceMotion,
}: {
  slide: HeroSlide
  locale: string
  currentSlide: number
  shouldReduceMotion: boolean
}) {
  const visual = slide.visual ?? { type: "bank" as HeroVisualType }

  const alt =
    locale === "ar"
      ? visual.altAr ?? slide.titleAr
      : visual.altEn ?? slide.titleEn

  const badge = locale === "ar" ? visual.badgeAr : visual.badgeEn
  const statLabel =
    locale === "ar" ? visual.stat?.labelAr : visual.stat?.labelEn

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`visual-${slide.id ?? currentSlide}`}
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, x: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, x: -18 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-[560px]"
      >
        <div className="absolute inset-8 rounded-full bg-white/10 blur-3xl" />

        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-[2rem]"
        >
          {visual.image ? (
            <div className="relative flex min-h-[360px] items-center justify-center ">
              <Image
                src={visual.image}
                alt={alt}
                width={560}
                height={430}
                priority={currentSlide === 0}
                className="max-h-[430px] w-full object-contain drop-shadow-2xl"
              />
            </div>
          ) : (
            <AbstractVisual type={visual.type ?? "bank"} />
          )}

          {visual.stat ? (
            <div className="absolute end-3 top-3 rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-primary shadow-xl backdrop-blur-md">
              <div className="text-2xl font-bold leading-none">
                {visual.stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-primary/70">
                {statLabel}
              </div>
            </div>
          ) : null}

          {badge ? (
            <div className="absolute -bottom-5 start-8 rounded-2xl border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-xl">
              {badge}
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function AbstractVisual({ type }: { type: HeroVisualType }) {
  const Icon = getVisualIcon(type)

  return (
    <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white/20 to-white/[0.04] p-8">
      <div className="absolute start-8 top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-8 end-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

      <div className="relative w-full max-w-[360px] rounded-[2rem] border border-white/20 bg-white/95 p-8 text-primary shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-primary/15" />
          <div className="h-10 w-10 rounded-2xl bg-primary/10" />
        </div>

        <div className="grid place-items-center rounded-[1.5rem] bg-primary/5 py-12">
          <Icon className="h-24 w-24 stroke-[1.5]" />
        </div>

        <div className="mt-8 space-y-3">
          <div className="h-3 w-full rounded-full bg-primary/12" />
          <div className="h-3 w-2/3 rounded-full bg-primary/10" />
        </div>
      </div>
    </div>
  )
}

function getVisualIcon(type: HeroVisualType): LucideIcon {
  const icons: Record<HeroVisualType, LucideIcon> = {
    bank: Landmark,
    cards: CreditCard,
    "mobile-app": Smartphone,
    branches: MapPin,
    accounts: ShieldCheck,
    transfers: ArrowRightLeft,
    financing: Landmark,
  }

  return icons[type] ?? Landmark
}