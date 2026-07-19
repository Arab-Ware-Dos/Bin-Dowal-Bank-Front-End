import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { BoardOfDirectorsPageContent } from "@/components/about/board-of-directors-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/about/board-of-directors" })
}

export default function BoardOfDirectorsLegacyPage() {
  return <BoardOfDirectorsPageContent />
}
