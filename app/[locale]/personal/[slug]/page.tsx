import { notFound } from "next/navigation";
import { getBankingServiceBySlug } from "@/services/banking-service-pages";
import { BankingServicePageTemplate } from "@/components/service-page/BankingServicePageTemplate";
import { ServicePageData } from "@/types/banking-service-page";
import { isLocale, locales } from "@/i18n/config";
import { PERSONAL_FINANCING_SLUGS, isPersonalFinancingSlug } from "@/lib/personal-financing-routes";

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
  }
  
  return params;
}

export async function generateMetadata({ params }: LocalizedPersonalFinancingPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isPersonalFinancingSlug(slug)) {
    return { title: "Not Found" };
  }

  const service = await getBankingServiceBySlug("personal", slug);

  if (!service || service.section !== "personal") {
    return { title: "Service Not Found" };
  }

  const title = locale === "ar" ? service.title.ar : service.title.en;
  const description = locale === "ar" ? service.subtitle.ar : service.subtitle.en;

  return {
    title: `${title} | Bin Dowal Bank`,
    description,
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function LocalizedPersonalFinancingPage({ params }: LocalizedPersonalFinancingPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (!isPersonalFinancingSlug(slug)) {
    notFound();
  }

  const service = await getBankingServiceBySlug("personal", slug);

  if (!service || service.section !== "personal") {
    notFound();
  }

  return (
    <div 
      data-localized-route="personal/[slug]"
      data-personal-segment="financing"
      data-personal-slug={slug}
      data-locale={locale}
    >
      <BankingServicePageTemplate data={service as ServicePageData} />
    </div>
  );
}
