"use client"

import Link from "next/link"
import { useState, type MouseEvent, type ComponentType } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { products } from "@/data/mock-data"
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  CreditCard,
  Landmark,
  Menu,
  Newspaper,
  QrCode,
  Receipt,
  ScanLine,
  Send,
  Smartphone,
  UserRound,
  Wallet,
} from "lucide-react"

const promoFeatures = [
  { key: "feature1", icon: ArrowRightLeft },
  { key: "feature2", icon: Wallet },
  { key: "feature3", icon: Receipt },
  { key: "feature4", icon: CreditCard },
  { key: "feature5", icon: ScanLine },
] as const

const actionIcons = [
  { icon: ArrowRightLeft, ar: "التحويلات", en: "Transfers" },
  { icon: Send, ar: "الحوالات المالية", en: "Money Transfers" },
  { icon: ScanLine, ar: "سحب بدون بطاقة", en: "Cardless Cash" },
  { icon: Receipt, ar: "السداد", en: "Payments" },
  { icon: UserRound, ar: "المستفيدون", en: "Beneficiaries" },
  { icon: Newspaper, ar: "أخبار", en: "News" },
] as const

const serviceIconMap: Record<string, ComponentType<{ className?: string }>> = {
  Wallet,
  CreditCard,
  Landmark,
  Smartphone,
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M3.609 2.062 13.792 12 3.61 21.938a1.55 1.55 0 0 1-.36-.98V3.042c0-.36.13-.704.36-.98Z" />
      <path d="m14.53 12.74 2.55 2.49-9.96 5.66 7.41-8.15Z" opacity=".9" />
      <path d="m17.08 8.77-2.55 2.49-7.41-8.15 9.96 5.66Z" opacity=".9" />
      <path d="M20.33 10.61c.55.31.55 1.1 0 1.41l-3.25 1.85L14.53 12l2.55-1.87 3.25 1.48Z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M15.18 3.25c0 1.08-.4 2.08-1.06 2.82-.67.74-1.73 1.3-2.78 1.22-.13-1.04.37-2.12 1.01-2.82.68-.75 1.85-1.29 2.83-1.22Z" />
      <path d="M18.6 12.83c.02 2.28 2 3.04 2.02 3.05-.02.05-.31 1.04-.98 2.06-.59.88-1.2 1.75-2.16 1.77-.93.02-1.23-.56-2.3-.56-1.06 0-1.4.54-2.28.58-.92.03-1.61-.92-2.2-1.8-1.2-1.77-2.11-5-0.88-7.13.62-1.06 1.72-1.73 2.92-1.75.9-.02 1.76.61 2.3.61.54 0 1.56-.75 2.63-.64.45.02 1.71.18 2.52 1.37-.06.04-1.49.87-1.47 2.44Z" />
    </svg>
  )
}

