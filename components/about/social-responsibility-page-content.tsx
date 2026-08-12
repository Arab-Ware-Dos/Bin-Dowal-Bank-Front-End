"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import Image from "next/image"
import Link from "next/link"
import { getLocalizedHref } from "@/lib/localized-routes"
import {
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  MapPin,
  Users,
  Handshake,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  BookOpen,
  X,
  Loader2,
} from "lucide-react"

import { useCsrInitiatives } from "@/hooks/use-csr-initiatives"
import { fetchCsrInitiativeBySlug, initiativeCategories, impactStats } from "@/services/csr-initiatives-service"
import type { CsrInitiative } from "@/types/csr-initiative"

// Map string icon names from mock to real Lucide icons
const iconMap: Record<string, any> = {
  HeartHandshake: HeartHandshake,
  Users: Users,
  MapPin: MapPin,
  Handshake: Handshake,
}

const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
}

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      setCount(value)
      return
    }

    const duration = 2000
    const startTime = performance.now()

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isInView, shouldReduceMotion, value])

  return <span ref={ref}>{count}</span>
}

export function SocialResponsibilityPageContent() {
  const { locale, mode } = useI18n()
  const isAr = locale === "ar"
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedInitiative, setSelectedInitiative] = useState<CsrInitiative | null>(null)
  const [modalLoading, setModalLoading] = useState<boolean>(false)

  const { initiatives: allInitiatives, loading } = useCsrInitiatives()

  // Filter initiatives by category
  const filteredInitiatives =
    activeCategory === "all"
      ? allInitiatives
      : allInitiatives.filter((item) => item.category === activeCategory)

  const text = {
    heroTitle: isAr ? "المسؤولية المجتمعية" : "Social Responsibility",
    heroSubtitle: isAr
      ? "تنمية مستدامة وأثر إيجابي يمتد عبر الأجيال."
      : "Sustainable development and positive impact that spans generations.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    introEyebrow: isAr ? "رؤيتنا المجتمعية" : "Our Social Vision",
    introTitle: isAr ? "شريك حقيقي في بناء مستقبل مزدهر ومستدام" : "A True Partner in Building a Prosperous and Sustainable Future",
    introDesc: isAr
      ? "في بنك بن دول للتمويل الأصغر الإسلامي، نؤمن بأن نجاحنا لا يقاس فقط بالأرقام المالية، بل بحجم الأثر الإيجابي الذي نتركه في مجتمعنا. التزامنا بالمسؤولية المجتمعية جزء أساسي من هويتنا ورسالتنا المؤسسية لتعزيز الشمول المالي وتحقيق التنمية المستدامة."
      : "At Bin Dowal Islamic Microfinance Bank, we believe our success is not only measured by financial figures but by the positive impact we leave on our community. Our commitment to corporate social responsibility is a core part of our identity and mission to promote financial inclusion and sustainable development.",
    statsTitle: isAr ? "أثرنا بالأرقام" : "Our Impact in Numbers",
    statsDesc: isAr ? "نضع الأفراد والمجتمع في مقدمة أولوياتنا من خلال مبادرات تحدث فرقًا ملموسًا." : "We prioritize individuals and society through initiatives that make a tangible difference.",
    campaignsTitle: isAr ? "حملاتنا ومبادراتنا" : "Our Campaigns & Initiatives",
    campaignsDesc: isAr ? "نتفاعل مع احتياجات المجتمع عبر باقة من المبادرات النوعية والمستدامة." : "We respond to community needs through a diverse range of qualitative and sustainable initiatives.",
    readMore: isAr ? "عرض التفاصيل" : "Read More",
    emptyState: isAr ? "قريباً... يتم إضافة وتحديث المبادرات في هذا القسم." : "Coming soon... initiatives in this section are being updated.",
    statusCompleted: isAr ? "منجزة" : "Completed",
    statusOngoing: isAr ? "مستمرة" : "Ongoing",
    statusSeasonal: isAr ? "موسمية" : "Seasonal",
    ctaTitle: isAr ? "نعمل معاً لأجل غدٍ أفضل" : "Working Together for a Better Tomorrow",
    ctaDesc: isAr ? "نحرص دائماً على بناء شراكات تدعم رؤيتنا في تقديم مساهمة فعالة في التنمية المجتمعية. للمزيد من المعلومات أو لفرص الشراكة، نسعد بتواصلك معنا." : "We are always keen to build partnerships that support our vision of effectively contributing to community development. For more info or partnership opportunities, please contact us.",
    ctaButton: isAr ? "تواصل للشراكات المجتمعية" : "Contact for Community Partnerships",
    closeModal: isAr ? "إغلاق" : "Close",
  }

  // Get status details based on value
  const getStatusVisuals = (status: string) => {
    switch (status) {
      case "completed":
        return { label: text.statusCompleted, bg: "bg-emerald-500/10", textCol: "text-emerald-700", border: "border-emerald-500/20" }
      case "ongoing":
        return { label: text.statusOngoing, bg: "bg-blue-500/10", textCol: "text-blue-700", border: "border-blue-500/20" }
      case "seasonal":
        return { label: text.statusSeasonal, bg: "bg-amber-500/10", textCol: "text-amber-700", border: "border-amber-500/20" }
      default:
        return { label: status, bg: "bg-slate-100", textCol: "text-slate-700", border: "border-slate-200" }
    }
  }

  const handleOpenDetail = async (item: CsrInitiative) => {
    setSelectedInitiative(item)
    setModalLoading(true)
    try {
      const detail = await fetchCsrInitiativeBySlug(item.slug)
      if (detail) {
        setSelectedInitiative(detail)
      }
    } catch {
      // Keep existing item state
    } finally {
      setModalLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfdff] font-sans">
      {/* 1. Page Hero Section */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.about, href: "/about" },
          { labelKey: text.heroTitle },
        ]}
      />

      {/* 2. Intro Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.04),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(11,13,54,0.03),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div {...FADE_IN_UP}>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_4px_15px_rgba(11,13,54,0.03)]">
                <HeartHandshake className="h-4 w-4 text-[#8b1e3f]" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#262b80] md:text-sm">
                  {text.introEyebrow}
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-[#0b0d36] md:text-4xl lg:text-5xl">
                {text.introTitle}
              </h2>

              <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#262b80] to-[#8b1e3f]" />

              <p className="text-lg leading-[1.9] text-slate-600 md:text-xl">
                {text.introDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Impact Stats Section */}
      <section className="relative border-y border-[#d7dbea] bg-[linear-gradient(180deg,#f8f9fc_0%,#f3f5fa_100%)] py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-[length:24px_24px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8f9fc] to-transparent" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div {...FADE_IN_UP} className="mb-14 text-center">
            <h3 className="mb-4 text-3xl font-bold text-[#0b0d36] md:text-4xl">{text.statsTitle}</h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{text.statsDesc}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
            {impactStats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Sparkles
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative flex flex-col items-center overflow-hidden rounded-[24px] bg-white p-6 text-center shadow-[0_10px_30px_rgba(11,13,54,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(11,13,54,0.1)] md:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#262b80]/5 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#262b80]/5 text-[#262b80] transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="mb-2 flex items-baseline justify-center gap-1 text-[2.5rem] font-bold leading-none tracking-tight text-[#0b0d36] md:text-[3rem]">
                    {isAr && stat.suffix && <span className="text-xl text-[#8b1e3f] md:text-2xl">{stat.suffix}</span>}
                    <AnimatedNumber value={stat.value} />
                    {!isAr && stat.suffix && <span className="text-xl text-[#8b1e3f] md:text-2xl">{stat.suffix}</span>}
                  </div>

                  <div className="text-sm font-medium text-slate-500 md:text-base">
                    {isAr ? stat.labelAr : stat.labelEn}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Campaigns and Initiatives section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...FADE_IN_UP} className="mb-14 text-center">
            <h3 className="mb-4 text-3xl font-bold text-[#0b0d36] md:text-4xl">{text.campaignsTitle}</h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">{text.campaignsDesc}</p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-[0_4px_20px_rgba(11,13,54,0.04)]">
              {initiativeCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors md:text-base ${
                    activeCategory === cat.id
                      ? "text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#262b80]"
                  }`}
                >
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#262b80] to-[#3a40a6]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{isAr ? cat.labelAr : cat.labelEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Initiatives Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-[#262b80]" />
            </div>
          ) : filteredInitiatives.length > 0 ? (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredInitiatives.map((item) => {
                  const statusInfo = getStatusVisuals(item.status)
                  const categoryName = initiativeCategories.find((c) => c.id === item.category)?.labelAr || item.category
                  const categoryNameEn = initiativeCategories.find((c) => c.id === item.category)?.labelEn || item.category

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={item.id}
                      onClick={() => handleOpenDetail(item)}
                      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(11,13,54,0.08)]"
                    >
                      {/* Image Area */}
                      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent mix-blend-multiply transition-opacity group-hover:opacity-80" />

                        <Image
                          src={item.imageUrl}
                          alt={isAr ? item.titleAr : item.titleEn}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "/images/about-header-cover.jpg"
                          }}
                        />

                        {/* Top Badges */}
                        <div className="absolute top-4 z-20 flex w-full justify-between px-4">
                          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#262b80] shadow-sm backdrop-blur-sm">
                            {isAr ? categoryName : categoryNameEn}
                          </div>
                          {item.featured && (
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8b1e3f] text-white shadow-md">
                              <Sparkles className="h-3.5 w-3.5" />
                            </div>
                          )}
                        </div>

                        {/* Year Badge */}
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                          <BookOpen className="h-3 w-3" />
                          {item.year}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex flex-1 flex-col p-6">
                        <div className={`mb-4 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusInfo.bg} ${statusInfo.textCol} ${statusInfo.border} w-max`}>
                          {statusInfo.label}
                        </div>

                        <h4 className="mb-3 line-clamp-2 text-xl font-bold leading-snug text-[#0b0d36] transition-colors group-hover:text-[#262b80]">
                          {isAr ? item.titleAr : item.titleEn}
                        </h4>

                        <p className="mb-6 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-600">
                          {isAr ? (item.briefAr || (item as any).excerptAr) : (item.briefEn || (item as any).excerptEn)}
                        </p>

                        <div className="mt-auto border-t border-slate-100 pt-5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleOpenDetail(item)
                            }}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#262b80] transition-colors hover:text-[#8b1e3f]"
                          >
                            {text.readMore}
                            {isAr ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <HeartHandshake className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-medium text-slate-600">{text.emptyState}</h4>
            </motion.div>
          )}
        </div>
      </section>

      {/* Detail Modal Dialog */}
      <AnimatePresence>
        {selectedInitiative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedInitiative(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedInitiative(null)}
                className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
                aria-label={text.closeModal}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-slate-100 md:h-80">
                <Image
                  src={selectedInitiative.imageUrl}
                  alt={isAr ? selectedInitiative.titleAr : selectedInitiative.titleEn}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/about-header-cover.jpg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 start-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#262b80]">
                    {selectedInitiative.year}
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusVisuals(selectedInitiative.status).bg} ${getStatusVisuals(selectedInitiative.status).textCol} ${getStatusVisuals(selectedInitiative.status).border}`}>
                    {getStatusVisuals(selectedInitiative.status).label}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#0b0d36] md:text-3xl">
                  {isAr ? selectedInitiative.titleAr : selectedInitiative.titleEn}
                </h3>

                <p className="text-base leading-relaxed text-slate-600">
                  {isAr ? (selectedInitiative.briefAr || (selectedInitiative as any).excerptAr) : (selectedInitiative.briefEn || (selectedInitiative as any).excerptEn)}
                </p>

                <div className="my-6 h-px bg-slate-200" />

                {modalLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-[#262b80]" />
                  </div>
                ) : (
                  <div
                    className="csr-content prose prose-slate max-w-none text-base leading-8 text-slate-700
                               [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-[#0b0d36]
                               [&_p]:mb-4 [&_p]:leading-8
                               [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-6"
                    dangerouslySetInnerHTML={{
                      __html: isAr
                        ? selectedInitiative.contentAr || selectedInitiative.briefAr
                        : selectedInitiative.contentEn || selectedInitiative.briefEn,
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            {...FADE_IN_UP}
            className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-sm sm:p-14"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner">
              <Handshake className="h-10 w-10" />
            </div>

            <h3 className="mb-6 text-3xl font-bold text-white md:text-5xl">{text.ctaTitle}</h3>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80">
              {text.ctaDesc}
            </p>

            <Link
              href={mode === "url" ? getLocalizedHref("/contact", locale) : "/contact"}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0b0d36] shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:bg-slate-50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)]"
            >
              {text.ctaButton}
              {isAr ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
