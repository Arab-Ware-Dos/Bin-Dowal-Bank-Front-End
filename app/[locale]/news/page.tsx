import { notFound } from "next/navigation";
import { NewsPageContent } from "@/components/news/news-page-content";
import { Locale } from "@/i18n/config";

function isLocale(locale: string): locale is Locale {
  return locale === "ar" || locale === "en";
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "ar") {
    return {
      title: "الأخبار | بنك بن دول",
      description: "تابع أحدث أخبار وأنشطة وفعاليات بنك بن دول.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: "News | Bin Dowal Bank",
    description: "Follow the latest news, activities, and events from Bin Dowal Bank.",
    robots: { index: false, follow: false },
  };
}

export default async function LocalizedNewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main data-localized-route="news" data-locale={locale}>
      <NewsPageContent />
    </main>
  );
}
