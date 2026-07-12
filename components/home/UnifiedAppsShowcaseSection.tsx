"use client"

import Image from "next/image"
import {
  useEffect,
  useId,
  useState,
  type ComponentType,
  type KeyboardEvent,
} from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Newspaper,
  Receipt,
  ScanLine,
  Send,
  Shield,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react"

const AUTOPLAY_DELAY = 6500

const bankAppFeatures = [
  { key: "feature1", icon: ArrowRightLeft },
  { key: "feature2", icon: Wallet },
  { key: "feature3", icon: Receipt },
  { key: "feature4", icon: CreditCard },
  { key: "feature5", icon: ScanLine },
] as const

const bankQuickActions = [
  { icon: ArrowRightLeft, ar: "التحويلات", en: "Transfers" },
  { icon: Send, ar: "الحوالات", en: "Transfers" },
  { icon: ScanLine, ar: "سحب بدون بطاقة", en: "Cardless Cash" },
  { icon: Receipt, ar: "السداد", en: "Payments" },
  { icon: Wallet, ar: "المستفيدون", en: "Beneficiaries" },
  { icon: Newspaper, ar: "الأخبار", en: "News" },
] as const

const payAppFeatures = [
  { key: "feature1", icon: ArrowRightLeft },
  { key: "feature2", icon: Wallet },
  { key: "feature3", icon: Receipt },
  { key: "feature4", icon: CreditCard },
  { key: "feature5", icon: ScanLine },
  { key: "feature6", icon: Shield },
] as const

interface AppSlide {
  id: string
  image: string
  titleKey: string
  descKey: string
  accentColor: string
}

const payAppSlides: AppSlide[] = [
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

interface StoreButton {
  key: string
  href: string
  icon: ComponentType<{ className?: string }>
}

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
  },
  {
    key: "apple",
    href: "https://apps.apple.com/ye/app/bindowal-bank/id6738337669?l=ar",
    icon: AppleIcon,
  },
]

function clampIndex(index: number, total: number) {
  return (index + total) % total
}

