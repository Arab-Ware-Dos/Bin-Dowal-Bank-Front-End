import { notFound } from "next/navigation"
import { isLocale } from "@/i18n/config"
import { FaqPageContent } from "@/components/knowledge-center/faq-page-content"

type LocalizedFaqPageProps = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params
}: LocalizedFaqPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return {
    title:
      locale === "ar"
        ? "الأسئلة الشائعة | مركز المعرفة | بنك بن دول"
        : "FAQ | Knowledge Center | Bin Dowal Bank",
    description:
      locale === "ar"
        ? "نجمع في هذه الصفحة أكثر الاستفسارات شيوعًا من عملائنا مع إجابات واضحة ومنظمة تساعدك على إيجاد ما تحتاجه بسرعة."
        : "We gather the most common customer questions in one organized place to help you find answers quickly."
}
}

export default async function LocalizedFaqPage({
  params
}: LocalizedFaqPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="knowledge-center/faq" data-locale={locale}>
      <FaqPageContent />
    </div>
  )
}
