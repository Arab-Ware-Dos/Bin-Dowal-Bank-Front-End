"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download, Eye, BookOpen, Calendar, Star, FileText } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import type { AnnualReport } from "@/data/annual-reports"

interface FeaturedAnnualReportProps {
  report: AnnualReport
  onPreview: (report: AnnualReport) => void
}

export function FeaturedAnnualReport({ report, onPreview }: FeaturedAnnualReportProps) {
  const { locale } = useI18n()
  const isAr = locale === "ar"

  const title = isAr ? report.titleAr : report.titleEn
  const description = isAr ? report.descriptionAr : report.descriptionEn

  const publishDate = new Date(report.publishDate).toLocaleDateString(
    isAr ? "ar-SA" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  )

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9fc] via-white to-[#f3f5fa] py-16 md:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.07),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(11,13,54,0.04),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#262b80]/12 bg-[#262b80]/5 px-4 py-2">
            <Star className="h-3.5 w-3.5 fill-[#8b1e3f] text-[#8b1e3f]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "أحدث إصدار" : "Latest Edition"}
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#262b80]/15 to-transparent" />
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.07 }}
          className="group relative overflow-hidden rounded-[32px] border border-[#dde3ef] bg-white shadow-[0_30px_90px_rgba(11,13,54,0.10)] transition-all duration-300 hover:shadow-[0_40px_110px_rgba(11,13,54,0.14)]"
        >
          {/* Top gradient accent */}
          <div className="absolute inset-x-0 top-0 z-20 h-[4px] rounded-t-[32px] bg-gradient-to-r from-[#262b80] via-[#8b1e3f] to-[#262b80]" />

          <div className="grid items-stretch lg:grid-cols-2">
            {/* Cover image */}
            <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-[#0b0d36] via-[#1a1f6e] to-[#262b80] lg:min-h-[460px]">
              {/* Fallback grid pattern */}
              <div className="absolute inset-0 opacity-[0.08]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(255,255,255,0.5) 32px, rgba(255,255,255,0.5) 33px), repeating-linear-gradient(90deg, transparent, transparent 32px, rgba(255,255,255,0.5) 32px, rgba(255,255,255,0.5) 33px)",
                  }}
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -start-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-16 -end-16 h-48 w-48 rounded-full bg-[#8b1e3f]/20 blur-2xl" />

              <Image
                src={report.coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = "none"
                }}
              />

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d36]/80 via-[#0b0d36]/20 to-transparent lg:bg-gradient-to-e lg:from-[#0b0d36]/60 lg:to-transparent" />

              {/* Year display */}
              <div className="absolute bottom-6 start-6 z-10">
                <div className="text-[64px] font-black leading-none tracking-[-0.04em] text-white/90 drop-shadow-2xl md:text-[80px]">
                  {report.year}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-px w-8 bg-white/60" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {isAr ? "التقرير السنوي" : "Annual Report"}
                  </span>
                </div>
              </div>

              {/* PDF badge */}
              <div className="absolute end-6 top-8 z-10 flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/15 px-3 py-2 backdrop-blur-sm">
                <FileText className="h-4 w-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">PDF</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-9 md:p-12">
              {/* Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4 text-[#8b1e3f]/60" />
                  {publishDate}
                </span>
                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <BookOpen className="h-4 w-4 text-[#8b1e3f]/60" />
                  {isAr ? `${report.pages} صفحة` : `${report.pages} pages`}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
                  {report.size}
                </span>
              </div>

              {/* Decorative line */}
              <div className="mb-6 h-px w-16 bg-gradient-to-r from-[#262b80] to-[#8b1e3f]/60" />

              {/* Title */}
              <h2 className="mb-5 text-2xl font-black leading-snug tracking-tight text-[#0b0d36] md:text-3xl xl:text-4xl">
                {title}
              </h2>

              {/* Description */}
              <p className="mb-10 text-base leading-8 text-slate-600 md:text-lg">{description}</p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onPreview(report)}
                  className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#262b80] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#262b80]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#324198] hover:shadow-xl sm:flex-none"
                >
                  <Eye className="h-4 w-4" />
                  {isAr ? "تصفح التقرير" : "Browse Report"}
                </button>

                <a
                  href={report.pdfFile}
                  download
                  className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-[#262b80]/20 bg-white px-8 py-4 text-sm font-bold text-[#262b80] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#262b80]/40 hover:bg-[#f8f9fc] hover:shadow-lg sm:flex-none"
                >
                  <Download className="h-4 w-4" />
                  {isAr ? "تنزيل PDF" : "Download PDF"}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
