import type { PersonalTransferService } from "@/types/personal-transfer-service";

export const localTransfersService: PersonalTransferService = {
  slug: "local-transfers",
  title: {
    ar: "التحويلات المحلية",
    en: "Local Transfers",
  },
  subtitle: {
    ar: "إرسال الأموال محلياً بكل أمان وموثوقية",
    en: "Send money locally safely and reliably",
  },
  description: {
    ar: "أرسل أموالك واستقبلها داخل اليمن عبر القنوات الرقمية أو فروع البنك.",
    en: "Send and receive money within Yemen via digital channels or bank branches.",
  },
  hero: {
    image: "/images/customer-services/Local-transfers.jpg",
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
    ar: "تم تصميم خدمة التحويلات المحلية لتلبي احتياجاتك اليومية في إرسال واستقبال الأموال محلياً بطريقة سريعة، واضحة الرسوم، ومتاحة عبر قنوات متعددة لضمان راحتك.",
    en: "The local transfer service is designed to meet your daily needs for sending and receiving money locally in a fast manner, with clear fees, and available across multiple channels for your convenience.",
  },
  features: [
    {
      id: "feature-1",
      iconKey: "arrow-left-right",
      title: {
        ar: "خدمة تحويل أوضح",
        en: "A Clearer Transfer Service",
      },
      description: {
        ar: "واجهة مبنية حول رحلة التنفيذ الفعلية للحوالة بدل صياغة تعريفية عامة.",
        en: "An interface built around the actual transfer journey instead of generic service messaging.",
      },
    },
    {
      id: "feature-2",
      iconKey: "wallet",
      title: {
        ar: "رسوم أكثر وضوحًا",
        en: "Clearer Fee Visibility",
      },
      description: {
        ar: "إظهار الرسوم والملاحظات التشغيلية في مواضع منطقية تساعد العميل قبل الاعتماد.",
        en: "Fees and operational notes appear in logical places to support better decision-making before approval.",
      },
    },
    {
      id: "feature-3",
      iconKey: "shield",
      title: {
        ar: "هيكل أكثر ثقة",
        en: "A More Trusted Structure",
      },
      description: {
        ar: "الترتيب الجديد يركّز على المتطلبات، الخطوات، الحدود، والتنبيهات بأسلوب مصرفي راقٍ.",
        en: "The new structure focuses on requirements, steps, limits, and alerts in a refined banking style.",
      },
    },
  ],
  channels: [
    {
      id: "app",
      label: {
        ar: "عبر التطبيق",
        en: "Via App",
      },
      title: {
        ar: "تنفيذ يومي سريع عبر التطبيق البنكي",
        en: "Quick daily execution via the banking app",
      },
      description: {
        ar: "هذا المسار مناسب عندما تكون بيانات المستفيد جاهزة وتحتاج إلى تنفيذ سريع ومراجعة واضحة قبل الإرسال.",
        en: "This path is ideal when beneficiary details are ready and you need fast execution with clear review before submission.",
      },
      items: [
        {
          id: "step-1",
          title: {
            ar: "الدخول إلى التطبيق والانتقال إلى خدمة الحوالات المحلية.",
            en: "Open the app and go to the local transfers service.",
          },
        },
        {
          id: "step-2",
          title: {
            ar: "اختيار المستفيد أو إدخال بياناته بدقة.",
            en: "Select a beneficiary or enter the details accurately.",
          },
        },
        {
          id: "step-3",
          title: {
            ar: "إدخال المبلغ ومراجعة الرسوم والتفاصيل.",
            en: "Enter the amount and review fees and details.",
          },
        },
        {
          id: "step-4",
          title: {
            ar: "تأكيد العملية واستلام الإشعار.",
            en: "Confirm the transaction and receive the notification.",
          },
        },
      ],
    },
    {
      id: "branch",
      label: {
        ar: "عبر الفرع",
        en: "Via Branch",
      },
      title: {
        ar: "تنفيذ بمساندة مباشرة من موظف الخدمة",
        en: "Execution with direct support from branch staff",
      },
      description: {
        ar: "هذا المسار مناسب عندما تحتاج إلى مراجعة مباشرة أو عندما تتطلب العملية تحققًا أو مستندات إضافية.",
        en: "This path is suitable when you need direct assistance or when the transaction requires extra verification or supporting documents.",
      },
      items: [
        {
          id: "step-1",
          title: {
            ar: "زيارة الفرع والتوجه إلى موظف الخدمة المختص.",
            en: "Visit the branch and approach the responsible service officer.",
          },
        },
        {
          id: "step-2",
          title: {
            ar: "تقديم بيانات المستفيد والوثائق المطلوبة إن وجدت.",
            en: "Provide beneficiary details and any required documents.",
          },
        },
        {
          id: "step-3",
          title: {
            ar: "مراجعة تفاصيل العملية والرسوم.",
            en: "Review the transaction details and fees.",
          },
        },
        {
          id: "step-4",
          title: {
            ar: "اعتماد الطلب واستلام تأكيد التنفيذ.",
            en: "Approve the request and receive execution confirmation.",
          },
        },
      ],
    },
  ],
  steps: [
    {
      id: "01",
      title: {
        ar: "اختيار القناة",
        en: "Choose Channel",
      },
      description: {
        ar: "ابدأ من التطبيق أو الفرع بحسب نوع العملية وحاجتك.",
        en: "Start from the app or the branch based on the transaction type and your need.",
      },
    },
    {
      id: "02",
      title: {
        ar: "إدخال البيانات",
        en: "Enter Details",
      },
      description: {
        ar: "أدخل بيانات المستفيد والمبلغ بدقة قبل المتابعة.",
        en: "Enter the beneficiary details and amount accurately before proceeding.",
      },
    },
    {
      id: "03",
      title: {
        ar: "المراجعة",
        en: "Review",
      },
      description: {
        ar: "راجع الرسوم والتفاصيل التشغيلية الظاهرة قبل التأكيد.",
        en: "Review displayed fees and operational details before confirmation.",
      },
    },
    {
      id: "04",
      title: {
        ar: "التحقق",
        en: "Verify",
      },
      description: {
        ar: "أكمل خطوات التحقق المعتمدة بحسب القناة المستخدمة.",
        en: "Complete the required verification steps according to the selected channel.",
      },
    },
    {
      id: "05",
      title: {
        ar: "التنفيذ والإشعار",
        en: "Execute & Notify",
      },
      description: {
        ar: "تتم العملية ثم تصلك حالة التنفيذ أو المعالجة.",
        en: "The transfer is executed and you receive the execution or processing status.",
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
        ar: "تظهر بوضوح قبل اعتماد الحوالة",
        en: "Displayed clearly before transfer approval",
      },
    },
    {
      id: "req-2",
      title: {
        ar: "الحدود",
        en: "Limits",
      },
      description: {
        ar: "تختلف حسب نوع الحساب وقناة التنفيذ",
        en: "Vary by account type and execution channel",
      },
    },
    {
      id: "req-3",
      title: {
        ar: "مدة التنفيذ",
        en: "Execution Time",
      },
      description: {
        ar: "ترتبط بوقت الطلب والجهة المستفيدة",
        en: "Depends on request time and beneficiary institution",
      },
    },
    {
      id: "req-4",
      title: {
        ar: "التحقق الإضافي",
        en: "Additional Verification",
      },
      description: {
        ar: "قد يُطلب لبعض العمليات حفاظًا على الأمان",
        en: "May be required for some transactions for security purposes",
      },
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: {
        ar: "هل يمكن تنفيذ الحوالة المحلية من التطبيق؟",
        en: "Can a local transfer be executed through the app?",
      },
      answer: {
        ar: "نعم، يمكن تنفيذ الحوالات المحلية عبر التطبيق متى كانت الخدمة الرقمية مفعلة وكانت بيانات المستفيد متوفرة بشكل صحيح، مع مراعاة سياسات التحقق والحدود المطبقة على القناة.",
        en: "Yes. Local transfers can be executed through the app when the digital service is enabled and beneficiary information is correctly available, subject to verification policies and channel limits.",
      },
    },
    {
      id: "faq-2",
      question: {
        ar: "متى تظهر الرسوم الخاصة بالحوالة؟",
        en: "When are transfer fees shown?",
      },
      answer: {
        ar: "تُعرض الرسوم قبل التأكيد النهائي للحوالة حتى يتمكن العميل من مراجعة التكلفة بوضوح قبل الاعتماد.",
        en: "Fees are displayed before final transfer confirmation so the customer can clearly review the cost before approval.",
      },
    },
    {
      id: "faq-3",
      question: {
        ar: "هل تختلف مدة التنفيذ بين التطبيق والفرع؟",
        en: "Does execution timing differ between the app and the branch?",
      },
      answer: {
        ar: "قد تختلف مدة التنفيذ بحسب قناة التنفيذ ووقت الطلب والجهة المستفيدة وإجراءات التحقق المرتبطة بالعملية.",
        en: "Execution timing may vary depending on the execution channel, request time, beneficiary institution, and the verification procedures linked to the transaction.",
      },
    },
    {
      id: "faq-4",
      question: {
        ar: "ما البيانات التي يجب التأكد منها قبل الإرسال؟",
        en: "Which details should be checked before submission?",
      },
      answer: {
        ar: "يجب التأكد من اسم المستفيد، رقم الحساب أو الآيبان عند الحاجة، قيمة الحوالة، وأي بيانات إضافية مطلوبة لضمان تنفيذ العملية بسلاسة.",
        en: "You should verify the beneficiary name, account number or IBAN when needed, transfer amount, and any additional required data to ensure smooth execution.",
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
  relatedServicesKeys: ["international-transfer", "dool-express"],
  metadata: {
    title: {
      ar: "التحويلات المحلية",
      en: "Local Transfers",
    },
    description: {
      ar: "أرسل واستقبل الأموال محليًا بكل أمان وسهولة عبر قنوات متعددة.",
      en: "Send and receive money locally with ease and security across multiple channels.",
    },
  },
};
