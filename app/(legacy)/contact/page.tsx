import { ContactPageContent } from "@/components/contact/contact-page-content"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "اتصل بنا - بنك بن دول للتمويل الأصغر الإسلامي",
  description: "تواصل مع بنك بن دول للتمويل الأصغر الإسلامي عبر قنواتنا المتعددة",
}

export default function ContactPage() {
  return <ContactPageContent />
}