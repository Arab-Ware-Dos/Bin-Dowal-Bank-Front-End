"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { CheckCircle2, FileDown, ShieldCheck, Scale, Shield, Layers, Activity, Lock, CheckCircle } from "lucide-react"
import { getRiskManagement, type RiskManagementData } from "@/services/risk-management-service"

export function RiskManagementPageContent({ initialData }: { initialData?: RiskManagementData | null }) {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"
  const [data, setData] = useState<RiskManagementData | null>(initialData || null)

  useEffect(() => {
    async function load() {
      try {
        const res = await getRiskManagement(locale as "ar" | "en")
        if (res) setData(res)
      } catch (e) {
        console.warn("Failed to load dynamic risk management data", e)
      }
    }
    load()
  }, [locale])

  const staticFallback = {
    heroTitle: isAr ? "إدارة المخاطر والحوكمة المؤسسية" : "Risk Management & Corporate Governance",
    heroSubtitle: isAr
      ? "إطار متكامل لضمان الاستقرار المالي وتعزيز الشفافية والمساءلة وحماية مصالح المودعين والشركاء."
      : "An integrated framework to ensure financial stability, promote transparency, and protect depositors' interests.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    docTitle: isAr
      ? "إدارة المخاطر في بنك بن دول للتمويل الأصغر الإسلامي"
      : "Risk Management in Bin Dowal Islamic Microfinance Bank",
    intro: isAr
      ? "تعتبر إدارة المخاطر ركيزة أساسية لضمان الاستقرار المالي وحماية أموال المودعين والمستثمرين، وتحقيق أهداف البنك الاستراتيجية. ويتبنى بنك بن دول للتمويل الأصغر الإسلامي إطاراً متكاملاً لإدارة المخاطر يرتكز على تحديد المخاطر وقياسها ومراقبتها والحد منها."
      : "Risk management is a fundamental pillar for ensuring financial stability, protecting depositors' and investors' funds, and achieving the Bank's strategic objectives. Bin Dowal Islamic Microfinance Bank adopts an integrated risk management framework.",
    sections: [
      {
        title: isAr ? "إطار إدارة المخاطر" : "Risk Management Framework",
        content: isAr
          ? "تعتبر إدارة المخاطر ركيزة أساسية لضمان الاستقرار المالي وحماية أموال المودعين والمستثمرين، وتحقيق أهداف البنك الاستراتيجية وفق معايير البنك المركزي اليمني والشريعة الإسلامية."
          : "Risk management is a fundamental pillar for ensuring financial stability, protecting depositors' and investors' funds in accordance with Central Bank of Yemen standards and Islamic Sharia.",
      },
      {
        title: isAr ? "نطاق إدارة المخاطر" : "Risk Management Scope",
        content: isAr
          ? "تشمل منظومة إدارة المخاطر في البنك مختلف أنواع المخاطر الحالية والمحتملة، ومن أبرزها مخاطر التمويل والائتمان والسيولة والتشغيل والأمن السيبراني والالتزام الشرعي."
          : "The Bank's risk management system encompasses various current and potential risks including credit, liquidity, operational, cybersecurity, and Sharia compliance risks.",
      },
      {
        title: isAr ? "منهجية إدارة المخاطر" : "Risk Management Methodology",
        content: isAr
          ? "يعتمد البنك منهجية منظمة تبدأ بالتعرف المبكر على المخاطر وتقييم مستوياتها ومقارنتها بحدود شهية المخاطر وتطبيق الضوابط الاحترازية ومؤشرات الإنذار المبكر."
          : "The Bank adopts a structured methodology starting with early risk identification, assessing levels against risk appetite limits, and applying precautionary controls and KRIs.",
      },
      {
        title: isAr ? "ثقافة المخاطر والالتزام الشرعي" : "Risk Culture and Sharia Compliance",
        content: isAr
          ? "يعمل البنك على ترسيخ ثقافة مؤسسية تقوم على النزاهة والشفافية والمساءلة، والتحقق من توافق كافة المنتجات والمعاملات مع أحكام ومبادئ الشريعة الإسلامية."
          : "The Bank instills an institutional culture based on integrity, transparency, accountability, and verifying that all products and transactions align with Islamic Sharia principles.",
      },
    ],
  }

  const heroTitle = data?.title || staticFallback.heroTitle
  const heroSubtitle = data?.subtitle || staticFallback.heroSubtitle
  const docTitle = data?.document_title || staticFallback.docTitle
  const sections = data?.sections && data.sections.length > 0 ? data.sections : staticFallback.sections

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#262b80] selection:text-white" dir={direction}>
      {/* Hero Section */}
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumbs={[
          { labelKey: staticFallback.home, href: "/" },
          { labelKey: staticFallback.about, href: "/about" },
          { labelKey: heroTitle },
        ]}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b0d36] tracking-tight font-cairo leading-snug">
                {docTitle}
              </h2>
              {data?.document_version && (
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 font-cairo">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                    {isAr ? `إصدار: ${data.document_version}` : `Version: ${data.document_version}`}
                  </span>
                  {data.effective_date && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                      {isAr ? `تاريخ السريان: ${data.effective_date}` : `Effective: ${data.effective_date}`}
                    </span>
                  )}
                </div>
              )}
              <div className="w-20 h-1.5 bg-[#8b1e3f] mx-auto rounded-full mt-6" />
            </div>

            {/* Narrative Content */}
            <div className="space-y-8 text-[#334155] font-cairo text-lg leading-loose text-justify">
              {sections.map((sec, idx) => (
                <div key={idx} className="pt-4 border-t border-slate-100 first:border-0 first:pt-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#262b80] mb-4 flex items-center gap-2">
                    <span className="text-[#ed1c24] text-3xl leading-none">•</span>
                    {sec.title}
                  </h3>
                  <p className="leading-relaxed">
                    {sec.content}
                  </p>

                  {/* Points if available */}
                  {"points" in sec && Array.isArray(sec.points) && sec.points.length > 0 && (
                    <ul className="mt-4 space-y-2 pr-4 pl-4">
                      {sec.points.map((pt: string, pIdx: number) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-base text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#8b1e3f] mt-1.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Download PDF button if attached */}
            {data?.pdf_url && (
              <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-right">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-cairo">
                      {isAr ? "تحميل الوثيقة الرسمية المعتمدة" : "Download Official Policy Document"}
                    </h4>
                    <p className="text-xs text-slate-500 font-cairo">
                      {data.pdf_file_name || (isAr ? "ملف PDF معتمد" : "Official PDF Document")}
                    </p>
                  </div>
                </div>
                <a
                  href={data.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#262b80] hover:bg-[#1c2066] text-white font-medium text-sm transition-colors shadow-sm font-cairo"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{isAr ? "تحميل PDF" : "Download PDF"}</span>
                </a>
              </div>
            )}

            {/* Footer Verification */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500 font-cairo">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>{isAr ? "وثيقة رسمية صادرة عن بنك بن دول للتمويل الأصغر الإسلامي" : "Official document issued by Bin Dowal Islamic Microfinance Bank"}</span>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}
