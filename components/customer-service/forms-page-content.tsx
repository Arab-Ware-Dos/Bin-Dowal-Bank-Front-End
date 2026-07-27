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

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set<string>()
    bankFormsData.forEach((form) => {
      cats.add(form.category[isAr ? "ar" : "en"])
    })
    return ["all", ...Array.from(cats)]
  }, [isAr])

  // Filtered and searched forms
  const filteredForms = useMemo(() => {
    return bankFormsData.filter((form) => {
      const matchesCategory =
        selectedCategory === "all" ||
        form.category[isAr ? "ar" : "en"] === selectedCategory
      
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        form.title.ar.toLowerCase().includes(q) ||
        form.title.en.toLowerCase().includes(q) ||
        form.description.ar.toLowerCase().includes(q) ||
        form.description.en.toLowerCase().includes(q)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery, isAr])

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
        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(11,13,54,0.06)] border border-[#dde3ef] mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={text.searchPlaceholder}
                className="w-full ps-11 pe-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#262b80] focus:ring-4 focus:ring-[#262b80]/10 text-slate-800 font-cairo placeholder:text-slate-400 text-sm transition-all outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 end-0 flex items-center pe-4 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  {isAr ? "مسح" : "Clear"}
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat
                const label = cat === "all" ? text.allCategories : cat

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-cairo transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                      isSelected
                        ? "bg-gradient-to-r from-[#0b0d36] to-[#262b80] text-white shadow-md shadow-[#262b80]/20 scale-[1.02]"
                        : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                    }`}
                  >
                    {cat === "all" && <FolderOpen className="w-4 h-4" />}
                    <span>{label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results Count Summary */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 font-cairo">
            <span>{text.formsCount}</span>
            {selectedCategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="text-[#8b1e3f] hover:underline"
              >
                {isAr ? "إعادة ضبط التصفية" : "Reset filter"}
              </button>
            )}
          </div>
        </motion.div>

        {/* Forms Grid */}
        {filteredForms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {filteredForms.map((form, idx) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b0d36] via-[#1a1e5a] to-[#262b80] p-7 text-white shadow-[0_15px_40px_rgba(11,13,54,0.15)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_25px_60px_rgba(38,43,128,0.35)] border border-white/10"
              >
                {/* Decorative Glowing Accent in background */}
                <div className="absolute -top-12 -end-12 w-48 h-48 bg-[#8b1e3f]/25 rounded-full blur-3xl group-hover:bg-[#8b1e3f]/45 transition-all duration-500 pointer-events-none" />
                <div className="absolute -bottom-12 -start-12 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all duration-500 pointer-events-none" />
                
                {/* Top Border Highlight */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#8b1e3f] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header Row: File Icon and PDF Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 shadow-inner">
                      <FileText className="h-8 w-8" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8b1e3f] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md border border-white/15">
                      <FileText className="h-3.5 w-3.5" />
                      <span>{form.fileType}</span>
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-3 inline-block relative z-10">
                    <span className="rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm border border-white/10">
                      {form.category[isAr ? "ar" : "en"]}
                    </span>
                  </div>

                  {/* Form Title */}
                  <h3 className="mb-3 text-xl sm:text-2xl font-bold leading-snug text-white font-cairo transition-colors duration-200 relative z-10">
                    {form.title[isAr ? "ar" : "en"]}
                  </h3>

                  {/* Form Description */}
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-200 font-cairo relative z-10 text-justify">
                    {form.description[isAr ? "ar" : "en"]}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  {/* Metadata Row */}
                  <div className="mb-6 flex items-center justify-between text-xs text-slate-300 border-t border-white/15 pt-4 font-cairo">
                    <span className="flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5 text-white" />
                      <span>{text.fileSizeLabel} {form.fileSize}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>{form.updatedAt}</span>
                    </span>
                  </div>

                  {/* Download Button */}
                  <a
                    href={form.fileUrl}
                    download
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#fff] px-6 py-4 text-sm font-extrabold text-[#0b0d36] font-cairo shadow-lg transition-all duration-300 active:scale-[0.98] group-hover:translate-y-[-2px]"
                  >
                    <Download className="h-5 w-5 animate-bounce" />
                    <span>{text.downloadBtn}</span>
                  </a>
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

        {/* Important Guidelines Section */}
        <section className="mt-20 mb-12 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(11,13,54,0.06)] border border-[#dde3ef] relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#262b80] via-[#8b1e3f] to-[#262b80]" />
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262b80]/10 text-[#262b80] text-xs font-bold font-cairo mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? "إرشادات سريعة" : "Quick Guide"}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b0d36] font-cairo mb-3">
              {text.guidelinesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-cairo">
              {text.guidelinesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#f8fafd] rounded-2xl p-6 border border-slate-200/80 relative group hover:border-[#262b80]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#262b80] text-white flex items-center justify-center mb-5 font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0b0d36] font-cairo mb-2">
                {text.step1Title}
              </h3>
              <p className="text-sm text-slate-600 font-cairo leading-relaxed">
                {text.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f8fafd] rounded-2xl p-6 border border-slate-200/80 relative group hover:border-[#262b80]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#8b1e3f] text-white flex items-center justify-center mb-5 font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0b0d36] font-cairo mb-2">
                {text.step2Title}
              </h3>
              <p className="text-sm text-slate-600 font-cairo leading-relaxed">
                {text.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f8fafd] rounded-2xl p-6 border border-slate-200/80 relative group hover:border-[#262b80]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0b0d36] to-[#262b80] text-white flex items-center justify-center mb-5 font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0b0d36] font-cairo mb-2">
                {text.step3Title}
              </h3>
              <p className="text-sm text-slate-600 font-cairo leading-relaxed">
                {text.step3Desc}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support Banner */}
        <section className="bg-gradient-to-r from-[#0b0d36] via-[#1e2366] to-[#262b80] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 mb-12">
          <div className="flex items-center gap-5 text-center md:text-start">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-400 shrink-0 hidden sm:flex">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-cairo mb-2">
                {text.contactHelpTitle}
              </h3>
              <p className="text-sm text-slate-300 font-cairo max-w-xl leading-relaxed">
                {text.contactHelpDesc}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-[#0b0d36] font-bold font-cairo text-sm hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-2.5 shrink-0"
          >
            <Phone className="w-4 h-4 text-[#262b80]" />
            <span>{text.contactCta}</span>
          </Link>
        </section>
      </div>
    </div>
  )
}
