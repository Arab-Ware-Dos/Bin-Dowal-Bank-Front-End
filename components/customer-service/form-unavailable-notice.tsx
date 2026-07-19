import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export type FormUnavailableNoticeProps = {
  locale: "ar" | "en";
  contactHref: string;
};

export function FormUnavailableNotice({ locale, contactHref }: FormUnavailableNoticeProps) {
  const isAr = locale === "ar";
  
  const title = isAr
    ? "الخدمة الإلكترونية غير متاحة مؤقتًا"
    : "Online service temporarily unavailable";
    
  const description = isAr
    ? "إرسال هذا الطلب عبر الموقع غير متاح حاليًا، ولن يتم إرسال أو حفظ أي بيانات من خلال هذا النموذج. يرجى استخدام قنوات التواصل الرسمية للبنك الموضحة في صفحة «تواصل معنا» لتقديم طلبك."
    : "Submitting this request through the website is currently unavailable. No information entered in this form will be sent or stored. Please use the bank’s official contact channels listed on the Contact Us page to submit your request.";
    
  const linkText = isAr ? "عرض قنوات التواصل" : "View contact channels";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      aria-live="polite"
      className="mb-8 rounded-[20px] border border-amber-200/60 bg-amber-50/80 p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100/80 text-amber-600">
          <AlertCircle className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-amber-900">{title}</h3>
          <p className="text-sm leading-6 text-amber-800/90">{description}</p>
          <div>
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-200"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
