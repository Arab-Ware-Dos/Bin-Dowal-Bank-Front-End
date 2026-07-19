import { notFound } from "next/navigation";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate";
import { ServicePageData } from "@/types/banking-service-page";
import { locales, isLocale } from "@/i18n/config";
import { ACCOUNT_SLUGS, isAccountSlug } from "@/lib/account-routes";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type LocalizedAccountPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    ACCOUNT_SLUGS.map((slug) => ({
      locale,
      slug
}))
  );
}

export async function generateMetadata({ params }: LocalizedAccountPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isAccountSlug(slug)) {
    return { alternates: buildLocalizedAlternates({ pathname: `/accounts/${slug}`, locale: locale as "ar" | "en" }),
    title: "Service Not Found" };
  }

  const service = await getBankingServiceBySlug("accounts", slug);

  if (!service) {
    return { alternates: buildLocalizedAlternates({ pathname: `/accounts/${slug}`, locale: locale as "ar" | "en" }),
    title: "Service Not Found" };
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: `/accounts/${slug}`, locale: locale as "ar" | "en" }),
    title: `${locale === "ar" ? service.title.ar : service.title.en} | Bin Dowal Bank`,
    description: locale === "ar" ? service.subtitle.ar : service.subtitle.en
};
}

export default async function LocalizedAccountsServicePage({ params }: LocalizedAccountPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (!isAccountSlug(slug)) {
    notFound();
  }

  const service = await getBankingServiceBySlug("accounts", slug);

  if (!service) {
    notFound();
  }

  return (
    <div data-localized-route="accounts/[slug]" data-account-slug={slug} data-locale={locale}>
      <BankingServicePageTemplate data={service as ServicePageData} />
    </div>
  );
}
