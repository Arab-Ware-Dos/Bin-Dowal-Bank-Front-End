import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { FormsPageContent } from "@/components/customer-service/forms-page-content"
import type { Metadata } from "next"
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type LocalizedCustomerServicePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: LocalizedCustomerServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) return {}

  const title = locale === "ar" ? "نماذج البنك المصرفية" : "Banking Forms Library"

  const description =
    locale === "ar"
      ? "تصفح وقم بتنزيل نماذج وطلبات الخدمات المصرفية المختلفة لبنك بن دول للتمويل الأصغر الإسلامي بصيغة PDF قابلة للطباعة والتعبئة."
      : "Browse and download various banking service forms and applications for Bin Dowal Islamic Microfinance Bank in printable and fillable PDF format."

  return {
    alternates: buildLocalizedAlternates({ pathname: "/customer-service/forms", locale: locale as "ar" | "en" }),
    title,
    description
  }
}

export default async function FormsPageLocalized({
  params
}: LocalizedCustomerServicePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="customer-service/forms" data-locale={locale}>
      <FormsPageContent />
    </main>
  )
}
