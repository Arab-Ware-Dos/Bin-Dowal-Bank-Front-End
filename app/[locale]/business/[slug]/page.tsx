import { notFound, redirect } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { isBusinessSlug, BUSINESS_SLUGS } from "@/lib/business-routes";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { Metadata } from "next";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";

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
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Not Found",
    };
  }

  const service = await getBankingServiceBySlug("business", slug);

  if (!service) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Not Found",
    };
  }

  const isArabic = locale === "ar";
  const title = isArabic ? service.title.ar : service.title.en;
  const description = isArabic ? service.subtitle.ar : service.subtitle.en;

  return {
    alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
    title,
    description,
  };
}

export default async function LocalizedBusinessPage({ params }: LocalizedBusinessPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isBusinessSlug(slug)) {
    notFound();
  }

  redirect(`/${locale}/services/${slug}`);
}
