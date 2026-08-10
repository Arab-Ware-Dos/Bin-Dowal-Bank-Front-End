"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  Download,
  Search,
  Filter,
  CheckCircle2,
  HelpCircle,
  FolderOpen,
  HardDrive,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Printer,
  PenTool,
  ShieldCheck,
  Phone
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { bankFormsData, type BankForm } from "@/data/bank-forms"

export function FormsPageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Categories list (Placeholder as no categories are used in bank-forms data currently)
  
  // Filtered and searched forms
  const filteredForms = useMemo(() => {
    let result = bankFormsData;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((form) =>
        form.title.en.toLowerCase().includes(q) || form.title.ar.includes(q)
      );
    }
    return result;
  }, [searchQuery]);

  const text = {
    heroTitle: isAr ? "نماذج البنك المصرفية" : "Banking Forms Library",
    heroSubtitle: isAr
      ? "مكتبة رقمية متكاملة لنماذج وطلبات الخدمات المصرفية بصيغة PDF، متاحة للتنزيل المباشر لتسهيل إنجاز معاملاتك البنكية بكل يسر وأمان."
      : "A comprehensive digital library of banking service forms and applications in PDF format, available for direct download to streamline your banking transactions with ease and security.",
    home: isAr ? "الرئيسية" : "Home",
    customerService: isAr ? "خدمة العملاء" : "Customer Service",
    searchPlaceholder: isAr ? "ابحث عن اسم النموذج أو الخدمة..." : "Search form name or service...",
    allCategories: isAr ? "جميع النماذج" : "All Forms",
    downloadBtn: isAr ? "تنزيل ملف (PDF)" : "Download PDF File",
    fileSizeLabel: isAr ? "حجم الملف:" : "File Size:",
    updatedAtLabel: isAr ? "تاريخ التحديث:" : "Updated:",
    emptyTitle: isAr ? "لم يتم العثور على نماذج مطابقة" : "No matching forms found",
    emptyDesc: isAr ? "يرجى محاولة التعديل على كلمات البحث أو اختيار تصنيف آخر." : "Please try adjusting your search words or selecting another category.",
    guidelinesTitle: isAr ? "إرشادات مهمة لتسهيل معاملاتك المصرفية" : "Important Guidelines to Streamline Your Banking",
    guidelinesSubtitle: isAr ? "خطوات بسيطة لضمان قبول النماذج وسرعة معالجتها في فروعنا" : "Simple steps to ensure prompt processing of forms at our branches",
    step1Title: isAr ? "1. التنزيل والطباعة" : "1. Download & Print",
    step1Desc: isAr ? "قم بتنزيل النموذج بصيغة PDF وطباعته بوضوح على ورق أبيض قياسي A4." : "Download the PDF form and print it clearly on standard white A4 paper.",
    step2Title: isAr ? "2. تعبئة البيانات والتوقيع" : "2. Fill & Sign",
    step2Desc: isAr ? "املأ جميع البيانات المطلوبة بدقة وتطابق مع وثائق إثبات الهوية الرسمية، مع التوقيع المعتمد." : "Accurately fill in all required details matching official ID documents, with your authorized signature.",
    step3Title: isAr ? "3. التقديم للفرع" : "3. Submit to Branch",
    step3Desc: isAr ? "قدم النموذج المكتمل مع المرفقات المطلوبة إلى أقرب فرع لبنك بن دول ليتم معالجة طلبك فوراً." : "Submit the completed form along with required attachments to the nearest Bin Dowal Bank branch for instant processing.",
    contactHelpTitle: isAr ? "هل تحتاج مساعدة في اختيار النموذج المناسب؟" : "Need help choosing the right form?",
    contactHelpDesc: isAr ? "فريق خدمة العملاء متاح للرد على جميع استفساراتك وتوجيهك لإنجاز معاملاتك بسهولة." : "Our customer service team is available to answer your questions and guide you seamlessly.",
    contactCta: isAr ? "تواصل مع خدمة العملاء" : "Contact Customer Service",
    formsCount: isAr ? `عرض ${filteredForms.length} من أصل ${bankFormsData.length} نموذج` : `Showing ${filteredForms.length} of ${bankFormsData.length} forms`
  }

  return (
    <div className="min-h-screen bg-[#f8fafd] font-sans pb-20">
      {/* Hero Section */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.customerService, href: "/contact" },
          { labelKey: text.heroTitle }
        ]}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">

        {/* Forms Grid */}
        {filteredForms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {filteredForms.map((form, idx) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all flex items-center justify-between gap-4 h-36"
              >
                {/* Right Side (Title and Download) */}
                <div className="flex flex-col h-full justify-center items-center text-center w-full px-2">
                  <h3 className="text-[#262b80] font-bold font-cairo text-base sm:text-lg mb-2 leading-snug">
                    {form.title[isAr ? "ar" : "en"]}
                  </h3>
                  <a
                    href={form.fileUrl}
                    download
                    className="text-[#3b82f6] hover:text-[#2563eb] text-sm font-cairo transition-colors font-medium"
                  >
                    {isAr ? "تحميل" : "Download"}
                  </a>
                </div>

                {/* Left Side (Icon and Size) */}
                <div className="flex flex-col items-center justify-center shrink-0 w-24">
                  <div className="relative text-[#dca93a] flex items-center justify-center mb-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-14 h-14"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                    <span className="absolute mt-3.5 text-[11px] font-bold uppercase tracking-wider text-[#dca93a]">PDF</span>
                  </div>
                  <span className="text-[12px] text-[#dca93a]/80 font-cairo">
                    ({form.fileSize})
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm border border-slate-200 mb-16"
          >
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6 text-slate-400">
              <FolderOpen className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 font-cairo mb-2">
              {text.emptyTitle}
            </h3>
            <p className="text-sm text-slate-500 font-cairo mb-6">
              {text.emptyDesc}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all")
                setSearchQuery("")
              }}
              className="px-6 py-3 rounded-xl bg-[#262b80] text-white font-bold font-cairo text-sm hover:bg-[#1a1e5a] transition-colors shadow-md"
            >
              {isAr ? "عرض كل النماذج" : "Show All Forms"}
            </button>
          </motion.div>
        )}

      </div>
    </div>
  )
}