export function AppPromoSection() {
  const { t, locale, direction } = useI18n()
  const reduceMotion = useReducedMotion()
  const isArabic = locale === "ar"
  const LearnMoreArrow = direction === "rtl" ? ArrowLeft : ArrowRight

  const [activeAction, setActiveAction] = useState<number | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.2, -3.2]), {
    stiffness: 110,
    damping: 18,
    mass: 0.5,
  })

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.2, 3.2]), {
    stiffness: 110,
    damping: 18,
    mass: 0.5,
  })

  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 110,
    damping: 18,
    mass: 0.5,
  })

  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-3, 3]), {
    stiffness: 110,
    damping: 18,
    mass: 0.5,
  })

  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 20,
  })

  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 20,
  })

  const handleParallax = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(px)
    mouseY.set(py)
  }

  const resetParallax = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  }

  const fadeSide = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : isArabic ? 36 : -36 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  }

  const fadeSidePhone = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : isArabic ? -36 : 36 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }

  const serviceContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }

  const serviceItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const phoneText = {
    badge: isArabic ? "تطبيق بنك بن دول" : "Bindowal Bank App",
    home: isArabic ? "الرئيسية" : "Home",
    cardTitle: isArabic ? "ودائع عملاء ج/ أفراد" : "Retail Client Deposits",
    details: isArabic ? "التفاصيل" : "Details",
    iban: isArabic ? "رقم الآيبان" : "IBAN",
    cif: isArabic ? "رقم CIF" : "CIF No.",
  }

  const storeButtons = [
    {
      key: "play",
      href: "https://play.google.com/store/apps/details?id=com.mobile.newdemobanking&pcampaignid=web_share",
      icon: GooglePlayIcon,
      eyebrow: isArabic ? "متوفر على" : "GET IT ON",
      title: "Google Play",
    },
    {
      key: "apple",
      href: "https://apps.apple.com/ye/app/bindowal-bank/id6738337669?l=ar",
      icon: AppleIcon,
      eyebrow: isArabic ? "حمّل من" : "Download on the",
      title: "App Store",
    },
  ] as const

  const panelItems = [
    { label: phoneText.details, icon: ArrowRightLeft },
    { label: phoneText.iban, icon: QrCode },
    { label: phoneText.cif, icon: Wallet },
  ] as const

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#fbf6f8_42%,#f5edf2_100%)]" />
      <div className="absolute inset-0 -z-20 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(24,39,112,0.05)_1px,transparent_0)] [background-size:24px_24px]" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        animate={
          reduceMotion
            ? undefined
            : {
              opacity: [0.72, 1, 0.76],
            }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute start-[8%] top-24 h-60 w-60 rounded-full bg-[#3C44FF]/10 blur-3xl" />
        <div className="absolute end-[10%] top-16 h-64 w-64 rounded-full bg-[#6B5BFF]/10 blur-3xl" />
        <div className="absolute end-[8%] bottom-10 h-72 w-72 rounded-full bg-[#C77DFF]/8 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9DFFE] bg-white/85 px-4 py-2 text-xs font-semibold text-[#2F37F0] shadow-[0_10px_24px_rgba(24,39,112,0.06)] backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#2F37F0]" />
              {phoneText.badge}
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-5 text-3xl font-bold tracking-tight text-[#111B4D] md:text-4xl xl:text-5xl"
            >
              {t("appPromo.title")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-xl text-lg leading-8 text-[#5F678B]"
            >
              {t("appPromo.subtitle")}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {promoFeatures.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <motion.div
                    key={feature.key}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -4, scale: 1.01, transition: { duration: 0.2 } }
                    }
                    className="group relative overflow-hidden rounded-[26px] border border-white/85 bg-white/88 p-4 shadow-[0_14px_34px_rgba(24,39,112,0.06)] backdrop-blur"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7380FF]/70 to-transparent" />

                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                              scale: [1, 1.04, 1],
                              opacity: [1, 0.94, 1],
                            }
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
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              {storeButtons.map((store, index) => {
                const StoreIcon = store.icon

                return (
                  <motion.a
                    key={store.key}
                    href={store.href}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                          y: -4,
                          scale: 1.01,
                          transition: { duration: 0.2 },
                        }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                    className="group relative flex min-w-[220px] items-center gap-3 overflow-hidden rounded-[22px] border border-white/90 bg-white/92 px-4 py-3 shadow-[0_12px_24px_rgba(24,39,112,0.05)] backdrop-blur"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7B87FF]/60 to-transparent" />

                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                            scale: [1, 1.03, 1],
                            opacity: [1, 0.94, 1],
                          }
                      }
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    >
                      <StoreIcon />
                    </motion.div>

                    <div className="flex-1">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A82A6]">
                        {store.eyebrow}
                      </div>
                      <div className="text-base font-bold text-[#111B4D]">
                        {store.title}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeSidePhone}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              className="relative"
              onMouseMove={handleParallax}
              onMouseLeave={resetParallax}
              style={
                reduceMotion
                  ? { perspective: 1200 }
                  : {
                    perspective: 1200,
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                    transformStyle: "preserve-3d",
                  }
              }
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 -z-20 rounded-full bg-[#3C44FF]/10 blur-3xl"
                style={reduceMotion ? undefined : { x: glowX, y: glowY }}
              />

              <div className="relative h-[728px] w-[364px] rounded-[46px] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.42))] p-[1px] shadow-[0_36px_100px_rgba(24,39,112,0.16)]">
                <div className="absolute inset-[1px] rounded-[45px] bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0.14))]" />

                <div className="relative h-full overflow-hidden rounded-[45px] border border-white/75 bg-[linear-gradient(180deg,#F7F6FB_0%,#F8EEF2_100%)] p-4">
                  <div className="absolute inset-x-10 top-0 h-20 rounded-b-full bg-white/60 blur-2xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_35%)]" />

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative mb-4 flex items-center justify-between px-2 pt-2"
                  >
                    <motion.button
                      variants={fadeUp}
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#2F37F0]"
                      aria-label={isArabic ? "القائمة" : "Menu"}
                    >
                      <Menu className="h-7 w-7" />
                    </motion.button>

                    <motion.div
                      variants={fadeUp}
                      className="text-[18px] font-extrabold text-[#111B4D]"
                    >
                      {phoneText.home}
                    </motion.div>

                    <div className="h-11 w-11" />
                  </motion.div>

                  <div className="relative pb-24">
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 22,
                        scale: reduceMotion ? 1 : 0.98,
                      }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                              y: [0, -4, 0],
                            }
                        }
                        transition={{
                          duration: 4.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
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
                              transition={{
                                duration: 3.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </>
                        )}

                        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_45%)]" />
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute -start-10 top-14 h-[220px] w-[240px] rounded-full border border-white/25" />
                            <div className="absolute -start-16 top-16 h-[250px] w-[280px] rounded-full border border-white/20" />
                            <div className="absolute -start-24 top-20 h-[290px] w-[330px] rounded-full border border-white/15" />
                            <div className="absolute -start-32 top-24 h-[330px] w-[380px] rounded-full border border-white/10" />
                          </div>
                        </div>

                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="relative z-10"
                        >
                          <motion.div
                            variants={fadeUp}
                            className="flex items-start justify-between"
                          >
                            <div className="text-base font-bold">{phoneText.cardTitle}</div>
                            <div className="text-lg font-black tracking-tight">
                              {isArabic ? "ر.ي" : "RI"}
                            </div>
                          </motion.div>

                          <motion.div
                            variants={fadeUp}
                            className="mt-10 text-center text-[30px] font-bold tracking-[0.18em]"
                          >
                            51,200.00
                          </motion.div>

                          <motion.div
                            variants={fadeUp}
                            className="mt-6 text-center text-lg tracking-[0.18em] opacity-90"
                          >
                            1234 5678 9012 3456
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: reduceMotion ? 0 : 24, scale: 0.97 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{
                            duration: 0.55,
                            ease: "easeOut",
                            delay: reduceMotion ? 0 : 0.15,
                          }}
                          whileHover={
                            reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }
                          }
                          className="absolute inset-x-4 -bottom-7 z-20 rounded-[24px] border border-white/95 bg-white/94 px-4 py-4 text-[#18265F] shadow-[0_22px_34px_rgba(24,39,112,0.12)] backdrop-blur"
                        >
                          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7B87FF]/60 to-transparent" />

                          <div className="grid grid-cols-3">
                            {panelItems.map((item, index) => {
                              const Icon = item.icon

                              return (
                                <div
                                  key={item.label}
                                  className={`flex flex-col items-center justify-center gap-1.5 px-2 text-center ${index !== 2 ? "border-e border-[#E7EAF8]" : ""
                                    }`}
                                >
                                  <span className="text-[11px] font-semibold text-[#6D7599]">
                                    {item.label}
                                  </span>

                                  <motion.div
                                    className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]"
                                    animate={
                                      reduceMotion
                                        ? undefined
                                        : {
                                          scale: [1, 1.03, 1],
                                          opacity: [1, 0.92, 1],
                                        }
                                    }
                                    transition={{
                                      duration: 2.5,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: index * 0.2,
                                    }}
                                  >
                                    <Icon className="h-4 w-4" />
                                  </motion.div>
                                </div>
                              )
                            })}
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.2 }}
                      className="mt-14 flex items-center justify-center gap-2"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCEF]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCEF]" />
                      <motion.span
                        className="h-2.5 w-9 rounded-full bg-[#2F37F0]"
                        animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>

                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                      className="mt-6 grid grid-cols-2 gap-3"
                    >
                      {actionIcons.map((item, index) => {
                        const Icon = item.icon
                        const isActive = activeAction === index

                        return (
                          <motion.div
                            key={item.ar}
                            variants={fadeUp}
                            onHoverStart={() => setActiveAction(index)}
                            onHoverEnd={() => setActiveAction(null)}
                            whileHover={
                              reduceMotion
                                ? undefined
                                : {
                                  y: -4,
                                  scale: 1.01,
                                  transition: { duration: 0.2 },
                                }
                            }
                            className={`group relative overflow-hidden rounded-[24px] border p-4 backdrop-blur transition-all duration-300 ${isActive
                                ? "border-[#DDE2FF] bg-white shadow-[0_16px_38px_rgba(47,55,240,0.10)]"
                                : "border-white/85 bg-white/84 shadow-[0_12px_30px_rgba(24,39,112,0.05)]"
                              }`}
                          >
                            <motion.div
                              aria-hidden="true"
                              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5E6BFF]/65 to-transparent"
                              animate={
                                reduceMotion
                                  ? undefined
                                  : {
                                    opacity: isActive ? 1 : 0.35,
                                    scaleX: isActive ? 1 : 0.86,
                                  }
                              }
                              transition={{ duration: 0.22 }}
                            />

                            <motion.div
                              aria-hidden="true"
                              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,55,240,0.08),transparent_55%)]"
                              animate={
                                reduceMotion
                                  ? undefined
                                  : { opacity: isActive ? 1 : 0.55 }
                              }
                              transition={{ duration: 0.22 }}
                            />

                            <div className="relative z-10 mb-4 flex items-start justify-between">
                              <motion.div
                                animate={
                                  reduceMotion
                                    ? undefined
                                    : { x: isActive ? -3 : 0, opacity: isActive ? 1 : 0.75 }
                                }
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowLeft className="h-4 w-4 text-[#42507D]" />
                              </motion.div>

                              <motion.div
                                className={`flex h-9 w-9 items-center justify-center rounded-2xl ${isActive
                                    ? "bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]"
                                    : "text-[#2F37F0]"
                                  }`}
                                animate={
                                  reduceMotion
                                    ? undefined
                                    : {
                                      scale: isActive ? 1.08 : 1,
                                      rotate: isActive ? -4 : 0,
                                    }
                                }
                                transition={{ duration: 0.22 }}
                              >
                                <motion.div
                                  animate={
                                    reduceMotion
                                      ? undefined
                                      : {
                                        scale: [1, 1.03, 1],
                                      }
                                  }
                                  transition={{
                                    duration: 2.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.12,
                                  }}
                                >
                                  <Icon className="h-6 w-6 stroke-[1.8]" />
                                </motion.div>
                              </motion.div>
                            </div>

                            <motion.div
                              animate={
                                reduceMotion
                                  ? undefined
                                  : {
                                    x: isActive ? -2 : 0,
                                  }
                              }
                              transition={{ duration: 0.2 }}
                              className="relative z-10 text-right text-sm font-bold leading-6 text-[#111B4D]"
                            >
                              {isArabic ? item.ar : item.en}
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.15 }}
                    className="absolute inset-x-0 bottom-0 rounded-b-[45px] border-t border-white/75 bg-white/76 px-6 py-3 backdrop-blur-xl"
                  >
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mt-16 md:mt-20"
        >
          <div className="mx-auto mb-10 h-px max-w-5xl bg-gradient-to-r from-transparent via-[#CBD4FF] to-transparent md:mb-14" />

          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9DFFE] bg-white/85 px-4 py-2 text-xs font-semibold text-[#2F37F0] shadow-[0_10px_24px_rgba(24,39,112,0.06)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2F37F0]" />
              {isArabic ? "الخدمات الإلكترونية" : "Digital Services"}
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111B4D] md:text-4xl xl:text-5xl">
              {isArabic
                ? "اكتشف المزيد من خدماتنا الإلكترونية"
                : "Discover More of Our Digital Services"}
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#5F678B]">
              {isArabic
                ? "مجموعة من الخدمات الرقمية المصممة لتقديم تجربة مصرفية أسرع وأكثر وضوحًا وسهولة ضمن نفس الهوية الاحترافية للتطبيق."
                : "A curated set of digital services designed to provide a faster, clearer, and more seamless banking experience in the same premium app identity."}
            </p>
          </div>

          <motion.div
            variants={serviceContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {products.map((product, index) => {
              const Icon = serviceIconMap[product.icon] || Wallet

              return (
                <motion.div
                  key={product.id}
                  variants={serviceItem}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -5, transition: { duration: 0.2 } }
                  }
                  className="h-full"
                >
                  <Link
                    href={product.href}
                    className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[30px] border border-white/85 bg-white/88 p-6 shadow-[0_14px_34px_rgba(24,39,112,0.06)] backdrop-blur transition-all duration-300 hover:border-[#DDE2FF] hover:shadow-[0_18px_44px_rgba(24,39,112,0.10)]"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7380FF]/70 to-transparent" />
                    <div className="absolute -top-10 end-0 h-28 w-28 rounded-full bg-[#EEF1FF] opacity-70 blur-3xl" />

                    {!reduceMotion && (
                      <motion.div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,55,240,0.06),transparent_55%)]"
                        animate={{ opacity: [0.45, 0.7, 0.45] }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.12,
                        }}
                      />
                    )}

                    <div className="relative z-10 mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FF] text-[#2F37F0] ring-1 ring-[#DCE2FF]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="rounded-full border border-[#E6EAFE] bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#7A82A6]">
                        {isArabic ? "خدمة رقمية" : "Digital"}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col">
                      <h3 className="mb-3 text-xl font-bold leading-7 text-[#111B4D]">
                        {locale === "ar" ? product.titleAr : product.titleEn}
                      </h3>

                      <p className="flex-1 text-sm leading-7 text-[#5F678B]">
                        {locale === "ar" ? product.descAr : product.descEn}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2F37F0]">
                        <span>{isArabic ? "اعرف المزيد" : "Learn more"}</span>
                        <LearnMoreArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}