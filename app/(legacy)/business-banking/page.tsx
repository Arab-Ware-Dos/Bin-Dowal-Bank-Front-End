import type { Metadata } from "next"
import { BusinessBankingPageContent } from "@/components/banking/business-banking-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/business-banking" })
}

export default function BusinessBankingPage() {
  return <BusinessBankingPageContent />
}
