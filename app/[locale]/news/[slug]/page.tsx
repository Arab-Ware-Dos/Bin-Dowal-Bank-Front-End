import { notFound } from "next/navigation";
import NewsArticleClient from "@/components/news/news-article-client";
import { Locale, locales } from "@/i18n/config";
import { buildLocalizedAlternates } from "@/lib/seo/alternates";
import { fetchNewsBySlug, fetchAllNewsSlugs } from "@/services/news-service";

function isLocale(locale: string): locale is Locale {
  return locale === "ar" || locale === "en";
}

export async function generateStaticParams() {
  const slugs = await fetchAllNewsSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
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

  const article = await fetchNewsBySlug(slug);

  if (!article) {
    return {
      title: locale === "ar" ? "الخبر غير موجود" : "Article Not Found",
    };
  }

  const title = locale === "ar" ? article.titleAr : article.titleEn;
  const description = locale === "ar" ? article.excerptAr : article.excerptEn;

  return {
    alternates: buildLocalizedAlternates({ pathname: `/news/${slug}`, locale: locale as "ar" | "en" }),
    title,
    description,
    openGraph: {
      title,
      description,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function LocalizedNewsArticlePage({ params }: LocalizedNewsArticlePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const article = await fetchNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main data-localized-route="news/[slug]" data-news-slug={slug} data-locale={locale}>
      <NewsArticleClient article={article} />
    </main>
  );
}
