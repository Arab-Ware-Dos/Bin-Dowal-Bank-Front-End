import type { Metadata } from "next"
import { PersonalBankingPageContent } from "@/components/banking/personal-banking-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/personal-banking" })
}

export default function PersonalBankingPage() {
  return <PersonalBankingPageContent />
}
