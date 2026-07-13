"use client"

import Link from "next/link"
import Image from "next/image"
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
              className="group relative"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0" />
                <div className="absolute inset-x-10 top-0 h-px" />
                <div className="absolute bottom-0 left-0 right-0 h-24" />

                <div className="relative z-10 flex flex-col items-center justify-center overflow-visible py-8">
                  <motion.div
                    animate={reduceMotion ? { y: 0 } : { y: [0, -8, 0, 8, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <Image
                      src="/images/mockup-mobile-apps.png"
                      alt="Digital banking applications"
                      width={500}
                      height={500}
                      className="h-auto w-[70%] object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  <motion.div
                    animate={
                      reduceMotion
                        ? { opacity: 0.25, scale: 1 }
                        : {
                            scale: [1, 0.85, 1, 1.15, 1],
                            opacity: [0.25, 0.15, 0.25, 0.4, 0.25],
                          }
                    }
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="z-0 mt-4 h-5 w-[45%] rounded-[100%] bg-black/40 blur-xl md:mt-6 md:w-[35%]"
                  />
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