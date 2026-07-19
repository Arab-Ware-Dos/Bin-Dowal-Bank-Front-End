import { ContactPageContent } from "@/components/contact/contact-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type LocalizedContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: LocalizedContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {}
  }

  if (locale === "en") {
    return {
      title: "Contact Us - Bin Dowal Islamic Microfinance Bank",
      description: "Contact Bin Dowal Islamic Microfinance Bank through our multiple channels."
}
  }

  return {
    title: "اتصل بنا - بنك بن دول للتمويل الأصغر الإسلامي",
    description: "تواصل مع بنك بن دول للتمويل الأصغر الإسلامي عبر قنواتنا المتعددة"
}
}

export default async function LocalizedContactPage({
  params
}: LocalizedContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="contact" data-locale={locale}>
      <ContactPageContent />
    </div>
  );
}
