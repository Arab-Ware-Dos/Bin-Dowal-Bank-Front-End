import type { Metadata } from "next"
import { ServiceRequestPageContent } from "@/components/customer-service/service-request-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/customer-service/service-request" })
}

export default function ServiceRequestPageLegacy() {
  return <ServiceRequestPageContent />
}
