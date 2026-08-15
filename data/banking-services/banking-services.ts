import { ServicePageData } from "@/types/banking-service-page";

export const bankingServicesData: ServicePageData[] = [
  {
    slug: "business-banking-payroll",
    section: "business",
    title: {
      ar: "خدمة تحويل الرواتب",
      en: "Payroll Transfer Service"
    },
    subtitle: {
      ar: "حوّل رواتب موظفيك بسهولة… وأنجز عمليات الصرف في الوقت المحدد",
      en: "Transfer your employees' salaries easily... and complete disbursements on time"
    },
    heroImage: "/images/company-header-cover.png",
    breadcrumbs: [
      { labelKey: "nav.businessBanking", href: "/business-banking" },
      { label: { ar: "تحويل الرواتب", en: "Payroll Transfer" } },
    ],
    tagline: { ar: "خدمات الأعمال", en: "Business Services" },
    seoDescription: {
      ar: "حوّل رواتب موظفيك إلكترونيًا مع بنك بن دول بسهولة وأمان، واستفد من خدمة سريعة تساعدك على إدارة عمليات صرف الرواتب بكفاءة.",
      en: "Transfer your employees' salaries electronically with Bin Dowal Bank easily and securely, and benefit from a fast service that helps you manage payroll operations efficiently."
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "تتيح لك خدمة تحويل الرواتب عبر بنك بن دول من صرف رواتب الموظفين إلى حساباتهم بطريقة آمنة وسريعة، مع تسهيل إدارة ملفات الرواتب وتقليل الجهد والوقت وتقليل الأخطاء في صرف مستحقات الموظفين عبر المؤسسة.",
        en: "The payroll transfer service through Bin Dowal Bank allows you to disburse employees' salaries to their accounts in a safe and fast manner, facilitating the management of payroll files, reducing effort and time, and minimizing errors in disbursing employee dues across the organization."
      }
    },
    why: {
      title: { ar: "مميزات الخدمة", en: "Service Features" },
      items: [
        {
          id: "payroll-feature-1",
          text: {
            ar: "تحويل الرواتب آليا في الوقت المحدد اما عبر البنك او عبر منصة بن دول اعمال بطريقة سهلة وسريعة.",
            en: "Automatic salary transfer on time either through the bank or via the Bin Dowal Business platform easily and quickly."
          }
        },
        {
          id: "payroll-feature-2",
          text: {
            ar: "تحويل مرتبات بشكل جماعي والى حسابات الموظفين مباشرة.",
            en: "Bulk salary transfer directly to employees' accounts."
          }
        },
        {
          id: "payroll-feature-3",
          text: {
            ar: "تقارير تفصيلية عن عمليات الصرف.",
            en: "Detailed reports on disbursement operations."
          }
        },
        {
          id: "payroll-feature-4",
          text: {
            ar: "توثيق إلكتروني لملفات الرواتب والرجوع الى عمليات التحويل السابقة بكل سهولة.",
            en: "Electronic documentation of payroll files and easy access to previous transfer operations."
          }
        },
        {
          id: "payroll-feature-5",
          text: {
            ar: "تقليل الوقت والجهد في إدارة الرواتب وتاخير نزول مستحقات الموظفين.",
            en: "Reducing time and effort in payroll management and delays in employee dues."
          }
        },
        {
          id: "payroll-feature-6",
          text: {
            ar: "يمكن للموظفين سحب رواتبهم عبر فروع البنك و/او الصرافات الالية و/او عبر فروع بن دول للصرافة من اي مكان وفي اي وقت.",
            en: "Employees can withdraw their salaries through bank branches and/or ATMs and/or through Bin Dowal Exchange branches from anywhere and at any time."
          }
        },
        {
          id: "payroll-feature-7",
          text: {
            ar: "إمكانية استفادة الموظفين من خدمات التمويل وفق سياسة البنك.",
            en: "Possibility for employees to benefit from financing services according to the bank's policy."
          }
        }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        {
          id: "audience-1",
          text: { ar: "المؤسسات والجهات الحكومية.", en: "Government institutions and agencies." }
        },
        {
          id: "audience-2",
          text: { ar: "المنظمات الدولية والمحلية.", en: "International and local organizations." }
        },
        {
          id: "audience-3",
          text: { ar: "الشركات والمؤسسات بمختلف نشاطها.", en: "Companies and institutions of various activities." }
        },
        {
          id: "audience-4",
          text: { ar: "المنشآت الصغيرة والمتوسطة.", en: "Small and medium enterprises." }
        },
        {
          id: "audience-5",
          text: { ar: "الجهات التي ترغب في إدارة رواتب موظفيها إلكترونيًا.", en: "Entities that wish to manage their employees' salaries electronically." }
        }
      ]
    },
    stepsSection: {
      title: { ar: "كيف تحصل على الخدمة؟", en: "How to get the service?" },
      steps: [
        {
          id: "step-1",
          title: { ar: "زيارة أقرب فرع لبنك بن دول.", en: "Visit the nearest branch of Bin Dowal Bank." }
        },
        {
          id: "step-2",
          title: { ar: "تقديم طلب الاشتراك في الخدمة.", en: "Submit a request to subscribe to the service." }
        },
        {
          id: "step-3",
          title: { ar: "استكمال المتطلبات الفنية والإجرائية.", en: "Complete the technical and procedural requirements." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "سهل إدارة رواتب موظفيك", en: "Simplify your employees' payroll management" },
      description: {
        ar: "ابدأ بالاستفادة من خدمة تحويل الرواتب في بنك بن دول، وأنجز عمليات الصرف بسرعة وكفاءة.",
        en: "Start benefiting from the payroll transfer service at Bin Dowal Bank, and complete disbursement operations quickly and efficiently."
      },
      primaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      primaryHref: "/contact"
    }
  },
  {
    slug: "dool-express",
    section: "personal",
    title: {
      ar: "دول إكسبرس",
      en: "Dool Express"
    },
    subtitle: {
      ar: "توصل بلمح البصر أرسل،استلم ووفر وقتك الحوالات أسهل وأسرع مع دول إكسبرس",
      en: "Send and receive in a blink. Save your time with easier and faster transfers via Dool Express."
    },
    heroImage: "/images/partners/local/dool-express.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { label: { ar: "دول إكسبرس", en: "Dool Express" } },
    ],
    tagline: { ar: "التحويلات المحلية", en: "Local Transfers" },
    primaryCta: {
      label: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      href: "/contact",
    },
    seoDescription: {
      ar: "توصل بلمح البصر أرسل،استلم ووفر وقتك الحوالات أسهل وأسرع مع دول إكسبرس.",
      en: "Send and receive in a blink. Save your time with easier and faster transfers via Dool Express.",
    },
    overview: {
      title: { ar: "نبذة عن دول إكسبرس", en: "Overview of Dool Express" },
      description: {
        ar: "توصل بلمح البصر أرسل،استلم ووفر وقتك الحوالات أسهل وأسرع مع دول إكسبرس. نقدم لك خدمة حوالات محلية سريعة وموثوقة.",
        en: "Send and receive in a blink. Save your time with easier and faster transfers via Dool Express. We offer fast and reliable local transfer services.",
      },
    },
    why: {
      title: { ar: "لماذا تختار دول إكسبرس؟", en: "Why Choose Dool Express?" },
      items: [
        { id: "why-dool-1", text: { ar: "سرعة فائقة في الإرسال والاستلام.", en: "Super fast sending and receiving." } },
        { id: "why-dool-2", text: { ar: "توفير الوقت والجهد.", en: "Save time and effort." } },
        { id: "why-dool-3", text: { ar: "موثوقية وأمان عالي.", en: "High reliability and security." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات دول إكسبرس", en: "Dool Express Features" },
      items: [
        {
          id: "fc-dool-1",
          title: { ar: "سرعة التحويل", en: "Transfer Speed" },
          description: { ar: "تصل حوالتك بلمح البصر.", en: "Your transfer arrives in a blink." },
        },
        {
          id: "fc-dool-2",
          title: { ar: "سهولة الاستخدام", en: "Ease of Use" },
          description: { ar: "إجراءات بسيطة وسريعة للإرسال والاستلام.", en: "Simple and fast procedures for sending and receiving." },
        },
        {
          id: "fc-dool-3",
          title: { ar: "توفير الوقت", en: "Time Saving" },
          description: { ar: "وفر وقتك مع خدماتنا السريعة.", en: "Save your time with our fast services." },
        },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-dool-1", text: { ar: "الأفراد الراغبون في إرسال الأموال محلياً.", en: "Individuals looking to send money locally." } },
        { id: "aud-dool-2", text: { ar: "أصحاب الأعمال والشركات.", en: "Business owners and companies." } },
      ],
    },
    requirementsSection: {
      title: { ar: "متطلبات التحويل", en: "Transfer Requirements" },
      items: [
        { id: "req-dool-1", text: { ar: "هوية سارية المفعول.", en: "Valid ID." } },
        { id: "req-dool-2", text: { ar: "رقم هاتف المستفيد.", en: "Beneficiary's phone number." } },
        { id: "req-dool-3", text: { ar: "الاسم الرباعي للمستفيد.", en: "Beneficiary's full name." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات الإرسال والاستلام", en: "Sending and Receiving Steps" },
      steps: [
        {
          id: "step-dool-1",
          title: { ar: "زيارة الفرع أو التطبيق", en: "Visit Branch or App" },
          description: { ar: "تفضل بزيارة أقرب فرع أو استخدم التطبيق.", en: "Visit the nearest branch or use the app." },
        },
        {
          id: "step-dool-2",
          title: { ar: "تقديم البيانات", en: "Provide Details" },
          description: { ar: "قدم بيانات المستفيد والمبلغ.", en: "Provide beneficiary details and amount." },
        },
        {
          id: "step-dool-3",
          title: { ar: "إتمام التحويل", en: "Complete Transfer" },
          description: { ar: "استلم رقم الحوالة وشاركه مع المستفيد.", en: "Receive the transfer number and share it with the beneficiary." },
        },
      ],
    },
    ctaSection: {
      title: { ar: "أرسل حوالتك الآن", en: "Send Your Transfer Now" },
      description: { ar: "استفد من سرعة وسهولة دول إكسبرس.", en: "Take advantage of the speed and ease of Dool Express." },
      primaryLabel: { ar: "ابدأ الآن", en: "Start Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "FAQs" },
      items: [
        {
          id: "faq-dool-1",
          question: { ar: "كم تستغرق الحوالة للوصول؟", en: "How long does the transfer take?" },
          answer: { ar: "تصل الحوالة بلمح البصر وبشكل فوري.", en: "The transfer arrives instantly in a blink." },
        },
        {
          id: "faq-dool-2",
          question: { ar: "ما هي المستندات المطلوبة للاستلام؟", en: "What documents are required for receiving?" },
          answer: { ar: "رقم الحوالة وهوية سارية المفعول.", en: "The transfer number and a valid ID." },
        },
      ],
    },
    relatedServicesKeys: ["unified-network", "current-account"],
  },
  {
    slug: "unified-network",
    section: "personal",
    title: {
      ar: "الشبكة الموحدة",
      en: "Unified Network"
    },
    subtitle: {
      ar: "استلم حوالاتك بكل سهولة من أقرب وكيل معتمد للشبكة الموحدة للأموال",
      en: "Receive your transfers with ease from the nearest authorized agent of the Unified Money Network."
    },
    heroImage: "/images/partners/local/unmoney.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { label: { ar: "الشبكة الموحدة", en: "Unified Network" } },
    ],
    tagline: { ar: "التحويلات المحلية", en: "Local Transfers" },
    primaryCta: {
      label: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      href: "/contact",
    },
    seoDescription: {
      ar: "استلم حوالاتك بكل سهولة من أقرب وكيل معتمد للشبكة الموحدة للأموال.",
      en: "Receive your transfers with ease from the nearest authorized agent of the Unified Money Network.",
    },
    overview: {
      title: { ar: "نبذة عن الشبكة الموحدة", en: "Overview of Unified Network" },
      description: {
        ar: "استلم حوالاتك بكل سهولة من أقرب وكيل معتمد للشبكة الموحدة للأموال. شبكة واسعة من الوكلاء لضمان وصولك السريع والمريح لأموالك.",
        en: "Receive your transfers with ease from the nearest authorized agent of the Unified Money Network. A wide network of agents ensures fast and convenient access to your funds.",
      },
    },
    why: {
      title: { ar: "لماذا تختار الشبكة الموحدة؟", en: "Why Choose the Unified Network?" },
      items: [
        { id: "why-un-1", text: { ar: "انتشار واسع للوكلاء المعتمدين.", en: "Wide distribution of authorized agents." } },
        { id: "why-un-2", text: { ar: "سهولة وسرعة في الاستلام.", en: "Ease and speed of receiving." } },
        { id: "why-un-3", text: { ar: "أمان وموثوقية في المعاملات.", en: "Security and reliability in transactions." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات الشبكة الموحدة", en: "Unified Network Features" },
      items: [
        {
          id: "fc-un-1",
          title: { ar: "شبكة واسعة", en: "Wide Network" },
          description: { ar: "آلاف الوكلاء في خدمتك.", en: "Thousands of agents at your service." },
        },
        {
          id: "fc-un-2",
          title: { ar: "سهولة الوصول", en: "Easy Access" },
          description: { ar: "استلم أموالك من أقرب نقطة إليك.", en: "Receive your money from the nearest point to you." },
        },
        {
          id: "fc-un-3",
          title: { ar: "أمان مالي", en: "Financial Security" },
          description: { ar: "نظام آمن وموثوق للحوالات.", en: "Secure and reliable transfer system." },
        },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-un-1", text: { ar: "الأفراد المستفيدون من الحوالات المحلية.", en: "Individuals receiving local transfers." } },
        { id: "aud-un-2", text: { ar: "التجار وأصحاب الأعمال.", en: "Merchants and business owners." } },
      ],
    },
    requirementsSection: {
      title: { ar: "متطلبات الاستلام", en: "Receiving Requirements" },
      items: [
        { id: "req-un-1", text: { ar: "رقم الحوالة.", en: "Transfer Number." } },
        { id: "req-un-2", text: { ar: "هوية شخصية سارية المفعول.", en: "Valid personal ID." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات الاستلام", en: "Receiving Steps" },
      steps: [
        {
          id: "step-un-1",
          title: { ar: "التوجه للوكيل", en: "Visit Agent" },
          description: { ar: "تفضل بزيارة أقرب وكيل معتمد.", en: "Visit the nearest authorized agent." },
        },
        {
          id: "step-un-2",
          title: { ar: "تقديم البيانات", en: "Provide Details" },
          description: { ar: "أعطِ الوكيل رقم الحوالة والهوية.", en: "Give the agent the transfer number and ID." },
        },
        {
          id: "step-un-3",
          title: { ar: "استلام المبلغ", en: "Receive Amount" },
          description: { ar: "استلم مبلغك فوراً.", en: "Receive your amount immediately." },
        },
      ],
    },
    ctaSection: {
      title: { ar: "استلم حوالتك الآن", en: "Receive Your Transfer Now" },
      description: { ar: "توجه لأقرب وكيل معتمد واستلم حوالتك بسهولة.", en: "Head to the nearest authorized agent and receive your transfer easily." },
      primaryLabel: { ar: "ابحث عن وكيل", en: "Find an Agent" },
      primaryHref: "/atm-and-branches",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "FAQs" },
      items: [
        {
          id: "faq-un-1",
          question: { ar: "كيف أجد أقرب وكيل؟", en: "How do I find the nearest agent?" },
          answer: { ar: "يمكنك البحث في صفحة الفروع والوكلاء على موقعنا.", en: "You can search on the branches and agents page on our website." },
        },
        {
          id: "faq-un-2",
          question: { ar: "هل توجد رسوم على الاستلام؟", en: "Are there receiving fees?" },
          answer: { ar: "لا، استلام الحوالات عبر الشبكة الموحدة مجاني للمستفيد.", en: "No, receiving transfers via the unified network is free for the beneficiary." },
        },
      ],
    },
    relatedServicesKeys: ["dool-express", "current-account"],
  },
  {
    slug: "current-account",
    section: "personal",
    title: {
      ar: "فتح حساب جاري في بنك بن دول في اليمن | الشروط والخطوات بالتفصيل",
      en: "Open a Current Account at Bindowal Bank in Yemen | Detailed Requirements and Steps"
    },
    subtitle: {
      ar: "افتح حساب جاري في بنك بن دول بسهولة وبدون تعقيدات. تعرّف على الشروط والخطوات والمميزات وابدأ إدارة أموالك اليوم.",
      en: "Open your current account at Bindowal Bank easily and without complications. Learn about the requirements, steps, and benefits, and start managing your money today.",
    },
    heroImage: "/images/customer-services/Current-account-removebg-preview.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.currentAccount" },
    ],
    tagline: { ar: "خدمات الأفراد", en: "Personal Banking" },
    primaryCta: {
      label: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      href: "/contact",
    },
    seoDescription: {
      ar: "افتح حساب جاري في بنك بن دول لإدارة أموالك اليومية بسهولة. استمتع بخدمات مصرفية موثوقة، مرونة في الإيداع والسحب، وسهولة الوصول لأموالك في أي وقت.",
      en: "Open a current account at Bindowal Bank to manage your daily finances easily. Enjoy reliable banking, flexible transactions, and access to your money anytime.",
    },
    overview: {
      title: { ar: "ما هو الحساب الجاري؟", en: "What is a Current Account?" },
      description: {
        ar: "هل ما زلت تتعامل بالكاش وتواجه صعوبة في التحويل أو حفظ أموالك؟ فتح حساب جاري اليوم لم يعد خيار… بل ضرورة. مع بنك بن دول، تقدر تفتح حسابك بسهولة وتبدأ تدير أموالك بشكل آمن ومرن كل هذا بدون تعقيدات. الحساب الجاري هو أداة يومية لإدارة فلوسك تتيح لك إيداع وسحب الأموال في أي وقت، وإجراء التحويلات المالية، واستخدام الخدمات الرقمية مثل التطبيقات والمحافظ.",
        en: "Are you still dealing with cash and facing difficulties in transferring or saving your money? Opening a current account today is no longer an option... it is a necessity. With Bindowal Bank, you can open your account easily and start managing your money securely and flexibly, all without complications. A current account is a daily tool for managing your money that allows you to deposit and withdraw funds at any time, perform financial transfers, and use digital services like apps and wallets.",
      },
    },
    why: {
      title: { ar: "لماذا تحتاج حساب جاري اليوم؟", en: "Why do you need a current account today?" },
      items: [
        { id: "why-ca-1", text: { ar: "لتسهيل التحويلات المالية.", en: "To facilitate financial transfers." } },
        { id: "why-ca-2", text: { ar: "لتجنب حمل الكاش ومخاطره.", en: "To avoid carrying cash and its risks." } },
        { id: "why-ca-3", text: { ar: "لإدارة مصاريفك اليومية بشكل أفضل.", en: "To better manage your daily expenses." } },
        { id: "why-ca-4", text: { ar: "للاستفادة من الخدمات المصرفية الرقمية الحديثة.", en: "To benefit from modern digital banking services." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات فتح حساب جاري في بنك بن دول", en: "Benefits of Opening a Current Account at Bindowal Bank" },
      items: [
        {
          id: "fc-ca-1",
          title: { ar: "متوافق مع الشريعة", en: "Sharia Compliant" },
          description: { ar: "كافة المعاملات تتم وفق أحكام الشريعة الإسلامية.", en: "All transactions are performed in accordance with Islamic Sharia principles." },
        },
        {
          id: "fc-ca-2",
          title: { ar: "أمان وسرية", en: "Security & Privacy" },
          description: { ar: "سرية تامة وأمان عالي على كافة أرصدتك وأموالك.", en: "Complete confidentiality and high security for all your balances and funds." },
        },
        {
          id: "fc-ca-3",
          title: { ar: "عملات متعددة", en: "Multi-Currency" },
          description: { ar: "فتح الحساب بعملات متعددة مثل الريال اليمني، الدولار، والريال السعودي.", en: "Open an account in multiple currencies such as YER, USD, and SAR." },
        },
        {
          id: "fc-ca-4",
          title: { ar: "بطاقة صراف آلي", en: "ATM Card" },
          description: { ar: "بطاقة صراف آلي تتيح لك السحب النقدي على مدار 24 ساعة.", en: "An ATM card that allows you to withdraw cash 24/7." },
        },
        {
          id: "fc-ca-5",
          title: { ar: "تحويلات سهلة", en: "Easy Transfers" },
          description: { ar: "إجراء التحويلات المالية الداخلية والخارجية بكل سهولة ويسر.", en: "Perform internal and external financial transfers with ease." },
        },
        {
          id: "fc-ca-6",
          title: { ar: "إدارة رقمية", en: "Digital Management" },
          description: { ar: "إمكانية إدارة حسابك ومتابعة عملياتك عبر تطبيق الهاتف المحمول.", en: "Ability to manage your account and track transactions via the mobile app." },
        },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-ca-1", text: { ar: "الأفراد (مواطنون، مقيمون، مغتربون).", en: "Individuals (citizens, residents, expatriates)." } },
        { id: "aud-ca-2", text: { ar: "أصحاب الأعمال والأنشطة التجارية.", en: "Business owners and commercial activities." } },
        { id: "aud-ca-3", text: { ar: "الموظفون والشباب.", en: "Employees and youth." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط فتح حساب جاري في اليمن", en: "Conditions for Opening a Current Account in Yemen" },
      items: [
        { id: "req-ca-1", text: { ar: "هوية سارية المفعول (بطاقة شخصية أو جواز سفر).", en: "Valid ID (National ID or Passport)." } },
        { id: "req-ca-2", text: { ar: "صورة شخصية حديثة مقاس 4×6.", en: "Recent 4x6 personal photo." } },
        { id: "req-ca-3", text: { ar: "أن لا يقل عمر العميل عن 18 سنة.", en: "The client must be at least 18 years old." } },
        { id: "req-ca-4", text: { ar: "إثبات سكن (فاتورة خدمات أو عقد إيجار).", en: "Proof of residence (utility bill or lease agreement)." } },
        { id: "req-ca-5", text: { ar: "للمقيمين: نسخة من إقامة سارية المفعول.", en: "For residents: a copy of a valid residency permit." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات فتح حساب جاري في بنك بن دول", en: "Steps to Open a Current Account at Bindowal Bank" },
      steps: [
        {
          id: "step-ca-1",
          title: { ar: "التوجه للفرع أو التطبيق", en: "Visit Branch or App" },
          description: { ar: "التوجه إلى أقرب فرع للبنك أو تحميل تطبيق الهاتف المحمول.", en: "Visit the nearest bank branch or download the mobile app." },
        },
        {
          id: "step-ca-2",
          title: { ar: "تقديم البيانات", en: "Provide Information" },
          description: { ar: "تقديم البيانات الأساسية المطلوبة وتعبئة النماذج.", en: "Provide the required basic information and fill out forms." },
        },
        {
          id: "step-ca-3",
          title: { ar: "التحقق والتفعيل", en: "Verification & Activation" },
          description: { ar: "التحقق من الهوية وتفعيل الحساب للاستخدام الفوري.", en: "Verify identity and activate the account for immediate use." },
        },
      ],
    },
    ctaSection: {
      title: { ar: "لا تنتظر…", en: "Don't wait..." },
      description: { ar: "افتح حسابك الجاري الآن مع بنك بن دول واستمتع بتجربة مالية أسهل وأسرع.", en: "Open your current account now with Bindowal Bank and enjoy a faster and easier financial experience." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول الحساب الجاري", en: "Current Account FAQs" },
      items: [
        {
          id: "faq-ca-1",
          question: { ar: "هل يمكن فتح حساب جاري في نفس اليوم؟", en: "Can a current account be opened on the same day?" },
          answer: { ar: "نعم، في أغلب الحالات يتم فتح الحساب خلال وقت قصير بعد استكمال البيانات وتقديم المستندات المطلوبة.", en: "Yes, in most cases the account is opened shortly after completing the data and submitting the required documents." },
        },
        {
          id: "faq-ca-2",
          question: { ar: "هل يمكن فتح حساب جاري بدون وظيفة؟", en: "Can I open a current account without a job?" },
          answer: { ar: "نعم، يمكنك فتح حساب جاري حتى بدون وظيفة، بشرط توفر المستندات الأساسية واستيفاء متطلبات البنك.", en: "Yes, you can open a current account even without a job, provided you have the basic documents and meet the bank's requirements." },
        },
        {
          id: "faq-ca-3",
          question: { ar: "كم الحد الأدنى لفتح حساب جاري؟", en: "What is the minimum balance to open a current account?" },
          answer: { ar: "يمكنك فتح الحساب بمبلغ بسيط ومناسب، مما يجعله خيارًا متاحًا لشريحة واسعة من العملاء.", en: "You can open an account with a simple and suitable amount, making it an accessible option for a wide range of customers." },
        },
        {
          id: "faq-ca-4",
          question: { ar: "هل يمكن استخدام الحساب من خارج اليمن؟", en: "Can the account be used from outside Yemen?" },
          answer: { ar: "نعم، يمكنك إدارة حسابك وإجراء التحويلات من داخل وخارج اليمن عبر التطبيق والخدمات المتاحة.", en: "Yes, you can manage your account and make transfers from inside and outside Yemen via the app and available services." },
        },
        {
          id: "faq-ca-5",
          question: { ar: "هل الحساب الجاري يقدم أرباح أو عوائد؟", en: "Does the current account offer profits or returns?" },
          answer: { ar: "الحساب الجاري مخصص لإدارة الأموال اليومية، لذلك لا يقدم عوائد مالية.", en: "The current account is intended for daily money management, so it does not offer financial returns." },
        },
        {
          id: "faq-ca-6",
          question: { ar: "هل يمكن التحويل لبنوك أخرى؟", en: "Can I transfer to other banks?" },
          answer: { ar: "بالتأكيد، يمكنك إجراء تحويلات مالية داخلية عبر الشبكة الموحدة وخارجية عبر دول إكسبرس بكل سهولة.", en: "Certainly, you can perform internal financial transfers via the unified network and external ones via Dole Express with ease." },
        },
      ],
    },
    relatedServicesKeys: ["savings", "minors", "investment"],
  },
  {
    slug: "savings-account",
    section: "personal",
    seoDescription: {
      ar: "افتح حساب توفير إسلامي بسهولة وابدأ بتنمية مدخراتك وفق مبادئ الشريعة. مزايا متعددة، إجراءات بسيطة، وخدمات مصرفية آمنة تناسب احتياجاتك اليومية.",
      en: "Open an Islamic savings account easily and start growing your savings according to Sharia principles. Multiple benefits, simple procedures, and secure banking services for your daily needs."
    },
    title: {
      ar: "حساب التوفير الإسلامي",
      en: "Islamic Savings Account"
    },
    subtitle: {
      ar: "ادّخر اليوم… وامنح مستقبلك استقراراً أكبر",
      en: "Save today... and give your future greater stability"
    },
    heroImage: "/images/customer-services/Savings.webp",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.savingsAccount"
      }
    ],
    tagline: {
      ar: "خدمات الأفراد",
      en: "Personal Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    overview: {
      title: {
        ar: "نبذة تعريفية",
        en: "Overview"
      },
      description: {
        ar: "حساب التوفير هو الخيار المثالي لمن يرغب في تنمية مدخراته بطريقة آمنة ومتوافقة مع أحكام الشريعة الإسلامية. يمنحك الحساب مرونة في الإيداع والسحب، مع فرصة الحصول على أرباح دورية وفق صيغ التمويل الإسلامي المعتمدة. سواء كنت تدخر لمستقبلك، أو لتعليم أبنائك، أو لمواجهة احتياجات الحياة، فإن حساب التوفير يوفر لك أداة مالية بسيطة وموثوقة لتنظيم مدخراتك وتنميتها.",
        en: "The savings account is the ideal choice for those who wish to grow their savings securely and in compliance with Islamic Sharia. It offers flexible deposits and withdrawals, with periodic profits based on approved Islamic financing structures. Whether saving for the future, education, or daily needs, it provides a simple, reliable tool to manage and grow your funds."
      }
    },
    why: {
      title: {
        ar: "لماذا حساب التوفير؟",
        en: "Why a Savings Account?"
      },
      description: {
        ar: "لأن الادخار ليس مجرد حفظ للأموال، بل هو خطوة ذكية نحو مستقبل مالي أكثر استقراراً.",
        en: "Because saving is not just about keeping money safe; it is a smart step toward a more stable financial future."
      },
      items: [
        {
          id: "why-1",
          text: { ar: "تنظيم مصروفاتك.", en: "Organize your expenses." }
        },
        {
          id: "why-2",
          text: { ar: "بناء احتياطي مالي للمستقبل.", en: "Build a financial reserve for the future." }
        },
        {
          id: "why-3",
          text: { ar: "الاستفادة من عوائد استثمارية مشروعة.", en: "Benefit from legitimate investment returns." }
        }
      ]
    },
    featureCards: {
      title: { ar: "مميزات فتح حساب توفير في بنك بن دول", en: "Benefits of Opening a Savings Account" },
      items: [
        {
          id: "fc-1",
          title: { ar: "تنمية المدخرات", en: "Growth of Savings" },
          description: { ar: "إمكانية الحصول على أرباح وفق صيغ الاستثمار الإسلامية المعتمدة.", en: "Ability to earn profits based on approved Islamic investment structures." }
        },
        {
          id: "fc-2",
          title: { ar: "متوافق مع الشريعة الإسلامية", en: "Sharia-Compliant" },
          description: { ar: "جميع العمليات تتم وفق أحكام الشريعة وتحت إشراف هيئة رقابة شرعية.", en: "All transactions are governed by Sharia law under the supervision of a Sharia board." }
        },
        {
          id: "fc-3",
          title: { ar: "مرونة في الإيداع والسحب", en: "Flexible Transactions" },
          description: { ar: "إمكانية الإيداع والسحب بسهولة وفق شروط الحساب.", en: "Deposit and withdraw funds easily according to account terms." }
        },
        {
          id: "fc-4",
          title: { ar: "سهولة فتح الحساب", en: "Easy Account Opening" },
          description: { ar: "إجراءات بسيطة وسريعة لفتح الحساب.", en: "Simple and fast procedures to set up your account." }
        },
        {
          id: "fc-5",
          title: { ar: "أمان مالي موثوق", en: "Reliable Financial Security" },
          description: { ar: "حماية مدخراتك ضمن نظام مصرفي منظم وآمن.", en: "Protect your savings within a regulated and secure banking system." }
        },
        {
          id: "fc-6",
          title: { ar: "الوصول إلى خدمات إضافية", en: "Access to Additional Services" },
          description: { ar: "الاستفادة من خدمات التحويل، الدفع، والخدمات الرقمية المتاحة.", en: "Benefit from available transfer, payment, and digital banking services." }
        },
        {
          id: "fc-7",
          title: { ar: "متاح للجميع", en: "Available for Everyone" },
          description: { ar: "متاح للمواطنين والمقيمين والمغتربين.", en: "Open to citizens, residents, and expatriates." }
        },
        {
          id: "fc-8",
          title: { ar: "عملات متعددة", en: "Multi-Currency" },
          description: { ar: "فتح الحساب بعملات متعددة: ريال يمني، دولار أمريكي، ريال سعودي.", en: "Open the account in multiple currencies: YER, USD, SAR." }
        }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-1", text: { ar: "الأفراد الراغبون في تنمية مدخراتهم بطريقة آمنة.", en: "Individuals looking to grow their savings securely." } },
        { id: "aud-2", text: { ar: "الموظفون وأصحاب الدخل الشهري.", en: "Employees and salaried individuals." } },
        { id: "aud-3", text: { ar: "أصحاب الأعمال الصغيرة.", en: "Small business owners." } },
        { id: "aud-4", text: { ar: "الشباب الراغبون في بدء ثقافة الادخار.", en: "Youth wanting to start saving habits." } },
        { id: "aud-5", text: { ar: "الأسر التي تسعى لتأمين مستقبل أبنائها.", en: "Families aiming to secure their children's future." } },
        { id: "aud-6", text: { ar: "المغتربون الراغبون في ادخار أموالهم داخل اليمن.", en: "Expatriates wishing to save their money within Yemen." } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط فتح حساب توفير", en: "Account Opening Requirements" },
      note: { ar: "تبدأ المبالغ المودعة بالمشاركة في الاستثمار واحتساب الأرباح عند بلوغ الحدود الدنيا.", en: "Deposited amounts start participating in investments and earning profits once they reach the minimum thresholds." },
      items: [
        { id: "req-1", text: { ar: "هوية سارية: بطاقة شخصية أو جواز سفر.", en: "Valid ID: National ID card or Passport." } },
        { id: "req-2", text: { ar: "صورة شخصية حديثة مقاس 4×6.", en: "Recent personal photo (4x6)." } },
        { id: "req-3", text: { ar: "الموافقة على شروط فتح الحساب وتعبئة النموذج.", en: "Agreement to the account terms and completion of the form." } }
      ],
      table: [
        { id: "tbl-1", label: { ar: "الريال اليمني", en: "Yemeni Rial (YER)" }, value: { ar: "50,000", en: "50,000" } },
        { id: "tbl-2", label: { ar: "الريال السعودي", en: "Saudi Riyal (SAR)" }, value: { ar: "100", en: "100" } },
        { id: "tbl-3", label: { ar: "الدرهم الإماراتي", en: "UAE Dirham (AED)" }, value: { ar: "100", en: "100" } },
        { id: "tbl-4", label: { ar: "الدولار الأمريكي", en: "US Dollar (USD)" }, value: { ar: "50", en: "50" } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات فتح حساب توفير", en: "Steps to Open the Account" },
      note: { ar: "كما يمكن طلب الخدمة عن بُعد عبر التطبيق للعملاء داخل وخارج اليمن.", en: "The service can also be requested remotely via the app for customers inside and outside Yemen." },
      steps: [
        { id: "stp-1", title: { ar: "التوجه إلى أقرب فرع", en: "Visit the nearest branch" } },
        { id: "stp-2", title: { ar: "تقديم البيانات الأساسية", en: "Provide basic information" } },
        { id: "stp-3", title: { ar: "التحقق من الهوية", en: "Verify identity" } },
        { id: "stp-4", title: { ar: "تفعيل الحساب", en: "Activate the account" } }
      ]
    },
    ctaSection: {
      title: { ar: "لا تأجل ادخارك…", en: "Don't delay your saving..." },
      description: { ar: "افتح حساب التوفير الآن واستمتع بخدمات مصرفية موثوقة تساعدك على تنمية أموالك بثقة واطمئنان.", en: "Open a savings account now and enjoy reliable banking services that help you grow your money with confidence." },
      primaryLabel: { ar: "ابدأ الآن", en: "Start Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        {
          id: "faq-1",
          question: { ar: "هل يقدم حساب التوفير أرباح؟", en: "Does the savings account offer profits?" },
          answer: { ar: "نعم، يقدم عوائد سنوية وفق نظام المضاربة الإسلامية وتحت إشراف شرعي.", en: "Yes, it offers annual returns based on the Islamic Mudarabah system under Sharia supervision." }
        },
        {
          id: "faq-2",
          question: { ar: "متى يتم توزيع أرباح حساب التوفير؟", en: "When are savings account profits distributed?" },
          answer: { ar: "يتم توزيع الأرباح في شهر 6 ميلادي من كل عام وفق سياسة البنك.", en: "Profits are distributed in June every year according to the bank's policy." }
        },
        {
          id: "faq-3",
          question: { ar: "هل يمكن السحب من حساب التوفير في أي وقت؟", en: "Can I withdraw from the savings account at any time?" },
          answer: { ar: "نعم، يمكنك السحب والإيداع حسب الشروط المتاحة للحساب.", en: "Yes, you can deposit and withdraw subject to the account terms." }
        },
        {
          id: "faq-4",
          question: { ar: "هل يوجد رسوم على حساب التوفير؟", en: "Are there any fees for the savings account?" },
          answer: { ar: "لا، لا توجد رسوم شهرية أو سنوية على الحساب.", en: "No, there are no monthly or annual fees for the account." }
        },
        {
          id: "faq-5",
          question: { ar: "هل يمكن فتح حساب توفير بدون وظيفة؟", en: "Can I open a savings account without a job?" },
          answer: { ar: "نعم، يمكن فتح الحساب للمستقلين أو غير الموظفين.", en: "Yes, freelancers and non-employees can open an account." }
        },
        {
          id: "faq-6",
          question: { ar: "هل يمكن استقبال الحوالات من خارج اليمن؟", en: "Can I receive international transfers?" },
          answer: { ar: "نعم، يمكنك استقبال الحوالات الدولية مباشرة إلى حسابك.", en: "Yes, you can receive international transfers directly into your account." }
        },
        {
          id: "faq-7",
          question: { ar: "هل حساب التوفير متوافق مع الشريعة الإسلامية؟", en: "Is the savings account Sharia-compliant?" },
          answer: { ar: "نعم، الحساب متوافق مع أحكام الشريعة ويعمل وفق نظام المضاربة.", en: "Yes, the account is Sharia-compliant and operates under the Mudarabah system." }
        },
        {
          id: "faq-8",
          question: { ar: "هل يمكن فتح حساب توفير بمبلغ بسيط؟", en: "Can I open a savings account with a small amount?" },
          answer: { ar: "نعم، يمكنك البدء بمبلغ مناسب، مما يجعل حساب التوفير خيارًا متاحًا للجميع.", en: "Yes, you can start with a suitable amount, making the savings account accessible to everyone." }
        }
      ]
    },
    relatedServicesKeys: [
      "current",
      "investment",
      "minors"
    ]
  },
  {
    slug: "swift-transfers",
    section: "business",
    title: {
      ar: "حوالات السويفت للشركات",
      en: "SWIFT Transfers for Companies"
    },
    subtitle: {
      ar: "بوابتك لإدارة المدفوعات الدولية بثقة عبر شبكة SWIFT العالمية",
      en: "Your gateway to managing international payments with confidence through the global SWIFT network"
    },
    heroImage: "/images/company-header-cover.png",
    breadcrumbs: [
      {
        labelKey: "nav.businessBanking",
        href: "/business-banking"
      },
      {
        labelKey: "nav.swiftTransfers",
        label: {
          ar: "حوالات السويفت",
          en: "SWIFT Transfers"
        }
      }
    ],
    tagline: {
      ar: "بن دول أعمال",
      en: "Business Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "نفّذ حوالات السويفت لشركتك عبر بنك بن دول، وأرسل واستقبل المدفوعات عبر شبكة SWIFT العالمية بأمان ووفق الإجراءات المصرفية المعتمدة.",
      en: "Execute SWIFT transfers for your company through Bin Dowal Bank, and send and receive payments via the global SWIFT network securely and in accordance with approved banking procedures.",
    },
    overview: {
      title: { ar: "حوالات السويفت للشركات", en: "SWIFT Transfers for Companies" },
      description: {
        ar: "عندما تتوسع أعمالك خارج الحدود، تصبح سرعة وأمان التحويلات الدولية جزءاً أساسياً من نجاح أعمالك. يوفر بنك بن دول خدمة حوالات SWIFT التي تتيح لشركتك إرسال واستقبال المدفوعات الدولية عبر شبكة مصرفية عالمية موثوقة، مع الالتزام الكامل بالأنظمة المصرفية ومتطلبات الامتثال.",
        en: "When your business expands beyond borders, the speed and security of international transfers become an essential part of your business success. Bin Dowal Bank provides the SWIFT transfers service that allows your company to send and receive international payments through a trusted global banking network, with full compliance with banking regulations and compliance requirements.",
      },
    },
    why: {
      title: { ar: "لماذا حوالات السويفت؟", en: "Why SWIFT Transfers?" },
      description: {
        ar: "تم تصميم الخدمة لتلبية احتياجات الشركات والمنظمات لإرسال واستقبال الأموال حول العالم، حيث تساعد هذه الخدمة على:",
        en: "The service is designed to meet the needs of companies and organizations to send and receive funds around the world, helping to:",
      },
      items: [
        { id: "why-st-1", text: { ar: "تسريع عمليات الدفع للموردين.", en: "Accelerate payment processes to suppliers." } },
        { id: "why-st-2", text: { ar: "تعزيز ثقة شركائك التجاريين.", en: "Strengthen the trust of your business partners." } },
        { id: "why-st-3", text: { ar: "تقليل مخاطر التحويلات غير الرسمية.", en: "Reduce the risks of informal transfers." } },
        { id: "why-st-4", text: { ar: "تنفيذ المدفوعات عبر شبكة مصرفية معترف بها عالمياً.", en: "Execute payments through a globally recognized banking network." } },
        { id: "why-st-5", text: { ar: "إدارة المدفوعات الدولية بكفاءة وموثوقية.", en: "Manage international payments efficiently and reliably." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات حوالات السويفت", en: "SWIFT Transfer Features" },
      items: [
        {
          id: "fc-st-1",
          title: { ar: "إمكانية إرسال واستقبال التحويلات", en: "Send & Receive Transfers" },
          description: { ar: "الوصول إلى شبكة مصرفية عالمية تتيح تنفيذ المدفوعات واستقبالها من معظم دول العالم.", en: "Access to a global banking network that allows executing and receiving payments from most countries worldwide." }
        },
        {
          id: "fc-st-2",
          title: { ar: "أعلى معايير الأمان", en: "Highest Security Standards" },
          description: { ar: "تنفيذ التحويلات وفق معايير مصرفية معتمدة لضمان حماية بيانات العملاء وسلامة العمليات المالية.", en: "Execute transfers according to approved banking standards to ensure customer data protection and financial operations safety." }
        },
        {
          id: "fc-st-3",
          title: { ar: "ملائمة للشركات", en: "Business-Oriented" },
          description: { ar: "صُممت الخدمة لتلبية احتياجات الشركات التجارية والصناعية والمنظمات التي تعتمد على التحويلات الدولية في أعمالها اليومية.", en: "The service is designed to meet the needs of commercial, industrial companies, and organizations that rely on international transfers in their daily business." }
        },
        {
          id: "fc-st-4",
          title: { ar: "شفافية الرسوم", en: "Transparent Fees" },
          description: { ar: "أسعار صرف وعمولات واضحة وتنافسية دون رسوم خفية.", en: "Clear and competitive exchange rates and commissions with no hidden fees." }
        },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-st-1", text: { ar: "شركات الاستيراد والتصدير.", en: "Import and export companies." } },
        { id: "aud-st-2", text: { ar: "الشركات التجارية التي تتعامل مع موردين أو عملاء خارج اليمن.", en: "Commercial companies dealing with suppliers or clients outside Yemen." } },
        { id: "aud-st-3", text: { ar: "المنشآت الصناعية.", en: "Industrial facilities." } },
        { id: "aud-st-4", text: { ar: "المنظمات المحلية والدولية.", en: "Local and international organizations." } },
        { id: "aud-st-5", text: { ar: "المؤسسات التي تنفذ مدفوعات أو تستقبل تحويلات دولية بشكل دوري.", en: "Institutions that execute payments or receive international transfers periodically." } },
      ],
    },
    requirementsSection: {
      title: { ar: "الشروط والمتطلبات", en: "Requirements & Conditions" },
      note: { ar: "تخضع جميع التحويلات الدولية لمتطلبات الامتثال ومكافحة غسل الأموال وتمويل الإرهاب.", en: "All international transfers are subject to compliance requirements, anti-money laundering, and counter-terrorism financing regulations." },
      items: [
        { id: "req-st-1", text: { ar: "حساب جاري باسم الشركة لدى بنك بن دول.", en: "A current account in the company's name with Bin Dowal Bank." } },
        { id: "req-st-2", text: { ar: "بيانات المستفيد كاملة (الاسم ورقم الحساب أو رقم IBAN عند الحاجة).", en: "Full beneficiary details (name, account number, or IBAN when required)." } },
        { id: "req-st-3", text: { ar: "بيانات البنك المستفيد، بما في ذلك رمز SWIFT.", en: "Beneficiary bank details, including the SWIFT code." } },
        { id: "req-st-4", text: { ar: "المستندات المؤيدة لغرض التحويل وفق سياسة البنك.", en: "Supporting documents for the transfer purpose according to bank policy." } },
        { id: "req-st-5", text: { ar: "استيفاء متطلبات الامتثال ومكافحة غسل الأموال وتمويل الإرهاب.", en: "Meeting compliance, anti-money laundering, and counter-terrorism financing requirements." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات الحصول على الخدمة", en: "Steps to Get the Service" },
      steps: [
        {
          id: "step-st-1",
          title: { ar: "تجهيز البيانات والمستندات", en: "Prepare Details & Documents" },
          description: { ar: "جهّز بيانات المستفيد والمستندات المطلوبة.", en: "Prepare beneficiary details and required documents." }
        },
        {
          id: "step-st-2",
          title: { ar: "تقديم الطلب", en: "Submit Request" },
          description: { ar: "قدّم طلب التحويل في أقرب فرع.", en: "Submit the transfer request at the nearest branch." }
        },
        {
          id: "step-st-3",
          title: { ar: "مراجعة الامتثال", en: "Compliance Review" },
          description: { ar: "يقوم البنك بمراجعة الطلب والتحقق من متطلبات الامتثال.", en: "The bank reviews the request and verifies compliance requirements." }
        },
        {
          id: "step-st-4",
          title: { ar: "تنفيذ الحوالة", en: "Execute Transfer" },
          description: { ar: "يتم تنفيذ الحوالة عبر شبكة SWIFT.", en: "The transfer is executed through the SWIFT network." }
        },
        {
          id: "step-st-5",
          title: { ar: "الإشعار بإتمام العملية", en: "Completion Notification" },
          description: { ar: "تتلقى إشعاراً بإتمام العملية.", en: "You receive a notification upon transaction completion." }
        },
      ],
    },
    ctaSection: {
      title: { ar: "ابدأ اليوم بتنفيذ مدفوعات شركتك الدولية", en: "Start Executing Your Company's International Payments Today" },
      description: { ar: "ابدأ اليوم بتنفيذ مدفوعات شركتك الدولية عبر بنك بن دول، واستفد من شبكة SWIFT العالمية لتحويل الأموال بأمان وموثوقية. تواصل مع أقرب فرع لمعرفة المتطلبات والبدء في تنفيذ عملياتك الدولية.", en: "Start today executing your company's international payments through Bin Dowal Bank, and benefit from the global SWIFT network to transfer funds securely and reliably. Contact the nearest branch to learn about requirements and begin your international operations." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        {
          id: "faq-st-1",
          question: { ar: "ما هي حوالات السويفت؟", en: "What are SWIFT Transfers?" },
          answer: { ar: "هي نظام مالي يتيح إرسال واستقبال التحويلات المالية عبر شبكة SWIFT العالمية.", en: "It is a financial system that allows sending and receiving financial transfers through the global SWIFT network." }
        },
        {
          id: "faq-st-2",
          question: { ar: "هل يمكن للشركات استقبال حوالات دولية عبر السويفت؟", en: "Can companies receive international transfers via SWIFT?" },
          answer: { ar: "نعم، يمكن استقبال التحويلات الدولية إلى حساب الشركة وفق الإجراءات المعتمدة.", en: "Yes, international transfers can be received into the company account according to approved procedures." }
        },
        {
          id: "faq-st-3",
          question: { ar: "ما البيانات المطلوبة لتنفيذ حوالة سويفت؟", en: "What details are required to execute a SWIFT transfer?" },
          answer: { ar: "تحتاج إلى بيانات المستفيد، ورقم الحساب أو IBAN (عند الحاجة)، ورمز SWIFT للبنك المستفيد، بالإضافة إلى المستندات المطلوبة.", en: "You need beneficiary details, account number or IBAN (when required), the beneficiary bank's SWIFT code, and required supporting documents." }
        },
        {
          id: "faq-st-4",
          question: { ar: "هل تخضع حوالات السويفت لإجراءات الامتثال؟", en: "Are SWIFT transfers subject to compliance procedures?" },
          answer: { ar: "نعم، تخضع جميع التحويلات الدولية لمتطلبات الامتثال والأنظمة المصرفية المعمول بها.", en: "Yes, all international transfers are subject to compliance requirements and applicable banking regulations." }
        },
      ],
    },
    relatedServicesKeys: ["business-current-account", "bank-guarantees", "letters-of-credit"],
  },
  {
    slug: "investment-deposit",
    section: "personal",
    title: {
      ar: "الودائع الاستثمارية",
      en: "Investment Deposits"
    },
    subtitle: {
      ar: "حل ادخاري استثماري متوافق مع الضوابط المعتمدة لتنمية أموالك على فترات محددة",
      en: "A structured Sharia-compliant saving and investment solution for growing funds over defined periods"
    },
    heroImage: "/images/customer-services/Investment-deposits.webp",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.investmentDeposit"
      }
    ],
    tagline: {
      ar: "خدمات الأفراد",
      en: "Personal Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "استثمر أموالك بأمان مع الودائع الاستثمارية من بنك بن دول. عوائد مجزية، فترات مرنة، وتوافق تام مع أحكام الشريعة الإسلامية.",
      en: "Invest your money safely with Bindowal Bank's Investment Deposits. Rewarding returns, flexible periods, and full Sharia compliance.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "تمنحك الودائع الاستثمارية وسيلة منظمة لتوظيف فائض السيولة لفترة محددة، مع وضوح أكبر في المدة، آلية الاستثمار، وطريقة توزيع العوائد وفق سياسات البنك.",
        en: "Investment deposits provide a structured way to place surplus funds for a defined period, with clearer visibility over tenure, investment mechanism, and return distribution according to bank policy.",
      },
    },
    why: {
      title: { ar: "لماذا الودائع الاستثمارية؟", en: "Why Investment Deposits?" },
      description: {
        ar: "تساعد الوديعة الاستثمارية على ربط جزء من الأموال بهدف زمني واضح، مما يدعم التخطيط المالي ويقلل الاستخدام العشوائي للرصيد.",
        en: "The investment deposit helps allocate part of your funds to a clear time-based objective, supporting financial planning and reducing unplanned use of liquidity.",
      },
      items: [
        { id: "why-inv-1", text: { ar: "تحويل المدخرات غير المستخدمة إلى خيار استثماري أكثر تنظيمًا.", en: "Turn unused savings into a more structured investment option." } },
        { id: "why-inv-2", text: { ar: "وضوح في مدة الاستثمار وآلية المتابعة حسب سياسة البنك.", en: "Clarity over investment tenure and monitoring process according to bank policy." } },
        { id: "why-inv-3", text: { ar: "دعم التخطيط للأهداف المتوسطة والطويلة مثل التعليم أو المشاريع العائلية.", en: "Support medium and long-term planning such as education or family projects." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات الوديعة الاستثمارية", en: "Investment Deposit Features" },
      items: [
        { id: "fc-inv-1", title: { ar: "خيارات مرنة", en: "Flexible Options" }, description: { ar: "اختيار مدة استثمار مناسبة بحسب الخيارات المتاحة لدى البنك (شهر، 3 أشهر، 6 أشهر، سنة).", en: "Choose a suitable investment period from the available options (1, 3, 6, 12 months)." } },
        { id: "fc-inv-2", title: { ar: "متوافق مع الشريعة", en: "Sharia Compliant" }, description: { ar: "إدارة الوديعة وتوزيع الأرباح وفق صيغ وضوابط مصرفية إسلامية معتمدة كالمرابحة والمضاربة.", en: "Managed under approved Islamic banking structures." } },
        { id: "fc-inv-3", title: { ar: "عوائد مجزية", en: "Rewarding Returns" }, description: { ar: "فرصة للحصول على أرباح دورية تتناسب مع مدة الوديعة وحجم الاستثمار.", en: "Opportunity to earn periodic profits based on deposit amount and tenure." } },
        { id: "fc-inv-4", title: { ar: "أمان مالي", en: "Financial Security" }, description: { ar: "استثمار آمن وموثوق ضمن نظام مصرفي يخضع لرقابة صارمة لضمان حماية حقوقك.", en: "Secure and reliable investment within a strictly regulated banking system." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-inv-1", text: { ar: "الأفراد الراغبون في تنمية أموالهم بأمان.", en: "Individuals seeking to grow their wealth safely." } },
        { id: "aud-inv-2", text: { ar: "أصحاب المدخرات التي لا يحتاجونها في المدى القريب.", en: "Owners of savings not needed in the short term." } },
        { id: "aud-inv-3", text: { ar: "المتقاعدون الباحثون عن دخل إضافي مستقر.", en: "Retirees looking for stable additional income." } },
        { id: "aud-inv-4", text: { ar: "المستثمرون الذين يفضلون الخيارات الاستثمارية منخفضة المخاطر.", en: "Investors preferring low-risk investment options." } },
      ],
    },
    requirementsSection: {
      title: { ar: "متطلبات الوديعة", en: "Deposit Requirements" },
      note: { ar: "لابد من تحديد العملات المتاحة والحد الادنى", en: "The minimum amount to book a deposit varies by currency and selected tenure." },
      items: [
        { id: "req-inv-1", text: { ar: "وجود حساب مصرفي أو فتح حساب أساسي لدى البنك.", en: "An existing bank account or opening a base account." } },
        { id: "req-inv-2", text: { ar: "تحديد مبلغ الوديعة والمدة المناسبة من الخيارات المتاحة.", en: "Select the deposit amount and suitable tenure from available options." } },
        { id: "req-inv-3", text: { ar: "استكمال النماذج والاتفاقيات الخاصة بالوديعة الاستثمارية.", en: "Complete the forms and agreements related to the investment deposit." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات فتح الوديعة", en: "Steps to Open a Deposit" },
      steps: [
        { id: "step-inv-1", title: { ar: "تحديد الهدف والمبلغ", en: "Define Goal and Amount" }, description: { ar: "حدد الغرض من الوديعة والمبلغ الذي ترغب في استثماره.", en: "Define the purpose of the deposit and the amount you want to invest." } },
        { id: "step-inv-2", title: { ar: "اختيار المدة", en: "Select Tenure" }, description: { ar: "راجع الفترات المتاحة واختر المدة الأنسب لاحتياجك المالي.", en: "Review available periods and choose the most suitable tenure." } },
        { id: "step-inv-3", title: { ar: "توقيع النماذج وتفعيل الوديعة", en: "Sign Forms and Activate" }, description: { ar: "استكمل الإجراءات عبر الفرع ليتم تفعيل الوديعة وبدء احتساب الأرباح.", en: "Complete the procedures at the branch to activate the deposit." } },
      ],
    },
    ctaSection: {
      title: { ar: "ابدأ استثمار مدخراتك اليوم", en: "Start Investing Your Savings Today" },
      description: { ar: "لا تدع أموالك مجمدة. افتح وديعة استثمارية الآن واجعلها تعمل من أجلك وتنمو بأمان وتوافق شرعي.", en: "Don't let your money sit idle. Open an investment deposit now and let it grow safely." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-inv-1", question: { ar: "ما هي الفترات المتاحة للودائع الاستثمارية؟", en: "What are the available periods for investment deposits?" }, answer: { ar: "يمكنك ربط الوديعة لفترات مرنة مثل 3 أشهر، 6 أشهر، أو سنة، وتتجدد حسب رغبتك.", en: "You can book the deposit for flexible periods like 3, 6, or 12 months, renewable upon your request." } },
        { id: "faq-inv-2", question: { ar: "هل الودائع مضمونة أو آمنة؟", en: "Are the deposits guaranteed or safe?" }, answer: { ar: "الودائع لدينا آمنة للغاية وتُدار وفق صيغ المضاربة والمرابحة الشرعية التي تحقق أمانًا عاليًا لأموالك.", en: "Our deposits are highly secure, managed under legitimate Mudarabah and Murabahah formulas." } },
        { id: "faq-inv-3", question: { ar: "كيف ومتى يتم توزيع الأرباح؟", en: "How and when are profits distributed?" }, answer: { ar: "توزع الأرباح في نهاية كل فترة استثمارية متفق عليها، وتُضاف مباشرة إلى حسابك الجاري أو التوفير.", en: "Profits are distributed at the end of each agreed investment period and added directly to your account." } },
        { id: "faq-inv-4", question: { ar: "هل يمكنني كسر الوديعة قبل انتهاء المدة؟", en: "Can I break the deposit before the maturity date?" }, answer: { ar: "نعم، يمكنك استرداد مبلغ الوديعة وفق شروط مبينة مسبقًا، وقد يتم التنازل عن جزء من الأرباح في هذه الحالة.", en: "Yes, you can retrieve the deposit amount according to predefined conditions, which may affect profits." } },
        { id: "faq-inv-5", question: { ar: "ما هي العملات المقبولة للودائع؟", en: "What currencies are accepted for deposits?" }, answer: { ar: "نقبل الودائع بالعملات الرئيسية: الريال اليمني، الريال السعودي، والدولار الأمريكي.", en: "We accept deposits in major currencies: Yemeni Rial, Saudi Riyal, and US Dollar." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه الودائع الاستثمارية؟",
        en: "What Do Investment Deposits Offer?"
      },
      subtitle: {
        ar: "تمنحك الودائع الاستثمارية وسيلة منظمة لتوظيف فائض السيولة لفترة محددة، مع وضوح أكبر في المدة، آلية الاستثمار، وطريقة توزيع العوائد وفق سياسات البنك.",
        en: "Investment deposits provide a structured way to place surplus funds for a defined period, with clearer visibility over tenure, investment mechanism, and return distribution according to bank policy."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "اختيار مدة استثمار مناسبة بحسب الخيارات المتاحة لدى البنك.",
            en: "Choose a suitable investment period from the options available at the bank."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "إدارة الوديعة وفق صيغ وضوابط مصرفية إسلامية معتمدة.",
            en: "Manage the deposit under approved Islamic banking structures and policies."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية متابعة الوديعة وبياناتها الأساسية عبر القنوات المناسبة.",
            en: "Ability to follow the deposit and its core details through suitable channels."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسبة للعملاء الذين يرغبون في تنظيم فائض السيولة بدل تركه دون خطة.",
            en: "Suitable for clients who want to organize surplus liquidity rather than leave it unmanaged."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "استثمار منظم لفائض السيولة",
        en: "Structured Investment for Surplus Funds"
      },
      subtitle: {
        ar: "تساعد الوديعة الاستثمارية على ربط جزء من الأموال بهدف زمني واضح، مما يدعم التخطيط المالي ويقلل الاستخدام العشوائي للرصيد.",
        en: "The investment deposit helps allocate part of your funds to a clear time-based objective, supporting financial planning and reducing unplanned use of liquidity."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تحويل المدخرات غير المستخدمة إلى خيار استثماري أكثر تنظيمًا.",
            en: "Turn unused savings into a more structured investment option."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "وضوح في مدة الاستثمار وآلية المتابعة حسب سياسة البنك.",
            en: "Clarity over investment tenure and monitoring process according to bank policy."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "دعم التخطيط للأهداف المتوسطة والطويلة مثل التعليم أو المشاريع العائلية.",
            en: "Support medium- and long-term planning such as education or family projects."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "الاستفادة من خبرة البنك في إدارة الأموال وفق صيغ مصرفية معتمدة.",
            en: "Benefit from the bank’s fund management approach under approved banking structures."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "إجراءات مناسبة لطبيعة الاستثمار",
        en: "Procedures Suitable for Investment Needs"
      },
      subtitle: {
        ar: "يتطلب فتح الوديعة تحديد المبلغ والمدة وتقديم بيانات العميل، ثم توقيع النماذج والاتفاقيات المرتبطة بالخدمة وفق الضوابط المعتمدة.",
        en: "Opening an investment deposit requires selecting the amount and tenure, submitting customer details, and signing the related forms and agreements under the approved policies."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "وجود حساب مصرفي أو فتح حساب أساسي لدى البنك حسب السياسة المتبعة.",
            en: "An existing bank account or opening a base account according to policy."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "تحديد مبلغ الوديعة والمدة المناسبة من الخيارات المتاحة.",
            en: "Select the deposit amount and suitable tenure from available options."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال النماذج والاتفاقيات الخاصة بالوديعة الاستثمارية.",
            en: "Complete the forms and agreements related to the investment deposit."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع للحصول على شرح تفصيلي للخيارات المتاحة.",
            en: "Visit a branch for a detailed explanation of available options."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "التواصل مع خدمة العملاء لمعرفة الحدود والمتطلبات المحدثة.",
            en: "Contact customer service for updated limits and requirements."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "متابعة بيانات الوديعة عبر القنوات الرقمية عند توفر الخدمة.",
            en: "Monitor deposit details through digital channels when available."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "اختر المدة والمبلغ المناسبين",
        en: "Choose the Right Amount and Tenure"
      },
      subtitle: {
        ar: "تبدأ الخدمة بتحديد الهدف والمبلغ، ثم مراجعة الخيارات المتاحة واختيار ما يناسب خطتك المالية قبل تفعيل الوديعة.",
        en: "The service begins by defining the goal and amount, reviewing available options, and selecting what best fits your financial plan before activation."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تحديد الهدف والمبلغ",
            en: "Define Goal and Amount"
          },
          description: {
            ar: "حدد الغرض من الوديعة والمبلغ الذي ترغب في استثماره.",
            en: "Define the purpose of the deposit and the amount you want to invest."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "اختيار المدة",
            en: "Select Tenure"
          },
          description: {
            ar: "راجع الفترات المتاحة واختر المدة الأنسب لاحتياجك.",
            en: "Review available periods and choose the most suitable tenure."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "توقيع النماذج والتفعيل",
            en: "Sign and Activate"
          },
          description: {
            ar: "استكمل النماذج ليقوم البنك بمراجعة الطلب وتفعيل الوديعة.",
            en: "Complete the forms so the bank can review the request and activate the deposit."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "حوّل مدخراتك إلى خطة أوضح",
        en: "Turn Savings into a Clearer Plan"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة خيارات الودائع الاستثمارية المناسبة والضوابط المعتمدة حاليًا.",
        en: "Contact the bank to learn about suitable investment deposit options and currently approved policies."
      }
    },
    relatedServicesKeys: [
      "current",
      "savings",
      "vip"
    ]
  },
  {
    slug: "local-transfers",
    section: "personal",
    title: {
      ar: "التحويلات المحلية",
      en: "Local Transfers"
    },
    subtitle: {
      ar: "حوّل أموالك داخل البلد بسهولة عبر قنوات مصرفية واضحة وآمنة",
      en: "Send money locally through clear, secure, and convenient banking channels"
    },
    heroImage: "/images/bank-update/services.jpg",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.localTransfers"
      }
    ],
    tagline: {
      ar: "الخدمات المالية",
      en: "Financial Services"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل واستقبل الحوالات المحلية بسرعة وأمان مع بنك بن دول. خدمة تحويل موثوقة، رسوم تنافسية، ووصول سهل عبر الفروع والقنوات الرقمية.",
      en: "Send and receive local transfers quickly and safely with Bindowal Bank. Reliable transfer service, competitive fees, and easy access through branches and digital channels.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "تتيح خدمة التحويلات المحلية إرسال واستقبال الأموال بين الحسابات داخل اليمن بطريقة سريعة وآمنة، مع مرونة في اختيار القناة المناسبة.",
        en: "Local transfer services allow you to send and receive funds between accounts within Yemen quickly and safely, with flexibility in choosing the appropriate channel.",
      },
    },
    why: {
      title: { ar: "لماذا التحويلات المحلية عبر بنك بن دول؟", en: "Why Local Transfers with Bindowal Bank?" },
      description: {
        ar: "خدمة تحويل موثوقة تلبي احتياجاتك اليومية والعائلية بأسرع وقت ممكن وبإجراءات مبسطة.",
        en: "A reliable transfer service that meets your daily and family needs as quickly as possible with simplified procedures.",
      },
      items: [
        { id: "why-lt-1", text: { ar: "تنفيذ التحويلات بسرعة ودقة عبر شبكة فروع البنك.", en: "Execute transfers quickly and accurately through the bank's branch network." } },
        { id: "why-lt-2", text: { ar: "رسوم تنافسية وشفافة دون تكاليف خفية.", en: "Competitive and transparent fees with no hidden costs." } },
        { id: "why-lt-3", text: { ar: "إمكانية التحويل عبر قنوات رقمية متاحة.", en: "Ability to transfer via available digital channels." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات خدمة التحويلات المحلية", en: "Local Transfer Features" },
      items: [
        { id: "fc-lt-1", title: { ar: "سرعة التنفيذ", en: "Fast Execution" }, description: { ar: "تنفيذ التحويلات المحلية بسرعة عبر شبكة البنك الواسعة.", en: "Execute local transfers quickly through the bank's wide network." } },
        { id: "fc-lt-2", title: { ar: "أمان عالٍ", en: "High Security" }, description: { ar: "حماية كاملة لمعاملاتك المالية ضمن نظام مصرفي آمن ومنظم.", en: "Full protection of your financial transactions within a secure and regulated banking system." } },
        { id: "fc-lt-3", title: { ar: "قنوات متعددة", en: "Multiple Channels" }, description: { ar: "إمكانية التحويل عبر الفروع أو القنوات الرقمية المتاحة.", en: "Transfer through branches or available digital channels." } },
        { id: "fc-lt-4", title: { ar: "رسوم تنافسية", en: "Competitive Fees" }, description: { ar: "تعرفة تنافسية ومناسبة لجميع أحجام التحويلات.", en: "Competitive rates suitable for all transfer amounts." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-lt-1", text: { ar: "الأفراد الراغبون في إرسال أموال لأسرهم.", en: "Individuals wishing to send money to their families." } },
        { id: "aud-lt-2", text: { ar: "أصحاب الأعمال الذين يحتاجون تحويلات تجارية.", en: "Business owners needing commercial transfers." } },
        { id: "aud-lt-3", text: { ar: "المغتربون داخل البلاد.", en: "Expatriates within the country." } },
      ],
    },
    requirementsSection: {
      title: { ar: "متطلبات خدمة التحويل", en: "Transfer Service Requirements" },
      items: [
        { id: "req-lt-1", text: { ar: "وجود حساب مصرفي نشط لدى بنك بن دول.", en: "An active bank account with Bindowal Bank." } },
        { id: "req-lt-2", text: { ar: "بيانات المستفيد: الاسم الكامل ورقم الحساب.", en: "Beneficiary details: full name and account number." } },
        { id: "req-lt-3", text: { ar: "تحديد المبلغ المراد تحويله.", en: "Specify the amount to be transferred." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات إجراء التحويل المحلي", en: "Steps to Make a Local Transfer" },
      steps: [
        { id: "step-lt-1", title: { ar: "تحديد بيانات المستفيد", en: "Enter Beneficiary Details" }, description: { ar: "أدخل اسم المستفيد ورقم حسابه بدقة.", en: "Enter the beneficiary's name and account number accurately." } },
        { id: "step-lt-2", title: { ar: "تحديد المبلغ وإتمام التحويل", en: "Enter Amount and Confirm" }, description: { ar: "حدد المبلغ وأكد العملية عبر الفرع أو القناة الرقمية.", en: "Enter the amount and confirm the transaction via branch or digital channel." } },
        { id: "step-lt-3", title: { ar: "استلام التأكيد", en: "Receive Confirmation" }, description: { ar: "ستصلك رسالة تأكيد فور اكتمال عملية التحويل.", en: "You will receive a confirmation once the transfer is complete." } },
      ],
    },
    ctaSection: {
      title: { ar: "حوّل أموالك الآن بكل سهولة", en: "Transfer Your Money Now with Ease" },
      description: { ar: "استخدم خدمة التحويلات المحلية من بنك بن دول وأرسل أموالك بأمان وسرعة في أي وقت.", en: "Use Bindowal Bank's local transfer service and send your money safely and quickly at any time." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-lt-1", question: { ar: "كم تستغرق عملية التحويل المحلي؟", en: "How long does a local transfer take?" }, answer: { ar: "تتم معظم التحويلات المحلية خلال نفس يوم العمل أو بشكل فوري عند توفر الخدمة.", en: "Most local transfers are completed within the same business day or instantly when available." } },
        { id: "faq-lt-2", question: { ar: "هل يمكن التحويل لأي بنك داخل اليمن؟", en: "Can I transfer to any bank within Yemen?" }, answer: { ar: "نعم، يمكن التحويل لحسابات في معظم البنوك العاملة في اليمن عبر نظام المقاصة.", en: "Yes, you can transfer to accounts in most banks operating in Yemen through the clearing system." } },
        { id: "faq-lt-3", question: { ar: "هل هناك حد أقصى لمبلغ التحويل؟", en: "Is there a maximum transfer limit?" }, answer: { ar: "تتفاوت حدود التحويل حسب نوع الحساب والقناة المستخدمة. للاستفسار تواصل مع خدمة العملاء.", en: "Transfer limits vary based on account type and channel used. Contact customer service for details." } },
        { id: "faq-lt-4", question: { ar: "ما هي رسوم التحويل المحلي؟", en: "What are the local transfer fees?" }, answer: { ar: "الرسوم تنافسية ومبينة بوضوح قبل إتمام عملية التحويل. لا توجد رسوم خفية.", en: "Fees are competitive and clearly displayed before completing the transfer. No hidden charges." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه التحويلات المحلية؟",
        en: "What Do Local Transfers Offer?"
      },
      subtitle: {
        ar: "تساعدك خدمة التحويلات المحلية على إرسال الأموال داخل شبكة البنك أو إلى جهات محلية متاحة، مع إمكانية متابعة العملية وتوثيقها بحسب القنوات المعتمدة.",
        en: "Local transfers help you send funds within the bank network or to available local destinations, with the ability to track and document the transaction through approved channels."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إرسال الأموال محليًا للأفراد أو المستفيدين وفق بيانات التحويل المطلوبة.",
            en: "Send funds locally to individuals or beneficiaries using the required transfer details."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "إمكانية تنفيذ التحويل عبر الفرع أو القنوات الرقمية المتاحة بحسب نوع الخدمة.",
            en: "Execute transfers through branches or available digital channels depending on the service type."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "تزويد العميل بمرجع أو إشعار يساعد على متابعة حالة التحويل.",
            en: "Provide a reference or notification to help the customer follow the transfer status."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مرونة في استخدام الخدمة للاحتياجات الشخصية والعائلية والتجارية الصغيرة.",
            en: "Flexible use for personal, family, and small business needs."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "إرسال محلي أسرع وأكثر تنظيمًا",
        en: "Faster, More Organized Local Sending"
      },
      subtitle: {
        ar: "تقلل الخدمة الحاجة إلى حمل النقد، وتمنحك طريقة موثقة لإيصال الأموال ومتابعة العمليات اليومية أو الطارئة.",
        en: "The service reduces the need to carry cash and gives you a documented way to send funds and follow daily or urgent transactions."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "إنجاز الالتزامات المالية المحلية بطريقة أسهل من الدفع النقدي المباشر.",
            en: "Fulfill local financial commitments more easily than direct cash payments."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تتبع الحوالة من خلال بيانات العملية أو رقم المرجع.",
            en: "Track the transfer through transaction details or reference number."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "دعم احتياجات الأسرة والعملاء عند إرسال مبالغ متكررة داخل البلد.",
            en: "Support family and customer needs when sending recurring amounts locally."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تجربة أكثر أمانًا وتنظيمًا مع الاحتفاظ بسجل للعمليات.",
            en: "A safer and more organized experience with transaction records."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "بيانات المستفيد أساس العملية",
        en: "Beneficiary Details Are Essential"
      },
      subtitle: {
        ar: "لإتمام التحويل المحلي، يحتاج العميل إلى توفير بيانات المستفيد والمبلغ والغرض عند الحاجة، مع الالتزام بمتطلبات التحقق المعتمدة.",
        en: "To complete a local transfer, the customer provides beneficiary details, amount, and purpose when required, while following approved verification requirements."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "بيانات المستفيد مثل الاسم ورقم الحساب أو رقم الهاتف حسب نوع التحويل.",
            en: "Beneficiary details such as name and account number or mobile number depending on transfer type."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "هوية أو بيانات تحقق للمرسل بحسب القناة والمبلغ.",
            en: "Sender identification or verification details depending on channel and amount."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "توفر الرصيد والالتزام بالحدود والرسوم المعتمدة إن وجدت.",
            en: "Available balance and compliance with approved limits and fees where applicable."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "الفروع المصرفية لإجراء التحويل مع موظف الخدمة.",
            en: "Bank branches to process the transfer with a service officer."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "الموبايل البنكي أو الإنترنت البنكي عند دعم الخدمة.",
            en: "Mobile or internet banking when the service is supported."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "خدمة العملاء للاستعلام عن حالة التحويل والمتطلبات.",
            en: "Customer service for transfer status and requirements inquiries."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "نفّذ التحويل بثلاث خطوات",
        en: "Complete the Transfer in Three Steps"
      },
      subtitle: {
        ar: "تعتمد تجربة التحويل على إدخال بيانات دقيقة، مراجعة التفاصيل، ثم تأكيد العملية والاحتفاظ بالإشعار أو رقم المرجع.",
        en: "The transfer experience depends on entering accurate details, reviewing them, confirming the transaction, and keeping the receipt or reference number."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "إدخال بيانات المستفيد",
            en: "Enter Beneficiary Details"
          },
          description: {
            ar: "أدخل اسم المستفيد ووسيلة الاستلام أو الحساب المطلوب.",
            en: "Enter the beneficiary name and receiving method or required account."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "مراجعة المبلغ والتفاصيل",
            en: "Review Amount and Details"
          },
          description: {
            ar: "راجع المبلغ والرسوم إن وجدت وتأكد من صحة البيانات.",
            en: "Review the amount and any fees, and verify the details."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "تأكيد التحويل",
            en: "Confirm the Transfer"
          },
          description: {
            ar: "أكّد العملية واحتفظ برقم المرجع للمتابعة عند الحاجة.",
            en: "Confirm the transaction and keep the reference number for follow-up."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "أرسل أموالك محليًا بثقة",
        en: "Send Locally with Confidence"
      },
      description: {
        ar: "ابدأ طلب التحويل عبر القناة المناسبة أو تواصل مع البنك لمعرفة الحدود والمتطلبات المحدثة.",
        en: "Start the transfer through the suitable channel or contact the bank for updated limits and requirements."
      }
    },
    relatedServicesKeys: [
      "international-transfer",
      "fast-money",
      "mobile-banking"
    ]
  },
  {
    slug: "international-transfers",
    section: "personal",
    title: {
      ar: "التحويلات الدولية",
      en: "International Transfers"
    },
    subtitle: {
      ar: "أرسل واستقبل أموالك حول العالم… بسهولة وثقة",
      en: "Send and receive your money around the world... with ease and confidence"
    },
    heroImage: "/images/business-services/SWIFT-transfer.webp",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.intlTransfers"
      }
    ],
    tagline: {
      ar: "خدمات الأفراد",
      en: "Personal Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل واستقبل الأموال من خارج اليمن بسهولة وأمان عبر خدمات التحويلات الدولية من بنك بن دول. حلول مصرفية موثوقة، إجراءات مرنة، وتحويلات دولية بسرعة وكفاءة.",
      en: "Send and receive money from outside Yemen easily and securely with Bindowal Bank's international transfer services. Reliable banking solutions, flexible procedures, and fast, efficient international transfers.",
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "تتيح لك خدمة التحويلات الدولية تنفيذ عمليات إرسال واستقبل الأموال بين اليمن ومختلف دول العالم عبر شبكة تحويلات مصرفية موثوقة. وتوفر الخدمة حلولًا مرنة وآمنة لتحويل الأموال الدولية، مع سرعة في التنفيذ وإجراءات مبسطة تساعد العملاء على إدارة معاملاتهم المالية بكل سهولة. سواء كنت ترغب في إرسال الأموال لعائلتك، أو استلام حوالات من الخارج، أو تنفيذ معاملات تجارية دولية، فإن خدمات التحويلات الدولية تمنحك وسيلة موثوقة وآمنة لإدارة تحويلاتك المالية.",
        en: "The international transfers service allows you to send and receive funds between Yemen and various countries around the world through a reliable banking transfer network. The service provides flexible and secure solutions for international money transfers, with fast execution and simplified procedures that help customers manage their financial transactions with ease. Whether you want to send money to your family, receive remittances from abroad, or execute international business transactions, international transfer services offer you a reliable and secure way to manage your financial transfers.",
      },
    },
    why: {
      title: { ar: "لماذا تختار التحويلات الدولية؟", en: "Why Choose International Transfers?" },
      description: {
        ar: "لأن تحويل الأموال دوليًا يحتاج إلى السرعة، والأمان، والموثوقية.",
        en: "Because transferring money internationally requires speed, security, and reliability.",
      },
      items: [
        { id: "why-it-1", text: { ar: "إرسال الأموال إلى مختلف دول العالم", en: "Send money to various countries worldwide" } },
        { id: "why-it-2", text: { ar: "استقبل الحوالات الدولية بسهولة", en: "Receive international remittances easily" } },
        { id: "why-it-3", text: { ar: "تنفيذ التحويلات عبر قنوات مصرفية موثوقة", en: "Execute transfers through reliable banking channels" } },
        { id: "why-it-4", text: { ar: "إدارة معاملاتك المالية الدولية بأمان", en: "Manage your international financial transactions securely" } },
        { id: "why-it-5", text: { ar: "الاستفادة من إجراءات واضحة وسهلة", en: "Benefit from clear and simple procedures" } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات التحويلات الدولية في بنك بن دول", en: "Features of International Transfers at Bindowal Bank" },
      items: [
        {
          id: "fc-it-1",
          title: { ar: "تحويلات دولية آمنة", en: "Secure International Transfers" },
          description: { ar: "تنفيذ عمليات التحويل عبر أنظمة مصرفية موثوقة وآمنة.", en: "Executing transfer operations through reliable and secure banking systems." }
        },
        {
          id: "fc-it-2",
          title: { ar: "سرعة في تنفيذ الحوالات", en: "Fast Remittance Execution" },
          description: { ar: "إنجاز التحويلات خلال وقت مناسب وفق إجراءات التحويل الدولية.", en: "Completing transfers within an appropriate time frame in accordance with international transfer procedures." }
        },
        {
          id: "fc-it-3",
          title: { ar: "استقبل الحوالات من الخارج", en: "Receive Remittances from Abroad" },
          description: { ar: "إمكانية استلام الأموال من مختلف دول العالم بسهولة.", en: "The ability to receive funds from various countries around the world with ease." }
        },
        {
          id: "fc-it-4",
          title: { ar: "إجراءات مرنة وواضحة", en: "Flexible & Clear Procedures" },
          description: { ar: "خطوات مبسطة تساعد العملاء على تنفيذ التحويلات بسهولة.", en: "Simplified steps that help customers execute transfers easily." }
        },
        {
          id: "fc-it-5",
          title: { ar: "دعم للأفراد والأعمال", en: "Support for Individuals & Businesses" },
          description: { ar: "مناسبة للتحويلات الشخصية والتجارية.", en: "Suitable for both personal and commercial transfers." }
        },
        {
          id: "fc-it-6",
          title: { ar: "خدمة موثوقة للمغتربين", en: "Reliable Service for Expatriates" },
          description: { ar: "حلول مناسبة للمغتربين الراغبين في إرسال الأموال إلى اليمن أو استلامها.", en: "Convenient solutions for expatriates wishing to send money to Yemen or receive it." }
        },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-it-1", text: { ar: "المغتربون الراغبون في تحويل الأموال إلى اليمن", en: "Expatriates wishing to transfer money to Yemen" } },
        { id: "aud-it-2", text: { ar: "الأفراد الذين يستقبلون حوالات من الخارج", en: "Individuals receiving remittances from abroad" } },
        { id: "aud-it-3", text: { ar: "أصحاب الأعمال والتجار", en: "Business owners and merchants" } },
        { id: "aud-it-4", text: { ar: "العملاء الذين لديهم التزامات مالية دولية", en: "Customers with international financial obligations" } },
        { id: "aud-it-5", text: { ar: "الأفراد الباحثون عن وسيلة تحويل آمنة وموثوقة", en: "Individuals looking for a secure and reliable transfer method" } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط تنفيذ التحويلات الدولية", en: "Requirements for Executing International Transfers" },
      items: [
        { id: "req-it-1", text: { ar: "هوية سارية", en: "Valid ID" } },
        { id: "req-it-2", text: { ar: "بيانات المستفيد بشكل صحيح", en: "Correct beneficiary details" } },
        { id: "req-it-3", text: { ar: "توفر معلومات التحويل المطلوبة حسب نوع الخدمة", en: "Availability of required transfer information depending on the service type" } },
        { id: "req-it-4", text: { ar: "الالتزام بإجراءات وأنظمة التحويل الدولية", en: "Compliance with international transfer procedures and regulations" } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات تنفيذ التحويلات الدولية", en: "Steps to Execute International Transfers" },
      steps: [
        {
          id: "step-it-1",
          title: { ar: "زيارة أقرب فرع", en: "Visit the Nearest Branch" },
          description: { ar: "زيارة أقرب فرع للبنك لتقديم طلب التحويل.", en: "Visit the nearest bank branch to submit the transfer request." }
        },
        {
          id: "step-it-2",
          title: { ar: "تقديم بيانات المستفيد والتحويل", en: "Provide Beneficiary & Transfer Details" },
          description: { ar: "تقديم بيانات المستفيد كاملة وصحيحة مع وثائق الهوية والتحويل المطلوبة.", en: "Provide complete and correct beneficiary details along with required ID and transfer documents." }
        },
        {
          id: "step-it-3",
          title: { ar: "تحديد مبلغ التحويل والعملة المطلوبة", en: "Specify Transfer Amount & Currency" },
          description: { ar: "تحديد المبلغ المراد تحويله واختيار العملة المناسبة للعملية.", en: "Specify the amount to be transferred and choose the appropriate currency for the transaction." }
        },
        {
          id: "step-it-4",
          title: { ar: "تنفيذ العملية واستلام إشعار التحويل", en: "Execute Transaction & Receive Receipt" },
          description: { ar: "إتمام عملية التحويل بواسطة الموظف واستلام إشعار رسمي يحتوي على الرقم المرجعي للتحويل.", en: "Complete the transfer process by the officer and receive an official receipt containing the transfer reference number." }
        },
      ],
    },
    ctaSection: {
      title: { ar: "ابدأ تحويلاتك الدولية اليوم", en: "Start Your International Transfers Today" },
      description: { ar: "أرسل واستقبل أموالك بثقة عبر خدمات التحويلات الدولية من بنك بن دول، واستفد من حلول مصرفية موثوقة تلبي احتياجاتك المالية داخل اليمن وخارجه", en: "Send and receive your money with confidence through Bindowal Bank's international transfer services, and benefit from reliable banking solutions that meet your financial needs inside and outside Yemen." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول التحويلات الدولية", en: "International Transfers FAQs" },
      items: [
        {
          id: "faq-it-1",
          question: { ar: "هل يمكن إرسال الأموال إلى أي دولة؟", en: "Can money be sent to any country?" },
          answer: { ar: "يعتمد ذلك على شبكة التحويلات والدول المتاحة ضمن الخدمة.", en: "This depends on the transfer network and the countries available within the service." }
        },
        {
          id: "faq-it-2",
          question: { ar: "كم مدة إجراءات التحويلات الدولية؟", en: "How long do international transfer procedures take?" },
          answer: { ar: "تختلف مدة التحويل بحسب الدولة وإجراءات التحويل الدولية.", en: "The transfer duration varies depending on the country and international transfer procedures." }
        },
        {
          id: "faq-it-3",
          question: { ar: "هل يمكن استقبال حوالات من الخارج؟", en: "Can I receive remittances from abroad?" },
          answer: { ar: "نعم، يمكن استقبال الحوالات الدولية عبر الخدمة.", en: "Yes, international remittances can be received through the service." }
        },
        {
          id: "faq-it-4",
          question: { ar: "هل التحويلات الدولية آمنة؟", en: "Are international transfers secure?" },
          answer: { ar: "نعم، تتم جميع العمليات عبر أنظمة مصرفية آمنة وموثوقة.", en: "Yes, all transactions are processed through secure and reliable banking systems." }
        },
        {
          id: "faq-it-5",
          question: { ar: "هل الخدمة متاحة للمغتربين؟", en: "Is the service available for expatriates?" },
          answer: { ar: "نعم، الخدمة مناسبة للمغتربين والعملاء داخل وخارج اليمن.", en: "Yes, the service is suitable for expatriates and customers inside and outside Yemen." }
        },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه التحويلات الدولية؟",
        en: "What Do International Transfers Offer?"
      },
      subtitle: {
        ar: "تتيح التحويلات الدولية إرسال الأموال إلى خارج البلد أو استقبالها وفق الشبكات والقنوات المتاحة، مع التركيز على دقة بيانات المستفيد والامتثال للمتطلبات المصرفية.",
        en: "International transfers allow funds to be sent abroad or received through available networks and channels, with emphasis on accurate beneficiary details and banking compliance requirements."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إرسال مبالغ إلى مستفيدين خارج البلد عبر القنوات المعتمدة.",
            en: "Send funds to beneficiaries outside the country through approved channels."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "توفير بيانات تحويل موثقة تساعد على المتابعة والاستعلام.",
            en: "Provide documented transfer details for tracking and inquiries."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "دعم احتياجات التعليم والعلاج والأسرة والتجارة الصغيرة بحسب السياسات.",
            en: "Support education, healthcare, family, and small trade needs according to policy."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مراجعة بيانات المستفيد والعملة والغرض قبل تنفيذ العملية.",
            en: "Review beneficiary details, currency, and purpose before execution."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "ربط مالي أوضح خارج الحدود",
        en: "Clearer Financial Connection Across Borders"
      },
      subtitle: {
        ar: "تساعد الخدمة العملاء على تلبية الالتزامات الدولية بطريقة منظمة، مع تقليل الاعتماد على الطرق غير الرسمية في إرسال الأموال.",
        en: "The service helps customers meet international obligations in an organized way while reducing reliance on informal sending methods."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "إرسال الأموال للأهل أو الشركاء خارج البلد بصورة موثقة.",
            en: "Send funds to family or partners abroad with documented records."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "مناسبة للرسوم الدراسية والمصاريف العلاجية والالتزامات الخارجية.",
            en: "Suitable for tuition, medical expenses, and external obligations."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "إمكانية الاستعلام عن حالة التحويل باستخدام بيانات العملية.",
            en: "Ability to inquire about transfer status using transaction details."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تجربة مصرفية أكثر التزامًا بمتطلبات التحقق ومكافحة المخاطر.",
            en: "A banking experience aligned with verification and risk-control requirements."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "بيانات دقيقة لضمان معالجة أفضل",
        en: "Accurate Details for Better Processing"
      },
      subtitle: {
        ar: "تعتمد سرعة ودقة التحويل الدولي على اكتمال بيانات المستفيد والبنك المستلم والغرض من التحويل، إضافة إلى الالتزام بالمتطلبات النظامية.",
        en: "The accuracy and speed of international transfers depend on complete beneficiary, receiving bank, and transfer purpose details, along with compliance requirements."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "بيانات المستفيد الكاملة وبلد الاستلام ورقم الحساب أو رقم الآيبان عند الحاجة.",
            en: "Full beneficiary details, receiving country, and account or IBAN number when required."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "بيانات البنك المستلم مثل الاسم والرمز المصرفي عند الحاجة.",
            en: "Receiving bank details such as name and bank code when required."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "توضيح الغرض من التحويل وتقديم المستندات الداعمة عند طلبها.",
            en: "State the transfer purpose and provide supporting documents when requested."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع لإدخال بيانات التحويل ومراجعتها مع الموظف المختص.",
            en: "Visit a branch to enter and review transfer details with a service officer."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "القنوات الرقمية المتاحة عند دعم التحويل الدولي.",
            en: "Available digital channels when international transfer is supported."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "خدمة العملاء للاستعلام عن المتطلبات، المدة المتوقعة، وحالة العملية.",
            en: "Customer service for requirements, expected processing time, and status inquiries."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "جهّز البيانات قبل التقديم",
        en: "Prepare Details Before Applying"
      },
      subtitle: {
        ar: "كلما كانت بيانات المستفيد والبنك المستلم أكثر اكتمالًا، كانت معالجة الطلب أوضح وأسهل في المتابعة.",
        en: "The more complete the beneficiary and receiving bank details are, the clearer and easier the request becomes to process and follow up."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تجهيز بيانات المستفيد",
            en: "Prepare Beneficiary Details"
          },
          description: {
            ar: "اجمع بيانات المستفيد والبنك المستلم والعملة والغرض من التحويل.",
            en: "Collect beneficiary, receiving bank, currency, and transfer purpose details."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم الطلب والمراجعة",
            en: "Submit and Review"
          },
          description: {
            ar: "قدّم الطلب عبر القناة المناسبة وراجع البيانات بدقة قبل التأكيد.",
            en: "Submit the request through the suitable channel and carefully review details before confirmation."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "استلام المرجع والمتابعة",
            en: "Receive Reference and Track"
          },
          description: {
            ar: "احتفظ برقم العملية لمتابعة حالة التحويل عند الحاجة.",
            en: "Keep the transaction reference to follow up on transfer status when needed."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "حوّل دوليًا ببيانات واضحة",
        en: "Transfer Internationally with Clear Details"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة الدول والقنوات والرسوم والمتطلبات المحدثة قبل تنفيذ التحويل.",
        en: "Contact the bank to learn about available countries, channels, fees, and updated requirements before making a transfer."
      }
    },
    relatedServicesKeys: [
      "local-transfers",
      "fast-money-transfers"
    ]
  },
  {
    slug: "fast-money-transfers",
    section: "personal",
    title: {
      ar: "الحوالات السريعة",
      en: "Express Remittances"
    },
    subtitle: {
      ar: "حوّل أموالك بسرعة… عندما يكون الوقت مهمًا",
      en: "Transfer your money quickly... when time matters"
    },
    heroImage: "/images/bank-update/bindwal-pay.jpg",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.expressRemittances"
      }
    ],
    tagline: {
      ar: "خدمات الأفراد",
      en: "Personal Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل حوالات مالية سريعة داخل اليمن بسهولة وأمان عبر خدمة الحوالات السريعة من بنك بن دول. تحويل فوري، إجراءات بسيطة، وخدمة موثوقة تناسب احتياجاتك اليومية.",
      en: "Send express remittances inside Yemen easily and securely with Bindowal Bank's express remittance service. Instant transfers, simple procedures, and a reliable service that fits your daily needs.",
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "تتيح لك خدمة الحوالات السريعة إرسال واستلام الأموال داخل اليمن بشكل سريع وآمن، دون تعقيدات. تم تصميم الخدمة لتلبية احتياجات العملاء الذين يبحثون عن وسيلة عملية لتحويل الأموال خلال وقت قصير، مع إجراءات واضحة وشبكة فروع تساعد على سهولة الوصول للخدمة. سواء كنت ترغب في إرسال حوالة لعائلتك، أو تسديد التزامات عاجلة، أو تحويل الأموال بشكل فوري، فإن الحوالات السريعة تمنحك وسيلة موثوقة وسهلة لإنجاز معاملاتك المالية.",
        en: "The express remittances service allows you to send and receive money inside Yemen quickly and securely, without complications. The service is designed to meet the needs of customers looking for a practical way to transfer money in a short time, with clear procedures and a branch network that facilitates easy access to the service. Whether you want to send a remittance to your family, pay off urgent obligations, or transfer money instantly, express remittances provide you with a reliable and easy way to complete your financial transactions.",
      },
    },
    why: {
      title: { ar: "لماذا تختار الحوالات السريعة؟", en: "Why Choose Express Remittances?" },
      description: {
        ar: "لأن بعض التحويلات لا تحتمل الانتظار.",
        en: "Because some transfers cannot afford to wait.",
      },
      items: [
        { id: "why-fmt-1", text: { ar: "تحويل الأموال بسرعة داخل اليمن", en: "Transfer money quickly inside Yemen" } },
        { id: "why-fmt-2", text: { ar: "تنفيذ الحوالات بإجراءات بسيطة", en: "Execute remittances with simple procedures" } },
        { id: "why-fmt-3", text: { ar: "إرسال الأموال بطريقة آمنة وموثوقة", en: "Send money in a safe and reliable way" } },
        { id: "why-fmt-4", text: { ar: "إنجاز المعاملات المالية اليومية بسهولة", en: "Complete daily financial transactions with ease" } },
        { id: "why-fmt-5", text: { ar: "الاستفادة من شبكة فروع وخدمات واسعة", en: "Benefit from a wide network of branches and services" } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات الحوالات السريعة في بنك بن دول", en: "Features of Express Remittances at Bindowal Bank" },
      items: [
        {
          id: "fc-fmt-1",
          title: { ar: "سرعة في تنفيذ الحوالات", en: "Fast Remittance Execution" },
          description: { ar: "تنفيذ الحوالات خلال وقت قصير لتلبية الاحتياجات العاجلة.", en: "Executing remittances within a short time to meet urgent needs." }
        },
        {
          id: "fc-fmt-2",
          title: { ar: "إجراءات سهلة وواضحة", en: "Easy & Clear Procedures" },
          description: { ar: "خطوات مبسطة تساعد العملاء على تنفيذ الحوالات بسهولة.", en: "Simplified steps that help customers execute remittances easily." }
        },
        {
          id: "fc-fmt-3",
          title: { ar: "أمان وموثوقية", en: "Security & Reliability" },
          description: { ar: "تنفيذ العمليات ضمن نظام مصرفي آمن.", en: "Executing operations within a secure banking system." }
        },
        {
          id: "fc-fmt-4",
          title: { ar: "سهولة استلام الحوالات", en: "Easy Collection of Remittances" },
          description: { ar: "إمكانية استلام الأموال بسهولة عبر فروع البنك.", en: "The ability to receive money easily through the bank's branches." }
        },
        {
          id: "fc-fmt-5",
          title: { ar: "خدمة مناسبة للاحتياجات اليومية", en: "Suitable Service for Daily Needs" },
          description: { ar: "مناسبة للتحويلات الشخصية والمعاملات اليومية.", en: "Suitable for personal transfers and daily transactions." }
        },
        {
          id: "fc-fmt-6",
          title: { ar: "متاحة في مختلف المحافظات", en: "Available in Various Governorates" },
          description: { ar: "إمكانية الوصول إلى الخدمة عبر شبكة الفروع.", en: "The ability to access the service through the branch network." }
        },
        {
          id: "fc-fmt-7",
          title: { ar: "متاحة للمواطنين والمقيمين والمغتربين", en: "Open for Citizens, Residents, and Expatriates" },
          description: { ar: "خدمة شاملة تلبي احتياجات الجميع داخل اليمن وخارجه.", en: "A comprehensive service that meets everyone's needs inside and outside Yemen." }
        },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-fmt-1", text: { ar: "الأفراد الذين يحتاجون إلى تحويل الأموال بشكل عاجل", en: "Individuals who need to transfer funds urgently" } },
        { id: "aud-fmt-2", text: { ar: "المغتربون الراغبون في إرسال الأموال لأسرهم", en: "Expatriates wishing to send money to their families" } },
        { id: "aud-fmt-3", text: { ar: "الموظفون وأصحاب الدخل الشهري", en: "Employees and monthly wage earners" } },
        { id: "aud-fmt-4", text: { ar: "أصحاب الأعمال الصغيرة", en: "Small business owners" } },
        { id: "aud-fmt-5", text: { ar: "العملاء الباحثون عن خدمة تحويل سريعة وآمنة", en: "Customers looking for a fast and secure transfer service" } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط تنفيذ الحوالات السريعة", en: "Requirements for Executing Express Remittances" },
      items: [
        { id: "req-fmt-1", text: { ar: "بيانات المستفيد بشكل صحيح", en: "Correct beneficiary details" } },
        { id: "req-fmt-2", text: { ar: "هوية سارية بحسب نوع الخدمة", en: "Valid ID depending on the service type" } },
        { id: "req-fmt-3", text: { ar: "تحديد مبلغ الحوالة ومعلومات الاستلام", en: "Specifying the remittance amount and receiving information" } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات تنفيذ الحوالات السريعة", en: "Steps to Execute Express Remittances" },
      steps: [
        {
          id: "step-fmt-1",
          title: { ar: "زيارة أقرب فرع أو عبر التطبيق البنكي", en: "Visit the Nearest Branch or Use the Mobile App" },
          description: { ar: "توجه إلى أقرب فرع للبنك أو استخدم تطبيق الهاتف لتقديم الطلب.", en: "Visit the nearest bank branch or use the mobile app to submit the request." }
        },
        {
          id: "step-fmt-2",
          title: { ar: "تقديم بيانات المستفيد", en: "Provide Beneficiary Details" },
          description: { ar: "تقديم بيانات المستفيد كاملة وصحيحة مع المستندات المطلوبة.", en: "Provide complete and correct beneficiary details along with required documents." }
        },
        {
          id: "step-fmt-3",
          title: { ar: "تحديد مبلغ الحوالة", en: "Specify Remittance Amount" },
          description: { ar: "حدد المبلغ المطلوب إرساله واختيار العملة المناسبة للعملية.", en: "Specify the amount to be sent and choose the appropriate currency for the transaction." }
        },
        {
          id: "step-fmt-4",
          title: { ar: "تنفيذ العملية واستلام إشعار التحويل", en: "Execute Transaction & Receive Receipt" },
          description: { ar: "إتمام العملية بواسطة الموظف أو عبر التطبيق البنكي بنجاح والحصول على إشعار بالرقم المرجعي.", en: "Complete the transaction successfully by the officer or via the app and receive a receipt with the reference number." }
        },
      ],
    },
    ctaSection: {
      title: { ar: "ابدأ حوالاتك اليوم", en: "Start Your Remittances Today" },
      description: { ar: "أنجز تحويلاتك بسرعة وأمان عبر خدمة الحوالات السريعة من بنك بن دول، واستفد من خدمة موثوقة تساعدك على إرسال أموالك بسهولة وفي الوقت الذي تحتاجه", en: "Complete your transfers quickly and securely through Bindowal Bank's express remittance service, and benefit from a reliable service that helps you send your money easily and at the time you need." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول الحوالات السريعة", en: "Express Remittances FAQs" },
      items: [
        {
          id: "faq-fmt-1",
          question: { ar: "كم الوقت الذي تأخذه الحوالة السريعة؟", en: "How much time does an express remittance take?" },
          answer: { ar: "تتم الحوالات خلال وقت قصير بحسب إجراءات الخدمة.", en: "Remittances are completed within a short time depending on service procedures." }
        },
        {
          id: "faq-fmt-2",
          question: { ar: "هل يمكن استلام الحوالة من أي فرع؟", en: "Can the remittance be collected from any branch?" },
          answer: { ar: "يعتمد ذلك على سياسة الخدمة والفروع المتاحة.", en: "This depends on the service policy and available branches." }
        },
        {
          id: "faq-fmt-3",
          question: { ar: "هل الحوالات السريعة آمنة؟", en: "Are express remittances secure?" },
          answer: { ar: "نعم، تتم جميع العمليات ضمن نظام مصرفي موثوق وآمن.", en: "Yes, all transactions are processed within a secure and reliable banking system." }
        },
        {
          id: "faq-fmt-4",
          question: { ar: "هل يمكن للمغتربين استخدام الخدمة؟", en: "Can expatriates use the service?" },
          answer: { ar: "نعم، الخدمة متاحة للمواطنين والمقيمين والمغتربين.", en: "Yes, the service is available to citizens, residents, and expatriates." }
        },
        {
          id: "faq-fmt-5",
          question: { ar: "هل توجد حدود لمبالغ الحوالات؟", en: "Are there limits on remittance amounts?" },
          answer: { ar: "قد تختلف حدود الحوالات بحسب نوع الخدمة وسياسة البنك.", en: "Remittance limits may vary depending on the service type and bank policy." }
        },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه الحوالات السريعة؟",
        en: "What Do Express Remittances Offer?"
      },
      subtitle: {
        ar: "تركز الحوالات السريعة على إيصال الأموال بسرعة أكبر للمستفيدين عبر قنوات معتمدة، مع تبسيط خطوات الإرسال والاستلام قدر الإمكان.",
        en: "Express remittances focus on faster delivery of funds to beneficiaries through approved channels while simplifying sending and receiving steps as much as possible."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إرسال مبالغ للمستفيدين عند الحاجة العاجلة وفق حدود الخدمة.",
            en: "Send funds to beneficiaries for urgent needs according to service limits."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "بيانات عملية واضحة تشمل المبلغ والمستفيد ورقم المرجع.",
            en: "Clear transaction details including amount, beneficiary, and reference number."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية الاستلام عبر نقاط أو قنوات متاحة حسب شبكة الخدمة.",
            en: "Receive through available points or channels depending on the service network."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسبة للمصاريف العائلية الطارئة والالتزامات السريعة.",
            en: "Suitable for urgent family expenses and fast obligations."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "سرعة في الحالات اليومية والطارئة",
        en: "Speed for Daily and Urgent Needs"
      },
      subtitle: {
        ar: "تمنح الخدمة العميل وسيلة أسرع لإيصال المبلغ دون إجراءات طويلة، مع الحفاظ على التحقق الأساسي وسجل العملية.",
        en: "The service gives customers a faster way to deliver funds without lengthy procedures, while maintaining core verification and transaction records."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تلبية الاحتياجات المالية العاجلة للمستفيدين بسرعة أكبر.",
            en: "Meet urgent financial needs for beneficiaries more quickly."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تقليل الاعتماد على تسليم النقد يدويًا بين الأشخاص.",
            en: "Reduce reliance on hand-to-hand cash delivery."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "سهولة مشاركة رقم المرجع مع المستفيد للمتابعة أو الاستلام.",
            en: "Easily share the reference number with the beneficiary for follow-up or collection."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تجربة بسيطة تناسب العملاء الذين يحتاجون خدمة مباشرة وواضحة.",
            en: "A simple experience for clients who need a direct and clear service."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "معلومات أساسية تكفي لبدء العملية",
        en: "Basic Information to Start the Transaction"
      },
      subtitle: {
        ar: "تحتاج الحوالة السريعة إلى بيانات صحيحة للمرسل والمستفيد، مع التزام العميل بحدود الخدمة ومتطلبات التحقق المعتمدة.",
        en: "Express remittance requires correct sender and beneficiary details while following service limits and approved verification requirements."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "اسم المستفيد ورقم هاتفه أو بيانات الاستلام المطلوبة.",
            en: "Beneficiary name and mobile number or required receiving details."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "بيانات تحقق للمرسل بحسب القناة والمبلغ.",
            en: "Sender verification details depending on channel and amount."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "المبلغ والغرض من الحوالة عند الحاجة.",
            en: "Amount and remittance purpose when required."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "الفروع أو نقاط الخدمة المعتمدة لتنفيذ الحوالة.",
            en: "Branches or approved service points to process the remittance."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "القنوات الرقمية المتاحة عند دعم الخدمة.",
            en: "Available digital channels when supported."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "خدمة العملاء للاستعلام عن حالة الحوالة أو بيانات الاستلام.",
            en: "Customer service for remittance status or receiving details."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "إرسال سريع بتأكيد واضح",
        en: "Fast Sending with Clear Confirmation"
      },
      subtitle: {
        ar: "تبدأ العملية بإدخال بيانات المستفيد، ثم مراجعة المبلغ، وبعد التأكيد يتم تزويدك ببيانات المتابعة.",
        en: "The transaction starts by entering beneficiary details, reviewing the amount, and receiving tracking details after confirmation."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تحديد المستفيد",
            en: "Select Beneficiary"
          },
          description: {
            ar: "أدخل بيانات المستفيد بدقة وتأكد من رقم الهاتف أو وسيلة الاستلام.",
            en: "Enter beneficiary details accurately and verify the mobile number or receiving method."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تأكيد المبلغ",
            en: "Confirm Amount"
          },
          description: {
            ar: "راجع المبلغ والرسوم والبيانات قبل إتمام الحوالة.",
            en: "Review the amount, fees, and details before completing the remittance."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "مشاركة المرجع",
            en: "Share Reference"
          },
          description: {
            ar: "احتفظ برقم المرجع وشاركه مع المستفيد عند الحاجة.",
            en: "Keep the reference number and share it with the beneficiary when needed."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "أنجز حوالتك عند الحاجة",
        en: "Complete Your Remittance When Needed"
      },
      description: {
        ar: "اختر القناة المناسبة وتأكد من بيانات المستفيد قبل تنفيذ الحوالة السريعة.",
        en: "Choose the suitable channel and verify beneficiary details before making an express remittance."
      }
    },
    relatedServicesKeys: [
      "local-transfer",
      "international-transfer",
      "e-wallet"
    ]
  },
  {
    slug: "minors-account",
    section: "personal",
    title: {
      ar: "حساب القاصر",
      en: "Minors Account"
    },
    subtitle: {
      ar: "ادّخر لأبنائك اليوم… لمستقبل أمن",
      en: "Save for your children today… for a secure future"
    },
    heroImage: "/images/customer-services/minors-account.webp",
    breadcrumbs: [
      {
        labelKey: "nav.specializedServices",
        href: "/specialized-services"
      },
      {
        labelKey: "nav.minorsAccount",
        label: {
          ar: "حساب القاصر",
          en: "Minors Account"
        }
      }
    ],
    tagline: {
      ar: "خدمات الأفراد",
      en: "Personal Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "افتح حساب القاصر في بنك بن دول وابدأ الادخار لأبنائك بطريقة آمنة ومتوافقة مع أحكام الشريعة الإسلامية.",
      en: "Open a minors account with Bindowal Bank and start saving for your children in a secure way compliant with Islamic Sharia.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "حساب القاصر هو حساب ادخاري مخصص للأطفال والقاصرين مادون السن القانونية والمحدد وفق القانون اليمني بـ 18 عام، يُفتح ويُدار بواسطة ولي الأمر أو الوصي النظامي حتى بلوغ السن القانونية. يوفر الحساب وسيلة آمنة ومنظمة لحفظ أموال الأبناء، مع المساهمة في ترسيخ ثقافة الادخار والتخطيط المالي منذ سن مبكرة.",
        en: "Saving for children is one of the most important decisions that help secure their future needs. Through a minors account at Bin Dowal Bank, you can keep your children's money in a secure savings account managed by the guardian, helping to develop their saving culture in accordance with Islamic Sharia principles.",
      },
    },
    why: {
      title: { ar: "لماذا تختار حساب القاصر؟", en: "Why Choose a Minors Account?" },
      description: {
        ar: "لأن التخطيط لمستقبل الأبناء يبدأ بالادخار.",
        en: "Because planning for children future starts with saving.",
      },
      items: [
        { id: "why-ma-1", text: { ar: "ترسيخ الوعي الادخاري وإدارة الاموال لابنائك", en: "Secure children's future through organized saving." } },
        { id: "why-ma-2", text: { ar: "الحصول على عوائد منتظمة على الرصيد المدخر بشكل نصف سنوي", en: "Earn regular returns on the balance saved on a half-yearly basis" } },
        { id: "why-ma-3", text: { ar: "الادخار متاح عبر الايداع بمبالغ صغيرة ودون سقف محدد", en: "Easy savings with small deposits and no upper limit" } },
        { id: "why-ma-4", text: { ar: "تامين مستقبل القاصر/ الطفل عبر الأموال المدخرة", en: "Save for your child's future with secure, accumulated funds" } },
        { id: "why-ma-5", text: { ar: "إدارة الحساب من خلال ولي الأمر", en: "Manage the account through the guardian." } },
        { id: "why-ma-6", text: { ar: "متوافق مع أحكام الشريعة الإسلامية", en: "Compliant with Islamic Sharia." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات حساب القاصر", en: "Minors Account Features" },
      items: [
        { id: "fc-ma-1", title: { ar: "إدارة آمنة من قبل ولي الأمر", en: "Legal Guardian Supervision" }, description: { ar: "يتم فتح الحساب وإدارته بواسطة ولي الأمر أو الوصي النظامي وفق سياسة البنك.", en: "The account is opened and managed by the guardian or legal custodian in accordance with the bank's policy." } },
        { id: "fc-ma-2", title: { ar: "تعزيز ثقافة الادخار", en: "Promoting Saving Culture" }, description: { ar: "يساعد الأبناء على اكتساب عادات مالية إيجابية منذ سن مبكرة.", en: "Helps children develop positive financial habits from an early age." } },
        { id: "fc-ma-3", title: { ar: "حساب مصرفي آمن", en: "Safe Account" }, description: { ar: "حفظ الأموال لتامين مستقبل والاحتياجات المستقبلية", en: "Helps children develop positive financial habits from an early age." } },
        { id: "fc-ma-4", title: { ar: "تنظيم مدخرات الأبناء", en: "Children Savings Management" }, description: { ar: "من خلال إيداع بمبالغ صغيرة تبداء من 1000 ريال يمني", en: "Save small amounts starting from 1000 Yemeni Riyals" } },
        { id: "fc-ma-5", title: { ar: "عوائد منتظمة", en: "Regular Returns" }, description: { ar: "الحصول على عوائد من المبالغ المدخرة عند وصول الرصيد 50,000 ريال يمني / 100 ريال سعودي/ 100 دولار امريكي كل ستة اشهر ووفق سياسة البنك.", en: "Earn regular returns on the balance saved when it reaches 50,000 YER/100 SAR/100 USD every six months according to bank policy." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-ma-1", text: { ar: "الآباء والأمهات الراغبون في الادخار لأبنائهم.", en: "Parents wishing to save money for their children." } },
        { id: "aud-ma-2", text: { ar: "أولياء الأمور والأوصياء النظاميين.", en: "Legal guardians and custodians." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط فتح حساب القاصر", en: "Minors Account Opening Requirements" },
      items: [
        { id: "req-ma-1", text: { ar: "هوية سارية لولي الأمر أو الوصي.", en: "Valid ID of the guardian." } },
        { id: "req-ma-2", text: { ar: "وثيقة تثبت صلة القرابة أو الولاية (مثل شهادة الميلاد أو وثيقة الولاية).", en: "Document proving guardianship or kinship (birth certificate/guardianship document)." } },
        { id: "req-ma-3", text: { ar: "تعبئة نموذج فتح الحساب والتوقيع عليه.", en: "Complete and sign the account opening form." } },
        { id: "req-ma-4", text: { ar: "استيفاء متطلبات البنك الخاصة بفتح الحساب.", en: "Meet the bank's specific account opening requirements." } },
      ],
    },
    // stepsSection: {
    //   title: { ar: "خطوات فتح حساب القاصر", en: "Steps to Open a Minors Account" },
    //   steps: [
    //     { id: "step-ma-1", title: { ar: "تجهيز وثائق ولي الأمر والقاصر", en: "Prepare Guardian and Minor Documents" }, description: { ar: "أحضر هوية ولي الأمر ووثائق إثبات الولاية والصلة بالقاصر.", en: "Bring the guardian's ID and documents proving guardianship." } },
    //     { id: "step-ma-2", title: { ar: "التقديم في الفرع", en: "Apply at the Branch" }, description: { ar: "توجه لأحد فروع البنك واستكمل نموذج فتح الحساب.", en: "Visit a bank branch and complete the account opening form." } },
    //     { id: "step-ma-3", title: { ar: "تفعيل الحساب والبدء بالادخار", en: "Activate and Start Saving" }, description: { ar: "بعد المراجعة يتم تفعيل الحساب ويمكنك البدء بالإيداع.", en: "After review, the account is activated and you can start depositing." } },
    //   ],
    // },
    ctaSection: {
      title: { ar: "ابدأ الادخار لمستقبل أبنائك", en: "Start Saving for Your Children's Future" },
      description: { ar: "افتح حساب القاصر في بنك بن دول، وابدأ اليوم ببناء مستقبل", en: "Open a minors account at Bin Dowal Bank and start building a secure future for your child today." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-ma-1", question: { ar: "من يمكنه فتح حساب القاصر؟", en: "Who can open a minors account?" }, answer: { ar: "يمكن لولي الأمر أو الوصي النظامي فتح الحساب نيابةً عن القاصر وفق سياسة البنك.", en: "The child's guardian (father, mother, or legal guardian of the minor) can open the account on their behalf." } },
        { id: "faq-ma-2", question: { ar: "هل يستطيع القاصر إدارة الحساب بنفسه؟", en: "Can the minor manage the account by himself?" }, answer: { ar: "تتم إدارة الحساب بواسطة ولي الأمر أو الوصي حتى بلوغ السن القانونية أو وفق الأنظمة المعتمدة.", en: "The account is managed by the guardian until the minor reaches legal age." } },
        { id: "faq-ma-3", question: { ar: "ما المستندات المطلوبة لفتح الحساب؟", en: "What documents are required to open the account?" }, answer: { ar: "هوية ولي الأمر، ووثيقة إثبات الولاية أو صلة القرابة، واستكمال نموذج فتح الحساب.", en: "Valid ID for the guardian, a document proving guardianship, and completion of the account opening form." } },
        { id: "faq-ma-4", question: { ar: "هل يمكن الإيداع في الحساب بشكل مستمر؟", en: "Can deposits be made to the account?" }, answer: { ar: "نعم، يمكن إيداع الأموال في الحساب وفق الإجراءات والسياسات المعتمدة لدى البنك.", en: "Yes, anyone can deposit into the minors account for the child's benefit per the bank's procedures." } },
        { id: "faq-ma-5", question: { ar: "هل حساب القاصر متوافق مع الشريعة الإسلامية؟", en: "Is the minors account compliant with Islamic Sharia?" }, answer: { ar: "نعم، يتم تقديم الحساب وفق أحكام الشريعة الإسلامية.", en: "Yes, the account is provided in accordance with Islamic Sharia principles." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه حساب القاصر؟",
        en: "What Does the Minors Account Offer?"
      },
      subtitle: {
        ar: "يساعد حساب القاصر ولي الأمر على حفظ أموال الأبناء وإدارتها ضمن إطار مصرفي منظم إلى حين اكتمال الأهلية أو حسب سياسة البنك.",
        en: "The minors account helps guardians hold and manage children’s funds within an organized banking framework until eligibility is met or according to bank policy."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "فتح الحساب باسم القاصر مع إدارة ولي الأمر أو الوصي حسب المتطلبات.",
            en: "Open the account for the minor with guardian or custodian management according to requirements."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "مناسب للادخار التعليمي والمصاريف المستقبلية للأبناء.",
            en: "Suitable for education savings and future child-related expenses."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية الإيداع والمتابعة ضمن ضوابط البنك والقنوات المتاحة.",
            en: "Deposit and tracking access under bank policies and available channels."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "تعزيز ثقافة الادخار والمسؤولية المالية لدى الأسرة.",
            en: "Encourage saving culture and financial responsibility within the family."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "بداية منظمة لمستقبل الأبناء",
        en: "An Organized Start for Children’s Future"
      },
      subtitle: {
        ar: "يوفر الحساب طريقة واضحة لتجميع المبالغ الصغيرة والمتكررة وتحويلها إلى رصيد يمكن استخدامه للأهداف المستقبلية.",
        en: "The account provides a clear way to collect small and recurring amounts and turn them into a balance for future goals."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "حفظ أموال القاصر في حساب مستقل وسهل المتابعة.",
            en: "Hold the minor’s funds in a separate and easy-to-monitor account."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "مساعدة ولي الأمر على التخطيط للتعليم أو الاحتياجات العائلية القادمة.",
            en: "Help the guardian plan for education or future family needs."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "إتاحة سجل مصرفي واضح للحركات المرتبطة بالقاصر.",
            en: "Provide a clear banking record for transactions related to the minor."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تنمية عادة الادخار بصورة عملية داخل الأسرة.",
            en: "Develop practical saving habits within the family."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "ولي الأمر جزء أساسي من الإجراءات",
        en: "The Guardian Is Central to the Process"
      },
      subtitle: {
        ar: "يتطلب الحساب تقديم بيانات القاصر وولي الأمر أو الوصي، مع الوثائق التي تثبت العلاقة أو الصلاحية القانونية حسب السياسة المعتمدة.",
        en: "The account requires details of the minor and guardian or custodian, along with documents proving the relationship or legal authority according to policy."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "وثيقة تعريف للقاصر مثل شهادة الميلاد أو ما يعادلها.",
            en: "Identification document for the minor, such as a birth certificate or equivalent."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "هوية ولي الأمر أو الوصي والوثائق التي تثبت الصفة عند الحاجة.",
            en: "Guardian or custodian ID and documents proving authority when required."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال نموذج فتح الحساب والتوقيع على النماذج المعتمدة.",
            en: "Complete the account opening form and sign the approved documents."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع مع الوثائق المطلوبة لفتح الحساب.",
            en: "Visit a branch with the required documents to open the account."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "خدمة العملاء لمعرفة المتطلبات الخاصة بكل حالة.",
            en: "Customer service to confirm requirements for each case."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "القنوات الرقمية للمتابعة عند توفر الخدمة بعد فتح الحساب.",
            en: "Digital channels for monitoring when available after account opening."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "افتح الحساب بخطوات عائلية واضحة",
        en: "Open the Account with Clear Family Steps"
      },
      subtitle: {
        ar: "ابدأ بتجهيز وثائق القاصر وولي الأمر، ثم قدّم الطلب ليتم مراجعته وتفعيل الحساب وفق الشروط.",
        en: "Start by preparing the minor and guardian documents, then submit the request for review and activation according to conditions."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تجهيز وثائق القاصر",
            en: "Prepare Minor Documents"
          },
          description: {
            ar: "اجمع وثائق القاصر وهوية ولي الأمر أو الوصي.",
            en: "Collect the minor’s documents and the guardian or custodian ID."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم الطلب في الفرع",
            en: "Submit at Branch"
          },
          description: {
            ar: "قدّم الطلب وراجع البيانات مع موظف الخدمة.",
            en: "Submit the application and review details with the service officer."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "تفعيل الحساب والمتابعة",
            en: "Activate and Monitor"
          },
          description: {
            ar: "بعد الموافقة، يتم تفعيل الحساب ويمكن متابعة الإيداعات والحركات.",
            en: "After approval, the account is activated and deposits or transactions can be monitored."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "ابدأ الادخار لأبنائك اليوم",
        en: "Start Saving for Your Children Today"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة الوثائق المطلوبة لحساب القاصر وآلية إدارة الحساب.",
        en: "Contact the bank to learn about required documents for a minors account and how the account is managed."
      }
    },
    relatedServicesKeys: [
      "savings",
      "current",
      "investment"
    ]
  },
  {
    slug: "corporate-current-account",
    section: "business",
    title: {
      ar: "حسابات مصرفية للشركات",
      en: "Corporate Bank Accounts"
    },
    subtitle: {
      ar: "حساب عملي لإدارة عمليات الشركة اليومية والمدفوعات والتحصيلات بوضوح",
      en: "A practical account for managing daily company transactions, payments, and collections with clarity"
    },
    heroImage: "/images/company-header-cover.png",
    breadcrumbs: [
      {
        labelKey: "nav.businessBanking",
        href: "/business-banking"
      },
      {
        labelKey: "nav.corporateCurrentAccount",
        label: {
          ar: "حسابات مصرفية",
          en: "Bank Accounts"
        }
      }
    ],
    tagline: {
      ar: "بن دول أعمال",
      en: "Business Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "افتح حساب جاري للشركات في بنك بن دول وأدر سيولتك التجارية بكفاءة. خدمات مصرفية متكاملة تناسب احتياجات الشركات والمؤسسات.",
      en: "Open a corporate current account at Bindowal Bank and manage your business liquidity efficiently. Comprehensive banking services for companies and institutions.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "يوفر الحساب الجاري للشركات إطارًا مصرفيًا لإدارة السيولة اليومية، استقبال الإيرادات، تنفيذ المدفوعات، ومتابعة الحركة المالية بصورة منظمة.",
        en: "The corporate current account provides a banking framework for managing daily liquidity, receiving revenues, processing payments, and tracking financial activity in an organized manner.",
      },
    },
    why: {
      title: { ar: "لماذا الحساب الجاري للشركات؟", en: "Why a Corporate Current Account?" },
      description: {
        ar: "حساب متخصص يلبي احتياجات الشركات والمؤسسات في إدارة تدفقاتها المالية اليومية بكفاءة وشفافية.",
        en: "A specialized account that meets companies and institutions' needs in managing their daily cash flows efficiently and transparently.",
      },
      items: [
        { id: "why-cca-1", text: { ar: "إدارة السيولة التشغيلية للشركة بشكل منظم.", en: "Manage company operational liquidity in an organized manner." } },
        { id: "why-cca-2", text: { ar: "استقبال المدفوعات وتنفيذ التحويلات التجارية.", en: "Receive payments and execute commercial transfers." } },
        { id: "why-cca-3", text: { ar: "متابعة الحركة المالية عبر كشوف حساب تفصيلية.", en: "Monitor financial activity through detailed account statements." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات الحساب الجاري للشركات", en: "Corporate Current Account Features" },
      items: [
        { id: "fc-cca-1", title: { ar: "إدارة السيولة", en: "Liquidity Management" }, description: { ar: "أداة مثالية لإدارة التدفقات النقدية اليومية للشركة.", en: "The ideal tool for managing the company's daily cash flows." } },
        { id: "fc-cca-2", title: { ar: "تحويلات تجارية", en: "Commercial Transfers" }, description: { ar: "إرسال واستقبال المدفوعات التجارية محلياً ودولياً بسهولة.", en: "Send and receive commercial payments locally and internationally with ease." } },
        { id: "fc-cca-3", title: { ar: "كشوف حساب مفصلة", en: "Detailed Statements" }, description: { ar: "الحصول على كشوف حساب تفصيلية لمتابعة كل الحركات المالية.", en: "Obtain detailed statements to track all financial movements." } },
        { id: "fc-cca-4", title: { ar: "خدمات مؤسسية متكاملة", en: "Integrated Corporate Services" }, description: { ar: "ربط الحساب بمنظومة خدمات الشركات المصرفية في البنك.", en: "Link the account to the bank's comprehensive corporate banking services." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-cca-1", text: { ar: "الشركات والمؤسسات التجارية.", en: "Companies and commercial institutions." } },
        { id: "aud-cca-2", text: { ar: "المنشآت الصغيرة والمتوسطة.", en: "Small and medium enterprises." } },
        { id: "aud-cca-3", text: { ar: "المقاولون وأصحاب المشاريع.", en: "Contractors and project owners." } },
        { id: "aud-cca-4", text: { ar: "الجمعيات والمنظمات غير الربحية.", en: "Associations and non-profit organizations." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط فتح الحساب الجاري للشركات", en: "Corporate Account Opening Requirements" },
      items: [
        { id: "req-cca-1", text: { ar: "السجل التجاري ساري المفعول.", en: "Valid commercial registration." } },
        { id: "req-cca-2", text: { ar: "النظام الأساسي للشركة أو عقد التأسيس.", en: "Articles of association or incorporation contract." } },
        { id: "req-cca-3", text: { ar: "هويات المفوضين بالتوقيع.", en: "IDs of authorized signatories." } },
        { id: "req-cca-4", text: { ar: "قرار مجلس الإدارة بفتح الحساب وتفويض التوقيع.", en: "Board resolution to open the account and authorize signatures." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات فتح الحساب الجاري للشركات", en: "Steps to Open a Corporate Current Account" },
      steps: [
        { id: "step-cca-1", title: { ar: "تجهيز وثائق الشركة", en: "Prepare Company Documents" }, description: { ar: "اجمع السجل التجاري وعقد التأسيس وهويات المفوضين بالتوقيع.", en: "Gather the commercial registration, incorporation contract, and authorized signatories' IDs." } },
        { id: "step-cca-2", title: { ar: "التقديم في الفرع", en: "Apply at the Branch" }, description: { ar: "توجه لأحد فروع البنك المتخصصة في خدمات الشركات واستكمل الإجراءات.", en: "Visit a bank branch specialized in corporate services and complete the procedures." } },
        { id: "step-cca-3", title: { ar: "المراجعة والتفعيل", en: "Review and Activation" }, description: { ar: "يراجع البنك الوثائق ويفعّل الحساب بعد استيفاء جميع الشروط.", en: "The bank reviews the documents and activates the account after all requirements are met." } },
      ],
    },
    ctaSection: {
      title: { ar: "أدر أعمالك بكفاءة أكبر", en: "Manage Your Business More Efficiently" },
      description: { ar: "افتح حساب جاري للشركات الآن وانضم لشبكة الشركاء التجاريين لبنك بن دول.", en: "Open a corporate current account now and join Bindowal Bank's commercial partners network." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-cca-1", question: { ar: "هل يمكن لشركة ناشئة فتح حساب جاري؟", en: "Can a startup open a corporate current account?" }, answer: { ar: "نعم، يمكن للشركات الناشئة المسجلة قانونياً فتح حساب جاري وفق متطلبات البنك.", en: "Yes, legally registered startups can open a current account per the bank's requirements." } },
        { id: "faq-cca-2", question: { ar: "كم عدد المفوضين بالتوقيع المسموح بهم؟", en: "How many authorized signatories are allowed?" }, answer: { ar: "يمكن تعيين أكثر من مفوض بالتوقيع وفق قرار مجلس الإدارة وسياسة البنك.", en: "Multiple authorized signatories can be designated per the board resolution and bank policy." } },
        { id: "faq-cca-3", question: { ar: "هل يمكن الحصول على خدمات إضافية مع الحساب؟", en: "Can additional services be obtained with the account?" }, answer: { ar: "نعم، يمكن ربط الحساب بخدمات متعددة كالتحويلات والكفالات والتمويل التجاري.", en: "Yes, the account can be linked to various services such as transfers, guarantees, and trade finance." } },
        { id: "faq-cca-4", question: { ar: "هل توجد رسوم شهرية على الحساب الجاري للشركات؟", en: "Are there monthly fees on the corporate current account?" }, answer: { ar: "الرسوم تختلف حسب نوع الحساب ومستوى الخدمة. يرجى التواصل مع البنك للتفاصيل.", en: "Fees vary based on account type and service level. Please contact the bank for details." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه الحساب الجاري للشركات؟",
        en: "What Does the Corporate Current Account Offer?"
      },
      subtitle: {
        ar: "يوفر الحساب الجاري للشركات إطارًا مصرفيًا لإدارة السيولة اليومية، استقبال الإيرادات، تنفيذ المدفوعات، ومتابعة الحركة المالية بصورة منظمة.",
        en: "The corporate current account provides a banking framework for managing daily liquidity, receiving revenues, making payments, and tracking financial activity in an organized way."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إدارة الإيداعات والسحوبات والمدفوعات المرتبطة بنشاط الشركة.",
            en: "Manage deposits, withdrawals, and payments related to company activity."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "تسهيل التحويلات المحلية أو الدولية حسب الخدمات المتاحة.",
            en: "Facilitate local or international transfers depending on available services."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إتاحة كشوفات وحركات تساعد الإدارة على المتابعة والمطابقة.",
            en: "Provide statements and transactions that support management tracking and reconciliation."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "قابلية ربط الحساب بخدمات الأعمال مثل نقاط البيع أو الضمانات عند الأهلية.",
            en: "Can be linked to business services such as POS or guarantees when eligible."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "تنظيم مالي أفضل للمنشأة",
        en: "Better Financial Organization for the Business"
      },
      subtitle: {
        ar: "يساعد الحساب الشركة على فصل عملياتها المالية عن الحسابات الشخصية، مما يحسن المتابعة ويعزز الانضباط المالي والإداري.",
        en: "The account helps the company separate business finances from personal accounts, improving monitoring and administrative discipline."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "وضوح أكبر في تدفق الأموال الداخلة والخارجة من الشركة.",
            en: "Greater clarity over incoming and outgoing business funds."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تسهيل إعداد التقارير والمطابقة المحاسبية من خلال سجل مصرفي واضح.",
            en: "Easier reporting and accounting reconciliation through a clear banking record."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "تعزيز ثقة الموردين والعملاء عند التعامل عبر حساب تجاري رسمي.",
            en: "Strengthen supplier and customer confidence through an official business account."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "دعم نمو الأعمال عبر خدمات مصرفية قابلة للتوسع مع احتياجات الشركة.",
            en: "Support growth through banking services that can scale with business needs."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "وثائق الشركة أساس فتح الحساب",
        en: "Company Documents Are the Basis for Opening"
      },
      subtitle: {
        ar: "يحتاج فتح الحساب إلى وثائق قانونية وتعريفية تخص الشركة والمفوضين بالتوقيع، مع استكمال متطلبات اعرف عميلك المعتمدة.",
        en: "Opening the account requires legal and identification documents for the company and authorized signatories, along with approved KYC requirements."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "السجل التجاري أو وثائق الترخيص المعتمدة حسب نوع المنشأة.",
            en: "Commercial registration or approved licensing documents depending on business type."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "وثائق المفوضين بالتوقيع وبيانات المالكين أو الشركاء عند الحاجة.",
            en: "Authorized signatory documents and owner or partner details when required."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال نماذج فتح الحساب وتفويضات التشغيل المعتمدة.",
            en: "Complete account opening forms and approved operating authorizations."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة فرع البنك مع ملف الشركة والمفوضين.",
            en: "Visit a branch with the company and signatory documents."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "التواصل مع فريق خدمات الأعمال لمعرفة المتطلبات المناسبة لنوع المنشأة.",
            en: "Contact the business banking team for requirements based on business type."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "استخدام القنوات الرقمية للشركات عند توفرها لمتابعة الحساب والحركات.",
            en: "Use available corporate digital channels to monitor account and transactions."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "فعّل حساب أعمالك بطريقة منظمة",
        en: "Activate Your Business Account in an Organized Way"
      },
      subtitle: {
        ar: "تبدأ الرحلة بتجهيز ملف الشركة، ثم مراجعة المفوضيات، وبعد الموافقة يتم تفعيل الحساب لاستخدامه في العمليات اليومية.",
        en: "The journey begins with preparing the company file, reviewing authorizations, and activating the account after approval for daily operations."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تجهيز ملف الشركة",
            en: "Prepare Company File"
          },
          description: {
            ar: "اجمع السجل التجاري والوثائق القانونية وبيانات المفوضين.",
            en: "Collect the commercial registration, legal documents, and signatory details."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "مراجعة الصلاحيات",
            en: "Review Authorizations"
          },
          description: {
            ar: "حدد الأشخاص المخولين بالتوقيع وآلية تشغيل الحساب.",
            en: "Define authorized signatories and the operating method for the account."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "تفعيل الحساب",
            en: "Activate Account"
          },
          description: {
            ar: "بعد المراجعة والموافقة يتم تفعيل الحساب وربطه بالخدمات المناسبة.",
            en: "After review and approval, the account is activated and linked to suitable services."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "ابدأ بإدارة مالية أوضح لشركتك",
        en: "Start Clearer Financial Management for Your Company"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة متطلبات فتح حساب الشركات حسب نوع نشاطك وحجم عملياتك.",
        en: "Contact the bank to learn corporate account requirements based on your business type and transaction needs."
      }
    }
  },
  {
    slug: "corporate-investment-deposits",
    section: "business",
    title: {
      ar: "الودائع الاستثمارية للشركات",
      en: "Corporate Investment Deposits"
    },
    subtitle: {
      ar: "إدارة فائض السيولة المؤسسية من خلال ودائع استثمارية منظمة",
      en: "Manage corporate surplus liquidity through structured investment deposits"
    },
    heroImage: "/images/company-header-cover.png",
    breadcrumbs: [
      {
        labelKey: "nav.businessBanking",
        href: "/business-banking"
      },
      {
        labelKey: "nav.corporateInvestmentDeposits",
        label: {
          ar: "الودائع الاستثمارية",
          en: "Investment Deposits"
        }
      }
    ],
    tagline: {
      ar: "بن دول أعمال",
      en: "Business Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "استثمر فوائض سيولة شركتك بأمان مع الودائع الاستثمارية للشركات من بنك بن دول. عوائد تنافسية، فترات مرنة، وتوافق كامل مع الشريعة.",
      en: "Invest your company's surplus liquidity safely with Bindowal Bank's Corporate Investment Deposits. Competitive returns, flexible terms, and full Sharia compliance.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "تساعد الودائع الاستثمارية للشركات على توظيف فوائض السيولة لفترات محددة بدل تركها دون خطة، مع مراعاة الضوابط المصرفية الإسلامية وسياسات البنك.",
        en: "Corporate investment deposits help businesses place surplus liquidity for defined periods instead of leaving it unmanaged, while following Islamic banking structures and bank policy.",
      },
    },
    why: {
      title: { ar: "لماذا الودائع الاستثمارية للشركات؟", en: "Why Corporate Investment Deposits?" },
      description: {
        ar: "خيار استثماري منظم يساعد الشركات على تعظيم الاستفادة من فوائض نقدها بطريقة آمنة ومتوافقة مع الشريعة.",
        en: "A structured investment option that helps companies maximize the benefit of their cash surplus safely and in Sharia compliance.",
      },
      items: [
        { id: "why-cid-1", text: { ar: "تحويل فائض السيولة التشغيلية إلى استثمار منظم بدل تركه خاملاً.", en: "Convert operational surplus liquidity into a structured investment instead of leaving it idle." } },
        { id: "why-cid-2", text: { ar: "تعزيز التخطيط المالي المؤسسي على المدى المتوسط والطويل.", en: "Enhance corporate financial planning over the medium and long term." } },
        { id: "why-cid-3", text: { ar: "الاستفادة من عوائد مجزية وفق صيغ شرعية معتمدة.", en: "Benefit from rewarding returns under approved Sharia structures." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات الودائع الاستثمارية للشركات", en: "Corporate Investment Deposit Features" },
      items: [
        { id: "fc-cid-1", title: { ar: "فترات مرنة", en: "Flexible Terms" }, description: { ar: "خيارات مدد متعددة تناسب دورة تشغيل الشركة وخططها المالية.", en: "Multiple tenure options matching the company's operational cycle and financial plans." } },
        { id: "fc-cid-2", title: { ar: "توافق شرعي", en: "Sharia Compliant" }, description: { ar: "إدارة الوديعة وتوزيع الأرباح وفق صيغ مصرفية إسلامية معتمدة.", en: "Deposit management and profit distribution under approved Islamic banking structures." } },
        { id: "fc-cid-3", title: { ar: "عوائد تنافسية", en: "Competitive Returns" }, description: { ar: "أرباح دورية مجزية تتناسب مع حجم الوديعة والمدة المختارة.", en: "Rewarding periodic profits proportional to deposit size and chosen tenure." } },
        { id: "fc-cid-4", title: { ar: "إدارة مؤسسية", en: "Corporate Management" }, description: { ar: "متابعة الوديعة والتقارير المالية المرتبطة بها بسهولة عبر قنوات البنك.", en: "Easy monitoring of the deposit and related financial reports via bank channels." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-cid-1", text: { ar: "الشركات والمؤسسات التجارية ذات الفوائض النقدية.", en: "Companies and commercial institutions with cash surpluses." } },
        { id: "aud-cid-2", text: { ar: "المؤسسات غير الربحية الراغبة في استثمار أموالها بأمان.", en: "Non-profit institutions wishing to invest their funds safely." } },
        { id: "aud-cid-3", text: { ar: "المنشآت الصغيرة والمتوسطة التي تبحث عن عوائد على فوائض سيولتها.", en: "SMEs seeking returns on their liquidity surpluses." } },
      ],
    },
    requirementsSection: {
      title: { ar: "متطلبات الوديعة الاستثمارية للشركات", en: "Corporate Investment Deposit Requirements" },
      note: { ar: "الحد الأدنى للوديعة وفترات الاستثمار المتاحة تختلف حسب نوع الشركة والعملة المختارة.", en: "Minimum deposit and available investment periods vary by company type and chosen currency." },
      items: [
        { id: "req-cid-1", text: { ar: "وجود حساب جاري نشط للشركة لدى بنك بن دول.", en: "An active corporate current account with Bindowal Bank." } },
        { id: "req-cid-2", text: { ar: "تحديد مبلغ الوديعة والفترة الزمنية المناسبة.", en: "Specify the deposit amount and appropriate tenure." } },
        { id: "req-cid-3", text: { ar: "قرار مجلس الإدارة أو تفويض معتمد لربط الوديعة.", en: "Board resolution or authorized mandate to book the deposit." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات ربط وديعة استثمارية للشركة", en: "Steps to Book a Corporate Investment Deposit" },
      steps: [
        { id: "step-cid-1", title: { ar: "تحديد المبلغ والفترة", en: "Define Amount and Tenure" }, description: { ar: "حدد المبلغ المراد استثماره والفترة الزمنية الأنسب لخطط الشركة.", en: "Define the amount to invest and the most suitable tenure for company plans." } },
        { id: "step-cid-2", title: { ar: "توفير الوثائق المطلوبة", en: "Provide Required Documents" }, description: { ar: "قدم قرار مجلس الإدارة أو التفويض المعتمد مع بيانات الشركة.", en: "Submit the board resolution or authorized mandate with company details." } },
        { id: "step-cid-3", title: { ar: "تفعيل الوديعة والمتابعة", en: "Activate and Monitor" }, description: { ar: "يتم تفعيل الوديعة فور استيفاء الشروط وتبدأ احتساب الأرباح.", en: "The deposit is activated once requirements are met and profit calculation begins." } },
      ],
    },
    ctaSection: {
      title: { ar: "اجعل فوائض سيولة شركتك تعمل لصالحها", en: "Put Your Company's Surplus Liquidity to Work" },
      description: { ar: "لا تدع فوائض سيولة شركتك خاملة. افتح وديعة استثمارية مؤسسية الآن مع بنك بن دول.", en: "Don't let your company's surplus liquidity sit idle. Open a corporate investment deposit with Bindowal Bank now." },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-cid-1", question: { ar: "ما الفرق بين الوديعة الاستثمارية للأفراد وللشركات؟", en: "What is the difference between individual and corporate investment deposits?" }, answer: { ar: "وديعة الشركات تتطلب وثائق مؤسسية وتفويض رسمي، وقد تختلف في الحدود الدنيا والعوائد.", en: "Corporate deposits require institutional documents and formal authorization, and may differ in minimums and returns." } },
        { id: "faq-cid-2", question: { ar: "هل يمكن ربط أكثر من وديعة في نفس الوقت؟", en: "Can multiple deposits be booked simultaneously?" }, answer: { ar: "نعم، يمكن للشركة ربط أكثر من وديعة بفترات وعملات مختلفة وفق سياسة البنك.", en: "Yes, companies can book multiple deposits with different tenures and currencies per bank policy." } },
        { id: "faq-cid-3", question: { ar: "كيف يتم توزيع الأرباح على الشركة؟", en: "How are profits distributed to the company?" }, answer: { ar: "توزع الأرباح في نهاية كل فترة استثمارية وتُضاف مباشرة لحساب الشركة الجاري.", en: "Profits are distributed at the end of each period and added directly to the company's current account." } },
        { id: "faq-cid-4", question: { ar: "هل يمكن سحب الوديعة قبل انتهاء الفترة في حالات الطوارئ؟", en: "Can the deposit be withdrawn early in emergencies?" }, answer: { ar: "يمكن ذلك وفق الشروط المتفق عليها مسبقاً، وقد يؤثر على جزء من الأرباح المستحقة.", en: "This is possible under pre-agreed conditions and may affect a portion of earned profits." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه ودائع الشركات؟",
        en: "What Do Corporate Investment Deposits Offer?"
      },
      subtitle: {
        ar: "تساعد الودائع الاستثمارية للشركات على توظيف فوائض السيولة لفترات محددة بدل تركها دون خطة، مع مراعاة الضوابط المصرفية الإسلامية وسياسات البنك.",
        en: "Corporate investment deposits help businesses place surplus liquidity for defined periods instead of leaving it unmanaged, while following Islamic banking structures and bank policy."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "خيارات مدد مناسبة لإدارة السيولة وفق احتياجات الشركة.",
            en: "Tenure options suitable for managing liquidity according to company needs."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "تنظيم فائض النقد بعيدًا عن حساب التشغيل اليومي.",
            en: "Organize surplus cash separately from the daily operating account."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية المتابعة من خلال كشوفات أو بيانات مصرفية واضحة.",
            en: "Ability to monitor through clear statements or banking records."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسبة للشركات التي لديها دورات نقدية موسمية أو أرصدة مؤقتة.",
            en: "Suitable for companies with seasonal cash cycles or temporary balances."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "تخطيط أفضل للسيولة المؤسسية",
        en: "Better Corporate Liquidity Planning"
      },
      subtitle: {
        ar: "تتيح الخدمة للشركة الاستفادة من السيولة غير المستخدمة مع الحفاظ على وضوح في المدة والرصيد وآلية الإدارة.",
        en: "The service enables the company to benefit from unused liquidity while maintaining clarity over tenure, balance, and management method."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تقليل تجميد السيولة دون هدف واضح.",
            en: "Reduce idle liquidity without a clear objective."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "دعم التخطيط النقدي للرواتب والموردين والمشاريع القادمة.",
            en: "Support cash planning for payroll, suppliers, and upcoming projects."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "توفير سجل واضح للودائع والعوائد أو النتائج حسب السياسة المعتمدة.",
            en: "Provide a clear record of deposits and returns or outcomes according to policy."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "مرونة في اختيار مدة تتناسب مع دورة عمل الشركة.",
            en: "Flexibility to choose a tenure that fits the company’s business cycle."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "قرار مالي يحتاج تفويضًا واضحًا",
        en: "A Financial Decision Requiring Clear Authorization"
      },
      subtitle: {
        ar: "يتطلب فتح الوديعة الاستثمارية للشركة وجود حساب أعمال، قرار أو تفويض مناسب، وتحديد المبلغ والمدة وفق سياسة البنك.",
        en: "Opening a corporate investment deposit requires a business account, proper decision or authorization, and selecting the amount and tenure according to bank policy."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "وجود حساب أعمال فعّال باسم الشركة لدى البنك.",
            en: "An active business account in the company’s name with the bank."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "تفويض أو قرار من الجهة المخولة داخل الشركة حسب النظام الداخلي.",
            en: "Authorization or decision from the authorized body within the company."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "تحديد المبلغ والمدة واستكمال اتفاقية الوديعة.",
            en: "Select amount and tenure and complete the deposit agreement."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "فرع البنك أو مدير علاقة الأعمال لمراجعة الخيارات.",
            en: "Bank branch or business relationship manager to review options."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "خدمة العملاء لمعرفة المتطلبات العامة والمستندات.",
            en: "Customer service for general requirements and documents."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "قنوات الشركات الرقمية للمتابعة عند توفر الخدمة.",
            en: "Corporate digital channels for tracking when available."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "حوّل فائض السيولة إلى خطة",
        en: "Turn Surplus Liquidity into a Plan"
      },
      subtitle: {
        ar: "راجع احتياجات السيولة المستقبلية أولًا، ثم اختر مدة الوديعة والمبلغ المناسبين قبل اعتماد الطلب.",
        en: "Review future liquidity needs first, then choose the right deposit tenure and amount before approving the request."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تحليل السيولة",
            en: "Analyze Liquidity"
          },
          description: {
            ar: "حدد المبالغ غير المستخدمة والفترة التي يمكن استثمارها خلالها.",
            en: "Identify unused funds and the period during which they can be invested."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "اعتماد القرار",
            en: "Approve Internally"
          },
          description: {
            ar: "استكمل التفويض أو القرار الداخلي المطلوب من الشركة.",
            en: "Complete the internal authorization or decision required by the company."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "تفعيل الوديعة",
            en: "Activate Deposit"
          },
          description: {
            ar: "وقّع الاتفاقية ليتم إنشاء الوديعة ومتابعتها.",
            en: "Sign the agreement so the deposit can be created and monitored."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "نظّم سيولة شركتك بوضوح",
        en: "Organize Your Company’s Liquidity Clearly"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة خيارات ودائع الشركات والضوابط الحالية قبل اتخاذ القرار.",
        en: "Contact the bank to learn about corporate deposit options and current policies before making a decision."
      }
    }
  },
  {
    slug: "bank-guarantees",
    section: "business",
    title: {
      ar: "خطابات الضمان",
      en: "Letters of Guarantees"
    },
    subtitle: {
      ar: "حلول مصرفية تدعم أعمالك والتزاماتك التعاقدية",
      en: "Banking solutions supporting your business and contractual obligations"
    },
    heroImage: "/images/company-header-cover.png",
    breadcrumbs: [
      {
        labelKey: "nav.businessBanking",
        href: "/business-banking"
      },
      {
        labelKey: "nav.bankGuarantees",
        label: {
          ar: "خطابات الضمان",
          en: "Letters of Guarantees"
        }
      }
    ],
    tagline: {
      ar: "بن دول أعمال",
      en: "Business Banking"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "خطابات الضمان من بنك بن دول تمكنك من دخول المناقصات وتنفيذ المشاريع والالتزامات مع الجهات المختلفة. حلول مصرفية متوافقة مع الشريعة الإسلامية تلبي احتياجات الشركات والمؤسسات.",
      en: "Bank Guarantees from Bindowal Bank enable you to enter tenders, execute projects, and fulfill obligations with various entities. Islamic Sharia-compliant banking solutions meeting the needs of companies and institutions.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "تساعد خطابات الضمان الشركات والمؤسسات على الوفاء بالتزاماتها التعاقدية من خلال إصدار خطاب ضمان غير قابل للنقض لصالح جهة مستفيدة، بما يدعم المشاركة في المناقصات وتنفيذ العقود والمشاريع. يقدم بنك بن دول خدمة الضمانات البنكية بمختلف أنواعها وفق أحكام الشريعة الإسلامية وقوانين البنك المركزي اليمني والقوانين الدولية النافذة.",
        en: "Bank guarantees help companies and institutions fulfill their contractual obligations by issuing an irrevocable letter of guarantee in favor of a beneficiary, supporting participation in tenders and execution of contracts and projects. Bindowal Bank offers various types of bank guarantee services in accordance with Islamic Sharia, the laws of the Central Bank of Yemen, and applicable international laws.",
      },
    },
    why: {
      title: { ar: "لماذا الضمانات البنكية؟", en: "Why Bank Guarantees?" },
      description: {
        ar: "سواء كانت شركتك تنفذ مشاريع معمارية او خدمية او انشطة توريد مواد وسلع ، وتتطلب الى توفير ضمانات للجهات المستفيدة , فان خطابات الضمان الصادرة من بنك بن دول تمنحك وسيلة موثوقة لتعزيز الثقة مع الجهات المستفيدة، وتساعدك على تنفيذ التزاماتك التعاقدية وفق الأطر المصرفية المعتمدة.",
        en: "Whether your company is executing architectural, service, or supply projects, bank guarantees issued by Bindowal Bank provide a reliable way to build trust with beneficiaries and help you fulfill your contractual obligations in accordance with approved banking frameworks.",
      },
      items: [
        { id: "why-bg-1", text: { ar: "الدخول في المناقصات والعطاءات والمشاريع.", en: "Entering tenders, bids, and projects." } },
        { id: "why-bg-2", text: { ar: "توفير ضمانات لسداد الالتزامات والعقود المبرمة مع جميع الأطراف وفق العقود المبرمة.", en: "Providing guarantees for the settlement of obligations and contracts concluded with all parties in accordance with concluded contracts." } },
        { id: "why-bg-3", text: { ar: "تعزيز الثقة بين شركتك والجهات المتعاقدة.", en: "Enhancing trust between your company and the contracting parties." } },
        { id: "why-bg-4", text: { ar: "توفير الضمانات .", en: "Providing guarantees." } },
        { id: "why-bg-5", text: { ar: "الاستفادة من حلول مصرفية تناسب احتياجات أعمالك.", en: "Benefit from banking solutions that meet your business needs." } },


      ],
    },
    serviceTypes: {
      title: { ar: "أنواع الكفالات البنكية", en: "Types of Bank Guarantees" },
      description: { ar: "يقدم بنك بن دول مجموعة متنوعة من الضمانات لتلبية احتياجات عملائنا", en: "Bindowal Bank offers a variety of guarantees to meet our customers' needs" },
      items: [
        {
          id: "type-bg-1",
          title: { ar: "ضمانات ابتدائية (دخول مناقصة)", en: "Bid Bonds" },
          description: { ar: "تستخدم لدعم مشاركة الشركات في المناقصات والعطاءات العامة والخاصة.", en: "Used to support companies' participation in public and private tenders and bids." }
        },
        {
          id: "type-bg-2",
          title: { ar: "ضمانات نهائية (حسن تنفيذ)", en: "Performance Bonds" },
          description: { ar: "تضمن تنفيذ الأعمال أو الخدمات وفقًا لشروط العقد.", en: "Guarantees the execution of works or services in accordance with contract terms." }
        },
        {
          id: "type-bg-3",
          title: { ar: "ضمانات دفعة مقدمة", en: "Advance Payment Guarantees" },
          description: { ar: "تغطي المبالغ المدفوعة مقدمًا للموردين أو المقاولين.", en: "Covers amounts paid in advance to suppliers or contractors." }
        },
        {
          id: "type-bg-4",
          title: { ar: "ضمانات بنكية عامة", en: "General Bank Guarantees" },
          description: { ar: "ضمانات متنوعة لتلبية احتياجات العملاء المختلفة.", en: "Various guarantees to meet different customer needs." }
        }
      ]
    },
    featureCards: {
      title: { ar: "مميزات الضمانات البنكية", en: "Bank Guarantee Features" },
      items: [
        { id: "fc-bg-1", title: { ar: "متوافقة مع الشريعة الإسلامية", en: "Sharia Compliant" }, description: { ar: "تُقدم الخدمة وفق أحكام الشريعة الإسلامية والضوابط المصرفية المعتمدة.", en: "The service is provided in accordance with Islamic Sharia provisions and approved banking regulations." } },
        { id: "fc-bg-2", title: { ar: "إجراءات واضحة", en: "Clear procedures" }, description: { ar: "يتم إصدار الضمان بعد استكمال المتطلبات ودراسة الطلب وفق سياسة البنك.", en: "The guarantee is issued after completing the requirements and studying the application in accordance with bank policy." } },
        { id: "fc-bg-3", title: { ar: "دعم الأعمال والمشاريع", en: "Business & Projects Support" }, description: { ar: "تساعد الشركات على تنفيذ التزاماتها التعاقدية وتعزيز موثوقيتها أمام الجهات المستفيدة.", en: "Helps companies fulfill their contractual obligations and enhance their reliability before beneficiaries." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-bg-1", text: { ar: "شركات المقاولات والإنشاءات.", en: "Contracting and construction companies." } },
        { id: "aud-bg-2", text: { ar: "الشركات التجارية.", en: "Commercial companies." } },
        { id: "aud-bg-3", text: { ar: "الموردين والمستوردين.", en: "Suppliers and Importers." } },
        { id: "aud-bg-4", text: { ar: "الشركات المشاركة في المناقصات والعطاءات.", en: "Governmental institutions and establishments." } },
      ],
    },
    requirementsSection: {
      title: { ar: "الشروط والمتطلبات", en: "Requirements" },
      note: { ar: "يخضع إصدار الضمانات للدراسة الائتمانية للشركة وقد يُطلب تقديم غطاء نقدي جزئي أو كلي.", en: "Guarantee issuance is subject to the company's credit assessment, and partial or full cash margin may be required." },
      items: [
        { id: "req-bg-1", text: { ar: "تقديم طلب إصدار الضمان البنكي.", en: "A formal request to issue the guarantee" } },
        { id: "req-bg-2", text: { ar: "إرفاق المستندات المتعلقة بالعقد أو المناقصة.", en: "Attach documents related to the contract or tender." } },
        { id: "req-bg-3", text: { ar: "استكمال المتطلبات والضمانات وفق سياسة البنك.", en: "Complete requirements and guarantees according to bank policy." } },
        { id: "req-bg-4", text: { ar: "دراسة الطلب واستكمال الإجراءات.", en: "Study the request and complete the procedures." } },
        { id: "req-bg-5", text: { ar: "إصدار الضمان البنكي بعد الموافقة.", en: "Issue the guarantee after approval." } },
        { id: "req-bg-6", text: { ar: "تخضع جميع الطلبات للدراسة والاعتماد وفق الأنظمة المعمول بها.", en: "All applications are subject to study and approval in accordance with applicable regulations." } },
      ],
    },
    // stepsSection: {
    //   title: { ar: "خطوات إصدار الضمان البنكي", en: "Steps to Issue a Bank Guarantee" },
    //   steps: [
    //     { id: "step-bg-1", title: { ar: "تقديم الطلب والوثائق", en: "Submit Request and Documents" }, description: { ar: "قدم طلب الإصدار مع نسخة من العقد أو المناقصة إلى مدير العلاقة الخاص بك.", en: "Submit the issuance request with a copy of the contract or tender to your relationship manager." } },
    //     { id: "step-bg-2", title: { ar: "الدراسة والموافقة", en: "Assessment and Approval" }, description: { ar: "يقوم البنك بدراسة الطلب والملاءة المالية للشركة وتحديد نسبة الغطاء النقدي.", en: "The bank assesses the request and the company's financial solvency, determining the cash margin percentage." } },
    //     { id: "step-bg-3", title: { ar: "توقيع العقود واستلام خطاب الضمان", en: "Sign Contracts and Receive Guarantee Letter" }, description: { ar: "بعد الموافقة يتم استكمال المستندات وتصدر وثيقة الضمان لتسليمها للمستفيد.", en: "After approval, documents are completed and the guarantee letter is issued for delivery to the beneficiary." } },
    //   ],
    // },
    ctaSection: {
      title: { ar: "وسّع نطاق أعمالك بثقة", en: "Expand Your reach with confidence" },
      description: { ar: "اطلب خطابات الضمان البنكي من بنك بن دول، واستفد من حلول مصرفية تدعم مشاركتك في المناقصات والعقود والمشاريع.", en: "Request bank guarantees from Bindowal Bank, and benefit from financial solutions that support your participation in tenders, contracts, and projects." },
      primaryLabel: { ar: "ابدأ الآن", en: "Start Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-bg-1", question: { ar: "ما هي خطابات الضمان البنكية؟", en: "What is the bank guarantee?" }, answer: { ar: "هي تعهد يصدره البنك لصالح جهة مستفيدة، يضمن الوفاء بالتزامات العميل وفق شروط الضمان.", en: "It is a commitment issued by the bank in favor of a beneficiary, guaranteeing the fulfillment of the customer's obligations in accordance with the guarantee terms." } },
        { id: "faq-bg-2", question: { ar: "ما هي أنواع خطابات الضمان البنكية التي يقدمها البنك؟", en: "what is the type of bank guarantees that the bank provides?" }, answer: { ar: "تشمل الضمانات البنكية أنواعًا مختلفة، مثل ابتدائي, تنفيذ, دفعة مقدمة، صيانة, جمركي, وضمان الدفع.", en: "Bank guarantees include various types, such as bid bonds, performance bonds, advance payment bonds, maintenance bonds, customs bonds, and payment guarantees." } },
        { id: "faq-bg-3", question: { ar: "هل تخضع خطابات الضمان البنكية لدراسة الطلب؟", en: "Are shipping and customs clearance guarantees available?" }, answer: { ar: "نعم، يتم إصدار الضمان بعد دراسة الطلب واستيفاء الشروط والمتطلبات المعتمدة.", en: "All applications are subject to study and approval in accordance with applicable regulations." } },
        { id: "faq-bg-4", question: { ar: "هل يشترط وجود حساب لدى بنك بن دول؟", en: "Does Bindowal Bank require an account to issue bank guarantees?" }, answer: { ar: "نعم، يشترط وجود حساب مصرفي فعال لدى البنك للاستفادة من الخدمة.", en: "yes, an active bank account is required with the bank to benefit from the service" } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه الضمانات البنكية؟",
        en: "What Do Bank Guarantees Offer?"
      },
      subtitle: {
        ar: "تساعد الضمانات البنكية الشركات على تقديم تعهد مصرفي لصالح جهة مستفيدة ضمن مناقصة أو عقد أو التزام محدد، وفق دراسة البنك وشروط الإصدار.",
        en: "Bank guarantees help companies provide a bank undertaking in favor of a beneficiary for a tender, contract, or specific obligation, subject to bank assessment and issuance conditions."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إصدار ضمانات موجهة للمناقصات أو حسن التنفيذ أو الدفعات حسب الحاجة.",
            en: "Issue guarantees for tenders, performance, or payments depending on need."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "تحديد مبلغ الضمان ومدته والمستفيد منه وفق مستندات الطلب.",
            en: "Define guarantee amount, validity, and beneficiary according to request documents."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "دراسة الطلب بناءً على المركز المالي والضمانات والسياسات المعتمدة.",
            en: "Assess the request based on financial position, collateral, and approved policies."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسبة للشركات التي تتعامل مع مشاريع أو جهات تطلب ضمانًا رسميًا.",
            en: "Suitable for companies working with projects or entities requiring an official guarantee."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "تعزيز الثقة في التزامات الأعمال",
        en: "Strengthening Trust in Business Obligations"
      },
      subtitle: {
        ar: "يساعد الضمان البنكي الشركة على إثبات الجدية والقدرة على الوفاء أمام الجهات المستفيدة، خاصة في المناقصات والعقود.",
        en: "A bank guarantee helps the company demonstrate seriousness and capacity to fulfill obligations to beneficiaries, especially in tenders and contracts."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "رفع موثوقية الشركة عند التقديم للمناقصات أو المشاريع.",
            en: "Increase company credibility when applying for tenders or projects."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "توفير أداة مصرفية معترف بها لدعم الالتزامات التعاقدية.",
            en: "Provide a recognized banking instrument to support contractual obligations."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "تنظيم العلاقة مع المستفيد من خلال مبلغ ومدة وشروط واضحة.",
            en: "Organize the relationship with the beneficiary through clear amount, duration, and terms."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "إتاحة حلول تتناسب مع طبيعة العقد ودراسة البنك للعميل.",
            en: "Enable solutions suited to the contract nature and the bank’s customer assessment."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "الضمان يحتاج دراسة وموافقة",
        en: "Guarantees Require Assessment and Approval"
      },
      subtitle: {
        ar: "يتطلب إصدار الضمان تقديم مستندات المشروع أو المناقصة، بيانات المستفيد، تفويض الشركة، وأي ضمانات أو تغطيات يطلبها البنك.",
        en: "Issuing a guarantee requires project or tender documents, beneficiary details, company authorization, and any collateral or coverage requested by the bank."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "طلب رسمي يوضح نوع الضمان والمبلغ والمدة والمستفيد.",
            en: "Official request stating guarantee type, amount, validity, and beneficiary."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "مستندات العقد أو المناقصة أو الالتزام المطلوب ضمانه.",
            en: "Contract, tender, or obligation documents to be guaranteed."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "وثائق الشركة والتفويضات والتغطيات المطلوبة حسب تقييم البنك.",
            en: "Company documents, authorizations, and required coverage based on bank assessment."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "فريق خدمات الأعمال أو الفرع المختص لدراسة الطلب.",
            en: "Business banking team or designated branch to assess the request."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "مدير علاقة الشركات للطلبات المتكررة أو الكبيرة.",
            en: "Corporate relationship manager for recurring or larger requests."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "خدمة العملاء للاستعلام عن المستندات العامة ومراحل الطلب.",
            en: "Customer service for general documents and request stages."
          }
        }
      ]
    },
    // subscribe: {
    //   title: {
    //     ar: "من الطلب إلى الإصدار",
    //     en: "From Request to Issuance"
    //   },
    //   subtitle: {
    //     ar: "تمر الخدمة بمراجعة المستندات ودراسة المخاطر والتغطيات، ثم إصدار الضمان عند استيفاء الشروط.",
    //     en: "The service goes through document review, risk and coverage assessment, then guarantee issuance once conditions are met."
    //   },
    //   steps: [
    //     {
    //       id: "step-1",
    //       title: {
    //         ar: "تقديم مستندات الالتزام",
    //         en: "Submit Obligation Documents"
    //       },
    //       description: {
    //         ar: "قدّم العقد أو المناقصة وبيانات المستفيد ونوع الضمان المطلوب.",
    //         en: "Submit the contract or tender, beneficiary details, and required guarantee type."
    //       }
    //     },
    //     {
    //       id: "step-2",
    //       title: {
    //         ar: "دراسة الطلب",
    //         en: "Assess Request"
    //       },
    //       description: {
    //         ar: "يقوم البنك بمراجعة المستندات والمركز المالي والتغطيات المطلوبة.",
    //         en: "The bank reviews documents, financial position, and required coverage."
    //       }
    //     },
    //     {
    //       id: "step-3",
    //       title: {
    //         ar: "الإصدار والتسليم",
    //         en: "Issue and Deliver"
    //       },
    //       description: {
    //         ar: "بعد الموافقة واستيفاء الشروط يتم إصدار الضمان وتسليمه وفق الآلية المعتمدة.",
    //         en: "After approval and fulfillment of conditions, the guarantee is issued and delivered according to the approved process."
    //       }
    //     }
    //   ]
    // },
    // nextStep: {
    //   title: {
    //     ar: "ادعم عقودك بضمان مصرفي",
    //     en: "Support Your Contracts with a Bank Guarantee"
    //   },
    //   description: {
    //     ar: "تواصل مع فريق خدمات الأعمال لمعرفة نوع الضمان المناسب والمستندات المطلوبة.",
    //     en: "Contact the business banking team to identify the suitable guarantee type and required documents."
    //   }
    // }
  },
  {
    slug: "vip",
    section: "accounts",
    title: {
      ar: "كبار العملاء",
      en: "VIP Customers"
    },
    subtitle: {
      ar: "تجربة مصرفية أكثر عناية لعملاء الاحتياجات المالية المتقدمة",
      en: "A more attentive banking experience for clients with advanced financial needs"
    },
    heroImage: "/images/personalCover.png",
    breadcrumbs: [
      {
        labelKey: "nav.specializedServices",
        href: "/specialized-services"
      },
      {
        labelKey: "nav.premiumServices",
        label: {
          ar: "كبار العملاء",
          en: "VIP Customers"
        }
      }
    ],
    tagline: {
      ar: "الحسابات",
      en: "Customer Accounts"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "استمتع بتجربة مصرفية استثنائية مع الخدمة المصرفية لكبار العملاء (VIP) من بنك بن دول. أولوية في الخدمة، مدراء علاقات مخصصون، وحلول مالية مصممة خصيصاً لك.",
      en: "Enjoy an exceptional banking experience with VIP Banking from Bindowal Bank. Priority service, dedicated relationship managers, and tailored financial solutions.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "توفر خدمة كبار العملاء تجربة مصرفية أكثر خصوصية، تركّز على سرعة المتابعة، وضوح الخيارات، وربط العميل بالخدمات المناسبة لاحتياجاته.",
        en: "VIP banking provides a more personalized experience focused on faster follow-up, clearer options, and connecting clients with services suited to their needs.",
      },
    },
    why: {
      title: { ar: "لماذا الخدمة المصرفية VIP؟", en: "Why VIP Banking?" },
      description: {
        ar: "لأن وقتك ثمين وتطلعاتك المالية تتطلب اهتماماً خاصاً وحلولاً حصرية ترقى لمستوى طموحاتك.",
        en: "Because your time is valuable and your financial aspirations require special attention and exclusive solutions that match your ambitions.",
      },
      items: [
        { id: "why-vip-1", text: { ar: "أولوية مطلقة في إنجاز المعاملات داخل الفروع وعبر القنوات الرقمية.", en: "Absolute priority in processing transactions within branches and across digital channels." } },
        { id: "why-vip-2", text: { ar: "الوصول إلى منتجات مصرفية واستثمارية حصرية وذات عوائد متميزة.", en: "Access to exclusive banking and investment products with outstanding returns." } },
        { id: "why-vip-3", text: { ar: "تجربة مصرفية تتسم بأعلى درجات الخصوصية والسرية التامة.", en: "A banking experience characterized by the highest degrees of privacy and strict confidentiality." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات خدمة كبار العملاء", en: "VIP Banking Features" },
      items: [
        { id: "fc-vip-1", title: { ar: "مدير علاقات مخصص", en: "Dedicated Relationship Manager" }, description: { ar: "مستشار مالي شخصي لفهم احتياجاتك وإدارة محفظتك المالية باحترافية.", en: "A personal financial advisor to understand your needs and manage your portfolio professionally." } },
        { id: "fc-vip-2", title: { ar: "صالات ضيافة حصرية", en: "Exclusive Lounges" }, description: { ar: "إنجاز معاملاتك في صالات VIP خاصة توفر لك الراحة والخصوصية التامة.", en: "Complete your transactions in private VIP lounges offering you comfort and absolute privacy." } },
        { id: "fc-vip-3", title: { ar: "أسعار وعمولات تفضيلية", en: "Preferential Rates & Fees" }, description: { ar: "إعفاءات من رسوم التحويلات وأسعار صرف متميزة للعملات الأجنبية.", en: "Exemptions from transfer fees and premium foreign exchange rates." } },
        { id: "fc-vip-4", title: { ar: "بطاقات ائتمانية مميزة", en: "Premium Credit Cards" }, description: { ar: "بطاقات ذات سقف ائتماني عالٍ مع مزايا دخول صالات المطارات عالمياً.", en: "High-limit credit cards with global airport lounge access benefits." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-vip-1", text: { ar: "رجال الأعمال وأصحاب الثروات والمستثمرون.", en: "Businessmen, high-net-worth individuals, and investors." } },
        { id: "aud-vip-2", text: { ar: "المدراء التنفيذيون وأصحاب المناصب القيادية.", en: "Executives and holders of leadership positions." } },
        { id: "aud-vip-3", text: { ar: "العملاء ذوي الأرصدة أو الودائع العالية المستوفين لشروط العضوية.", en: "Clients with high balances or deposits meeting membership criteria." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط الانضمام لخدمة VIP", en: "VIP Service Joining Requirements" },
      note: { ar: "يتم تقييم أهلية الانضمام بشكل دوري بناءً على متوسط الرصيد وحجم التعاملات مع البنك.", en: "Eligibility is evaluated periodically based on average balance and transaction volume with the bank." },
      items: [
        { id: "req-vip-1", text: { ar: "الاحتفاظ بمتوسط رصيد حساب (جاري أو توفير) لا يقل عن الحد المعتمد للخدمة.", en: "Maintain an average account balance (current or savings) not less than the approved limit for the service." } },
        { id: "req-vip-2", text: { ar: "أو امتلاك ودائع استثمارية نشطة تتجاوز قيمتها الحد المؤهل للخدمة.", en: "Or hold active investment deposits exceeding the qualifying limit for the service." } },
        { id: "req-vip-3", text: { ar: "استيفاء إجراءات اعرف عميلك (KYC) وتقديم المستندات الثبوتية السارية.", en: "Complete KYC procedures and provide valid identification documents." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات الترقية لخدمة كبار العملاء", en: "Steps to Upgrade to VIP Banking" },
      steps: [
        { id: "step-vip-1", title: { ar: "التحقق من الأهلية", en: "Check Eligibility" }, description: { ar: "تأكد من استيفاء حساباتك للحد الأدنى المطلوب للانضمام للخدمة.", en: "Ensure your accounts meet the minimum required threshold to join the service." } },
        { id: "step-vip-2", title: { ar: "التواصل أو زيارة الفرع", en: "Contact or Visit Branch" }, description: { ar: "تواصل مع خدمة العملاء أو قم بزيارة صالة VIP في الفرع الرئيسي.", en: "Contact customer service or visit the VIP lounge at the main branch." } },
        { id: "step-vip-3", title: { ar: "تفعيل العضوية واستلام البطاقة", en: "Activate Membership & Receive Card" }, description: { ar: "يتم ترقية حسابك وتخصيص مدير علاقة لك وإصدار بطاقتك المميزة.", en: "Your account is upgraded, a relationship manager is assigned, and your premium card is issued." } },
      ],
    },
    ctaSection: {
      title: { ar: "ارتقِ بتجربتك المصرفية", en: "Elevate Your Banking Experience" },
      description: { ar: "انضم الآن لنخبة عملاء بنك بن دول واستمتع بعالم من المزايا الحصرية والخدمات المصممة لتلائم تطلعاتك.", en: "Join the elite clients of Bindowal Bank now and enjoy a world of exclusive benefits and services tailored to your aspirations." },
      primaryLabel: { ar: "اطلب الانضمام الآن", en: "Request to Join Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "تحدث مع مستشار", en: "Speak with an Advisor" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-vip-1", question: { ar: "هل الانضمام لخدمة كبار العملاء متاح للجميع؟", en: "Is joining the VIP service available to everyone?" }, answer: { ar: "الخدمة متاحة للعملاء الذين يستوفون شروط الحد الأدنى للأرصدة أو الودائع المعتمدة لدى البنك.", en: "The service is available to clients who meet the bank's approved minimum balance or deposit requirements." } },
        { id: "faq-vip-2", question: { ar: "كيف أتواصل مع مدير العلاقة المخصص لي؟", en: "How do I contact my dedicated relationship manager?" }, answer: { ar: "سيتم تزويدك برقم هاتف مباشر وبريد إلكتروني خاص بمدير العلاقة لتسهيل التواصل المباشر في أي وقت.", en: "You will be provided with a direct phone number and email for your relationship manager to facilitate direct communication anytime." } },
        { id: "faq-vip-3", question: { ar: "ماذا يحدث إذا انخفض رصيدي عن الحد المطلوب للخدمة؟", en: "What happens if my balance falls below the required limit?" }, answer: { ar: "يُمنح العميل فترة سماح معينة لإعادة الرصيد للحد المطلوب، وإلا قد يتم تعديل فئة العضوية بناءً على سياسة البنك.", en: "A grace period is granted to restore the balance to the required limit, otherwise the membership tier may be adjusted based on bank policy." } },
        { id: "faq-vip-4", question: { ar: "هل تشمل الخدمة ميزات لعائلتي؟", en: "Does the service include benefits for my family?" }, answer: { ar: "نعم، تتيح الخدمة إمكانية إصدار بطاقات إضافية لأفراد العائلة وإدراجهم ضمن بعض مزايا الـ VIP.", en: "Yes, the service allows issuing supplementary cards for family members and including them in certain VIP benefits." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي تقدمه خدمة كبار العملاء؟",
        en: "What Does VIP Banking Offer?"
      },
      subtitle: {
        ar: "توفر خدمة كبار العملاء تجربة مصرفية أكثر خصوصية، تركّز على سرعة المتابعة، وضوح الخيارات، وربط العميل بالخدمات المناسبة لاحتياجاته.",
        en: "VIP banking provides a more personalized experience focused on faster follow-up, clearer options, and connecting clients with services suited to their needs."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "متابعة أكثر اهتمامًا لطلبات العميل واستفساراته المصرفية.",
            en: "More attentive follow-up for customer requests and banking inquiries."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "مساعدة في اختيار الحسابات والودائع والخدمات المناسبة.",
            en: "Assistance in selecting suitable accounts, deposits, and services."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية تنسيق مواعيد أو إجراءات عبر قنوات خدمة مخصصة عند توفرها.",
            en: "Ability to coordinate appointments or procedures through dedicated channels when available."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "تجربة مصممة للعملاء ذوي التعاملات أو الأرصدة الأعلى حسب معايير البنك.",
            en: "An experience designed for clients with higher balances or activity according to bank criteria."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "خدمة أكثر ملاءمة لاحتياجاتك",
        en: "Service Better Matched to Your Needs"
      },
      subtitle: {
        ar: "تساعد هذه الفئة العميل على إدارة احتياجاته المصرفية بوضوح أكبر، وتقليل الوقت المستغرق في التنسيق والمتابعة.",
        en: "This segment helps clients manage banking needs more clearly and reduce the time spent on coordination and follow-up."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تجربة خدمة أكثر سلاسة عند تنفيذ الطلبات المتكررة.",
            en: "A smoother service experience for recurring requests."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "إرشاد أفضل للخيارات التي تناسب نمط العميل المالي.",
            en: "Better guidance on options that suit the client’s financial profile."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "تعزيز الشعور بالثقة والاهتمام في التعاملات المصرفية.",
            en: "Greater confidence and attention in banking interactions."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "ربط الخدمات المختلفة في تجربة واحدة أكثر تنظيمًا.",
            en: "Connect multiple services into one more organized experience."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "الأهلية حسب معايير البنك",
        en: "Eligibility According to Bank Criteria"
      },
      subtitle: {
        ar: "تعتمد أهلية العميل لهذه الفئة على معايير داخلية مثل نوع العلاقة المصرفية، حجم التعاملات، أو الأرصدة، حسب السياسة المعتمدة.",
        en: "Eligibility for this segment depends on internal criteria such as relationship type, transaction volume, or balances according to approved policy."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "وجود علاقة مصرفية نشطة مع البنك أو طلب الانضمام للفئة.",
            en: "An active banking relationship with the bank or a request to join the segment."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "استيفاء معايير الأهلية المعتمدة لدى البنك.",
            en: "Meeting the bank’s approved eligibility criteria."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "تحديث بيانات العميل والوثائق المطلوبة عند الحاجة.",
            en: "Updating customer data and required documents when needed."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع للاستفسار عن فئة كبار العملاء.",
            en: "Visit a branch to inquire about VIP customer segment."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "التواصل مع خدمة العملاء لمعرفة شروط الأهلية العامة.",
            en: "Contact customer service to understand general eligibility conditions."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "التنسيق مع موظف العلاقة عند توفره للعملاء المؤهلين.",
            en: "Coordinate with a relationship officer when available for eligible clients."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "انضم لتجربة أكثر خصوصية",
        en: "Join a More Personalized Experience"
      },
      subtitle: {
        ar: "تبدأ الخدمة بمراجعة أهلية العميل وتحديث بياناته، ثم تحديد آلية المتابعة المناسبة له.",
        en: "The service starts by reviewing customer eligibility and updating details, then defining the suitable follow-up method."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "طلب المراجعة",
            en: "Request Review"
          },
          description: {
            ar: "قدّم طلب الاستفسار أو الانضمام لفئة كبار العملاء.",
            en: "Submit an inquiry or request to join the VIP segment."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقييم الأهلية",
            en: "Assess Eligibility"
          },
          description: {
            ar: "يقوم البنك بمراجعة العلاقة المصرفية والمعايير المعتمدة.",
            en: "The bank reviews the banking relationship and approved criteria."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "تفعيل تجربة الخدمة",
            en: "Activate Service Experience"
          },
          description: {
            ar: "بعد القبول يتم تحديد قنوات المتابعة والخدمات الأنسب.",
            en: "Once accepted, follow-up channels and suitable services are defined."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "هل تناسبك خدمة كبار العملاء؟",
        en: "Is VIP Banking Right for You?"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة معايير الانضمام والخدمات المتاحة لهذه الفئة.",
        en: "Contact the bank to learn about joining criteria and services available for this segment."
      }
    }
  },
  {
    slug: "noor",
    section: "accounts",
    title: {
      ar: "حساب نور للسيدات",
      en: "Noor Account (Ladies)"
    },
    subtitle: {
      ar: "تجربة مصرفية صُممت لإدارة أموالك باستقلالية وراحة",
      en: "A banking experience designed to manage your finances with independence and comfort"
    },
    heroImage: "/images/financing-services/4.webp",
    breadcrumbs: [
      {
        labelKey: "nav.specializedServices",
        href: "/specialized-services"
      },
      {
        labelKey: "nav.noorAccount",
        label: {
          ar: "حساب نور",
          en: "Noor Account"
        }
      }
    ],
    tagline: {
      ar: "الحسابات",
      en: "Customer Accounts"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "اكتشفي حساب نور للسيدات من بنك بن دول، حساب مصرفي مصمم لتلبية احتياجاتك اليومية والادخارية بخصوصية ومرونة وخدمات تناسب أسلوب حياتك.",
      en: "Explore Noor Account for Women from Bindowal Bank, a tailored banking solution meeting your daily and saving needs with privacy, flexibility, and lifestyle-aligned services.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "حساب نور للسيدات من بنك بن دول يمنحكِ تجربة مصرفية متكاملة تلبي احتياجاتك اليومية وتساعدكِ على إدارة اموالك بسهولة وخصوصية. يوفر لكِ الحساب حلولًا مالية مرنة وخدمات مصرفية مصممة لتناسب مختلف مراحل حياتكِ، سواء كنتِ موظفة، أو سيدة أعمال، أو طالبة، أو ترغبين في إدارة مدخراتكِ بطريقة أكثر تنظيمًا واستقلالية. من خلال حساب نور، يمكنكِ الوصول إلى الخدمات المصرفية والاستفادة من المزايا المصممة خصيصًا لدعم طموحاتكِ وخططكِ المالية.",
        en: "Bindowal Bank's Noor Account for Women offers a comprehensive banking experience tailored to your daily needs, helping you manage your finances with ease and privacy. The account provides flexible financial solutions and banking services designed to support you at various life stages, whether you are employed, a business owner, a student, or looking to organize your savings more effectively and independently. Through Noor Account, you can access banking services and benefit from features specifically designed to support your ambitions and financial goals.",
      },
    },
    why: {
      title: { ar: "لماذا حساب نور للسيدات؟", en: "Why Noor Account for Women?" },
      description: {
        ar: "لأننا ندرك أن احتياجاتكِ المالية مختلفة، صممنا لكِ حساب نور ليمنحكِ الخصوصية وخدمات مصرفية أكثر قربًا وخصوصية، تساعدكِ على إدارة أموالكِ بثقة وتحقيق أهدافكِ المالية.",
        en: "Because we recognize that your financial needs differ, we designed Noor Account to provide you with privacy and banking services that are closer and more personalized, helping you manage your money with confidence and achieve your financial goals.",
      },
      items: [
        { id: "why-noor-1", text: { ar: "إدارة أموالكِ اليومية بسهولة وخصوصية.", en: "Manage your daily finances easily and privately." } },
        { id: "why-noor-2", text: { ar: "تنظيم مدخراتكِ ووضع خطط مالية تناسب احتياجاتكِ.", en: "Organize your savings and create financial plans that suit your needs." } },
        { id: "why-noor-3", text: { ar: "الاستفادة من خدمات ومزايا مصرفية مخصصة للسيدات.", en: "Benefit from banking services and advantages tailored for women." } },
        { id: "why-noor-4", text: { ar: "الحصول على تجربة مصرفية أكثر راحة عبر قنوات وخدمات مصممة لكِ.", en: "Get a more comfortable banking experience through channels and services designed for you." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات حساب نور للسيدات", en: "Noor Account Features" },
      items: [
        { id: "fc-noor-1", title: { ar: "خصوصية وراحة في التعامل", en: "Complete Privacy and Convenience" }, description: { ar: "خدمات مصرفية مخصصة للسيدات، بما يوفر لكِ تجربة أكثر سهولة وخصوصية.", en: "Banking services tailored for women, providing a more convenient and private experience." } },
        { id: "fc-noor-2", title: { ar: "إدارة الحساب من مكانك", en: "Manage Your Account from Anywhere" }, description: { ar: "من خلال تطبيق بن دول يمكنك إدارة حسابك وارسال واستقبال الأموال والشراء من المتاجر الالكترونية مباشرة عن بٌعد.", en: "Through Bindowal Bank's app, you can manage your account, send and receive money, and shop directly from e-stores remotely." } },
        { id: "fc-noor-3", title: { ar: "بطاقة مصرفية بتصميم مميز", en: "Debit and Credit Cards with Special Designs" }, description: { ar: "استمتعي ببطاقة صراف آلي مصممة ضمن برنامج نور، مع مزايا تسهّل عمليات الشراء والسحب اليومية.", en: "Enjoy a debit card designed within the Noor program, with features that facilitate daily purchases and withdrawals." } },
        { id: "fc-noor-4", title: { ar: "خيارات ادخارية مرنة", en: "Flexible Savings Options" }, description: { ar: "إمكانية الاستفادة من حلول الادخار والمنتجات الاستثمارية التي تساعدكِ على التخطيط لمستقبلكِ المالي.", en: "Access to flexible savings solutions and investment products that help you plan for your financial future." } },
        { id: "fc-noor-5", title: { ar: "تمويل نور للسيدات", en: "Noor Finance for Women" }, description: { ar: "يتيح لك حساب نور الحصول على تمويل نور المخصص للسيدات ورائدات الاعمال بشروط مخصصة ومتوافقة مع احكام الشريعة الإسلامية.", en: "Noor Account enables you to get Noor Finance tailored for women and female entrepreneurs, with terms compliant with Islamic Sharia law." } },
        { id: "fc-noor-6", title: { ar: "خدمات مصرفية تناسب أسلوب حياتكِ", en: "Banking Services That Suit Your Lifestyle" }, description: { ar: "إدارة حسابكِ والاستفادة من الخدمات المصرفية بسهولة عبر القنوات المتاحة من بنك بن دول.", en: "Manage your account and benefit from banking services easily through the channels available from Bindowal Bank." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-noor-1", text: { ar: "السيدات الراغبات في إدارة أموالهن بسهولة.", en: "Women who want to manage their money with ease." } },
        { id: "aud-noor-2", text: { ar: "سيدات الأعمال واصحاب المشاريع الصغيرة.", en: "Business women and owners of small projects" } },
        { id: "aud-noor-3", text: { ar: "ربات البيوت الراغبات في تنظيم مدخراتهن.", en: "Housewives wishing to manage their savings" } },
        { id: "aud-noor-4", text: { ar: "الطالبات الراغبات في بناء عادات مالية سليمة.", en: "Female students looking to develop sound financial habits." } },
        { id: "aud-noor-5", text: { ar: "كل سيدة تبحث عن تجربة مصرفية مخصصة تلبي احتياجاتها.", en: "Every woman looking for a personalized banking experience that meets her needs." } },
      ],
    },
    requirementsSection: {
      title: { ar: "الشروط والمتطلبات", en: "Requirements" },
      items: [
        { id: "req-noor-1", text: { ar: "بطاقة الهوية الوطنية أو جواز السفر الساري المفعول.", en: "Valid national ID or passport." } },
        { id: "req-noor-2", text: { ar: "ألا يقل العمر عن 18 عاماً.", en: "Minimum age of 18 years." } },
        { id: "req-noor-3", text: { ar: "تعبئة نموذج طلب فتح الحساب.", en: "Fill out the account opening form." } },
        { id: "req-noor-4", text: { ar: "استكمال المستندات المطلوبة وفق إجراءات البنك.", en: "Complete the required documents in accordance with the bank's procedures." } },
        { id: "req-noor-5", text: { ar: "سيتم فتح الحساب بعد استكمال الإجراءات.", en: "The account will be opened after completing the procedures." } },
      ],
    },
    // stepsSection: {
    //   title: { ar: "خطوات فتح حساب نور", en: "Steps to Open a Noor Account" },
    //   steps: [
    //     { id: "step-noor-1", title: { ar: "تقديم الطلب", en: "Submit Request" }, description: { ar: "زوري أقرب فرع يقدم خدمات السيدات أو اطلبي الخدمة عبر التطبيق.", en: "Visit the nearest branch offering women's services or request it via the app." } },
    //     { id: "step-noor-2", title: { ar: "إكمال الإجراءات", en: "Complete Procedures" }, description: { ar: "قدمي الوثائق الثبوتية واختاري المنتجات المصرفية التي تناسبك.", en: "Provide your identification documents and choose the banking products that suit you." } },
    //     { id: "step-noor-3", title: { ar: "استلام البطاقة", en: "Receive Card" }, description: { ar: "استلمي بطاقتك الخاصة ببرنامج نور وابدئي بتجربة مصرفية مميزة.", en: "Receive your Noor program card and start a unique banking experience." } },
    //   ],
    // },
    ctaSection: {
      title: { ar: "استقلاليتكِ المالية تبدأ بخطوة.", en: "Your financial independence begins with one step." },
      description: { ar: "افتحي حساب نور للسيدات اليوم، واستمتعي بتجربة مصرفية صُممت لتناسب احتياجاتكِ وطموحاتكِ.", en: "Open a Noor account for women today, and enjoy a banking experience designed to suit your needs and aspirations." },
      primaryLabel: { ar: "ابدئي الآن", en: "Start Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "الاستفسار والمساعدة", en: "Inquiry and Help" },
      secondaryHref: "tel:+9678000644",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-noor-1", question: { ar: "ما هو حساب نور للسيدات؟", en: "What is Noor account for women?" }, answer: { ar: "هو حساب مصرفي صُمم خصيصًا للسيدات لتلبية احتياجاتهن اليومية والادخارية، مع توفير خدمات ومزايا تناسب أسلوب حياتهن.", en: "Noor is a bank account designed specifically for women to meet their daily and savings needs, offering services and benefits that suit their lifestyle." } },
        { id: "faq-noor-2", question: { ar: "من يمكنها فتح حساب نور؟", en: "Who can open a Noor account?" }, answer: { ar: "يمكن للسيدات ممن تنطبق عليهن شروط فتح الحساب الاستفادة من برنامج نور.", en: "Women who meet the account opening requirements can benefit from the Noor program." } },
        { id: "faq-noor-3", question: { ar: "هل يمكن ربط حساب نور بالخدمات التمويلية؟", en: "Can Noor account be linked to financing services?" }, answer: { ar: "نعم، يمكن لحاملة حساب نور الاستفادة من المنتجات التمويلية المتاحة وفق الشروط والأحكام المعتمدة لدى البنك.", en: "Yes, Noor account holders can benefit from financing services according to the bank's terms and conditions." } },
        { id: "faq-noor-4", question: { ar: "هل يوفر حساب نور خدمات ادخارية؟", en: "Does Noor account offer savings services?" }, answer: { ar: "نعم، يتيح الحساب إمكانية الاستفادة من حلول ومنتجات ادخارية واستثمارية متوفرة لدى بنك بن دول.", en: "Yes, Noor account holders can benefit from financing services according to the bank's terms and conditions." } },
        { id: "faq-noor-5", question: { ar: "أين يمكنني فتح حساب نور؟", en: "Where can I open a Noor account?" }, answer: { ar: "يمكنكِ زيارة أقرب فرع لبنك بن دول أو استخدام القنوات المصرفية المتاحة لطلب الخدمة.", en: "You can visit the nearest branch of Bin Dowal Bank or use the available banking channels to request the service." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه حساب نور؟",
        en: "What Does Noor Account Offer?"
      },
      subtitle: {
        ar: "يركز حساب نور على توفير تجربة مصرفية عملية للسيدات، تجمع بين إدارة الاستخدام اليومي وتنظيم الادخار والوصول إلى القنوات المناسبة.",
        en: "Noor Account focuses on a practical banking experience for women, combining daily money management, saving organization, and access to suitable channels."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إدارة المصروفات اليومية والادخار من خلال حساب واضح وسهل المتابعة.",
            en: "Manage daily expenses and savings through a clear, easy-to-track account."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "إمكانية ربط الحساب بالخدمات الرقمية أو البطاقة عند توفرها.",
            en: "Ability to link the account to digital services or card services when available."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "خدمة مناسبة للاستخدام الشخصي أو العائلي أو المشاريع الصغيرة المنزلية.",
            en: "Suitable for personal, family, or small home-based business use."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "دعم الوصول للخدمات المصرفية بطريقة مرنة حسب القنوات المتاحة.",
            en: "Support access to banking services flexibly through available channels."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "تمكين مالي عملي",
        en: "Practical Financial Empowerment"
      },
      subtitle: {
        ar: "يساعد الحساب على تنظيم الدخل والمصاريف والادخار بصورة أبسط، مع تجربة تناسب احتياجات المرأة العصرية.",
        en: "The account helps organize income, expenses, and savings more simply through an experience suited to modern women’s needs."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تنظيم أفضل للمصاريف الشخصية والعائلية.",
            en: "Better organization of personal and family expenses."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "سهولة متابعة الرصيد والحركات من خلال القنوات المناسبة.",
            en: "Easy tracking of balance and transactions through suitable channels."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "دعم الاستقلالية المالية عبر حساب مخصص وواضح.",
            en: "Support financial independence through a dedicated and clear account."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "إمكانية الاستفادة من خدمات إضافية عند توفرها ضمن سياسة البنك.",
            en: "Potential access to additional services when available under bank policy."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "متطلبات فتح مرنة وواضحة",
        en: "Clear and Flexible Opening Requirements"
      },
      subtitle: {
        ar: "يتم فتح الحساب بعد تقديم بيانات التعريف الأساسية واستكمال نموذج الطلب، مع الالتزام بالشروط المعتمدة لدى البنك.",
        en: "The account is opened after submitting basic identification details and completing the request form according to bank requirements."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "هوية سارية أو وثيقة تعريف معتمدة.",
            en: "Valid ID or approved identification document."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "رقم جوال فعّال للتواصل والتنبيهات عند توفرها.",
            en: "Active mobile number for communication and alerts when supported."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال نموذج الطلب والتوقيع على الشروط.",
            en: "Complete the request form and sign the terms."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع لتقديم الطلب وفتح الحساب.",
            en: "Visit a branch to submit the request and open the account."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "خدمة العملاء لمعرفة المتطلبات المحدثة.",
            en: "Customer service for updated requirements."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "القنوات الرقمية المتاحة للمتابعة بعد فتح الحساب.",
            en: "Available digital channels for monitoring after account opening."
          }
        }
      ]
    },
    // subscribe: {
    //   title: {
    //     ar: "افتح حساب نور بسهولة",
    //     en: "Open Noor Account Easily"
    //   },
    //   subtitle: {
    //     ar: "اختر الطريقة المناسبة، جهّز بياناتك، ثم استكمل الطلب ليتم تفعيل الحساب بعد المراجعة.",
    //     en: "Choose the suitable method, prepare your details, then complete the application for activation after review."
    //   },
    //   steps: [
    //     {
    //       id: "step-1",
    //       title: {
    //         ar: "تجهيز البيانات",
    //         en: "Prepare Details"
    //       },
    //       description: {
    //         ar: "جهزي الهوية ورقم التواصل والمعلومات الأساسية.",
    //         en: "Prepare ID, contact number, and basic details."
    //       }
    //     },
    //     {
    //       id: "step-2",
    //       title: {
    //         ar: "تقديم الطلب",
    //         en: "Submit Request"
    //       },
    //       description: {
    //         ar: "قدمي الطلب عبر الفرع أو القناة المتاحة.",
    //         en: "Submit the request through the branch or available channel."
    //       }
    //     },
    //     {
    //       id: "step-3",
    //       title: {
    //         ar: "التفعيل والاستخدام",
    //         en: "Activate and Use"
    //       },
    //       description: {
    //         ar: "بعد المراجعة يتم تفعيل الحساب لاستخدامه في المعاملات اليومية.",
    //         en: "After review, the account is activated for daily transactions."
    //       }
    //     }
    //   ]
    // },
    nextStep: {
      title: {
        ar: "تجربة مصرفية مصممة لكِ",
        en: "A Banking Experience Designed for You"
      },
      description: {
        ar: "تواصلي مع البنك لمعرفة تفاصيل حساب نور والخدمات المرتبطة به.",
        en: "Contact the bank to learn more about Noor Account and its related services."
      }
    }
  },
  {
    slug: "youth",
    section: "accounts",
    title: {
      ar: "حساب الشباب",
      en: "Youth Account"
    },
    subtitle: {
      ar: "حساب يساعد الشباب على إدارة مصروفاتهم وبناء عادات مالية مبكرة",
      en: "An account that helps young customers manage spending and build early financial habits"
    },
    heroImage: "/images/personalCover.png",
    breadcrumbs: [
      {
        labelKey: "nav.specializedServices",
        href: "/specialized-services"
      },
      {
        labelKey: "nav.youthAccount",
        label: {
          ar: "حساب الشباب",
          en: "Youth Account"
        }
      }
    ],
    tagline: {
      ar: "الحسابات",
      en: "Customer Accounts"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "برنامج الشباب من بنك بن دول. ابدأ رحلتك نحو الاستقلال المالي مع حساب مصرفي عصري، ميزات ادخار ذكية، وعروض حصرية تلائم نمط حياتك الشاب.",
      en: "Youth Program from Bindowal Bank. Start your journey towards financial independence with a modern bank account, smart saving features, and exclusive offers fitting your youthful lifestyle.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "يوفر حساب الشباب تجربة مصرفية مبسطة تناسب بداية الاستقلال المالي، مع التركيز على إدارة المصروفات والادخار والوصول الرقمي.",
        en: "The youth account offers a simplified banking experience for early financial independence, focusing on spending management, saving, and digital access.",
      },
    },
    why: {
      title: { ar: "لماذا برنامج الشباب المصرفي؟", en: "Why the Youth Banking Program?" },
      description: {
        ar: "لأننا نؤمن بشغف الشباب ونطمح لدعمهم في خطواتهم الأولى نحو بناء مستقبل مالي واعد ومستقل.",
        en: "Because we believe in the passion of youth and aspire to support them in their first steps towards building a promising and independent financial future.",
      },
      items: [
        { id: "why-youth-1", text: { ar: "تمكين الشباب من إدارة أموالهم ومكافآتهم بمسؤولية واستقلالية.", en: "Empowering youth to manage their funds and rewards responsibly and independently." } },
        { id: "why-youth-2", text: { ar: "تشجيع ثقافة الادخار المبكر من خلال حلول تقنية جذابة ومحفزة.", en: "Encouraging a culture of early saving through engaging and motivating tech solutions." } },
        { id: "why-youth-3", text: { ar: "توفير أدوات دفع عصرية ومناسبة للتسوق عبر الإنترنت وتلبية الاحتياجات اليومية.", en: "Providing modern payment tools suitable for online shopping and meeting daily needs." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات برنامج الشباب", en: "Youth Program Features" },
      items: [
        { id: "fc-youth-1", title: { ar: "إعفاءات من الرسوم", en: "Fee Exemptions" }, description: { ar: "بدون رسوم لفتح الحساب ولا يوجد شرط للحد الأدنى للرصيد.", en: "No account opening fees and no minimum balance requirement." } },
        { id: "fc-youth-2", title: { ar: "بطاقة بتصميم عصري", en: "Modern Card Design" }, description: { ar: "بطاقة صراف آلي بتصميم شبابي مميز تتيح لك التسوق بمرونة.", en: "A uniquely designed youth debit card allowing flexible shopping." } },
        { id: "fc-youth-3", title: { ar: "عروض وخصومات", en: "Offers & Discounts" }, description: { ar: "خصومات خاصة في المطاعم، المقاهي، محلات الملابس، والأندية الرياضية.", en: "Special discounts at restaurants, cafes, clothing stores, and sports clubs." } },
        { id: "fc-youth-4", title: { ar: "صيرفة رقمية متطورة", en: "Advanced Digital Banking" }, description: { ar: "تطبيق بنكي سهل الاستخدام لمتابعة مصروفاتك وإدارة مدخراتك.", en: "An easy-to-use banking app to track expenses and manage savings." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-youth-1", text: { ar: "الشباب من الفئة العمرية (15 - 25) عاماً.", en: "Youth in the age group of (15 - 25) years." } },
        { id: "aud-youth-2", text: { ar: "طلاب وطالبات الجامعات والمعاهد.", en: "Male and female students of universities and institutes." } },
        { id: "aud-youth-3", text: { ar: "الشباب حديثو التخرج والموظفون الجدد.", en: "Recent graduates and newly employed youth." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط الانضمام لبرنامج الشباب", en: "Youth Program Joining Requirements" },
      note: { ar: "إذا كان العمر أقل من 18 عاماً، يُطلب حضور ولي الأمر لفتح الحساب واستلام البطاقة.", en: "If under 18 years old, the guardian's presence is required to open the account and receive the card." },
      items: [
        { id: "req-youth-1", text: { ar: "بطاقة الهوية الوطنية سارية المفعول.", en: "Valid national ID card." } },
        { id: "req-youth-2", text: { ar: "أن يكون العمر ضمن النطاق المسموح به للبرنامج (15-25 سنة).", en: "Age must be within the program's allowed range (15-25 years)." } },
        { id: "req-youth-3", text: { ar: "تعبئة نموذج طلب فتح حساب الشباب.", en: "Fill out the youth account opening form." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات فتح حساب الشباب", en: "Steps to Open a Youth Account" },
      steps: [
        { id: "step-youth-1", title: { ar: "زيارة الفرع أو التطبيق", en: "Visit Branch or App" }, description: { ar: "تفضل بزيارة أقرب فرع أو استخدم تطبيق بنك بن دول لتقديم الطلب.", en: "Visit the nearest branch or use the Bindowal Bank app to submit the request." } },
        { id: "step-youth-2", title: { ar: "إكمال البيانات", en: "Complete Details" }, description: { ar: "قدم وثائقك الثبوتية (وموافقة ولي الأمر إن لزم الأمر).", en: "Provide your identification documents (and guardian's consent if necessary)." } },
        { id: "step-youth-3", title: { ar: "استلام البطاقة", en: "Receive Card" }, description: { ar: "احصل على بطاقتك الخاصة وابدأ باستخدام التطبيق المصرفي مباشرة.", en: "Get your special card and start using the banking app immediately." } },
      ],
    },
    ctaSection: {
      title: { ar: "انطلق نحو استقلالك المالي", en: "Launch Towards Financial Independence" },
      description: { ar: "افتح حساب الشباب الآن من بنك بن دول، وابدأ بإدارة أموالك بذكاء واستمتع بالعروض الحصرية المصممة لك.", en: "Open a Youth Account now from Bindowal Bank, start managing your money smartly, and enjoy exclusive offers designed for you." },
      primaryLabel: { ar: "افتح حسابك الآن", en: "Open Your Account Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اكتشف العروض", en: "Discover Offers" },
      secondaryHref: "/offers",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-youth-1", question: { ar: "هل أحتاج إلى إيداع مبلغ معين لفتح حساب الشباب؟", en: "Do I need to deposit a specific amount to open a youth account?" }, answer: { ar: "لا، حساب الشباب لا يتطلب حداً أدنى للرصيد ويمكن فتحه مجاناً.", en: "No, the youth account requires no minimum balance and can be opened for free." } },
        { id: "faq-youth-2", question: { ar: "ماذا يحدث للحساب عندما أتجاوز العمر المسموح (25 عاماً)؟", en: "What happens to the account when I exceed the allowed age (25 years)?" }, answer: { ar: "يتم تحويل حسابك تلقائياً إلى حساب جاري أو توفير اعتيادي، وسيتم إخطارك بذلك مسبقاً.", en: "Your account is automatically converted to a standard current or savings account, and you will be notified in advance." } },
        { id: "faq-youth-3", question: { ar: "هل يمكنني ربط حسابي بحساب ولي أمري؟", en: "Can I link my account to my guardian's account?" }, answer: { ar: "نعم، للشباب دون 18 عاماً يمكن ربط الحساب بحساب ولي الأمر لتسهيل تحويل المصروف وتفعيل الرقابة الأبوية.", en: "Yes, for youth under 18, the account can be linked to the guardian's account to facilitate allowance transfers and enable parental control." } },
        { id: "faq-youth-4", question: { ar: "هل يمكنني التسوق عبر الإنترنت ببطاقة الشباب؟", en: "Can I shop online with the youth card?" }, answer: { ar: "نعم، البطاقة مزودة بتقنيات أمان حديثة تسمح لك بالتسوق الإلكتروني بأمان تام.", en: "Yes, the card is equipped with modern security technologies allowing you to shop online with complete safety." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه حساب الشباب؟",
        en: "What Does the Youth Account Offer?"
      },
      subtitle: {
        ar: "يوفر حساب الشباب تجربة مصرفية مبسطة تناسب بداية الاستقلال المالي، مع التركيز على إدارة المصروفات والادخار والوصول الرقمي عند توفره.",
        en: "The youth account offers a simplified banking experience for early financial independence, focusing on spending management, saving, and digital access when available."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "حساب مناسب للطلاب والشباب لإدارة المصروفات اليومية.",
            en: "A suitable account for students and young customers to manage daily expenses."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "إمكانية متابعة الرصيد والحركات بطريقة بسيطة وواضحة.",
            en: "Simple and clear balance and transaction tracking."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "قابلية الربط بالقنوات الرقمية أو البطاقة عند الأهلية والتوفر.",
            en: "Can be linked to digital channels or card services when eligible and available."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "يدعم بناء عادات ادخار ومسؤولية مالية مبكرة.",
            en: "Supports early saving habits and financial responsibility."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "بداية آمنة للاستقلال المالي",
        en: "A Safe Start for Financial Independence"
      },
      subtitle: {
        ar: "يساعد الحساب الشباب على تعلم إدارة الأموال ضمن بيئة مصرفية منظمة بدل الاعتماد الكامل على النقد.",
        en: "The account helps young customers learn money management within an organized banking environment instead of relying fully on cash."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تنظيم المصروف الشخصي ومتابعة أين تذهب الأموال.",
            en: "Organize personal spending and see where money goes."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تشجيع الادخار لمصاريف الدراسة أو التقنية أو المشاريع الصغيرة.",
            en: "Encourage saving for education, technology, or small projects."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "تسهيل استقبال التحويلات من الأسرة أو جهات أخرى.",
            en: "Make it easier to receive transfers from family or others."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "توفير تجربة مصرفية تمهيدية قبل الانتقال لخدمات أوسع.",
            en: "Provide an introductory banking experience before moving to broader services."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "الأهلية حسب العمر والسياسة",
        en: "Eligibility Based on Age and Policy"
      },
      subtitle: {
        ar: "قد تختلف المتطلبات بحسب عمر العميل، وقد يحتاج بعض العملاء إلى موافقة ولي الأمر أو وثائق إضافية حسب سياسة البنك.",
        en: "Requirements may vary based on customer age, and some applicants may need guardian approval or additional documents according to bank policy."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "هوية أو وثيقة تعريف مناسبة لعمر العميل.",
            en: "ID or suitable identification document based on customer age."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "موافقة ولي الأمر عند الحاجة حسب العمر والسياسة.",
            en: "Guardian approval when required by age and policy."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "رقم جوال وبيانات تواصل فعّالة.",
            en: "Active mobile number and contact details."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع مع الوثائق المطلوبة.",
            en: "Visit a branch with the required documents."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "خدمة العملاء لتأكيد شروط العمر والأهلية.",
            en: "Customer service to confirm age and eligibility conditions."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "القنوات الرقمية للمتابعة بعد تفعيل الحساب عند توفرها.",
            en: "Digital channels for monitoring after account activation when available."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "ابدأ تجربتك المصرفية",
        en: "Start Your Banking Experience"
      },
      subtitle: {
        ar: "يبدأ فتح الحساب بتحديد الأهلية، ثم تقديم الوثائق، وبعدها يتم تفعيل الحساب للاستخدام اليومي.",
        en: "Opening starts with confirming eligibility, submitting documents, and activating the account for daily use."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تأكيد الأهلية",
            en: "Confirm Eligibility"
          },
          description: {
            ar: "تحقق من شروط العمر والوثائق المطلوبة قبل التقديم.",
            en: "Check age conditions and required documents before applying."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم الطلب",
            en: "Submit Application"
          },
          description: {
            ar: "قدّم الطلب في الفرع أو القناة المتاحة مع البيانات اللازمة.",
            en: "Submit the application through the branch or available channel with required details."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "تفعيل الحساب",
            en: "Activate Account"
          },
          description: {
            ar: "بعد المراجعة يتم تفعيل الحساب ويمكن البدء باستخدامه.",
            en: "After review, the account is activated and ready to use."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "ابدأ إدارة أموالك بوعي",
        en: "Start Managing Your Money Wisely"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة شروط حساب الشباب والخدمات التي يمكن ربطها به.",
        en: "Contact the bank to learn Youth Account conditions and related services."
      }
    }
  },
  {
    slug: "expat",
    section: "accounts",
    title: {
      ar: "حساب المغتربين",
      en: "Expatriate Account"
    },
    subtitle: {
      ar: "ابقَ على اتصال بأموالك… أينما كنت",
      en: "Stay connected to your money… wherever you are"
    },
    heroImage: "/images/personalCover.png",
    breadcrumbs: [
      {
        labelKey: "nav.specializedServices",
        href: "/specialized-services"
      },
      {
        labelKey: "nav.expatAccount",
        label: {
          ar: "حساب المغتربين",
          en: "Expatriate Account"
        }
      }
    ],
    tagline: {
      ar: "الحسابات",
      en: "Customer Accounts"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "افتح حسابك في بنك بن دول وأدر أموالك من خارج اليمن بسهولة. استقبل الحوالات، ادخر، ونفذ معاملاتك المصرفية بأمان وفق أحكام الشريعة الإسلامية.",
      en: "Open your account at Bindowal Bank and manage your money easily from outside Yemen. Receive remittances, save, and conduct your banking transactions safely in accordance with Islamic Sharia.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "إذا كنت تعمل أو تقيم خارج اليمن، فإن حساب المغتربين من بنك بن دول يمنحك وسيلة آمنة لإدارة أموالك وتحويلاتك، مع إمكانية متابعة حسابك والاستفادة من الخدمات المصرفية دون الحاجة إلى التواجد داخل اليمن. صُمم الحساب لتلبية احتياجات المغتربين، ومساعدتهم على إدارة مدخراتهم، واستقبال الحوالات، ودعم أسرهم بسهولة، وفق أحكام الشريعة الإسلامية.",
        en: "If you work or reside outside Yemen, Bindowal Bank's Expatriate Account provides a secure way to manage your funds and transfers, with the ability to monitor your account and access banking services without needing to be present in Yemen. The account is designed to meet the needs of expatriates, helping them manage their savings, receive remittances, and support their families easily, in compliance with Islamic Sharia.",
      },
    },
    why: {
      title: { ar: "لماذا حساب المغتربين؟", en: "Why the Expat Account?" },
      description: {
        ar: "لأن إدارة أموالك من خارج الوطن يجب أن تكون أكثر سهولة ومرونة. حساب المغتربين من بنك بن دول مصمّم ليمنحك الأمان والمرونة التي تحتاجها لإدارة أموالك وتحويلاتك المالية بسهولة، وأنت مطمئن.",
        en: "Because managing your finances from abroad should be easier and more flexible. Bindowal Bank's Expatriate Account is designed to give you the security and flexibility you need to manage your money and financial transfers easily and with confidence.",
      },
      items: [
        { id: "why-expat-1", text: { ar: "إدارة أموالك من خارج اليمن بكل سهولة عبر تطبيق بنك بن دول.", en: "Manage your money from outside Yemen easily through Bindowal Bank app." } },
        { id: "why-expat-2", text: { ar: "تحويل وإيداع اموالك الى الحساب مباشرة من خلال الارسال الأموال وايداعها الى حسابك مباشرة.", en: "Transfer and deposit your funds to the account directly through sending money and depositing it directly to your account." } },
        { id: "why-expat-3", text: { ar: "فتح الحساب بعملات متعددة.", en: "Open account in multiple currencies." } },
        { id: "why-expat-4", text: { ar: "إرسال واستقبال الحوالات بسهولة", en: "Send and receive transfers easily" } },
        { id: "why-expat-5", text: { ar: "الحصول على بطاقة ماستر كارد تتيح لك الاستخدام داخل اليمن وخارجه.", en: "Get a Master Card that allows you to use it inside and outside Yemen." } },
        { id: "why-expat-6", text: { ar: "إمكانية طلب بطاقة إضافية لاحد افراد اسرتك وتحديد سقف شهري للسحب.", en: "Ability to request an additional card for a family member and set a monthly withdrawal limit." } },
        { id: "why-expat-7", text: { ar: "متابعة حسابك والاستفادة من الخدمات المصرفية الرقمية.", en: "Monitor your account and benefit from digital banking services." } },
        { id: "why-expat-8", text: { ar: "ادخار أموالك بطريقة آمنة ومتوافقة مع الشريعة الإسلامية.", en: "Save your money in a secure manner compliant with Islamic Sharia." } },

      ],
    },
    featureCards: {
      title: { ar: "مميزات برنامج المغتربين", en: "Expat Program Features" },
      items: [
        { id: "fc-expat-1", title: { ar: "إدارة حسابك عن بُعد", en: "Remote Account Management" }, description: { ar: "الوصول إلى حسابك وإدارة معاملاتك من أي مكان عبر القنوات المصرفية المتاحة.", en: "Access your account and manage your transactions from anywhere via available banking channels." } },
        { id: "fc-expat-2", title: { ar: "استقبال وإرسال الحوالات", en: "Receiving and Sending Transfers" }, description: { ar: "تنفيذ واستقبال التحويلات المالية بسهولة وفق الخدمات المتاحة لدى البنك.", en: "Receive and send transfers easily in accordance with the services available at the bank." } },
        { id: "fc-expat-3", title: { ar: "خدمات مصرفية رقمية", en: "Digital Banking Services" }, description: { ar: "الاستفادة من تطبيق البنك والخدمات الإلكترونية لمتابعة الحساب وإجراء العمليات.", en: "Benefit from the bank's app and electronic services to monitor your account and perform operations." } },
        { id: "fc-expat-4", title: { ar: "حساب متعدد العملات", en: "Multi-Currency Account" }, description: { ar: "الاستفادة من إمكانية فتح الحساب والإيداع بعملات متعددة.", en: "Benefit from the ability to open an account and deposit funds in multiple currencies." } },
        { id: "fc-expat-5", title: { ar: "خدمة متوافقة مع الشريعة الإسلامية", en: "Sharia-Compliant Service" }, description: { ar: "جميع الخدمات المقدمة تتم وفق أحكام الشريعة الإسلامية.", en: "All services provided are in accordance with the provisions of Islamic Sharia." } },

      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-expat-1", text: { ar: "اليمنيين المقيمين والعاملين خارج اليمن.", en: "Yemeni residents and workers outside Yemen." } },
        { id: "aud-expat-2", text: { ar: "رجال الأعمال والمستثمرون في الخارج.", en: "Businessmen and investors abroad." } },
        { id: "aud-expat-3", text: { ar: "الطلاب اليمنيين الدارسون خارج البلاد.", en: "Yemeni students studying abroad." } },
        { id: "aud-expat-4", text: { ar: "المغتربين الراغبين في إدارة أموالهم ودعم أسرهم داخل اليمن.", en: "Expats wishing to manage their finances and support their families in Yemen." } },

      ],
    },
    requirementsSection: {
      title: { ar: "شروط الانضمام لبرنامج المغترب", en: "Expat Program Joining Requirements" },
      items: [
        { id: "req-expat-1", text: { ar: "هوية أو جواز سفر سارية.", en: "Valid identification document (passport or national ID)." } },
        { id: "req-expat-2", text: { ar: "تعبئة نموذج فتح الحساب عبر تطبيق بنك بن دول.", en: "Fill out the account opening form through the Bin Dowal Bank application." } },
        { id: "req-expat-3", text: { ar: "استيفاء متطلبات البنك لفتح الحساب.", en: "Meet the bank's requirements for opening an account." } },
      ],
    },
    // stepsSection: {
    //   title: { ar: "خطوات الانضمام لبرنامج المغترب", en: "Steps to Join the Expat Program" },
    //   steps: [
    //     { id: "step-expat-1", title: { ar: "التقديم عبر الإنترنت أو الممثلين", en: "Apply Online or via Representatives" }, description: { ar: "استخدم القنوات الرقمية للبنك أو تواصل مع وكلائنا في بلد إقامتك لتقديم الطلب.", en: "Use the bank's digital channels or contact our agents in your country of residence to apply." } },
    //     { id: "step-expat-2", title: { ar: "استكمال وتوثيق البيانات", en: "Complete and Verify Details" }, description: { ar: "قدم المستندات الثبوتية المطلوبة لإتمام إجراءات فتح الحساب.", en: "Provide the required identification documents to complete account opening procedures." } },
    //     { id: "step-expat-3", title: { ar: "التمتع بالخدمات", en: "Enjoy Services" }, description: { ar: "بمجرد تفعيل الحساب، يمكنك إدارة أموالك وتحويلاتك عن بُعد بكل أمان وراحة.", en: "Once the account is active, manage your funds and transfers remotely with complete security and comfort." } },
    //   ],
    // },
    ctaSection: {
      title: { ar: "ابقَ قريباً من وطنك وعائلتك", en: "Stay Close to Your Home and Family" },
      description: { ar: "استفد من خدمات مصرفية تساعدك على إدارة أموالك وتحويلاتك بسهولة، وابقَ على اتصال بأموالك وأسرتك أينما كنت", en: "Benefit from banking services that help you manage your money and transfers easily, and stay connected to your funds and family wherever you are" },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-expat-1", question: { ar: "هل يمكن فتح حساب المغتربين من خارج اليمن؟", en: "Can I open an expat account from outside Yemen?" }, answer: { ar: "يمكن الاستفادة من القنوات التي يتيحها البنك لبدء إجراءات فتح الحساب، وفق السياسة المعتمدة.", en: "You can take advantage of the channels provided by the bank to start the account opening procedures, in accordance with the approved policy." } },
        { id: "faq-expat-2", question: { ar: "هل يمكن إدارة الحساب عن بُعد؟", en: "Can the account be managed remotely?" }, answer: { ar: "نعم، يمكن إدارة الحساب والاستفادة من الخدمات الرقمية المتاحة لدى البنك عبر تطبيق بن دول والبطائق الالكترونية.", en: "Yes, you can manage the account and benefit from the bank's digital services through the Bin Dowal application and electronic cards." } },
        { id: "faq-expat-3", question: { ar: "هل يمكن استقبال الحوالات الدولية؟", en: "Can I receive international transfers?" }, answer: { ar: "نعم، يمكن استقبال الحوالات وفق الخدمات والقنوات التي يوفرها البنك.", en: "Yes, you can receive transfers according to the services and channels provided by the bank." } },
        { id: "faq-expat-4", question: { ar: "ما العملات المتاحة لحساب المغتربين؟", en: "What currencies are available for the expat account?" }, answer: { ar: "يمكن فتح الحساب بالعملات التي يتيحها البنك وفق السياسة المعتمدة.", en: "The account can be opened in currencies approved by the bank according to its policy." } },
        { id: "faq-expat-5", question: { ar: "هل حساب المغتربين متوافق مع الشريعة الإسلامية؟", en: "Is the expat account compliant with Islamic Sharia?" }, answer: { ar: "نعم، يتم تقديم الحساب وفق أحكام الشريعة الإسلامية.", en: "Yes, the expat account is compliant with Islamic Sharia." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه حساب المغتربين؟",
        en: "What Does the Expatriate Account Offer?"
      },
      subtitle: {
        ar: "يركز حساب المغتربين على تسهيل إدارة الأموال من خارج البلد أو داخله، وربط العميل باحتياجات أسرته ومدخراته وتحويلاته بصورة أوضح.",
        en: "The expatriate account focuses on helping clients manage funds from abroad or locally, connecting them with family needs, savings, and transfers more clearly."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "استقبال وتحويل الأموال بما يناسب احتياجات الأسرة أو الالتزامات المحلية.",
            en: "Receive and send funds for family needs or local obligations."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "إمكانية إدارة المدخرات أو ربطها بخدمات أخرى حسب الإتاحة.",
            en: "Manage savings or link them to other services when available."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "متابعة الرصيد والحركات عبر القنوات المناسبة عند توفرها.",
            en: "Track balance and transactions through suitable channels when available."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسب للمغتربين الذين يحتاجون علاقة مصرفية واضحة داخل بلدهم.",
            en: "Suitable for expatriates who need a clear banking relationship in their home country."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "صلة مالية أوضح مع الوطن",
        en: "A Clearer Financial Link with Home"
      },
      subtitle: {
        ar: "يساعد الحساب المغترب على تنظيم التحويلات والمدخرات والالتزامات بدلاً من الاعتماد على حلول متفرقة وغير موثقة.",
        en: "The account helps expatriates organize transfers, savings, and obligations instead of relying on fragmented or undocumented solutions."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تسهيل دعم الأسرة ومتابعة المصاريف الأساسية.",
            en: "Make it easier to support family and track essential expenses."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تنظيم المدخرات المرتبطة بأهداف مستقبلية داخل البلد.",
            en: "Organize savings linked to future goals in the home country."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "إمكانية الاستفادة من خدمات التحويل عند توفرها.",
            en: "Potential access to transfer services when available."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "توفير سجل مصرفي واضح للحركات المالية.",
            en: "Provide a clear banking record for financial movements."
          }
        }
      ]
    },
    // howToGet: {
    //   title: {
    //     ar: "توثيق الهوية وبيانات التواصل مهم",
    //     en: "Identity and Contact Verification Matter"
    //   },
    //   subtitle: {
    //     ar: "قد يحتاج فتح الحساب إلى وثائق تعريفية محدثة وبيانات تواصل داخلية أو خارجية، مع الالتزام بمتطلبات التحقق المعتمدة.",
    //     en: "Opening the account may require updated identification documents and local or international contact details, following approved verification requirements."
    //   },
    //   requirements: [
    //     {
    //       id: "req-1",
    //       text: {
    //         ar: "هوية سارية أو جواز سفر أو وثيقة إقامة عند الحاجة.",
    //         en: "Valid ID, passport, or residence document when required."
    //       }
    //     },
    //     {
    //       id: "req-2",
    //       text: {
    //         ar: "بيانات تواصل فعّالة داخل البلد أو خارجه.",
    //         en: "Active contact details locally or abroad."
    //       }
    //     },
    //     {
    //       id: "req-3",
    //       text: {
    //         ar: "استكمال نماذج فتح الحساب ومتطلبات التحقق.",
    //         en: "Complete account opening forms and verification requirements."
    //       }
    //     }
    //   ],
    //   channels: [
    //     {
    //       id: "ch-1",
    //       text: {
    //         ar: "زيارة الفرع عند التواجد داخل البلد.",
    //         en: "Visit a branch when present in the country."
    //       }
    //     },
    //     {
    //       id: "ch-2",
    //       text: {
    //         ar: "التواصل مع خدمة العملاء لمعرفة آلية التقديم المناسبة للمغترب.",
    //         en: "Contact customer service to understand the suitable application process for expatriates."
    //       }
    //     },
    //     {
    //       id: "ch-3",
    //       text: {
    //         ar: "القنوات الرقمية المتاحة للمتابعة بعد فتح الحساب.",
    //         en: "Available digital channels for monitoring after account opening."
    //       }
    //     }
    //   ]
    // },
    // subscribe: {
    //   title: {
    //     ar: "نظّم علاقتك المصرفية من أي مكان",
    //     en: "Organize Your Banking Relationship from Anywhere"
    //   },
    //   subtitle: {
    //     ar: "ابدأ بتجهيز الوثائق وبيانات التواصل، ثم راجع طريقة التقديم المتاحة حسب وجودك داخل البلد أو خارجه.",
    //     en: "Start by preparing documents and contact details, then review the available application method based on whether you are inside or outside the country."
    //   },
    //   steps: [
    //     {
    //       id: "step-1",
    //       title: {
    //         ar: "تجهيز الوثائق",
    //         en: "Prepare Documents"
    //       },
    //       description: {
    //         ar: "جهّز الهوية أو الجواز وبيانات التواصل المحدثة.",
    //         en: "Prepare ID or passport and updated contact details."
    //       }
    //     },
    //     {
    //       id: "step-2",
    //       title: {
    //         ar: "اختيار طريقة التقديم",
    //         en: "Choose Application Method"
    //       },
    //       description: {
    //         ar: "حدد القناة الأنسب للتقديم حسب موقعك وإتاحة الخدمة.",
    //         en: "Choose the most suitable channel based on your location and service availability."
    //       }
    //     },
    //     {
    //       id: "step-3",
    //       title: {
    //         ar: "تفعيل الحساب والمتابعة",
    //         en: "Activate and Monitor"
    //       },
    //       description: {
    //         ar: "بعد الموافقة يتم تفعيل الحساب ومتابعته عبر القنوات المتاحة.",
    //         en: "After approval, the account is activated and can be monitored through available channels."
    //       }
    //     }
    //   ]
    // },
    // nextStep: {
    //   title: {
    //     ar: "ابقَ قريبًا من التزاماتك المالية",
    //     en: "Stay Connected to Your Financial Obligations"
    //   },
    //   description: {
    //     ar: "تواصل مع البنك لمعرفة تفاصيل حساب المغتربين وطريقة التقديم الأنسب لحالتك.",
    //     en: "Contact the bank to learn about Expatriate Account details and the application method that suits your case."
    //   }
    // }
  },
  {
    slug: "mobile-banking",
    section: "e-services",
    title: {
      ar: "الموبايل البنكي (تطبيق بنك بن دول)",
      en: "Mobile Banking (Bindowal Bank App)"
    },
    subtitle: {
      ar: "خدمات مصرفية… بين يديك في أي وقت وأي مكان",
      en: "Banking services... in your hands anytime and anywhere"
    },
    heroImage: "/images/personalCover.png",
    breadcrumbs: [
      {
        labelKey: "nav.digitalChannels",
        href: "/e-services"
      },
      {
        labelKey: "nav.mobileBanking",
        label: {
          ar: "الموبايل البنكي",
          en: "Mobile Banking"
        }
      }
    ],
    tagline: {
      ar: "القنوات الرقمية",
      en: "Digital Channels"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "حمّل تطبيق بنك بن دول واستمتع بإدارة حساباتك وتحويل أموالك ومتابعة رصيدك وتنفيذ معاملاتك المصرفية بسهولة وأمان عبر الهاتف المحمول.",
      en: "Download Bindowal Bank app and enjoy managing your accounts, transferring funds, tracking your balance, and executing your banking transactions easily and securely via mobile phone."
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "تطبيق بنك بن دول يتيح لك الوصول إلى حساباتك البنكية وتنفيذ العديد من الخدمات المالية بسهولة عبر الهاتف المحمول. ومن خلال التطبيق يمكنك متابعة الرصيد، وتحويل الأموال، وإدارة حساباتك، والاستفادة من الخدمات البنكية الرقمية بطريقة سريعة وآمنة دون الحاجة إلى زيارة الفرع. سواء كنت داخل اليمن أو خارجها، يمنحك تطبيق بنك بن دول تجربة مصرفية أكثر سهولة ومرونة.",
        en: "Bindowal Bank app allows you to access your bank accounts and execute many financial services easily via mobile phone. Through the app, you can track your balance, transfer funds, manage your accounts, and benefit from digital banking services in a fast and secure way without the need to visit the branch. Whether you are inside or outside Yemen, Bindowal Bank app gives you a more convenient and flexible banking experience."
      }
    },
    why: {
      title: { ar: "لماذا تختار تطبيق بنك بن دول؟", en: "Why Choose Bindowal Bank App?" },
      description: {
        ar: "لأنك تحتاج إلى الوصول إلى خدماتك المصرفية بسهولة وفي أي وقت وفي أي مكان.",
        en: "Because you need to access your banking services easily, anytime, and anywhere."
      },
      items: [
        { id: "why-mb-1", text: { ar: "متابعة حساباتك بشكل مباشر", en: "Track your accounts in real time" } },
        { id: "why-mb-2", text: { ar: "تحويل واستقبال الأموال بسهولة", en: "Transfer and receive funds easily" } },
        { id: "why-mb-3", text: { ar: "تنفيذ معاملاتك دون زيارة الفرع", en: "Execute your transactions without visiting the branch" } },
        { id: "why-mb-4", text: { ar: "إدارة أموالك من الهاتف", en: "Manage your money from your phone" } },
        { id: "why-mb-5", text: { ar: "الوصول إلى الخدمات البنكية بسرعة وأمان", en: "Access banking services quickly and securely" } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تطبيق بنك بن دول", en: "Features of Bindowal Bank App" },
      items: [
        { id: "fc-mb-1", title: { ar: "إدارة الحسابات بسهولة", en: "Easy Account Management" }, description: { ar: "الوصول إلى حساباتك البنكية ومتابعة تفاصيلها عبر الهاتف المحمول.", en: "Access your bank accounts and monitor their details via mobile phone." } },
        { id: "fc-mb-2", title: { ar: "تحويل واستلام الأموال", en: "Transfer & Receive Funds" }, description: { ar: "إمكانية تنفيذ واستقبال التحويلات المالية المحلية والدولية بسهولة وأمان.", en: "Ability to execute and receive local and international financial transfers easily and securely." } },
        { id: "fc-mb-3", title: { ar: "متابعة الرصيد والحركات المالية", en: "Track Balances & Transactions" }, description: { ar: "الاطلاع على الرصيد وكشف الحساب بشكل مباشر.", en: "Directly view balances and account statements." } },
        { id: "fc-mb-4", title: { ar: "المصارفة بين العملات", en: "Currency Exchange" }, description: { ar: "إجراء المصارفة بالعملات المختلفة.", en: "Perform currency exchange transactions between different currencies." } },
        { id: "fc-mb-5", title: { ar: "البطائق الإلكترونية", en: "Electronic Cards" }, description: { ar: "إمكانية طلب إصدار البطائق المدينة وبطائق الإنترنت.", en: "Ability to request the issuance of debit cards and internet cards." } },
        { id: "fc-mb-6", title: { ar: "خدمات متوفرة على مدار الساعة", en: "24/7 Available Services" }, description: { ar: "الوصول إلى الخدمات البنكية في أي وقت ومن أي مكان.", en: "Access banking services anytime and from anywhere." } },
        { id: "fc-mb-7", title: { ar: "أمان وحماية عالية", en: "High Security & Protection" }, description: { ar: "أنظمة حماية إلكترونية تساعد على تأمين الحسابات والمعاملات.", en: "Electronic protection systems that help secure accounts and transactions." } },
        { id: "fc-mb-8", title: { ar: "سهولة الاستخدام", en: "Ease of Use" }, description: { ar: "واجهة بسيطة تساعد العملاء على تنفيذ العمليات بسهولة.", en: "A simple interface that helps customers execute transactions with ease." } },
        { id: "fc-mb-9", title: { ar: "تقليل الحاجة لزيارة الفروع", en: "Reduced Need to Visit Branches" }, description: { ar: "تنفيذ العديد من الخدمات البنكية إلكترونيًا دون الحاجة للذهاب إلى الفرع.", en: "Execute many banking services electronically without the need to visit the branch." } }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-mb-1", text: { ar: "العملاء الذين يعتمدون على الخدمات الرقمية", en: "Digital-first customers" } },
        { id: "aud-mb-2", text: { ar: "الموظفون وأصحاب الأعمال", en: "Employees and business owners" } },
        { id: "aud-mb-3", text: { ar: "المغتربون المتواجدون خارج أرض الوطن", en: "Expatriates living abroad" } },
        { id: "aud-mb-4", text: { ar: "المستخدمون الذين يحتاجون لإدارة حساباتهم عن بُعد", en: "Users needing to manage their accounts remotely" } },
        { id: "aud-mb-5", text: { ar: "العملاء الباحثون عن خدمات مصرفية أسرع وأسهل", en: "Customers looking for faster and easier banking services" } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط استخدام التطبيق", en: "App Terms of Use" },
      note: { ar: "تأكد من أن رقم هاتفك المحمول المسجل في التطبيق هو نفس الرقم المسجل والمفعل لدى البنك.", en: "Ensure the mobile number registered in the app is the same active number registered with the bank." },
      items: [
        { id: "req-mb-1", text: { ar: "حساب بنكي نشط لدى البنك", en: "An active bank account with the bank" } },
        { id: "req-mb-2", text: { ar: "تحميل التطبيق والتسجيل فيه", en: "Download and register in the app" } },
        { id: "req-mb-3", text: { ar: "الموافقة على شروط الاستخدام", en: "Agree to the terms of use" } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات استخدام تطبيق بنك بن دول", en: "Steps to Use Bindowal Bank App" },
      steps: [
        { id: "step-mb-1", title: { ar: "تحميل التطبيق", en: "Download the App" }, description: { ar: "قم بتحميل التطبيق من متجر التطبيقات الرسمي لهاتفك الذكي.", en: "Download the app from the official app store for your smartphone." } },
        { id: "step-mb-2", title: { ar: "تسجيل البيانات المطلوبة", en: "Register Required Details" }, description: { ar: "أدخل رقم حسابك والبيانات المطلوبة لربط حسابك بالتطبيق.", en: "Enter your account number and the required details to link your account to the app." } },
        { id: "step-mb-3", title: { ar: "التحقق من الحساب", en: "Verify the Account" }, description: { ar: "أدخل رمز التحقق المرسل إلى رقم هاتفك المسجل لتأكيد هويتك.", en: "Enter the verification code sent to your registered mobile number to confirm your identity." } },
        { id: "step-mb-4", title: { ar: "تفعيل الخدمة", en: "Activate the Service" }, description: { ar: "قم بتعيين اسم المستخدم وكلمة المرور الخاصة بك لتفعيل الخدمة.", en: "Set your username and password to activate the service." } },
        { id: "step-mb-5", title: { ar: "البدء باستخدام الخدمات المصرفية الإلكترونية", en: "Start Using E-Banking" }, description: { ar: "سجل دخولك بنجاح وابدأ بإدارة حساباتك وتنفيذ معاملاتك المالية في أي وقت.", en: "Log in successfully and start managing your accounts and executing your financial transactions anytime." } }
      ]
    },
    ctaSection: {
      title: { ar: "ابدأ الآن", en: "Get Started Now" },
      description: { ar: "حمّل تطبيق بنك بن دول اليوم واستمتع بخدمات مصرفية أسهل وأسرع… مباشرة من هاتفك", en: "Download Bindowal Bank app today and enjoy easier and faster banking services... directly from your phone" },
      primaryLabel: { ar: "تحميل التطبيق", en: "Download App" },
      primaryHref: "/download-app",
      secondaryLabel: { ar: "تعرف على المزيد", en: "Learn More" },
      secondaryHref: "#features"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-mb-1", question: { ar: "هل يمكن استخدام التطبيق خارج اليمن؟", en: "Can the app be used outside Yemen?" }, answer: { ar: "نعم، يمكن استخدام التطبيق من داخل وخارج اليمن طالما يوجد اتصال بالإنترنت.", en: "Yes, the app can be used inside and outside Yemen as long as an internet connection is available." } },
        { id: "faq-mb-2", question: { ar: "هل التطبيق متاح طوال الوقت؟", en: "Is the app available all the time?" }, answer: { ar: "نعم، خدمات التطبيق متوفرة على مدار الساعة.", en: "Yes, the app services are available 24/7." } },
        { id: "faq-mb-3", question: { ar: "هل يمكن تحويل الأموال عبر التطبيق؟", en: "Can money be transferred via the app?" }, answer: { ar: "نعم، يمكنك تنفيذ التحويلات المالية بسهولة عبر التطبيق.", en: "Yes, you can easily perform financial transfers via the app." } },
        { id: "faq-mb-4", question: { ar: "هل التطبيق آمن؟", en: "Is the app secure?" }, answer: { ar: "نعم، يعتمد التطبيق على أنظمة حماية إلكترونية لتعزيز أمان الحسابات والمعاملات.", en: "Yes, the app relies on electronic protection systems to enhance the security of accounts and transactions." } },
        { id: "faq-mb-5", question: { ar: "هل أحتاج إلى زيارة الفرع لاستخدام التطبيق؟", en: "Do I need to visit the branch to use the app?" }, answer: { ar: "بحسب سياسة البنك، تتوفر إمكانية التسجيل أو التفعيل عبر التطبيق بدون زيارة الفرع.", en: "According to the bank's policy, registration or activation is available via the app without visiting the branch." } }
      ]
    },
    details: {
      title: {
        ar: "ما الذي يقدمه الموبايل البنكي؟",
        en: "What Does Mobile Banking Offer?"
      },
      subtitle: {
        ar: "يوفر الموبايل البنكي وصولًا سريعًا إلى الحسابات والخدمات الأساسية عبر الهاتف، مثل متابعة الرصيد والحركات وتنفيذ بعض العمليات حسب إتاحة البنك.",
        en: "Mobile banking provides fast access to accounts and essential services by phone, such as balance tracking, transaction history, and selected operations depending on bank availability."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "عرض الرصيد والحركات الحديثة بطريقة مباشرة.",
            en: "View balances and recent transactions directly."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "تنفيذ التحويلات أو الخدمات المتاحة من داخل التطبيق حسب الصلاحيات.",
            en: "Perform transfers or available services through the app according to permissions."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "استلام تنبيهات أو إشعارات للحركات عند تفعيلها.",
            en: "Receive transaction alerts or notifications when enabled."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "تجربة مناسبة للعملاء الذين يفضلون إنجاز الخدمات دون زيارة الفرع.",
            en: "A suitable experience for clients who prefer completing services without visiting a branch."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "مصرفك اليومي في هاتفك",
        en: "Your Daily Bank on Your Phone"
      },
      subtitle: {
        ar: "يساعد التطبيق على تقليل الوقت والجهد في متابعة الحسابات، ويمنح العميل قدرة أكبر على معرفة وضعه المالي في أي وقت.",
        en: "The app helps reduce time and effort in account tracking and gives customers better awareness of their financial position at any time."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "وصول أسرع إلى معلومات الحساب دون انتظار كشف ورقي.",
            en: "Faster access to account information without waiting for paper statements."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "إنجاز العمليات المتاحة في أي وقت بحسب عمل النظام والقنوات.",
            en: "Complete available operations anytime depending on system and channel availability."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "تحسين المتابعة الشخصية للمصاريف والتحويلات.",
            en: "Improve personal tracking of expenses and transfers."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تقليل الحاجة لزيارة الفرع في الاستفسارات والخدمات البسيطة.",
            en: "Reduce the need to visit a branch for simple inquiries and services."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "تفعيل آمن عبر بيانات العميل",
        en: "Secure Activation through Customer Details"
      },
      subtitle: {
        ar: "يتطلب استخدام الموبايل البنكي وجود حساب فعّال وبيانات تواصل محدثة، وقد يتطلب التفعيل تحققًا إضافيًا لحماية العميل.",
        en: "Using mobile banking requires an active account and updated contact details, and activation may require additional verification to protect the customer."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "حساب مصرفي فعّال لدى البنك.",
            en: "An active bank account with the bank."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "رقم جوال مسجل ومحدث لدى البنك.",
            en: "A registered and updated mobile number with the bank."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال خطوات التفعيل والتحقق حسب آلية البنك.",
            en: "Complete activation and verification steps according to the bank’s process."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "تحميل التطبيق من المتاجر الرسمية عند توفره.",
            en: "Download the app from official stores when available."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "زيارة الفرع أو التواصل مع خدمة العملاء للمساعدة في التفعيل.",
            en: "Visit a branch or contact customer service for activation support."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "استخدام التطبيق لمتابعة الحسابات والخدمات المتاحة بعد التفعيل.",
            en: "Use the app to monitor accounts and available services after activation."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "فعّل التطبيق وابدأ الاستخدام",
        en: "Activate the App and Start Using It"
      },
      subtitle: {
        ar: "تبدأ التجربة بالتأكد من بياناتك المسجلة، ثم تفعيل التطبيق، وبعدها يمكنك استخدام الخدمات المتاحة بأمان.",
        en: "The experience starts by confirming registered details, activating the app, then using available services securely."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تأكيد بياناتك",
            en: "Confirm Your Details"
          },
          description: {
            ar: "تأكد من أن رقم الجوال والبيانات الأساسية محدثة لدى البنك.",
            en: "Make sure your mobile number and basic details are updated with the bank."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تفعيل الدخول",
            en: "Activate Access"
          },
          description: {
            ar: "اتبع خطوات التسجيل والتحقق داخل التطبيق أو عبر القناة المعتمدة.",
            en: "Follow registration and verification steps in the app or through the approved channel."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "استخدام الخدمات",
            en: "Use Services"
          },
          description: {
            ar: "ابدأ بمتابعة الحساب وتنفيذ الخدمات المتاحة حسب صلاحياتك.",
            en: "Start tracking your account and using available services according to your permissions."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "اجعل خدماتك أقرب إليك",
        en: "Bring Your Services Closer"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة طريقة تفعيل الموبايل البنكي والخدمات المتاحة حاليًا.",
        en: "Contact the bank to learn how to activate mobile banking and what services are currently available."
      }
    }
  },
  {
    slug: "internet-banking",
    section: "e-services",
    title: {
      ar: "منصة بن دول اعمال",
      en: "Bindowal Business Platform"
    },
    subtitle: {
      ar: "منصة رقمية لإدارة الحسابات والخدمات المصرفية عبر الويب",
      en: "A digital web platform for managing accounts and banking services"
    },
    heroImage: "/images/personalCover.png",
    breadcrumbs: [
      {
        labelKey: "nav.digitalChannels",
        href: "/e-services"
      },
      {
        labelKey: "nav.internetBank",
        label: {
          ar: "منصة بن دول اعمال",
          en: "Bindowal Business Platform"
        }
      }
    ],
    tagline: {
      ar: "القنوات الرقمية",
      en: "Digital Channels"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "الإنترنت البنكي للأفراد من بنك بن دول. منصة إلكترونية شاملة لإدارة حساباتك، تنفيذ تحويلاتك، وسداد التزاماتك بأمان من أي جهاز كمبيوتر أو متصفح ويب.",
      en: "Retail Internet Banking from Bindowal Bank. A comprehensive online platform to manage your accounts, execute transfers, and pay obligations securely from any computer or web browser.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "تتيح خدمة الإنترنت البنكي للعملاء إدارة حساباتهم المصرفية وتنفيذ العمليات المالية المختلفة عبر متصفح الويب، مما يوفر تجربة مريحة وآمنة لمن يفضل استخدام أجهزة الكمبيوتر.",
        en: "Internet banking allows customers to manage their bank accounts and execute various financial transactions via a web browser, providing a convenient and secure experience for those who prefer using computers.",
      },
    },
    why: {
      title: { ar: "لماذا خدمة الإنترنت البنكي؟", en: "Why Internet Banking?" },
      description: {
        ar: "لأننا نهدف لتوفير خيارات متنوعة تناسب نمط حياتك، صممنا بوابة إلكترونية تضع فرع البنك بأكمله على شاشة حاسوبك الشخصي.",
        en: "Because we aim to provide diverse options fitting your lifestyle, we designed a web portal that puts the entire bank branch on your personal computer screen.",
      },
      items: [
        { id: "why-ib-1", text: { ar: "شاشة عرض أوسع تتيح قراءة أوضح للتفاصيل المالية وكشوفات الحساب.", en: "A wider screen display allowing clearer reading of financial details and statements." } },
        { id: "why-ib-2", text: { ar: "إمكانية تحميل وتصدير التقارير المالية والملفات بصيغ متعددة (PDF, Excel).", en: "The ability to download and export financial reports and files in multiple formats (PDF, Excel)." } },
        { id: "why-ib-3", text: { ar: "تنفيذ العمليات المصرفية بأعلى معايير التشفير والأمان العالمية.", en: "Executing banking transactions with the highest global encryption and security standards." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات الإنترنت البنكي", en: "Internet Banking Features" },
      items: [
        { id: "fc-ib-1", title: { ar: "لوحة تحكم شاملة", en: "Comprehensive Dashboard" }, description: { ar: "نظرة عامة على جميع حساباتك، ودائعك، وبطاقاتك في شاشة واحدة منظمة.", en: "An overview of all your accounts, deposits, and cards in one organized screen." } },
        { id: "fc-ib-2", title: { ar: "تحويلات متعددة", en: "Multiple Transfers" }, description: { ar: "إجراء تحويلات فردية أو جدولة تحويلات دورية بسهولة عبر النظام.", en: "Perform individual transfers or schedule recurring transfers easily through the system." } },
        { id: "fc-ib-3", title: { ar: "إدارة المستفيدين", en: "Beneficiary Management" }, description: { ar: "إضافة وحفظ بيانات المستفيدين لتسهيل التحويلات المتكررة لاحقاً.", en: "Add and save beneficiary details to facilitate frequent future transfers." } },
        { id: "fc-ib-4", title: { ar: "خدمات ذاتية", en: "Self-Services" }, description: { ar: "طلب دفتر شيكات، إيقاف البطاقات، وتحديث البيانات دون زيارة الفرع.", en: "Request a checkbook, block cards, and update details without visiting the branch." } },
      ],
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-ib-1", text: { ar: "العملاء الأفراد المفضلين لإنجاز أعمالهم عبر أجهزة الكمبيوتر.", en: "Individual clients who prefer completing their tasks via computers." } },
        { id: "aud-ib-2", text: { ar: "الأفراد الذين يحتاجون لاستعراض وطباعة كشوفات حساب تفصيلية.", en: "Individuals who need to review and print detailed account statements." } },
        { id: "aud-ib-3", text: { ar: "المغتربون والمسافرون الراغبون في إدارة أموالهم من أي مكان بالعالم.", en: "Expatriates and travelers wanting to manage their funds from anywhere in the world." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط استخدام الخدمة", en: "Service Usage Requirements" },
      note: { ar: "الخدمة متاحة حصرياً للعملاء المسجلين، ويُنصح دائماً بعدم مشاركة بيانات الدخول مع أي شخص.", en: "The service is exclusively available to registered clients, and it is always advised not to share login details with anyone." },
      items: [
        { id: "req-ib-1", text: { ar: "حساب بنكي نشط لدى بنك بن دول.", en: "An active bank account with Bindowal Bank." } },
        { id: "req-ib-2", text: { ar: "رقم هاتف محمول وعنوان بريد إلكتروني محدثان في سجلات البنك.", en: "An updated mobile number and email address in the bank's records." } },
        { id: "req-ib-3", text: { ar: "متصفح ويب حديث وداعم لمعايير الأمان (مثل Chrome أو Safari).", en: "A modern web browser supporting security standards (like Chrome or Safari)." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات تفعيل الإنترنت البنكي", en: "Steps to Activate Internet Banking" },
      steps: [
        { id: "step-ib-1", title: { ar: "زيارة بوابة التسجيل", en: "Visit Registration Portal" }, description: { ar: "ادخل إلى الموقع الإلكتروني الرسمي لبنك بن دول واختر (التسجيل في الإنترنت البنكي).", en: "Go to the official Bindowal Bank website and select (Register for Internet Banking)." } },
        { id: "step-ib-2", title: { ar: "التحقق من الهوية", en: "Identity Verification" }, description: { ar: "أدخل بيانات حسابك وأكد هويتك عبر الرمز السري المرسل إلى هاتفك.", en: "Enter your account details and confirm your identity via the OTP sent to your phone." } },
        { id: "step-ib-3", title: { ar: "إنشاء اسم مستخدم", en: "Create Username" }, description: { ar: "حدد اسم المستخدم وكلمة المرور الخاصة بك وابدأ في استخدام الخدمة مباشرة.", en: "Choose your username and password and start using the service immediately." } },
      ],
    },
    ctaSection: {
      title: { ar: "أدر حساباتك من شاشتك", en: "Manage Your Accounts from Your Screen" },
      description: { ar: "سجل الآن في خدمة الإنترنت البنكي واختبر سهولة التحكم بأموالك عبر منصة إلكترونية آمنة ومتكاملة.", en: "Register now for internet banking and experience the ease of controlling your money through a secure and integrated online platform." },
      primaryLabel: { ar: "تسجيل الدخول", en: "Login" },
      primaryHref: "/login",
      secondaryLabel: { ar: "التسجيل كجديد", en: "Register as New" },
      secondaryHref: "/register",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-ib-1", question: { ar: "هل بياناتي آمنة عند استخدام الإنترنت البنكي؟", en: "Is my data secure when using internet banking?" }, answer: { ar: "نعم، نستخدم تقنيات التشفير المتقدمة وبروتوكولات الأمان العالمية لضمان سرية وحماية بياناتك بالكامل.", en: "Yes, we use advanced encryption technologies and global security protocols to ensure the confidentiality and complete protection of your data." } },
        { id: "faq-ib-2", question: { ar: "هل يمكنني استخدام نفس بيانات الدخول لتطبيق الموبايل؟", en: "Can I use the same login details for the mobile app?" }, answer: { ar: "نعم، النظام الموحد يتيح لك استخدام نفس اسم المستخدم وكلمة المرور للموبايل والإنترنت البنكي.", en: "Yes, the unified system allows you to use the same username and password for both mobile and internet banking." } },
        { id: "faq-ib-3", question: { ar: "ماذا أفعل إذا تم حظر حسابي بسبب إدخال كلمة مرور خاطئة؟", en: "What should I do if my account is blocked due to an incorrect password?" }, answer: { ar: "يمكنك إعادة تعيين كلمة المرور إلكترونياً عبر خيار (نسيت كلمة المرور) أو التواصل مع خدمة العملاء لفك الحظر.", en: "You can reset your password online via the (Forgot Password) option or contact customer service to unblock it." } },
        { id: "faq-ib-4", question: { ar: "هل أستطيع تحميل كشف حساب لعدة سنوات سابقة؟", en: "Can I download an account statement for several previous years?" }, answer: { ar: "يوفر النظام كشوفات الحساب لفترة زمنية محددة تصل عادة إلى 12-24 شهراً، ويمكن طلب كشوفات أقدم من الفرع.", en: "The system provides statements for a specific period, usually up to 12-24 months. Older statements can be requested from the branch." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه الإنترنت البنكي؟",
        en: "What Does Internet Banking Offer?"
      },
      subtitle: {
        ar: "يساعد الإنترنت البنكي العملاء على متابعة الحسابات وتنفيذ بعض الخدمات عبر المتصفح، مع تجربة مناسبة لمن يفضل إدارة عملياته من الحاسب أو الويب.",
        en: "Internet banking helps customers track accounts and perform selected services through a browser, suited for those who prefer managing operations from a computer or the web."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "عرض الحسابات والأرصدة والحركات عبر واجهة ويب منظمة.",
            en: "View accounts, balances, and transactions through an organized web interface."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "تنفيذ خدمات متاحة مثل التحويلات أو الطلبات حسب سياسة البنك.",
            en: "Perform available services such as transfers or requests according to bank policy."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية تحميل أو مراجعة كشوفات الحساب عند توفرها.",
            en: "Ability to download or review account statements when available."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسب للعملاء والشركات التي تفضل شاشة أكبر لإدارة العمليات.",
            en: "Suitable for customers and businesses that prefer a larger screen for operations."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "إدارة أوضح عبر الويب",
        en: "Clearer Management Through the Web"
      },
      subtitle: {
        ar: "توفر الخدمة طريقة منظمة لمتابعة العمليات من أي جهاز متصل بالإنترنت، مما يحسن وضوح المعلومات وسهولة الوصول إليها.",
        en: "The service provides an organized way to follow transactions from any internet-connected device, improving information clarity and access."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "سهولة مراجعة الحسابات والحركات لفترات مختلفة.",
            en: "Easily review accounts and transactions across different periods."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تقليل الحاجة إلى زيارة الفرع للاستفسارات الأساسية.",
            en: "Reduce branch visits for basic inquiries."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "مساعدة أصحاب الأعمال على متابعة التدفقات من شاشة أوسع.",
            en: "Help business owners follow cash flows on a wider screen."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "دعم تجربة مصرفية رقمية متكاملة مع القنوات الأخرى.",
            en: "Support an integrated digital banking experience with other channels."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "تفعيل يعتمد على حساب وبيانات محدثة",
        en: "Activation Requires an Account and Updated Details"
      },
      subtitle: {
        ar: "يتطلب الإنترنت البنكي حسابًا فعالًا وبيانات تواصل محدثة، مع الالتزام بخطوات التحقق وكلمات المرور الآمنة.",
        en: "Internet banking requires an active account and updated contact details, with verification steps and secure password practices."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "حساب مصرفي فعال لدى البنك.",
            en: "An active bank account with the bank."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "بيانات تواصل محدثة لاستلام رموز التحقق أو الإشعارات عند الحاجة.",
            en: "Updated contact details to receive verification codes or alerts when needed."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال التسجيل واختيار بيانات دخول آمنة.",
            en: "Complete registration and choose secure login credentials."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "موقع البنك أو رابط الإنترنت البنكي المعتمد.",
            en: "The bank website or approved internet banking link."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "الفرع أو خدمة العملاء للمساعدة في التسجيل أو استعادة الوصول.",
            en: "Branch or customer service for registration or access recovery support."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "القنوات الرقمية الأخرى للتنبيهات والمتابعة عند توفرها.",
            en: "Other digital channels for alerts and follow-up when available."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "سجّل دخولك بأمان",
        en: "Log In Securely"
      },
      subtitle: {
        ar: "ابدأ بتفعيل الحساب الرقمي، ثم استخدم بيانات دخول آمنة وراجع العمليات قبل تأكيدها.",
        en: "Start by activating digital access, then use secure credentials and review transactions before confirming them."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "طلب التفعيل",
            en: "Request Activation"
          },
          description: {
            ar: "اطلب تفعيل الإنترنت البنكي عبر القناة المعتمدة.",
            en: "Request internet banking activation through the approved channel."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "إنشاء بيانات الدخول",
            en: "Create Login Credentials"
          },
          description: {
            ar: "أنشئ اسم المستخدم وكلمة المرور وفق متطلبات الأمان.",
            en: "Create a username and password according to security requirements."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "استخدام ومتابعة",
            en: "Use and Monitor"
          },
          description: {
            ar: "ادخل إلى المنصة لمتابعة الحسابات وتنفيذ الخدمات المتاحة.",
            en: "Access the platform to monitor accounts and use available services."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "أدر حساباتك من الويب",
        en: "Manage Accounts from the Web"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة طريقة تفعيل الإنترنت البنكي والخدمات المدعومة.",
        en: "Contact the bank to learn how to activate internet banking and supported services."
      }
    }
  },
  {
    slug: "e-wallet",
    section: "e-services",
    title: {
      ar: "محفظة بن دول باي",
      en: "Bin Dowal Pay Wallet"
    },
    subtitle: {
      ar: "ادفع وحوّل بسهولة… بدون كاش",
      en: "Pay and transfer easily... without cash"
    },
    heroImage: "/images/bindowalpay/model.png",
    breadcrumbs: [
      {
        labelKey: "nav.digitalChannels",
        href: "/e-services"
      },
      {
        labelKey: "nav.eWallet",
        label: {
          ar: "المحفظة الإلكترونية",
          en: "e-Wallet"
        }
      }
    ],
    tagline: {
      ar: "القنوات الرقمية",
      en: "Digital Channels"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    customSections: [
      {
        id: "bindowal-pay",
        componentId: "bin-dowal-pay-app",
        navTitle: {
          ar: "تطبيق بن دول باي",
          en: "BinDowal Pay App"
        }
      }
    ],
    seoDescription: {
      ar: "استخدم محفظة بن دول باي للدفع الإلكتروني وتحويل الأموال بسهولة وأمان داخل اليمن. حلول مالية رقمية تساعدك على تنفيذ معاملاتك اليومية بدون كاش.",
      en: "Use Bin Dowal Pay wallet for e-payment and easy, secure money transfers inside Yemen. Digital financial solutions that help you execute your daily transactions cash-free."
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "محفظة بن دول باي تتيح لك تنفيذ المعاملات المالية اليومية بطريقة رقمية سهلة وآمنة. من خلال المحفظة يمكنك تحويل الأموال، وإجراء عمليات الدفع الإلكتروني في نقاط البيع المنتشرة، وإدارة معاملاتك المالية بسهولة عبر الهاتف المحمول دون الحاجة لحمل النقود.",
        en: "Bin Dowal Pay wallet allows you to perform daily financial transactions in an easy and secure digital way. Through the wallet, you can transfer money, make electronic payments at widely distributed points of sale, and manage your financial transactions easily via mobile phone without carrying cash."
      }
    },
    why: {
      title: { ar: "لماذا تختار محفظة بن دول باي؟", en: "Why Choose Bin Dowal Pay Wallet?" },
      description: {
        ar: "لأن المعاملات اليومية أصبحت تحتاج إلى حلول أسرع وأسهل.",
        en: "Because daily transactions now require faster and easier solutions."
      },
      items: [
        { id: "why-ew-1", text: { ar: "تحويل واستلام الأموال بسهولة", en: "Transfer and receive money easily" } },
        { id: "why-ew-2", text: { ar: "الدفع إلكترونيًا بسرعة", en: "Pay electronically quickly" } },
        { id: "why-ew-3", text: { ar: "تنفيذ معاملاتك بدون كاش", en: "Execute your transactions cash-free" } },
        { id: "why-ew-4", text: { ar: "إدارة أموالك عبر الهاتف", en: "Manage your money via mobile phone" } },
        { id: "why-ew-5", text: { ar: "الوصول لخدمات مالية رقمية آمنة", en: "Access secure digital financial services" } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات محفظة بن دول باي", en: "Features of Bin Dowal Pay Wallet" },
      items: [
        { id: "fc-ew-1", title: { ar: "تحويل الأموال بسهولة", en: "Easy Money Transfer" }, description: { ar: "إمكانية إرسال واستقبال الأموال الى مشتركي المحفظة او من خلال خدمة الحوالات بسرعة وأمان.", en: "Ability to send and receive money to wallet subscribers or through the transfer service quickly and securely." } },
        { id: "fc-ew-2", title: { ar: "الدفع الإلكتروني", en: "Electronic Payment" }, description: { ar: "تنفيذ عمليات الدفع للخدمات والمشتريات عبر نقاط البيع في اكثر من 15000 نقطة منتشرة.", en: "Execute payment transactions for services and purchases via POS at more than 15,000 active points." } },
        { id: "fc-ew-3", title: { ar: "تقليل الاعتماد على الكاش", en: "Reduced Cash Dependency" }, description: { ar: "استخدام المحفظة كبديل عملي للنقد في المعاملات اليومية، حيث يمكنك الايداع والسحب عبر فروع ووكلاء البنك.", en: "Using the wallet as a practical alternative to cash in daily transactions, with the ability to deposit and withdraw via bank branches and agents." } },
        { id: "fc-ew-4", title: { ar: "سهولة الاستخدام", en: "Ease of Use" }, description: { ar: "واجهة بسيطة تساعد العملاء على تنفيذ العمليات بسهولة.", en: "A simple interface that helps customers execute transactions easily." } },
        { id: "fc-ew-5", title: { ar: "خدمات الشحن والسداد", en: "Recharge & Payment Services" }, description: { ar: "شحن رصيد الهاتف والانترنت والخدمات الحكومية مثل الماء والكهرباء.", en: "Recharge mobile and internet balance, and pay utility bills like water and electricity." } },
        { id: "fc-ew-6", title: { ar: "خدمات متوفرة على مدار الساعة", en: "24/7 Available Services" }, description: { ar: "الوصول إلى المحفظة والخدمات المالية في أي وقت.", en: "Access the wallet and financial services at any time." } },
        { id: "fc-ew-7", title: { ar: "أمان وحماية", en: "Security & Protection" }, description: { ar: "أنظمة حماية تساعد على تأمين الحسابات والمعاملات المالية.", en: "Protection systems that help secure accounts and financial transactions." } },
        { id: "fc-ew-8", title: { ar: "إدارة المعاملات عبر الهاتف", en: "Transaction Management via Phone" }, description: { ar: "تنفيذ مختلف العمليات المالية مباشرة من الهاتف المحمول.", en: "Execute various financial transactions directly from your mobile phone." } }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-ew-1", text: { ar: "الأفراد الذين يعتمدون على الدفع الإلكتروني", en: "Individuals who rely on electronic payments" } },
        { id: "aud-ew-2", text: { ar: "الشباب المستخدمون للخدمات الرقمية", en: "Youth using digital services" } },
        { id: "aud-ew-3", text: { ar: "أصحاب الأعمال الصغيرة", en: "Small business owners" } },
        { id: "aud-ew-4", text: { ar: "المتاجر والمحلات التجارية", en: "Stores and commercial shops" } },
        { id: "aud-ew-5", text: { ar: "المستخدمون الباحثون عن حلول مالية أسرع وأسهل", en: "Users looking for faster and easier financial solutions" } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط استخدام محفظة بن دول باي", en: "Bin Dowal Pay Wallet Terms of Use" },
      items: [
        { id: "req-ew-1", text: { ar: "رقم هاتف فعال", en: "An active mobile number" } },
        { id: "req-ew-2", text: { ar: "التسجيل في المحفظة الإلكترونية", en: "Registration in the e-wallet" } },
        { id: "req-ew-3", text: { ar: "الموافقة على شروط الاستخدام", en: "Agreement to the terms of use" } },
        { id: "req-ew-4", text: { ar: "استيفاء متطلبات التفعيل بحسب سياسة البنك", en: "Meeting activation requirements according to bank policy" } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات استخدام محفظة بن دول باي", en: "Steps to Use Bin Dowal Pay Wallet" },
      steps: [
        { id: "step-ew-1", title: { ar: "تحميل التطبيق أو التسجيل في الخدمة", en: "Download the App or Register" }, description: { ar: "قم بتثبيت التطبيق من المتجر الرسمي أو ابدأ التسجيل عبر القنوات المتاحة.", en: "Install the app from the official store or start registration via available channels." } },
        { id: "step-ew-2", title: { ar: "إدخال البيانات المطلوبة", en: "Enter Required Details" }, description: { ar: "أدخل بياناتك الشخصية ورقم الهاتف لتعبئة نموذج التسجيل.", en: "Enter your personal details and mobile number to fill the registration form." } },
        { id: "step-ew-3", title: { ar: "تفعيل المحفظة", en: "Activate the Wallet" }, description: { ar: "أكمل خطوات التحقق والتفعيل للبدء باستخدام المحفظة بأمان.", en: "Complete the verification and activation steps to start using the wallet securely." } },
        { id: "step-ew-4", title: { ar: "البدء باستخدام خدمات الدفع والتحويل الإلكتروني", en: "Start Paying & Transferring" }, description: { ar: "اشحن رصيد محفظتك وابدأ بتنفيذ عمليات التحويل والدفع بكل سهولة.", en: "Top up your wallet balance and start performing transfers and payments with ease." } }
      ]
    },
    ctaSection: {
      title: { ar: "ابدأ الآن", en: "Get Started Now" },
      description: { ar: "استخدم محفظة بن دول باي اليوم واستمتع بطريقة أسهل وأسرع لإدارة معاملاتك المالية والدفع الإلكتروني داخل اليمن", en: "Use Bin Dowal Pay wallet today and enjoy a faster and easier way to manage your financial transactions and electronic payments inside Yemen" },
      primaryLabel: { ar: "تحميل التطبيق", en: "Download App" },
      primaryHref: "/download-wallet",
      secondaryLabel: { ar: "دليل الاستخدام", en: "User Guide" },
      secondaryHref: "#guide"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-ew-1", question: { ar: "ما هي محفظة بن دول باي؟", en: "What is Bin Dowal Pay Wallet?" }, answer: { ar: "هي محفظة إلكترونية تتيح تنفيذ عمليات الدفع وتحويل الأموال عبر الهاتف.", en: "It is an electronic wallet that allows executing payments and money transfers via mobile phone." } },
        { id: "faq-ew-2", question: { ar: "هل يمكن تحويل الأموال عبر المحفظة؟", en: "Can money be transferred via the wallet?" }, answer: { ar: "نعم، يمكنك إرسال واستقبال الأموال بسهولة عبر المحفظة.", en: "Yes, you can easily send and receive money via the wallet." } },
        { id: "faq-ew-3", question: { ar: "هل المحفظة آمنة؟", en: "Is the wallet secure?" }, answer: { ar: "نعم، تعتمد الخدمة على أنظمة حماية إلكترونية لتعزيز أمان العمليات المالية.", en: "Yes, the service relies on electronic protection systems to enhance the security of financial transactions." } },
        { id: "faq-ew-4", question: { ar: "هل يمكن استخدام المحفظة في الدفع الإلكتروني؟", en: "Can the wallet be used for e-payment?" }, answer: { ar: "نعم، يمكن استخدامها للدفع مقابل الخدمات والمشتريات الإلكترونية.", en: "Yes, it can be used for payments against services and electronic purchases." } },
        { id: "faq-ew-5", question: { ar: "هل الخدمة متوفرة طوال الوقت؟", en: "Is the service available all the time?" }, answer: { ar: "نعم، يمكن استخدام المحفظة على مدار الساعة.", en: "Yes, the wallet can be used 24/7." } }
      ]
    },
    details: {
      title: {
        ar: "ما الذي يقدمه المحفظة الإلكترونية؟",
        en: "What Does the e-Wallet Offer?"
      },
      subtitle: {
        ar: "توفر المحفظة الإلكترونية طريقة سهلة لحفظ قيمة رقمية واستخدامها في المدفوعات أو التحويلات الصغيرة أو السحب والإيداع عبر القنوات المعتمدة عند توفرها.",
        en: "The e-wallet provides an easy way to hold digital value and use it for payments, small transfers, or cash-in and cash-out through approved channels when available."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "إرسال واستقبال مبالغ صغيرة بسرعة عبر الهاتف عند توفر الخدمة.",
            en: "Send and receive small amounts quickly by phone when supported."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "دفع المشتريات أو الخدمات عبر رمز أو رقم محفظة حسب آلية التشغيل.",
            en: "Pay for purchases or services using a code or wallet number depending on the operating model."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إمكانية الإيداع والسحب عبر الوكلاء أو الفروع أو القنوات المتاحة.",
            en: "Cash-in and cash-out through agents, branches, or available channels."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسبة للاستخدامات اليومية منخفضة القيمة والمتكررة.",
            en: "Suitable for low-value, frequent everyday uses."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "مدفوعات يومية أكثر خفة",
        en: "Lighter Everyday Payments"
      },
      subtitle: {
        ar: "تقلل المحفظة الحاجة إلى حمل النقد في العمليات الصغيرة، وتمنح المستخدم وسيلة أسرع لإرسال واستلام المدفوعات اليومية.",
        en: "The wallet reduces the need to carry cash for small transactions and gives users a faster way to send and receive everyday payments."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "سهولة الدفع للمشتريات اليومية أو الخدمات المتكررة.",
            en: "Easy payment for daily purchases or recurring services."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "إرسال مبالغ بسيطة للأقارب أو العملاء بصورة أسرع.",
            en: "Send small amounts to relatives or customers more quickly."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "متابعة العمليات الرقمية من خلال سجل أو إشعارات عند توفرها.",
            en: "Track digital transactions through history or notifications when available."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تجربة مناسبة للعملاء الذين يحتاجون بديلًا مرنًا للنقد.",
            en: "A suitable experience for customers who need a flexible alternative to cash."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "رقم جوال وتحقق أساسي",
        en: "Mobile Number and Basic Verification"
      },
      subtitle: {
        ar: "يتطلب فتح المحفظة عادة رقم جوال فعالًا وبيانات تعريفية أساسية، مع الالتزام بحدود الاستخدام والتحقق حسب سياسة البنك.",
        en: "Opening a wallet typically requires an active mobile number and basic identification details, with usage limits and verification according to bank policy."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "رقم جوال فعال وغير مستخدم في محفظة أخرى عند الحاجة.",
            en: "An active mobile number not already used for another wallet when required."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "هوية أو بيانات تحقق حسب مستوى المحفظة.",
            en: "ID or verification details depending on wallet level."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "قبول شروط الاستخدام وحدود العمليات المعتمدة.",
            en: "Accept terms of use and approved transaction limits."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "التطبيق أو القناة الرقمية الخاصة بالمحفظة عند توفرها.",
            en: "The wallet app or digital channel when available."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "الفروع أو الوكلاء المعتمدون للإيداع والسحب عند الدعم.",
            en: "Branches or approved agents for cash-in and cash-out when supported."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "خدمة العملاء للدعم واستعادة الوصول أو الاستفسار.",
            en: "Customer service for support, access recovery, or inquiries."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "فعّل محفظتك وابدأ الدفع",
        en: "Activate Your Wallet and Start Paying"
      },
      subtitle: {
        ar: "تبدأ الخدمة بتسجيل رقم الجوال، ثم التحقق، وبعدها شحن المحفظة واستخدامها في العمليات المتاحة.",
        en: "The service starts with registering a mobile number, verification, then funding the wallet and using it for available transactions."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تسجيل رقم الجوال",
            en: "Register Mobile Number"
          },
          description: {
            ar: "أدخل رقم الجوال والبيانات الأساسية المطلوبة.",
            en: "Enter the mobile number and required basic details."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "استكمال التحقق",
            en: "Complete Verification"
          },
          description: {
            ar: "أكمل رمز التحقق أو الخطوات المطلوبة حسب آلية البنك.",
            en: "Complete the verification code or required steps according to the bank’s process."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "الشحن والاستخدام",
            en: "Fund and Use"
          },
          description: {
            ar: "اشحن المحفظة وابدأ باستخدامها في المدفوعات أو التحويلات المتاحة.",
            en: "Fund the wallet and start using it for available payments or transfers."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "ادفع بطريقة أبسط",
        en: "Pay More Simply"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة طريقة فتح المحفظة والحدود والخدمات المتاحة.",
        en: "Contact the bank to learn how to open the wallet, limits, and available services."
      }
    }
  },
  {
    slug: "mushtarayati-network",
    section: "e-services",
    title: {
      ar: "نقاط البيع (شبكة مشترياتي)",
      en: "POS (Mushtarayati Network)"
    },
    subtitle: {
      ar: "حلول دفع إلكترونية أسهل لأعمالك",
      en: "Easier electronic payment solutions for your business"
    },
    heroImage: "/images/personalCover.png",
    breadcrumbs: [
      {
        labelKey: "nav.digitalChannels",
        href: "/e-services"
      },
      {
        labelKey: "nav.posNet",
        label: {
          ar: "شبكة مشترياتي",
          en: "Mushtarayati Network"
        }
      }
    ],
    tagline: {
      ar: "القنوات الرقمية",
      en: "Digital Channels"
    },
    primaryCta: {
      label: {
        ar: "اطلب الخدمة الآن",
        en: "Request This Service"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "استخدم نقاط البيع من بنك بن دول (شبكة مشترياتي) لقبول المدفوعات الإلكترونية بسهولة وأمان داخل اليمن، وتوفير تجربة دفع أسرع للعملاء باستخدام البطاقات البنكية.",
      en: "Use Bindowal Bank POS (Mushtarayati Network) to accept electronic payments easily and securely inside Yemen, providing a faster payment experience for customers using bank cards."
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "نقاط البيع (شبكة مشترياتي) هي خدمة إلكترونية تتيح للتجار والمنشآت التجارية استقبال المدفوعات عبر البطاقات البنكية بطريقة سهلة وآمنة. وتساعد الخدمة على تسهيل عمليات الشراء والدفع داخل المتاجر، وتقليل الاعتماد على النقد، مع توفير تجربة دفع أسرع وأكثر مرونة للعملاء. سواء كنت تمتلك متجرًا، أو مطعمًا، أو صيدلية، أو أي نشاط تجاري آخر، فإن نقاط البيع من بنك بن دول تمنحك وسيلة حديثة لتطوير عمليات الدفع وتحسين تجربة العملاء. كما يمكنك عبر فروع بن دول للصرافة تنفيذ عمليات السحب النقدي.",
        en: "POS (Mushtarayati Network) is an electronic service that allows merchants and commercial establishments to accept payments via bank cards in an easy and secure way. The service helps facilitate purchase and payment operations within stores, reduces reliance on cash, and provides a faster and more flexible payment experience for customers. Whether you own a store, restaurant, pharmacy, or any other business, Bindowal Bank POS gives you a modern tool to develop payment operations and improve customer experience. You can also execute cash withdrawal transactions through Bin Dowal Exchange branches."
      }
    },
    why: {
      title: { ar: "لماذا تختار نقاط البيع من بنك بن دول؟", en: "Why Choose Bindowal Bank POS?" },
      description: {
        ar: "لأن العملاء اليوم يفضلون وسائل الدفع السريعة والمرنة.",
        en: "Because customers today prefer fast and flexible payment methods."
      },
      items: [
        { id: "why-pos-1", text: { ar: "استقبال المدفوعات بسهولة", en: "Accept payments easily" } },
        { id: "why-pos-2", text: { ar: "تسريع عمليات البيع داخل المتجر", en: "Speed up in-store sales operations" } },
        { id: "why-pos-3", text: { ar: "تقليل التعامل بالكاش", en: "Reduce cash handling" } },
        { id: "why-pos-4", text: { ar: "توفير خيارات دفع متعددة للعملاء", en: "Provide multiple payment options for customers" } },
        { id: "why-pos-5", text: { ar: "تحسين تجربة الشراء والدفع", en: "Improve purchase and payment experience" } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات نقاط البيع (شبكة مشترياتي)", en: "Features of POS (Mushtarayati Network)" },
      items: [
        { id: "fc-pos-1", title: { ar: "قبول البطاقات البنكية", en: "Accept Bank Cards" }, description: { ar: "إمكانية استقبال المدفوعات عبر البطاقات البنكية بسهولة.", en: "Ability to accept payments via bank cards easily." } },
        { id: "fc-pos-2", title: { ar: "تسريع عمليات الدفع", en: "Speed Up Payments" }, description: { ar: "تقليل وقت تنفيذ عمليات الشراء داخل المتاجر.", en: "Reduce purchase execution time in stores." } },
        { id: "fc-pos-3", title: { ar: "دعم الدفع الإلكتروني", en: "Support E-Payment" }, description: { ar: "المساهمة في تعزيز استخدام وسائل الدفع الحديثة داخل اليمن.", en: "Contribute to promoting the use of modern payment methods in Yemen." } },
        { id: "fc-pos-4", title: { ar: "سهولة الاستخدام", en: "Ease of Use" }, description: { ar: "أجهزة وأنظمة سهلة تساعد على تنفيذ العمليات بسرعة.", en: "Easy-to-use devices and systems that help execute transactions quickly." } },
        { id: "fc-pos-5", title: { ar: "أمان وحماية للمعاملات", en: "Transaction Security & Protection" }, description: { ar: "تنفيذ العمليات وفق أنظمة حماية إلكترونية موثوقة.", en: "Execute transactions under reliable electronic protection systems." } },
        { id: "fc-pos-6", title: { ar: "تقليل الاعتماد على النقد", en: "Reduced Cash Dependency" }, description: { ar: "المساعدة في إدارة المبيعات وتقليل تداول الكاش داخل النشاط التجاري.", en: "Help manage sales and reduce cash circulation within the business." } },
        { id: "fc-pos-7", title: { ar: "مناسبة لمختلف الأنشطة التجارية", en: "Suitable for Various Businesses" }, description: { ar: "إمكانية استخدام الخدمة في المتاجر، المطاعم، الصيدليات، والأسواق وغيرها.", en: "Ability to use the service in stores, restaurants, pharmacies, markets, and others." } }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-pos-1", text: { ar: "المتاجر والمحلات التجارية", en: "Stores and retail shops" } },
        { id: "aud-pos-2", text: { ar: "المطاعم والكافيهات والفنادق والجامعات", en: "Restaurants, cafes, hotels, and universities" } },
        { id: "aud-pos-3", text: { ar: "الصيدليات", en: "Pharmacies" } },
        { id: "aud-pos-4", text: { ar: "السوبرماركت", en: "Supermarkets" } },
        { id: "aud-pos-5", text: { ar: "الشركات وأصحاب الأعمال", en: "Companies and business owners" } },
        { id: "aud-pos-6", text: { ar: "الأنشطة التجارية التي تعتمد على المدفوعات اليومية", en: "Businesses relying on daily payments" } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط الحصول على خدمة نقاط البيع", en: "POS Service Acquisition Conditions" },
      items: [
        { id: "req-pos-1", text: { ar: "سجل أو نشاط تجاري بحسب سياسة البنك", en: "Commercial registration or active business according to bank policy" } },
        { id: "req-pos-2", text: { ar: "حساب بنكي لدى البنك", en: "An active bank account with the bank" } },
        { id: "req-pos-3", text: { ar: "تعبئة نموذج طلب الخدمة", en: "Filling out the service request form" } },
        { id: "req-pos-4", text: { ar: "استيفاء شروط التفعيل والتركيب", en: "Meeting activation and installation requirements" } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات الحصول على نقاط البيع", en: "Steps to Obtain POS Devices" },
      steps: [
        { id: "step-pos-1", title: { ar: "زيارة أقرب فرع", en: "Visit the Nearest Branch" }, description: { ar: "توجه إلى أقرب فرع للبنك لمقابلة ممثل خدمة العملاء.", en: "Go to the nearest bank branch to meet a customer service representative." } },
        { id: "step-pos-2", title: { ar: "تقديم طلب الخدمة", en: "Submit the Service Request" }, description: { ar: "قم بتعبئة وتقديم نموذج طلب خدمة نقاط البيع المعتمد.", en: "Fill out and submit the approved POS service request form." } },
        { id: "step-pos-3", title: { ar: "استكمال البيانات المطلوبة", en: "Complete Required Details" }, description: { ar: "تقديم المستندات المطلوبة مثل الهوية والسجل التجاري ورقم الحساب.", en: "Submit the required documents such as ID, commercial registration, and account number." } },
        { id: "step-pos-4", title: { ar: "مراجعة الطلب واعتماد الخدمة", en: "Review & Approve Request" }, description: { ar: "يقوم البنك بمراجعة الطلب والموافقة على توفير الخدمة لنشاطك.", en: "The bank reviews the request and approves providing the service to your business." } },
        { id: "step-pos-5", title: { ar: "تركيب جهاز نقاط البيع وتفعيله", en: "Install & Activate POS Device" }, description: { ar: "يقوم الفريق الفني بتركيب الجهاز في متجرك وتدريبك على استخدامه.", en: "The technical team installs the device in your store and trains you on its use." } }
      ]
    },
    ctaSection: {
      title: { ar: "ابدأ الآن", en: "Get Started Now" },
      description: { ar: "وفّر لعملائك تجربة دفع أسرع وأسهل مع نقاط البيع من بنك بن دول، وابدأ باستخدام حلول الدفع الإلكتروني داخل نشاطك التجاري", en: "Provide your customers with a faster and easier payment experience with Bindowal Bank POS, and start using electronic payment solutions in your business" },
      primaryLabel: { ar: "اطلب الخدمة الآن", en: "Request Service Now" },
      primaryHref: "/contact"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-pos-1", question: { ar: "ما هي نقاط البيع؟", en: "What are POS devices?" }, answer: { ar: "هي أجهزة إلكترونية تساعد المتاجر على استقبال المدفوعات عبر البطاقات البنكية.", en: "They are electronic devices that help stores accept payments via bank cards." } },
        { id: "faq-pos-2", question: { ar: "هل يمكن استخدام الخدمة في مختلف الأنشطة التجارية؟", en: "Can the service be used in various commercial activities?" }, answer: { ar: "نعم، الخدمة مناسبة لمختلف أنواع الأنشطة التجارية.", en: "Yes, the service is suitable for various types of commercial activities." } },
        { id: "faq-pos-3", question: { ar: "هل نقاط البيع آمنة؟", en: "Are POS devices secure?" }, answer: { ar: "نعم، تعتمد الخدمة على أنظمة حماية إلكترونية لتنفيذ العمليات بأمان.", en: "Yes, the service relies on electronic protection systems to execute transactions securely." } },
        { id: "faq-pos-4", question: { ar: "هل تساعد الخدمة على تقليل استخدام الكاش؟", en: "Does the service help reduce cash usage?" }, answer: { ar: "نعم، تسهم نقاط البيع في تعزيز الدفع الإلكتروني وتقليل الاعتماد على النقد.", en: "Yes, POS contributes to promoting electronic payment and reducing cash reliance." } },
        { id: "faq-pos-5", question: { ar: "هل يمكن متابعة العمليات المالية؟", en: "Can financial transactions be tracked?" }, answer: { ar: "نعم، يمكن متابعة العمليات المنفذة عبر الخدمة بحسب الأنظمة المتاحة.", en: "Yes, transactions executed through the service can be tracked according to available systems." } }
      ]
    },
    details: {
      title: {
        ar: "ما الذي يقدمه شبكة مشترياتي؟",
        en: "What Does Mushtarayati Network Offer?"
      },
      subtitle: {
        ar: "تدعم شبكة مشترياتي التجار والمنشآت في قبول المدفوعات عبر نقاط البيع أو حلول الدفع المتاحة، بما يقلل الاعتماد على النقد ويسهل التحصيل.",
        en: "Mushtarayati Network supports merchants and businesses in accepting payments through POS or available payment solutions, reducing cash reliance and simplifying collections."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "قبول المدفوعات من العملاء عبر أجهزة أو حلول دفع معتمدة.",
            en: "Accept customer payments through approved devices or payment solutions."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "تسوية العمليات إلى حساب التاجر وفق دورة التسوية المعتمدة.",
            en: "Settle transactions into the merchant account according to the approved settlement cycle."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "تقارير أو إشعارات تساعد على متابعة عمليات البيع عند توفرها.",
            en: "Reports or notifications to help monitor sales transactions when available."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "مناسبة للمتاجر، العيادات، نقاط الخدمة، والمنشآت الصغيرة والمتوسطة.",
            en: "Suitable for shops, clinics, service points, and small to medium businesses."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "تحصيل أسهل وتجربة دفع أفضل",
        en: "Easier Collection and Better Payment Experience"
      },
      subtitle: {
        ar: "تساعد الخدمة التاجر على تقديم خيارات دفع أكثر مرونة للعملاء، مع تحسين توثيق المبيعات وتقليل مخاطر التعامل النقدي.",
        en: "The service helps merchants provide more flexible payment options for customers while improving sales documentation and reducing cash-handling risks."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "زيادة راحة العملاء عند الدفع بوسائل غير نقدية.",
            en: "Increase customer convenience through non-cash payment options."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تحسين تتبع المبيعات والتحصيل من خلال سجلات العمليات.",
            en: "Improve sales and collection tracking through transaction records."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "تقليل الحاجة للاحتفاظ بالنقد داخل نقطة البيع.",
            en: "Reduce the need to keep cash at the point of sale."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "دعم نمو النشاط التجاري من خلال خيارات دفع أوسع.",
            en: "Support business growth through broader payment options."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "متطلبات تاجر وحساب أعمال",
        en: "Merchant and Business Account Requirements"
      },
      subtitle: {
        ar: "قد يتطلب الاشتراك وجود حساب تجاري أو ملف تاجر، مع وثائق النشاط وموقع نقطة البيع والتزام بشروط الاستخدام والتسوية.",
        en: "Subscription may require a business account or merchant file, activity documents, point-of-sale location, and compliance with usage and settlement terms."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "حساب أعمال أو حساب تاجر مؤهل لدى البنك.",
            en: "An eligible business or merchant account with the bank."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "وثائق النشاط التجاري وموقع نقطة البيع.",
            en: "Business activity documents and point-of-sale location."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "استكمال اتفاقية الخدمة وقبول شروط التشغيل والتسوية.",
            en: "Complete the service agreement and accept operating and settlement terms."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "فريق خدمات الأعمال أو الفرع لتقديم طلب الاشتراك.",
            en: "Business banking team or branch to submit the subscription request."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "فريق الدعم الفني للتركيب أو التدريب عند الحاجة.",
            en: "Technical support team for installation or training when needed."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "خدمة العملاء لمتابعة التسويات أو الاستفسارات العامة.",
            en: "Customer service for settlement follow-up or general inquiries."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "من طلب الاشتراك إلى التشغيل",
        en: "From Subscription Request to Operation"
      },
      subtitle: {
        ar: "تبدأ الخدمة بتقديم طلب التاجر، ثم مراجعة النشاط والموقع، وبعد الموافقة يتم تجهيز وسيلة الدفع وتشغيلها.",
        en: "The service starts with the merchant request, activity and location review, then preparing and activating the payment solution after approval."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تقديم طلب تاجر",
            en: "Submit Merchant Request"
          },
          description: {
            ar: "قدّم بيانات النشاط وموقع نقطة البيع والوثائق المطلوبة.",
            en: "Submit business details, POS location, and required documents."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "المراجعة والتجهيز",
            en: "Review and Prepare"
          },
          description: {
            ar: "يقوم البنك بمراجعة الطلب وتجهيز الحل المناسب عند الموافقة.",
            en: "The bank reviews the request and prepares the suitable solution after approval."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "التشغيل والمتابعة",
            en: "Activate and Monitor"
          },
          description: {
            ar: "يتم تشغيل الخدمة وتدريب المستخدمين ومتابعة التسويات.",
            en: "The service is activated, users are trained, and settlements are monitored."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "طوّر تجربة الدفع في نشاطك",
        en: "Upgrade Payment Experience in Your Business"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة متطلبات الاشتراك في شبكة مشترياتي والحلول المتاحة لنشاطك.",
        en: "Contact the bank to learn Mushtarayati Network requirements and available solutions for your business."
      }
    }
  },
  // {
  //       slug: "credit-card",
  //       section: "personal",
  //       title: {
  //             ar: "بطاقة الائتمان",
  //             en: "Credit Card"
  //       },
  //       subtitle: {
  //             ar: "مرونة شرائية أوسع لإدارة المدفوعات اليومية والسفر والاحتياجات الطارئة بثقة",
  //             en: "Wider purchasing flexibility for daily payments, travel, and urgent needs with confidence"
  //       },
  //       heroImage: "/images/cards/debit_desert-compressed.webp",
  //       breadcrumbs: [
  //             {
  //                   labelKey: "nav.personalBanking",
  //                   href: "/personal-banking"
  //             },
  //             {
  //                   labelKey: "nav.creditCard",
  //                   label: {
  //                         ar: "بطاقة الائتمان",
  //                         en: "Credit Card"
  //                   }
  //             }
  //       ],
  //       tagline: {
  //             ar: "البطاقات البنكية",
  //             en: "Bank Cards"
  //       },
  //       primaryCta: {
  //             label: {
  //                   ar: "اطلب البطاقة الآن",
  //                   en: "Request This Card"
  //             },
  //             href: "/contact"
  //       },
  //       seoDescription: {
  //         ar: "البطاقة الائتمانية من بنك بن دول. قوة شرائية ومرونة مالية تمكنك من التسوق محلياً وعالمياً، مع خطط سداد مريحة ومزايا حصرية لحاملي البطاقات.",
  //         en: "Credit Card from Bindowal Bank. Purchasing power and financial flexibility enabling you to shop locally and globally, with convenient repayment plans and exclusive cardholder benefits.",
  //       },
  //       overview: {
  //         title: { ar: "نبذة تعريفية", en: "Overview" },
  //         description: {
  //           ar: "صُممت البطاقة الائتمانية من بنك بن دول لتمنحك السيولة اللازمة عند الحاجة، مع حد ائتماني متوافق مع دخلك، لتستمتع بالتسوق وتلبية التزاماتك بكل راحة ويسر.",
  //           en: "The credit card from Bindowal Bank is designed to provide you with necessary liquidity when needed, with a credit limit matched to your income, allowing you to enjoy shopping and meet your obligations comfortably.",
  //         },
  //       },
  //       why: {
  //         title: { ar: "لماذا تختار بطاقتنا الائتمانية؟", en: "Why Choose Our Credit Card?" },
  //         description: {
  //           ar: "لأننا ندرك أن طموحاتك لا حدود لها، نقدم لك بطاقة ائتمانية تمثل مفتاحك لعالم من المزايا الشرائية والرفاهية محلياً ودولياً.",
  //           en: "Because we realize your ambitions are limitless, we offer a credit card that acts as your key to a world of purchasing benefits and luxury locally and internationally.",
  //         },
  //         items: [
  //           { id: "why-cc-1", text: { ar: "مرونة عالية في السداد تتيح لك دفع نسبة بسيطة من المبلغ المستحق شهرياً.", en: "High payment flexibility allowing you to pay a small percentage of the due amount monthly." } },
  //           { id: "why-cc-2", text: { ar: "مقبولة عالمياً لدى ملايين المتاجر والمواقع الإلكترونية وأجهزة الصراف الآلي.", en: "Globally accepted at millions of stores, websites, and ATMs." } },
  //           { id: "why-cc-3", text: { ar: "مكافآت ونقاط قطاف على كل عملية شرائية تقوم بها باستخدام البطاقة.", en: "Rewards and points on every purchase made using the card." } },
  //         ],
  //       },
  //       featureCards: {
  //         title: { ar: "مميزات البطاقة", en: "Card Features" },
  //         items: [
  //           { id: "fc-cc-1", title: { ar: "حد ائتماني مرن", en: "Flexible Credit Limit" }, description: { ar: "حد مالي يتناسب مع مستوى دخلك الشهري واحتياجاتك الشرائية.", en: "A financial limit commensurate with your monthly income level and purchasing needs." } },
  //           { id: "fc-cc-2", title: { ar: "الدفع بدون تلامس", en: "Contactless Payment" }, description: { ar: "أنجز مدفوعاتك اليومية الصغيرة بلمسة واحدة عبر تقنية NFC.", en: "Complete small daily payments with a single tap using NFC technology." } },
  //           { id: "fc-cc-3", title: { ar: "أمان متقدم", en: "Advanced Security" }, description: { ar: "بطاقة مزودة بشريحة ذكية وتقنية 3D Secure للحماية عند التسوق الإلكتروني.", en: "Card equipped with a smart chip and 3D Secure technology for protection during online shopping." } },
  //           { id: "fc-cc-4", title: { ar: "كشف حساب مفصل", en: "Detailed Statement" }, description: { ar: "كشف حساب شهري يوضح كافة مشترياتك ومدفوعاتك لمساعدتك في إدارة ميزانيتك.", en: "A monthly account statement detailing all purchases and payments to help manage your budget." } },
  //         ],
  //       },
  //       audience: {
  //         title: { ar: "العملاء المستهدفون", en: "Target Audience" },
  //         items: [
  //           { id: "aud-cc-1", text: { ar: "الموظفون المحولة رواتبهم إلى بنك بن دول.", en: "Employees with salaries transferred to Bindowal Bank." } },
  //           { id: "aud-cc-2", text: { ar: "رجال الأعمال وأصحاب المؤسسات ذوي الدخل الثابت.", en: "Businessmen and business owners with stable income." } },
  //           { id: "aud-cc-3", text: { ar: "العملاء الباحثون عن سيولة مرنة لتمويل مشترياتهم وسفرهم.", en: "Customers looking for flexible liquidity to finance purchases and travel." } },
  //         ],
  //       },
  //       requirementsSection: {
  //         title: { ar: "شروط استخراج البطاقة", en: "Card Issuance Requirements" },
  //         items: [
  //           { id: "req-cc-1", text: { ar: "فتح حساب جاري أو توفير نشط لدى بنك بن دول.", en: "Open an active current or savings account with Bindowal Bank." } },
  //           { id: "req-cc-2", text: { ar: "خطاب تعريف بالراتب أو كشف حساب يثبت الدخل للشهور الثلاثة الأخيرة.", en: "Salary introduction letter or account statement proving income for the last three months." } },
  //           { id: "req-cc-3", text: { ar: "نسخة سارية المفعول من الهوية الوطنية أو جواز السفر.", en: "A valid copy of the national ID or passport." } },
  //         ],
  //       },
  //       stepsSection: {
  //         title: { ar: "كيفية الحصول على البطاقة", en: "How to Get the Card" },
  //         steps: [
  //           { id: "step-cc-1", title: { ar: "تقديم الطلب", en: "Submit Application" }, description: { ar: "تفضل بزيارة أقرب فرع أو قدم طلبك عبر تطبيق الموبايل البنكي مرفقاً بالمستندات.", en: "Visit the nearest branch or apply via the mobile banking app attaching the documents." } },
  //           { id: "step-cc-2", title: { ar: "دراسة الائتمان", en: "Credit Review" }, description: { ar: "يقوم البنك بمراجعة طلبك وتحديد الحد الائتماني المناسب لدخلك.", en: "The bank reviews your application and determines the credit limit suitable for your income." } },
  //           { id: "step-cc-3", title: { ar: "استلام وتفعيل", en: "Receive & Activate" }, description: { ar: "استلم بطاقتك من الفرع، وقم بتفعيلها وإنشاء الرقم السري عبر الصراف الآلي أو التطبيق.", en: "Receive your card from the branch, activate it, and set the PIN via ATM or the app." } },
  //         ],
  //       },
  //       ctaSection: {
  //         title: { ar: "أنجز مشترياتك بكل ثقة", en: "Complete Purchases with Full Confidence" },
  //         description: { ar: "تقدم بطلب البطاقة الائتمانية الآن واستفد من عروض السداد المرنة وقوة شرائية بلا حدود.", en: "Apply for a credit card now and benefit from flexible payment offers and unlimited purchasing power." },
  //         primaryLabel: { ar: "قدم طلبك الآن", en: "Apply Now" },
  //         primaryHref: "/contact",
  //         secondaryLabel: { ar: "احسب الحد الائتماني", en: "Calculate Credit Limit" },
  //         secondaryHref: "#calculator",
  //       },
  //       faqs: {
  //         title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
  //         items: [
  //           { id: "faq-cc-1", question: { ar: "هل يمكنني السحب النقدي من البطاقة الائتمانية؟", en: "Can I withdraw cash from the credit card?" }, answer: { ar: "نعم، يمكنك السحب النقدي من أجهزة الصراف الآلي بحد معين من إجمالي الحد الائتماني، وتُطبق رسوم على السحب النقدي.", en: "Yes, you can withdraw cash from ATMs up to a certain percentage of the total credit limit, subject to cash advance fees." } },
  //           { id: "faq-cc-2", question: { ar: "متى يتم إصدار كشف الحساب ومتى يجب السداد؟", en: "When is the statement issued and when must I pay?" }, answer: { ar: "يصدر كشف الحساب في تاريخ محدد من كل شهر، ويكون لديك فترة سماح تصل إلى عدة أسابيع لسداد المبلغ المستحق بدون فوائد (إذا تم السداد الكامل).", en: "The statement is issued on a specific date each month, and you have a grace period of up to several weeks to pay the due amount without interest (if paid in full)." } },
  //           { id: "faq-cc-3", question: { ar: "ماذا يحدث إذا تأخرت في سداد المستحقات؟", en: "What happens if I delay paying the dues?" }, answer: { ar: "في حال التأخر عن سداد الحد الأدنى، قد تُفرض رسوم تأخير وتتأثر درجة تقييمك الائتماني سلباً.", en: "If you delay paying the minimum amount, late fees may be imposed, and your credit score will be negatively affected." } },
  //           { id: "faq-cc-4", question: { ar: "كيف أبلغ عن فقدان بطاقتي الائتمانية؟", en: "How do I report a lost credit card?" }, answer: { ar: "يجب عليك إيقافها فوراً عبر تطبيق الموبايل البنكي أو الاتصال بمركز خدمة العملاء لمنع أي عمليات غير مصرح بها.", en: "You must block it immediately via the mobile banking app or call the customer service center to prevent unauthorized transactions." } },
  //         ],
  //       },
  //       details: {
  //             title: {
  //                   ar: "ما الذي تقدمه لك بطاقة الائتمان؟",
  //                   en: "What Does the Credit Card Offer?"
  //             },
  //             subtitle: {
  //                   ar: "تمنحك بطاقة الائتمان وسيلة دفع مرنة تساعدك على تنفيذ مشترياتك محليًا ودوليًا، مع إمكانية إدارة المدفوعات ومتابعة العمليات وفق حدود وسياسات البنك المعتمدة.",
  //                   en: "The credit card gives you a flexible payment method for local and international purchases, with the ability to manage payments and track transactions according to the bank’s approved limits and policies."
  //             },
  //             features: [
  //                   {
  //                         id: "feature-1",
  //                         text: {
  //                               ar: "استخدام البطاقة للمشتريات عبر نقاط البيع والمتاجر الإلكترونية عند توفر الخدمة.",
  //                               en: "Use the card for purchases at point-of-sale terminals and online stores when supported."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-2",
  //                         text: {
  //                               ar: "مرونة في إدارة المدفوعات بما يتناسب مع سياسة السداد والحد الائتماني المعتمد.",
  //                               en: "Flexible payment management according to the approved repayment policy and credit limit."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-3",
  //                         text: {
  //                               ar: "متابعة العمليات وكشف البطاقة عبر القنوات المتاحة لدى البنك.",
  //                               en: "Track card transactions and statements through the bank’s available channels."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-4",
  //                         text: {
  //                               ar: "خيار مناسب للعملاء الذين يحتاجون قوة شرائية إضافية مع ضبط الاستخدام ضمن حدود واضحة.",
  //                               en: "A suitable option for clients who need additional purchasing power while keeping usage within clear limits."
  //                         }
  //                   }
  //             ]
  //       },
  //       benefits: {
  //             title: {
  //                   ar: "قوة شرائية منظمة وتجربة دفع أوسع",
  //                   en: "Organized Purchasing Power and Wider Payment Experience"
  //             },
  //             subtitle: {
  //                   ar: "تساعدك البطاقة على تغطية احتياجات مختلفة دون الاعتماد الدائم على السيولة المباشرة، مع سجل عمليات واضح يسهّل المتابعة والمراجعة.",
  //                   en: "The card helps cover different needs without relying only on immediate cash, while providing a clear transaction record for easier review and control."
  //             },
  //             items: [
  //                   {
  //                         id: "benefit-1",
  //                         text: {
  //                               ar: "إدارة المشتريات الكبيرة أو المتكررة بطريقة أكثر مرونة.",
  //                               en: "Manage larger or recurring purchases with greater flexibility."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-2",
  //                         text: {
  //                               ar: "تقليل الحاجة لحمل النقد أثناء التسوق أو السفر.",
  //                               en: "Reduce the need to carry cash while shopping or traveling."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-3",
  //                         text: {
  //                               ar: "إمكانية مراجعة المدفوعات من خلال سجل عمليات واضح.",
  //                               en: "Review payments through a clear transaction history."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-4",
  //                         text: {
  //                               ar: "دعم التخطيط المالي عبر حدود استخدام وسياسات سداد محددة.",
  //                               en: "Support financial planning through defined usage limits and repayment policies."
  //                         }
  //                   }
  //             ]
  //       },
  //       howToGet: {
  //             title: {
  //                   ar: "متطلبات مبنية على الأهلية الائتمانية",
  //                   en: "Requirements Based on Credit Eligibility"
  //             },
  //             subtitle: {
  //                   ar: "قد يتطلب إصدار البطاقة الائتمانية مراجعة أهلية العميل، الدخل أو الضمانات، وسجل التعاملات المصرفية حسب سياسة البنك المعتمدة.",
  //                   en: "Issuing a credit card may require reviewing customer eligibility, income or guarantees, and banking history according to the bank’s approved policy."
  //             },
  //             requirements: [
  //                   {
  //                         id: "req-1",
  //                         text: {
  //                               ar: "هوية سارية المفعول وبيانات تواصل محدثة.",
  //                               en: "A valid ID and updated contact details."
  //                         }
  //                   },
  //                   {
  //                         id: "req-2",
  //                         text: {
  //                               ar: "حساب مصرفي مؤهل لدى البنك أو فتح حساب عند الحاجة.",
  //                               en: "An eligible bank account with the bank or opening one when required."
  //                         }
  //                   },
  //                   {
  //                         id: "req-3",
  //                         text: {
  //                               ar: "مستندات دخل أو ضمانات أو متطلبات أهلية حسب فئة العميل.",
  //                               en: "Income documents, guarantees, or eligibility requirements based on the customer category."
  //                         }
  //                   }
  //             ],
  //             channels: [
  //                   {
  //                         id: "ch-1",
  //                         text: {
  //                               ar: "زيارة الفرع لتقديم الطلب ومراجعة شروط الإصدار.",
  //                               en: "Visit a branch to submit the request and review issuance conditions."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-2",
  //                         text: {
  //                               ar: "التواصل مع خدمة العملاء لمعرفة المتطلبات المحدثة.",
  //                               en: "Contact customer service for updated requirements."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-3",
  //                         text: {
  //                               ar: "متابعة الطلب عبر القنوات المتاحة عند دعم الخدمة رقميًا.",
  //                               en: "Follow up on the request through available channels when digitally supported."
  //                         }
  //                   }
  //             ]
  //       },
  //       subscribe: {
  //             title: {
  //                   ar: "من التقديم إلى تفعيل البطاقة",
  //                   en: "From Application to Card Activation"
  //             },
  //             subtitle: {
  //                   ar: "تبدأ الخدمة بتقديم الطلب، ثم مراجعة الأهلية والحد المناسب، وبعد الموافقة يتم إصدار البطاقة وتفعيلها وفق إجراءات البنك.",
  //                   en: "The service starts with submitting the application, reviewing eligibility and the suitable limit, then issuing and activating the card after approval."
  //             },
  //             steps: [
  //                   {
  //                         id: "step-1",
  //                         title: {
  //                               ar: "تقديم الطلب",
  //                               en: "Submit Application"
  //                         },
  //                         description: {
  //                               ar: "قدّم بياناتك الأساسية والمستندات المطلوبة عبر الفرع أو القناة المتاحة.",
  //                               en: "Submit your basic details and required documents through the branch or available channel."
  //                         }
  //                   },
  //                   {
  //                         id: "step-2",
  //                         title: {
  //                               ar: "مراجعة الأهلية",
  //                               en: "Eligibility Review"
  //                         },
  //                         description: {
  //                               ar: "يقوم البنك بمراجعة الطلب وتحديد إمكانية الإصدار والحد المناسب.",
  //                               en: "The bank reviews the request and determines issuance eligibility and the suitable limit."
  //                         }
  //                   },
  //                   {
  //                         id: "step-3",
  //                         title: {
  //                               ar: "الإصدار والتفعيل",
  //                               en: "Issue and Activate"
  //                         },
  //                         description: {
  //                               ar: "بعد الموافقة، يتم إصدار البطاقة وتفعيلها ثم تسليم بيانات الاستخدام الآمن.",
  //                               en: "After approval, the card is issued and activated, then safe usage instructions are provided."
  //                         }
  //                   }
  //             ]
  //       },
  //       nextStep: {
  //             title: {
  //                   ar: "هل تحتاج مرونة دفع أكبر؟",
  //                   en: "Need More Payment Flexibility?"
  //             },
  //             description: {
  //                   ar: "تواصل مع البنك لمعرفة أهلية بطاقة الائتمان والحدود والشروط المعتمدة حاليًا.",
  //                   en: "Contact the bank to learn about credit card eligibility, limits, and current approved conditions."
  //             }
  //       },
  //       relatedServicesKeys: [
  //             "debitCard",
  //             "prepaidCard",
  //             "virtualCard"
  //       ]
  // },
  // {
  //       slug: "debit-card",
  //       section: "personal",
  //       title: {
  //             ar: "بطاقة الخصم المباشر",
  //             en: "Debit Card"
  //       },
  //       subtitle: {
  //             ar: "ادفع واسحب مباشرة من رصيد حسابك بطريقة عملية وآمنة",
  //             en: "Pay and withdraw directly from your account balance in a practical and secure way"
  //       },
  //       heroImage: "/images/cards/shopping-prepaid.webp",
  //       breadcrumbs: [
  //             {
  //                   labelKey: "nav.personalBanking",
  //                   href: "/personal-banking"
  //             },
  //             {
  //                   labelKey: "nav.debitCard",
  //                   label: {
  //                         ar: "بطاقة الخصم المباشر",
  //                         en: "Debit Card"
  //                   }
  //             }
  //       ],
  //       tagline: {
  //             ar: "البطاقات البنكية",
  //             en: "Bank Cards"
  //       },
  //       primaryCta: {
  //             label: {
  //                   ar: "اطلب البطاقة الآن",
  //                   en: "Request This Card"
  //             },
  //             href: "/contact"
  //       },
  //       seoDescription: {
  //         ar: "بطاقة الخصم المباشر (الصراف الآلي) من بنك بن دول. وصول فوري لأموالك على مدار الساعة، تسوق آمن في المتاجر وعبر الإنترنت، وسهولة في السحب النقدي محلياً وعالمياً.",
  //         en: "Debit Card from Bindowal Bank. Instant access to your funds 24/7, secure shopping in-store and online, and easy cash withdrawals locally and globally.",
  //       },
  //       overview: {
  //         title: { ar: "نبذة تعريفية", en: "Overview" },
  //         description: {
  //           ar: "بطاقة الخصم المباشر من بنك بن دول هي مفتاحك للوصول المباشر إلى حسابك البنكي. تتيح لك إجراء المشتريات والسحب النقدي بكل سهولة، حيث يتم خصم قيمة العمليات فوراً من رصيدك المتاح.",
  //           en: "The Debit Card from Bindowal Bank is your key to direct access to your bank account. It allows you to make purchases and cash withdrawals easily, with transaction amounts deducted instantly from your available balance.",
  //         },
  //       },
  //       why: {
  //         title: { ar: "لماذا بطاقة الخصم المباشر؟", en: "Why the Debit Card?" },
  //         description: {
  //           ar: "لأنها توفر لك بديلاً آمناً وعملياً لحمل النقد، وتمنحك تحكماً كاملاً في نفقاتك اليومية بما يتناسب مع رصيدك الفعلي.",
  //           en: "Because it provides a safe and practical alternative to carrying cash, giving you full control over your daily expenses in line with your actual balance.",
  //         },
  //         items: [
  //           { id: "why-dc-1", text: { ar: "لا توجد فوائد أو ديون متراكمة، أنت تنفق فقط ما تملكه في حسابك.", en: "No interest or accumulated debt; you only spend what you have in your account." } },
  //           { id: "why-dc-2", text: { ar: "مقبولة على نطاق واسع في ملايين أجهزة نقاط البيع والصرافات الآلية حول العالم.", en: "Widely accepted at millions of POS devices and ATMs worldwide." } },
  //           { id: "why-dc-3", text: { ar: "إصدار مجاني للبطاقة الأولى عند فتح حسابك الجاري أو حساب التوفير.", en: "Free issuance of the first card upon opening your current or savings account." } },
  //         ],
  //       },
  //       featureCards: {
  //         title: { ar: "مميزات البطاقة", en: "Card Features" },
  //         items: [
  //           { id: "fc-dc-1", title: { ar: "سحب نقدي مرن", en: "Flexible Cash Withdrawal" }, description: { ar: "سهولة السحب النقدي والاستعلام عن الرصيد من أي صراف آلي محلياً أو دولياً.", en: "Easy cash withdrawal and balance inquiry from any local or international ATM." } },
  //           { id: "fc-dc-2", title: { ar: "تسوق إلكتروني", en: "Online Shopping" }, description: { ar: "أمان تام عند الشراء عبر الإنترنت بفضل خدمة التحقق الثلاثي (3D Secure).", en: "Complete security when shopping online thanks to 3D Secure verification." } },
  //           { id: "fc-dc-3", title: { ar: "دفع بدون تلامس", en: "Contactless Payment" }, description: { ar: "تقنية مدمجة تتيح الدفع السريع للمشتريات ذات المبالغ الصغيرة بلمسة واحدة.", en: "Built-in technology enabling fast payment for small purchases with a single tap." } },
  //           { id: "fc-dc-4", title: { ar: "تنبيهات فورية", en: "Instant Alerts" }, description: { ar: "رسائل نصية قصيرة (SMS) تصلك فور إتمام أي عملية مالية باستخدام البطاقة.", en: "SMS messages reach you immediately upon completing any financial transaction with the card." } },
  //         ],
  //       },
  //       audience: {
  //         title: { ar: "العملاء المستهدفون", en: "Target Audience" },
  //         items: [
  //           { id: "aud-dc-1", text: { ar: "جميع عملاء البنك أصحاب حسابات مصرفية وحسابات التوفير.", en: "All bank customers with current and savings accounts." } },
  //           { id: "aud-dc-2", text: { ar: "الأفراد الراغبون في إدارة نفقاتهم اليومية وتجنب تراكم الديون.", en: "Individuals wishing to manage their daily expenses and avoid debt accumulation." } },
  //           { id: "aud-dc-3", text: { ar: "المسافرون والطلاب المبتعثون الذين يحتاجون للوصول إلى أموالهم من الخارج.", en: "Travelers and students abroad who need access to their funds overseas." } },
  //         ],
  //       },
  //       requirementsSection: {
  //         title: { ar: "متطلبات إصدار البطاقة", en: "Card Issuance Requirements" },
  //         items: [
  //           { id: "req-dc-1", text: { ar: "امتلاك حساب جاري أو حساب توفير نشط في بنك بن دول.", en: "Possess an active current or savings account with Bindowal Bank." } },
  //           { id: "req-dc-2", text: { ar: "تحديث بيانات الهوية الوطنية أو جواز السفر في سجلات البنك.", en: "Updated national ID or passport details in the bank's records." } },
  //           { id: "req-dc-3", text: { ar: "تعبئة وتوقيع نموذج طلب إصدار بطاقة الصراف الآلي.", en: "Fill out and sign the ATM card issuance request form." } },
  //         ],
  //       },
  //       stepsSection: {
  //         title: { ar: "خطوات الحصول على البطاقة", en: "Steps to Get the Card" },
  //         steps: [
  //           { id: "step-dc-1", title: { ar: "فتح حساب أو طلب بطاقة", en: "Open Account or Request Card" }, description: { ar: "عند فتح حساب جديد سيتم إصدارها لك، أو اطلبها لحسابك الحالي عبر الفرع أو التطبيق.", en: "It will be issued when opening a new account, or request it for your existing account via branch or app." } },
  //           { id: "step-dc-2", title: { ar: "الاستلام", en: "Collection" }, description: { ar: "استلم بطاقتك مطبوعة وجاهزة من الفرع خلال وقت قصير.", en: "Collect your printed and ready card from the branch within a short time." } },
  //           { id: "step-dc-3", title: { ar: "التفعيل", en: "Activation" }, description: { ar: "قم بتفعيل البطاقة وإنشاء الرقم السري الخاص بك عبر أجهزة الصراف الآلي التابعة لنا.", en: "Activate the card and create your PIN via our ATMs." } },
  //         ],
  //       },
  //       ctaSection: {
  //         title: { ar: "أموالك دوماً في متناول يدك", en: "Your Funds Always Within Reach" },
  //         description: { ar: "احصل على بطاقة الخصم المباشر الخاصة بك اليوم وتمتع بتجربة مصرفية سلسة تواكب إيقاع حياتك.", en: "Get your debit card today and enjoy a seamless banking experience that keeps pace with your life." },
  //         primaryLabel: { ar: "اطلب بطاقتك", en: "Request Your Card" },
  //         primaryHref: "/contact",
  //         secondaryLabel: { ar: "استعرض الخصومات", en: "View Discounts" },
  //         secondaryHref: "/offers",
  //       },
  //       faqs: {
  //         title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
  //         items: [
  //           { id: "faq-dc-1", question: { ar: "ماذا أفعل إذا ابتلع الصراف الآلي بطاقتي؟", en: "What do I do if the ATM swallows my card?" }, answer: { ar: "قم بالاتصال فوراً بمركز خدمة العملاء للإبلاغ عن المشكلة، وسيتم إرشادك حول كيفية استعادتها أو إصدار بطاقة بديلة.", en: "Call customer service immediately to report the issue, and you will be guided on how to retrieve it or issue a replacement." } },
  //           { id: "faq-dc-2", question: { ar: "هل يمكنني استخدام البطاقة أثناء السفر للخارج؟", en: "Can I use the card while traveling abroad?" }, answer: { ar: "نعم، بطاقتك مقبولة عالمياً للسحب النقدي والمشتريات. يُنصح بإبلاغ البنك قبل السفر لتجنب إيقاف البطاقة كإجراء أمني.", en: "Yes, your card is accepted globally for withdrawals and purchases. It is advised to notify the bank before traveling to avoid blocking as a security measure." } },
  //           { id: "faq-dc-3", question: { ar: "هل هناك رسوم سنوية على بطاقة الخصم المباشر؟", en: "Are there annual fees on the debit card?" }, answer: { ar: "الإصدار الأول عادة يكون مجانياً، وقد تُطبق رسوم سنوية رمزية لتجديد البطاقة حسب فئة الحساب.", en: "The first issuance is usually free, and a nominal annual fee may apply for renewal depending on the account category." } },
  //           { id: "faq-dc-4", question: { ar: "كيف يمكنني تغيير الرقم السري لبطاقتي؟", en: "How can I change my card's PIN?" }, answer: { ar: "يمكنك تغيير الرقم السري بسهولة في أي وقت عبر أجهزة الصراف الآلي التابعة لبنك بن دول.", en: "You can easily change your PIN at any time through Bindowal Bank ATMs." } },
  //         ],
  //       },
  //       details: {
  //             title: {
  //                   ar: "ما الذي تقدمه بطاقة الخصم المباشر؟",
  //                   en: "What Does the Debit Card Offer?"
  //             },
  //             subtitle: {
  //                   ar: "ترتبط بطاقة الخصم المباشر بحسابك المصرفي لتمنحك وسيلة سهلة للدفع والسحب، مع خصم العمليات مباشرة من الرصيد المتاح حسب الضوابط المعتمدة.",
  //                   en: "The debit card is linked to your bank account, giving you an easy way to pay and withdraw, with transactions deducted directly from the available balance according to approved controls."
  //             },
  //             features: [
  //                   {
  //                         id: "feature-1",
  //                         text: {
  //                               ar: "الدفع عبر نقاط البيع والسحب من أجهزة الصراف الآلي عند توفر الشبكة المناسبة.",
  //                               en: "Pay through point-of-sale terminals and withdraw from ATMs when the suitable network is available."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-2",
  //                         text: {
  //                               ar: "خصم مباشر من رصيد الحساب دون الحاجة إلى حمل مبالغ نقدية كبيرة.",
  //                               en: "Direct deduction from your account balance without carrying large cash amounts."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-3",
  //                         text: {
  //                               ar: "متابعة عمليات البطاقة من خلال كشف الحساب أو القنوات الرقمية المتاحة.",
  //                               en: "Track card transactions through account statements or available digital channels."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-4",
  //                         text: {
  //                               ar: "مناسبة للاستخدام اليومي في المشتريات والسحوبات والاحتياجات المتكررة.",
  //                               en: "Suitable for daily purchases, withdrawals, and recurring needs."
  //                         }
  //                   }
  //             ]
  //       },
  //       benefits: {
  //             title: {
  //                   ar: "تحكم مباشر في المصروفات اليومية",
  //                   en: "Direct Control Over Daily Spending"
  //             },
  //             subtitle: {
  //                   ar: "تمنحك البطاقة سهولة الوصول إلى رصيدك مع ضبط الإنفاق ضمن المبلغ المتاح في الحساب، مما يجعلها خيارًا عمليًا للاستخدام المستمر.",
  //                   en: "The card gives you easy access to your balance while keeping spending within the available account amount, making it practical for continuous use."
  //             },
  //             items: [
  //                   {
  //                         id: "benefit-1",
  //                         text: {
  //                               ar: "تنفيذ المدفوعات اليومية بسرعة أكبر من التعامل النقدي التقليدي.",
  //                               en: "Complete daily payments faster than traditional cash handling."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-2",
  //                         text: {
  //                               ar: "تقليل الاعتماد على النقد أثناء التنقل والتسوق.",
  //                               en: "Reduce dependence on cash while moving around and shopping."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-3",
  //                         text: {
  //                               ar: "متابعة أسهل للمصروفات لأنها تظهر ضمن حركة الحساب.",
  //                               en: "Easier expense tracking because transactions appear within the account activity."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-4",
  //                         text: {
  //                               ar: "استخدام عملي للعملاء الذين يريدون بطاقة مرتبطة بالرصيد الفعلي.",
  //                               en: "A practical option for customers who want a card linked to actual available funds."
  //                         }
  //                   }
  //             ]
  //       },
  //       howToGet: {
  //             title: {
  //                   ar: "إصدار مرتبط بحسابك المصرفي",
  //                   en: "Issuance Linked to Your Bank Account"
  //             },
  //             subtitle: {
  //                   ar: "للحصول على بطاقة الخصم المباشر، يحتاج العميل عادة إلى حساب مؤهل وبيانات محدثة، مع توقيع طلب الإصدار والالتزام بشروط الاستخدام الآمن.",
  //                   en: "To obtain a debit card, the customer usually needs an eligible account and updated details, with the issuance request signed and safe usage terms accepted."
  //             },
  //             requirements: [
  //                   {
  //                         id: "req-1",
  //                         text: {
  //                               ar: "حساب جاري أو حساب مؤهل لدى البنك.",
  //                               en: "A current account or eligible account with the bank."
  //                         }
  //                   },
  //                   {
  //                         id: "req-2",
  //                         text: {
  //                               ar: "هوية سارية وبيانات تواصل محدثة.",
  //                               en: "A valid ID and updated contact details."
  //                         }
  //                   },
  //                   {
  //                         id: "req-3",
  //                         text: {
  //                               ar: "استكمال طلب إصدار البطاقة وقبول شروط الاستخدام.",
  //                               en: "Complete the card issuance request and accept usage terms."
  //                         }
  //                   }
  //             ],
  //             channels: [
  //                   {
  //                         id: "ch-1",
  //                         text: {
  //                               ar: "زيارة الفرع لتقديم طلب البطاقة أو استلامها عند الجاهزية.",
  //                               en: "Visit a branch to apply for the card or collect it when ready."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-2",
  //                         text: {
  //                               ar: "خدمة العملاء للاستفسار عن حالة البطاقة أو تعليمات الاستخدام.",
  //                               en: "Customer service for card status inquiries or usage instructions."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-3",
  //                         text: {
  //                               ar: "القنوات الرقمية لإدارة بعض إعدادات البطاقة عند توفرها.",
  //                               en: "Digital channels to manage selected card settings when available."
  //                         }
  //                   }
  //             ]
  //       },
  //       subscribe: {
  //             title: {
  //                   ar: "إصدار بسيط واستخدام يومي",
  //                   en: "Simple Issuance for Daily Use"
  //             },
  //             subtitle: {
  //                   ar: "تبدأ العملية بتأكيد الحساب المؤهل، ثم تقديم طلب البطاقة، وبعد الإصدار يتم التفعيل وتسليم تعليمات الاستخدام الآمن.",
  //                   en: "The process starts by confirming the eligible account, submitting the card request, then activating the card and receiving safe usage instructions after issuance."
  //             },
  //             steps: [
  //                   {
  //                         id: "step-1",
  //                         title: {
  //                               ar: "تأكيد الحساب",
  //                               en: "Confirm Account"
  //                         },
  //                         description: {
  //                               ar: "تأكد من وجود حساب مؤهل وبيانات عميل محدثة لدى البنك.",
  //                               en: "Make sure you have an eligible account and updated customer information with the bank."
  //                         }
  //                   },
  //                   {
  //                         id: "step-2",
  //                         title: {
  //                               ar: "طلب الإصدار",
  //                               en: "Request Issuance"
  //                         },
  //                         description: {
  //                               ar: "قدّم طلب إصدار البطاقة عبر الفرع أو القناة المتاحة.",
  //                               en: "Submit the card issuance request through the branch or available channel."
  //                         }
  //                   },
  //                   {
  //                         id: "step-3",
  //                         title: {
  //                               ar: "التفعيل والاستخدام",
  //                               en: "Activate and Use"
  //                         },
  //                         description: {
  //                               ar: "فعّل البطاقة واتبع تعليمات الاستخدام والحماية قبل البدء بالعمليات.",
  //                               en: "Activate the card and follow usage and security instructions before transactions begin."
  //                         }
  //                   }
  //             ]
  //       },
  //       nextStep: {
  //             title: {
  //                   ar: "اجعل مدفوعاتك اليومية أسهل",
  //                   en: "Make Daily Payments Easier"
  //             },
  //             description: {
  //                   ar: "تواصل مع البنك لمعرفة متطلبات إصدار بطاقة الخصم المباشر وربطها بحسابك.",
  //                   en: "Contact the bank to learn debit card issuance requirements and link it to your account."
  //             }
  //       },
  //       relatedServicesKeys: [
  //             "creditCard",
  //             "prepaidCard",
  //             "virtualCard"
  //       ]
  // },
  // {
  //       slug: "prepaid-card",
  //       section: "personal",
  //       title: {
  //             ar: "بطاقة مسبقة الدفع",
  //             en: "Prepaid Card"
  //       },
  //       subtitle: {
  //             ar: "بطاقة مرنة للشراء والتحكم بالمصروفات من خلال رصيد يتم شحنه مسبقًا",
  //             en: "A flexible card for purchases and spending control through a preloaded balance"
  //       },
  //       heroImage: "/images/cards/front.webp",
  //       breadcrumbs: [
  //             {
  //                   labelKey: "nav.personalBanking",
  //                   href: "/personal-banking"
  //             },
  //             {
  //                   labelKey: "nav.prepaidCard",
  //                   label: {
  //                         ar: "بطاقة مسبقة الدفع",
  //                         en: "Prepaid Card"
  //                   }
  //             }
  //       ],
  //       tagline: {
  //             ar: "البطاقات البنكية",
  //             en: "Bank Cards"
  //       },
  //       primaryCta: {
  //             label: {
  //                   ar: "اطلب البطاقة الآن",
  //                   en: "Request This Card"
  //             },
  //             href: "/contact"
  //       },
  //       seoDescription: {
  //         ar: "البطاقة مسبقة الدفع من بنك بن دول. تسوق براحة بال وتحكم كامل في ميزانيتك، مثالية للشراء عبر الإنترنت وإدارة مصروفات السفر بأمان دون التأثير على حسابك الأساسي.",
  //         en: "Prepaid Card from Bindowal Bank. Shop with peace of mind and full budget control, perfect for online purchases and managing travel expenses securely without affecting your main account.",
  //       },
  //       overview: {
  //         title: { ar: "نبذة تعريفية", en: "Overview" },
  //         description: {
  //           ar: "البطاقة مسبقة الدفع هي وسيلة دفع آمنة وعملية تتيح لك شحنها بالمبلغ الذي تريده فقط. تعتبر الخيار الأمثل للتحكم في الميزانية، التسوق الإلكتروني، أو منحها للأبناء لإدارة مصروفاتهم.",
  //           en: "The prepaid card is a secure and practical payment method allowing you to load only the amount you want. It is the perfect choice for budget control, online shopping, or giving to children to manage their allowances.",
  //         },
  //       },
  //       why: {
  //         title: { ar: "لماذا البطاقة مسبقة الدفع؟", en: "Why the Prepaid Card?" },
  //         description: {
  //           ar: "لأنها تفصل بين مشترياتك ورصيد حسابك الأساسي، مما يوفر لك طبقة إضافية من الأمان ويساعدك على الالتزام بميزانية محددة مسبقاً.",
  //           en: "Because it separates your purchases from your main account balance, providing an extra layer of security and helping you stick to a predefined budget.",
  //         },
  //         items: [
  //           { id: "why-pc-1", text: { ar: "تحكم تام في المصروفات، حيث لا يمكنك إنفاق أكثر من المبلغ المشحون.", en: "Total control over expenses, as you cannot spend more than the loaded amount." } },
  //           { id: "why-pc-2", text: { ar: "حماية مطلقة عند الشراء من المواقع الإلكترونية دون تعريض حسابك البنكي للخطر.", en: "Absolute protection when shopping online without exposing your bank account to risk." } },
  //           { id: "why-pc-3", text: { ar: "سهولة الإصدار بدون الحاجة إلى تحويل راتب أو مراجعة للتاريخ الائتماني.", en: "Easy issuance without the need for a salary transfer or credit history review." } },
  //         ],
  //       },
  //       featureCards: {
  //         title: { ar: "مميزات البطاقة", en: "Card Features" },
  //         items: [
  //           { id: "fc-pc-1", title: { ar: "شحن فوري وسهل", en: "Instant & Easy Reload" }, description: { ar: "إعادة شحن رصيد البطاقة فوراً عبر تطبيق الموبايل البنكي أو الإنترنت البنكي.", en: "Instantly reload the card balance via the mobile banking app or internet banking." } },
  //           { id: "fc-pc-2", title: { ar: "تسوق عالمي", en: "Global Shopping" }, description: { ar: "مقبولة عالمياً ومحلياً لدى جميع المتاجر التي تحمل شعار فيزا أو ماستركارد.", en: "Accepted globally and locally at all stores bearing the Visa or Mastercard logo." } },
  //           { id: "fc-pc-3", title: { ar: "الحد من المخاطر", en: "Risk Mitigation" }, description: { ar: "في حال فقدانها، يقتصر الخطر على المبلغ المشحون فقط مع إمكانية إيقافها بضغطة زر.", en: "In case of loss, the risk is limited to the loaded amount, with the ability to block it instantly." } },
  //           { id: "fc-pc-4", title: { ar: "هدية مثالية", en: "Perfect Gift" }, description: { ar: "بديل رائع وعصري للهدايا النقدية للأبناء أو الأصدقاء في المناسبات.", en: "A great and modern alternative to cash gifts for children or friends on special occasions." } },
  //         ],
  //       },
  //       audience: {
  //         title: { ar: "العملاء المستهدفون", en: "Target Audience" },
  //         items: [
  //           { id: "aud-pc-1", text: { ar: "المتسوقون بكثرة عبر الإنترنت الباحثون عن الأمان.", en: "Frequent online shoppers looking for security." } },
  //           { id: "aud-pc-2", text: { ar: "الآباء الراغبون في تخصيص مصروف محدد ومراقب لأبنائهم.", en: "Parents wanting to allocate a specific, monitored allowance for their children." } },
  //           { id: "aud-pc-3", text: { ar: "المسافرون الذين يفضلون تخصيص ميزانية محددة لرحلاتهم.", en: "Travelers who prefer to allocate a specific budget for their trips." } },
  //         ],
  //       },
  //       requirementsSection: {
  //         title: { ar: "متطلبات إصدار البطاقة", en: "Card Issuance Requirements" },
  //         items: [
  //           { id: "req-pc-1", text: { ar: "حساب بنكي ساري (جاري أو توفير) لدى بنك بن دول لربط وتغذية البطاقة.", en: "A valid bank account (current or savings) with Bindowal Bank to link and fund the card." } },
  //           { id: "req-pc-2", text: { ar: "توفير نسخة من الهوية الوطنية للمواطنين أو جواز السفر وإقامة سارية للمقيمين.", en: "Provide a copy of the national ID for citizens or a passport and valid residency for expats." } },
  //           { id: "req-pc-3", text: { ar: "دفع رسوم إصدار البطاقة الرمزية المحددة في التعرفة البنكية.", en: "Pay the nominal card issuance fee specified in the banking tariff." } },
  //         ],
  //       },
  //       stepsSection: {
  //         title: { ar: "خطوات الحصول على البطاقة", en: "Steps to Get the Card" },
  //         steps: [
  //           { id: "step-pc-1", title: { ar: "طلب الإصدار", en: "Request Issuance" }, description: { ar: "قدم طلب الحصول على البطاقة مسبقة الدفع عبر الفرع أو الخدمات البنكية الإلكترونية.", en: "Submit a request for a prepaid card via the branch or electronic banking services." } },
  //           { id: "step-pc-2", title: { ar: "دفع الرسوم والشحن", en: "Pay Fees & Load" }, description: { ar: "قم بدفع رسوم الإصدار واشحن البطاقة بالمبلغ المبدئي الذي ترغب به.", en: "Pay the issuance fee and load the card with the initial amount you desire." } },
  //           { id: "step-pc-3", title: { ar: "الاستلام والاستخدام", en: "Receive & Use" }, description: { ar: "استلم البطاقة، قم بتفعيلها، وابدأ بالتسوق والدفع محلياً وعالمياً بأمان تام.", en: "Receive the card, activate it, and start shopping and paying locally and globally with complete security." } },
  //         ],
  //       },
  //       ctaSection: {
  //         title: { ar: "تسوق بذكاء وأمان", en: "Shop Smartly and Securely" },
  //         description: { ar: "احصل على بطاقتك مسبقة الدفع الآن وتحكم في ميزانيتك بكل سهولة واطمئنان.", en: "Get your prepaid card now and manage your budget with ease and peace of mind." },
  //         primaryLabel: { ar: "اطلب بطاقتك", en: "Request Your Card" },
  //         primaryHref: "/contact",
  //         secondaryLabel: { ar: "شروط الاستخدام", en: "Terms of Use" },
  //         secondaryHref: "#terms",
  //       },
  //       faqs: {
  //         title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
  //         items: [
  //           { id: "faq-pc-1", question: { ar: "هل يمكنني سحب النقد من البطاقة مسبقة الدفع؟", en: "Can I withdraw cash from the prepaid card?" }, answer: { ar: "نعم، يمكنك السحب النقدي من أجهزة الصراف الآلي من الرصيد المتوفر، ولكن قد تُطبق رسوم سحب على بعض البطاقات مسبقة الدفع.", en: "Yes, you can withdraw cash from ATMs from the available balance, though withdrawal fees may apply to some prepaid cards." } },
  //           { id: "faq-pc-2", question: { ar: "ما هو الحد الأقصى للمبلغ الذي يمكن شحنه في البطاقة؟", en: "What is the maximum amount that can be loaded onto the card?" }, answer: { ar: "يختلف الحد الأقصى باختلاف فئة البطاقة والسياسات الداخلية، ويمكنك الاستعلام عن الحد الخاص ببطاقتك عبر التطبيق البنكي.", en: "The maximum limit varies by card category and internal policies; you can check your card's specific limit via the banking app." } },
  //           { id: "faq-pc-3", question: { ar: "هل يمكن استرجاع المبلغ المتبقي في البطاقة إلى الحساب الجاري؟", en: "Can the remaining balance on the card be refunded to the current account?" }, answer: { ar: "نعم، يمكنك تحويل الرصيد المتبقي أو استرجاعه إلى حسابك البنكي الأساسي في أي وقت.", en: "Yes, you can transfer or refund the remaining balance back to your main bank account at any time." } },
  //           { id: "faq-pc-4", question: { ar: "هل البطاقة مسبقة الدفع تحتاج إلى كشف حساب شهري للمطالبة بالسداد؟", en: "Does the prepaid card require a monthly statement for payment demands?" }, answer: { ar: "لا، البطاقة تعتمد كلياً على رصيدك المشحون، ولا يوجد بها مديونيات أو مطالبات سداد لاحقة.", en: "No, the card relies entirely on your loaded balance, and there are no debts or subsequent payment demands." } },
  //         ],
  //       },
  //       details: {
  //             title: {
  //                   ar: "ما الذي تقدمه البطاقة مسبقة الدفع؟",
  //                   en: "What Does the Prepaid Card Offer?"
  //             },
  //             subtitle: {
  //                   ar: "تتيح لك البطاقة مسبقة الدفع استخدام رصيد محدد مسبقًا للدفع والشراء، مما يجعلها مناسبة للتسوق الإلكتروني، السفر، الهدايا، أو إدارة مصروفات محددة.",
  //                   en: "The prepaid card lets you use a predefined loaded balance for payments and purchases, making it suitable for online shopping, travel, gifts, or managing specific expenses."
  //             },
  //             features: [
  //                   {
  //                         id: "feature-1",
  //                         text: {
  //                               ar: "شحن البطاقة بمبلغ محدد واستخدامه ضمن الرصيد المتاح.",
  //                               en: "Load the card with a defined amount and use it within the available balance."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-2",
  //                         text: {
  //                               ar: "خيار مناسب للتسوق الإلكتروني أو المصروفات المحددة دون ربط مباشر بكل رصيد الحساب.",
  //                               en: "A suitable option for online shopping or defined expenses without direct exposure to the full account balance."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-3",
  //                         text: {
  //                               ar: "إمكانية متابعة الرصيد والعمليات حسب القنوات المتاحة لدى البنك.",
  //                               en: "Ability to monitor balance and transactions through the bank’s available channels."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-4",
  //                         text: {
  //                               ar: "تدعم ضبط الإنفاق لأنها تعمل ضمن المبلغ المشحون فقط.",
  //                               en: "Supports spending control because it operates only within the loaded amount."
  //                         }
  //                   }
  //             ]
  //       },
  //       benefits: {
  //             title: {
  //                   ar: "تحكم أعلى في الإنفاق والشراء الرقمي",
  //                   en: "Greater Control Over Spending and Digital Purchases"
  //             },
  //             subtitle: {
  //                   ar: "تمنحك البطاقة مساحة دفع مستقلة نسبيًا تساعد على تقليل المخاطر وتنظيم المصروفات، خصوصًا عند الشراء من الإنترنت أو تخصيص ميزانية محددة.",
  //                   en: "The card provides a relatively separate payment space that helps reduce risk and organize expenses, especially for online purchases or allocated budgets."
  //             },
  //             items: [
  //                   {
  //                         id: "benefit-1",
  //                         text: {
  //                               ar: "تحديد مبلغ الإنفاق مسبقًا بما يناسب الميزانية.",
  //                               en: "Set the spending amount in advance according to your budget."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-2",
  //                         text: {
  //                               ar: "استخدام عملي للتسوق الرقمي أو الاشتراكات أو السفر.",
  //                               en: "Practical use for digital shopping, subscriptions, or travel."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-3",
  //                         text: {
  //                               ar: "تقليل التعرض المالي لأنها لا تتجاوز الرصيد المشحون.",
  //                               en: "Reduce financial exposure because usage is limited to the loaded balance."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-4",
  //                         text: {
  //                               ar: "مناسبة لمن يريد بطاقة دفع دون الحاجة إلى حد ائتماني.",
  //                               en: "Suitable for customers who want a payment card without a credit limit."
  //                         }
  //                   }
  //             ]
  //       },
  //       howToGet: {
  //             title: {
  //                   ar: "بطاقة سهلة الإصدار والاستخدام",
  //                   en: "Easy to Issue and Use"
  //             },
  //             subtitle: {
  //                   ar: "قد تتطلب البطاقة مسبقة الدفع بيانات تعريفية أساسية وطلب إصدار، ثم شحن البطاقة والالتزام بشروط الاستخدام والحدود المعتمدة.",
  //                   en: "The prepaid card may require basic identification details and an issuance request, then loading the card and following approved usage terms and limits."
  //             },
  //             requirements: [
  //                   {
  //                         id: "req-1",
  //                         text: {
  //                               ar: "هوية سارية أو وثائق تعريفية مطلوبة حسب فئة العميل.",
  //                               en: "A valid ID or required identification documents based on the customer category."
  //                         }
  //                   },
  //                   {
  //                         id: "req-2",
  //                         text: {
  //                               ar: "بيانات تواصل محدثة لاستلام الإشعارات أو تعليمات الخدمة.",
  //                               en: "Updated contact details to receive notifications or service instructions."
  //                         }
  //                   },
  //                   {
  //                         id: "req-3",
  //                         text: {
  //                               ar: "استكمال طلب إصدار البطاقة وشحنها وفق السياسة المعتمدة.",
  //                               en: "Complete the card issuance request and load it according to the approved policy."
  //                         }
  //                   }
  //             ],
  //             channels: [
  //                   {
  //                         id: "ch-1",
  //                         text: {
  //                               ar: "الفرع لتقديم الطلب واستلام البطاقة عند الجاهزية.",
  //                               en: "Branch visit to submit the request and receive the card when ready."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-2",
  //                         text: {
  //                               ar: "خدمة العملاء لمعرفة حدود الشحن والاستخدام.",
  //                               en: "Customer service to learn loading and usage limits."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-3",
  //                         text: {
  //                               ar: "القنوات الرقمية لمتابعة الرصيد أو العمليات عند توفر الخدمة.",
  //                               en: "Digital channels to monitor balance or transactions when available."
  //                         }
  //                   }
  //             ]
  //       },
  //       subscribe: {
  //             title: {
  //                   ar: "اشحن واستخدم ضمن ميزانيتك",
  //                   en: "Load and Use Within Your Budget"
  //             },
  //             subtitle: {
  //                   ar: "تبدأ الخدمة بطلب إصدار البطاقة، ثم شحن الرصيد المناسب، وبعد التفعيل يمكنك استخدامها في المدفوعات المؤهلة حسب القنوات المتاحة.",
  //                   en: "The service starts by requesting card issuance, loading the suitable balance, then using it for eligible payments after activation through available channels."
  //             },
  //             steps: [
  //                   {
  //                         id: "step-1",
  //                         title: {
  //                               ar: "طلب البطاقة",
  //                               en: "Request the Card"
  //                         },
  //                         description: {
  //                               ar: "قدّم طلب الإصدار مع البيانات الأساسية والوثائق المطلوبة.",
  //                               en: "Submit the issuance request with basic details and required documents."
  //                         }
  //                   },
  //                   {
  //                         id: "step-2",
  //                         title: {
  //                               ar: "شحن الرصيد",
  //                               en: "Load Balance"
  //                         },
  //                         description: {
  //                               ar: "اشحن البطاقة بالمبلغ المناسب حسب الحدود والسياسة المعتمدة.",
  //                               en: "Load the card with the suitable amount according to approved limits and policy."
  //                         }
  //                   },
  //                   {
  //                         id: "step-3",
  //                         title: {
  //                               ar: "التفعيل والاستخدام",
  //                               en: "Activate and Use"
  //                         },
  //                         description: {
  //                               ar: "فعّل البطاقة وابدأ باستخدامها ضمن الرصيد المتاح.",
  //                               en: "Activate the card and start using it within the available balance."
  //                         }
  //                   }
  //             ]
  //       },
  //       nextStep: {
  //             title: {
  //                   ar: "تحكم بمصروفاتك بمرونة أكبر",
  //                   en: "Control Your Spending with More Flexibility"
  //             },
  //             description: {
  //                   ar: "تواصل مع البنك لمعرفة شروط إصدار البطاقة مسبقة الدفع وحدود الشحن والاستخدام.",
  //                   en: "Contact the bank to learn prepaid card issuance terms, loading limits, and usage conditions."
  //             }
  //       },
  //       relatedServicesKeys: [
  //             "creditCard",
  //             "debitCard",
  //             "virtualCard"
  //       ]
  // },
  // {
  //       slug: "virtual-card",
  //       section: "personal",
  //       title: {
  //             ar: "بطاقة الدفع الافتراضية",
  //             en: "Virtual Card"
  //       },
  //       subtitle: {
  //             ar: "بطاقة رقمية للتسوق الإلكتروني والمدفوعات عبر الإنترنت بإدارة أسهل من القنوات الرقمية",
  //             en: "A digital card for online shopping and internet payments with easier management through digital channels"
  //       },
  //       heroImage: "/images/cards/gold-credit.webp",
  //       breadcrumbs: [
  //             {
  //                   labelKey: "nav.personalBanking",
  //                   href: "/personal-banking"
  //             },
  //             {
  //                   labelKey: "nav.virtualCard",
  //                   label: {
  //                         ar: "بطاقة الدفع الافتراضية",
  //                         en: "Virtual Card"
  //                   }
  //             }
  //       ],
  //       tagline: {
  //             ar: "البطاقات البنكية",
  //             en: "Bank Cards"
  //       },
  //       primaryCta: {
  //             label: {
  //                   ar: "اطلب البطاقة الآن",
  //                   en: "Request This Card"
  //             },
  //             href: "/contact"
  //       },
  //       seoDescription: {
  //         ar: "بطاقة الدفع الافتراضية من بنك بن دول. حل رقمي ذكي وآمن للتسوق عبر الإنترنت، اصدرها فوراً عبر التطبيق وتحكم في مشترياتك بكل سهولة دون الحاجة لبطاقة بلاستيكية.",
  //         en: "Virtual Card from Bindowal Bank. A smart and secure digital solution for online shopping; issue it instantly via the app and manage your purchases easily without needing a physical card.",
  //       },
  //       overview: {
  //         title: { ar: "نبذة تعريفية", en: "Overview" },
  //         description: {
  //           ar: "البطاقة الافتراضية هي بطاقة رقمية بالكامل تُصدر فوراً عبر تطبيق الموبايل البنكي. صُممت خصيصاً لتوفير تجربة تسوق إلكتروني آمنة وسريعة، حيث تحصل على بيانات البطاقة (الرقم، تاريخ الانتهاء، ورمز التحقق) داخل التطبيق مباشرة.",
  //           en: "The Virtual Card is a fully digital card issued instantly through the mobile banking app. It is specifically designed to provide a safe and fast online shopping experience, where you get card details (number, expiry date, and CVV) directly within the app.",
  //         },
  //       },
  //       why: {
  //         title: { ar: "لماذا البطاقة الافتراضية؟", en: "Why the Virtual Card?" },
  //         description: {
  //           ar: "لأن المستقبل رقمي، نوفر لك وسيلة دفع مرنة تلغي الحاجة لانتظار إصدار أو توصيل البطاقات البلاستيكية، وتمنحك أقصى درجات الأمان.",
  //           en: "Because the future is digital, we provide a flexible payment method that eliminates the need to wait for physical card issuance or delivery, granting you the highest levels of security.",
  //         },
  //         items: [
  //           { id: "why-vc-1", text: { ar: "إصدار فوري واستخدام مباشر في نفس لحظة الطلب.", en: "Instant issuance and immediate use at the same moment of request." } },
  //           { id: "why-vc-2", text: { ar: "أمان فائق بفضل إمكانية تجميد البطاقة أو إلغائها فوراً من التطبيق.", en: "Superior security thanks to the ability to freeze or cancel the card instantly from the app." } },
  //           { id: "why-vc-3", text: { ar: "صديقة للبيئة وتلغي مخاطر فقدان أو سرقة البطاقة الفيزيائية.", en: "Eco-friendly and eliminates risks of physical card loss or theft." } },
  //         ],
  //       },
  //       featureCards: {
  //         title: { ar: "مميزات البطاقة الرقمية", en: "Digital Card Features" },
  //         items: [
  //           { id: "fc-vc-1", title: { ar: "تحكم كامل", en: "Full Control" }, description: { ar: "حدد سقفاً للمشتريات اليومية أو الشهرية لضمان عدم تجاوز ميزانيتك.", en: "Set daily or monthly purchase limits to ensure you stay within your budget." } },
  //           { id: "fc-vc-2", title: { ar: "تنبيهات المشتريات", en: "Purchase Alerts" }, description: { ar: "تصلك إشعارات فورية على هاتفك لكل عملية دفع تتم عبر البطاقة.", en: "Receive instant notifications on your phone for every payment made via the card." } },
  //           { id: "fc-vc-3", title: { ar: "سهولة التغذية", en: "Easy Funding" }, description: { ar: "اشحن رصيد بطاقتك الافتراضية من حسابك الجاري في ثوانٍ معدودة.", en: "Load your virtual card balance from your current account in just a few seconds." } },
  //           { id: "fc-vc-4", title: { ar: "مقبولة عالمياً", en: "Globally Accepted" }, description: { ar: "استخدمها في جميع مواقع التجارة الإلكترونية العالمية والتطبيقات.", en: "Use it on all global e-commerce websites and applications." } },
  //         ],
  //       },
  //       audience: {
  //         title: { ar: "الفئات المستهدفة", en: "Target Audience" },
  //         items: [
  //           { id: "aud-vc-1", text: { ar: "المتسوقون الدائمون عبر الإنترنت وتطبيقات التوصيل.", en: "Frequent online shoppers and delivery app users." } },
  //           { id: "aud-vc-2", text: { ar: "العملاء الراغبون في إصدار بطاقة دفع سريعة دون زيارة الفرع.", en: "Customers wanting to issue a payment card quickly without visiting a branch." } },
  //           { id: "aud-vc-3", text: { ar: "الراغبون في فصل مصروفات الإنترنت عن البطاقات الأساسية.", en: "Those wishing to separate online expenses from their main cards." } },
  //         ],
  //       },
  //       requirementsSection: {
  //         title: { ar: "متطلبات الإصدار", en: "Issuance Requirements" },
  //         items: [
  //           { id: "req-vc-1", text: { ar: "أن يكون لديك حساب نشط في بنك بن دول.", en: "Have an active account with Bindowal Bank." } },
  //           { id: "req-vc-2", text: { ar: "الاشتراك وتفعيل تطبيق الموبايل البنكي الخاص بالبنك.", en: "Subscribe to and activate the bank's mobile banking app." } },
  //           { id: "req-vc-3", text: { ar: "توفر رصيد كافٍ في الحساب الأساسي لتغطية مشتريات البطاقة.", en: "Availability of sufficient balance in the main account to cover card purchases." } },
  //         ],
  //       },
  //       stepsSection: {
  //         title: { ar: "خطوات الإصدار الفوري", en: "Instant Issuance Steps" },
  //         steps: [
  //           { id: "step-vc-1", title: { ar: "الدخول للتطبيق", en: "Log in to App" }, description: { ar: "افتح تطبيق الموبايل البنكي وانتقل إلى قسم البطاقات.", en: "Open the mobile banking app and go to the cards section." } },
  //           { id: "step-vc-2", title: { ar: "طلب إصدار", en: "Request Issuance" }, description: { ar: "اختر 'إصدار بطاقة افتراضية' واتبع التعليمات البسيطة.", en: "Select 'Issue Virtual Card' and follow the simple instructions." } },
  //           { id: "step-vc-3", title: { ar: "التفعيل والشراء", en: "Activate & Shop" }, description: { ar: "ستظهر بيانات البطاقة فوراً، ابدأ باستخدامها في مشترياتك المفضلة.", en: "Card details will appear instantly; start using it for your favorite purchases." } },
  //         ],
  //       },
  //       ctaSection: {
  //         title: { ar: "عالمك الرقمي بين يديك", en: "Your Digital World in Your Hands" },
  //         description: { ar: "لا تنتظر البطاقات التقليدية، اصدر بطاقتك الافتراضية الآن واستمتع بأمان لا مثيل له.", en: "Don't wait for traditional cards; issue your virtual card now and enjoy unmatched security." },
  //         primaryLabel: { ar: "اصدرها الآن", en: "Issue It Now" },
  //         primaryHref: "/mobile-banking",
  //         secondaryLabel: { ar: "كيف تعمل؟", en: "How it Works?" },
  //         secondaryHref: "#how-it-works",
  //       },
  //       faqs: {
  //         title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
  //         items: [
  //           { id: "faq-vc-1", question: { ar: "هل يمكنني استخدام البطاقة الافتراضية في المحلات التجارية؟", en: "Can I use the virtual card in physical stores?" }, answer: { ar: "البطاقة الافتراضية مخصصة للشراء عبر الإنترنت، ولكن يمكن ربطها بمحافظ الهاتف الذكي (عند توفر الخدمة) للدفع في المحلات عبر NFC.", en: "The virtual card is intended for online shopping, but it can be linked to smartphone wallets (when available) for NFC payments in stores." } },
  //           { id: "faq-vc-2", question: { ar: "هل هناك رسوم على إصدار البطاقة الافتراضية؟", en: "Are there fees for issuing a virtual card?" }, answer: { ar: "تتميز البطاقة الافتراضية برسوم إصدار منخفضة جداً مقارنة بالبطاقات البلاستيكية، وفي بعض الأحيان تكون مجانية ضمن عروض البنك.", en: "Virtual cards feature very low issuance fees compared to physical cards, and are sometimes free during bank promotions." } },
  //           { id: "faq-vc-3", question: { ar: "ماذا أفعل إذا تعرضت بيانات البطاقة للاختراق؟", en: "What should I do if card details are compromised?" }, answer: { ar: "يمكنك فوراً ومن خلال التطبيق إلغاء البطاقة الحالية وإصدار بطاقة افتراضية جديدة ببيانات مختلفة في ثوانٍ.", en: "You can immediately cancel the current card through the app and issue a new virtual card with different details in seconds." } },
  //           { id: "faq-vc-4", question: { ar: "هل البطاقة الافتراضية صالحة مدى الحياة؟", en: "Is the virtual card valid for life?" }, answer: { ar: "كأي بطاقة بنكية، لها تاريخ انتهاء محدد (مثلاً سنة أو أكثر)، ويمكن تجديدها أو إصدار بديل لها بسهولة عبر التطبيق.", en: "Like any bank card, it has a specific expiry date (e.g., one year or more) and can be easily renewed or replaced via the app." } },
  //         ],
  //       },
  //       details: {
  //             title: {
  //                   ar: "ما الذي تقدمه بطاقة الدفع الافتراضية؟",
  //                   en: "What Does the Virtual Card Offer?"
  //             },
  //             subtitle: {
  //                   ar: "توفر بطاقة الدفع الافتراضية بيانات دفع رقمية يمكن استخدامها في عمليات الشراء عبر الإنترنت، مع إمكانية التحكم بها ومتابعتها عبر القنوات الرقمية المتاحة.",
  //                   en: "The virtual card provides digital payment details for online purchases, with the ability to control and monitor usage through available digital channels."
  //             },
  //             features: [
  //                   {
  //                         id: "feature-1",
  //                         text: {
  //                               ar: "إصدار رقمي مخصص للمدفوعات الإلكترونية دون الحاجة إلى بطاقة فعلية.",
  //                               en: "A digital issuance designed for electronic payments without needing a physical card."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-2",
  //                         text: {
  //                               ar: "مناسبة للتسوق عبر الإنترنت والاشتراكات الرقمية عند دعم جهة الدفع.",
  //                               en: "Suitable for online shopping and digital subscriptions when supported by the payment provider."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-3",
  //                         text: {
  //                               ar: "إمكانية متابعة العمليات وإدارة بعض إعدادات البطاقة رقميًا عند توفرها.",
  //                               en: "Ability to monitor transactions and manage selected card settings digitally when available."
  //                         }
  //                   },
  //                   {
  //                         id: "feature-4",
  //                         text: {
  //                               ar: "تساعد على فصل مشتريات الإنترنت عن الاستخدامات اليومية الأخرى.",
  //                               en: "Helps separate online purchases from other daily payment use cases."
  //                         }
  //                   }
  //             ]
  //       },
  //       benefits: {
  //             title: {
  //                   ar: "تجربة دفع رقمية أكثر مرونة",
  //                   en: "A More Flexible Digital Payment Experience"
  //             },
  //             subtitle: {
  //                   ar: "تدعم البطاقة الافتراضية استخدامًا أكثر تنظيمًا للمدفوعات عبر الإنترنت، مع تقليل الحاجة لمشاركة بيانات بطاقة فعلية في كل عملية رقمية.",
  //                   en: "The virtual card supports more organized online payments while reducing the need to share physical card details for every digital transaction."
  //             },
  //             items: [
  //                   {
  //                         id: "benefit-1",
  //                         text: {
  //                               ar: "سهولة الحصول على بيانات دفع رقمية عند دعم الخدمة.",
  //                               en: "Easy access to digital payment details when the service is supported."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-2",
  //                         text: {
  //                               ar: "مناسبة للمشتريات الرقمية والاشتراكات المتكررة.",
  //                               en: "Suitable for digital purchases and recurring subscriptions."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-3",
  //                         text: {
  //                               ar: "تحكم أفضل في استخدامات الإنترنت من خلال بطاقة منفصلة.",
  //                               en: "Better control over online usage through a separate card."
  //                         }
  //                   },
  //                   {
  //                         id: "benefit-4",
  //                         text: {
  //                               ar: "إدارة أسهل عبر القنوات الرقمية المتاحة بدل الإجراءات الورقية التقليدية.",
  //                               en: "Easier management through available digital channels instead of traditional paperwork."
  //                         }
  //                   }
  //             ]
  //       },
  //       howToGet: {
  //             title: {
  //                   ar: "إصدار رقمي عبر القنوات المتاحة",
  //                   en: "Digital Issuance Through Available Channels"
  //             },
  //             subtitle: {
  //                   ar: "قد يتطلب إصدار البطاقة الافتراضية وجود حساب أو محفظة مؤهلة، وتفعيل القنوات الرقمية، والالتزام بحدود الاستخدام والأمان المعتمدة.",
  //                   en: "Issuing a virtual card may require an eligible account or wallet, activated digital channels, and compliance with approved usage and security limits."
  //             },
  //             requirements: [
  //                   {
  //                         id: "req-1",
  //                         text: {
  //                               ar: "حساب أو محفظة مؤهلة لدى البنك حسب السياسة المعتمدة.",
  //                               en: "An eligible account or wallet with the bank according to approved policy."
  //                         }
  //                   },
  //                   {
  //                         id: "req-2",
  //                         text: {
  //                               ar: "تفعيل القنوات الرقمية أو تطبيق البنك عند توفر الخدمة من خلاله.",
  //                               en: "Activation of digital channels or the bank app when the service is available through it."
  //                         }
  //                   },
  //                   {
  //                         id: "req-3",
  //                         text: {
  //                               ar: "قبول شروط الاستخدام وحدود المدفوعات الإلكترونية.",
  //                               en: "Accept usage terms and online payment limits."
  //                         }
  //                   }
  //             ],
  //             channels: [
  //                   {
  //                         id: "ch-1",
  //                         text: {
  //                               ar: "تطبيق البنك أو القنوات الرقمية عند دعم إصدار البطاقة افتراضيًا.",
  //                               en: "Bank app or digital channels when virtual issuance is supported."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-2",
  //                         text: {
  //                               ar: "الفرع أو خدمة العملاء لتفعيل القنوات الرقمية أو حل مشكلات الإصدار.",
  //                               en: "Branch or customer service to activate digital channels or resolve issuance issues."
  //                         }
  //                   },
  //                   {
  //                         id: "ch-3",
  //                         text: {
  //                               ar: "الدعم الفني للاستفسارات المرتبطة بالاستخدام الإلكتروني.",
  //                               en: "Technical support for electronic usage inquiries."
  //                         }
  //                   }
  //             ]
  //       },
  //       subscribe: {
  //             title: {
  //                   ar: "إصدار وإدارة رقمية مبسطة",
  //                   en: "Simplified Digital Issuance and Management"
  //             },
  //             subtitle: {
  //                   ar: "تبدأ الخدمة بتفعيل القناة الرقمية المناسبة، ثم طلب البطاقة الافتراضية وضبط إعداداتها، وبعدها استخدامها للمدفوعات المؤهلة عبر الإنترنت.",
  //                   en: "The service starts by activating the suitable digital channel, requesting the virtual card and configuring its settings, then using it for eligible online payments."
  //             },
  //             steps: [
  //                   {
  //                         id: "step-1",
  //                         title: {
  //                               ar: "تفعيل القناة الرقمية",
  //                               en: "Activate Digital Channel"
  //                         },
  //                         description: {
  //                               ar: "تأكد من تفعيل التطبيق أو القناة الرقمية المؤهلة لإصدار البطاقة.",
  //                               en: "Make sure the app or eligible digital channel is activated for card issuance."
  //                         }
  //                   },
  //                   {
  //                         id: "step-2",
  //                         title: {
  //                               ar: "طلب البطاقة الافتراضية",
  //                               en: "Request Virtual Card"
  //                         },
  //                         description: {
  //                               ar: "قدّم طلب الإصدار وحدد الإعدادات المتاحة مثل حدود الاستخدام عند توفرها.",
  //                               en: "Submit the issuance request and configure available settings such as usage limits when supported."
  //                         }
  //                   },
  //                   {
  //                         id: "step-3",
  //                         title: {
  //                               ar: "الاستخدام والمتابعة",
  //                               en: "Use and Monitor"
  //                         },
  //                         description: {
  //                               ar: "استخدم بيانات البطاقة في المدفوعات الإلكترونية وتابع العمليات بانتظام.",
  //                               en: "Use the card details for electronic payments and monitor transactions regularly."
  //                         }
  //                   }
  //             ]
  //       },
  //       nextStep: {
  //             title: {
  //                   ar: "ابدأ تجربة دفع رقمية أكثر أمانًا",
  //                   en: "Start a Safer Digital Payment Experience"
  //             },
  //             description: {
  //                   ar: "تواصل مع البنك لمعرفة توفر بطاقة الدفع الافتراضية ومتطلبات إصدارها عبر القنوات الرقمية.",
  //                   en: "Contact the bank to learn virtual card availability and issuance requirements through digital channels."
  //             }
  //       },
  //       relatedServicesKeys: [
  //             "creditCard",
  //             "debitCard",
  //             "prepaidCard"
  //       ]
  // },
  {
    slug: "financing-personal",
    section: "personal",
    title: {
      ar: "التمويل الشخصي",
      en: "Personal Financing"
    },
    subtitle: {
      ar: "حل تمويلي يساعدك على تلبية احتياجاتك الشخصية بخطة سداد واضحة ومناسبة",
      en: "A financing solution that helps you meet personal needs through a clear and suitable repayment plan"
    },
    heroImage: "/images/customer-services/Current-account-removebg-preview.png",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.personalFinance",
        label: {
          ar: "التمويل الشخصي",
          en: "Personal Financing"
        }
      }
    ],
    tagline: {
      ar: "منتجات التمويل",
      en: "Financing Products"
    },
    primaryCta: {
      label: {
        ar: "قدّم طلب التمويل",
        en: "Apply for Financing"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "التمويل الشخصي المتوافق مع أحكام الشريعة من بنك بن دول. حلول تمويلية مرنة بمزايا استثنائية وفترات سداد مريحة تساعدك على تحقيق تطلعاتك الشخصية والعائلية بكل يسر.",
      en: "Sharia-compliant Personal Financing from Bindowal Bank. Flexible financing solutions with exceptional benefits and convenient repayment periods to help you achieve your personal and family aspirations easily.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "تم تصميم التمويل الشخصي في بنك بن دول ليوفر لك الدعم المالي اللازم لتغطية مختلف احتياجاتك الحياتية. سواء كنت تخطط لترميم منزلك، السفر، التعليم، أو مواجهة أي التزامات طارئة، فإننا نقدم لك حلولاً تمويلية متوافقة تماماً مع ضوابط الشريعة الإسلامية.",
        en: "Personal financing at Bindowal Bank is designed to provide you with the financial support needed to cover various life needs. Whether you plan to renovate your home, travel, pursue education, or meet any emergency obligations, we offer you financing solutions fully compliant with Islamic Sharia regulations.",
      },
    },
    why: {
      title: { ar: "لماذا تختار تمويلنا الشخصي؟", en: "Why Choose Our Personal Financing?" },
      description: {
        ar: "لأننا نؤمن بأن أحلامك تستحق الدعم، نقدم لك تجربة تمويلية تمتاز بالشفافية والسرعة والمرونة العالية لتناسب وضعك المالي.",
        en: "Because we believe your dreams deserve support, we provide a financing experience characterized by transparency, speed, and high flexibility to suit your financial situation.",
      },
      items: [
        { id: "why-pf-1", text: { ar: "تمويل متوافق 100% مع أحكام الشريعة الإسلامية.", en: "100% Sharia-compliant financing." } },
        { id: "why-pf-2", text: { ar: "سرعة في الإجراءات والموافقة على الطلب في حال اكتمال المسوغات.", en: "Fast procedures and application approval upon completion of requirements." } },
        { id: "why-pf-3", text: { ar: "فترات سداد مرنة وطويلة تصل إلى عدة سنوات.", en: "Flexible and long repayment periods up to several years." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات التمويل", en: "Financing Features" },
      items: [
        { id: "fc-pf-1", title: { ar: "مبالغ تمويل مجزية", en: "Generous Amounts" }, description: { ar: "إمكانية الحصول على مبالغ تمويل تتناسب مع دخلك الشهري والتزاماتك الحالية.", en: "Possibility of obtaining financing amounts commensurate with your monthly income and current obligations." } },
        { id: "fc-pf-2", title: { ar: "بدون كفيل غارم", en: "No Guarantor Required" }, description: { ar: "إمكانية الحصول على التمويل بضمان الراتب فقط للفئات المستوفية للشروط.", en: "Possibility of obtaining financing with salary guarantee only for eligible categories." } },
        { id: "fc-pf-3", title: { ar: "هامش ربح تنافسي", en: "Competitive Profit Margin" }, description: { ar: "نقدم لك أقل هوامش ربح ممكنة لضمان راحتك المالية.", en: "We offer you the lowest possible profit margins to ensure your financial comfort." } },
        { id: "fc-pf-4", title: { ar: "تأجيل الأقساط", en: "Installment Deferral" }, description: { ar: "إمكانية طلب تأجيل بعض الأقساط في حالات معينة وفق سياسة البنك.", en: "Possibility to request deferral of some installments in specific cases according to bank policy." } },
      ],
    },
    audience: {
      title: { ar: "من يمكنه التقدم؟", en: "Who Can Apply?" },
      items: [
        { id: "aud-pf-1", text: { ar: "موظفو القطاع العام (المدني والعسكري) المحولة رواتبهم للبنك.", en: "Public sector employees (civil and military) with salaries transferred to the bank." } },
        { id: "aud-pf-2", text: { ar: "موظفو الشركات الكبرى والجهات المعتمدة لدى البنك.", en: "Employees of major companies and entities approved by the bank." } },
        { id: "aud-pf-3", text: { ar: "المتقاعدون المستوفون لشروط العمر والدخل.", en: "Retirees meeting age and income requirements." } },
      ],
    },
    requirementsSection: {
      title: { ar: "شروط ومتطلبات التمويل", en: "Financing Terms & Requirements" },
      items: [
        { id: "req-pf-1", text: { ar: "ألا يقل العمر عن 18 عاماً ولا يزيد عن سن التقاعد عند نهاية التمويل.", en: "Minimum age 18 and not exceeding retirement age at the end of financing." } },
        { id: "req-pf-2", text: { ar: "تقديم خطاب تعريف بالراتب موضحاً فيه المسمى الوظيفي وتاريخ الالتحاق.", en: "Submit a salary introduction letter stating job title and joining date." } },
        { id: "req-pf-3", text: { ar: "توقيع اتفاقية تحويل الراتب والمستحقات لصالح البنك.", en: "Sign an agreement to transfer salary and dues to the bank." } },
      ],
    },
    stepsSection: {
      title: { ar: "رحلتك للحصول على التمويل", en: "Your Journey to Get Financing" },
      steps: [
        { id: "step-pf-1", title: { ar: "الاستشارة والحساب", en: "Consult & Calculate" }, description: { ar: "تواصل معنا لمعرفة الحد الأعلى للتمويل والقسط الشهري المتوقع.", en: "Contact us to find out the maximum financing limit and expected monthly installment." } },
        { id: "step-pf-2", title: { ar: "تقديم الطلب", en: "Submit Application" }, description: { ar: "قم بتسليم المستندات المطلوبة في أقرب فرع لبنك بن دول.", en: "Submit required documents at the nearest Bindowal Bank branch." } },
        { id: "step-pf-3", title: { ar: "الموافقة والصرف", en: "Approval & Disbursement" }, description: { ar: "بعد الموافقة الائتمانية وتوقيع العقود، يتم إيداع مبلغ التمويل في حسابك.", en: "After credit approval and signing contracts, the financing amount is deposited into your account." } },
      ],
    },
    ctaSection: {
      title: { ar: "حقق طموحاتك اليوم", en: "Achieve Your Ambitions Today" },
      description: { ar: "تمويلنا الشخصي هو جسرك نحو حياة أفضل. ابدأ طلبك الآن واستمتع بمزايا حصرية.", en: "Our personal financing is your bridge to a better life. Start your application now and enjoy exclusive benefits." },
      primaryLabel: { ar: "اطلب التمويل الآن", en: "Request Financing Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "حاسبة التمويل", en: "Financing Calculator" },
      secondaryHref: "#calculator",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-pf-1", question: { ar: "ما هي أقصى فترة سداد للتمويل الشخصي؟", en: "What is the maximum repayment period for personal financing?" }, answer: { ar: "تصل فترة السداد عادة إلى 60 شهراً (5 سنوات)، وذلك يعتمد على السياسات المعتمدة ونوع التوظيف.", en: "The repayment period usually reaches up to 60 months (5 years), depending on approved policies and employment type." } },
        { id: "faq-pf-2", question: { ar: "هل يمكنني سداد التمويل قبل انتهاء مدته؟", en: "Can I repay the financing before its term ends?" }, answer: { ar: "نعم، يتيح البنك خيار السداد المبكر وفق ضوابط مؤسسة النقد واللوائح الداخلية للبنك.", en: "Yes, the bank allows an early repayment option according to Monetary Authority regulations and the bank's internal bylaws." } },
        { id: "faq-pf-3", question: { ar: "هل التمويل الشخصي متاح لغير اليمنيين؟", en: "Is personal financing available for non-Yemenis?" }, answer: { ar: "نعم، التمويل متاح للمقيمين المستوفين لشروط الكفالة وتحويل الراتب المعتمدة لدى البنك.", en: "Yes, financing is available for residents meeting sponsorship and salary transfer conditions approved by the bank." } },
        { id: "faq-pf-4", question: { ar: "كيف يتم احتساب هامش الربح؟", en: "How is the profit margin calculated?" }, answer: { ar: "يتم احتساب الربح بناءً على صيغ المرابحة الإسلامية، وتكون الأقساط ثابتة طوال فترة التمويل.", en: "Profit is calculated based on Islamic Murabaha formulas, and installments remain fixed throughout the financing period." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه التمويل الشخصي؟",
        en: "What Does Personal Financing Offer?"
      },
      subtitle: {
        ar: "يوفر التمويل الشخصي خيارًا منظمًا لتغطية احتياجاتك المختلفة مثل تحسين مستوى المعيشة، تجهيز المنزل، التعليم، العلاج، أو الالتزامات الشخصية، وفق الضوابط والسياسات المعتمدة لدى البنك.",
        en: "Personal financing provides an organized option for covering different needs such as lifestyle improvements, home preparation, education, healthcare, or personal commitments, according to the bank’s approved policies and guidelines."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "تمويل مخصص للاحتياجات الشخصية المؤهلة وفق دراسة قدرة العميل على السداد.",
            en: "Financing designed for eligible personal needs based on the customer’s repayment capacity."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "خطة سداد واضحة يتم تحديدها بما يناسب دخل العميل والشروط المعتمدة.",
            en: "A clear repayment plan defined according to the customer’s income and approved terms."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "إجراءات طلب ومراجعة منظمة تساعد العميل على فهم الالتزامات قبل الموافقة.",
            en: "Organized application and review procedures that help customers understand obligations before approval."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "إمكانية ربط السداد بالحساب أو القنوات المناسبة حسب آلية البنك.",
            en: "Repayment may be linked to an account or suitable channels depending on the bank’s process."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "مرونة أكبر لإدارة احتياجاتك",
        en: "More Flexibility for Your Needs"
      },
      subtitle: {
        ar: "يساعدك التمويل الشخصي على تنفيذ خططك دون ضغط مالي مباشر، من خلال تحويل الاحتياج إلى التزام منظم وواضح يمكن متابعته بسهولة.",
        en: "Personal financing helps you carry out plans without immediate financial pressure by turning a need into a structured and clear commitment that can be tracked easily."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تغطية احتياجات شخصية متعددة ضمن منتج واحد واضح.",
            en: "Cover multiple personal needs through one clear product."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "توزيع الالتزام على فترة مناسبة بدل الدفع الفوري الكامل.",
            en: "Spread the commitment over a suitable period instead of paying the full amount immediately."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "وضوح أكبر في قيمة الالتزام وآلية السداد قبل بدء التمويل.",
            en: "Greater clarity on the obligation amount and repayment method before financing starts."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "دعم اتخاذ قرار مالي أكثر توازنًا من خلال دراسة الطلب والقدرة على السداد.",
            en: "Support for a more balanced financial decision through application and repayment capacity review."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "متطلبات واضحة لدراسة الطلب",
        en: "Clear Requirements for Application Review"
      },
      subtitle: {
        ar: "يتطلب الحصول على التمويل تقديم بيانات تعريفية ومالية تساعد البنك على تقييم الملاءمة، مع تحديد الغرض من التمويل والالتزام بالشروط والسياسات المعتمدة.",
        en: "Obtaining financing requires identification and financial information that helps the bank assess eligibility, along with defining the financing purpose and following approved terms and policies."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "هوية سارية وبيانات تواصل محدثة.",
            en: "A valid ID and updated contact details."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "إثبات دخل أو مصدر سداد حسب فئة العميل.",
            en: "Proof of income or repayment source based on customer category."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "تحديد الغرض من التمويل وتقديم أي مستندات داعمة عند الحاجة.",
            en: "Define the financing purpose and provide supporting documents when required."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة أحد فروع البنك لتقديم الطلب ومناقشة الخيارات المناسبة.",
            en: "Visit a bank branch to submit the request and discuss suitable options."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "التواصل مع خدمة العملاء لمعرفة المتطلبات المحدثة قبل التقديم.",
            en: "Contact customer service to learn updated requirements before applying."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "استخدام القنوات الرقمية المتاحة للاستفسار أو بدء الطلب عند دعم الخدمة.",
            en: "Use available digital channels to inquire or start the request when supported."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "خطوات بسيطة تبدأ بتقييم احتياجك",
        en: "Simple Steps Starting with Your Need"
      },
      subtitle: {
        ar: "تبدأ رحلة التمويل بتحديد الاحتياج، ثم تقديم الطلب والمستندات، وبعد المراجعة والموافقة يتم استكمال الإجراءات وتفعيل التمويل وفق الضوابط المعتمدة.",
        en: "The financing journey starts with defining the need, then submitting the application and documents. After review and approval, procedures are completed and financing is activated according to approved guidelines."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تحديد الاحتياج",
            en: "Define the Need"
          },
          description: {
            ar: "حدد الغرض من التمويل والقيمة المطلوبة بصورة أولية قبل تقديم الطلب.",
            en: "Define the financing purpose and estimated amount before submitting the request."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم الطلب",
            en: "Submit Application"
          },
          description: {
            ar: "قدّم البيانات والمستندات المطلوبة عبر الفرع أو القناة المتاحة.",
            en: "Submit required information and documents through the branch or available channel."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "المراجعة والتفعيل",
            en: "Review and Activation"
          },
          description: {
            ar: "يقوم البنك بدراسة الطلب ثم استكمال الإجراءات بعد الموافقة واستيفاء الشروط.",
            en: "The bank reviews the request, then completes procedures after approval and fulfillment of conditions."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "حوّل احتياجك إلى خطة واضحة",
        en: "Turn Your Need into a Clear Plan"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة خيارات التمويل الشخصي والمتطلبات المناسبة لحالتك.",
        en: "Contact the bank to learn personal financing options and requirements suitable for your situation."
      }
    },
    relatedServicesKeys: [
      "realEstate",
      "smallProjects",
      "mobileBanking"
    ]
  },
  {
    slug: "financing-home",
    section: "personal",
    title: {
      ar: "التمويل العقاري",
      en: "Real Estate Financing"
    },
    subtitle: {
      ar: "تمويل يساعدك على تملك أو تحسين عقارك بخطوات منظمة وشروط واضحة",
      en: "Financing that helps you own or improve your property through organized steps and clear terms"
    },
    heroImage: "/images/customer-services/Current-account-removebg-preview.png",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.realEstate",
        label: {
          ar: "التمويل العقاري",
          en: "Real Estate Financing"
        }
      }
    ],
    tagline: {
      ar: "منتجات التمويل",
      en: "Financing Products"
    },
    primaryCta: {
      label: {
        ar: "قدّم طلب التمويل",
        en: "Apply for Financing"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "التمويل العقاري من بنك بن دول. امتلك منزل أحلامك اليوم مع حلول تمويل عقاري مرنة، فترات سداد طويلة، وإجراءات ميسرة تتوافق مع أحكام الشريعة الإسلامية.",
      en: "Real Estate Financing from Bindowal Bank. Own your dream home today with flexible real estate financing solutions, long repayment periods, and easy procedures compliant with Islamic Sharia.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "التمويل العقاري في بنك بن دول هو شريكك الموثوق لتملك العقار الذي تطمح إليه. سواء كنت ترغب في شراء منزل جاهز، أرض سكنية، أو بناء وتعمير عقارك الخاص، فإننا نوفر لك الدعم المالي اللازم بصيغ تمويل إسلامية مبتكرة تضمن لك الاستقرار والراحة.",
        en: "Real estate financing at Bindowal Bank is your trusted partner for owning the property you aspire to. Whether you want to buy a ready-made home, residential land, or build and construct your own property, we provide the necessary financial support with innovative Islamic financing formulas ensuring stability and comfort.",
      },
    },
    why: {
      title: { ar: "لماذا تختار تمويلنا العقاري؟", en: "Why Choose Our Real Estate Financing?" },
      description: {
        ar: "نحن ندرك أن تملك المنزل هو استثمار العمر، لذا نقدم لك مزايا تجعل من رحلة التملك تجربة سهلة ومجزية.",
        en: "We realize that owning a home is a lifetime investment, so we offer benefits that make the ownership journey an easy and rewarding experience.",
      },
      items: [
        { id: "why-hf-1", text: { ar: "فترات سداد طويلة جداً تتناسب مع الالتزامات المالية طويلة الأمد.", en: "Very long repayment periods commensurate with long-term financial obligations." } },
        { id: "why-hf-2", text: { ar: "إمكانية تمويل تصل إلى نسبة كبيرة من قيمة العقار.", en: "Possibility of financing up to a large percentage of the property value." } },
        { id: "why-hf-3", text: { ar: "إجراءات تقييم عقاري مهنية تضمن حقوقك كمالك مستقبلي.", en: "Professional property valuation procedures ensuring your rights as a future owner." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات التمويل العقاري", en: "Real Estate Financing Features" },
      items: [
        { id: "fc-hf-1", title: { ar: "تعدد أغراض التمويل", en: "Multiple Purposes" }, description: { ar: "شراء فيلا، شقة، أرض، أو بناء مسكن خاص بك.", en: "Buy a villa, apartment, land, or build your own private residence." } },
        { id: "fc-hf-2", title: { ar: "تضامن الأقارب", en: "Relative Solidarity" }, description: { ar: "إمكانية دمج دخل الزوجين لزيادة مبلغ التمويل المتاح.", en: "Possibility of combining spouses' incomes to increase the available financing amount." } },
        { id: "fc-hf-3", title: { ar: "تأمين تكافلي", en: "Takaful Insurance" }, description: { ar: "إعفاء من الأقساط في حالات الوفاة أو العجز الكلي (حسب الشروط).", en: "Exemption from installments in cases of death or total disability (subject to terms)." } },
        { id: "fc-hf-4", title: { ar: "سرعة التنفيذ", en: "Speed of Execution" }, description: { ar: "فريق متخصص لمتابعة إجراءات الإفراغ والرهن وضمان سرعة التسوية.", en: "A specialized team to follow up on transfer and mortgage procedures ensuring fast settlement." } },
      ],
    },
    audience: {
      title: { ar: "الفئات المستفيدة", en: "Beneficiary Categories" },
      items: [
        { id: "aud-hf-1", text: { ar: "المواطنون الراغبون في السكن الأول أو الاستثمار العقاري.", en: "Citizens looking for a first home or real estate investment." } },
        { id: "aud-hf-2", text: { ar: "الموظفون في القطاع العام والخاص المعتمدين لدى البنك.", en: "Employees in the public and private sectors approved by the bank." } },
        { id: "aud-hf-3", text: { ar: "أصحاب المهن الحرة والأنشطة التجارية ذات الدخل المستقر.", en: "Freelancers and business owners with stable income." } },
      ],
    },
    requirementsSection: {
      title: { ar: "المستندات المطلوبة", en: "Required Documents" },
      items: [
        { id: "req-hf-1", text: { ar: "صورة من الهوية الوطنية وسجل الأسرة.", en: "Copy of national ID and family record." } },
        { id: "req-hf-2", text: { ar: "صك العقار المراد شراؤه وصورة من رخصة البناء (إن وجدت).", en: "Title deed of the property to be purchased and copy of construction license (if applicable)." } },
        { id: "req-hf-3", text: { ar: "عرض سعر للعقار وخطاب تعريف بالراتب للعميل.", en: "Price offer for the property and salary introduction letter for the customer." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات تملك منزلك", en: "Steps to Own Your Home" },
      steps: [
        { id: "step-hf-1", title: { ar: "اختيار العقار", en: "Choose Property" }, description: { ar: "ابحث عن العقار المناسب واحصل على عرض سعر رسمي.", en: "Search for the right property and get an official price offer." } },
        { id: "step-hf-2", title: { ar: "التقييم والدراسة", en: "Valuation & Study" }, description: { ar: "يقوم البنك بتقييم العقار ودراسة وضعك الائتماني لإصدار الموافقة.", en: "The bank evaluates the property and studies your credit status to issue approval." } },
        { id: "step-hf-3", title: { ar: "الإفراغ والاستلام", en: "Transfer & Possession" }, description: { ar: "يتم توقيع العقود النهائية، إفراغ العقار، وتسليمك مفاتيح منزلك الجديد.", en: "Final contracts are signed, property transfer is completed, and keys to your new home are handed over." } },
      ],
    },
    ctaSection: {
      title: { ar: "بيت العمر ينتظرك", en: "Your Forever Home Awaits" },
      description: { ar: "ابدأ رحلة تملك منزلك اليوم مع بنك بن دول واستمتع بحياة مستقرة وهادئة.", en: "Start your home ownership journey today with Bindowal Bank and enjoy a stable and peaceful life." },
      primaryLabel: { ar: "قدم طلب التملك", en: "Apply for Ownership" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "استشارة عقارية", en: "Property Consultation" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-hf-1", question: { ar: "ما هو الحد الأقصى لمبلغ التمويل العقاري؟", en: "What is the maximum real estate financing amount?" }, answer: { ar: "يتم تحديد الحد الأقصى بناءً على دخل العميل الشهري، التزاماته الأخرى، وقيمة العقار المقيم.", en: "The maximum limit is determined based on the customer's monthly income, other obligations, and the valued property price." } },
        { id: "faq-hf-2", question: { ar: "هل يمكنني بناء منزل على أرض أملكها؟", en: "Can I build a home on land I already own?" }, answer: { ar: "نعم، نوفر منتج 'البناء الذاتي' الذي يتيح لك الحصول على دفعات مالية لإتمام مراحل بناء منزلك.", en: "Yes, we offer a 'Self-Construction' product allowing you to receive financial payments to complete your home's construction stages." } },
        { id: "faq-hf-3", question: { ar: "هل يشترط تحويل الراتب للحصول على التمويل العقاري؟", en: "Is salary transfer required for real estate financing?" }, answer: { ar: "نعم، تحويل الراتب هو أحد الضمانات الأساسية لضمان حصولك على أفضل هوامش ربح وأعلى مبالغ تمويل.", en: "Yes, salary transfer is a primary guarantee to ensure you get the best profit margins and highest financing amounts." } },
        { id: "faq-hf-4", question: { ar: "هل يمكنني سداد التمويل العقاري بشكل مبكر؟", en: "Can I repay real estate financing early?" }, answer: { ar: "نعم، متاح السداد المبكر وفقاً للأنظمة المتبعة، ويتم إسقاط الأرباح المستقبلية المتبقية (وفق ضوابط محددة).", en: "Yes, early repayment is available per regulations, with remaining future profits waived (under specific controls)." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه التمويل العقاري؟",
        en: "What Does Real Estate Financing Offer?"
      },
      subtitle: {
        ar: "يدعم التمويل العقاري العملاء الراغبين في شراء منزل، بناء عقار، ترميمه، أو تحسينه، من خلال آلية تمويل منظمة تراعي قيمة العقار وقدرة العميل على السداد.",
        en: "Real estate financing supports customers who want to buy, build, renovate, or improve a property through an organized financing process that considers property value and repayment capacity."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "تمويل موجه لاحتياجات السكن أو تحسين العقار حسب نوع الطلب.",
            en: "Financing directed toward housing or property improvement needs depending on request type."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "مراجعة للوثائق العقارية والملكية أو المستندات ذات العلاقة قبل الاعتماد.",
            en: "Review of property, ownership, or related documents before approval."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "خطة سداد طويلة نسبيًا مقارنة بالاحتياجات قصيرة الأجل وفق سياسة البنك.",
            en: "A relatively longer repayment plan compared with short-term needs according to bank policy."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "إجراءات تقييم تساعد على مواءمة قيمة التمويل مع العقار والدخل المتاح.",
            en: "Assessment procedures that help align the financing amount with the property and available income."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "اقتراب أكثر من هدف التملك والاستقرار",
        en: "Closer to Ownership and Stability"
      },
      subtitle: {
        ar: "يوفر التمويل العقاري مسارًا عمليًا للتعامل مع تكلفة العقار أو تحسينه، مع تنظيم الالتزام المالي بدل تأجيل المشروع لعدم توفر كامل المبلغ مقدمًا.",
        en: "Real estate financing provides a practical path to manage the cost of property ownership or improvement while organizing the financial commitment instead of delaying the project until the full amount is available."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "دعم خطط شراء أو بناء أو تحسين العقار بصورة منظمة.",
            en: "Support buying, building, or improving property in an organized way."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "تقليل الضغط الناتج عن دفع كامل تكلفة العقار مرة واحدة.",
            en: "Reduce pressure from paying the full property cost at once."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "وضوح أكبر في خطوات التملك أو التحسين من خلال مراجعة الوثائق والمتطلبات.",
            en: "Greater clarity in ownership or improvement steps through document and requirement review."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "مساعدة العميل على التخطيط لالتزام طويل الأجل بطريقة أكثر انضباطًا.",
            en: "Help customers plan a long-term commitment with more discipline."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "وثائق العقار والدخل أساس دراسة الطلب",
        en: "Property and Income Documents Are Key"
      },
      subtitle: {
        ar: "تعتمد دراسة التمويل العقاري على بيانات العميل، مصدر السداد، ووثائق العقار أو المشروع المطلوب تمويله، مع إمكانية طلب تقييم أو مستندات إضافية حسب الحالة.",
        en: "Real estate financing review depends on customer details, repayment source, and property or project documents, with possible valuation or additional documents depending on the case."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "هوية سارية وبيانات تواصل محدثة للعميل.",
            en: "A valid ID and updated customer contact details."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "إثبات دخل أو مصدر سداد مناسب لفترة التمويل.",
            en: "Proof of income or a suitable repayment source for the financing period."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "وثائق العقار أو عرض السعر أو مستندات المشروع العقاري حسب نوع الطلب.",
            en: "Property documents, quotation, or real estate project documents depending on request type."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع لعرض تفاصيل العقار واستلام قائمة المتطلبات.",
            en: "Visit a branch to present property details and receive the requirements list."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "التواصل مع خدمة العملاء لمعرفة الوثائق المطلوبة حسب نوع العقار.",
            en: "Contact customer service to learn required documents based on property type."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "متابعة حالة الطلب عبر القنوات المتاحة بعد التقديم.",
            en: "Follow up on the application status through available channels after submission."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "من دراسة العقار إلى اعتماد التمويل",
        en: "From Property Review to Financing Approval"
      },
      subtitle: {
        ar: "تسير إجراءات التمويل العقاري عبر مراحل واضحة تشمل تحديد الغرض، مراجعة الوثائق، تقييم الطلب، ثم استكمال التعاقد والتفعيل بعد الموافقة.",
        en: "Real estate financing follows clear stages: defining the purpose, reviewing documents, assessing the request, then completing contracting and activation after approval."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تحديد نوع التمويل",
            en: "Define Financing Type"
          },
          description: {
            ar: "حدد هل الغرض شراء، بناء، ترميم، أو تحسين عقار قائم.",
            en: "Specify whether the purpose is buying, building, renovating, or improving an existing property."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم الوثائق",
            en: "Submit Documents"
          },
          description: {
            ar: "قدّم بيانات الدخل ووثائق العقار أو العرض المرتبط بالطلب.",
            en: "Submit income details and property documents or quotation related to the request."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "الموافقة والاستكمال",
            en: "Approval and Completion"
          },
          description: {
            ar: "بعد المراجعة والموافقة، يتم استكمال التعاقد وتفعيل التمويل وفق الإجراءات المعتمدة.",
            en: "After review and approval, contracting is completed and financing is activated according to approved procedures."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "ابدأ خطوة نحو عقارك القادم",
        en: "Start a Step Toward Your Next Property"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة خيارات التمويل العقاري والوثائق المطلوبة حسب حالتك.",
        en: "Contact the bank to learn real estate financing options and documents required for your case."
      }
    },
    relatedServicesKeys: [
      "personalFinance",
      "smallProjects",
      "current"
    ]
  },
  {
    slug: "financing-business",
    section: "personal",
    title: {
      ar: "تمويل المشاريع الصغيرة",
      en: "Small Projects Financing"
    },
    subtitle: {
      ar: "تمويل يساعد أصحاب المشاريع الصغيرة على التشغيل والتوسع وشراء الأصول الأساسية",
      en: "Financing that helps small business owners operate, expand, and acquire essential assets"
    },
    heroImage: "/images/customer-services/Current-account-removebg-preview.png",
    breadcrumbs: [
      {
        labelKey: "nav.personalBanking",
        href: "/personal-banking"
      },
      {
        labelKey: "nav.smallProjects",
        label: {
          ar: "تمويل المشاريع الصغيرة",
          en: "Small Projects Financing"
        }
      }
    ],
    tagline: {
      ar: "منتجات التمويل",
      en: "Financing Products"
    },
    primaryCta: {
      label: {
        ar: "قدّم طلب التمويل",
        en: "Apply for Financing"
      },
      href: "/contact"
    },
    seoDescription: {
      ar: "تمويل المشاريع الصغيرة والمتوسطة من بنك بن دول. ادعم نمو نشاطك التجاري مع حلول تمويلية مرنة، هوامش ربح تنافسية، وفترات سداد مريحة مصممة لنجاح مشروعك.",
      en: "Small and Medium Enterprise (SME) Financing from Bindowal Bank. Support your business growth with flexible financing solutions, competitive profit margins, and convenient repayment periods designed for your project's success.",
    },
    overview: {
      title: { ar: "نبذة تعريفية", en: "Overview" },
      description: {
        ar: "في بنك بن دول، نؤمن بأن المشاريع الصغيرة والمتوسطة هي محرك الاقتصاد. لذا، نقدم حلول تمويل الأعمال المصممة خصيصاً لتلبية احتياجات التجار وأصحاب المهن الحرة والشركات الناشئة، لمساعدتكم على توسيع نطاق أعمالكم وتحويل رؤيتكم إلى واقع ملموس بصيغ تمويل إسلامية موثوقة.",
        en: "At Bindowal Bank, we believe that SMEs are the engine of the economy. Therefore, we offer business financing solutions specifically designed to meet the needs of merchants, freelancers, and startups, helping you expand your business and turn your vision into reality with reliable Islamic financing formulas.",
      },
    },
    why: {
      title: { ar: "لماذا تختار تمويلنا للأعمال؟", en: "Why Choose Our Business Financing?" },
      description: {
        ar: "لأن نجاح مشروعك هو نجاح لنا، نوفر لك الأدوات المالية التي تمنحك ميزة تنافسية وتدفقات نقدية مستقرة.",
        en: "Because your project's success is our success, we provide financial tools that give you a competitive edge and stable cash flow.",
      },
      items: [
        { id: "why-bf-1", text: { ar: "تمويل مخصص يتناسب مع دورة الإيرادات والتدفقات النقدية لمشروعك.", en: "Customized financing that fits your project's revenue cycle and cash flows." } },
        { id: "why-bf-2", text: { ar: "فترات سماح مرنة تراعي فترات التأسيس أو النمو للمشاريع الجديدة.", en: "Flexible grace periods considering the foundation or growth periods of new projects." } },
        { id: "why-bf-3", text: { ar: "إمكانية تمويل شراء الأصول والمعدات أو توفير رأس المال العامل.", en: "Possibility of financing asset and equipment purchases or providing working capital." } },
      ],
    },
    featureCards: {
      title: { ar: "مميزات تمويل الأعمال", en: "Business Financing Features" },
      items: [
        { id: "fc-bf-1", title: { ar: "مبالغ تمويل مرنة", en: "Flexible Financing Amounts" }, description: { ar: "تمويل يبدأ من مبالغ بسيطة للمهن الحرة ويصل لمبالغ كبيرة للشركات القائمة.", en: "Financing starting from small amounts for freelancers up to large amounts for established companies." } },
        { id: "fc-bf-2", title: { ar: "سرعة في اتخاذ القرار", en: "Fast Decision Making" }, description: { ar: "دراسة ائتمانية سريعة لضمان عدم تعطل سير أعمالكم.", en: "Quick credit study to ensure your business operations are not disrupted." } },
        { id: "fc-bf-3", title: { ar: "دعم فني واستشاري", en: "Technical & Advisory Support" }, description: { ar: "استشارات مالية مرافقة للتمويل لمساعدتكم في إدارة مواردكم بكفاءة.", en: "Financial advice accompanying the financing to help you manage your resources efficiently." } },
        { id: "fc-bf-4", title: { ar: "بدون تعقيدات", en: "Hassle-Free" }, description: { ar: "متطلبات توثيق وضمانات ميسرة تتناسب مع حجم وطبيعة كل مشروع.", en: "Easy documentation requirements and guarantees commensurate with each project's size and nature." } },
      ],
    },
    audience: {
      title: { ar: "القطاعات المستهدفة", en: "Target Sectors" },
      items: [
        { id: "aud-bf-1", text: { ar: "التجار في قطاع التجزئة والجملة والموزعين.", en: "Retail and wholesale merchants and distributors." } },
        { id: "aud-bf-2", text: { ar: "أصحاب الورش، المصانع الصغيرة، والأنشطة المهنية.", en: "Workshop owners, small factories, and professional activities." } },
        { id: "aud-bf-3", text: { ar: "قطاع الخدمات كالمطاعم، المقاهي، ومراكز التجميل.", en: "Service sector such as restaurants, cafes, and beauty centers." } },
      ],
    },
    requirementsSection: {
      title: { ar: "متطلبات التقدم للتمويل", en: "Application Requirements" },
      items: [
        { id: "req-bf-1", text: { ar: "وجود سجل تجاري وتراخيص مزاولة النشاط سارية المفعول.", en: "A valid commercial registration and business activity licenses." } },
        { id: "req-bf-2", text: { ar: "كشف حساب بنكي للنشاط يوضح حركة التداول لآخر 6 أشهر.", en: "A business bank account statement showing transaction activity for the last 6 months." } },
        { id: "req-bf-3", text: { ar: "دراسة جدوى مبسطة أو خطة عمل توضح كيفية استخدام التمويل.", en: "A simplified feasibility study or business plan showing how the financing will be used." } },
      ],
    },
    stepsSection: {
      title: { ar: "خطوات نمو مشروعك", en: "Steps to Project Growth" },
      steps: [
        { id: "step-bf-1", title: { ar: "المقابلة الأولية", en: "Initial Interview" }, description: { ar: "ناقش احتياجات مشروعك مع مسؤول تمويل المنشآت في أقرب فرع.", en: "Discuss your project needs with an enterprise financing officer at the nearest branch." } },
        { id: "step-bf-2", title: { ar: "تقديم المستندات", en: "Document Submission" }, description: { ar: "سلم الأوراق الرسمية والقوائم المالية الخاصة بنشاطك التجاري.", en: "Submit official papers and financial statements for your business." } },
        { id: "step-bf-3", title: { ar: "الحصول على السيولة", en: "Get Liquidity" }, description: { ar: "بعد الموافقة، يتم تفعيل التمويل لتبدأ في تنفيذ خطط التوسع والنمو.", en: "Upon approval, financing is activated for you to begin implementing expansion and growth plans." } },
      ],
    },
    ctaSection: {
      title: { ar: "نمو أعمالك يبدأ من هنا", en: "Your Business Growth Starts Here" },
      description: { ar: "كن شريكنا في النجاح واحصل على التمويل الذي يحتاجه مشروعك للوصول إلى آفاق جديدة.", en: "Be our partner in success and get the financing your project needs to reach new horizons." },
      primaryLabel: { ar: "قدم طلب تمويل عملك", en: "Apply for Business Financing" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "تواصل مع مستشار", en: "Contact a Consultant" },
      secondaryHref: "tel:+967000000000",
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
      items: [
        { id: "faq-bf-1", question: { ar: "هل يشترط وجود ضمانات عقارية لتمويل المشاريع؟", en: "Is real estate collateral required for project financing?" }, answer: { ar: "ليس بالضرورة، نوفر خيارات تمويل تعتمد على ضمانات تجارية، كفالات، أو رهن أصول ومعدات المشروع نفسه.", en: "Not necessarily; we offer financing options based on commercial guarantees, sureties, or pledging project assets and equipment." } },
        { id: "faq-bf-2", question: { ar: "ما هي فترة التمويل المتاحة للمشاريع؟", en: "What is the available financing period for projects?" }, answer: { ar: "تتراوح فترات السداد بين 12 شهراً لتغطية رأس المال العامل وتصل لعدة سنوات لتمويل الأصول الثابتة.", en: "Repayment periods range from 12 months for working capital up to several years for fixed asset financing." } },
        { id: "faq-bf-3", question: { ar: "هل يمكن للمشاريع الناشئة الحصول على تمويل؟", en: "Can startups get financing?" }, answer: { ar: "نعم، ندعم المشاريع الناشئة التي تمتلك فكرة واعدة ودراسة جدوى قوية وتراخيص نظامية مكتملة.", en: "Yes, we support startups with a promising idea, strong feasibility study, and complete regulatory licenses." } },
        { id: "faq-bf-4", question: { ar: "كيف يتم صرف مبلغ التمويل؟", en: "How is the financing amount disbursed?" }, answer: { ar: "قد يتم صرف المبلغ دفعة واحدة أو على دفعات مرتبطة بمراحل تنفيذ المشروع أو فواتير الشراء.", en: "The amount may be disbursed in one lump sum or in installments linked to project implementation stages or purchase invoices." } },
      ],
    },
    details: {
      title: {
        ar: "ما الذي يقدمه تمويل المشاريع الصغيرة؟",
        en: "What Does Small Projects Financing Offer?"
      },
      subtitle: {
        ar: "يوفر تمويل المشاريع الصغيرة دعمًا ماليًا منظمًا لأصحاب الأنشطة القائمة أو الناشئة لشراء معدات، زيادة رأس المال العامل، تطوير نقطة البيع، أو تغطية احتياجات تشغيلية مؤهلة.",
        en: "Small projects financing provides structured financial support for existing or emerging businesses to purchase equipment, increase working capital, develop a sales point, or cover eligible operating needs."
      },
      features: [
        {
          id: "feature-1",
          text: {
            ar: "تمويل موجه للتجار وأصحاب المشاريع الصغيرة والأنشطة المهنية المؤهلة.",
            en: "Financing directed to merchants, small business owners, and eligible professional activities."
          }
        },
        {
          id: "feature-2",
          text: {
            ar: "دعم احتياجات مثل رأس المال العامل، المعدات، المخزون، أو تحسين مقر النشاط.",
            en: "Support needs such as working capital, equipment, inventory, or improving the business location."
          }
        },
        {
          id: "feature-3",
          text: {
            ar: "دراسة للأنشطة والتدفقات المتوقعة بما يساعد على تحديد ملاءمة التمويل.",
            en: "Review of business activity and expected cash flows to help determine financing suitability."
          }
        },
        {
          id: "feature-4",
          text: {
            ar: "إمكانية ربط المشروع بخدمات مصرفية مساندة مثل الحسابات، نقاط البيع، أو القنوات الرقمية عند توفرها.",
            en: "The project may be linked with supporting banking services such as accounts, POS, or digital channels when available."
          }
        }
      ]
    },
    benefits: {
      title: {
        ar: "دعم عملي لنمو النشاط",
        en: "Practical Support for Business Growth"
      },
      subtitle: {
        ar: "يساعد هذا التمويل أصحاب المشاريع على الانتقال من إدارة الاحتياج اليومي إلى تخطيط أكثر استقرارًا للتشغيل والتوسع، مع إبقاء الالتزامات ضمن قدرة النشاط على السداد.",
        en: "This financing helps business owners move from managing daily needs to more stable planning for operations and growth while keeping obligations within the business’s repayment capacity."
      },
      items: [
        {
          id: "benefit-1",
          text: {
            ar: "تحسين قدرة المشروع على شراء المخزون أو المعدات اللازمة.",
            en: "Improve the project’s ability to purchase inventory or required equipment."
          }
        },
        {
          id: "benefit-2",
          text: {
            ar: "توفير سيولة تشغيلية تساعد على استمرارية النشاط اليومي.",
            en: "Provide operating liquidity that supports daily business continuity."
          }
        },
        {
          id: "benefit-3",
          text: {
            ar: "دعم خطط التوسع الصغيرة مثل إضافة خدمة أو تطوير نقطة البيع.",
            en: "Support small expansion plans such as adding a service or improving the point of sale."
          }
        },
        {
          id: "benefit-4",
          text: {
            ar: "تنظيم العلاقة المالية بين صاحب المشروع والبنك عبر حساب وخطة سداد واضحة.",
            en: "Organize the financial relationship between the business owner and the bank through an account and clear repayment plan."
          }
        }
      ]
    },
    howToGet: {
      title: {
        ar: "دراسة نشاط المشروع واحتياجه",
        en: "Review of Business Activity and Need"
      },
      subtitle: {
        ar: "تحتاج دراسة الطلب إلى معرفة طبيعة النشاط، مدة التشغيل، حجم المبيعات أو التدفقات، والغرض من التمويل، مع تقديم المستندات الداعمة حسب نوع المشروع.",
        en: "Application review requires understanding the business nature, operating period, sales or cash flows, and financing purpose, with supporting documents based on project type."
      },
      requirements: [
        {
          id: "req-1",
          text: {
            ar: "هوية مالك المشروع وبيانات تواصل محدثة.",
            en: "Business owner ID and updated contact details."
          }
        },
        {
          id: "req-2",
          text: {
            ar: "معلومات النشاط مثل الموقع، نوع الخدمة أو المنتج، وفترة التشغيل.",
            en: "Business information such as location, service or product type, and operating period."
          }
        },
        {
          id: "req-3",
          text: {
            ar: "مستندات داعمة مثل سجل تجاري، رخصة، فواتير، أو كشف مبيعات عند الحاجة.",
            en: "Supporting documents such as a commercial record, license, invoices, or sales statement when required."
          }
        }
      ],
      channels: [
        {
          id: "ch-1",
          text: {
            ar: "زيارة الفرع لتقديم معلومات المشروع ومناقشة الاحتياج التمويلي.",
            en: "Visit a branch to provide business information and discuss the financing need."
          }
        },
        {
          id: "ch-2",
          text: {
            ar: "التواصل مع خدمة العملاء لمعرفة الوثائق المطلوبة حسب طبيعة النشاط.",
            en: "Contact customer service to learn required documents based on business activity."
          }
        },
        {
          id: "ch-3",
          text: {
            ar: "ربط النشاط بخدمات الحسابات أو نقاط البيع عند توفرها وبعد الموافقة.",
            en: "Link the business with accounts or POS services when available and after approval."
          }
        }
      ]
    },
    subscribe: {
      title: {
        ar: "من احتياج المشروع إلى خطة تمويل",
        en: "From Business Need to Financing Plan"
      },
      subtitle: {
        ar: "تمر الخدمة بتحديد احتياج المشروع، تقديم المستندات، دراسة النشاط، ثم اعتماد التمويل وتنظيم السداد وفق السياسة المعتمدة.",
        en: "The service goes through identifying the business need, submitting documents, reviewing the activity, then approving financing and organizing repayment according to approved policy."
      },
      steps: [
        {
          id: "step-1",
          title: {
            ar: "تحديد الغرض",
            en: "Define Purpose"
          },
          description: {
            ar: "حدد هل التمويل للمخزون، المعدات، رأس المال العامل، أو التوسع البسيط.",
            en: "Define whether financing is for inventory, equipment, working capital, or small expansion."
          }
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم معلومات النشاط",
            en: "Submit Business Details"
          },
          description: {
            ar: "قدّم بيانات المشروع والمستندات الداعمة التي توضح نشاطه وقدرته على السداد.",
            en: "Submit business details and supporting documents that show activity and repayment capacity."
          }
        },
        {
          id: "step-3",
          title: {
            ar: "الاعتماد والصرف",
            en: "Approval and Disbursement"
          },
          description: {
            ar: "بعد دراسة الطلب واستيفاء الشروط، يتم استكمال الإجراءات وتنفيذ التمويل حسب الآلية المعتمدة.",
            en: "After application review and fulfillment of conditions, procedures are completed and financing is executed according to the approved process."
          }
        }
      ]
    },
    nextStep: {
      title: {
        ar: "امنح مشروعك مساحة أكبر للنمو",
        en: "Give Your Business More Room to Grow"
      },
      description: {
        ar: "تواصل مع البنك لمعرفة خيارات تمويل المشاريع الصغيرة والمتطلبات المناسبة لنشاطك.",
        en: "Contact the bank to learn small projects financing options and requirements suitable for your activity."
      }
    },
    relatedServicesKeys: [
      "personalFinance",
      "realEstate",
      "pos"
    ]
  },
  {
    slug: "financing-takamul",
    section: "personal",
    title: {
      ar: "تمويل تكامل للطاقة البديلة | بنك بن دول",
      en: "Takamul Alternative Energy Financing | Bindowal Bank"
    },
    subtitle: {
      ar: "عشان تحل مشكلة انقطاع الكهرباء، اطلب منتجات الطاقة البديلة عبر تمويل تكامل بخطط ميسرة ومتوافقة مع الشريعة",
      en: "To solve power outages, request alternative energy products through Takamul financing with easy, Sharia-compliant plans"
    },
    heroImage: "/images/financing-services/3.webp",
    breadcrumbs: [
      { labelKey: "nav.specializedServices", href: "/specialized-services" },
      { labelKey: "nav.financingTakamul", label: { ar: "تمويل تكامل", en: "Takamul" } }
    ],
    tagline: {
      ar: "تمويل تكامل",
      en: "Takamul Financing"
    },
    primaryCta: {
      label: { ar: "قدّم طلبك الآن", en: "Apply Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "تمويل تكامل من بنك بن دول يوفر لك حلول الطاقة البديلة والمستدامة للتغلب على مشكلة انقطاع الكهرباء في اليمن بأقساط مرنة متوافقة مع الشريعة.",
      en: "Takamul financing from Bin Dowal Bank provides alternative and sustainable energy solutions to overcome power outages in Yemen with flexible, Sharia-compliant installments."
    },
    overview: {
      title: { ar: "ما هو تمويل تكامل؟", en: "What is Takamul Financing?" },
      description: {
        ar: "انقطاع الكهرباء يمثل عائقًا لحياتك اليومية وعملك؟ بنك بن دول يقدم لك الحل الأمثل عبر منتج تمويل 'تكامل' المخصص لمنتجات الطاقة البديلة والمتجددة. يتيح لك هذا التمويل الحصول على منظومات طاقة شمسية متكاملة، ألواح شمسية، بطاريات، ومحولات طاقة عالية الجودة، وتوزيع التكلفة على أقساط مريحة تتناسب مع دخلك ومتوافقة بالكامل مع الشريعة الإسلامية لتنعم بكهرباء مستمرة دون انقطاع.",
        en: "Are power outages disrupting your daily life or business? Bin Dowal Bank offers you the ideal solution through the 'Takamul' financing product, dedicated to alternative and renewable energy products. This financing allows you to acquire complete solar energy systems, panels, batteries, and high-quality inverters, spreading the cost over comfortable installments that suit your income and are fully Sharia-compliant."
      }
    },
    why: {
      title: { ar: "لماذا تختار تمويل تكامل؟", en: "Why Choose Takamul Financing?" },
      items: [
        { id: "why-tk-1", text: { ar: "حلول مستدامة لحل مشكلة الكهرباء نهائياً.", en: "Sustainable solutions to permanently resolve power issues." } },
        { id: "why-tk-2", text: { ar: "شراء منظومات ذات جودة وكفاءة عالية لتدوم طويلاً.", en: "Purchase high-quality and efficient systems to last long." } },
        { id: "why-tk-3", text: { ar: "أقساط مرنة وفترات سداد ميسرة لراحتك المالية.", en: "Flexible installments and easy repayment periods for your financial comfort." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تمويل تكامل للطاقة البديلة", en: "Features of Takamul Alternative Energy Financing" },
      items: [
        {
          id: "fc-tk-1",
          title: { ar: "منظومات شمسية متكاملة", en: "Complete Solar Systems" },
          description: { ar: "تمويل كافة مكونات المنظومة من ألواح وبطاريات ومحولات وأسلاك تركيب.", en: "Financing all system components including panels, batteries, inverters, and mounting wires." }
        },
        {
          id: "fc-tk-2",
          title: { ar: "متوافق مع الشريعة", en: "Sharia Compliant" },
          description: { ar: "كافة المعاملات تتم عبر صيغة المرابحة الإسلامية المعتمدة.", en: "All transactions are carried out via the approved Islamic Murabaha formula." }
        },
        {
          id: "fc-tk-3",
          title: { ar: "سرعة التنفيذ والصرف", en: "Fast Execution" },
          description: { ar: "إجراءات مبسطة لشراء وتركيب المنظومة بسرعة فائقة وضمان كفاءتها.", en: "Simplified procedures to purchase and install the system quickly, ensuring its efficiency." }
        },
        {
          id: "fc-tk-4",
          title: { ar: "فترة سداد ملائمة", en: "Suitable Repayment Period" },
          description: { ar: "خطط سداد مريحة تضمن عدم إثقال كاهل ميزانيتك الشهرية.", en: "Comfortable payment plans ensuring no extra burden on your monthly budget." }
        }
      ]
    },
    audience: {
      title: { ar: "من يمكنه الاستفادة من تمويل تكامل؟", en: "Who Can Benefit from Takamul?" },
      items: [
        { id: "aud-tk-1", text: { ar: "أصحاب المنازل الراغبين في طاقة مستقرة ونظيفة.", en: "Homeowners desiring stable and clean power." } },
        { id: "aud-tk-2", text: { ar: "أصحاب المشاريع الصغيرة والورش والمحلات التجارية.", en: "Owners of small projects, workshops, and commercial shops." } },
        { id: "aud-tk-3", text: { ar: "الموظفون في القطاعات العامة والخاصة.", en: "Employees in public and private sectors." } }
      ]
    },
    requirementsSection: {
      title: { ar: "متطلبات التقديم والشروط", en: "Application Requirements & Conditions" },
      items: [
        { id: "req-tk-1", text: { ar: "عرض سعر معتمد للمنظومة الشمسية من جهة معتمدة لدى البنك.", en: "Approved price quotation for the solar system from a supplier approved by the bank." } },
        { id: "req-tk-2", text: { ar: "هوية سارية المفعول (بطاقة شخصية أو جواز سفر).", en: "Valid identification (National ID or Passport)." } },
        { id: "req-tk-3", text: { ar: "إثبات القدرة على السداد (تعريف بالراتب أو كشف حساب للنشاط التجاري).", en: "Proof of repayment ability (salary certificate or business account statement)." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات الحصول على تمويل تكامل", en: "Steps to Obtain Takamul Financing" },
      steps: [
        {
          id: "step-tk-1",
          title: { ar: "اختيار المنظومة وعرض السعر", en: "Select System & Get Quote" },
          description: { ar: "حدد احتياجك واحصل على عرض سعر من مورد معتمد لدى البنك.", en: "Define your power needs and get a price quote from an approved supplier." }
        },
        {
          id: "step-tk-2",
          title: { ar: "تقديم الطلب والمستندات", en: "Submit Application & Documents" },
          description: { ar: "قم بزيارة أقرب فرع لتقديم طلب التمويل مع المستندات المطلوبة.", en: "Visit the nearest branch to submit the financing application with required documents." }
        },
        {
          id: "step-tk-3",
          title: { ar: "الشراء والتركيب", en: "Purchase & Installation" },
          description: { ar: "بعد الموافقة، يشتري البنك المنظومة ويملكها لك لتبدأ عملية التركيب والتشغيل.", en: "Upon approval, the bank purchases the system and owns it to you to start installation and operation." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "لا تعش في الظلام بعد الآن…", en: "Don't live in the dark anymore..." },
      description: { ar: "أطلب تمويل تكامل الآن لتنعم بكهرباء نظيفة ومستمرة لمنزلك أو مشروعك بضمان بنك بن دول.", en: "Apply for Takamul financing now to enjoy clean and continuous electricity for your home or project, guaranteed by Bin Dowal Bank." },
      primaryLabel: { ar: "قدم طلبك اليوم", en: "Apply Today" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول تمويل تكامل", en: "Takamul Financing FAQs" },
      items: [
        {
          id: "faq-tk-1",
          question: { ar: "ما هي المنتجات التي يشملها تمويل تكامل؟", en: "What products are covered by Takamul?" },
          answer: { ar: "يشمل التمويل كافة مكونات منظومات الطاقة البديلة كالألواح الشمسية، البطاريات (الجل والليثيوم)، محولات الطاقة (الانفيرترات)، سخانات المياه الشمسية، ومضخات المياه بالطاقة الشمسية.", en: "The financing covers all alternative energy system components such as solar panels, batteries (gel and lithium), inverters, solar water heaters, and solar-powered water pumps." }
        },
        {
          id: "faq-tk-2",
          question: { ar: "هل يشترط مورد محدد للمنظومة؟", en: "Is a specific supplier required for the system?" },
          answer: { ar: "يمكن للعميل اختيار أي مورد معتمد يقدم مواصفات فنية جيدة، وسيقوم البنك بشراء المنظومة منه بالمرابحة.", en: "The client can choose any approved supplier offering good technical specifications, and the bank will purchase the system from them via Murabaha." }
        }
      ]
    },
    relatedServicesKeys: ["financing-home", "financing-business", "financing-personal"]
  },
  {
    slug: "financing-thimar",
    section: "personal",
    title: {
      ar: "تمويل ثمار للمشاريع الصغيرة في اليمن | بنك بن دول للتمويل الأصغر الإسلامي",
      en: "Thimar Financing for Small Projects in Yemen | Bindowal Islamic Microfinance Bank"
    },
    subtitle: {
      ar: "كل مشروع ناجح يحتاج إلى تمويل يساعده على النمو في الوقت المناسب. إذا كنت تخطط لتوسيع نشاطك التجاري أو تطوير مشروعك القائم، فإن تمويل ثمار من بنك بن دول يوفر لك حلاً تمويليًا متوافقًا مع أحكام الشريعة الإسلامية، يساعدك على تنمية أعمالك بثقة وإجراءات ميسرة.",
      en: "Every successful project needs financing to help it grow at the right time. If you're planning to expand your business or develop an existing project, Thimar financing from Bin Dowal Bank offers a Sharia-compliant financing solution to help you grow with confidence through simple procedures."
    },
    heroImage: "/images/financing-services/2.webp",
    breadcrumbs: [
      { labelKey: "nav.specializedServices", href: "/specialized-services" },
      { labelKey: "nav.financingThimar", label: { ar: "تمويل ثمار", en: "Thimar" } }
    ],
    tagline: {
      ar: "دعم المنشآت والأعمال",
      en: "Business & SME Support"
    },
    primaryCta: {
      label: { ar: "ابدأ نمو مشروعك", en: "Start Growing Your Project" },
      href: "/contact"
    },
    seoDescription: {
      ar: "احصل على تمويل ثمار من بنك بن دول لتمويل المشاريع الصغيرة والمتوسطة في اليمن، وفق أحكام الشريعة الإسلامية، بإجراءات ميسرة وضمانات معتمدة تساعدك على تطوير مشروعك وتنمية أعمالك.",
      en: "Get Thimar financing from Bin Dowal Bank to fund small and medium enterprises in Yemen, in accordance with Islamic Sharia principles, with easy procedures and approved guarantees to help you develop and grow your business."
    },
    overview: {
      title: { ar: "ما هو تمويل ثمار؟", en: "What is Thimar Financing?" },
      description: {
        ar: "صُمم تمويل ثمار لدعم أصحاب المشاريع الصغيرة والمتوسطة ورواد الأعمال، من خلال توفير تمويل يساعد على شراء الأصول أو توسيع النشاط أو زيادة رأس المال التشغيلي، بما يتوافق مع أحكام الشريعة الإسلامية وسياسة البنك.",
        en: "Thimar financing was designed to support small and medium enterprise owners and entrepreneurs by providing financing that helps purchase assets, expand activities, or increase working capital, in accordance with Islamic Sharia principles and bank policy."
      }
    },
    intro: {
      ar: "كل مشروع ناجح يحتاج إلى تمويل يساعده على النمو في الوقت المناسب. إذا كنت تخطط لتوسيع نشاطك التجاري أو تطوير مشروعك القائم، فإن تمويل ثمار من بنك بن دول يوفر لك حلاً تمويليًا متوافقًا مع أحكام الشريعة الإسلامية، يساعدك على تنمية أعمالك بثقة وإجراءات ميسرة.",
      en: "Every successful project needs financing to help it grow at the right time. If you are planning to expand your business or develop your existing project, Thimar financing from Bin Dowal Bank provides you with a Sharia-compliant financing solution that helps you grow your business with confidence and easy procedures."
    },
    why: {
      title: { ar: "لماذا تختار تمويل ثمار؟", en: "Why Choose Thimar Financing?" },
      items: [
        { id: "why-th-1", text: { ar: "تمويل يساعدك على شراء المعدات أو البضائع اللازمة لتوسعة مشروعك.", en: "Financing that helps you purchase equipment or goods needed to expand your project." } },
        { id: "why-th-2", text: { ar: "يدعم زيادة الطاقة التشغيلية للمشروع.", en: "Supports increasing the operational capacity of your project." } },
        { id: "why-th-3", text: { ar: "يساهم في تحسين التدفقات النقدية.", en: "Contributes to improving cash flows." } },
        { id: "why-th-4", text: { ar: "يوفر حلولاً تمويلية تتناسب مع احتياجات أصحاب المشاريع الصغيرة.", en: "Provides financing solutions that suit the needs of small business owners." } },
        { id: "why-th-5", text: { ar: "متوافق مع أحكام الشريعة الإسلامية بما يمنحك راحة وطمأنينة في التعامل.", en: "Compliant with Islamic Sharia principles, giving you peace of mind in dealings." } }
      ]
    },
    serviceTypes: {
      title: { ar: "الضمانات المقبولة", en: "Accepted Guarantees" },
      description: { ar: "يمكنك التقدم بطلب تمويل ثمار باستخدام إحدى الضمانات المعتمدة لدى البنك:", en: "You can apply for Thimar financing using one of the guarantees approved by the bank:" },
      items: [
        {
          id: "type-bg-1",
          title: { ar: "ضمان الذهب", en: "Gold Guarantee" },
          // description: { ar: "ضمانات بنكية تغطي قيمة الذهب.", en: "Bank guarantees covering the value of gold." }
        },
        {
          id: "type-bg-2",
          title: { ar: "ضمان الوديعة", en: "Deposit Guarantee" },
          // description: { ar: "تضمن تنفيذ الأعمال أو الخدمات وفقًا لشروط العقد.", en: "Guarantees the execution of works or services in accordance with contract terms." }
        },
        {
          id: "type-bg-3",
          title: { ar: "الضمانات التجارية أو أي ضمانات أخرى يعتمدها البنك بعد دراسة الطلب", en: "Commercial guarantees or any other guarantees approved by the bank after studying the application" },
          // description: { ar: "تغطي المبالغ المدفوعة مقدمًا للموردين أو المقاولين.", en: "Covers amounts paid in advance to suppliers or contractors." }
        }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تمويل ثمار للمشاريع", en: "Features of Thimar Business Financing" },
      items: [
        {
          id: "fc-th-1",
          title: { ar: "خطط مالية مدروسة", en: "Well-Studied Financial Plans" },
          description: { ar: "أقساط تتناسب مع التدفقات النقدية المتوقعة لمشروعك لتجنب أي تعثر مالي.", en: "Installments matching your project's expected cash flows to avoid any financial defaults." }
        },
        {
          id: "fc-th-2",
          title: { ar: "تمويل أصول تشغيلية", en: "Operating Asset Financing" },
          description: { ar: "شراء وتوفير الآلات والمعدات، والمواد الخام، وتوسيع الفروع والأنشطة.", en: "Purchase and provision of machinery, equipment, raw materials, and branch expansion." }
        },
        {
          id: "fc-th-3",
          title: { ar: "متوافق مع الضوابط الشرعية", en: "Sharia Compliant" },
          description: { ar: "تطبيق صيغ تمويلية متوافقة مع أحكام الشريعة الإسلامية.", en: "Application of financing formulas compliant with Islamic Sharia principles." }
        },
        {
          id: "fc-th-4",
          title: { ar: "إجراءات ميسرة", en: "Easy Procedures" },
          description: { ar: "إجراءات تقديم مبسطة تناسب أصحاب المشاريع الصغيرة وتوفر لهم الوقت والجهد.", en: "Simplified application procedures that suit small business owners and save them time and effort." }
        }
      ]
    },
    guaranteesSection: {
      title: { ar: "الضمانات المقبولة", en: "Accepted Guarantees" },
      description: {
        ar: "يمكنك التقدم بطلب تمويل ثمار باستخدام إحدى الضمانات المعتمدة لدى البنك:",
        en: "You can apply for Thimar financing using one of the bank-approved guarantees:"
      },
      items: [
        { id: "guar-th-1", text: { ar: "ضمان الذهب.", en: "Gold guarantee." } },
        { id: "guar-th-2", text: { ar: "ضمان الوديعة.", en: "Deposit guarantee." } },
        { id: "guar-th-3", text: { ar: "الضمانات التجارية أو أي ضمانات أخرى يعتمدها البنك بعد دراسة الطلب.", en: "Commercial guarantees or any other guarantees approved by the bank after reviewing the application." } }
      ]
    },
    audience: {
      title: { ar: "المستهدفون من تمويل ثمار", en: "Who is Thimar Financing For?" },
      items: [
        { id: "aud-th-1", text: { ar: "أصحاب المشاريع التجارية.", en: "Commercial business owners." } },
        { id: "aud-th-2", text: { ar: "أصحاب الورش والمنشآت الإنتاجية.", en: "Owners of workshops and production facilities." } },
        { id: "aud-th-3", text: { ar: "رواد الأعمال الراغبون في إطلاق أو تطوير مشاريعهم.", en: "Entrepreneurs wishing to launch or develop their projects." } },
        { id: "aud-th-4", text: { ar: "أصحاب الأنشطة الخدمية.", en: "Service activity owners." } },
        { id: "aud-th-5", text: { ar: "المؤسسات الصغيرة والمتوسطة الباحثة عن تمويل متوافق مع الشريعة الإسلامية.", en: "Small and medium enterprises seeking Sharia-compliant financing." } }
      ]
    },
    stepsSection: {
      title: { ar: "كيفية الحصول على تمويل ثمار؟", en: "How to Get Thimar Financing?" },
      steps: [
        {
          id: "step-th-1",
          title: { ar: "زيارة أقرب فرع", en: "Visit the Nearest Branch" },
          description: { ar: "زر أقرب فرع لبنك بن دول للاستفسار والحصول على المعلومات اللازمة.", en: "Visit the nearest Bin Dowal Bank branch to inquire and get the necessary information." }
        },
        {
          id: "step-th-2",
          title: { ar: "تقديم الطلب واستكمال المستندات", en: "Submit Application & Complete Documents" },
          description: { ar: "قدّم طلب التمويل واستكمل المستندات المطلوبة وفق متطلبات البنك.", en: "Submit the financing application and complete the required documents as per bank requirements." }
        },
        {
          id: "step-th-3",
          title: { ar: "دراسة الطلب", en: "Application Review" },
          description: { ar: "يقوم البنك بدراسة الطلب وفق سياساته المعتمدة.", en: "The bank reviews the application according to its approved policies." }
        },
        {
          id: "step-th-4",
          title: { ar: "الموافقة وصرف التمويل", en: "Approval & Disbursement" },
          description: { ar: "عند الموافقة، يتم استكمال إجراءات التمويل وصرفه. ولمعرفة تفاصيل التمويل وشروطه، يسعدنا استقبالكم في أقرب فرع.", en: "Upon approval, the financing procedures are completed and funds are disbursed. For financing details and conditions, we welcome you at the nearest branch." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "ابدأ اليوم في تطوير مشروعك", en: "Start Developing Your Project Today" },
      description: { ar: "ابدأ اليوم في تطوير مشروعك مع تمويل ثمار من بنك بن دول. زر أقرب فرع، وتعرف على قيمة التمويل المناسبة وابدأ إجراءات التقديم مع فريقنا المختص.", en: "Start developing your project today with Thimar financing from Bin Dowal Bank. Visit the nearest branch, learn about the appropriate financing amount, and begin application procedures with our specialized team." },
      primaryLabel: { ar: "قدم طلبك اليوم", en: "Apply Today" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول تمويل ثمار", en: "Thimar Financing FAQs" },
      items: [
        {
          id: "faq-th-1",
          question: { ar: "ما هو تمويل ثمار؟", en: "What is Thimar Financing?" },
          answer: { ar: "هو تمويل يقدمه بنك بن دول لدعم المشاريع الصغيرة وتعزيز التمكين الاقتصادي، وفق أحكام الشريعة الإسلامية.", en: "It is financing provided by Bin Dowal Bank to support small projects and enhance economic empowerment, in accordance with Islamic Sharia principles." }
        },
        {
          id: "faq-th-2",
          question: { ar: "هل تمويل ثمار متوافق مع الشريعة الإسلامية؟", en: "Is Thimar Financing Sharia-compliant?" },
          answer: { ar: "نعم، يتم تقديم التمويل وفق أحكام الشريعة الإسلامية.", en: "Yes, the financing is provided in accordance with Islamic Sharia principles." }
        },
        {
          id: "faq-th-3",
          question: { ar: "ما الضمانات المقبولة للحصول على التمويل؟", en: "What guarantees are accepted to obtain financing?" },
          answer: { ar: "يمكن التقديم باستخدام ضمان الذهب، أو ضمان الوديعة، أو الضمان التجاري، وفق سياسة البنك.", en: "You can apply using a gold guarantee, deposit guarantee, or commercial guarantee, according to bank policy." }
        },
        {
          id: "faq-th-4",
          question: { ar: "كيف يمكنني التقديم على تمويل ثمار؟", en: "How can I apply for Thimar Financing?" },
          answer: { ar: "يمكنك زيارة أقرب فرع لبنك بن دول للحصول على التفاصيل وتقديم طلب التمويل.", en: "You can visit the nearest Bin Dowal Bank branch to get details and submit the financing application." }
        }
      ]
    },
    relatedServicesKeys: ["financing-business", "financing-personal", "current-account"]
  },
  {
    slug: "financing-taameer",
    section: "personal",
    title: {
      ar: "تمويل تعمير",
      en: "Ta'meer Financing"
    },
    subtitle: {
      ar: "تمويل بناء المنازل والمشاريع الإنشائية في اليمن",
      en: "Financing Home Construction and Building Projects in Yemen"
    },
    heroImage: "/images/financing-services/6.webp",
    breadcrumbs: [
      { labelKey: "nav.specializedServices", href: "/specialized-services" },
      { labelKey: "nav.financingTaameer", label: { ar: "تمويل تعمير", en: "Ta'meer" } }
    ],
    tagline: {
      ar: "التمويل العقاري والإنشائي",
      en: "Real Estate & Construction"
    },
    primaryCta: {
      label: { ar: "ابنِ مستقبلك الآن", en: "Build Your Future Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "احصل على تمويل تعمير من بنك بن دول لتمويل بناء منزلك أو مشروعك الإنشائي، وفق أحكام الشريعة الإسلامية وبضمانات معتمدة وإجراءات ميسرة.",
      en: "Get Ta'meer financing from Bin Dowal Bank to finance building your home or construction project, in accordance with Islamic Sharia principles with approved guarantees and easy procedures."
    },
    intro: {
      ar: "إذا كنت تخطط لبناء منزل أو تنفيذ مشروع إنشائي، فإن الحصول على التمويل المناسب يساعدك على البدء بثقة وتحقيق أهدافك. مع تمويل تعمير من بنك بن دول، نوفر لك حلول تمويلية متوافقة مع أحكام الشريعة الإسلامية، تساعدك على تمويل أعمال البناء والمشاريع الإعمار وفق سياسة البنك.",
      en: "If you are planning to build a home or implement a construction project, getting the right financing helps you start with confidence and achieve your goals. With Ta'meer financing from Bin Dowal Bank, we provide you with Sharia-compliant financing solutions that help you finance construction works and building projects according to bank policy."
    },
    overview: {
      title: { ar: "ما هو تمويل تعمير؟", en: "What is Ta'meer Financing?" },
      description: {
        ar: "تمويل تعمير هو أحد حلول تمويل البناء في اليمن التي يقدمها بنك بن دول، والمخصص لتمويل بناء المنازل والمشاريع الإعمار. صُمم هذا التمويل لدعم الأفراد الراغبين في تنفيذ مشاريع البناء، من خلال حلول تمويلية تتوافق مع أحكام الشريعة الإسلامية، وتلبي احتياجاتهم وفق سياسة البنك.",
        en: "Ta'meer financing is one of the construction financing solutions in Yemen offered by Bin Dowal Bank, dedicated to financing home construction and building projects. This financing is designed to support individuals wishing to implement construction projects through Sharia-compliant financing solutions that meet their needs according to bank policy."
      }
    },
    why: {
      title: { ar: "لماذا تختار تمويل تعمير؟", en: "Why Choose Ta'meer Financing?" },
      items: [
        { id: "why-tm-1", text: { ar: "تمويل متوافق مع أحكام الشريعة الإسلامية.", en: "Financing compliant with Islamic Sharia principles." } },
        { id: "why-tm-2", text: { ar: "مخصص لبناء المنازل.", en: "Dedicated to home construction." } },
        { id: "why-tm-3", text: { ar: "إجراءات تمويل ميسرة.", en: "Easy financing procedures." } },
        { id: "why-tm-4", text: { ar: "حلول تمويلية تناسب احتياجات العملاء.", en: "Financing solutions that suit customers' needs." } },
        { id: "why-tm-5", text: { ar: "خدمة متوفرة عبر فروع بنك بن دول.", en: "Service available through Bin Dowal Bank branches." } }
      ]
    },
    serviceTypes: {
      title: { ar: "الضمانات المقبولة", en: "Accepted Guarantees" },
      description: { ar: "يمكنك التقدم بطلب تمويل تعمير باستخدام إحدى الضمانات المعتمدة لدى البنك:", en: "You can apply for Ta'meer financing using one of the guarantees approved by the bank:" },
      items: [
        {
          id: "type-bg-1",
          title: { ar: "ضمان الذهب", en: "Gold Guarantee" },
          // description: { ar: "ضمانات بنكية تغطي قيمة الذهب.", en: "Bank guarantees covering the value of gold." }
        },
        {
          id: "type-bg-2",
          title: { ar: "ضمان الوديعة", en: "Deposit Guarantee" },
          // description: { ar: "تضمن تنفيذ الأعمال أو الخدمات وفقًا لشروط العقد.", en: "Guarantees the execution of works or services in accordance with contract terms." }
        },
        {
          id: "type-bg-3",
          title: { ar: "ضمانات أخرى (بحسب سياسات وشروط البنك).", en: "Other guarantees (according to bank policies and terms)." },
          // description: { ar: "تغطي المبالغ المدفوعة مقدمًا للموردين أو المقاولين.", en: "Covers amounts paid in advance to suppliers or contractors." }
        }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تمويل تعمير للبناء والتشييد", en: "Features of Ta'meer Construction Financing" },
      items: [
        {
          id: "fc-tm-1",
          title: { ar: "متوافق مع الشريعة الإسلامية", en: "Sharia-Compliant" },
          description: { ar: "يُقدَّم التمويل وفق أحكام الشريعة الإسلامية لضمان راحة العميل وطمأنينته.", en: "Financing is provided in accordance with Islamic Sharia principles to ensure customer comfort and peace of mind." }
        },
        {
          id: "fc-tm-2",
          title: { ar: "مخصص للبناء والإعمار", en: "Dedicated to Construction" },
          description: { ar: "مخصص لتمويل بناء المنازل والمشاريع الإنشائية لمساعدتك على تحقيق أهدافك البنائية.", en: "Dedicated to financing home construction and building projects to help you achieve your construction goals." }
        },
        {
          id: "fc-tm-3",
          title: { ar: "إجراءات ميسرة", en: "Easy Procedures" },
          description: { ar: "إجراءات تقديم مبسطة توفر الوقت والجهد وتسهّل الحصول على التمويل.", en: "Simplified application procedures that save time and effort and make it easy to obtain financing." }
        },
        {
          id: "fc-tm-4",
          title: { ar: "ضمانات مرنة", en: "Flexible Guarantees" },
          description: { ar: "ضمانات متعددة ومعتمدة تناسب مختلف الفئات وطبيعة المشاريع الإنشائية.", en: "Multiple approved guarantees suitable for different categories and the nature of construction projects." }
        }
      ]
    },
    guaranteesSection: {
      title: { ar: "الضمانات المقبولة", en: "Accepted Guarantees" },
      description: {
        ar: "يمكنك التقدم بطلب تمويل تعمير باستخدام إحدى الضمانات المعتمدة لدى البنك:",
        en: "You can apply for Ta'meer financing using one of the bank-approved guarantees:"
      },
      items: [
        { id: "guar-tm-1", text: { ar: "ضمان الذهب.", en: "Gold guarantee." } },
        { id: "guar-tm-2", text: { ar: "ضمان الوديعة.", en: "Deposit guarantee." } },
        { id: "guar-tm-3", text: { ar: "ضمانات أخرى (بحسب سياسات وشروط البنك).", en: "Other guarantees (according to bank policies and conditions)." } }
      ]
    },
    audience: {
      title: { ar: "من يمكنه الاستفادة من تمويل تعمير؟", en: "Who Can Benefit from Ta'meer Financing?" },
      items: [
        { id: "aud-tm-1", text: { ar: "الموظفون الذين يستلمون مرتباتهم عبر البنك (شريطة وجود اتفاقية مع جهة العمل لتمويل الموظفين).", en: "Employees who receive their salaries through the bank (subject to an agreement with the employer for employee financing)." } },
        { id: "aud-tm-2", text: { ar: "المغتربون والأفراد الذين يتوفر لديهم مصادر دخل منتظمة ويمكنهم تقديم الضمانات المقبولة لدى البنك.", en: "Expatriates and individuals with regular income sources who can provide bank-approved guarantees." } },
        { id: "aud-tm-3", text: { ar: "التجار الذين يرغبون بالحصول على تمويل وعدم استهلاك السيولة الحالية.", en: "Merchants who wish to obtain financing without depleting their current liquidity." } },
        { id: "aud-tm-4", text: { ar: "أي جهة تنطبق عليها الشروط والأحكام الخاصة بالبنك.", en: "Any entity that meets the bank's specific terms and conditions." } }
      ]
    },
    stepsSection: {
      title: { ar: "كيف تحصل على التمويل؟", en: "How to Get Financing?" },
      steps: [
        {
          id: "step-tm-1",
          title: { ar: "زيارة أقرب فرع", en: "Visit the Nearest Branch" },
          description: { ar: "زيارة أقرب فرع لبنك بن دول للاستفسار والحصول على المعلومات اللازمة.", en: "Visit the nearest Bin Dowal Bank branch to inquire and get the necessary information." }
        },
        {
          id: "step-tm-2",
          title: { ar: "تقديم طلب التمويل", en: "Submit Financing Application" },
          description: { ar: "تقديم طلب التمويل واستكمال المستندات والمتطلبات.", en: "Submit the financing application and complete the documents and requirements." }
        },
        {
          id: "step-tm-3",
          title: { ar: "مراجعة الطلب", en: "Application Review" },
          description: { ar: "مراجعة الطلب وفق سياسة البنك.", en: "The application is reviewed according to bank policy." }
        },
        {
          id: "step-tm-4",
          title: { ar: "صرف التمويل", en: "Financing Disbursement" },
          description: { ar: "عند الموافقة، يتم استكمال إجراءات التمويل وصرفه. ولمعرفة تفاصيل التمويل وشروطه، يسعدنا استقبالكم في أقرب فرع.", en: "Upon approval, the financing procedures are completed and funds are disbursed. For financing details and conditions, we welcome you at the nearest branch." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "ابدأ اليوم في تنفيذ مشروعك الإنشائي", en: "Start Your Construction Project Today" },
      description: { ar: "إذا كنت تبحث عن تمويل بناء منزل في اليمن أو تمويل لمشروعك الإنشائي، فإن تمويل تعمير من بنك بن دول يوفر لك الحل المناسب. زر أقرب فرع لبنك بن دول، وتعرّف على تفاصيل التمويل وكيفية التقديم.", en: "If you are looking for home construction financing in Yemen or financing for your construction project, Ta'meer financing from Bin Dowal Bank provides you with the right solution. Visit the nearest Bin Dowal Bank branch and learn about financing details and how to apply." },
      primaryLabel: { ar: "زر أقرب فرع", en: "Visit the Nearest Branch" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول تمويل تعمير", en: "Ta'meer Financing FAQs" },
      items: [
        {
          id: "faq-tm-1",
          question: { ar: "ما هو تمويل تعمير؟", en: "What is Ta'meer Financing?" },
          answer: { ar: "هو تمويل يقدمه بنك بن دول للمساعدة في تمويل بناء المنازل والمشاريع الإنشائية وفق أحكام الشريعة الإسلامية.", en: "It is financing provided by Bin Dowal Bank to help finance home construction and building projects in accordance with Islamic Sharia principles." }
        },
        {
          id: "faq-tm-2",
          question: { ar: "هل تمويل تعمير متوافق مع الشريعة الإسلامية؟", en: "Is Ta'meer Financing Sharia-compliant?" },
          answer: { ar: "نعم، يتم تقديم التمويل وفق أحكام الشريعة الإسلامية.", en: "Yes, the financing is provided in accordance with Islamic Sharia principles." }
        },
        {
          id: "faq-tm-3",
          question: { ar: "ما الضمانات المقبولة للحصول على التمويل؟", en: "What guarantees are accepted to obtain financing?" },
          answer: { ar: "يمكن التقديم باستخدام ضمان الذهب، أو ضمان الوديعة، أو الضمان التجاري، وفق سياسة البنك.", en: "You can apply using a gold guarantee, deposit guarantee, or commercial guarantee, according to bank policy." }
        },
        {
          id: "faq-tm-4",
          question: { ar: "كيف يمكنني التقديم على تمويل تعمير؟", en: "How can I apply for Ta'meer Financing?" },
          answer: { ar: "يمكنك زيارة أقرب فرع لبنك بن دول للحصول على التفاصيل وتقديم طلب التمويل.", en: "You can visit the nearest Bin Dowal Bank branch to get details and submit the financing application." }
        }
      ]
    },
    relatedServicesKeys: ["financing-home", "financing-personal", "savings-account"]
  },
  {
    slug: "financing-noor",
    section: "personal",
    title: {
      ar: "تمويل نور",
      en: "Noor Financing"
    },
    subtitle: {
      ar: "تمويل المشاريع النسائية في اليمن لتنمية مشروعك",
      en: "Financing Women's Projects in Yemen to Grow Your Business"
    },
    heroImage: "/images/financing-services/4.webp",
    breadcrumbs: [
      { labelKey: "nav.specializedServices", href: "/specialized-services" },
      { labelKey: "nav.financingNoor", label: { ar: "تمويل نور", en: "Noor" } }
    ],
    tagline: {
      ar: "تمكين المرأة اقتصادياً",
      en: "Women's Economic Empowerment"
    },
    primaryCta: {
      label: { ar: "ابدئي مشروعك الآن", en: "Start Your Project Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "احصل على تمويل نور من بنك بن دول لدعم السيدات وتمكينهن من إدارة وتطوير مشاريعهن الصغيرة، وفق أحكام الشريعة الإسلامية وبإجراءات ميسرة.",
      en: "Get Noor financing from Bin Dowal Bank to support women and empower them to manage and develop their small projects, in accordance with Islamic Sharia principles and with easy procedures."
    },
    intro: {
      ar: "إذا كنتِ تسعين إلى بدء مشروعك الخاص أو تطوير مشروع قائم، فإن الحصول على التمويل المناسب يساعدك على تحقيق أهدافك بثقة. مع تمويل نور من بنك بن دول، نوفر لكِ حلاً تمويليًا متوافقًا مع أحكام الشريعة الإسلامية، يهدف إلى تمكين السيدات ودعم مشاريعهن الصغيرة بما يعزز فرص النمو والاستقرار المالي.",
      en: "If you are seeking to start your own project or develop an existing one, obtaining the right financing helps you achieve your goals with confidence. With Noor financing from Bin Dowal Bank, we provide you with a Sharia-compliant financing solution aimed at empowering women and supporting their small projects to enhance growth opportunities and financial stability."
    },
    overview: {
      title: { ar: "ما هو تمويل نور؟", en: "What is Noor Financing?" },
      description: {
        ar: "انطلاقاً من رؤية البنك في تحقيق الشمول المالي والتمكين الاقتصادي للسيدات، تمويل نور هو أحد حلول تمويل المشاريع النسائية في اليمن التي يقدمها بنك بن دول، والمخصص لدعم السيدات وتمكينهن من إدارة وتوسيع مشاريعهن الصغيرة. صُمم هذا التمويل لمساندة المرأة في تطوير مشروعها، من خلال حلول تمويلية متوافقة مع أحكام الشريعة الإسلامية، وفق سياسة البنك.",
        en: "Based on the bank's vision of achieving financial inclusion and economic empowerment for women, Noor financing is one of the women's project financing solutions in Yemen offered by Bin Dowal Bank, dedicated to supporting women and empowering them to manage and expand their small projects. This financing is designed to support women in developing their projects through Sharia-compliant financing solutions, according to bank policy."
      }
    },
    why: {
      title: { ar: "لماذا تختارين تمويل نور؟", en: "Why Choose Noor Financing?" },
      items: [
        { id: "why-no-1", text: { ar: "تمويل متوافق مع أحكام الشريعة الإسلامية.", en: "Financing compliant with Islamic Sharia principles." } },
        { id: "why-no-2", text: { ar: "مخصص لدعم السيدات وتمكينهن اقتصاديًا.", en: "Dedicated to supporting women and empowering them economically." } },
        { id: "why-no-3", text: { ar: "يساعد على تمويل وتوسيع المشاريع الصغيرة.", en: "Helps finance and expand small projects." } },
        { id: "why-no-4", text: { ar: "إجراءات ميسرة.", en: "Easy procedures." } },
        { id: "why-no-5", text: { ar: "خدمة متوفرة عبر فروع بنك بن دول.", en: "Service available through Bin Dowal Bank branches." } }
      ]
    },
    serviceTypes: {
      title: { ar: "الضمانات المقبولة", en: "Accepted Guarantees" },
      description: { ar: "يمكنك التقدم بطلب تمويل ثمار باستخدام إحدى الضمانات المعتمدة لدى البنك:", en: "You can apply for Thimar financing using one of the guarantees approved by the bank:" },
      items: [
        {
          id: "type-bg-1",
          title: { ar: "ضمان الذهب", en: "Gold Guarantee" },
          // description: { ar: "ضمانات بنكية تغطي قيمة الذهب.", en: "Bank guarantees covering the value of gold." }
        },
        {
          id: "type-bg-2",
          title: { ar: "ضمان الوديعة", en: "Deposit Guarantee" },
          // description: { ar: "تضمن تنفيذ الأعمال أو الخدمات وفقًا لشروط العقد.", en: "Guarantees the execution of works or services in accordance with contract terms." }
        },
        {
          id: "type-bg-3",
          title: { ar: "ضمانات أخرى (بحسب سياسات وشروط البنك).", en: "Other guarantees (according to bank policies and terms)." },
          // description: { ar: "تغطي المبالغ المدفوعة مقدمًا للموردين أو المقاولين.", en: "Covers amounts paid in advance to suppliers or contractors." }
        }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تمويل نور", en: "Noor Financing Features" },
      items: [
        {
          id: "fc-no-1",
          title: { ar: "متوافق مع الشريعة الإسلامية", en: "Sharia Compliant" },
          description: { ar: "يُقدَّم التمويل وفق أحكام الشريعة الإسلامية لضمان راحة المتقدمة وطمأنينتها.", en: "Financing is provided in accordance with Islamic Sharia principles to ensure the applicant's comfort and peace of mind." }
        },
        {
          id: "fc-no-2",
          title: { ar: "تمكين اقتصادي للسيدات", en: "Women's Economic Empowerment" },
          description: { ar: "مخصص لدعم السيدات في بدء مشاريعهن أو تطويرها ليحققن الاستقلال المالي.", en: "Dedicated to supporting women in starting or developing their projects to achieve financial independence." }
        },
        {
          id: "fc-no-3",
          title: { ar: "إجراءات ميسرة", en: "Easy Procedures" },
          description: { ar: "إجراءات تقديم مبسطة تسهل على السيدات الوصول إلى التمويل وتوفر الوقت والجهد.", en: "Simplified application procedures that make it easy for women to access financing, saving time and effort." }
        },
        {
          id: "fc-no-4",
          title: { ar: "ضمانات مرنة", en: "Flexible Guarantees" },
          description: { ar: "ضمانات متعددة ومعتمدة تناسب طبيعة المشاريع الصغيرة والأنشطة النسائية.", en: "Multiple approved guarantees suitable for the nature of small projects and women's activities." }
        }
      ]
    },
    guaranteesSection: {
      title: { ar: "الضمانات المقبولة", en: "Accepted Guarantees" },
      description: {
        ar: "يمكنكِ التقدم بطلب تمويل نور باستخدام إحدى الضمانات المعتمدة لدى البنك:",
        en: "You can apply for Noor financing using one of the bank-approved guarantees:"
      },
      items: [
        { id: "guar-no-1", text: { ar: "ضمان الذهب.", en: "Gold guarantee." } },
        { id: "guar-no-2", text: { ar: "ضمان الوديعة.", en: "Deposit guarantee." } },
        { id: "guar-no-3", text: { ar: "ضمانات أخرى (بحسب سياسات وشروط البنك).", en: "Other guarantees (according to bank policies and conditions)." } }
      ]
    },
    audience: {
      title: { ar: "من يمكنها الاستفادة من تمويل نور؟", en: "Who Can Benefit from Noor Financing?" },
      items: [
        { id: "aud-no-1", text: { ar: "السيدات الراغبات في بدء مشروع صغير.", en: "Women wishing to start a small project." } },
        { id: "aud-no-2", text: { ar: "صاحبات المشاريع ورائدات الأعمال الراغبات في تطوير أعمالهن.", en: "Female business owners and entrepreneurs wishing to develop their businesses." } },
        { id: "aud-no-3", text: { ar: "الأسر المنتجة الباحثة عن تمويل لتنمية مشاريعهن.", en: "Productive families seeking financing to grow their projects." } },
        { id: "aud-no-4", text: { ar: "من تبحث عن تمويل للمشاريع النسائية في اليمن وفق أحكام الشريعة الإسلامية.", en: "Those seeking financing for women's projects in Yemen in accordance with Islamic Sharia principles." } }
      ]
    },
    stepsSection: {
      title: { ar: "كيف تحصلين على التمويل؟", en: "How to Get Financing?" },
      steps: [
        {
          id: "step-no-1",
          title: { ar: "زيارة أقرب فرع", en: "Visit the Nearest Branch" },
          description: { ar: "زيارة أقرب فرع لبنك بن دول للاستفسار والحصول على المعلومات اللازمة.", en: "Visit the nearest Bin Dowal Bank branch to inquire and get the necessary information." }
        },
        {
          id: "step-no-2",
          title: { ar: "تقديم طلب التمويل", en: "Submit Financing Application" },
          description: { ar: "تقديم طلب التمويل واستكمال المستندات والمتطلبات.", en: "Submit the financing application and complete the documents and requirements." }
        },
        {
          id: "step-no-3",
          title: { ar: "مراجعة الطلب", en: "Application Review" },
          description: { ar: "مراجعة الطلب وفق سياسة البنك.", en: "The application is reviewed according to bank policy." }
        },
        {
          id: "step-no-4",
          title: { ar: "صرف التمويل", en: "Financing Disbursement" },
          description: { ar: "عند الموافقة، يتم استكمال إجراءات التمويل وصرفه. ولمعرفة تفاصيل التمويل وشروطه، يسعدنا استقبالكن في أقرب فرع.", en: "Upon approval, the financing procedures are completed and funds are disbursed. For financing details and conditions, we welcome you at the nearest branch." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "ابدئي اليوم في تطوير مشروعك", en: "Start Developing Your Project Today" },
      description: { ar: "إذا كنتِ تبحثين عن تمويل للمشاريع النسائية في اليمن يساعدكِ على إدارة مشروعك أو تطويره، فإن تمويل نور من بنك بن دول هو الخيار المناسب لكِ. زوري أقرب فرع لبنك بن دول، وتعرّفي على تفاصيل التمويل وكيفية التقديم.", en: "If you are looking for financing for women's projects in Yemen that helps you manage or develop your project, Noor financing from Bin Dowal Bank is the right choice for you. Visit the nearest Bin Dowal Bank branch and learn about financing details and how to apply." },
      primaryLabel: { ar: "زوري أقرب فرع", en: "Visit the Nearest Branch" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول تمويل نور", en: "Noor Financing FAQs" },
      items: [
        {
          id: "faq-no-1",
          question: { ar: "ما هو تمويل نور؟", en: "What is Noor Financing?" },
          answer: { ar: "هو تمويل يقدمه بنك بن دول لدعم السيدات وتمكينهن من إدارة وتوسيع مشاريعهن الصغيرة، وفق أحكام الشريعة الإسلامية.", en: "It is financing provided by Bin Dowal Bank to support women and empower them to manage and expand their small projects, in accordance with Islamic Sharia principles." }
        },
        {
          id: "faq-no-2",
          question: { ar: "هل تمويل نور متوافق مع الشريعة الإسلامية؟", en: "Is Noor Financing Sharia-compliant?" },
          answer: { ar: "نعم، يتم تقديم التمويل وفق أحكام الشريعة الإسلامية.", en: "Yes, the financing is provided in accordance with Islamic Sharia principles." }
        },
        {
          id: "faq-no-3",
          question: { ar: "ما الضمانات المقبولة للحصول على التمويل؟", en: "What guarantees are accepted to obtain financing?" },
          answer: { ar: "يمكن التقديم باستخدام ضمان الذهب، أو ضمان الوديعة، أو الضمان التجاري، وفق سياسة البنك.", en: "You can apply using a gold guarantee, deposit guarantee, or commercial guarantee, according to bank policy." }
        },
        {
          id: "faq-no-4",
          question: { ar: "كيف يمكنني التقديم على تمويل نور؟", en: "How can I apply for Noor Financing?" },
          answer: { ar: "يمكنكِ زيارة أقرب فرع لبنك بن دول للحصول على التفاصيل وتقديم طلب التمويل.", en: "You can visit the nearest Bin Dowal Bank branch to get details and submit the financing application." }
        }
      ]
    },
    relatedServicesKeys: ["financing-business", "financing-personal", "current-account"]
  },
  {
    slug: "financing-zad",
    section: "personal",
    title: {
      ar: "تمويل زاد لتقسيط الرسوم الدراسية | بنك بن دول",
      en: "Zad Educational Fees Financing | Bindowal Bank"
    },
    subtitle: {
      ar: "بدأت المدارس وجاء وقت الأقساط؟ لا تشيل هم، منتج زاد يسهل عليك سداد الرسوم على أقساط مريحة وبدون أي تعقيد",
      en: "School has started and it's installment time? Don't worry, the Zad product makes it easy for you to pay tuition fees in comfortable installments without complications"
    },
    heroImage: "/images/financing-services/5.webp",
    breadcrumbs: [
      { labelKey: "nav.specializedServices", href: "/specialized-services" },
      { labelKey: "nav.financingZad", label: { ar: "تمويل زاد", en: "Zad" } }
    ],
    tagline: {
      ar: "التمويل التعليمي الميسر",
      en: "Convenient Educational Financing"
    },
    primaryCta: {
      label: { ar: "قدم طلبك اليوم", en: "Apply Today" },
      href: "/contact"
    },
    seoDescription: {
      ar: "تمويل زاد من بنك بن دول لتقسيط الرسوم الدراسية للمدارس والجامعات في اليمن. سهل ويسير وبدون أي تعقيد لمساعدة ولي الأمر على استمرار تعليم أولاده.",
      en: "Zad financing from Bin Dowal Bank for installment of school and university tuition fees in Yemen. Simple, easy, and hassle-free to help parents ensure their children's education continues."
    },
    overview: {
      title: { ar: "ما هو تمويل زاد؟", en: "What is Zad Financing?" },
      description: {
        ar: "عزيزي ولي الأمر… مع بداية العام الدراسي تتزايد الالتزامات المالية وأقساط المدارس والجامعات. لتسهيل هذه الأعباء ومساعدتك في تأمين أفضل تعليم لأبنائك، صممنا منتج 'زاد' للتمويل التعليمي من بنك بن دول. يتيح لك هذا المنتج دفع الرسوم الدراسية بالكامل للمدرسة أو الجامعة، وتقسيطها للبنك على أقساط شهرية ميسرة ومريحة تناسب ميزانيتك، وبدون أي تعقيدات أو إجراءات صعبة، لكي يستمر تعليم أولادك دون انقطاع أو قلق مالي.",
        en: "Dear parent... With the start of the school year, financial commitments and school/university installments increase. To ease these burdens and help you secure the best education for your children, we designed the 'Zad' educational financing product from Bin Dowal Bank. This product allows you to pay tuition fees in full to the school or university, and pay the bank back in easy and comfortable monthly installments matching your budget."
      }
    },
    why: {
      title: { ar: "لماذا تختار تمويل زاد لتعليم أبنائك؟", en: "Why Choose Zad Financing for Education?" },
      items: [
        { id: "why-zd-1", text: { ar: "ضمان استمرارية تعليم أولادك دون انقطاع أو توقف.", en: "Ensure the continuity of your children's education without interruption." } },
        { id: "why-zd-2", text: { ar: "تقسيط الرسوم على فترات شهرية مريحة وميسرة تناسب راتبك.", en: "Pay tuition in comfortable and easy monthly installments matching your salary." } },
        { id: "why-zd-3", text: { ar: "إجراءات سريعة جداً ومباشرة وموثوقة مع المدارس والجامعات.", en: "Very fast, direct, and reliable procedures with schools and universities." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تمويل زاد التعليمي", en: "Features of Zad Educational Financing" },
      items: [
        {
          id: "fc-zd-1",
          title: { ar: "تمويل كافة المراحل الدراسية", en: "All Stages Covered" },
          description: { ar: "يشمل التمويل المدارس، المعاهد الفنية، الكليات، والجامعات الحكومية والأهلية والخاصة.", en: "Financing covers schools, institutes, colleges, and public & private universities." }
        },
        {
          id: "fc-zd-2",
          title: { ar: "أقساط شهرية مريحة", en: "Comfortable Installments" },
          description: { ar: "تقسيم المبلغ الإجمالي على دفعات شهرية ميسرة تناسب راتبك أو دخلك المتاح.", en: "Dividing the total amount into easy monthly payments matching your salary or income." }
        },
        {
          id: "fc-zd-3",
          title: { ar: "دفع مباشر للمؤسسة التعليمية", en: "Direct Bank Payment" },
          description: { ar: "يقوم البنك بدفع الرسوم مباشرة إلى حساب المدرسة أو الجامعة المستهدفة.", en: "The bank pays the fees directly to the school or university account." }
        },
        {
          id: "fc-zd-4",
          title: { ar: "بدون أي تعقيدات ورقية", en: "No Paper Complications" },
          description: { ar: "موافقة سريعة لضمان عدم تأخر تسجيل الطالب في مقاعد الدراسة وبدء العام الدراسي.", en: "Quick approval to ensure no delay in registering the student and starting school." }
        }
      ]
    },
    audience: {
      title: { ar: "الفئات المستهدفة لتمويل زاد", en: "Target Audience for Zad" },
      items: [
        { id: "aud-zd-1", text: { ar: "أولياء الأمور الراغبين في تقسيط رسوم المدارس لأبنائهم.", en: "Parents wishing to pay school fees in installments for their children." } },
        { id: "aud-zd-2", text: { ar: "طلاب الجامعات والدراسات العليا الراغبين في تقسيط رسومهم الأكاديمية.", en: "University and postgraduate students wishing to pay their academic tuition in installments." } },
        { id: "aud-zd-3", text: { ar: "الموظفون في القطاعات العامة والخاصة وأصحاب الأعمال الحرة.", en: "Employees in public and private sectors and freelancers." } }
      ]
    },
    requirementsSection: {
      title: { ar: "الشروط والمتطلبات للتقديم", en: "Terms & Requirements to Apply" },
      items: [
        { id: "req-zd-1", text: { ar: "بيان بالرسوم الدراسية المطلوبة من المدرسة أو الجامعة معتمد ومختوم رسمياً.", en: "An approved and stamped tuition fee statement from the school or university." } },
        { id: "req-zd-2", text: { ar: "إثبات هوية ولي الأمر سارية المفعول (البطاقة الشخصية أو جواز السفر).", en: "Valid identification card of the parent." } },
        { id: "req-zd-3", text: { ar: "إثبات دخل أو تحويل راتب لولي الأمر أو ضمانة كفيل مقبولة لدى البنك.", en: "Proof of income, salary transfer, or an acceptable guarantor." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات الاستفادة من تمويل زاد", en: "Steps to Benefit from Zad Financing" },
      steps: [
        {
          id: "step-zd-1",
          title: { ar: "إحضار كشف الرسوم", en: "Get Tuition Statement" },
          description: { ar: "احصل على بيان بالرسوم الدراسية من المدرسة أو الجامعة باسم الطالب موضحاً الرسوم السنوية.", en: "Obtain a tuition fee statement from the school or university under the student's name." }
        },
        {
          id: "step-zd-2",
          title: { ar: "تقديم طلب التمويل للبنك", en: "Submit Request" },
          description: { ar: "زر أقرب فرع وقدم طلبك مع كشف الرسوم وإثبات دخلك وضمانتك المعتمدة.", en: "Visit the nearest branch and submit your application with the fee statement, proof of income, and guarantee." }
        },
        {
          id: "step-zd-3",
          title: { ar: "سداد الرسوم والتقسيط", en: "Disbursement & Installments" },
          description: { ar: "بعد الموافقة السريعة، يدفع البنك الرسوم بالكامل للمدرسة، وتبدأ أنت بالسداد الشهري للبنك.", en: "After quick approval, the bank pays fees in full to the school, and you begin monthly repayment to the bank." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "تعليم أولادك يستمر… دون قلق", en: "Your children's education continues... worry-free" },
      description: { ar: "لا تشيل هم الرسوم الدراسية بعد اليوم. قدم طلب تمويل زاد الآن واجعل تعليم أولادك مستمراً وبأمان مالي تام.", en: "Don't worry about tuition fees anymore. Apply for Zad financing now and ensure your children's education continues with full financial security." },
      primaryLabel: { ar: "قدم طلبك اليوم", en: "Apply Today" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Call Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول تمويل زاد", en: "Zad Financing FAQs" },
      items: [
        {
          id: "faq-zd-1",
          question: { ar: "هل يقتصر تمويل زاد على المدارس فقط؟", en: "Is Zad financing limited to schools only?" },
          answer: { ar: "لا، يشمل التمويل كافة الرسوم الدراسية للمدارس، المعاهد الفنية، الكليات، وجامعات البكالوريوس والدراسات العليا (الماجستير والدكتوراه).", en: "No, the financing covers all tuition fees for schools, technical institutes, colleges, undergraduate, and postgraduate programs (Master's and PhD)." }
        }
      ]
    },
    relatedServicesKeys: ["financing-personal", "savings-account", "current-account"]
  },
  {
    slug: "moneygram",
    section: "personal",
    title: {
      ar: "خدمة موني جرام للتحويلات الدولية | بنك بن دول",
      en: "MoneyGram Money Transfer Service | Bindowal Bank"
    },
    subtitle: {
      ar: "حوالات موني جرام من أي مكان بالعالم إلى عندك بسرعة وأمان عبر بنك بن دول",
      en: "MoneyGram transfers from anywhere in the world to you, fast and secure via Bindowal Bank"
    },
    heroImage: "/images/partners/international/Asset 43@3x.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "موني جرام", en: "MoneyGram" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "تواصل معنا الآن", en: "Contact Us Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل واستقبل حوالات موني جرام من أي مكان بالعالم عبر فروع ووكلاء بنك بن دول في اليمن. خدمة سريعة، آمنة وموثوقة.",
      en: "Send and receive MoneyGram transfers from anywhere in the world through Bindowal Bank branches and agents in Yemen. Fast, secure, and reliable."
    },
    overview: {
      title: { ar: "ما هي خدمة موني جرام؟", en: "What is MoneyGram Service?" },
      description: {
        ar: "تعد موني جرام (MoneyGram) واحدة من أكبر وأسرع الشركات العالمية في مجال تحويل الأموال. من خلال شراكتنا مع موني جرام، يتيح لك بنك بن دول استلام حوالاتك المالية المرسلة من أي مكان في العالم فوراً وبكل سهولة وأمان عبر فروعنا المنتشرة أو شبكة وكلائنا الواسعة في اليمن.",
        en: "MoneyGram is one of the largest and fastest global money transfer networks. Through our partnership, Bindowal Bank enables you to receive your money transfers sent from anywhere in the world instantly, with ease and complete security, through our branches and extensive agent network in Yemen."
      }
    },
    why: {
      title: { ar: "لماذا تختار موني جرام عبر بنك بن دول؟", en: "Why Choose MoneyGram via Bindowal Bank?" },
      items: [
        { id: "why-mg-1", text: { ar: "سرعة فائقة: تصل الحوالة خلال دقائق معدودة.", en: "Super speed: Remittances arrive in a few minutes." } },
        { id: "why-mg-2", text: { ar: "أمان وموثوقية: عمليات تحويل محمية ومضمونة بالكامل.", en: "Security and reliability: Fully protected and guaranteed transfer operations." } },
        { id: "why-mg-3", text: { ar: "تغطية عالمية: شبكة إرسال تغطي أكثر من 200 دولة وإقليم.", en: "Global coverage: Send network covering more than 200 countries and territories." } },
        { id: "why-mg-4", text: { ar: "شبكة استلام واسعة: إمكانية استلام الحوالة من أي فرع أو وكيل لبنك بن دول في اليمن.", en: "Wide receiving network: Ability to receive transfers from any Bindowal Bank branch or agent in Yemen." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات خدمة موني جرام", en: "MoneyGram Service Features" },
      items: [
        {
          id: "fc-mg-1",
          title: { ar: "استلام فوري", en: "Instant Receipt" },
          description: { ar: "استلم أموالك نقداً فور إتمام عملية الإرسال من الخارج.", en: "Receive your cash instantly once the transfer is sent from abroad." }
        },
        {
          id: "fc-mg-2",
          title: { ar: "بدون عمولات خفية", en: "No Hidden Fees" },
          description: { ar: "الرسوم تُدفع بالكامل من قبل المرسل، ولا توجد أي رسوم على المستلم.", en: "Fees are fully paid by the sender, with no fees charged to the receiver." }
        },
        {
          id: "fc-mg-3",
          title: { ar: "تحديثات وإشعارات", en: "Notifications & Updates" },
          description: { ar: "إمكانية تتبع حالة الحوالة عبر الرقم المرجعي المكون من 8 أرقام.", en: "Ability to track the transfer status using the 8-digit reference number." }
        }
      ]
    },
    audience: {
      title: { ar: "من يستفيد من الخدمة؟", en: "Who Benefits from the Service?" },
      items: [
        { id: "aud-mg-1", text: { ar: "العائلات التي تستقبل دعماً مالياً من أقاربها المغتربين.", en: "Families receiving financial support from their expatriate relatives." } },
        { id: "aud-mg-2", text: { ar: "الطلاب الدارسون بالخارج أو القادمون لليمن.", en: "Students studying abroad or coming to Yemen." } },
        { id: "aud-mg-3", text: { ar: "المسافرون والسياح ورجال الأعمال في الحالات الطارئة.", en: "Travelers, tourists, and businesspersons in emergency cases." } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط ومتطلبات الاستلام", en: "Terms & Receiving Requirements" },
      items: [
        { id: "req-mg-1", text: { ar: "تقديم الرقم المرجعي للحوالة (MTCN) المكون من 8 أرقام.", en: "Provide the 8-digit MoneyGram Reference Number (MTCN)." } },
        { id: "req-mg-2", text: { ar: "إحضار وثيقة هوية أصلية وسارية المفعول (بطاقة شخصية أو جواز سفر).", en: "Bring a valid, original identity document (National ID or Passport)." } },
        { id: "req-mg-3", text: { ar: "توضيح اسم المرسل بالكامل وبلد الإرسال وقيمة الحوالة التقريبية.", en: "Provide the sender's full name, country of origin, and approximate transfer amount." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات استلام حوالتك", en: "Steps to Receive Your Transfer" },
      steps: [
        {
          id: "step-mg-1",
          title: { ar: "الحصول على بيانات الحوالة", en: "Get Transfer Details" },
          description: { ar: "اطلب الرقم المرجعي (MTCN) والقيمة من المرسل.", en: "Request the reference number (MTCN) and amount from the sender." }
        },
        {
          id: "step-mg-2",
          title: { ar: "زيارة الفرع أو الوكيل", en: "Visit Branch or Agent" },
          description: { ar: "توجه إلى أقرب فرع لبنك بن دول أو أحد وكلائه المعتمدين.", en: "Go to the nearest Bindowal Bank branch or authorized agent." }
        },
        {
          id: "step-mg-3",
          title: { ar: "تعبئة النموذج والاستلام", en: "Fill Form & Receive Cash" },
          description: { ar: "عبئ نموذج الاستلام وقدم هويتك ومطابقة البيانات لاستلام أموالك فوراً.", en: "Fill out the receiving form, present your ID, verify details, and receive your cash instantly." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "حوالاتك تصل بأمان وسرعة", en: "Your transfers arrive safely & quickly" },
      description: { ar: "تواصل معنا الآن لمعرفة أقرب فرع أو وكيل معتمد لموني جرام بالقرب منك.", en: "Contact us now to find the nearest MoneyGram branch or authorized agent near you." },
      primaryLabel: { ar: "اتصل بنا الآن", en: "Contact Us Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "الفروع والوكلاء", en: "Branches & Agents" },
      secondaryHref: "/atm-and-branches"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول موني جرام", en: "MoneyGram FAQs" },
      items: [
        {
          id: "faq-mg-1",
          question: { ar: "كم تستغرق الحوالة لتكون جاهزة للاستلام؟", en: "How long does a transfer take to be ready for pick-up?" },
          answer: { ar: "تكون الحوالة جاهزة للاستلام عادةً خلال دقائق معدودة من إرسالها بنجاح.", en: "The transfer is usually ready for pick-up within minutes of being successfully sent." }
        },
        {
          id: "faq-mg-2",
          question: { ar: "هل يدفع المستلم أي رسوم عند الاستلام؟", en: "Does the receiver pay any fees upon pick-up?" },
          answer: { ar: "لا، الخدمة مجانية تماماً للمستلم. الرسوم يدفعها المرسل فقط.", en: "No, the service is completely free for the receiver. Only the sender pays the fees." }
        }
      ]
    },
    relatedServicesKeys: ["shift", "upt", "bin-yaala", "swift"]
  },
  {
    slug: "shift",
    section: "personal",
    title: {
      ar: "خدمة شفت (Shift) للتحويلات المالية | بنك بن دول",
      en: "Shift Remittance Service | Bindowal Bank"
    },
    subtitle: {
      ar: "خدمة توصلك لأهلك وتوصلهم فيك مهما كانوا بعيد سرعة وأمان وانتشار عالمي تحول عبر شفت وتستلم في اليمن عبر بنك بن دول في أي لحظة",
      en: "A service that connects you with your loved ones wherever they are. Fast, secure, and globally widespread, send via Shift and receive in Yemen via Bindowal Bank at any moment"
    },
    heroImage: "/images/partners/international/Shift-Logo.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "شفت", en: "Shift" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "تواصل معنا الآن", en: "Contact Us Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "استلم حوالاتك الدولية عبر خدمة شفت العالمية في اليمن عبر فروع بنك بن دول وشبكة وكلائه. سرعة وأمان وانتشار واسع.",
      en: "Receive your international remittances via the global Shift service in Yemen through Bindowal Bank branches and agent network. Speed, security, and wide reach."
    },
    overview: {
      title: { ar: "ما هي خدمة شفت؟", en: "What is Shift Service?" },
      description: {
        ar: "تعتبر خدمة شفت (Shift) واحدة من أسرع شبكات تحويل الأموال الدولية التي تهدف لتقريب المسافات بين المغتربين وعائلاتهم. بالشراكة مع بنك بن دول، تتيح لك الخدمة استلام الحوالات المالية الواردة من مختلف دول العالم فوراً وفي أي لحظة في اليمن بأعلى درجات الأمان والسرعة.",
        en: "Shift is one of the fastest international money transfer networks aiming to bridge the distance between expatriates and their families. In partnership with Bindowal Bank, the service allows you to receive incoming transfers from various countries instantly at any moment in Yemen with the highest security and speed."
      }
    },
    why: {
      title: { ar: "لماذا تختار خدمة شفت؟", en: "Why Choose Shift?" },
      items: [
        { id: "why-sh-1", text: { ar: "انتشار عالمي واسع يغطي أهم دول الاغتراب اليمني.", en: "Wide global reach covering major countries of Yemeni diaspora." } },
        { id: "why-sh-2", text: { ar: "استلام في أي لحظة وبأمان تام.", en: "Receive at any moment with complete security." } },
        { id: "why-sh-3", text: { ar: "إجراءات سهلة ومبسطة للمرسل والمستلم.", en: "Easy and simplified procedures for both sender and receiver." } },
        { id: "why-sh-4", text: { ar: "شراكة موثوقة مع بنك بن دول لضمان توفر السيولة وجودة الخدمة.", en: "Trusted partnership with Bindowal Bank ensuring liquidity and service quality." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات خدمة شفت", en: "Shift Service Features" },
      items: [
        {
          id: "fc-sh-1",
          title: { ar: "ربط عائلي سريع", en: "Fast Family Connection" },
          description: { ar: "تصل حوالتك لأهلك بلحظات مهما كانت مسافات الغربة طويلة.", en: "Your transfers reach your family in moments, no matter the distance of migration." }
        },
        {
          id: "fc-sh-2",
          title: { ar: "أمان متقدم", en: "Advanced Security" },
          description: { ar: "تعتمد الخدمة على أعلى معايير الحماية لضمان وصول أموالك بأمان.", en: "The service relies on the highest security standards to ensure safe arrival of funds." }
        },
        {
          id: "fc-sh-3",
          title: { ar: "استلام كاش سهل", en: "Easy Cash Pickup" },
          description: { ar: "استلم أموالك بالعملة المتاحة وبسهولة فائقة من أقرب فرع.", en: "Receive your funds in the available currency with absolute ease from the nearest branch." }
        }
      ]
    },
    audience: {
      title: { ar: "الفئات المستهدفة", en: "Target Audience" },
      items: [
        { id: "aud-sh-1", text: { ar: "المغتربون في الخارج الراغبون في إرسال مصروفات لعائلاتهم باليمن.", en: "Expatriates abroad wishing to send living expenses to families in Yemen." } },
        { id: "aud-sh-2", text: { ar: "المستفيدون من الحوالات الشخصية والعائلية السريعة.", en: "Beneficiaries of rapid personal and family remittances." } }
      ]
    },
    requirementsSection: {
      title: { ar: "متطلبات الاستلام", en: "Receiving Requirements" },
      items: [
        { id: "req-sh-1", text: { ar: "تقديم الرقم المرجعي الخاص بحوالة شفت.", en: "Provide the reference number of the Shift remittance." } },
        { id: "req-sh-2", text: { ar: "وثيقة هوية أصلية سارية المفعول (بطاقة شخصية أو جواز سفر).", en: "Valid original ID (National ID or Passport)." } },
        { id: "req-sh-3", text: { ar: "معرفة اسم المرسل، بلد الإرسال، وقيمة الحوالة.", en: "Knowledge of the sender's name, sending country, and remittance value." } }
      ]
    },
    stepsSection: {
      title: { ar: "كيفية الاستلام عبر فروعنا", en: "How to Receive via Our Branches" },
      steps: [
        {
          id: "step-sh-1",
          title: { ar: "الحصول على تفاصيل الحوالة", en: "Get Remittance Details" },
          description: { ar: "تأكد من استلام رقم الحوالة من المرسل بالخارج.", en: "Ensure you receive the transfer number from the sender abroad." }
        },
        {
          id: "step-sh-2",
          title: { ar: "زيارة فرع بنك بن دول", en: "Visit Bindowal Bank Branch" },
          description: { ar: "توجه لأقرب فرع أو وكيل معتمد لخدمة شفت.", en: "Head to the nearest branch or authorized agent for Shift service." }
        },
        {
          id: "step-sh-3",
          title: { ar: "التحقق والاستلام", en: "Verification & Pickup" },
          description: { ar: "قدم وثيقة الهوية والنموذج المعبأ للموظف لاستلام الحوالة فورا.", en: "Present your ID document and filled form to the teller to pick up cash instantly." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "مهما كانت المسافة… حوالتك مع شفت قريبة", en: "No matter the distance... your transfer with Shift is close" },
      description: { ar: "استمتع بالانتشار العالمي والأمان الكامل عند استقبال أموالك عبر بنك بن دول وخدمة شفت.", en: "Enjoy global reach and full security when receiving your funds through Bindowal Bank and Shift service." },
      primaryLabel: { ar: "اعثر على فرع", en: "Find a Branch" },
      primaryHref: "/atm-and-branches",
      secondaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      secondaryHref: "/contact"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول خدمة شفت", en: "Shift Service FAQs" },
      items: [
        {
          id: "faq-sh-1",
          question: { ar: "من أين يمكن للمرسل إرسال حوالة شفت؟", en: "Where can the sender send a Shift transfer from?" },
          answer: { ar: "يمكن الإرسال من خلال أي من وكلاء وفروع شبكة شفت العالمية المنتشرة في أكثر من 120 دولة حول العالم.", en: "Transfers can be sent through any of the agents and branches of the global Shift network in over 120 countries." }
        },
        {
          id: "faq-sh-2",
          question: { ar: "هل تتوفر الخدمة بالعملات الأجنبية؟", en: "Is the service available in foreign currencies?" },
          answer: { ar: "نعم، يمكنك استلام حوالاتك بالدولار الأمريكي أو الريال السعودي أو العملة المحلية حسب التوفر وتوجيهات الإرسال.", en: "Yes, you can receive transfers in USD, SAR, or local currency depending on availability and sending instructions." }
        }
      ]
    },
    relatedServicesKeys: ["moneygram", "upt", "bin-yaala", "swift"]
  },
  {
    slug: "upt",
    section: "personal",
    title: {
      ar: "خدمة UPT العالمية لتحويل الأموال | بنك بن دول",
      en: "UPT Money Transfer Service | Bindowal Bank"
    },
    subtitle: {
      ar: "الآن تقدر ترسل وتستقبل حوالاتك بكل سهولة وأمان مع خدمة UPT - يو بي تي العالمية أموالك تعبر الحدود بكل",
      en: "Now you can send and receive your remittances with complete ease and security. With UPT global service, your money crosses borders with confidence"
    },
    heroImage: "/images/partners/international/Asset 44@3x.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "يو بي تي UPT", en: "UPT" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "اتصل بنا الآن", en: "Call Us Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل واستقبل الأموال بكل ثقة عبر الحدود مع خدمة يو بي تي UPT العالمية وبنك بن دول في اليمن. سرعة وأمان وتكلفة مناسبة.",
      en: "Send and receive money confidently across borders with the global UPT service and Bindowal Bank in Yemen. Speed, security, and reasonable costs."
    },
    overview: {
      title: { ar: "ما هي خدمة UPT العالمية؟", en: "What is UPT Global Service?" },
      description: {
        ar: "تعد خدمة يو بي تي (Universal Payment Transfer - UPT) أول شبكة تحويل أموال عالمية مقرها تركيا وتغطي أكثر من 200 دولة عبر آلاف نقاط الخدمة. يوفر بنك بن دول هذه الخدمة المتميزة لتمكين عملائه في اليمن من استلام وإرسال الحوالات الدولية بكل ثقة وأمان وبأقل التكاليف الممكنة.",
        en: "UPT (Universal Payment Transfer) is a premier global money transfer network headquartered in Turkey, covering over 200 countries through thousands of service points. Bindowal Bank provides this outstanding service to enable its customers in Yemen to send and receive international remittances with confidence, security, and minimal costs."
      }
    },
    why: {
      title: { ar: "لماذا تختار خدمة UPT عبر بنك بن دول؟", en: "Why Choose UPT via Bindowal Bank?" },
      items: [
        { id: "why-up-1", text: { ar: "أمان متناهٍ: حماية وحراسة لكافة المعاملات المالية العابرة للحدود.", en: "Ultimate security: Protection for all trans-border financial transactions." } },
        { id: "why-up-2", text: { ar: "تكاليف تنافسية: عمولات ورسوم تحويل مدروسة ومناسبة.", en: "Competitive costs: Calculated and reasonable transfer fees and commissions." } },
        { id: "why-up-3", text: { ar: "سرعة في المعالجة: وصول الحوالة للمستفيد خلال لحظات.", en: "Fast processing: The remittance reaches the beneficiary in moments." } },
        { id: "why-up-4", text: { ar: "ربط مباشر مع تركيا وأوروبا: خيار مثالي للمغتربين والطلاب في تلك المناطق.", en: "Direct connection with Turkey & Europe: Perfect option for expats and students in those areas." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات شبكة يو بي تي", en: "UPT Network Features" },
      items: [
        {
          id: "fc-up-1",
          title: { ar: "عبور آمن للحدود", en: "Safe Border Crossing" },
          description: { ar: "نظام تحويل متطور يضمن وصول أموالك لوجهتها الصحيحة بكل ثقة.", en: "Sophisticated transfer system ensuring your money reaches its destination with full confidence." }
        },
        {
          id: "fc-up-2",
          title: { ar: "استلام نقدي سريع", en: "Fast Cash Payout" },
          description: { ar: "صرف فوري للحوالة نقداً بالعملات المعتمدة لدى فروعنا.", en: "Instant cash payout of the transfer in approved currencies at our branches." }
        },
        {
          id: "fc-up-3",
          title: { ar: "سهولة الاستخدام", en: "Ease of Use" },
          description: { ar: "لا حاجة لفتح حساب بنكي لاستلام الحوالات النقدية السريعة.", en: "No bank account required to receive fast cash remittances." }
        }
      ]
    },
    audience: {
      title: { ar: "الفئات المستهدفة", en: "Target Audience" },
      items: [
        { id: "aud-up-1", text: { ar: "المغتربون والطلاب المقيمون في تركيا، أوروبا ودول العالم.", en: "Expatriates and students residing in Turkey, Europe, and worldwide." } },
        { id: "aud-up-2", text: { ar: "المواطنون في اليمن الذين يتلقون دعماً مالياً من ذويهم بالخارج.", en: "Citizens in Yemen receiving financial support from their relatives abroad." } },
        { id: "aud-up-3", text: { ar: "التجار الذين يبحثون عن قنوات دفع آمنة وسريعة للموردين.", en: "Merchants looking for secure and fast payment channels for suppliers." } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط الاستلام", en: "Receiving Conditions" },
      items: [
        { id: "req-up-1", text: { ar: "إحضار الرقم المرجعي للحوالة المكون من الرقم التسلسلي لـ UPT.", en: "Provide the remittance reference number (UPT sequence code)." } },
        { id: "req-up-2", text: { ar: "هوية شخصية أصلية سارية الصلاحية للمستلم.", en: "Valid original personal ID of the receiver." } },
        { id: "req-up-3", text: { ar: "تحديد قيمة الحوالة التقريبية والبلد المرسل منه.", en: "Specify the approximate value and sending country." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات الاستلام", en: "Steps to Receive" },
      steps: [
        {
          id: "step-up-1",
          title: { ar: "استلام بيانات الحوالة", en: "Receive Transfer Data" },
          description: { ar: "احصل على الرقم السري للحوالة من المرسل بالخارج.", en: "Get the transfer passcode/reference from the sender abroad." }
        },
        {
          id: "step-up-2",
          title: { ar: "زيارة الفرع", en: "Visit Branch" },
          description: { ar: "توجه إلى أي فرع من فروع بنك بن دول في اليمن.", en: "Visit any Bindowal Bank branch in Yemen." }
        },
        {
          id: "step-up-3",
          title: { ar: "الصرف والاستلام", en: "Payout & Pickup" },
          description: { ar: "قدم هويتك ورقم الحوالة للموظف، واستلم أموالك فوراً وبكل أمان.", en: "Present your ID and transfer number to the teller, and receive your money instantly and securely." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "أموالك تعبر الحدود بأمان تام", en: "Your money crosses borders in complete safety" },
      description: { ar: "تواصل مع خدمة العملاء لمعرفة تفاصيل العمولات والمناطق المغطاة لشبكة UPT.", en: "Contact customer service for detail on commissions and covered areas for the UPT network." },
      primaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "الفروع والوكلاء", en: "Branches & Agents" },
      secondaryHref: "/atm-and-branches"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول UPT", en: "UPT FAQs" },
      items: [
        {
          id: "faq-up-1",
          question: { ar: "ما هي الدول الأكثر تميزاً في شبكة UPT؟", en: "Which countries are most prominent in the UPT network?" },
          answer: { ar: "تتميز الشبكة بتغطية استثنائية وسرعة فائقة في تركيا، دول الاتحاد الأوروبي، دول الكومنولث، بالإضافة لتغطية واسعة حول العالم.", en: "The network features exceptional coverage and high speed in Turkey, EU countries, CIS countries, alongside wide global coverage." }
        },
        {
          id: "faq-up-2",
          question: { ar: "هل الرسوم مرتفعة مقارنة بالشبكات الأخرى؟", en: "Are fees high compared to other networks?" },
          answer: { ar: "تعتبر شبكة UPT من أكثر الشبكات منافسة في رسوم التحويل والعمولات، خاصة للحوالات القادمة من تركيا وأوروبا.", en: "UPT is considered one of the most competitive networks in transfer fees and commissions, especially for incoming transfers from Turkey and Europe." }
        }
      ]
    },
    relatedServicesKeys: ["moneygram", "shift", "bin-yaala", "swift"]
  },
  {
    slug: "bin-yaala",
    section: "personal",
    title: {
      ar: "خدمة بن يعلا للتحويلات من السعودية | بنك بن دول",
      en: "Bin Yaala Transfer Service from KSA | Bindowal Bank"
    },
    subtitle: {
      ar: "المصاريف ما تتحمل التأخير حول أموالك عبر بن يعلا في السعودية واستلمها فوراً في حسابك بتطبيق بن دول أو خلي أهلك يستلموها من أي فرع أو وكيل من شبكتنا الواسعة في اليمن",
      en: "Expenses cannot afford delay. Transfer your money via Bin Yaala in Saudi Arabia and receive it instantly in your account on Bindowal Bank app, or let your family pick it up from any branch or agent across Yemen"
    },
    heroImage: "/images/partners/international/Asset 46@3x.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "بن يعلا", en: "Bin Yaala" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "تحميل تطبيق بن دول", en: "Download Bindowal App" },
      href: "/personal/mobile-banking"
    },
    seoDescription: {
      ar: "أرسل أموالك من السعودية عبر بن يعلا للصرافة واستلمها فوراً في حسابك بتطبيق بن دول أو كاش من أي فرع في اليمن. سرعة وأمان.",
      en: "Send your money from Saudi Arabia via Bin Yaala Exchange and receive it instantly in your Bindowal Bank app or cash from any branch in Yemen. Speed & Security."
    },
    overview: {
      title: { ar: "ما هي خدمة تحويلات بن يعلا؟", en: "What is Bin Yaala Transfer Service?" },
      description: {
        ar: "خدمة مخصصة لتسهيل معاملات المغتربين اليمنيين في المملكة العربية السعودية بالتعاون مع شركة بن يعلا للصرافة. تتيح الخدمة إرسال الحوالات المالية واستلامها فوراً باليمن، مع ميزة إضافية تتيح إيداع الحوالة مباشرة في حساب المستفيد عبر تطبيق بن دول الرقمي أو استلامها نقداً من فروعنا وشبكتنا الممتدة.",
        en: "A service dedicated to facilitating transactions for Yemeni expatriates in Saudi Arabia, in cooperation with Bin Yaala Exchange. The service allows sending remittances and receiving them instantly in Yemen, with the added benefit of depositing the remittance directly into the beneficiary's account via the Bindowal Bank mobile app or picking it up in cash from our branches and extended network."
      }
    },
    why: {
      title: { ar: "لماذا تختار بن يعلا وبنك بن دول؟", en: "Why Choose Bin Yaala & Bindowal Bank?" },
      items: [
        { id: "why-by-1", text: { ar: "إيداع فوري في الحساب عبر تطبيق بن دول دون عناء زيارة الفروع.", en: "Instant deposit into the account via Bindowal app without visiting branches." } },
        { id: "why-by-2", text: { ar: "توفير الوقت والجهد على المغتربين وأهاليهم باليمن.", en: "Saving time and effort for expatriates and their families in Yemen." } },
        { id: "why-by-3", text: { ar: "سرعة تسليم الحوالات النقدية فوراً من أي فرع أو وكيل.", en: "Rapid payout of cash remittances instantly from any branch or agent." } },
        { id: "why-by-4", text: { ar: "أسعار صرف ممتازة ورسوم تحويل منافسة للغاية.", en: "Excellent exchange rates and highly competitive transfer fees." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات تحويلات بن يعلا", en: "Bin Yaala Transfer Features" },
      items: [
        {
          id: "fc-by-1",
          title: { ar: "إيداع في تطبيق بن دول", en: "Deposit into Bindowal App" },
          description: { ar: "تصل الحوالة مباشرة لحسابك لتتمكن من استخدامها في المدفوعات والخدمات المصرفية.", en: "The transfer goes directly into your account so you can use it for payments and banking." }
        },
        {
          id: "fc-by-2",
          title: { ar: "انتشار واسع في السعودية", en: "Wide Presence in KSA" },
          description: { ar: "إمكانية الإرسال من أي فرع لشركة بن يعلا للصرافة في مختلف مناطق المملكة.", en: "Ability to send from any branch of Bin Yaala Exchange across all regions of Saudi Arabia." }
        },
        {
          id: "fc-by-3",
          title: { ar: "استلام كاش فوري", en: "Instant Cash Pickup" },
          description: { ar: "إذا لم يكن لديك حساب، يمكن لأهلك استلام الحوالة كاش فوراً من شبكتنا الواسعة.", en: "If you don't have an account, your family can pick up cash instantly from our wide network." }
        }
      ]
    },
    audience: {
      title: { ar: "الفئات المستهدفة", en: "Target Audience" },
      items: [
        { id: "aud-by-1", text: { ar: "المغتربون اليمنيون المقيمون في المملكة العربية السعودية.", en: "Yemeni expatriates residing in Saudi Arabia." } },
        { id: "aud-by-2", text: { ar: "أهالي وعائلات المغتربين في مختلف المدن والأرياف اليمنية.", en: "Families of expatriates across various Yemeni cities and rural areas." } }
      ]
    },
    requirementsSection: {
      title: { ar: "متطلبات الإرسال والاستلام", en: "Sending & Receiving Requirements" },
      items: [
        { id: "req-by-1", text: { ar: "للإرسال: زيارة أي فرع لبن يعلا في السعودية وتقديم بيانات المستفيد ورقم حسابه في بنك بن دول (للإيداع المباشر).", en: "To send: Visit any Bin Yaala branch in KSA, provide beneficiary details and Bindowal Bank account number (for direct deposit)." } },
        { id: "req-by-2", text: { ar: "للاستلام النقدي: تقديم رقم الحوالة وهوية المستلم الأصلية السارية في اليمن.", en: "To receive cash: Provide the transfer code and the receiver's valid original ID in Yemen." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات التحويل والاستلام", en: "Transfer & Receiving Steps" },
      steps: [
        {
          id: "step-by-1",
          title: { ar: "الإيداع أو الإرسال", en: "Deposit or Send" },
          description: { ar: "يقوم المغترب بطلب إيداع الحوالة في حساب المستفيد ببنك بن دول أو إرسالها كحوالة كاش.", en: "The expat requests depositing the remittance into the beneficiary's Bindowal account or sending it as cash." }
        },
        {
          id: "step-by-2",
          title: { ar: "إشعار فوري", en: "Instant Notification" },
          description: { ar: "تصل رسالة إشعار للمستفيد بإيداع المبلغ في حسابه أو جهوزية الحوالة للاستلام.", en: "An instant notification alerts the beneficiary of the deposit or that the transfer is ready for pickup." }
        },
        {
          id: "step-by-3",
          title: { ar: "الاستخدام أو الصرف", en: "Usage or Pickup" },
          description: { ar: "استخدم الأموال فوراً عبر تطبيق بن دول، أو توجه لأقرب وكيل لاستلام الحوالة كاش.", en: "Use the funds instantly on the Bindowal Bank app, or visit the nearest agent to collect cash." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "مسافات الغربة طويلة… بس حوالتك معنا قصيرة", en: "Migration distances are long... but your transfer with us is short" },
      description: { ar: "افتح حسابك اليوم في بنك بن دول وفعل تطبيق الهاتف لتستقبل حوالاتك من السعودية مباشرة في حسابك.", en: "Open your account today with Bindowal Bank and activate the mobile app to receive your Saudi transfers directly in your account." },
      primaryLabel: { ar: "فتح حساب جاري", en: "Open Current Account" },
      primaryHref: "/personal/current-account",
      secondaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      secondaryHref: "/contact"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول حوالات بن يعلا", en: "Bin Yaala Transfers FAQs" },
      items: [
        {
          id: "faq-by-1",
          question: { ar: "هل يمكن التحويل مباشرة لرقم الحساب؟", en: "Can a transfer be made directly to the account number?" },
          answer: { ar: "نعم، بمجرد تقديم رقم حساب المستفيد في بنك بن دول لموظف بن يعلا في السعودية، يتم قيد الحوالة فوراً في الحساب ويظهر الرصيد في تطبيق بن دول.", en: "Yes, by providing the beneficiary's Bindowal Bank account number to the Bin Yaala agent in KSA, the transfer is instantly credited and visible on the Bindowal app." }
        },
        {
          id: "faq-by-2",
          question: { ar: "أين تقع فروع بن يعلا في السعودية؟", en: "Where are Bin Yaala branches located in KSA?" },
          answer: { ar: "تنتشر فروع شركة بن يعلا للصرافة في معظم مدن ومحافظات المملكة العربية السعودية لتكون قريبة من كافة المغتربين.", en: "Bin Yaala Exchange branches are spread across most cities and provinces of Saudi Arabia to be close to all expatriates." }
        }
      ]
    },
    relatedServicesKeys: ["moneygram", "shift", "upt", "swift"]
  },
  {
    slug: "alawneh",
    section: "personal",
    title: {
      ar: "حوالات العلاونة للصرافة - الأردن | بنك بن دول",
      en: "Alawneh Exchange Transfers - Jordan | Bindowal Bank"
    },
    subtitle: {
      ar: "لأهلك واصحابك ولكل شركاء عملك في الاردن حوالاتهم توصلك بكل أمان وسرعة مع العلاونة للصرافة وبنك بن دول نختصر المسافات، ونضمن لك وصول أموالك للوجهة الصح بثقة تامة",
      en: "For your family, friends, and all business partners in Jordan, their transfers reach you in complete security and speed. With Alawneh Exchange and Bindowal Bank, we shorten distances and guarantee your money reaches the right destination with total confidence"
    },
    heroImage: "/images/partners/international/Asset 53@3x.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "العلاونة - الأردن", en: "Alawneh - Jordan" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "اتصل بنا الآن", en: "Call Us Now" },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل واستقبل الحوالات المالية بين اليمن والأردن عبر شبكة العلاونة للصرافة وفروع بنك بن دول. أمان سرعة وموثوقية عالية.",
      en: "Send and receive financial transfers between Yemen and Jordan via the Alawneh Exchange network and Bindowal Bank branches. Safety, speed, and high reliability."
    },
    overview: {
      title: { ar: "شراكة متميزة لربط اليمن بالأردن", en: "Premium Partnership Connecting Yemen & Jordan" },
      description: {
        ar: "يسعى بنك بن دول دائماً لتوفير قنوات مالية موثوقة لعملائه. من خلال تعاوننا المشترك مع شركة العلاونة للصرافة – الرائدة في المملكة الأردنية الهاشمية – نقدم خدمة متكاملة وسريعة تضمن انتقال الأموال بين الأردن واليمن بكل أمان وسلاسة، لتلبية متطلبات العائلات، المغتربين، الطلاب، وقطاع الأعمال والشركات.",
        en: "Bindowal Bank always strives to provide reliable financial channels for its clients. Through our joint cooperation with Alawneh Exchange – a leader in the Hashemite Kingdom of Jordan – we offer an integrated and fast service ensuring the transfer of money between Jordan and Yemen with complete safety and smoothness, meeting the needs of families, expats, students, and the business sector."
      }
    },
    why: {
      title: { ar: "لماذا تختار حوالات العلاونة وبنك بن دول؟", en: "Why Choose Alawneh & Bindowal Bank?" },
      items: [
        { id: "why-al-1", text: { ar: "تغطية واسعة النطاق في كافة محافظات الأردن واليمن.", en: "Broad coverage across all provinces of Jordan and Yemen." } },
        { id: "why-al-2", text: { ar: "ضمان وصول الأموال للوجهة الصحيحة بثقة تامة.", en: "Guaranteeing that funds reach the right destination with absolute confidence." } },
        { id: "why-al-3", text: { ar: "معاملات سريعة جداً تسهم في تيسير التجارة والاحتياجات العائلية.", en: "Very fast transactions helping facilitate trade and family needs." } },
        { id: "why-al-4", text: { ar: "أمان مصرفي عالٍ وفقاً لأفضل المعايير والقوانين المالية الدولية.", en: "High banking security compliant with the best international financial standards." } }
      ]
    },
    featureCards: {
      title: { ar: "مزايا الخدمة", en: "Service Benefits" },
      items: [
        {
          id: "fc-al-1",
          title: { ar: "اختصار المسافات", en: "Shortening Distances" },
          description: { ar: "حوالتك تصل فوراً لتلبي احتياجات أهلك وشراكات عملك في الأردن واليمن.", en: "Your transfer arrives instantly to meet the needs of your family and business partners in Jordan & Yemen." }
        },
        {
          id: "fc-al-2",
          title: { ar: "ثقة مطلقة", en: "Absolute Trust" },
          description: { ar: "شراكة تجمع بين قوتين ماليتين عريقتين لضمان سلامة عملياتك.", en: "A partnership combining two long-standing financial powers to ensure the safety of transactions." }
        },
        {
          id: "fc-al-3",
          title: { ar: "تسهيلات للطلاب", en: "Facilities for Students" },
          description: { ar: "مثالية لإرسال الرسوم ومصاريف الدراسة لأبنائنا في الجامعات الأردنية.", en: "Ideal for sending tuition and living expenses to our children studying in Jordanian universities." }
        }
      ]
    },
    audience: {
      title: { ar: "الفئات المستهدفة", en: "Target Audience" },
      items: [
        { id: "aud-al-1", text: { ar: "المغتربون والطلاب اليمنيون المقيمون في الأردن.", en: "Yemeni expatriates and students residing in Jordan." } },
        { id: "aud-al-2", text: { ar: "التجار والمستوردون وأصحاب الأعمال المشتركة بين البلدين.", en: "Merchants, importers, and joint business owners between the two countries." } },
        { id: "aud-al-3", text: { ar: "الأسر التي تستقبل حوالات مالية شخصية بانتظام.", en: "Families receiving personal financial transfers regularly." } }
      ]
    },
    requirementsSection: {
      title: { ar: "المستندات المطلوبة للاستلام", en: "Documents Required for Pickup" },
      items: [
        { id: "req-al-1", text: { ar: "الرقم المرجعي للحوالة المرسلة عبر العلاونة للصرافة.", en: "The reference number of the transfer sent via Alawneh Exchange." } },
        { id: "req-al-2", text: { ar: "إثبات هوية رسمي ساري الصلاحية (جواز سفر أو بطاقة شخصية).", en: "Valid official ID (Passport or National ID card)." } },
        { id: "req-al-3", text: { ar: "تطابق بيانات المستفيد المسجلة في الحوالة.", en: "Matching beneficiary details registered in the transfer." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات إرسال واستلام الحوالة", en: "Steps to Send and Receive Transfer" },
      steps: [
        {
          id: "step-al-1",
          title: { ar: "إتمام عملية الإرسال", en: "Complete Sending" },
          description: { ar: "يرسل العميل الحوالة من أي فرع للعلاونة بالأردن ويزود المستلم ببياناتها.", en: "The customer sends the transfer from any Alawneh branch in Jordan and provides details to the receiver." }
        },
        {
          id: "step-al-2",
          title: { ar: "مراجعة بنك بن دول", en: "Visit Bindowal Bank" },
          description: { ar: "يتوجه المستفيد في اليمن إلى أقرب فرع لبنك بن دول.", en: "The beneficiary in Yemen visits the nearest Bindowal Bank branch." }
        },
        {
          id: "step-al-3",
          title: { ar: "صرف الحوالة", en: "Cash Out" },
          description: { ar: "يطابق الموظف البيانات ويسلم المبلغ للمستلم بالعملة المحددة فوراً.", en: "The teller matches the data and hands over the amount to the receiver in the specified currency instantly." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "نختصر المسافات ونضمن وصول أموالك بثقة", en: "We shorten distances and guarantee your funds arrive with confidence" },
      description: { ar: "لمزيد من المعلومات حول فروعنا وأسعار التحويل، يرجى التواصل مع فريق خدمة العملاء.", en: "For more details on our branches and transfer rates, please contact our customer service team." },
      primaryLabel: { ar: "اتصل بنا الآن", en: "Call Us Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "مواقع الفروع", en: "Branch Locations" },
      secondaryHref: "/atm-and-branches"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول حوالات العلاونة", en: "Alawneh Transfers FAQs" },
      items: [
        {
          id: "faq-al-1",
          question: { ar: "كم تستغرق عملية التحويل بين الأردن واليمن؟", en: "How long does a transfer between Jordan and Yemen take?" },
          answer: { ar: "بفضل الربط التقني المباشر، تكون الحوالة جاهزة للصرف في اليمن خلال دقائق قليلة جداً من وقت إرسالها من الأردن.", en: "Thanks to direct technical integration, the remittance is ready for payout in Yemen within a few minutes of being sent from Jordan." }
        },
        {
          id: "faq-al-2",
          question: { ar: "هل يمكن تحويل الأموال بالاتجاهين؟", en: "Can money be transferred in both directions?" },
          answer: { ar: "نعم، تتيح الشراكة إرسال الأموال من الأردن إلى اليمن، وكذلك تحويل الأموال من اليمن إلى الأردن وفق اللوائح المعتمدة.", en: "Yes, the partnership allows sending money from Jordan to Yemen, as well as transferring from Yemen to Jordan in accordance with approved regulations." }
        }
      ]
    },
    relatedServicesKeys: ["zamzam", "moneygram", "swift", "upt"]
  },
  {
    slug: "zamzam",
    section: "personal",
    title: {
      ar: "حوالات شركة زمزم للصرافة - الأردن | بنك بن دول",
      en: "Zamzam Exchange Transfers - Jordan | Bindowal Bank"
    },
    subtitle: {
      ar: "حوالاتك المالية توصل أسرع من اليمن إلى الأردن والعكس عبر بنك بن دول وشركة زمزم للصرافة مافي بين اليمن والأردن مسافات",
      en: "Your financial transfers arrive faster from Yemen to Jordan and vice versa. Via Bindowal Bank and Zamzam Exchange, there are no distances between Yemen and Jordan"
    },
    heroImage: "/images/partners/international/Asset 49@3x.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "زمزم - الأردن", en: "Zamzam - Jordan" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "تواصل معنا", en: "Contact Us" },
      href: "/contact"
    },
    seoDescription: {
      ar: "أرسل واستقبل الأموال بسرعة وأمان بين اليمن والأردن عبر شركة زمزم للصرافة وبنك بن دول. خدمة فورية ومضمونة.",
      en: "Send and receive money quickly and securely between Yemen and Jordan via Zamzam Exchange and Bindowal Bank. Instant and guaranteed service."
    },
    overview: {
      title: { ar: "عن خدمة حوالات زمزم", en: "About Zamzam Transfer Service" },
      description: {
        ar: "تتيح الشراكة الاستراتيجية بين بنك بن دول وشركة زمزم للصرافة في الأردن تقديم خدمات مالية وحوالات سريعة وآمنة في كلا الاتجاهين (من اليمن إلى الأردن ومن الأردن إلى اليمن). نسعى من خلال هذه الخدمة لإلغاء عامل المسافة وتوفير الراحة والسرعة لعائلات المغتربين، الطلاب والمستثمرين في البلدين الشقيقين.",
        en: "The strategic partnership between Bindowal Bank and Zamzam Exchange in Jordan allows providing fast and secure financial and transfer services in both directions (Yemen to Jordan & Jordan to Yemen). Through this service, we aim to eliminate distances and offer convenience and speed to families of expats, students, and investors in both brotherly nations."
      }
    },
    why: {
      title: { ar: "لماذا تختار شركة زمزم وبنك بن دول؟", en: "Why Choose Zamzam & Bindowal Bank?" },
      items: [
        { id: "why-zm-1", text: { ar: "إرسال واستقبال ثنائي الاتجاه بكل يسر وسهولة.", en: "Two-way sending and receiving with absolute ease." } },
        { id: "why-zm-2", text: { ar: "سرعة استثنائية في إتمام العمليات وقيدها.", en: "Exceptional speed in completing and crediting transactions." } },
        { id: "why-zm-3", text: { ar: "عمولات تنافسية ورسوم إرسال موفرة للعميل.", en: "Competitive commissions and saving transfer fees for customers." } },
        { id: "why-zm-4", text: { ar: "شبكة فروع واسعة لشركة زمزم تغطي كافة أنحاء المملكة الأردنية.", en: "Broad branch network of Zamzam Exchange covering all parts of Jordan." } }
      ]
    },
    featureCards: {
      title: { ar: "مزايا التحويل عبر زمزم", en: "Benefits of Transferring via Zamzam" },
      items: [
        {
          id: "fc-zm-1",
          title: { ar: "لا مسافات بيننا", en: "No Distance Between Us" },
          description: { ar: "أموالك تنتقل بين الأردن واليمن بسرعة تفوق توقعاتك.", en: "Your money transfers between Jordan and Yemen faster than you expect." }
        },
        {
          id: "fc-zm-2",
          title: { ar: "تحويل متبادل", en: "Mutual Transfer" },
          description: { ar: "إمكانية إرسال الرسوم الدراسية للطلاب في الأردن، أو استقبال حوالات عائلية من الأردن.", en: "Ability to send tuition fees for students in Jordan, or receive family remittances from Jordan." }
        },
        {
          id: "fc-zm-3",
          title: { ar: "أمان متكامل", en: "Integrated Security" },
          description: { ar: "عمليات خاضعة لأحدث أنظمة المراقبة المالية لضمان أمان أموالك وحمايتها.", en: "Operations subject to latest financial monitoring systems to ensure and protect your money." }
        }
      ]
    },
    audience: {
      title: { ar: "من يستفيد من الخدمة؟", en: "Who Benefits from the Service?" },
      items: [
        { id: "aud-zm-1", text: { ar: "أهالي وعائلات الطلاب اليمنيين الدارسين في الجامعات الأردنية.", en: "Families and relatives of Yemeni students studying in Jordanian universities." } },
        { id: "aud-zm-2", text: { ar: "المغتربون اليمنيون المقيمون والعاملون في الأردن.", en: "Yemeni expatriates residing and working in Jordan." } },
        { id: "aud-zm-3", text: { ar: "أصحاب المصالح والمشاريع التجارية المشتركة.", en: "Owners of shared commercial interests and projects." } }
      ]
    },
    requirementsSection: {
      title: { ar: "المتطلبات والشروط", en: "Requirements & Conditions" },
      items: [
        { id: "req-zm-1", text: { ar: "توفير الرقم السري أو المرجعي للحوالة الصادرة عن شركة زمزم.", en: "Provide the secret code or reference number generated by Zamzam Exchange." } },
        { id: "req-zm-2", text: { ar: "وثيقة هوية رسمية للمستلم (بطاقة شخصية أو جواز سفر).", en: "Official identity document of the receiver (National ID or Passport)." } },
        { id: "req-zm-3", text: { ar: "تعبئة نموذج استلام الحوالات الدولية في الفرع.", en: "Fill out the international transfer receiving form at the branch." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات إرسال واستلام الحوالة", en: "Steps to Send and Receive Transfer" },
      steps: [
        {
          id: "step-zm-1",
          title: { ar: "الإرسال من الفرع", en: "Send from Branch" },
          description: { ar: "يتم إيداع الحوالة من قبل المرسل لدى فروع شركة زمزم بالأردن أو فروعنا باليمن.", en: "The remittance is deposited by the sender at Zamzam branches in Jordan or Bindowal branches in Yemen." }
        },
        {
          id: "step-zm-2",
          title: { ar: "مشاركة تفاصيل الحوالة", en: "Share Transfer Details" },
          description: { ar: "يزود المرسل المستلم بالرقم المرجعي للحوالة والقيمة المحددة.", en: "The sender provides the beneficiary with the reference number and the specific amount." }
        },
        {
          id: "step-zm-3",
          title: { ar: "الاستلام الفوري", en: "Instant Pickup" },
          description: { ar: "يزور المستلم أي نقطة خدمة تابعة لنا باليمن لاستلام الحوالة نقداً ومباشرة.", en: "The beneficiary visits any service point of ours in Yemen to pick up cash directly." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "حوالاتك المالية بلا مسافات أو تأخير", en: "Your financial transfers without distance or delay" },
      description: { ar: "استمتع بأسرع خدمة تحويل متبادل بين اليمن والأردن مع بنك بن دول وزمزم للصرافة.", en: "Enjoy the fastest mutual transfer service between Yemen and Jordan with Bindowal Bank and Zamzam Exchange." },
      primaryLabel: { ar: "تواصل معنا الآن", en: "Contact Us Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "مواقع الفروع", en: "Branch Locations" },
      secondaryHref: "/atm-and-branches"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول حوالات زمزم", en: "Zamzam Transfers FAQs" },
      items: [
        {
          id: "faq-zm-1",
          question: { ar: "هل يمكن إرسال الأموال من اليمن إلى الأردن؟", en: "Can money be sent from Yemen to Jordan?" },
          answer: { ar: "نعم، تتيح الخدمة إرسال الحوالات المالية من اليمن إلى الأردن لاستلامها من أي فرع لشركة زمزم للصرافة.", en: "Yes, the service allows sending remittances from Yemen to Jordan, to be received from any Zamzam Exchange branch." }
        },
        {
          id: "faq-zm-2",
          question: { ar: "ما هي العملات المستخدمة في التحويل؟", en: "What currencies are used for transferring?" },
          answer: { ar: "يتم التحويل بالعملات الرئيسية كالدولار الأمريكي، الريال السعودي، أو الدينار الأردني، وفقاً لتعليمات الإرسال المحددة والأنظمة المتبعة.", en: "Transfers are conducted in major currencies like USD, SAR, or JOD, depending on specific sending instructions and regulations." }
        }
      ]
    },
    relatedServicesKeys: ["alawneh", "moneygram", "swift", "upt"]
  },
  {
    slug: "swift",
    section: "personal",
    title: {
      ar: "خدمة سويفت (SWIFT) للتحويلات المصرفية الدولية | بنك بن دول",
      en: "SWIFT International Banking Transfers | Bindowal Bank"
    },
    subtitle: {
      ar: "نبني جسور الثقة حول العالم مع خدمة سويفت لتحويل الاموال بسرعة وامان",
      en: "Building bridges of trust around the world. With SWIFT money transfer service, send and receive with speed and safety"
    },
    heroImage: "/images/partners/international/Asset 48@3x.png",
    breadcrumbs: [
      { labelKey: "nav.personalBanking", href: "/personal-banking" },
      { labelKey: "nav.intlTransfers", href: "/personal/international-transfers" },
      { label: { ar: "سويفت", en: "Swift" } }
    ],
    tagline: { ar: "التحويلات الدولية", en: "International Transfers" },
    primaryCta: {
      label: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      href: "/contact"
    },
    seoDescription: {
      ar: "خدمات التحويل المصرفي الدولي سويفت SWIFT عبر بنك بن دول في اليمن. حلول مالية آمنة وموثوقة لربطك بكافة البنوك حول العالم.",
      en: "SWIFT international bank transfer services through Bindowal Bank in Yemen. Secure and reliable financial solutions connecting you with all banks worldwide."
    },
    overview: {
      title: { ar: "ما هي خدمة سويفت (SWIFT)؟", en: "What is SWIFT Service?" },
      description: {
        ar: "تعد خدمة سويفت (Society for Worldwide Interbank Financial Telecommunication) المعيار العالمي للتحويلات المصرفية بين البنوك حول العالم. من خلال خدمة سويفت في بنك بن دول، يمكنك إرسال واستلام الحوالات المالية الكبيرة والصغيرة مباشرة من وإلى حسابك البنكي بكل أمان وموثوقية بالارتباط مع آلاف البنوك والمؤسسات المالية العالمية.",
        en: "SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the global standard for bank-to-bank financial transfers worldwide. Through SWIFT service at Bindowal Bank, you can send and receive large and small transfers directly to and from your bank account in complete safety and reliability, connecting with thousands of global financial institutions."
      }
    },
    why: {
      title: { ar: "لماذا تختار خدمة سويفت عبر بنك بن دول؟", en: "Why Choose SWIFT via Bindowal Bank?" },
      items: [
        { id: "why-sw-1", text: { ar: "أمان وموثوقية عالمية: معاملات محمية بأعلى بروتوكولات التشفير المصرفي.", en: "Global security & reliability: Transactions protected by the highest banking encryption protocols." } },
        { id: "why-sw-2", text: { ar: "ربط مباشر بكافة بنوك العالم دون وسائط معقدة.", en: "Direct connection to all banks worldwide without complicated intermediaries." } },
        { id: "why-sw-3", text: { ar: "إمكانية إرسال واستقبال مبالغ كبيرة للأغراض الشخصية والتجارية.", en: "Ability to send and receive large amounts for personal and commercial purposes." } },
        { id: "why-sw-4", text: { ar: "توفير معلومات ومستندات تتبع معتمدة قانونياً ومصرفياً.", en: "Provision of legally and bank-certified tracking information and documents." } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات التحويل المصرفي الدولي (سويفت)", en: "SWIFT International Transfer Features" },
      items: [
        {
          id: "fc-sw-1",
          title: { ar: "أمان متكامل", en: "Integrated Safety" },
          description: { ar: "تتم الحوالة عبر شبكة اتصال مصرفي مشفرة وآمنة تماماً.", en: "The transfer is conducted over a fully encrypted and secure banking network." }
        },
        {
          id: "fc-sw-2",
          title: { ar: "ربط مباشر بالحساب", en: "Direct Account Connection" },
          description: { ar: "تقيد الحوالة الواردة مباشرة في حسابك الجاري أو الاستثماري بالعملة المطلوبة.", en: "Incoming transfer is credited directly into your current or investment account in the target currency." }
        },
        {
          id: "fc-sw-3",
          title: { ar: "عالمية بدون حدود", en: "Borderless Globality" },
          description: { ar: "أرسل أموالك لأي دولة بالعالم أو استقبلها بأي عملة رئيسية معتمدة.", en: "Send your money to any country or receive it in any major approved currency." }
        }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-sw-1", text: { ar: "رجال الأعمال، الشركات والمستوردون لتسوية الفواتير الدولية للسلع والخدمات.", en: "Business owners, companies, and importers to settle international invoices for goods and services." } },
        { id: "aud-sw-2", text: { ar: "الأفراد الراغبون في استقبال مدفوعات كبيرة أو إرسال مصاريف هامة بالخارج.", en: "Individuals wishing to receive large payments or send significant expenses abroad." } },
        { id: "aud-sw-3", text: { ar: "المؤسسات والمنظمات والجمعيات في تعاملاتها المالية الدولية.", en: "Institutions, organizations, and associations in their international financial dealings." } }
      ]
    },
    requirementsSection: {
      title: { ar: "متطلبات إرسال واستلام حوالة سويفت", en: "SWIFT Sending & Receiving Requirements" },
      items: [
        { id: "req-sw-1", text: { ar: "اسم المستفيد الرباعي ورقم حسابه بصيغة الأيبان (IBAN) أو رقم الحساب الدولي.", en: "Beneficiary's full name and account number in IBAN format or international account number." } },
        { id: "req-sw-2", text: { ar: "اسم البنك المستلم، فرعه، ورمز السويفت كود (SWIFT Code / BIC) الخاص بالبنك.", en: "Name of receiving bank, branch, and its SWIFT Code / BIC." } },
        { id: "req-sw-3", text: { ar: "توضيح الغرض من التحويل وتقديم الوثائق الداعمة للعملية إذا لزم الأمر.", en: "Clarify the purpose of transfer and provide supporting documents if required." } },
        { id: "req-sw-4", text: { ar: "للاستلام: توفير رقم حسابك الدولي (IBAN) في بنك بن دول وسويفت كود البنك للمرسل بالخارج.", en: "To receive: Provide your Bindowal Bank IBAN and Bank SWIFT Code to the sender abroad." } }
      ]
    },
    stepsSection: {
      title: { ar: "خطوات التحويل عبر سويفت", en: "Steps to Transfer via SWIFT" },
      steps: [
        {
          id: "step-sw-1",
          title: { ar: "جمع البيانات المصرفية", en: "Collect Bank Details" },
          description: { ar: "احصل على تفاصيل حساب المستفيد بالكامل والرمز التعريفي لسويفت (SWIFT Code) الخاص ببنكه.", en: "Gather complete beneficiary account details and their bank's SWIFT Code." }
        },
        {
          id: "step-sw-2",
          title: { ar: "مراجعة الفرع والطلب", en: "Visit Branch & Apply" },
          description: { ar: "زر فرع بنك بن دول لملء طلب التحويل الخارجي وتأكيد خصم المبلغ من حسابك.", en: "Visit Bindowal Bank branch to fill out the outward transfer form and confirm amount debit." }
        },
        {
          id: "step-sw-3",
          title: { ar: "معالجة وإشعار التحويل", en: "Processing & Receipt" },
          description: { ar: "يقوم البنك بمعالجة المعاملة ويسلمك نسخة من إشعار السويفت (SWIFT Message - MT103) لتأكيد العملية وتتبعها.", en: "The bank processes the transaction and provides you with a copy of the SWIFT message (MT103) for confirmation and tracking." }
        }
      ]
    },
    ctaSection: {
      title: { ar: "نبني جسور الثقة المالية حول العالم", en: "Building bridges of financial trust around the world" },
      description: { ar: "نفذ تحويلاتك المصرفية الدولية بأمان وثقة تامة عبر شبكة سويفت مع بنك بن دول.", en: "Execute your international bank transfers safely and with complete confidence via SWIFT network with Bindowal Bank." },
      primaryLabel: { ar: "طلب تفاصيل الحساب", en: "Request Account Details" },
      primaryHref: "/personal/current-account",
      secondaryLabel: { ar: "تواصل معنا", en: "Contact Us" },
      secondaryHref: "/contact"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة حول سويفت", en: "SWIFT FAQs" },
      items: [
        {
          id: "faq-sw-1",
          question: { ar: "كم تستغرق حوالة سويفت للوصول؟", en: "How long does a SWIFT transfer take to arrive?" },
          answer: { ar: "تستغرق الحوالة عادةً ما بين 2 إلى 5 أيام عمل، وذلك بحسب فارق التوقيت بين البلدين والعملات المستخدمة وبنوك المراسلة الوسيطة.", en: "It usually takes between 2 to 5 business days, depending on time zone differences, currencies used, and intermediary correspondent banks." }
        },
        {
          id: "faq-sw-2",
          question: { ar: "ما هو رمز السويفت كود (SWIFT Code) الخاص ببنك بن دول؟", en: "What is Bindowal Bank's SWIFT Code?" },
          answer: { ar: "يمكنك الحصول على رمز السويفت كود (SWIFT Code) المعتمد للبنك، بالإضافة لتفاصيل البنوك المراسلة لجميع العملات الرئيسية، عبر زيارة فرعك أو الاتصال بخدمة العملاء.", en: "You can obtain the bank's approved SWIFT Code, along with correspondent bank details for all major currencies, by visiting your branch or calling customer service." }
        }
      ]
    },
    relatedServicesKeys: ["moneygram", "shift", "upt", "bin-yaala"]
  },
  {
    slug: "noor-ladies-card",
    section: "accounts",
    title: {
      ar: "بطاقة نور للسيدات (MasterCard Debit)",
      en: "Noor Ladies Card (MasterCard Debit)"
    },
    subtitle: {
      ar: "تحكم مباشر بأموالكِ ودفع أسهل أينما كنتي",
      en: "Direct control over your money and easier payments wherever you are"
    },
    heroImage: "/images/cards/debit-noor.webp",
   breadcrumbs: [
      {
        labelKey: "nav.specializedServices",
        href: "/specialized-services"
      },
      {
        labelKey: "nav.noorCard",
        label: {
          ar: "بطاقة نور",
          en: "Noor Card"
        }
      }
    ],
    tagline: {
      ar: "بطاقة نور للسيدات",
      en: "Noor Ladies Card"
    },
    primaryCta: {
      label: { ar: "اطلب الخدمة الآن", en: "Request This Service" },
      href: "/contact"
    },
    seoDescription: {
      ar: "احصل على بطاقة نور للسيدات من بنك بن دول واستخدمها للسحب النقدي، والشراء عبر الإنترنت، والدفع عبر نقاط البيع بسهولة وأمان داخل اليمن وخارجه.",
      en: "Get the Noor Ladies Card from Bin Dowal Bank and use it for cash withdrawals, online shopping, and POS payments easily and securely inside and outside Yemen."
    },
    overview: {
      title: { ar: "النبذة التعريفية", en: "Overview" },
      description: {
        ar: "بطاقة نور للسيدات (MasterCard Debit) هي بطاقة خصم مباشر مرتبطة مباشرة بحساب نور للسيدات تتيح لكِ السحب النقدي، والشراء عبر الإنترنت، والدفع في نقاط البيع، باستخدام الرصيد المتوفر في الحساب.\nوتوفر البطاقة حلول دفع آمنة وسريعة، مع إمكانية استخدامها محليًا ودوليًا عبر شبكة MasterCard العالمية، بالإضافة إلى خدمات حماية إلكترونية متقدمة تساعد على تعزيز أمان المعاملات المالية.\nسواء كنتِ تستخدمين البطاقة لمشترياتكِ اليومية، أو للتسوق الإلكتروني، أو أثناء السفر، فإن بطاقة نور للسيدات تمنحكِ وسيلة دفع عملية وآمنة تناسب احتياجاتك المختلفة.",
        en: "The Noor Ladies Card (MasterCard Debit) is a direct debit card linked directly to the Noor Ladies account, allowing you to withdraw cash, shop online, and pay at POS terminals using the available balance in your account. The card provides secure and fast payment solutions, with the ability to use it locally and internationally via the global MasterCard network, in addition to advanced electronic protection services that help enhance the security of financial transactions."
      }
    },
    intro: {
      ar: "أصبحت البطاقات البنكية جزءًا أساسيًا من المعاملات اليومية، سواء للسحب النقدي، أو التسوق الإلكتروني، أو الدفع عبر نقاط البيع.\nومن خلال بطاقة نور للسيدات من بنك بن دول، يمكنكِ الوصول إلى أموالكِ بسهولة واستخدامها بأمان داخل اليمن وخارجه، مع خدمات إلكترونية متطورة تمنحكِ تجربة مصرفية أكثر مرونة وراحة.",
      en: "Bank cards have become an essential part of daily transactions, whether for cash withdrawals, online shopping, or POS payments. With the Noor Ladies Card from Bin Dowal Bank, you can easily access your money and use it safely inside and outside Yemen, with advanced electronic services that give you a more flexible and comfortable banking experience."
    },
    why: {
      title: { ar: "لماذا تختار بطاقة نور للسيدات ؟", en: "Why choose the Noor Ladies Card?" },
      description: {
        ar: "لأنكِ تحتاجين إلى وسيلة دفع مرتبطة مباشرة بحسابك وتمنحكي تحكمًا أكبر بأموالك.",
        en: "Because you need a payment method directly linked to your account that gives you greater control over your money."
      },
      items: [
        { id: "why-n-1", text: { ar: "السحب النقدي بسهولة", en: "Easy cash withdrawal" } },
        { id: "why-n-2", text: { ar: "الشراء عبر الإنترنت بأمان", en: "Safe online shopping" } },
        { id: "why-n-3", text: { ar: "الدفع عبر نقاط البيع محليًا ودوليًا", en: "Pay via POS locally and internationally" } },
        { id: "why-n-4", text: { ar: "متابعة عملياتك المالية بشكل فوري", en: "Instant tracking of your financial transactions" } },
        { id: "why-n-5", text: { ar: "إدارة أموالك بمرونة أكبر", en: "Manage your money with greater flexibility" } }
      ]
    },
    featureCards: {
      title: { ar: "مميزات بطاقة نور للسيدات في بنك بن دول", en: "Features of the Noor Ladies Card at Bin Dowal Bank" },
      items: [
        {
          id: "fc-n-1",
          title: { ar: "قبول عالمي", en: "Global Acceptance" },
          description: { ar: "إمكانية استخدام البطاقة محليًا ودوليًا عبر شبكة MasterCard العالمية.", en: "Ability to use the card locally and internationally via the global MasterCard network." }
        },
        {
          id: "fc-n-2",
          title: { ar: "الشراء عبر الإنترنت", en: "Online Shopping" },
          description: { ar: "التسوق الإلكتروني والدفع عبر المواقع الإلكترونية بسهولة وأمان.", en: "Online shopping and paying through websites easily and securely." }
        },
        {
          id: "fc-n-3",
          title: { ar: "الدفع عبر نقاط البيع", en: "POS Payments" },
          description: { ar: "استخدام البطاقة للدفع في المتاجر ونقاط البيع المختلفة.", en: "Use the card to pay in stores and various POS terminals." }
        },
        {
          id: "fc-n-4",
          title: { ar: "السحب النقدي المحلي والدولي", en: "Local and International Cash Withdrawal" },
          description: { ar: "إمكانية السحب من أجهزة الصراف الآلي داخل اليمن وخارجه.", en: "Ability to withdraw from ATMs inside and outside Yemen." }
        },
        {
          id: "fc-n-5",
          title: { ar: "حماية إلكترونية متقدمة DS3", en: "Advanced 3DS Electronic Protection" },
          description: { ar: "تعزيز أمان العمليات الإلكترونية وحماية إضافية أثناء الدفع عبر الإنترنت.", en: "Enhance the security of electronic operations and additional protection during online payments." }
        },
        {
          id: "fc-n-6",
          title: { ar: "رسائل SMS فورية", en: "Instant SMS Alerts" },
          description: { ar: "استقبال إشعارات فورية لجميع العمليات المالية المنفذة على البطاقة.", en: "Receive instant notifications for all financial transactions performed on the card." }
        },
        {
          id: "fc-n-7",
          title: { ar: "خدمات إلكترونية متكاملة", en: "Integrated Electronic Services" },
          description: { ar: "إدارة الحساب والبطاقة عبر القنوات الرقمية والتطبيق البنكي.", en: "Manage the account and card via digital channels and the banking app." }
        },
        {
          id: "fc-n-8",
          title: { ar: "دعم العملات المختلفة", en: "Support for Various Currencies" },
          description: { ar: "إمكانية استخدام البطاقة بعدة عملات حسب نوع الحساب.", en: "Ability to use the card in multiple currencies depending on the account type." }
        }
      ]
    },
    audience: {
      title: { ar: "العملاء المستهدفون", en: "Target Audience" },
      items: [
        { id: "aud-n-1", text: { ar: "السيدات اللواتي يعتمدن على المدفوعات الإلكترونية", en: "Ladies who rely on electronic payments" } },
        { id: "aud-n-2", text: { ar: "السيدات اللواتي يشترن عبر الإنترنت", en: "Ladies who shop online" } },
        { id: "aud-n-3", text: { ar: "سيدات الأعمال الصغيرة", en: "Small business ladies" } },
        { id: "aud-n-4", text: { ar: "السيدات الباحثات عن وسيلة دفع آمنة ومرتبطة بحساباتهن البنكية", en: "Ladies looking for a secure payment method linked to their bank accounts" } }
      ]
    },
    requirementsSection: {
      title: { ar: "شروط الحصول على بطاقة نور للسيدات", en: "Requirements for Obtaining the Noor Ladies Card" },
      items: [
        { id: "req-n-1", text: { ar: "وجود حساب نور للسيدات نشط في البنك.", en: "Having an active Noor Ladies account at the bank." } },
        { id: "req-n-2", text: { ar: "تقديم طلب إصدار البطاقة.", en: "Submit a card issuance request." } },
        { id: "req-n-3", text: { ar: "استكمال البيانات المطلوبة.", en: "Complete the required information." } }
      ]
    },
    stepsSection: {
      title: { ar: "كيفية الحصول على البطاقة", en: "How to Get the Card" },
      steps: [
        { id: "stp-n-1", title: { ar: "زيارة أقرب فرع", en: "Visit the nearest branch" } },
        { id: "stp-n-2", title: { ar: "تقديم طلب إصدار البطاقة", en: "Submit a card issuance request" } },
        { id: "stp-n-3", title: { ar: "استكمال البيانات المطلوبة", en: "Complete the required information" } },
        { id: "stp-n-4", title: { ar: "مراجعة الطلب واعتماد الإصدار", en: "Review the request and approve issuance" } },
        { id: "stp-n-5", title: { ar: "استلام البطاقة وتفعيلها", en: "Receive and activate the card" } }
      ]
    },
    ctaSection: {
      title: { ar: "احصلي على بطاقتك اليوم", en: "Get your card today" },
      description: { ar: "استمتعي بتجربة مصرفية أكثر مرونة وأمانًا مع بطاقة نور للسيدات من بنك بن دول، واستخدمي أموالك بسهولة داخل اليمن وخارجه", en: "Enjoy a more flexible and secure banking experience with the Noor Ladies Card from Bin Dowal Bank, and use your money easily inside and outside Yemen" },
      primaryLabel: { ar: "قدمي طلبك الآن", en: "Apply Now" },
      primaryHref: "/contact",
      secondaryLabel: { ar: "اتصل بنا", en: "Contact Us" },
      secondaryHref: "tel:+967000000000"
    },
    faqs: {
      title: { ar: "الأسئلة الشائعة", en: "FAQs" },
      items: [
        {
          id: "faq-n-1",
          question: { ar: "هل بطاقة نور للسيدات مرتبطة بالحساب البنكي؟", en: "Is the Noor Ladies Card linked to the bank account?" },
          answer: { ar: "نعم، يتم خصم المبالغ مباشرة من الرصيد المتوفر في الحساب.", en: "Yes, amounts are deducted directly from the available balance in the account." }
        },
        {
          id: "faq-n-2",
          question: { ar: "هل يمكن استخدام البطاقة للشراء عبر الإنترنت؟", en: "Can the card be used for online shopping?" },
          answer: { ar: "نعم، يمكن استخدامها للتسوق الإلكتروني والدفع عبر الإنترنت.", en: "Yes, it can be used for online shopping and online payments." }
        },
        {
          id: "faq-n-3",
          question: { ar: "هل البطاقة تدعم الاستخدام الدولي؟", en: "Does the card support international use?" },
          answer: { ar: "نعم، يمكن استخدامها محليًا ودوليًا عبر شبكة MasterCard.", en: "Yes, it can be used locally and internationally via the MasterCard network." }
        },
        {
          id: "faq-n-4",
          question: { ar: "هل توجد رسوم على السحب الدولي؟", en: "Are there fees for international withdrawals?" },
          answer: { ar: "نعم، يتم تطبيق رسوم ثابتة ومتغيرة بحسب نوع العملية والبنك الخارجي.", en: "Yes, fixed and variable fees are applied depending on the type of transaction and the external bank." }
        },
        {
          id: "faq-n-5",
          question: { ar: "هل خدمة الرسائل النصية متوفرة؟", en: "Is the SMS service available?" },
          answer: { ar: "نعم، يتم إرسال إشعارات SMS فورية لجميع العمليات.", en: "Yes, instant SMS notifications are sent for all transactions." }
        }
      ]
    },
    relatedServicesKeys: ["noorCurrent", "savingsAccount"]
  }
];
