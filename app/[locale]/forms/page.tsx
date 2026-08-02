import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { FormsPageContent } from "@/components/customer-service/forms-page-content"
import type { Metadata } from "next"
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type LocalizedFormsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: LocalizedFormsPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) return {}

  const title = locale === "ar" ? "نماذج البنك المصرفية" : "Banking Forms Library"

  const description =
    locale === "ar"
      ? "تصفح وقم بتنزيل نماذج وطلبات الخدمات المصرفية المختلفة لبنك بن دول للتمويل الأصغر الإسلامي بصيغة PDF قابلة للطباعة والتعبئة."
      : "Browse and download various banking service forms and applications for Bin Dowal Islamic Microfinance Bank in printable and fillable PDF format."

  return {
    alternates: buildLocalizedAlternates({ pathname: "/forms", locale: locale as "ar" | "en" }),
    title: `${title} | Bin Dowal Bank`,
    description
  }
}

export default async function DirectFormsPageLocalized({
  params
}: LocalizedFormsPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="forms" data-locale={locale}>
      <FormsPageContent />
    </main>
  )
}
