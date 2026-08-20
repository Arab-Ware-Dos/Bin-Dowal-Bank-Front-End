"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FileText, Loader2 } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { AnnualReportCardSkeleton } from "@/components/ui/loading-skeleton"
import { FeaturedAnnualReport } from "@/components/knowledge-center/annual-reports/FeaturedAnnualReport"
import { AnnualReportsFilters, type SortOrder } from "@/components/knowledge-center/annual-reports/AnnualReportsFilters"
import { AnnualReportCard } from "@/components/knowledge-center/annual-reports/AnnualReportCard"
import { PdfPreviewModal } from "@/components/knowledge-center/annual-reports/PdfPreviewModal"
import { type AnnualReport } from "@/data/annual-reports"
import { useAnnualReports } from "@/hooks/use-annual-reports"

export function AnnualReportsPageContent() {
  const { locale } = useI18n()
  const isAr = locale === "ar"
  const { reports: annualReports, loading } = useAnnualReports()

  // State
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [previewReport, setPreviewReport] = useState<AnnualReport | null>(null)

  // Derived data
  const years = useMemo(
    () =>
      [...new Set(annualReports.map((r) => r.year))].sort((a, b) => b - a),
    [annualReports]
  )

  const featuredReport = useMemo(
    () => annualReports.find((r) => r.featured) ?? annualReports[0],
    [annualReports]
  )

  const nonFeaturedReports = useMemo(() => annualReports.filter((r) => !r.featured), [annualReports])

  const filteredAndSorted = useMemo(() => {
    let result = nonFeaturedReports

    // Year filter
    if (selectedYear !== null) {
      result = result.filter((r) => r.year === selectedYear)
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (r) =>
          r.titleAr.includes(searchQuery) ||
          r.titleEn.toLowerCase().includes(q) ||
          String(r.year).includes(q)
      )
    }

    // Sort
    result = [...result].sort((a, b) =>
      sortOrder === "newest" ? b.year - a.year : a.year - b.year
    )

    return result
  }, [nonFeaturedReports, selectedYear, sortOrder, searchQuery])

  const text = {
    heroTitle: isAr ? "التقارير السنوية" : "Annual Reports",
    heroSubtitle: isAr
      ? "يضم هذا القسم أرشيف التقارير السنوية لبنك بن دول للتمويل الأصغر الإسلامي بصيغة PDF، مع إمكانية التصفح والتنزيل المباشر."
      : "This section contains the annual reports archive of Bin Dowal Islamic Microfinance Bank in PDF format, with direct browsing and download capabilities.",
    home: isAr ? "الرئيسية" : "Home",
    knowledgeCenter: isAr ? "مركز المعرفة" : "Knowledge Center",
    archiveTitle: isAr ? "أرشيف التقارير" : "Reports Archive",
    archiveSubtitle: isAr
      ? "تصفح تقاريرنا السنوية السابقة"
      : "Browse our previous annual reports",
    emptyTitle: isAr ? "لا توجد نتائج" : "No results found",
    emptyDesc: isAr
      ? "جرّب تغيير الفلاتر أو مسح البحث"
      : "Try changing the filters or clearing the search",
  }

  return (
    <>
      <div className="min-h-screen bg-white font-sans">
        {/* Hero */}
        <PageHero
          title={text.heroTitle}
          subtitle={text.heroSubtitle}
          breadcrumbs={[
            { labelKey: text.home, href: "/" },
            { labelKey: text.knowledgeCenter, href: "/knowledge" },
            { labelKey: text.heroTitle },
          ]}
        />

        {loading ? (
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnnualReportCardSkeleton />
              <AnnualReportCardSkeleton />
              <AnnualReportCardSkeleton />
              <AnnualReportCardSkeleton />
              <AnnualReportCardSkeleton />
              <AnnualReportCardSkeleton />
            </div>
          </div>
        ) : (
          <>
            {/* Featured Report */}
            {featuredReport && (
              <FeaturedAnnualReport
                report={featuredReport}
                onPreview={setPreviewReport}
              />
            )}

            {/* Filters */}
            <AnnualReportsFilters
              years={years}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalCount={nonFeaturedReports.length}
              filteredCount={filteredAndSorted.length}
            />
          </>
        )}

        {/* Archive Grid */}
        <section className="relative bg-[linear-gradient(180deg,#f8f9fc_0%,#ffffff_100%)] py-16 md:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />

          <div className="container mx-auto px-4">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex items-center gap-4"
            >
              <div>
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="h-px w-10 bg-gradient-to-r from-[#262b80] to-[#8b1e3f]/60" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b1e3f]/80">
                    {isAr ? "الأرشيف" : "Archive"}
                  </span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#0b0d36] md:text-3xl">
                  {text.archiveTitle}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{text.archiveSubtitle}</p>
              </div>
            </motion.div>

            {/* Grid or empty state */}
            {filteredAndSorted.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAndSorted.map((report, index) => (
                  <AnnualReportCard
                    key={report.id}
                    report={report}
                    onPreview={setPreviewReport}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 py-24 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <FileText className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-700">{text.emptyTitle}</h3>
                <p className="text-sm text-slate-500">{text.emptyDesc}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedYear(null)
                    setSearchQuery("")
                  }}
                  className="mt-6 rounded-full border border-[#262b80]/20 px-6 py-2.5 text-sm font-bold text-[#262b80] transition-colors hover:bg-[#262b80]/5"
                >
                  {isAr ? "إعادة ضبط الفلاتر" : "Reset filters"}
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-[#d7dbea] bg-gradient-to-r from-[#0b0d36] via-[#181d6f] to-[#0b0d36] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {[
                {
                  value: annualReports.length,
                  labelAr: "تقرير سنوي",
                  labelEn: "Annual Reports",
                },
                {
                  value: years.length > 0 ? `${Math.min(...years)}` : "2021",
                  labelAr: "منذ عام",
                  labelEn: "Since",
                },
                {
                  value: annualReports.reduce((s, r) => s + r.pages, 0),
                  suffix: "+",
                  labelAr: "إجمالي الصفحات",
                  labelEn: "Total Pages",
                },
                {
                  value: "PDF",
                  labelAr: "صيغة التقارير",
                  labelEn: "Report Format",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-4xl font-black tracking-tight text-white md:text-5xl">
                    {stat.value}
                    {stat.suffix ?? ""}
                  </div>
                  <div className="text-sm font-medium text-white/60">
                    {isAr ? stat.labelAr : stat.labelEn}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* PDF Preview Modal */}
      <PdfPreviewModal
        report={previewReport}
        onClose={() => setPreviewReport(null)}
      />
    </>
  )
}
