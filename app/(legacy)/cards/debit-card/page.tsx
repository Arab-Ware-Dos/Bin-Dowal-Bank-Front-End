import type { Metadata } from "next"
import { DebitCardPageContent } from "@/components/cards/debit-card-page-content";
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/cards/debit-card" })
}

export default function DebitCardPage() {
  return <DebitCardPageContent />;
}
