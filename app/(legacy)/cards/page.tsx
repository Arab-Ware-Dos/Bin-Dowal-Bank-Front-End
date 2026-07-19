import type { Metadata } from "next"
import { CardsPageContent } from "@/components/cards/cards-page-content";
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/cards" })
}

export default function CardsPage() {
  return <CardsPageContent />;
}
