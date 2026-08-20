"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Download,
  Loader2,
  RefreshCw,
} from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { FormCardSkeleton } from "@/components/ui/loading-skeleton"
import { useForms } from "@/hooks/use-forms"

export function FormsPageContent() {
  const { locale } = useI18n()
  const isAr = locale === "ar"

  const { forms, isLoading, isError, refetch } = useForms(locale)

  const text = {
    heroTitle: isAr ? "نماذج البنك المصرفية" : "Banking Forms Library",
    heroSubtitle: isAr
      ? "مكتبة رقمية متكاملة لنماذج وطلبات الخدمات المصرفية بصيغة PDF، متاحة للتنزيل المباشر لتسهيل إنجاز معاملاتك البنكية بكل يسر وأمان."
      : "A comprehensive digital library of banking service forms and applications in PDF format, available for direct download to streamline your banking transactions with ease and security.",
    home: isAr ? "الرئيسية" : "Home",
    customerService: isAr ? "خدمة العملاء" : "Customer Service",
    downloadBtn: isAr ? "تنزيل" : "Download",
    retryBtn: isAr ? "إعادة المحاولة" : "Try Again",
  }

  return (
    <div className="min-h-screen bg-[#f8fafd] font-sans pb-20">
      {/* Hero Section */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.customerService, href: "/contact" },
          { labelKey: text.heroTitle }
        ]}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 -mt-10 sm:-mt-14 relative z-20">

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            <FormCardSkeleton />
            <FormCardSkeleton />
            <FormCardSkeleton />
            <FormCardSkeleton />
            <FormCardSkeleton />
            <FormCardSkeleton />
          </div>
        ) : isError ? (
          /* Error State */
          <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm border border-slate-200 mb-16">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4 text-red-500">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 font-cairo mb-2">
              {isAr ? "حدث خطأ في جلب البيانات" : "Failed to load forms"}
            </h3>
            <button
              type="button"
              onClick={() => refetch()}
              className="px-6 py-2.5 rounded-xl bg-[#262b80] text-white font-bold font-cairo text-sm hover:bg-[#1a1e5a] transition-colors inline-flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              {text.retryBtn}
            </button>
          </div>
        ) : (
          /* Forms Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {forms.map((form, idx) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all flex items-center justify-between gap-4 h-36"
              >
                {/* Right Side (Title and Download) */}
                <div className="flex flex-col h-full justify-center items-center text-center w-full px-2">
                  <h3 className="text-[#262b80] font-bold font-cairo text-base sm:text-lg mb-2 leading-snug">
                    {form.title[isAr ? "ar" : "en"]}
                  </h3>
                  <a
                    href={form.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="text-[#3b82f6] hover:text-[#2563eb] text-sm font-cairo transition-colors font-medium inline-flex items-center gap-1"
                  >
                    <span>{text.downloadBtn}</span>
                    <Download className="w-4 h-4" />
                  </a>
                </div>

                {/* Left Side (Icon and Size) */}
                <div className="flex flex-col items-center justify-center shrink-0 w-24">
                  <div className="relative text-[#dca93a] flex items-center justify-center mb-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-14 h-14"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                    <span className="absolute mt-3.5 text-[11px] font-bold uppercase tracking-wider text-[#dca93a]">PDF</span>
                  </div>
                  {form.fileSize && (
                    <span className="text-[12px] text-[#dca93a]/80 font-cairo">
                      ({form.fileSize})
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
