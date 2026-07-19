import type { Metadata } from "next"
import { BranchesPageContent } from "@/components/locations/branches-page-content"
import { buildLegacyAlternates } from "@/lib/seo/alternates"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/branches" })
}

export default function BranchesPage() {
  return <BranchesPageContent />
}
