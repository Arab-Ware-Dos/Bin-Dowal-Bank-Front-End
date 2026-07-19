import type { Metadata } from "next"
import { PrepaidCardPageContent } from "@/components/cards/prepaid-card-page-content";
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/cards/prepaid-card" })
}

export default function PrepaidCardPage() {
  return <PrepaidCardPageContent />;
}