function StoreLinks({ isArabic, reduceMotion }: { isArabic: boolean; reduceMotion: boolean }) {
  return (
    <div className="flex flex-wrap gap-4">
      {storeButtons.map((store, index) => {
        const Icon = store.icon

        return (
          <motion.a
            key={store.key}
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              reduceMotion ? undefined : { y: -4, scale: 1.01, transition: { duration: 0.18 } }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            className="group relative flex min-w-[210px] items-center gap-3 overflow-hidden rounded-[22px] border border-white/90 bg-white/90 px-4 py-3.5 shadow-[0_14px_34px_rgba(24,39,112,0.07)] backdrop-blur"
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7B87FF]/50 to-transparent" />

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
              <Icon className="h-5 w-5" />
            </motion.div>

            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7A82A6]">
                {store.key === "play"
                  ? isArabic
                    ? "متوفر على"
                    : "GET IT ON"
                  : isArabic
                    ? "حمّل من"
                    : "Download on the"}
              </div>
              <div className="text-sm font-bold text-[#111B4D]">
                {store.key === "play" ? "Google Play" : "App Store"}
              </div>
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}

function BankAppPhone({
  isArabic,
  reduceMotion,
}: {
  isArabic: boolean
  reduceMotion: boolean
}) {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-[#2F37F0]/10 blur-3xl" />

        <div className="relative h-[690px] w-full rounded-[46px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.38))] p-[1px] shadow-[0_36px_100px_rgba(24,39,112,0.16)]">
          <div className="relative h-full overflow-hidden rounded-[45px] border border-white/75 bg-[linear-gradient(180deg,#F7F6FB_0%,#F5EEF4_100%)] p-4">
            <div className="absolute inset-x-10 top-0 h-20 rounded-b-full bg-white/60 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_35%)]" />

            <div className="relative mb-4 flex items-center justify-between px-2 pt-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#2F37F0]">
                <div className="grid gap-1">
                  <span className="block h-1 w-6 rounded-full bg-current" />
                  <span className="block h-1 w-6 rounded-full bg-current" />
                  <span className="block h-1 w-6 rounded-full bg-current" />
                </div>
              </div>

              <div className="text-[18px] font-extrabold text-[#111B4D]">
                {isArabic ? "الرئيسية" : "Home"}
              </div>

              <div className="h-11 w-11" />
            </div>

            <div className="relative pb-24">
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 22, scale: reduceMotion ? 1 : 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-visible rounded-[30px] bg-[linear-gradient(135deg,#232AF3_0%,#2F37F0_42%,#5649FF_100%)] px-5 pb-16 pt-6 text-white shadow-[0_26px_55px_rgba(47,55,240,0.34)] ring-1 ring-white/20"
                >
                  {!reduceMotion && (
                    <>
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 skew-x-[-22deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
                        animate={{ x: ["-20%", "240%"] }}
                        transition={{
                          duration: 3.8,
                          repeat: Infinity,
                          repeatDelay: 1.8,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        aria-hidden="true"
                        className="absolute end-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl"
                        animate={{ opacity: [0.45, 0.75, 0.45] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </>
                  )}

                  <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_45%)]" />
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute -start-10 top-14 h-[220px] w-[240px] rounded-full border border-white/25" />
                      <div className="absolute -start-16 top-16 h-[250px] w-[280px] rounded-full border border-white/20" />
                      <div className="absolute -start-24 top-20 h-[290px] w-[330px] rounded-full border border-white/15" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="text-base font-bold">
                        {isArabic ? "ودائع عملاء ج/ أفراد" : "Retail Client Deposits"}
                      </div>
                      <div className="text-lg font-black tracking-tight">
                        {isArabic ? "ر.ي" : "RI"}
                      </div>
                    </div>

                    <div className="mt-10 text-center text-[30px] font-bold tracking-[0.18em]">
                      51,200.00
                    </div>

                    <div className="mt-6 text-center text-lg tracking-[0.18em] opacity-90">
                      1234 5678 9012 3456
                    </div>
                  </div>

                  <div className="absolute inset-x-4 -bottom-7 z-20 rounded-[24px] border border-white/95 bg-white/94 px-4 py-4 text-[#18265F] shadow-[0_22px_34px_rgba(24,39,112,0.12)] backdrop-blur">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7B87FF]/60 to-transparent" />

                    <div className="grid grid-cols-3">
                      {[
                        isArabic ? "التفاصيل" : "Details",
                        isArabic ? "رقم الآيبان" : "IBAN",
                        isArabic ? "رقم CIF" : "CIF No.",
                      ].map((label, index) => (
                        <div
                          key={label}
                          className={`flex flex-col items-center justify-center gap-1.5 px-2 text-center ${
                            index !== 2 ? "border-e border-[#E7EAF8]" : ""
                          }`}
                        >
                          <span className="text-[11px] font-semibold text-[#6D7599]">{label}</span>
                          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]">
                            {index === 0 ? (
                              <ArrowRightLeft className="h-4 w-4" />
                            ) : index === 1 ? (
                              <ScanLine className="h-4 w-4" />
                            ) : (
                              <Wallet className="h-4 w-4" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className="mt-14 flex items-center justify-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCEF]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCEF]" />
                <motion.span
                  className="h-2.5 w-9 rounded-full bg-[#2F37F0]"
                  animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {bankQuickActions.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.ar}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -4, scale: 1.01, transition: { duration: 0.2 } }
                      }
                      className="group relative overflow-hidden rounded-[24px] border border-white/85 bg-white/84 p-4 shadow-[0_12px_30px_rgba(24,39,112,0.05)] backdrop-blur"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5E6BFF]/65 to-transparent" />
                      <div className="relative z-10 mb-4 flex items-start justify-between">
                        <ArrowLeft className="h-4 w-4 text-[#42507D]" />
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]">
                          <motion.div
                            animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
                            transition={{
                              duration: 2.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.12,
                            }}
                          >
                            <Icon className="h-5 w-5 stroke-[1.8]" />
                          </motion.div>
                        </div>
                      </div>

                      <div className="text-right text-sm font-bold leading-6 text-[#111B4D]">
                        {isArabic ? item.ar : item.en}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 rounded-b-[45px] border-t border-white/75 bg-white/76 px-6 py-3 backdrop-blur-xl">
              <div className="grid grid-cols-4 items-center gap-3 text-center text-[10px]">
                <div className="text-[#8A92B2]">
                  <div className="mx-auto mb-1 h-5 w-5 rounded-md border border-[#C8D0E8]" />
                  {isArabic ? "التحويلات" : "Transfers"}
                </div>
                <div className="text-[#8A92B2]">
                  <div className="mx-auto mb-1 h-5 w-5 rounded-md border border-[#C8D0E8]" />
                  {isArabic ? "الميزات" : "Benefits"}
                </div>
                <div className="text-[#8A92B2]">
                  <div className="mx-auto mb-1 h-5 w-5 rounded-md border border-[#C8D0E8]" />
                  {isArabic ? "البطاقات" : "Cards"}
                </div>
                <div className="font-bold text-[#2F37F0]">
                  <div className="mx-auto mb-1 h-5 w-5 rounded-md border border-[#2F37F0]" />
                  {isArabic ? "الرئيسية" : "Home"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function SlideIndicators({
  activeIndex,
  onSelect,
  reduceMotion,
  direction,
  baseId,
}: {
  activeIndex: number
  onSelect: (index: number) => void
  reduceMotion: boolean
  direction: "rtl" | "ltr"
  baseId: string
}) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight" &&
      event.key !== "Home" &&
      event.key !== "End"
    ) {
      return
    }

    event.preventDefault()

    if (event.key === "Home") {
      onSelect(0)
      return
    }

    if (event.key === "End") {
      onSelect(payAppSlides.length - 1)
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

    onSelect(clampIndex(activeIndex + step, payAppSlides.length))
  }

  return (
    <div
      role="tablist"
      aria-label="App screens navigation"
      onKeyDown={handleKeyDown}
      className="flex items-center gap-2.5"
    >
      {payAppSlides.map((slide, index) => {
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

function PayAppPhone({
  activeIndex,
  onSelect,
  reduceMotion,
  baseId,
  getSlideAlt,
}: {
  activeIndex: number
  onSelect: (index: number) => void
  reduceMotion: boolean
  baseId: string
  getSlideAlt: (slide: AppSlide, index: number) => string
}) {
  const currentSlide = payAppSlides[activeIndex]

  return (
    <div className="relative mx-auto flex w-full max-w-[360px] justify-center">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[295/600] w-[min(82vw,295px)] sm:w-[295px]"
      >
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion ? undefined : { opacity: [0.4, 0.72, 0.4], scale: [1, 1.04, 1] }
          }
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
            {payAppSlides.map((slide, index) => {
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
                  <Image src={slide.image} alt="" fill sizes="40px" className="object-cover object-top" />
                </button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export function UnifiedAppsShowcaseSection() {
  const { t, locale, direction } = useI18n()
  const reduceMotion = Boolean(useReducedMotion())
  const isArabic = locale === "ar"
  const baseId = useId()
  const LearnMoreArrow = direction === "rtl" ? ArrowLeft : ArrowRight

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (reduceMotion || payAppSlides.length <= 1) return

    const interval = window.setInterval(() => {
      setActiveSlide((prev) => clampIndex(prev + 1, payAppSlides.length))
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  const currentSlide = payAppSlides[activeSlide]

  const handleSelectSlide = (index: number) => {
    setActiveSlide(clampIndex(index, payAppSlides.length))
  }

  const handlePrev = () => {
    setActiveSlide((prev) => clampIndex(prev - 1, payAppSlides.length))
  }

  const handleNext = () => {
    setActiveSlide((prev) => clampIndex(prev + 1, payAppSlides.length))
  }

  const getSlideAlt = (slide: AppSlide, index: number) => {
    return `${t("binDowalPay.title")} - ${t(slide.titleKey)} - ${index + 1}`
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-24 xl:py-28" dir={direction}>
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fd_22%,#f4eef4_58%,#eef3fb_100%)]" />
      <div className="absolute inset-0 -z-20 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,#182770_1px,transparent_0)] [background-size:24px_24px]" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.78] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute start-[6%] top-20 h-64 w-64 rounded-full bg-[#2F37F0]/8 blur-3xl" />
        <div className="absolute end-[8%] top-12 h-56 w-56 rounded-full bg-[#6B4DB8]/8 blur-3xl" />
        <div className="absolute start-[20%] bottom-[22%] h-72 w-72 rounded-full bg-[#0D5754]/6 blur-3xl" />
        <div className="absolute end-[18%] bottom-0 h-72 w-72 rounded-full bg-[#B8430D]/5 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D7DEFF] bg-white/88 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#182770] shadow-[0_10px_24px_rgba(24,39,112,0.06)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#182770]" />
            {isArabic ? "تطبيقاتنا الرقمية" : "Our Digital Apps"}
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111B4D] md:text-4xl xl:text-5xl">
            {isArabic ? "تطبيقات بنك بن دول" : "Bin Dowal Bank Apps"}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#5F678B]">
            {isArabic
              ? "استكشف التطبيقات المتكاملة من بنك بن دول، المصممة لتلبية جميع احتياجاتك المصرفية بسهولة وأمان."
              : "Explore the integrated apps from Bin Dowal Bank, designed to meet all your banking needs with ease and security."}
          </p>
        </div>

        <div className="space-y-10">
          {/* Top App */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/62 p-6 shadow-[0_24px_80px_rgba(24,39,112,0.08)] backdrop-blur-xl md:p-8 xl:p-10">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#7380FF]/60 to-transparent" />
            <div className="absolute inset-y-0 start-0 w-40 bg-[radial-gradient(circle_at_left,rgba(47,55,240,0.08),transparent_65%)]" />

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9DFFE] bg-white/85 px-4 py-2 text-xs font-semibold text-[#2F37F0] shadow-[0_10px_24px_rgba(24,39,112,0.06)] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#2F37F0]" />
                  {isArabic ? "التطبيق البنكي الرئيسي" : "Main Banking App"}
                </div>

                <h3 className="mb-5 text-3xl font-bold tracking-tight text-[#111B4D] md:text-4xl xl:text-[2.7rem]">
                  {t("appPromo.title")}
                </h3>

                <p className="mb-8 max-w-xl text-lg leading-8 text-[#5F678B]">
                  {t("appPromo.subtitle")}
                </p>

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {bankAppFeatures.map((feature, index) => {
                    const Icon = feature.icon

                    return (
                      <motion.div
                        key={feature.key}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : { y: -4, scale: 1.01, transition: { duration: 0.2 } }
                        }
                        className="group relative overflow-hidden rounded-[24px] border border-white/85 bg-white/88 p-4 shadow-[0_14px_34px_rgba(24,39,112,0.06)] backdrop-blur"
                      >
                        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7380FF]/70 to-transparent" />

                        <div className="flex items-center gap-3">
                          <motion.div
                            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]"
                            animate={
                              reduceMotion
                                ? undefined
                                : { scale: [1, 1.04, 1], opacity: [1, 0.94, 1] }
                            }
                            transition={{
                              duration: 2.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.14,
                            }}
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>

                          <span className="text-sm font-semibold text-[#18265F]">
                            {t(`appPromo.${feature.key}`)}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <StoreLinks isArabic={isArabic} reduceMotion={reduceMotion} />
              </div>

              <BankAppPhone isArabic={isArabic} reduceMotion={reduceMotion} />
            </div>
          </div>

          {/* Connector */}
          <div className="relative flex items-center justify-center py-1">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CBD4FF] to-transparent" />
            <div className="relative flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-5 py-2 text-sm font-semibold text-[#182770] shadow-[0_12px_28px_rgba(24,39,112,0.06)] backdrop-blur">
              {/* <span className="h-2.5 w-2.5 rounded-full bg-[#2F37F0]" /> */}
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bank%20Logo-sQ4ejPvlaY9DvzUZ11CkmGwd9hycOG.png"
                  alt="Bin Dowal Islamic Microfinance Bank"
                  width={200}
                  height={60}
                  priority
                  className="h-11 w-auto sm:h-12"
                />
              
              {isArabic ? "" : ""}
            </div>
          </div>

          {/* Bottom App */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/62 p-6 shadow-[0_24px_80px_rgba(24,39,112,0.08)] backdrop-blur-xl md:p-8 xl:p-10">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#7380FF]/60 to-transparent" />
            <div className="absolute inset-y-0 end-0 w-40 bg-[radial-gradient(circle_at_right,rgba(107,77,184,0.08),transparent_65%)]" />

            <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
              <PayAppPhone
                activeIndex={activeSlide}
                onSelect={handleSelectSlide}
                reduceMotion={reduceMotion}
                baseId={baseId}
                getSlideAlt={getSlideAlt}
              />

              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9DFFE] bg-white/85 px-4 py-2 text-xs font-semibold text-[#2F37F0] shadow-[0_10px_24px_rgba(24,39,112,0.06)] backdrop-blur">
                  <Image
                  src="/images/bindowalpay.png"
                  alt="Bin Dowal Pay"
                  width={200}
                  height={60}
                  priority
                  className="h-11 w-auto sm:h-12"
                />
                </div>
                

                <h3 className="mb-4 text-3xl font-bold tracking-tight text-[#111B4D] md:text-4xl xl:text-[2.7rem]">
                  {t("binDowalPay.title")}
                </h3>

                <p className="mb-8 max-w-[58ch] text-base leading-8 text-[#5F678B] md:text-lg">
                  {t("binDowalPay.description")}
                </p>

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

                <div className="mb-8 flex items-center gap-5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={isArabic ? "الشريحة السابقة" : "Previous slide"}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4D9FF] bg-white text-[#182770] shadow-sm transition-all duration-200 hover:bg-[#EEF1FF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#182770] focus-visible:ring-offset-2"
                  >
                    {direction === "rtl" ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  </button>

                  <SlideIndicators
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
                    {direction === "rtl" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                </div>

                <div className="mb-8 flex flex-wrap gap-2.5">
                  {payAppFeatures.map((feature, index) => {
                    const Icon = feature.icon

                    return (
                      <motion.div
                        key={feature.key}
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
                </div>

                <StoreLinks isArabic={isArabic} reduceMotion={reduceMotion} />

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#2F37F0]">
                  <span>{isArabic ? "اعرف المزيد عن التطبيق" : "Discover the app"}</span>
                  <LearnMoreArrow className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
