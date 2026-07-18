import type { PersonalTransferService } from "@/types/personal-transfer-service";

export const internationalTransfersService: PersonalTransferService = {
  slug: "international-transfers",
  title: {
    ar: "التحويلات الدولية",
    en: "International Transfers",
  },
  subtitle: {
    ar: "تواصل مالي عالمي آمن وموثوق",
    en: "Secure and reliable global financial connection",
  },
  description: {
    ar: "أرسل أموالك دوليًا بثقة عبر شبكة واسعة من البنوك المراسلة مع التزام كامل بالمعايير المصرفية العالمية.",
    en: "Send your money internationally with confidence through a wide network of correspondent banks with full commitment to global banking standards.",
  },
  hero: {
    image: "/images/customer-services/international-transfers.jpg",
    eyebrow: {
      ar: "الخدمات المصرفية للأفراد",
      en: "Personal Banking",
    },
  },
  labels: {
    channels: {
      ar: "قنوات التحويل",
      en: "Transfer Channels",
    },
    requirements: {
      ar: "متطلبات التحويل",
      en: "Transfer Requirements",
    },
    steps: {
      ar: "خطوات التحويل",
      en: "Transfer Steps",
    },
    faqs: {
      ar: "الأسئلة الشائعة",
      en: "FAQs",
    },
  },
  overview: {
    ar: "صُممت خدمة التحويلات الدولية لضمان وصول أموالك إلى الوجهات العالمية بأعلى درجات الأمان والشفافية. توفر لك الخدمة مساراً واضحاً للرسوم وأسعار الصرف، مع تتبع دقيق للحوالة حتى إنجازها عبر شبكة البنوك المراسلة.",
    en: "The international transfers service is designed to ensure your money reaches global destinations with the highest level of security and transparency. The service provides a clear path for fees and exchange rates, with precise tracking of the transfer until it is completed via the correspondent banking network.",
  },
  features: [
    {
      id: "feature-1",
      iconKey: "globe",
      title: {
        ar: "تغطية دولية أوضح",
        en: "Clearer International Coverage",
      },
      description: {
        ar: "الواجهة الجديدة تعرض خدمة التحويل الخارجي ضمن منطق مصرفي أوضح يرتبط بالعملة والوجهة والبنك المراسل.",
        en: "The new interface presents the external transfer service in a clearer banking logic tied to currency, destination, and correspondent bank.",
      },
    },
    {
      id: "feature-2",
      iconKey: "file-check",
      title: {
        ar: "امتثال ومراجعة منظمة",
        en: "Structured Compliance & Review",
      },
      description: {
        ar: "إبراز المتطلبات والمستندات والضوابط التشغيلية في مواضع منطقية تسهّل فهم العملية قبل التنفيذ.",
        en: "Requirements, documents, and operational controls are highlighted in logical places to simplify understanding before execution.",
      },
    },
    {
      id: "feature-3",
      iconKey: "shield",
      title: {
        ar: "متابعة أكثر احترافية",
        en: "More Professional Tracking",
      },
      description: {
        ar: "يتم التركيز على التتبع، الرسوم، المدة، وأسعار الصرف ضمن تجربة أكثر هدوءًا واحترافية من الصفحات التقليدية.",
        en: "The design emphasizes tracking, fees, timing, and exchange rates within a calmer and more professional experience than conventional pages.",
      },
    },
  ],
  channels: [
    {
      id: "request",
      label: {
        ar: "بدء الطلب",
        en: "Start Request",
      },
      title: {
        ar: "بدء التحويل الدولي من خلال الفرع",
        en: "Start the international transfer through the branch",
      },
      description: {
        ar: "هذا المسار مخصص لبدء طلب التحويل الدولي عندما تحتاج إلى مراجعة بيانات المستفيد، العملة، والوثائق المرتبطة بالعملية.",
        en: "This path is intended for initiating the international transfer request when beneficiary details, currency, and supporting documents need to be reviewed.",
      },
      items: [
        {
          id: "step-1",
          title: {
            ar: "زيارة الفرع وتقديم طلب التحويل الدولي.",
            en: "Visit the branch and submit the international transfer request.",
          },
        },
        {
          id: "step-2",
          title: {
            ar: "تحديد العملة والمبلغ والوجهة المستفيدة.",
            en: "Choose the currency, amount, and destination.",
          },
        },
        {
          id: "step-3",
          title: {
            ar: "إدخال بيانات المستفيد ورمز السويفت أو الآيبان عند الحاجة.",
            en: "Provide beneficiary details and the SWIFT code or IBAN when required.",
          },
        },
        {
          id: "step-4",
          title: {
            ar: "مراجعة الرسوم وسعر الصرف واعتماد الطلب.",
            en: "Review the fees and exchange rate, then approve the request.",
          },
        },
      ],
    },
    {
      id: "tracking",
      label: {
        ar: "المتابعة والتتبع",
        en: "Tracking & Follow-up",
      },
      title: {
        ar: "متابعة حالة الحوالة بعد التنفيذ",
        en: "Follow up on the transfer status after execution",
      },
      description: {
        ar: "بعد تنفيذ الطلب، تبرز أهمية الرقم المرجعي ومتابعة حالة الحوالة مع البنوك المراسلة حتى وصولها إلى الجهة المستفيدة.",
        en: "After execution, the reference number becomes important for following the transfer status with correspondent banks until it reaches the beneficiary.",
      },
      items: [
        {
          id: "step-1",
          title: {
            ar: "الاحتفاظ بالرقم المرجعي الخاص بالعملية.",
            en: "Keep the transaction reference number محفوظًا for follow-up.",
          },
        },
        {
          id: "step-2",
          title: {
            ar: "التواصل مع البنك عند الحاجة إلى متابعة الحالة.",
            en: "Contact the bank when status follow-up is required.",
          },
        },
        {
          id: "step-3",
          title: {
            ar: "التحقق من مسار الحوالة مع البنك المراسل عند التأخير.",
            en: "Check the transfer route with the correspondent bank in case of delay.",
          },
        },
        {
          id: "step-4",
          title: {
            ar: "استلام تحديثات الحالة حتى اكتمال الوصول.",
            en: "Receive status updates until final completion.",
          },
        },
      ],
    },
  ],
  steps: [
    {
      id: "01",
      title: {
        ar: "تجهيز البيانات",
        en: "Prepare Details",
      },
      description: {
        ar: "جهّز بيانات المستفيد الدولي والمستندات اللازمة بدقة قبل بدء الطلب.",
        en: "Prepare the international beneficiary details and required documents accurately before starting the request.",
      },
    },
    {
      id: "02",
      title: {
        ar: "اختيار العملة والمبلغ",
        en: "Select Currency & Amount",
      },
      description: {
        ar: "حدّد العملة المناسبة وقيمة التحويل وفق الجهة والوجهة المستفيدة.",
        en: "Choose the appropriate currency and transfer amount based on the beneficiary and destination.",
      },
    },
    {
      id: "03",
      title: {
        ar: "مراجعة الرسوم وسعر الصرف",
        en: "Review Fees & FX Rate",
      },
      description: {
        ar: "راجع الرسوم وأأسعار الصرف والملاحظات التشغيلية قبل اعتماد العملية.",
        en: "Review fees, exchange rates, and operational notes before approving the transaction.",
      },
    },
    {
      id: "04",
      title: {
        ar: "التنفيذ والتحقق",
        en: "Execute & Verify",
      },
      description: {
        ar: "تُنفذ العملية وفق إجراءات البنك والضوابط المرتبطة بالتحويلات الخارجية.",
        en: "The transaction is executed according to bank procedures and controls related to external transfers.",
      },
    },
    {
      id: "05",
      title: {
        ar: "المتابعة والتتبع",
        en: "Track & Follow Up",
      },
      description: {
        ar: "استخدم الرقم المرجعي لمتابعة حالة الحوالة حتى وصولها للجهة المستفيدة.",
        en: "Use the reference number to track the transfer status until it reaches the beneficiary.",
      },
    },
  ],
  requirements: [
    {
      id: "req-1",
      title: {
        ar: "الرسوم",
        en: "Fees",
      },
      description: {
        ar: "تُعرض بوضوح قبل اعتماد التحويل",
        en: "Displayed clearly before transfer approval",
      },
    },
    {
      id: "req-2",
      title: {
        ar: "أسعار الصرف",
        en: "Exchange Rates",
      },
      description: {
        ar: "تُراجع وقت التنفيذ بحسب السوق",
        en: "Reviewed at execution time according to the market",
      },
    },
    {
      id: "req-3",
      title: {
        ar: "التغطية",
        en: "Coverage",
      },
      description: {
        ar: "تعتمد على شبكة البنوك المراسلة والوجهة",
        en: "Depends on the correspondent banking network and destination",
      },
    },
    {
      id: "req-4",
      title: {
        ar: "الامتثال",
        en: "Compliance",
      },
      description: {
        ar: "قد يتطلب مستندات أو مراجعات إضافية",
        en: "May require additional documents or reviews",
      },
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: {
        ar: "كم تستغرق الحوالة الدولية عادةً؟",
        en: "How long does an international transfer usually take?",
      },
      answer: {
        ar: "تختلف مدة التنفيذ بحسب الدولة المستقبلة والبنك المراسل والبنك المستفيد، وعادةً ما تستغرق من يوم عمل إلى عدة أيام مصرفية.",
        en: "Timing varies depending on the receiving country, correspondent bank, and beneficiary bank, and usually ranges from one business day to several banking days.",
      },
    },
    {
      id: "faq-2",
      question: {
        ar: "كيف يتم احتساب الرسوم وأسعار الصرف؟",
        en: "How are fees and exchange rates calculated?",
      },
      answer: {
        ar: "يتم توضيح الرسوم وسعر الصرف قبل اعتماد العملية النهائية، وقد تتأثر التكلفة بطبيعة التحويل والعملة والجهات الوسيطة المشاركة.",
        en: "Fees and exchange rates are clarified before final approval, and cost may be affected by the transfer type, currency, and intermediary institutions involved.",
      },
    },
    {
      id: "faq-3",
      question: {
        ar: "هل يمكن تتبع الحوالة بعد التنفيذ؟",
        en: "Can the transfer be tracked after execution?",
      },
      answer: {
        ar: "نعم، يمكن متابعة الحوالة من خلال الرقم المرجعي للعملية وبالتنسيق مع فريق البنك عند الحاجة إلى تتبع الحالة.",
        en: "Yes. The transfer can be followed up using the transaction reference number and in coordination with the bank team when status tracking is needed.",
      },
    },
    {
      id: "faq-4",
      question: {
        ar: "ما أهم البيانات المطلوبة قبل الإرسال؟",
        en: "What are the most important details required before sending?",
      },
      answer: {
        ar: "تشمل اسم المستفيد، رقم الحساب أو الآيبان، رمز السويفت للبنك المستفيد، العملة، المبلغ، وأي مستندات مرتبطة بغرض التحويل عند الحاجة.",
        en: "These include the beneficiary name, account number or IBAN, beneficiary bank SWIFT code, currency, amount, and any documents related to the transfer purpose when required.",
      },
    },
  ],
  cta: {
    label: {
      ar: "اطلب الخدمة الآن",
      en: "Request This Service",
    },
    href: "/contact",
  },
  relatedServicesKeys: ["local-transfer", "fast-money-transfer"],
  metadata: {
    title: {
      ar: "التحويلات الدولية",
      en: "International Transfers",
    },
    description: {
      ar: "أرسل أموالك دوليًا بثقة عبر شبكة البنوك المراسلة.",
      en: "Send your money internationally with confidence via our correspondent banking network.",
    },
  },
};
