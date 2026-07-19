import type { Metadata } from "next"
import { NewsPageContent } from "@/components/news/news-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/news" })
}

export default function LegacyNewsPage() {
  return <NewsPageContent />
}