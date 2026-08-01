"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { PageHero } from "@/components/ui/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, MapPin, CalendarDays, ArrowRight, Loader2 } from "lucide-react"
import { useCareers } from "@/hooks/use-careers"

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export function CareersPageContent() {
  const { locale, mode } = useI18n()
  const ar = locale === "ar"
  const { jobs: careersData, loading } = useCareers()

  const resolveHref = (target: string) => {
    return mode === "url" ? getLocalizedHref(target, locale) : target
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.05),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={ar ? "الوظائف المتاحة" : "Available Careers"}
        subtitle={ar ? "انضم إلى فريق عمل بنك بن دول وساهم في تقديم أفضل الخدمات المصرفية المبتكرة." : "Join the Bin Dowal Bank team and help deliver the best innovative banking services."}
        breadcrumbs={[
          { labelKey: ar ? "الرئيسية" : "Home", href: "/" },
          { labelKey: ar ? "مركز المعرفة" : "Knowledge Center" },
          { labelKey: ar ? "الوظائف" : "Careers" },
        ]}
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-[#324198]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#324198] shadow-sm">
              {ar ? "الفرص الحالية" : "CURRENT OPPORTUNITIES"}
            </div>
            <h2 className="text-2xl font-bold text-[#0b0d36] md:text-3xl">{ar ? "استكشف وظائفنا الشاغرة" : "Explore our open positions"}</h2>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-[#324198]" />
            </div>
          ) : careersData.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-sm">
              <Briefcase className="mx-auto mb-4 h-10 w-10 text-slate-300" />
              <h3 className="text-lg font-semibold text-[#0b0d36]">{ar ? "لا توجد وظائف متاحة حالياً" : "No positions available right now"}</h3>
              <p className="mt-2 text-sm text-slate-500">{ar ? "يرجى معاودة زيارة هذه الصفحة لاحقاً للاطلاع على أحدث الفرص." : "Please visit this page later to check for new opportunities."}</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careersData.map((job, idx) => {
                const jobSlug = job.slug || job.id
                return (
                  <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.1 }}>
                    <Card className="group h-full overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-[#324198]/30 hover:shadow-[0_20px_50px_-20px_rgba(50,65,152,0.15)]">
                      <CardContent className="flex h-full flex-col p-6 md:p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#324198]/[0.05] text-[#324198] transition-colors duration-300 group-hover:bg-[#324198] group-hover:text-white">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-[#0b0d36]">{ar ? job.title.ar : job.title.en}</h3>
                        
                        <div className="mb-6 flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>{ar ? job.location.ar : job.location.en}</span>
                          </div>
                          {job.endDate && (
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <CalendarDays className="h-4 w-4 text-slate-400" />
                              <span>{ar ? "ينتهي التقديم:" : "Deadline:"} {job.endDate}</span>
                            </div>
                          )}
                        </div>

                        <div className="mt-auto border-t border-slate-100 pt-6">
                          <Button asChild variant="ghost" className="w-full justify-between hover:bg-[#324198]/5 hover:text-[#324198]">
                            <Link href={resolveHref(`/knowledge-center/careers/${jobSlug}`)}>
                              {ar ? "عرض الوظيفة" : "View Job"}
                              <ArrowRight className={`h-4 w-4 ${ar ? "rotate-180" : ""}`} />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
