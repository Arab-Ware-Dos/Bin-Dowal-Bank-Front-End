"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { CheckCircle2, Copy, Check } from "lucide-react"

export function ComplianceStatementPageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"
  const [copied, setCopied] = useState(false)

  const giinNumber = "6PTVIH.99999.SL.886"

  const handleCopy = () => {
    navigator.clipboard.writeText(giinNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const text = {
    heroTitle: isAr ? "بيان الامتثال" : "Compliance Statement",
    heroSubtitle: isAr
      ? "التزامنا التام بالمعايير المحلية والدولية لمكافحة غسل الأموال وتمويل الإرهاب وتعزيز النزاهة المصرفية."
      : "Our steadfast commitment to local and international AML/CFT standards and banking integrity.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    
    docTitle: isAr ? "بيان الامتثال" : "Compliance Statement",

    intro: isAr 
      ? "تؤكد إلتزام بنك بن دول للتمويل الأصغر الإسلامي بتطبيق أعلى معايير الرقابة المالية ومكافحة غسل الأموال وتمويل الإرهاب وفقاً للقوانين المحلية والتوصيات الدولية."
      : "Bin Dowal Islamic Microfinance Bank affirms its strict adherence to the highest standards of financial control, AML, and CFT in accordance with local laws and international recommendations.",

    sections: [
      {
        title: isAr ? "الالتزام بالمعايير الدولية (FATF & MENAFATF)" : "International Compliance (FATF & MENAFATF)",
        content: isAr
          ? "اليمن وبصفته عضواً في المينافاتف (منطقة الشرق الأوسط وشمال أفريقيا) (MENAFATF)، يسعى إلى الامتثال بالتوصيات الـ 40 للفاتف FATF الخاصة بمكافحة غسل الأموال (AML) ومكافحة تمويل الإرهاب (CFT). ووفقاً لبيان صدر مؤخراً عن مجموعة العمل المالي (FATF)، فقد نجح اليمن في تنفيذ خطة العمل المتفق عليها. وبالتالي، ستواصل مجموعة العمل المالي مراقبة الوضع عن كثب وتحديد موعد لزيارة الموقع في أقرب فرصة ممكنة."
          : "As a member of MENAFATF (Middle East and North Africa Financial Action Task Force), Yemen strives to comply with the FATF (Financial Action Task Force) 40 Recommendations on Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT). According to a recent statement issued by the FATF, Yemen has successfully implemented its agreed-upon action plan. Consequently, the FATF will continue to monitor the situation closely and schedule an on-site visit at the earliest possible opportunity.",
      },
      {
        title: isAr ? "الرقابة والسياسات الداخلية لبنك بن دول" : "Bin Dowal Bank Internal Policies & Controls",
        content: isAr
          ? "فيما يتعلق بتدابير مكافحة غسل الأموال وتمويل الإرهاب، لدى بنك بن دول فريق التزام متخصص تم تعيينه من قبل مجلس الإدارة. كما وضع البنك أيضاً إجراءات وسياسات داخلية لتحديد ومكافحة الأنشطة مثل غسل الأموال وتمويل الإرهاب والاحتيال والفساد والرشوة."
          : "Regarding AML/CFT measures, Bin Dowal Bank has a dedicated compliance team appointed by the Board of Directors. The Bank has also established comprehensive internal procedures and policies to identify and combat activities such as money laundering, terrorism financing, fraud, corruption, and bribery.",
      },
      {
        title: isAr ? "التوافق مع القوانين اليمنية والجهات الرقابية" : "Alignment with Yemeni Laws & Regulatory Bodies",
        content: isAr
          ? "تتوافق هذه الجهود مع القانون اليمني رقم (1) لسنة 2010 بشأن مكافحة غسل الأموال ومكافحة تمويل الإرهاب والذي دخل حيز التنفيذ في 1 يناير 2010 في اليمن. تم إصدار هذا القانون في البداية وفقاً لتوصيات مجموعة العمل المالي (FATF)، وقد خضع لتعديلات بموجب القانون رقم (17) لسنة 2013. تم تقديم المبادئ التوجيهية المقابلة من قبل وحدة المعلومات المالية (FIU) والبنك المركزي اليمني، لتوضيح الواجبات القانونية المرتبطة بالامتثال لمكافحة غسل الأموال وتمويل الإرهاب."
          : "These efforts align with Yemeni Law No. (1) of 2010 concerning Anti-Money Laundering and Combating the Financing of Terrorism, which entered into force on January 1, 2010, in Yemen. Originally issued in accordance with FATF recommendations, this law underwent amendments under Law No. (17) of 2013. Corresponding guidelines have been provided by the Financial Information Unit (FIU) and the Central Bank of Yemen to clarify the legal duties associated with AML/CFT compliance.",
      },
      {
        title: isAr ? "قانون الامتثال الضريبي الأمريكي للحسابات الأجنبية (FATCA)" : "Foreign Account Tax Compliance Act (FATCA)",
        content: isAr
          ? "قانون الامتثال الضريبي الامريكي للحسابات الأجنبية: تم تسجيل بنك بن دول كمؤسسة مالية أجنبية مشاركة."
          : "Foreign Account Tax Compliance Act: Bin Dowal Bank is registered as a Participating Foreign Financial Institution (PFFI).",
        hasGiin: true,
      },
    ],

    pillarsTitle: isAr ? "ركائز منظومة الامتثال في بنك بن دول" : "Pillars of Compliance at Bin Dowal Bank",
    pillars: [
      {
        title: isAr ? "فريق التزام متخصص:" : "Dedicated Compliance Team:",
        desc: isAr
          ? "فريق مستقل ومتخصص معين مباشرة من قبل مجلس الإدارة لضمان تطبيق أعلى معايير الحوكمة والنزاهة المصرفية."
          : "An independent, specialized team appointed directly by the Board of Directors to ensure the highest standards of governance.",
      },
      {
        title: isAr ? "إجراءات رقابية صارمة:" : "Strict Internal Controls:",
        desc: isAr
          ? "أنظمة وسياسات داخلية متطورة لرصد ومكافحة غسل الأموال وتمويل الإرهاب والاحتيال والرشوة بفعالية عالية."
          : "Advanced internal systems and policies to monitor and combat money laundering, terrorism financing, fraud, and bribery.",
      },
      {
        title: isAr ? "اعتراف وتسجيل دولي:" : "International Recognition:",
        desc: isAr
          ? "الامتثال الكامل للمبادئ التوجيهية للبنك المركزي اليمني ووحدة المعلومات المالية والتسجيل في نظام FATCA الأمريكي."
          : "Full compliance with Central Bank of Yemen and FIU guidelines, as well as registration in the U.S. FATCA system.",
      },
    ],

    giinLabel: isAr ? "الرقم التعريفي لبيان الامتثال (GIIN):" : "Compliance Identification Number (GIIN):",
    copiedText: isAr ? "تم النسخ بنجاح!" : "Copied successfully!",
    copyTooltip: isAr ? "نسخ الرقم التعريفي" : "Copy GIIN",
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#262b80] selection:text-white" dir={direction}>
      {/* Hero Section */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.about, href: "/about" },
          { labelKey: text.heroTitle },
        ]}
      />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          <motion.article
            className="bg-white rounded-3xl shadow-[0_16px_50px_rgba(11,13,54,0.07)] border border-slate-200/80 p-8 sm:p-12 md:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header Document Style Accent */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#8b1e3f]" />

            {/* Logo and Main Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-5 bg-white rounded-2xl shadow-sm border border-slate-100 mb-8">
                <Image
                  src="/images/logo.png"
                  alt="Bin Dowal Bank Logo"
                  width={220}
                  height={70}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b0d36] tracking-tight font-cairo leading-snug">
                {text.docTitle}
              </h2>
              <div className="w-20 h-1.5 bg-[#8b1e3f] mx-auto rounded-full mt-6" />
            </div>

            {/* Narrative Content */}
            <div className="space-y-8 text-[#334155] font-cairo text-lg leading-loose text-justify">
              
              {/* Introduction */}
              <p className="font-medium text-[#1e293b]">
                {text.intro}
              </p>

              {/* Sections mapped without block separations, styled as continuous narrative */}
              {text.sections.map((sec, idx) => (
                <div key={idx} className="pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#262b80] mb-4 flex items-center gap-2">
                    <span className="text-[#ed1c24] text-3xl leading-none">•</span>
                    {sec.title}
                  </h3>
                  <p>
                    {sec.content}
                  </p>
                  
                  {sec.hasGiin && (
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                      <div>
                        <span className="block text-sm text-slate-500 font-medium mb-1">
                          {text.giinLabel}
                        </span>
                        <div className="font-mono text-xl md:text-2xl font-bold tracking-wider text-[#0b0d36]">
                          {giinNumber}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#262b80] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 border border-slate-200 shadow-sm sm:ms-auto"
                        title={text.copyTooltip}
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span className="text-emerald-700">{text.copiedText}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{isAr ? "نسخ الرقم" : "Copy Number"}</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#262b80] mb-4 flex items-center gap-2">
                  <span className="text-[#ed1c24] text-3xl leading-none">•</span>
                  {text.pillarsTitle}
                </h3>
                <ul className="list-disc list-outside ml-6 mr-6 space-y-3 text-lg">
                  {text.pillars.map((pillar, idx) => (
                    <li key={idx}>
                      <span className="font-bold text-[#1e293b]">{pillar.title}</span> {pillar.desc}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Footer Verification */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500 font-cairo">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>{isAr ? "بيان امتثال معتمد وصادر عن إدارة الالتزام - بنك بن دول" : "Certified Compliance Statement issued by Bin Dowal Bank Compliance Dept"}</span>
            </div>
          </motion.article>

        </div>
      </section>
    </div>
  )
}
