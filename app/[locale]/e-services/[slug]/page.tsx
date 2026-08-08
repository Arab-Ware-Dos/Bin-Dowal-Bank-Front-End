import { notFound, redirect } from "next/navigation";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { locales, isLocale } from "@/i18n/config";
import { E_SERVICE_SLUGS } from "@/lib/e-service-routes";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";

function isEServiceSlug(slug: string) {
  return E_SERVICE_SLUGS.includes(slug as any);
}

type LocalizedEServicePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    E_SERVICE_SLUGS.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: LocalizedEServicePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isEServiceSlug(slug)) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Service Not Found",
    };
  }

  const service = await getBankingServiceBySlug("e-services", slug);

  if (!service) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Service Not Found",
    };
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
    title: `${locale === "ar" ? service.title.ar : service.title.en} | Bin Dowal Bank`,
    description: locale === "ar" ? service.subtitle.ar : service.subtitle.en,
  };
}

export default async function LocalizedEServicePage({ params }: LocalizedEServicePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isEServiceSlug(slug)) {
    notFound();
  }

  redirect(`/${locale}/services/${slug}`);
}
