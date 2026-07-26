"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, FileText, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import type { AnnualReport } from "@/data/annual-reports"

interface PdfPreviewModalProps {
  report: AnnualReport | null
  onClose: () => void
}

export function PdfPreviewModal({ report, onClose }: PdfPreviewModalProps) {
  const { locale } = useI18n()
  const isAr = locale === "ar"

  useEffect(() => {
    if (!report) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [report, onClose])

  const title = report ? (isAr ? report.titleAr : report.titleEn) : ""

  return (
    <AnimatePresence>
      {report && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] bg-[#0b0d36]/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-4 z-[101] flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_40px_120px_rgba(11,13,54,0.25)] md:inset-8 lg:inset-12"
          >
            {/* Header */}
            <div className="relative flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-4 md:px-7">
              {/* Brand top line */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#262b80] via-[#8b1e3f] to-[#262b80]" />

              <div className="flex items-center gap-3 pt-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#262b80]/8 text-[#262b80]">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b1e3f]/70">
                    {isAr ? "معاينة التقرير" : "Report Preview"}
                  </p>
                  <h2 className="text-sm font-bold text-[#0b0d36] md:text-base">{title}</h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download CTA */}
                <a
                  href={report.pdfFile}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[#262b80]/15 bg-[#262b80]/5 px-4 py-2 text-xs font-bold text-[#262b80] transition-all hover:bg-[#262b80] hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{isAr ? "تنزيل PDF" : "Download PDF"}</span>
                </a>

                {/* Open in new tab */}
                <a
                  href={report.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-800"
                  aria-label={isAr ? "فتح في تبويب جديد" : "Open in new tab"}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>

                {/* Close */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={isAr ? "إغلاق" : "Close"}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative flex-1 bg-slate-100">
              <iframe
                src={`${report.pdfFile}#toolbar=1&navpanes=0&scrollbar=1`}
                className="absolute inset-0 h-full w-full border-0"
                title={title}
              />
            </div>

            {/* Footer */}
            <div className="flex shrink-0 items-center justify-between border-t border-slate-100 bg-slate-50/80 px-5 py-3 md:px-7">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>
                  {isAr ? `${report.pages} صفحة` : `${report.pages} pages`}
                </span>
                <span className="h-3 w-px bg-slate-300" />
                <span>{report.size}</span>
                <span className="h-3 w-px bg-slate-300" />
                <span className="text-[#262b80] font-semibold">{report.year}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold text-slate-500 transition-colors hover:text-slate-800"
              >
                {isAr ? "إغلاق النافذة" : "Close viewer"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
