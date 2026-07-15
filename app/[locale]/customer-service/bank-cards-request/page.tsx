import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { BankCardsRequestPageContent } from "@/components/customer-service/bank-cards-request-page-content"
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

  const title = locale === "ar" ? "طلب بطاقة بنكية" : "Bank Card Request"

  const description =
    locale === "ar"
      ? "قدّم طلب الحصول على بطاقة بنكية من بنك بن دول من خلال النموذج المخصص."
      : "Apply for a Bin Dowal Bank card using the dedicated bank card request form."

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function BankCardsRequestPageLocalized({
  params,
}: LocalizedCustomerServicePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <main data-localized-route="customer-service/bank-cards-request" data-locale={locale}>
      <BankCardsRequestPageContent />
    </main>
  )
}
