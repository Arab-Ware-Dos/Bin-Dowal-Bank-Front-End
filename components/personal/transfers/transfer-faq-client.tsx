"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n-context";

export type TransferFaqClientProps = {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
};

export function TransferFaqClient({ items }: TransferFaqClientProps) {
  const { locale } = useI18n();
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!items || items.length === 0) return null;

  return (
    <Accordion type="single" collapsible className="w-full" dir={dir}>
      {items.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="border-slate-200/60"
        >
          <AccordionTrigger className="text-right text-[15px] font-semibold text-slate-900 hover:text-[#324198] hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-7 text-slate-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
