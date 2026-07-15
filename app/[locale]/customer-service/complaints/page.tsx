import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { ComplaintsPageContent } from "@/components/customer-service/complaints-page-content"
import type { Metadata } from "next"

type LocalizedCustomerServicePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocalizedCustomerServicePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) return {}

  const title = locale === "ar" ? "الشكاوى والملاحظات" : "Complaints and Feedback"

  const description =
    locale === "ar"
      ? "قدّم شكوى أو ملاحظة إلى بنك بن دول وتابع تفاصيلها من خلال النموذج المخصص."
      : "Submit a complaint or feedback to Bin Dowal Bank using the dedicated customer service form."

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function ComplaintsPageLocalized({
  params,
}: LocalizedCustomerServicePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="customer-service/complaints" data-locale={locale}>
      <ComplaintsPageContent />
    </main>
  )
}
