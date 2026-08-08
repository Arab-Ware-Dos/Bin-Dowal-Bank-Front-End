import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getBankingServicePageData, getAllServicesSlugs } from "@/services/banking-service-pages";
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate";
import { ServicePageData } from "@/types/banking-service-page";
import { Metadata } from "next";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";

type LocalizedServicePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const allSlugs = await getAllServicesSlugs();
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const slug of allSlugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: LocalizedServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Not Found",
    };
  }

  const service = await getBankingServicePageData(slug, locale);

  if (!service) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Service Not Found",
    };
  }

  const isArabic = locale === "ar";
  const title = isArabic ? service.title.ar : service.title.en;
  const description = isArabic ? service.subtitle.ar : service.subtitle.en;

  return {
    alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
    title: `${title} | Bin Dowal Bank`,
    description,
  };
}

export default async function LocalizedServicePage({ params }: LocalizedServicePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const service = await getBankingServicePageData(slug, locale);

  if (!service) {
    notFound();
  }

  return (
    <div
      data-localized-route="services/[slug]"
      data-service-slug={slug}
      data-locale={locale}
    >
      <BankingServicePageTemplate data={service as ServicePageData} />
    </div>
  );
}
