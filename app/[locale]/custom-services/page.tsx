import { notFound } from "next/navigation";
import { locales, isLocale } from "@/i18n/config";
import { CustomServicesPageContent } from "@/components/custom-services/custom-services-page-content";
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
    return { alternates: buildLocalizedAlternates({ pathname: "/custom-services", locale: locale as "ar" | "en" }),
    title: "Not Found" };
  }

  const isAr = locale === "ar";
  return {
    alternates: buildLocalizedAlternates({ pathname: "/custom-services", locale: locale as "ar" | "en" }),
    title: `${isAr ? "خدمات مخصصة" : "Custom Services"} | Bin Dowal Bank`,
    description: isAr 
      ? "حلول مصرفية مخصصة لتلبي احتياجاتك الفريدة" 
      : "Customized banking solutions to meet your unique needs",
    openGraph: {
      title: `${isAr ? "خدمات مخصصة" : "Custom Services"} | Bin Dowal Bank`,
      description: isAr 
        ? "حلول مصرفية مخصصة لتلبي احتياجاتك الفريدة" 
        : "Customized banking solutions to meet your unique needs",
    },
  };
}

export default async function LocalizedCustomServicesPage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="custom-services" data-locale={locale}>
      <CustomServicesPageContent />
    </div>
  );
}
