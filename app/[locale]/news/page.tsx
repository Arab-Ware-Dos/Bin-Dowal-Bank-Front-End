import { notFound } from "next/navigation";
import { NewsPageContent } from "@/components/news/news-page-content";
import { Locale } from "@/i18n/config";
import { buildLocalizedAlternates } from "@/lib/seo/alternates"

function isLocale(locale: string): locale is Locale {
  return locale === "ar" || locale === "en";
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "ar") {
    return {
      alternates: buildLocalizedAlternates({ pathname: "/news", locale: locale as "ar" | "en" }),
      title: "المركز الإعلامي | بنك بن دول",
      description: "تابع أحدث الأخبار والفعاليات والإنجازات من بنك بن دول."
    };
  }

  return {
    alternates: buildLocalizedAlternates({ pathname: "/news", locale: locale as "ar" | "en" }),
    title: "Media Center | Bin Dowal Bank",
    description: "Follow the latest news, events, and achievements from Bin Dowal Bank."
  };
}

export default async function LocalizedNewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main data-localized-route="news" data-locale={locale}>
      <NewsPageContent locale={locale} />
    </main>
  );
}
