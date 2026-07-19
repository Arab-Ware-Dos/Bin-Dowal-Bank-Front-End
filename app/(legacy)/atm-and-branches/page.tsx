import { AtmAndBranchesPageContent } from "@/components/locations/atm-and-branches-page-content"
import type { Metadata } from "next"
import { buildLegacyAlternates } from "@/lib/seo/alternates"

export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/atm-and-branches" }),
  title: "الفروع وأجهزة الصراف الآلي | بنك بن دول",
  description: "ابحث عن أقرب فرع أو جهاز صراف آلي تابع لبنك بن دول للتمويل الأصغر الإسلامي.",
}

export default function AtmAndBranchesPage() {
  return <AtmAndBranchesPageContent />
}
