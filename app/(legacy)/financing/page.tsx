import type { Metadata } from "next"
import { FinancingPageContent } from "@/components/banking/financing-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/financing" })
}

export default function FinancingPage() {
  return <FinancingPageContent />
}
