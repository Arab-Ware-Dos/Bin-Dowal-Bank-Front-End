import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { AnnualReportsPageContent } from "@/components/about/annual-reports-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/about/annual-reports" })
}

export default function AnnualReportsLegacyPage() {
  return <AnnualReportsPageContent />
}
