import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate";
import { ServicePageData } from "@/types/banking-service-page";
import { Metadata } from "next";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";

type LocalizedBusinessPayrollPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale: string) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: LocalizedBusinessPayrollPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {
      alternates: buildLocalizedAlternates({ pathname: "/business-banking-payroll", locale: locale as "ar" | "en" }),
      title: "Not Found"
    };
  }

  const service = await getBankingServiceBySlug("business", "business-banking-payroll");

  if (!service) {
    return {
      alternates: buildLocalizedAlternates({ pathname: "/business-banking-payroll", locale: locale as "ar" | "en" }),
      title: "Not Found"
    };
  }

  const isArabic = locale === "ar";
  const title = isArabic ? service.title.ar : service.title.en;
  const description = isArabic ? (service.seoDescription?.ar || service.subtitle.ar) : (service.seoDescription?.en || service.subtitle.en);

  return {
    alternates: buildLocalizedAlternates({ pathname: "/business-banking-payroll", locale: locale as "ar" | "en" }),
    title,
    description
  };
}

export default async function LocalizedBusinessPayrollPage({ params }: LocalizedBusinessPayrollPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const service = await getBankingServiceBySlug("business", "business-banking-payroll");

  if (!service) {
    notFound();
  }

  return (
    <div
      data-localized-route="business-banking-payroll"
      data-locale={locale}
    >
      <BankingServicePageTemplate data={service as ServicePageData} />
    </div>
  );
}
