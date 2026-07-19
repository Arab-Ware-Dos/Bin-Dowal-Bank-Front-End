import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { BranchesPageContent } from "@/components/locations/branches-page-content"
import type { Metadata } from "next"

type LocalizedLocationPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: LocalizedLocationPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) return {}

  const title = locale === "ar" ? "الفروع | بنك بن دول" : "Branches | Bin Dowal Bank"
  const description =
    locale === "ar"
      ? "تعرّف على مواقع فروع بنك بن دول وساعات العمل والخدمات المتاحة في كل فرع."
      : "Find Bin Dowal Bank branches, working hours, and the services available at each location."

  return {
    title,
    description
}
}

export default async function BranchesPageLocalized({
  params
}: LocalizedLocationPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="branches" data-locale={locale}>
      <BranchesPageContent />
    </main>
  )
}
