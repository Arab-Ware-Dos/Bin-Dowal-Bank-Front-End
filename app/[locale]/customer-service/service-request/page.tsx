import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { ServiceRequestPageContent } from "@/components/customer-service/service-request-page-content"
import type { Metadata } from "next"

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

  const title = locale === "ar" ? "طلب خدمة" : "Service Request"

  const description =
    locale === "ar"
      ? "قدّم طلب خدمة مصرفية إلى بنك بن دول من خلال نموذج طلب الخدمة."
      : "Submit a banking service request to Bin Dowal Bank through the dedicated request form."

  return {
    title,
    description
}
}

export default async function ServiceRequestPageLocalized({
  params
}: LocalizedCustomerServicePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="customer-service/service-request" data-locale={locale}>
      <ServiceRequestPageContent />
    </main>
  )
}
