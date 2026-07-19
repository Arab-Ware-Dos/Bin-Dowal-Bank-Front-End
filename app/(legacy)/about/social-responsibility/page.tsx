import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { SocialResponsibilityPageContent } from "@/components/about/social-responsibility-page-content"


export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/about/social-responsibility" })
}

export default function SocialResponsibilityLegacyPage() {
  return <SocialResponsibilityPageContent />
}
