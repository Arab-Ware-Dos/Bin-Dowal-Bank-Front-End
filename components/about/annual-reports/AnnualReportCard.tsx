"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download, Eye, FileText, Calendar, BookOpen } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import type { AnnualReport } from "@/data/annual-reports"

interface AnnualReportCardProps {
  report: AnnualReport
  onPreview: (report: AnnualReport) => void
  index?: number
}

export function AnnualReportCard({ report, onPreview, index = 0 }: AnnualReportCardProps) {
  const { locale } = useI18n()
  const isAr = locale === "ar"

  const title = isAr ? report.titleAr : report.titleEn
  const description = isAr ? report.descriptionAr : report.descriptionEn

  // Format publish date
  const publishDate = new Date(report.publishDate).toLocaleDateString(
    isAr ? "ar-SA" : "en-US",
    { year: "numeric", month: "long" }
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[#dde3ef] bg-white shadow-[0_14px_44px_rgba(11,13,54,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(11,13,54,0.11)]"
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 rounded-t-[24px] bg-gradient-to-r from-[#262b80] via-[#8b1e3f]/70 to-[#262b80] transition-transform duration-500 group-hover:scale-x-100" />

      {/* Cover image area */}
      <div className="relative h-48 shrink-0 overflow-hidden bg-gradient-to-br from-[#0b0d36] to-[#262b80]">
        {/* Fallback pattern when no image */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.4) 28px, rgba(255,255,255,0.4) 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.4) 28px, rgba(255,255,255,0.4) 29px)",
            }}
          />
        </div>

        <Image
          src={report.coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // If image fails, hide it to show the gradient fallback
            ;(e.target as HTMLImageElement).style.display = "none"
          }}
        />

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d36]/70 via-transparent to-transparent" />

        {/* Year badge */}
        <div className="absolute bottom-4 start-4 flex h-10 min-w-[60px] items-center justify-center rounded-xl bg-white px-3 shadow-lg">
          <span className="text-base font-black tracking-tight text-[#0b0d36]">{report.year}</span>
        </div>

        {/* PDF badge */}
        <div className="absolute end-4 top-4 flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/15 px-2.5 py-1.5 backdrop-blur-sm">
          <FileText className="h-3 w-3 text-white" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-white">PDF</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta info row */}
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="h-3 w-3 text-[#8b1e3f]/60" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <BookOpen className="h-3 w-3 text-[#8b1e3f]/60" />
            {isAr ? `${report.pages} صفحة` : `${report.pages} pages`}
          </span>
          <span className="text-xs text-slate-400">{report.size}</span>
        </div>

        {/* Decorative line */}
        <div className="mb-4 h-px w-12 bg-gradient-to-r from-[#262b80] to-[#8b1e3f]/60 transition-all duration-300 group-hover:w-20" />

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold leading-snug text-[#0b0d36] transition-colors duration-200 group-hover:text-[#262b80]">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>

        {/* Actions */}
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={() => onPreview(report)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#262b80]/15 bg-[#262b80]/5 px-5 py-2.5 text-sm font-bold text-[#262b80] transition-all duration-200 hover:border-[#262b80] hover:bg-[#262b80] hover:text-white"
          >
            <Eye className="h-4 w-4" />
            {isAr ? "تصفح التقرير" : "Browse Report"}
          </button>

          <a
            href={report.pdfFile}
            download
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          >
            <Download className="h-4 w-4" />
            {isAr ? "تنزيل PDF" : "Download PDF"}
          </a>
        </div>
      </div>
    </motion.article>
  )
}
