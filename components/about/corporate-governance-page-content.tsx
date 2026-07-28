"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { CheckCircle2 } from "lucide-react"

export function CorporateGovernancePageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"

  const text = {
    heroTitle: isAr ? "إدارة المخاطر" : "Risk Management",
    heroSubtitle: isAr
      ? "الإدارة الفعّالة للمخاطر عنصر أساسي في الحوكمة الرشيدة وحماية البنك واستقراره"
      : "Effective risk management is a key element of good governance, protecting the bank and its stability",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    
    docTitle: isAr 
      ? "إدارة المخاطر في بنك بن دول للتمويل الأصغر الإسلامي"
      : "Risk Management in Bin Dowal Islamic Microfinance Bank",

    intro1: isAr
      ? "يؤمن بنك بن دول للتمويل الأصغر الإسلامي بأن الإدارة الفعّالة للمخاطر تمثل عنصراً أساسياً في الحوكمة الرشيدة، وحماية أموال المودعين والعملاء والمساهمين، والمحافظة على سلامة البنك واستقراره واستمرارية أعماله. ولذلك يتبنى البنك إطاراً متكاملاً لإدارة المخاطر، يتناسب مع طبيعة وحجم أعماله، ويرتبط باستراتيجيته وأهدافه وخططه التشغيلية، وفقاً للتشريعات والتعليمات الرقابية النافذة من البنك المركزي اليمني وغيره، وأحكام ومبادئ الشريعة الإسلامية، وأفضل الممارسات المصرفية العالمية."
      : "Bin Dowal Islamic Microfinance Bank believes that effective risk management is an essential element of good governance, protecting the funds of depositors, customers, and shareholders, and maintaining the Bank's soundness, stability, and business continuity. Therefore, the Bank adopts an integrated risk management framework that suits the nature and size of its operations, and is linked to its strategy, objectives, and operational plans, in accordance with the applicable legislation and regulatory instructions of the Central Bank of Yemen and others, the provisions and principles of Islamic Sharia, and best global banking practices.",
    
    intro2: isAr
      ? "يهدف إطار إدارة المخاطر إلى تحقيق التوازن بين النمو والعائد ومستوى المخاطر المقبول، ودعم اتخاذ القرارات السليمة، وتعزيز قدرة البنك على مواجهة الأزمات والتغيرات الاقتصادية والتقنية والتشغيلية، بما يضمن تقديم خدمات مالية إسلامية آمنة ومسؤولة ومستدامة."
      : "The risk management framework aims to balance growth, return, and acceptable risk levels, support sound decision-making, and enhance the Bank's ability to face economic, technical, and operational crises and changes, ensuring the provision of safe, responsible, and sustainable Islamic financial services.",

    sections: [
      {
        title: isAr ? "حوكمة إدارة المخاطر" : "Risk Management Governance",
        content: isAr
          ? "يتولى مجلس الإدارة المسؤولية العليا عن الإشراف على إدارة المخاطر، واعتماد سياسة إدارة المخاطر وإطار شهية المخاطر والحدود المرتبطة بها، ومتابعة مستوى تعرض البنك للمخاطر ومدى كفاية الإجراءات المتخذة لمعالجتها. وتقوم لجنة المخاطر بمراجعة المخاطر الجوهرية ومتابعتها ورفع التوصيات اللازمة إلى مجلس الإدارة، فيما تتولى الإدارة التنفيذية تطبيق السياسات والحدود المعتمدة، وتوفير الموارد اللازمة، ودمج اعتبارات المخاطر في القرارات والعمليات والمنتجات والخدمات والمشروعات الجديدة. وتعمل إدارة المخاطر مع جميع ملاك الخطر في الإدارات والفروع على تحديد المخاطر وقياسها وتقييمها ومراقبتها والإبلاغ عنها، وإعداد سجلات المخاطر ومؤشرات الإنذار المبكر والتقارير الدورية، ومتابعة التجاوزات وخطط المعالجة."
          : "The Board of Directors holds the ultimate responsibility for overseeing risk management, approving the risk management policy, the risk appetite framework and associated limits, and monitoring the Bank's level of risk exposure and the adequacy of actions taken to address them. The Risk Committee reviews material risks, monitors them, and submits necessary recommendations to the Board of Directors, while Executive Management implements approved policies and limits, provides required resources, and integrates risk considerations into decisions, operations, new products, services, and projects. The Risk Management Department works with all risk owners in departments and branches to identify, measure, evaluate, monitor, and report risks, prepare risk registers, early warning indicators, and periodic reports, and monitor breaches and remediation plans."
      },
      {
        title: isAr ? "نطاق إدارة المخاطر" : "Risk Management Scope",
        content: isAr
          ? "تشمل منظومة إدارة المخاطر في البنك مختلف أنواع المخاطر الحالية والمحتملة، ومن أبرزها مخاطر التمويل والائتمان والتعثر والتحصيل والتركز، ومخاطر السيولة والسوق وأسعار الصرف، والمخاطر التشغيلية، ومخاطر تقنية المعلومات والأمن السيبراني والخدمات المصرفية الإلكترونية، ومخاطر الاحتيال والجرائم المالية، ومخاطر الامتثال والمخاطر القانونية والاستراتيجية ومخاطر السمعة. كما تشمل المنظومة مخاطر الأطراف الخارجية والوكلاء ومقدمي الخدمات، ومخاطر استمرارية الأعمال والتعافي من الكوارث، ومخاطر عدم الالتزام بأحكام ومبادئ الشريعة الإسلامية، إضافة إلى المخاطر الناشئة المرتبطة بالتغيرات الاقتصادية والاجتماعية والتقنية والبيئية."
          : "The Bank's risk management system encompasses various current and potential risks, most notably financing, credit, default, collection, and concentration risks; liquidity, market, and exchange rate risks; operational risks; IT, cybersecurity, and electronic banking risks; fraud and financial crime risks; compliance, legal, strategic, and reputational risks. The system also covers external parties, agents, and service providers risks; business continuity and disaster recovery risks; risks of non-compliance with Islamic Sharia principles; as well as emerging risks related to economic, social, technical, and environmental changes."
      },
      {
        title: isAr ? "منهجية إدارة المخاطر" : "Risk Management Methodology",
        content: isAr
          ? "يعتمد البنك منهجية منظمة تبدأ بالتعرف المبكر على المخاطر وتحليل أسبابها واحتمالات وقوعها وآثارها المالية والتشغيلية والقانونية والرقابية والشرعية، ثم تقييم مستوى المخاطر قبل تطبيق الضوابط الرقابية وبعدها، ومقارنة المخاطر المتبقية بحدود شهية المخاطر ومستويات التحمل المعتمدة. وبناءً على نتائج التقييم، يتخذ البنك الإجراءات المناسبة لتجنب المخاطر أو تخفيضها أو نقلها أو قبولها ضمن حدود مدروسة ومعتمدة، مع متابعة تنفيذ الإجراءات التصحيحية والوقائية والتحقق من فاعليتها. ويستخدم البنك في ذلك سجلات المخاطر والحوادث والخسائر التشغيلية، ومؤشرات المخاطر الرئيسية والإنذار المبكر، واختبارات الضغط وتحليل السيناريوهات، وتقييم مخاطر المنتجات والأنظمة الجديدة، وخطط استمرارية الأعمال والتعافي من الكوارث."
          : "The Bank adopts a structured methodology that begins with early risk identification and analysis of its causes, probabilities of occurrence, and its financial, operational, legal, regulatory, and Sharia impacts. It then assesses risk levels before and after applying controls, comparing residual risks with approved risk appetite limits and tolerance levels. Based on evaluation results, the Bank takes appropriate measures to avoid, reduce, transfer, or accept risks within calculated and approved limits, while monitoring the implementation of corrective and preventive measures and verifying their effectiveness. The Bank utilizes risk, incident, and operational loss registers, key risk indicators (KRIs), early warning signals, stress testing, scenario analysis, risk assessment of new products and systems, and business continuity and disaster recovery plans."
      },
      {
        title: isAr ? "ثقافة المخاطر والالتزام الشرعي" : "Risk Culture and Sharia Compliance",
        content: isAr
          ? "يعمل البنك على ترسيخ ثقافة مؤسسية تقوم على النزاهة والشفافية والمساءلة والإبلاغ المبكر عن الأخطاء والحوادث والتجاوزات، ويؤكد أن إدارة المخاطر مسؤولية مشتركة بين مجلس الإدارة والإدارة التنفيذية وجميع الإدارات والفروع والموظفين. كما يلتزم البنك بتعزيز منظومة الحوكمة والرقابة والالتزام الشرعي، والتحقق من توافق منتجاته وخدماته وعقوده ومعاملاته مع أحكام ومبادئ الشريعة الإسلامية، وحماية حقوق العملاء وأصحاب المصلحة. ومن خلال هذا النهج، يسعى بنك بن دول للتمويل الأصغر الإسلامي إلى تعزيز الثقة والاستقرار، وحماية موارده وسمعته، ودعم النمو الآمن والمستدام، والمساهمة بفاعلية في تحقيق الشمول المالي والتنمية الاقتصادية والاجتماعية."
          : "The Bank works to instill an institutional culture based on integrity, transparency, accountability, and early reporting of errors, incidents, and breaches, emphasizing that risk management is a shared responsibility among the Board of Directors, Executive Management, and all departments, branches, and employees. The Bank is also committed to strengthening the governance, control, and Sharia compliance system, verifying that its products, services, contracts, and transactions are consistent with Islamic Sharia principles, and protecting the rights of customers and stakeholders. Through this approach, Bin Dowal Islamic Microfinance Bank seeks to enhance trust and stability, protect its resources and reputation, support safe and sustainable growth, and actively contribute to achieving financial inclusion and socio-economic development."
      }
    ]
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
              
              {/* Introduction Paragraphs */}
              <p className="font-medium text-[#1e293b]">
                {text.intro1}
              </p>
              <p className="font-medium text-[#1e293b]">
                {text.intro2}
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
                </div>
              ))}

            </div>

            {/* Footer Verification */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500 font-cairo">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>{isAr ? "وثيقة رسمية صادرة عن بنك بن دول للتمويل الأصغر الإسلامي" : "Official document issued by Bin Dowal Islamic Microfinance Bank"}</span>
            </div>
          </motion.article>

        </div>
      </section>
    </div>
  )
}
