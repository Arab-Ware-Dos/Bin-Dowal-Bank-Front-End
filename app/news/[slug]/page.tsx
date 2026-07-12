import { newsItems } from "@/data/news"
import { notFound } from "next/navigation"
import NewsArticleClient from "./news-article-client"

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug || item.id.toString(),
  }))
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Await the params resolution for compatibility across Next 14 and Next 15
  const resolvedParams = await Promise.resolve(params)
  const slug = resolvedParams.slug
  
  const article = newsItems.find(
    (item) => item.slug === slug || item.id.toString() === slug
  )

  if (!article) {
    notFound()
  }

  return <NewsArticleClient article={article} />
}
