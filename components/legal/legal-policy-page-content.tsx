"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { CheckCircle2, CheckCircle } from "lucide-react"
import { type LegalPolicyData } from "@/data/legal-policies-data"

interface LegalPolicyPageContentProps {
  policy: LegalPolicyData
}

export function LegalPolicyPageContent({ policy }: LegalPolicyPageContentProps) {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"

  const heroTitle = isAr ? policy.heroTitle.ar : policy.heroTitle.en
  const heroSubtitle = isAr ? policy.heroSubtitle.ar : policy.heroSubtitle.en
  const docTitle = isAr ? policy.docTitle.ar : policy.docTitle.en
  const sections = isAr ? policy.ar.sections : policy.en.sections

  const breadcrumbs = [
    { labelKey: isAr ? "الرئيسية" : "Home", href: "/" },
    { labelKey: isAr ? "السياسات والضوابط" : "Policies & Legal", href: "#" },
    { labelKey: heroTitle },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#262b80] selection:text-white" dir={direction}>
      {/* Hero Section */}
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.article
            className="bg-white rounded-3xl shadow-[0_16px_50px_rgba(11,13,54,0.07)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header Document Style Accent */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#8b1e3f]" />

            {/* Logo, Main Title & Meta */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-5 bg-white rounded-2xl shadow-sm border border-slate-100 mb-8">
                <Image
                  src="/images/logo.png"
                  alt="Bin Dowal Bank Logo"
                  width={220}
                  height={70}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b0d36] tracking-tight font-cairo leading-snug">
                {docTitle}
              </h1>

              {policy.documentVersion && (
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 font-cairo">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                    {isAr ? `إصدار: ${policy.documentVersion}` : `Version: ${policy.documentVersion}`}
                  </span>
                  {policy.effectiveDate && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                      {isAr ? `تاريخ السريان: ${policy.effectiveDate}` : `Effective: ${policy.effectiveDate}`}
                    </span>
                  )}
                </div>
              )}

              <div className="w-20 h-1.5 bg-[#8b1e3f] mx-auto rounded-full mt-6" />
            </div>

            {/* Narrative Content */}
            <div className="space-y-8 text-[#334155] font-cairo text-lg leading-loose text-justify">
              {sections.map((sec, idx) => (
                <div key={idx} className="pt-6 border-t border-slate-100 first:border-0 first:pt-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#262b80] mb-4 flex items-center gap-2">
                    <span className="text-[#ed1c24] text-3xl leading-none">•</span>
                    {sec.title}
                  </h2>

                  {sec.content && sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed mb-3 text-slate-700">
                      {paragraph}
                    </p>
                  ))}

                  {/* Points if available */}
                  {sec.points && sec.points.length > 0 && (
                    <ul className="mt-4 space-y-2.5 pr-2 pl-2">
                      {sec.points.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-3 text-base text-slate-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#8b1e3f] mt-1.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Verification */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500 font-cairo">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                {isAr
                  ? "وثيقة رسمية صادرة عن بنك بن دول للتمويل الأصغر الإسلامي"
                  : "Official document issued by Bin Dowal Islamic Microfinance Bank"}
              </span>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}
