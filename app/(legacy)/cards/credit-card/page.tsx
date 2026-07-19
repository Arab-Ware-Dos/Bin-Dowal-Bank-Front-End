import type { Metadata } from "next"
import { CreditCardPageContent } from "@/components/cards/credit-card-page-content";
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/cards/credit-card" })
}

export default function CreditCardPage() {
  return <CreditCardPageContent />;
}
