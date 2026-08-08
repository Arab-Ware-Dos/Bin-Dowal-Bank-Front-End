import { notFound } from "next/navigation";
import { locales, isLocale } from "@/i18n/config";
import { SpecializedServicesPageContent } from "@/components/specialized-services/specialized-services-page-content";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return { alternates: buildLocalizedAlternates({ pathname: "/specialized-services", locale: locale as "ar" | "en" }),
    title: "Not Found" };
  }

  const isAr = locale === "ar";
  return {
    alternates: buildLocalizedAlternates({ pathname: "/specialized-services", locale: locale as "ar" | "en" }),
    title: `${isAr ? "خدمات مخصصة" : "Specialized Services"} | Bin Dowal Bank`,
    description: isAr
      ? "حلول مصرفية مخصصة لتلبي احتياجاتك الفريدة"
      : "Specialized banking solutions to meet your unique needs",
    openGraph: {
      title: `${isAr ? "خدمات مخصصة" : "Specialized Services"} | Bin Dowal Bank`,
      description: isAr
        ? "حلول مصرفية مخصصة لتلبي احتياجاتك الفريدة"
        : "Specialized banking solutions to meet your unique needs",
    },
  };
}

export default async function LocalizedSpecializedServicesPage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="specialized-services" data-locale={locale}>
      <SpecializedServicesPageContent />
    </div>
  );
}
