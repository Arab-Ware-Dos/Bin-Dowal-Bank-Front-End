import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";
import NewsArticleClient from "@/components/news/news-article-client";
import { Locale, locales } from "@/i18n/config";

function isLocale(locale: string): locale is Locale {
  return locale === "ar" || locale === "en";
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    newsItems.map((article) => ({
      locale,
      slug: article.slug || article.id.toString()
}))
  );
}

type LocalizedNewsArticlePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedNewsArticlePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const article = newsItems.find(
    (item) => item.slug === slug || item.id.toString() === slug
  );

  if (!article) {
    notFound();
  }

  const title = locale === "ar" ? article.titleAr : article.titleEn;
  const description = locale === "ar" ? article.excerptAr : article.excerptEn;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: article.image ? [article.image] : []
}
};
}

export default async function LocalizedNewsArticlePage({ params }: LocalizedNewsArticlePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const article = newsItems.find(
    (item) => item.slug === slug || item.id.toString() === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main data-localized-route="news/[slug]" data-news-slug={slug} data-locale={locale}>
      <NewsArticleClient article={article} />
    </main>
  );
}
