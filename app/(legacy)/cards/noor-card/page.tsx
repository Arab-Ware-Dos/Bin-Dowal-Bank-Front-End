import type { Metadata } from "next"
import { NoorCardPageContent } from "@/components/cards/noor-card-page-content";
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/cards/noor-card" })
}

export default function NoorCardPage() {
  return <NoorCardPageContent />;
}
