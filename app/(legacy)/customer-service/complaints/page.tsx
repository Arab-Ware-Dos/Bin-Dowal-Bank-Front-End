import type { Metadata } from "next"
import { ComplaintsPageContent } from "@/components/customer-service/complaints-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/customer-service/complaints" })
}

export default function ComplaintsPageLegacy() {
  return <ComplaintsPageContent />
}
