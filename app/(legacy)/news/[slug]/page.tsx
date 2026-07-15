import { newsItems } from "@/data/news"
import { notFound } from "next/navigation"
import NewsArticleClient from "@/components/news/news-article-client"

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug || item.id.toString(),
  }))
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const article = newsItems.find(
    (item) => item.slug === slug || item.id.toString() === slug
  )

  if (!article) {
    notFound()
  }

  return <NewsArticleClient article={article} />
}
