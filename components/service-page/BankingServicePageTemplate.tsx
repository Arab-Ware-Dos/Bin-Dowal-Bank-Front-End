"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { PageHero } from "@/components/ui/page-hero"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { useCallback } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  FileText,
  Phone,
  Smartphone,
  Star,
  Users,
} from "lucide-react"
import { RelatedServicesSlider } from "@/components/shared/related-services-slider"
import { allRelatedServices } from "@/data/related-services"
import { ServicePageData, LocalizedText, ServiceFeature } from "@/types/banking-service-page"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { CustomSectionRenderer } from "./custom-section-registry"
import DynamicIcon from "@/components/ui/dynamic-icon"

const viewport = { once: true, amount: 0.18 }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

function getText(text: LocalizedText | undefined, isArabic: boolean) {
  if (!text) return "";
  return isArabic ? text.ar : text.en
}

function SectionTitle({
  title,
  subtitle,
  align = "start",
}: {
  title: string
  subtitle?: string
  align?: "start" | "center"
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-[2rem] font-bold tracking-[-0.02em] text-[#172048] md:text-[2rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-md font-medium leading-7 text-slate-600 md:text-[15px]">{subtitle}</p>
      ) : null}
    </div>
  )
}

function BulletList({
  items,
  isArabic,
}: {
  items: ServiceFeature[]
  isArabic: boolean
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className={`flex items-start gap-3 rounded-2xl px-4 py-4 text-md font-medium leading-7 text-slate-700 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
            <Check className="h-3.5 w-3.5" />
          </span>
          <span>{getText(item.text, isArabic)}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionLabel({ children }: { children: string }) {
  return <p className="text-sm font-bold text-[#b27a1f]">{children}</p>
}

export function BankingServicePageTemplate({ data }: { data: ServicePageData }) {
  const { locale, mode } = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const isArabic = locale === "ar"
  const CTAArrow = isArabic ? ArrowLeft : ArrowRight
  const sideBorderClass = isArabic ? "lg:border-l" : "lg:border-r"

  const resolveHref = useCallback(
    (target: string) => {
      if (!target.startsWith("/") || target.startsWith("//")) {
        return target;
      }
      return mode === "url" ? getLocalizedHref(target, locale) : target;
    },
    [locale, mode]
  );

  const apiRelatedServices = (data.relatedServicesData && data.relatedServicesData.length > 0)
    ? data.relatedServicesData.map((item, idx) => ({
        id: item.service_slug || item.service_id || idx,
        titleAr: item.title_ar || "",
        titleEn: item.title_en || item.title_ar || "",
        descriptionAr: item.summary_ar || "",
        descriptionEn: item.summary_en || item.summary_ar || "",
        image: item.image_url || "/images/company-header-cover.png",
        categoryAr: item.category_ar || (isArabic ? "خدمات البنك" : "Bank Services"),
        categoryEn: item.category_en || "Bank Services",
        href: item.link_url || `/services/${item.service_slug}`
      }))
    : []

  const relatedServices = apiRelatedServices.length > 0
    ? apiRelatedServices
    : (data.relatedServicesKeys 
        ? allRelatedServices.filter((s) => data.relatedServicesKeys?.includes(s.id.toString()))
        : [])

  const sectionLinks = [
    data.overview ? { id: "overview", ar: "نبذة تعريفية", en: "Overview" } : (data.details ? { id: "details", ar: "تفاصيل الخدمة", en: "Service Details" } : null),
    data.why ? { id: "why", ar: "لماذا هذه الخدمة؟", en: "Why this Service?" } : (data.benefits ? { id: "benefits", ar: "كيف أستفيد من الخدمة؟", en: "How Do I Benefit?" } : null),
    data.serviceTypes?.items?.length ? { id: "serviceTypes", ar: "الأنواع", en: "Types" } : null,
    data.featureCards?.items?.length ? { id: "features", ar: "المميزات", en: "Features" } : null,
    data.audience?.items?.length ? { id: "audience", ar: "العملاء المستهدفون", en: "Target Audience" } : null,
    data.requirementsSection?.items?.length ? { id: "requirements", ar: "الشروط والمتطلبات", en: "Requirements" } : (data.howToGet ? { id: "get-service", ar: "كيف أحصل على الخدمة؟", en: "How Do I Get It?" } : null),
    data.stepsSection?.steps?.length ? { id: "steps", ar: "الخطوات", en: "Steps" } : (data.subscribe ? { id: "subscribe", ar: "طريقة الاشتراك", en: "How to Subscribe" } : null),
    data.faqs?.items?.length ? { id: "faqs", ar: "الأسئلة الشائعة", en: "FAQs" } : null,
    data.ctaSection ? { id: "cta", ar: "ابدأ الآن", en: "Start Now" } : null,
    ...(data.customSections || [])
      .filter((s) => s.navTitle)
      .map((s) => ({ id: s.id, ar: s.navTitle!.ar, en: s.navTitle!.en })),
  ].filter(Boolean) as { id: string; ar: string; en: string }[]

  return (
    <>
      <PageHero
        title={getText(data.title, isArabic)}
        subtitle={getText(data.subtitle, isArabic)}
        breadcrumbs={data.breadcrumbs.map(b => ({
          labelKey: b.label ? getText(b.label, isArabic) : (b.labelKey || ""),
          href: b.href
        }))}
        tagline={data.tagline ? getText(data.tagline, isArabic) : undefined}
      >
        {data.primaryCta && (
          <div className="flex flex-wrap gap-4">
            <Link
              href={resolveHref(data.primaryCta.href)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#172048] shadow-[0_14px_34px_rgba(10,18,45,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(10,18,45,0.24)]"
            >
              {getText(data.primaryCta.label, isArabic)}
              <CTAArrow className="h-4 w-4" />
            </Link>
          </div>
        )}
      </PageHero>

      <section className="bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1460px] rounded-[32px] border border-slate-200/70 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.07)] md:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-6">
              <aside
                className={`rounded-[28px] border border-slate-200/70 bg-white px-6 py-7 lg:sticky lg:top-24 lg:self-start lg:px-6 lg:py-8 ${sideBorderClass}`}
              >
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-[#324198]">
                    {isArabic ? "محتوى الصفحة" : "ON THIS PAGE"}
                  </p>
                </div>

                <nav aria-label={isArabic ? "أقسام الصفحة" : "Page sections"}>
                  <ul className="space-y-3">
                    {sectionLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className="group flex items-center gap-3 rounded-2xl px-2 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-[#324198]/[0.04] hover:text-[#324198]"
                        >
                          <span className="h-9 w-[3px] rounded-full bg-slate-200 transition-colors duration-200 group-hover:bg-[#324198]" />
                          <span>{isArabic ? link.ar : link.en}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-7 rounded-[24px] bg-[linear-gradient(180deg,#f8f9fd_0%,#f3f6fb_100%)] p-4">
                  <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">
                    {isArabic ? "هل تحتاج مساعدة؟" : "NEED HELP?"}
                  </p>
                  <a
                    href="tel:+967000000000"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#324198] transition-opacity duration-200 hover:opacity-80"
                  >
                    <Phone className="h-4 w-4" />
                    {isArabic ? "تواصل مع خدمة العملاء" : "Contact Customer Service"}
                  </a>
                </div>
              </aside>

              <div className="space-y-5">
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="overflow-hidden rounded-[28px] bg-[#324198]"
                >
                  <div className="grid gap-8 px-6 py-7 md:px-8 md:py-8 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_460px]">
                    <div>
                      <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[0.02em] text-white md:text-4xl lg:text-5xl">
                        {getText(data.title, isArabic)}
                      </h1>

                      <h2 className="mt-5 max-w-2xl text-xl font-bold leading-tight tracking-[-0.01em] text-white/90 md:text-2xl">
                        {getText(data.subtitle, isArabic)}
                      </h2>
                    </div>

                    <motion.div
                      className="relative mx-auto w-full max-w-[450px] 2xl:max-w-[460px] flex justify-center items-center"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                y: [0, -15, 0],
                                rotate: [0, -0.9, 0, 0.9, 0],
                              }
                        }
                        transition={
                          shouldReduceMotion
                            ? undefined
                            : {
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                        }
                        className="relative w-full flex justify-center z-10"
                      >
                        <div className="relative w-full">
                          <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]">
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center drop-shadow-[0_24px_32px_rgba(0,0,0,0.4)]"
                              whileHover={shouldReduceMotion ? undefined : { scale: 1.035, y: -5 }}
                              transition={{ duration: 0.45, ease: "easeOut" }}
                            >
                              <DynamicIcon
                                name={data.iconConfig?.value || data.heroImage || "/images/company-header-cover.png"}
                                className="max-h-full max-w-full object-contain"
                                alt={isArabic ? "صورة توضيحية للخدمة" : "Service illustration"}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Floor Shadow */}
                      {!shouldReduceMotion && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 h-[15px] w-[60%] max-w-[240px] -translate-x-1/2 rounded-[100%] bg-[#050814]/70 blur-[10px] md:-bottom-4 md:h-[20px]"
                          animate={{
                            scale: [1, 0.7, 1],
                            opacity: [0.9, 0.4, 0.9],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.section>

                <div className="space-y-5">
                  {data.overview && (
                    <motion.section
                      id="overview"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="grid gap-6">
                        <div>
                          <SectionLabel>
                            {isArabic ? "نبذة تعريفية" : "Overview"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.overview.title, isArabic)}
                            subtitle={data.overview.subtitle ? getText(data.overview.subtitle, isArabic) : undefined}
                          />
                        </div>
                        {data.overview.description && (
                          <p className="text-md leading-8 text-slate-700 max-w-4xl font-medium">
                            {getText(data.overview.description, isArabic)}
                          </p>
                        )}
                      </div>
                    </motion.section>
                  )}

                  {data.why && (
                    <motion.section
                      id="why"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "لماذا هذه الخدمة؟" : "Why this Service?"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.why.title, isArabic)}
                            subtitle={data.why.subtitle ? getText(data.why.subtitle, isArabic) : undefined}
                          />
                          {data.why.description && (
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                              {getText(data.why.description, isArabic)}
                            </p>
                          )}
                        </div>
                        {data.why.items && data.why.items.length > 0 && (
                          <div className="mt-6 lg:mt-0 space-y-3">
                            {data.why.items.map((item) => (
                              <div key={item.id} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
                                  <Check className="h-4 w-4" />
                                </span>
                                <span className="text-md font-medium text-slate-700">{getText(item.text, isArabic)}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.section>
                  )}

                  {data.serviceTypes?.items?.length ? (
                    <motion.section
                      id="serviceTypes"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="mb-8">
                        <SectionLabel>
                          {isArabic ? "أنواع" : "Types"}
                        </SectionLabel>
                        <SectionTitle
                          title={getText(data.serviceTypes.title, isArabic)}
                          subtitle={data.serviceTypes.subtitle ? getText(data.serviceTypes.subtitle, isArabic) : undefined}
                        />
                        {data.serviceTypes.description && (
                          <p className="mt-4 text-sm leading-7 text-slate-600">
                            {getText(data.serviceTypes.description, isArabic)}
                          </p>
                        )}
                      </div>
                      {data.serviceTypes.items && data.serviceTypes.items.length > 0 && (
                        <div className="mt-6 lg:mt-0 space-y-3">
                          {data.serviceTypes.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
                                <Check className="h-4 w-4" />
                              </span>
                              <div className="flex flex-col">
                                <span className="text-md font-bold text-slate-700 block">{getText(item.title, isArabic)}</span>
                                {item.description && <span className="text-sm font-medium text-slate-600 block mt-1">{getText(item.description, isArabic)}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.section>
                  ) : null}

                  {data.featureCards?.items?.length ? (
                    <motion.section
                      id="features"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="mb-8">
                        <SectionLabel>
                          {isArabic ? "المميزات" : "Features"}
                        </SectionLabel>
                        <SectionTitle
                          title={getText(data.featureCards.title, isArabic)}
                          subtitle={data.featureCards.subtitle ? getText(data.featureCards.subtitle, isArabic) : undefined}
                        />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {data.featureCards.items.map((card) => (
                          <div key={card.id} className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-200">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#324198]/5 text-[#324198]">
                              <Star className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-[#172048]">{getText(card.title, isArabic)}</h3>
                            <p className="text-sm leading-6 text-slate-600">{getText(card.description, isArabic)}</p>
                          </div>
                        ))}
                      </div>
                    </motion.section>
                  ) : null}

                  {data.audience?.items?.length ? (
                    <motion.section
                      id="audience"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-slate-50/50"
                    >
                      <div className="mb-6 text-center">
                        <SectionLabel>
                          {isArabic ? "العملاء المستهدفون" : "Target Audience"}
                        </SectionLabel>
                        <SectionTitle
                          title={getText(data.audience.title, isArabic)}
                          subtitle={data.audience.subtitle ? getText(data.audience.subtitle, isArabic) : undefined}
                          align="center"
                        />
                      </div>
                      <div className="flex flex-wrap justify-center gap-3">
                        {data.audience.items.map((item) => (
                          <div key={item.id} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
                            <Users className="h-4 w-4 text-[#324198]/70" />
                            {getText(item.text, isArabic)}
                          </div>
                        ))}
                      </div>
                    </motion.section>
                  ) : null}
                  {data.requirementsSection?.items?.length ? (
                    <motion.section
                      id="requirements"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "الشروط والمتطلبات" : "Requirements"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.requirementsSection.title, isArabic)}
                            subtitle={data.requirementsSection.subtitle ? getText(data.requirementsSection.subtitle, isArabic) : undefined}
                          />
                          {data.requirementsSection.note && (
                            <p className="mt-4 text-sm font-medium text-amber-600 bg-amber-50 p-4 rounded-xl border border-amber-100">
                              {getText(data.requirementsSection.note, isArabic)}
                            </p>
                          )}
                        </div>
                        <div className="space-y-6">
                          <ul className="space-y-4">
                            {data.requirementsSection.items.map((item) => (
                              <li
                                key={item.id}
                                className={`flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-md font-medium leading-7 text-slate-700`}
                              >
                                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
                                  <FileText className="h-3.5 w-3.5" />
                                </span>
                                <span>{getText(item.text, isArabic)}</span>
                              </li>
                            ))}
                          </ul>
                          {data.requirementsSection.table && data.requirementsSection.table.length > 0 && (
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                              <table className="w-full text-sm text-left rtl:text-right text-slate-600">
                                <thead className="bg-slate-50 text-xs uppercase text-slate-700">
                                  <tr>
                                    <th className="px-6 py-4 font-bold">{isArabic ? "التفاصيل" : "Details"}</th>
                                    <th className="px-6 py-4 font-bold">{isArabic ? "القيمة" : "Value"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.requirementsSection.table.map((row) => (
                                    <tr key={row.id} className="border-t border-slate-200 bg-white hover:bg-slate-50/50">
                                      <td className="px-6 py-4 font-medium text-[#172048]">{getText(row.label, isArabic)}</td>
                                      <td className="px-6 py-4">{getText(row.value, isArabic)}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.section>
                  ) : null}

                  {data.stepsSection?.steps?.length ? (
                    <motion.section
                      id="steps"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "خطوات الحصول على الخدمة" : "Steps"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.stepsSection.title, isArabic)}
                            subtitle={data.stepsSection.subtitle ? getText(data.stepsSection.subtitle, isArabic) : undefined}
                          />
                          {data.stepsSection.note && (
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                              {getText(data.stepsSection.note, isArabic)}
                            </p>
                          )}
                        </div>
                        <div>
                          <div className="mt-4 space-y-4">
                            {data.stepsSection.steps.map((step, index) => (
                              <div
                                key={step.id}
                                className="grid gap-4 p-5 md:grid-cols-[56px_minmax(0,1fr)] rounded-2xl bg-slate-50 border border-slate-100"
                              >
                                <div className="flex items-start justify-center md:pt-1">
                                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#324198]/20 bg-[#324198]/8 text-sm font-bold text-[#324198]">
                                    {index + 1}
                                  </div>
                                </div>
                                <div>
                                  <h3 className="text-base font-bold text-[#172048] md:text-[1.05rem]">
                                    {getText(step.title, isArabic)}
                                  </h3>
                                  {step.description && (
                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                      {getText(step.description, isArabic)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  ) : null}

                  {(!data.overview && data.details) && (
                    <motion.section
                      id="details"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "تفاصيل الخدمة" : "Service Details"}
                          </SectionLabel>
                          <SectionTitle 
                            title={getText(data.details.title, isArabic)}
                            subtitle={getText(data.details.subtitle, isArabic)}
                          />
                        </div>
                        <div>
                          <div className="mt-6">
                            <BulletList items={data.details.features} isArabic={isArabic} />
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  )}

                  {(!data.why && data.benefits) && (
                    <motion.section
                      id="benefits"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "كيف أستفيد من الخدمة؟" : "How Do I Benefit?"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.benefits.title, isArabic)}
                            subtitle={getText(data.benefits.subtitle, isArabic)}
                          />
                        </div>
                        <div>
                          <div className="mt-6">
                            <BulletList items={data.benefits.items} isArabic={isArabic} />
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  )}

                  {(!data.requirementsSection && data.howToGet) && (
                    <motion.section
                      id="get-service"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "كيف أحصل على الخدمة؟" : "How Do I Get It?"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.howToGet.title, isArabic)}
                            subtitle={getText(data.howToGet.subtitle, isArabic)}
                          />
                        </div>
                        <div className="grid gap-5 xl:grid-cols-2">
                          <div className="p-5">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#324198]/8 px-3 py-1.5 text-xs font-bold text-[#324198]">
                              <FileText className="h-3.5 w-3.5" />
                              {isArabic ? "المتطلبات الأساسية" : "Basic Requirements"}
                            </div>
                            <BulletList items={data.howToGet.requirements} isArabic={isArabic} />
                          </div>
                          <div className="p-5">
                            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-[#324198]">
                              <Smartphone className="h-3.5 w-3.5" />
                              {isArabic ? "قنوات الحصول على الخدمة" : "Service Channels"}
                            </div>
                            <BulletList items={data.howToGet.channels} isArabic={isArabic} />
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  )}

                  {(!data.stepsSection && data.subscribe) && (
                    <motion.section
                      id="subscribe"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "طريقة الاشتراك" : "How to Subscribe"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.subscribe.title, isArabic)}
                            subtitle={getText(data.subscribe.subtitle, isArabic)}
                          />
                        </div>
                        <div>
                          <div className="mt-8 space-y-6">
                            {data.subscribe.steps.map((step, index) => (
                              <div
                                key={step.id}
                                className="grid gap-4 p-5 md:grid-cols-[56px_minmax(0,1fr)]"
                              >
                                <div className="flex items-start justify-center md:pt-1">
                                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#324198]/20 bg-[#324198]/8 text-sm font-bold text-[#324198]">
                                    {index + 1}
                                  </div>
                                </div>
                                <div>
                                  <h3 className="text-base font-bold text-[#172048] md:text-[1.05rem]">
                                    {getText(step.title, isArabic)}
                                  </h3>
                                  <p className="mt-2 text-sm leading-7 text-slate-600">
                                    {getText(step.description, isArabic)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  )}

                  {data.faqs?.items?.length ? (
                    <motion.section
                      id="faqs"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      className="scroll-mt-28 rounded-[28px] px-6 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:px-8 bg-white"
                    >
                      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <div>
                          <SectionLabel>
                            {isArabic ? "الأسئلة الشائعة" : "FAQs"}
                          </SectionLabel>
                          <SectionTitle
                            title={getText(data.faqs.title, isArabic)}
                            subtitle={data.faqs.subtitle ? getText(data.faqs.subtitle, isArabic) : undefined}
                          />
                        </div>
                        <div>
                          <Accordion type="single" collapsible className="w-full">
                            {data.faqs.items.map((faq) => (
                              <AccordionItem key={faq.id} value={faq.id} className="border-b-slate-100 py-2">
                                <AccordionTrigger className={`hover:no-underline font-bold text-[#172048] text-base ${isArabic ? "text-right text-[15px]" : "text-left"}`}>
                                  {getText(faq.question, isArabic)}
                                </AccordionTrigger>
                                <AccordionContent className={`text-slate-600 leading-7 pt-2 pb-4 ${isArabic ? "text-right text-[14px]" : "text-left"}`}>
                                  {getText(faq.answer, isArabic)}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    </motion.section>
                  ) : null}
                </div>

                {data.ctaSection && (
                  <motion.section
                    id="cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="scroll-mt-28 overflow-hidden rounded-[28px] bg-[#324198] text-white shadow-[0_14px_40px_rgba(50,65,152,0.2)] mt-5"
                  >
                    <div className="px-8 py-12 md:py-14 text-center">
                      <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                        {getText(data.ctaSection.title, isArabic)}
                      </h2>
                      <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/80">
                        {getText(data.ctaSection.description, isArabic)}
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                          href={resolveHref(data.ctaSection.primaryHref)}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#324198] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-slate-50"
                        >
                          {getText(data.ctaSection.primaryLabel, isArabic)}
                          <CTAArrow className="h-4 w-4" />
                        </Link>
                        {data.ctaSection.secondaryLabel && data.ctaSection.secondaryHref && (
                           <Link
                             href={resolveHref(data.ctaSection.secondaryHref)}
                             className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
                           >
                             <Phone className="h-4 w-4" />
                             {getText(data.ctaSection.secondaryLabel, isArabic)}
                           </Link>
                        )}
                      </div>
                    </div>
                  </motion.section>
                )}

                {(!data.ctaSection && data.nextStep) && (
                  <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8">
                      <div className="max-w-2xl">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#324198]/8 px-3 py-1.5 text-xs font-bold text-[#324198]">
                          <CreditCard className="h-3.5 w-3.5" />
                          {isArabic ? "الخطوة التالية" : "Next Step"}
                        </div>
                        <h3 className="text-xl font-bold tracking-[-0.02em] text-[#172048]">
                          {getText(data.nextStep.title, isArabic)}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600 md:text-[15px]">
                          {getText(data.nextStep.description, isArabic)}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={resolveHref("/contact")}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#324198] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2b387f]"
                        >
                          {isArabic ? "تواصل الآن" : "Contact Us"}
                          <CTAArrow className="h-4 w-4" />
                        </Link>
                        <a
                          href="tel:+967000000000"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#324198]/16 bg-white px-6 py-3 text-sm font-bold text-[#172048] transition-all duration-300 hover:border-[#324198]/28 hover:bg-[#f7f9fd]"
                        >
                          <Phone className="h-4 w-4 text-[#324198]" />
                          {isArabic ? "اتصل بخدمة العملاء" : "Call Customer Service"}
                        </a>
                      </div>
                    </div>
                  </motion.section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.customSections && data.customSections.length > 0 && (
        <div className="flex flex-col">
          {data.customSections.map((section, index) => (
            <div key={`${section.id}-${index}`} id={section.id} className="scroll-mt-28 w-full">
              <CustomSectionRenderer componentId={section.componentId} componentProps={section.props} />
            </div>
          ))}
        </div>
      )}

      {relatedServices.length > 0 && (
        <RelatedServicesSlider
          services={relatedServices}
          titleAr="خدمات أخرى مرتبطة"
          titleEn="Related Services"
        />
      )}
    </>
  )
}
