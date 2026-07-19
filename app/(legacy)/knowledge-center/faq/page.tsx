import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"

import { FaqPageContent } from "@/components/knowledge-center/faq-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/knowledge-center/faq" })
}

export default function FAQPage() {
  return <FaqPageContent />
}
