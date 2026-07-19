import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { PartnersPageContent } from "@/components/about/partners-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/about/partners" })
}

export default function PartnersLegacyPage() {
  return <PartnersPageContent />
}
