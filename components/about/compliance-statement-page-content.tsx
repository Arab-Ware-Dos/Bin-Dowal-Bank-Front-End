"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { getSection, type BankSectionRaw } from "@/services/sections-service"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { CheckCircle2, Copy, Check } from "lucide-react"

export function ComplianceStatementPageContent() {
  const [compHero, setCompHero] = useState<BankSectionRaw | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const s = await getSection('compliance_hero', 'ar')
        if (s) setCompHero(s)
      } catch (e) {
        console.warn('Failed to load compliance hero', e)
      }
    }
    load()
  }, [])
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"
  const [copied, setCopied] = useState(false)

  const giinNumber = "6PTVIH.99999.SL.887"

  const handleCopy = () => {
    navigator.clipboard.writeText(giinNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const text = {
    heroTitle: isAr ? "بيان الامتثال ومكافحة الجرائم المالية" : "Compliance and Financial Crime Prevention Statement",
    heroSubtitle: isAr
      ? "التزامنا التام بالمعايير المحلية والدولية لمكافحة غسل الأموال وتمويل الإرهاب وتعزيز النزاهة المصرفية."
      : "Our steadfast commitment to local and international AML/CFT standards and banking integrity.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    
    docTitle: isAr ? "بيان الامتثال ومكافحة الجرائم المالية" : "Compliance and Financial Crime Prevention Statement",

    sections: [
      {
        title: isAr ? "نهج البنك في الامتثال:" : "The Bank's Approach to Compliance:",
        content: isAr
          ? [
              "يلتزم بنك بن دول للتمويل الأصغر الإسلامي بممارسة أعماله وفقاً لمبادئ النزاهة والشفافية والمساءلة وأحكام الشريعة الإسلامية، وبالامتثال للقوانين والتشريعات اليمنية النافذة، وتعليمات البنك المركزي اليمني، والمعايير الدولية ذات الصلة. ويُعد الامتثال مسؤولية مشتركة على جميع مستويات البنك وعنصراً أساسياً لحماية العملاء والموظفين والمساهمين وشركاء الأعمال، والمحافظة على سمعة البنك وسلامة النظام المالي.",
              "ينطبق إطار الامتثال ومكافحة الجرائم المالية، بحسب طبيعة النشاط وما ينطبق نظاماً، على المركز الرئيسي وجميع الفروع والمكاتب وقنوات تقديم الخدمة، وعلى الشركات التابعة أو الكيانات الخاضعة لسيطرة البنك إن وجدت. ويلتزم البنك بتطبيق معايير متسقة، مع مراعاة المتطلبات القانونية والرقابية المحلية ذات الصلة."
            ]
          : [
              "Bin Dowal Islamic Microfinance Bank is committed to conducting its business in accordance with the principles of integrity, transparency and accountability, the requirements of Islamic Sharia, applicable Yemeni laws and regulations, instructions issued by the Central Bank of Yemen, and relevant international standards. Compliance is a shared responsibility at every level of the Bank and is fundamental to protecting customers, employees, shareholders and business partners, as well as safeguarding the Bank's reputation and the integrity of the financial system.",
              "Subject to the nature of the activity and applicable legal requirements, the Bank's compliance and financial crime framework applies to its head office, all branches, offices and delivery channels, and to any subsidiaries or controlled entities. The Bank applies consistent standards while observing relevant local legal and regulatory requirements."
            ]
      },
      {
        title: isAr ? "الحوكمة والإشراف:" : "Governance and Oversight:",
        content: isAr 
          ? [
              "يتولى مجلس الإدارة والإدارة العليا الإشراف على إطار الامتثال وثقافة السلوك المهني في البنك. وتقوم إدارة امتثال مستقلة ومتخصصة، تتمتع بإمكانية الوصول الملائم إلى مجلس الإدارة ولجانه وفق ترتيبات الحوكمة المعتمدة، بتحديد مخاطر عدم الامتثال والجرائم المالية وتقييمها، وتقديم المشورة، ومراقبة التطبيق، ورفع التقارير الرقابية والإدارية، ودعم المعالجة في الوقت المناسب.",
              "يراجع البنك دورياً سياساته وإجراءاته وأنظمته وتقييماته للمخاطر وضوابطه الداخلية، بما يواكب التغيرات التشريعية والرقابية، والمنتجات والخدمات وقنوات التقديم الجديدة، والتقنيات الحديثة، ومخاطر الجرائم المالية المستجدة."
            ]
          : [
              "The Board of Directors and Senior Management oversee the Bank's compliance framework and culture of professional conduct. An independent and specialized Compliance Department, with appropriate access to the Board and its committees under the Bank's governance arrangements, identifies and assesses compliance and financial crime risks, provides advice, monitors implementation, supports regulatory and management reporting, and promotes timely remediation.",
              "The Bank periodically reviews its policies, procedures, systems, risk assessments and internal controls to reflect legislative and regulatory developments, new products, services and delivery channels, emerging technologies, and evolving financial crime risks."
            ]
      },
      {
        title: isAr ? "مكافحة غسل الأموال وتمويل الإرهاب والجرائم المالية:" : "Anti-Money Laundering, Counter-Terrorist Financing and Financial Crime:",
        content: isAr
          ? [
              "يطبق البنك برنامجاً قائماً على المخاطر لمنع استخدام منتجاته وخدماته وحساباته وقنواته في غسل الأموال، أو تمويل الإرهاب، أو تمويل انتشار أسلحة الدمار الشامل، أو الاحتيال، أو الرشوة، أو الفساد، أو التحايل على العقوبات، أو غيرها من الأنشطة غير المشروعة. ويستند البرنامج إلى التشريعات اليمنية النافذة، بما فيها القانون رقم (1) لسنة 2010 بشأن مكافحة غسل الأموال وتمويل الإرهاب وتعديلاته، بما في ذلك القانون رقم (17) لسنة 2013، وتعليمات البنك المركزي اليمني، وتوصيات مجموعة العمل المالي (FATF)، والمعايير الدولية ذات الصلة."
            ]
          : [
              "The Bank maintains a risk-based programme designed to prevent its products, services, accounts and channels from being used for money laundering, terrorist financing, proliferation financing, fraud, bribery, corruption, sanctions evasion or other unlawful activity. The programme is based on applicable Yemeni legislation, including Law No. 1 of 2010 concerning Anti-Money Laundering and Counter-Terrorist Financing, as amended, including by Law No. 17 of 2013; instructions of the Central Bank of Yemen; the Financial Action Task Force (FATF) Recommendations; and other relevant international standards."
            ]
      },
      {
        title: isAr ? "التعرف على العملاء والعناية الواجبة:" : "KYC and Due Diligence:",
        content: isAr
          ? [
              "يطبق البنك إجراءات «اعرف عميلك» (KYC)، والعناية الواجبة تجاه العملاء (CDD)، والعناية الواجبة المعززة (EDD) بما يتناسب مع طبيعة العلاقة ومستوى مخاطرها. وتشمل هذه الإجراءات، بحسب ما ينطبق:"
            ]
          : [
              "The Bank applies Know Your Customer (KYC), Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) measures proportionate to the nature and risk of each relationship. As applicable, these measures include:"
            ],
        list: isAr
          ? [
              "التحقق من هوية العميل والأشخاص المفوضين، وتحديد المستفيد الحقيقي والأشخاص المسيطرين والتحقق منهم باستخدام مصادر موثوقة.",
              "فهم الغرض من العلاقة المصرفية وطبيعتها المتوقعة، وتقييم مخاطر العميل والمنتج والقناة والمنطقة الجغرافية.",
              "الحصول على معلومات عن مصدر الأموال أو مصدر الثروة والتحقق منها متى استدعت المخاطر أو المتطلبات الرقابية ذلك.",
              "تطبيق ضوابط معززة على الأشخاص المعرضين سياسياً (PEPs) وأفراد عائلاتهم والمقربين منهم، بما في ذلك الموافقات الإدارية المطلوبة والمراقبة المعززة.",
              "تحديث بيانات العملاء وإجراء العناية الواجبة والمراقبة المستمرة طوال مدة العلاقة."
            ]
          : [
              "Verifying customers and authorized persons, and identifying and verifying beneficial owners and controlling persons using reliable sources.",
              "Understanding the purpose and expected nature of the relationship and assessing customer, product, channel and geographic risk.",
              "Obtaining and, where required by risk or regulation, verifying information on source of funds or source of wealth.",
              "Applying enhanced controls to Politically Exposed Persons (PEPs), their family members and close associates, including required management approvals and enhanced monitoring.",
              "Keeping customer information current and conducting ongoing due diligence and monitoring throughout the relationship."
            ]
      },
      {
        title: isAr ? "مراقبة العمليات والعقوبات والإبلاغ:" : "Transaction Monitoring, Sanctions and Reporting:",
        content: isAr
          ? [
              "يطبق البنك أنظمة وضوابط قائمة على المخاطر لمراقبة العمليات وفحص الأطراف، بهدف اكتشاف الأنشطة غير الاعتيادية أو التي قد تنطوي على اشتباه. وقد يشمل الفحص، بحسب طبيعة العملية، العملاء والمستفيدين الحقيقيين والأشخاص المسيطرين والأطراف المقابلة والمستفيدين وبيانات المدفوعات والسفن وغيرها من الأطراف ذات الصلة، مقابل قوائم العقوبات والتدابير التقييدية المحلية والدولية المطبقة.",
              "تخضع التنبيهات للمراجعة والتحقيق وفق الإجراءات المعتمدة، ويتخذ البنك التدابير المناسبة قبل تنفيذ العمليات أو أثناءها أو بعدها بحسب مستوى المخاطر والمتطلبات النظامية. ويتم إبلاغ وحدة جمع المعلومات المالية أو الجهات المختصة، بسرية ودون تنبيه الأطراف المعنية، عن العمليات أو الأنشطة المشبوهة متى كان ذلك مطلوباً بموجب القوانين والتعليمات النافذة."
            ]
          : [
              "The Bank applies risk-based systems and controls to monitor transactions and screen relevant parties for unusual or potentially suspicious activity. Depending on the transaction, screening may cover customers, beneficial owners, controlling persons, counterparties, beneficiaries, payment data, vessels and other relevant parties against applicable domestic and international sanctions lists and restrictive measures.",
              "Alerts are reviewed and investigated under approved procedures, and appropriate measures may be taken before, during or after a transaction according to the risk and applicable requirements. Where required by law or regulation, suspicious transactions or activities are reported confidentially to the Financial Intelligence Unit or other competent authorities, without tipping off the parties concerned."
            ]
      },
      {
        title: isAr ? "العلاقات المصرفية المحظورة والبنوك المراسلة:" : "Prohibited Relationships and Correspondent Banking:",
        content: isAr
          ? [
              "يحظر البنك فتح أو الاحتفاظ بحسابات مجهولة الهوية أو وهمية، أو إنشاء علاقات مع بنوك وهمية، ويتخذ إجراءات معقولة للتأكد من أن البنوك المراسلة التي يتعامل معها لا تسمح لبنوك وهمية باستخدام حساباتها. كما تخضع علاقات البنوك والمؤسسات المالية المراسلة للعناية الواجبة والموافقات والمراقبة المستمرة على أساس المخاطر.",
              "لا يقدم البنك حسابات مراسلة قابلة للدفع من خلالها (Payable-through Accounts) بما يتيح لعملاء أو أطراف ثالثة استخدام حسابات البنك المراسلة بصورة مباشرة. ولا ينفذ البنك، عن علم، معاملات تخالف القوانين أو المتطلبات الرقابية أو التزامات العقوبات المطبقة."
            ]
          : [
              "The Bank prohibits anonymous or fictitious accounts and relationships with shell banks. It takes reasonable measures to ensure that respondent or correspondent institutions with which it deals do not permit shell banks to use their accounts. Relationships with correspondent banks and other financial institutions are subject to risk-based due diligence, approval and ongoing monitoring.",
              "The Bank does not offer payable-through accounts that allow customers or other third parties to access the Bank's correspondent accounts directly. The Bank does not knowingly process transactions that breach applicable laws, regulatory requirements or sanctions obligations."
            ]
      },
      {
        title: isAr ? "التدريب، حفظ السجلات والمراجعة المستقلة:" : "Training, Record Keeping and Independent Assurance:",
        content: isAr
          ? [
              "ينفذ البنك برامج تدريب وتوعية دورية قائمة على المخاطر ومتناسبة مع مهام الموظفين ومسؤولياتهم. وتشمل موضوعات التدريب مكافحة غسل الأموال وتمويل الإرهاب وتمويل الانتشار، وإجراءات التعرف على العملاء والعناية الواجبة والعناية الواجبة المعززة، والمستفيد الحقيقي، والأشخاص المعرضين سياسياً، والعقوبات، ومراقبة العمليات، والإبلاغ عن الأنشطة المشبوهة، ومكافحة الاحتيال والرشوة والفساد، والسلوك المهني، ومتطلبات قانون فاتكا المطبقة.",
              "يحتفظ البنك بسجلات العملاء والعمليات والعناية الواجبة والتحقيقات والبلاغات والتدريب والامتثال بصورة آمنة وللمدد التي تحددها القوانين والتعليمات الرقابية، وبما لا يقل عن الحد الأدنى القانوني المطبق خمس سنوات. كما يتعامل مع المعلومات وفق متطلبات السرية المصرفية وحماية البيانات وأمن المعلومات. يخضع إطار الامتثال ومكافحة الجرائم المالية للمراقبة المستمرة والتقييم الدوري للمخاطر، وللمراجعة المستقلة من إدارة التدقيق الداخلي، ومن المراجع الخارجي أو جهة مستقلة متخصصة متى كان ذلك مطلوباً أو ملائماً، وتتابع الإدارة المعنية معالجة الملاحظات ضمن مدد محددة."
            ]
          : [
              "The Bank provides periodic, risk-based training and awareness appropriate to employees' roles and responsibilities. Training covers AML/CFT and proliferation financing, KYC, CDD and EDD, beneficial ownership, PEPs, sanctions, transaction monitoring, suspicious activity reporting, fraud, bribery and corruption, professional conduct, and applicable FATCA requirements.",
              "Customer, transaction, due diligence, investigation, reporting, training and compliance records are securely retained for the periods prescribed by applicable laws and regulatory instructions and not less than the applicable legal minimum five years. Information is handled in accordance with applicable banking secrecy, data protection and information security requirements.",
              "The compliance and financial crime framework is subject to ongoing monitoring, periodic risk assessment and independent review by Internal Audit, and by the external auditor or another qualified independent party where required or appropriate. Identified findings are tracked to remediation within defined timeframes."
            ]
      },
      {
        title: isAr ? "الامتثال لقانون فاتكا:" : "FATCA Compliance:",
        content: isAr
          ? [
              "بنك بن دول للتمويل الأصغر الإسلامي مسجل بموجب قانون الامتثال الضريبي للحسابات الأجنبية الأمريكي (FATCA) بصفته مؤسسة مالية أجنبية مشاركة منفردة (PFFI).",
              "يطبق البنك إجراءات لتحديد العملاء والحسابات الخاضعة لمتطلبات FATCA، والحصول على الإقرارات الضريبية والوثائق المؤيدة، والوفاء بمتطلبات التوثيق والتصنيف والإبلاغ والاستقطاع وحفظ السجلات متى انطبقت. وقد يُطلب من العملاء تقديم معلومات عن الجنسية أو الإقامة الضريبية أو الوضع الضريبي الأمريكي أو أرقام التعريف الضريبي أو الأشخاص المسيطرين، والإبلاغ عن أي تغير في الظروف قد يؤثر على تصنيفهم."
            ]
          : [
              "Bin Dowal Islamic Microfinance Bank is registered under the United States Foreign Account Tax Compliance Act (FATCA) as a Single Participating Foreign Financial Institution (PFFI).",
              "The Bank maintains procedures to identify customers and accounts subject to FATCA, obtain required tax self-certifications and supporting documents, and meet applicable documentation, classification, reporting, withholding and record-keeping obligations. Customers may be required to provide information on nationality, tax residence, U.S. tax status, taxpayer identification numbers, controlling persons, and any change in circumstances that may affect their FATCA classification."
            ],
        hasGiin: true
      }
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

              {/* Sections mapped without block separations, styled as continuous narrative */}
              {text.sections.map((sec, idx) => (
                <div key={idx} className="pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#262b80] mb-4 flex items-center gap-2">
                    <span className="text-[#ed1c24] text-3xl leading-none">•</span>
                    {sec.title}
                  </h3>
                  
                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className={pIdx > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))}

                  {sec.list && (
                    <ul className="list-disc list-outside ml-6 mr-6 space-y-3 text-lg mt-4 text-[#334155]">
                      {sec.list.map((item, iIdx) => (
                        <li key={iIdx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
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
