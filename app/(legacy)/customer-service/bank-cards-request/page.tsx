import type { Metadata } from "next"
import { BankCardsRequestPageContent } from "@/components/customer-service/bank-cards-request-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/customer-service/bank-cards-request" })
}

export default function BankCardsRequestPageLegacy() {
  return <BankCardsRequestPageContent />
}
