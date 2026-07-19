import { buildLegacyAlternates } from "@/lib/seo/alternates"
import { AboutPageContent } from "@/components/about/about-page-content"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: buildLegacyAlternates({ pathname: "/about" }),
  title: "عن البنك - بنك بن دول للتمويل الأصغر الإسلامي",
  description: "بنك وطني للتمويل الأصغر الإسلامي، نقدّم حلولاً مالية ومصرفية موثوقة تجمع بين القيم الإسلامية والابتكار، وتدعم الأفراد والأعمال وتعزز الشمول المالي في اليمن.",
  openGraph: {
    title: "عن البنك - بنك بن دول للتمويل الأصغر الإسلامي",
  }
}

export default function AboutPage() {
  return <AboutPageContent />
}