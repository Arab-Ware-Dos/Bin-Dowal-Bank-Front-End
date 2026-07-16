import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { isBusinessSlug, BUSINESS_SLUGS } from "@/lib/business-routes";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate";
import { ServicePageData } from "@/types/banking-service-page";
import { Metadata } from "next";

type LocalizedBusinessPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale: string) =>
    BUSINESS_SLUGS.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: LocalizedBusinessPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isBusinessSlug(slug)) {
    return {
      title: "Not Found",
      robots: { index: false, follow: false },
    };
  }

  const service = await getBankingServiceBySlug("business", slug);

  if (!service || service.section !== "business") {
    return {
      title: "Not Found",
      robots: { index: false, follow: false },
    };
  }

  const isArabic = locale === "ar";
  const title = isArabic ? service.title.ar : service.title.en;
  const description = isArabic ? service.subtitle.ar : service.subtitle.en;

  return {
    title,
    description,
    robots: { index: false, follow: false },
  };
}

export default async function LocalizedBusinessPage({ params }: LocalizedBusinessPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (!isBusinessSlug(slug)) {
    notFound();
  }

  const service = await getBankingServiceBySlug("business", slug);

  if (!service || service.section !== "business") {
    notFound();
  }

  return (
    <div
      data-localized-route={`business/[slug]`}
      data-business-slug={slug}
      data-locale={locale}
    >
      <BankingServicePageTemplate data={service as ServicePageData} />
    </div>
  );
}
