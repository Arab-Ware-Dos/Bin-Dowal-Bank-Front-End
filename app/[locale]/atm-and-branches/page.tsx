import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { AtmAndBranchesPageContent } from "@/components/locations/atm-and-branches-page-content"
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

  const title = locale === "ar" ? "أجهزة الصراف الآلي والفروع | بنك بن دول" : "ATMs and Branches | Bin Dowal Bank"
  const description =
    locale === "ar"
      ? "ابحث عن أقرب فرع أو جهاز صراف آلي تابع لبنك بن دول واستعرض المواقع على الخريطة."
      : "Find the nearest Bin Dowal Bank branch or ATM and explore available locations on the map."

  return {
    title,
    description
}
}

export default async function AtmAndBranchesPageLocalized({
  params
}: LocalizedLocationPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="atm-and-branches" data-locale={locale}>
      <AtmAndBranchesPageContent />
    </main>
  )
}
