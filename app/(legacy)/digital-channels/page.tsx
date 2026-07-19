import type { Metadata } from "next"
import { DigitalChannelsPageContent } from "@/components/banking/digital-channels-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/digital-channels" })
}

export default function DigitalChannelsPage() {
  return <DigitalChannelsPageContent />
}
