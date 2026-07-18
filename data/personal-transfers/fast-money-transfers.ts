import type { PersonalTransferService } from "@/types/personal-transfer-service";

export const fastMoneyTransfersService: PersonalTransferService = {
  slug: "fast-money-transfers",
  title: {
    ar: "الحوالات السريعة",
    en: "Fast Money Transfers",
  },
  subtitle: {
    ar: "إرسال واستلام الأموال فوراً",
    en: "Send and receive money instantly",
  },
  description: {
    ar: "خدمة الحوالات السريعة توفر لك وسيلة سهلة وآمنة لنقل الأموال فوراً دون تأخير، متيحة لك وللمستفيد إتمام العملية في دقائق.",
    en: "The fast money transfer service provides an easy and secure way to transfer money instantly without delay, allowing you and the beneficiary to complete the transaction in minutes.",
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
    ar: "تم تصميم الحوالات السريعة لتلبية احتياجاتك العاجلة في إرسال واستلام الأموال. تعتمد الخدمة على نظام آمن وفعال يتيح تسليم الأموال فورا باستخدام رقم مرجعي، مما يوفر وقتك ويضمن وصول الحوالة لمن تحب بكل راحة.",
    en: "Fast money transfers are designed to meet your urgent needs for sending and receiving money. The service relies on a secure and efficient system that allows instant delivery of funds using a reference number, saving your time and ensuring the transfer reaches your loved ones comfortably.",
  },
  features: [
    {
      id: "feature-1",
      iconKey: "zap",
      title: {
        ar: "استجابة فورية",
        en: "Instant Response",
      },
      description: {
        ar: "تُرسل وتُستلم الحوالات السريعة في زمن قياسي، لتلبية متطلباتك المالية العاجلة.",
        en: "Fast transfers are sent and received in record time to meet your urgent financial requirements.",
      },
    },
    {
      id: "feature-2",
      iconKey: "smartphone",
      title: {
        ar: "تجربة مبسطة",
        en: "Simplified Experience",
      },
      description: {
        ar: "خطوات محدودة وواضحة لتنفيذ الحوالة عبر التطبيق الموبايل أو الفروع.",
        en: "Limited and clear steps to execute the transfer via the mobile app or branches.",
      },
    },
    {
      id: "feature-3",
      iconKey: "scan-line",
      title: {
        ar: "تتبع سريع ومباشر",
        en: "Direct & Quick Tracking",
      },
      description: {
        ar: "متابعة حالة الحوالة لحظة بلحظة واستلام إشعارات دقيقة عن مسارها.",
        en: "Track the transfer status moment by moment and receive accurate notifications about its progress.",
      },
    },
    {
      id: "feature-4",
      iconKey: "shield",
      title: {
        ar: "أمان عملي",
        en: "Practical Security",
      },
      description: {
        ar: "عمليات سريعة دون المساس بمعايير الأمان لحماية أموالك من الاحتيال.",
        en: "Fast operations without compromising security standards to protect your money from fraud.",
      },
    },
  ],
  benefits: [
    {
      ar: "إرسال الأموال للحالات الطارئة أو الاحتياجات الفورية بكل ثقة",
      en: "Sending money for emergencies or instant needs with confidence",
    },
    {
      ar: "شبكة تغطية تضمن استلام الحوالة بسهولة",
      en: "A coverage network that ensures easy transfer reception",
    },
    {
      ar: "رسوم مدروسة ومناسبة لسرعة إنجاز الخدمة",
      en: "Carefully considered fees suitable for the service speed",
    },
    {
      ar: "لا تتطلب إجراءات ورقية معقدة عند استخدام القنوات الرقمية",
      en: "No complex paperwork required when using digital channels",
    },
  ],
  steps: [
    {
      id: "01",
      title: {
        ar: "إنشاء الحوالة",
        en: "Create Transfer",
      },
      description: {
        ar: "اختر خدمة الحوالة السريعة من التطبيق أو عبر موظف الفرع.",
        en: "Select the fast money transfer service from the app or through a branch employee.",
      },
    },
    {
      id: "02",
      title: {
        ar: "تعبئة البيانات الأساسية",
        en: "Fill Basic Details",
      },
      description: {
        ar: "أدخل اسم المستلم، رقم الهاتف، والمبلغ المراد إرساله بدقة.",
        en: "Accurately enter the receiver's name, phone number, and the amount to be sent.",
      },
    },
    {
      id: "03",
      title: {
        ar: "نشر وإشعار",
        en: "Broadcast & Notify",
      },
      description: {
        ar: "بمجرد التأكيد، ستصدر الحوالة برقم مرجعي ويصل إشعار للمستفيد.",
        en: "Once confirmed, the transfer is issued with a reference number and the beneficiary is notified.",
      },
    },
    {
      id: "04",
      title: {
        ar: "الاستلام الفوري",
        en: "Instant Receipt",
      },
      description: {
        ar: "يمكن للمستفيد استلام المبلغ مباشرة بتزويد الرقم المرجعي وإثبات الهوية.",
        en: "The beneficiary can directly receive the amount by providing the reference number and ID.",
      },
    },
  ],
  requirements: [
    {
      id: "req-1",
      title: {
        ar: "حساب فعّال أو استخدام نظام التحويل المعتمد لدى البنك",
        en: "An active account or use of the bank's approved transfer system",
      },
    },
    {
      id: "req-2",
      title: {
        ar: "تقديم بيانات شخصية لمستلم الحوالة (كاسم رباعي ورقم هاتف)",
        en: "Provide personal details of the receiver (e.g., full name and phone number)",
      },
    },
    {
      id: "req-3",
      title: {
        ar: "رمز أو رقم الحوالة المرجعي لتأكيد التسليم",
        en: "Reference number or code of the transfer to confirm delivery",
      },
    },
    {
      id: "req-4",
      title: {
        ar: "إثبات شخصية أصلي ومطابق للاستلام الميداني",
        en: "Original matching identification for field collection",
      },
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: {
        ar: "ما هو الفرق بين الحوالات المحلية والحوالات السريعة؟",
        en: "What is the difference between local transfers and fast money transfers?",
      },
      answer: {
        ar: "الحوالات السريعة تركز على التسليم الفوري وغالباً ما تكون عبر نظم دفع سريعة تعتمد على رقم مرجعي واسم المستلم، بينما التحويلات المحلية قد تعتمد على الحسابات البنكية أو الآيبان وتستغرق دورة المقاصة المعتادة.",
        en: "Fast money transfers focus on instant delivery and often use fast payment systems based on a reference number and receiver's name, while local transfers rely on bank accounts or IBAN and take the usual clearing cycle.",
      },
    },
    {
      id: "faq-2",
      question: {
        ar: "كيف يستلم المستفيد الحوالة السريعة؟",
        en: "How does the beneficiary receive the fast money transfer?",
      },
      answer: {
        ar: "يتوجه المستفيد المدون اسمه في بيانات الحوالة لأي فرع معتمد مزوداً بالهوية سارية المفعول والرقم المرجعي للحوالة ليتمكن من استلام المبلغ فوراً.",
        en: "The beneficiary listed in the transfer details visits any authorized branch with a valid ID and the transfer reference number to receive the amount immediately.",
      },
    },
    {
      id: "faq-3",
      question: {
        ar: "هل يمكن إلغاء الحوالة السريعة؟",
        en: "Can the fast money transfer be canceled?",
      },
      answer: {
        ar: "نعم، يمكن للمرسل طلب إلغاء الحوالة واسترداد المبلغ طالما أن المستفيد لم يستلمها بعد، وفق السياسات المحددة.",
        en: "Yes, the sender can request the cancellation of the transfer and refund the amount as long as the beneficiary has not received it yet, subject to specific policies.",
      },
    },
    {
      id: "faq-4",
      question: {
        ar: "ما الذي يجب فعله في حال فقدان رقم الحوالة؟",
        en: "What should be done if the transfer number is lost?",
      },
      answer: {
        ar: "يمكن للمرسل العودة لسجل العمليات في التطبيق البنكي لاستخراج الرقم، أو زيارة الفرع للتحقق وتزويده بالرقم مرة أخرى.",
        en: "The sender can return to the transaction history in the banking app to retrieve the number, or visit the branch for verification and get the number again.",
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
  relatedServicesKeys: ["local-transfer", "e-wallet", "international-transfer"],
  metadata: {
    title: {
      ar: "الحوالات السريعة",
      en: "Fast Money Transfers",
    },
    description: {
      ar: "إرسال واستلام الأموال فوراً عبر الحوالات السريعة بكل سهولة.",
      en: "Send and receive money instantly through fast money transfers with ease.",
    },
  },
};
