import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { CareersPageContent } from "@/components/careers/careers-page-content";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";
import { Metadata } from "next";

type LocalizedCareersPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale: string) => ({
    locale,
  }));
}

export async function generateMetadata({
  params
}: LocalizedCareersPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: "/careers", locale: locale as "ar" | "en" }),
    title:
      locale === "ar"
        ? "الوظائف | بنك بن دول"
        : "Careers | Bin Dowal Bank",
    description:
      locale === "ar"
        ? "استكشف الفرص الوظيفية وانضم إلى فريق عمل بنك بن دول."
        : "Explore career opportunities and join the Bin Dowal Bank team."
  };
}

export default async function LocalizedCareersPage({
  params
}: LocalizedCareersPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="careers" data-locale={locale}>
      <CareersPageContent />
    </div>
  );
}
