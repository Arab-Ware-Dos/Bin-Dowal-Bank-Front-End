import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { JobDetailsPageContent } from "@/components/careers/job-details-page-content"
import { buildLocalizedAlternates } from "@/lib/seo/alternates"
import { fetchJobBySlug, fetchAllJobSlugs } from "@/services/careers-service"

type LocalizedJobDetailsPageProps = {
  params: Promise<{
    locale: string
    id: string
  }>
}

export async function generateStaticParams() {
  const locales = ["ar", "en"]
  const slugs = await fetchAllJobSlugs()
  const params: { locale: string; id: string }[] = []

  locales.forEach((locale) => {
    slugs.forEach((slug) => {
      params.push({ locale, id: slug })
    })
  })

  return params
}

export async function generateMetadata({
  params
}: LocalizedJobDetailsPageProps) {
  const { locale, id } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const job = await fetchJobBySlug(id)

  if (!job) {
    return {
      title: locale === "ar" ? "الوظيفة غير موجودة" : "Job Not Found",
    }
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: `/knowledge-center/careers/${id}`, locale: locale as "ar" | "en" }),
    title:
      locale === "ar"
        ? `${job.title.ar} | الوظائف | بنك بن دول`
        : `${job.title.en} | Careers | Bin Dowal Bank`,
    description:
      locale === "ar"
        ? `تفاصيل الوظيفة والشروط المطلوبة لوظيفة ${job.title.ar} في بنك بن دول.`
        : `Job details and requirements for ${job.title.en} at Bin Dowal Bank.`
  }
}

export default async function LocalizedJobDetailsPage({
  params
}: LocalizedJobDetailsPageProps) {
  const { locale, id } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const job = await fetchJobBySlug(id)

  if (!job) {
    notFound()
  }

  return (
    <div data-localized-route={`knowledge-center/careers/${id}`} data-locale={locale}>
      <JobDetailsPageContent job={job} />
    </div>
  )
}
