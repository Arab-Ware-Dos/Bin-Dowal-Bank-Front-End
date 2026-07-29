import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { CareersPageContent } from "@/components/careers/careers-page-content"
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type LocalizedCareersPageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params
}: LocalizedCareersPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: "/knowledge-center/careers", locale: locale as "ar" | "en" }),
    title:
      locale === "ar"
        ? "الوظائف | مركز المعرفة | بنك بن دول"
        : "Careers | Knowledge Center | Bin Dowal Bank",
    description:
      locale === "ar"
        ? "استكشف الفرص الوظيفية وانضم إلى فريق عمل بنك بن دول."
        : "Explore career opportunities and join the Bin Dowal Bank team."
  }
}

export default async function LocalizedCareersPage({
  params
}: LocalizedCareersPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="knowledge-center/careers" data-locale={locale}>
      <CareersPageContent />
    </div>
  )
}
