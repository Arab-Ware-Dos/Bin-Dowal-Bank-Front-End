import { notFound, redirect } from "next/navigation";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { isLocale, locales } from "@/i18n/config";
import { PERSONAL_FINANCING_SLUGS, isPersonalFinancingSlug } from "@/lib/personal-financing-routes";
import { PERSONAL_REMITTANCE_SLUGS, isPersonalRemittanceSlug } from "@/lib/personal-remittance-routes";
import { PERSONAL_INDEPENDENT_TRANSFER_SLUGS, isPersonalIndependentTransferSlug } from "@/lib/personal-independent-transfer-routes";
import { PERSONAL_CORE_TRANSFER_SLUGS, isPersonalCoreTransferSlug } from "@/lib/personal-core-transfer-routes";
import { PERSONAL_ACCOUNT_DEPOSIT_SLUGS, isPersonalAccountDepositSlug } from "@/lib/personal-account-deposit-routes";
import { TransferServicePage } from "@/components/personal/transfers/transfer-service-page";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";

type LocalizedPersonalFinancingPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const slug of PERSONAL_FINANCING_SLUGS) {
      params.push({ locale, slug });
    }
    for (const slug of PERSONAL_REMITTANCE_SLUGS) {
      params.push({ locale, slug });
    }
    for (const slug of PERSONAL_INDEPENDENT_TRANSFER_SLUGS) {
      params.push({ locale, slug });
    }
    for (const slug of PERSONAL_CORE_TRANSFER_SLUGS) {
      params.push({ locale, slug });
    }
    for (const slug of PERSONAL_ACCOUNT_DEPOSIT_SLUGS) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: LocalizedPersonalFinancingPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Not Found",
    };
  }

  const service = await getBankingServiceBySlug("personal", slug);

  if (!service) {
    return {
      alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
      title: "Service Not Found",
    };
  }

  const title = locale === "ar" ? service.title.ar : service.title.en;
  const description = locale === "ar" ? service.subtitle.ar : service.subtitle.en;

  return {
    alternates: buildLocalizedAlternates({ pathname: `/services/${slug}`, locale: locale as "ar" | "en" }),
    title: `${title} | Bin Dowal Bank`,
    description,
  };
}

export default async function LocalizedPersonalFinancingPage({ params }: LocalizedPersonalFinancingPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (isPersonalCoreTransferSlug(slug)) {
    return (
      <div
        data-localized-route="personal/[slug]"
        data-personal-segment="core-transfer"
        data-locale={locale}
      >
        <TransferServicePage slug={slug} locale={locale as "ar" | "en"} />
      </div>
    );
  }

  // Redirect to unified /services/[slug] route
  redirect(`/${locale}/services/${slug}`);
}
