"use client"

import { useI18n } from "@/lib/i18n-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionTitle } from "./section-title"
import type { FAQ } from "@/data/mock-data"

interface FAQAccordionProps {
  faqs: FAQ[]
  showTitle?: boolean
}

export function FAQAccordion({ faqs, showTitle = true }: FAQAccordionProps) {
  const { t, locale } = useI18n()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {showTitle && <SectionTitle title={t("faq.title")} />}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-start text-lg hover:text-primary">
                  {locale === "ar" ? faq.questionAr : faq.questionEn}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {locale === "ar" ? faq.answerAr : faq.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
