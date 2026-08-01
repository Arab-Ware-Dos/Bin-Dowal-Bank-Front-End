"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { PageHero } from "@/components/ui/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, MapPin, CalendarDays, CheckCircle2, Mail, ArrowRight, ArrowLeft, Building2 } from "lucide-react"
import { JobData } from "@/data/careers"

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
}

interface JobDetailsPageContentProps {
  job: JobData
}

export function JobDetailsPageContent({ job }: JobDetailsPageContentProps) {
  const { locale, mode } = useI18n()
  const ar = locale === "ar"

  const resolveHref = (target: string) => {
    return mode === "url" ? getLocalizedHref(target, locale) : target
  }

  const title = ar ? job.title.ar : job.title.en
  const email = job.applicationEmail || "careers@bindowalbank.com"
  const description = ar ? job.description?.ar : job.description?.en
  const department = ar ? job.department?.ar : job.department?.en

  const responsibilities = ar ? job.responsibilities?.ar || [] : job.responsibilities?.en || job.responsibilities?.ar || []
  const qualifications = ar ? job.qualifications?.ar || [] : job.qualifications?.en || job.qualifications?.ar || []
  const conditions = ar ? job.conditions?.ar || [] : job.conditions?.en || job.conditions?.ar || []

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.05),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={title}
        subtitle={ar ? "تفاصيل الوظيفة ومتطلباتها" : "Job details and requirements"}
        breadcrumbs={[
          { labelKey: ar ? "الرئيسية" : "Home", href: "/" },
          { labelKey: ar ? "مركز المعرفة" : "Knowledge Center" },
          { labelKey: ar ? "الوظائف" : "Careers", href: "/knowledge-center/careers" },
          { labelKey: title },
        ]}
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div {...fade} className="mb-8">
            <Link 
              href={resolveHref("/knowledge-center/careers")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#324198]"
            >
              {ar ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {ar ? "العودة إلى الوظائف" : "Back to Careers"}
            </Link>
          </motion.div>

          <div className="grid gap-8">
            {/* Job Summary Card */}
            <motion.div {...fade}>
              <Card className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm">
                <CardContent className="p-6 md:p-10">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#324198]/[0.05] text-[#324198]">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{ar ? "المسمى الوظيفي" : "Job Title"}</p>
                        <p className="text-base font-bold text-[#0b0d36]">{title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#324198]/[0.05] text-[#324198]">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{ar ? "مكان العمل" : "Location"}</p>
                        <p className="text-base font-bold text-[#0b0d36]">{ar ? job.location.ar : job.location.en}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#324198]/[0.05] text-[#324198]">
                        <CalendarDays className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{ar ? "فترة التقديم" : "Application Period"}</p>
                        <p className="text-sm font-bold text-[#0b0d36]">
                          {job.startDate ? `${job.startDate} - ${job.endDate}` : job.endDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {department && (
                    <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm text-slate-600">
                      <Building2 className="h-4 w-4 text-[#324198]" />
                      <span className="font-semibold">{ar ? "القسم:" : "Department:"}</span>
                      <span>{department}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Job Details */}
            <motion.div {...fade} transition={{ delay: 0.1 }}>
              <Card className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm">
                <CardContent className="space-y-10 p-6 md:p-10">
                  
                  {/* Description */}
                  {description && (
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-[#0b0d36]">
                        <span className="inline-block h-6 w-2 rounded-full bg-[#ed1c24]" />
                        {ar ? "الوصف الوظيفي" : "Job Description"}
                      </h3>
                      <p className="text-base leading-relaxed text-slate-700">{description}</p>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {responsibilities.length > 0 && (
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#0b0d36]">
                        <span className="inline-block h-6 w-2 rounded-full bg-[#ed1c24]" />
                        {ar ? "المهام الوظيفية" : "Job Responsibilities"}
                      </h3>
                      <ul className="space-y-3">
                        {responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#324198]" />
                            <span className="leading-relaxed text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Qualifications */}
                  {qualifications.length > 0 && (
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#0b0d36]">
                        <span className="inline-block h-6 w-2 rounded-full bg-[#ed1c24]" />
                        {ar ? "الشهائد والخبرات المطلوبة" : "Required Qualifications and Experience"}
                      </h3>
                      <ul className="space-y-3">
                        {qualifications.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#324198]" />
                            <span className="leading-relaxed text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Conditions */}
                  {conditions.length > 0 && (
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#0b0d36]">
                        <span className="inline-block h-6 w-2 rounded-full bg-[#ed1c24]" />
                        {ar ? "الشروط الوظيفية" : "Job Requirements"}
                      </h3>
                      <ul className="space-y-3">
                        {conditions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#324198]" />
                            <span className="leading-relaxed text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </CardContent>
              </Card>
            </motion.div>

            {/* Application Box */}
            <motion.div {...fade} transition={{ delay: 0.2 }}>
              <div className="rounded-[24px] border border-[#324198]/20 bg-gradient-to-br from-[#f8fafc] to-[#eff2f9] p-8 text-center shadow-sm md:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#324198] shadow-sm">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0b0d36]">
                  {ar ? "للتقديم على الوظيفة" : "To apply for the job"}
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                  {ar ? "أرسل سيرتك الذاتية على البريد الإلكتروني التالي:" : "Send your CV to the following email address:"}
                </p>
                <div className="mx-auto max-w-md">
                  <a 
                    href={`mailto:${email}`} 
                    className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-xl font-bold text-[#ed1c24] shadow-sm transition-all hover:border-[#ed1c24]/30 hover:shadow-md"
                  >
                    {email}
                  </a>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  {ar ? "يرجى كتابة المسمى الوظيفي في عنوان البريد الإلكتروني." : "Please write the job title in the email subject line."}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
