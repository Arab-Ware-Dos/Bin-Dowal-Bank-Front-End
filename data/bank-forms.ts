export interface BankForm {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
  fileSize: string;
  fileType: string;
  fileUrl: string;
  updatedAt: string;
}

export const bankFormsData: BankForm[] = [
  {
    id: "account-opening-personal",
    title: {
      ar: "نموذج فتح حساب للأفراد",
      en: "Personal Account Opening Form",
    },
    description: {
      ar: "النموذج الرسمي المعتمد لطلب فتح حساب مصرفي للأفراد (جاري، توفير، أو وديعة استثمارية) مع الإقرارات والشروط والأحكام الخاصة بالبنك.",
      en: "The official approved form for requesting a personal bank account (Current, Savings, or Investment Deposit) along with bank declarations and terms.",
    },
    category: {
      ar: "حسابات الأفراد",
      en: "Personal Accounts",
    },
    fileSize: "1.1 MB",
    fileType: "PDF",
    fileUrl: "/documents/نموذج فتح حساب.pdf",
    updatedAt: "2026-07-01",
  },
  {
    id: "debit-card-request",
    title: {
      ar: "نموذج طلب إصدار بطاقة مصرفية (خصم مباشر)",
      en: "Debit Card Application Form",
    },
    description: {
      ar: "نموذج تقديم طلب إصدار أو تجديد أو استبدال بطاقة الخصم المباشر (ATM) للوصول إلى حسابك وسحب الأموال ومشتريات نقاط البيع.",
      en: "Application form to request, renew, or replace a Debit Card (ATM) for accessing your account, cash withdrawals, and POS purchases.",
    },
    category: {
      ar: "البطاقات المصرفية",
      en: "Bank Cards",
    },
    fileSize: "1.1 MB",
    fileType: "PDF",
    fileUrl: "/documents/نموذج فتح حساب.pdf",
    updatedAt: "2026-06-15",
  },
  {
    id: "e-services-application",
    title: {
      ar: "نموذج طلب الاشتراك في الخدمات الإلكترونية",
      en: "E-Services Subscription Form",
    },
    description: {
      ar: "نموذج تفعيل أو تعديل الصلاحيات لخدمات تطبيق الموبايل البنكي، ومنصة الإنترنت المصرفية، وخدمات الإشعارات الفورية للعملاء.",
      en: "Form to activate or modify privileges for Mobile Banking app, Internet Banking platform, and instant customer notification services.",
    },
    category: {
      ar: "الخدمات الإلكترونية",
      en: "E-Services",
    },
    fileSize: "1.1 MB",
    fileType: "PDF",
    fileUrl: "/documents/نموذج فتح حساب.pdf",
    updatedAt: "2026-05-20",
  },
  {
    id: "customer-data-update",
    title: {
      ar: "نموذج تحديث بيانات العميل (KYC)",
      en: "Customer Data Update Form (KYC)",
    },
    description: {
      ar: "نموذج تحديث المعلومات الشخصية، وعناوين الاتصال، والبيانات المالية، ومصادر الدخل الدورية لضمان استمرارية الخدمات المصرفية دون انقطاع.",
      en: "Form to update personal information, contact addresses, financial data, and income sources to ensure uninterrupted banking services.",
    },
    category: {
      ar: "خدمة العملاء",
      en: "Customer Service",
    },
    fileSize: "1.1 MB",
    fileType: "PDF",
    fileUrl: "/documents/نموذج فتح حساب.pdf",
    updatedAt: "2026-07-10",
  },
  {
    id: "personal-financing-application",
    title: {
      ar: "نموذج طلب تمويل الأفراد (تكامل / ثمار / تعمير)",
      en: "Personal Financing Application Form",
    },
    description: {
      ar: "نموذج التقدم للحصول على تمويل إسلامي للأفراد والمهنيين لأغراض السكن، أو اقتناء المركبات، أو التمويل الشخصي المتوافق مع أحكام الشريعة.",
      en: "Application form to apply for Islamic personal and professional financing for housing, vehicle acquisition, or Sharia-compliant personal needs.",
    },
    category: {
      ar: "التمويل والمشاريع",
      en: "Financing",
    },
    fileSize: "1.1 MB",
    fileType: "PDF",
    fileUrl: "/documents/نموذج فتح حساب.pdf",
    updatedAt: "2026-04-12",
  },
  {
    id: "financial-complaint-form",
    title: {
      ar: "نموذج تقديم شكوى أو اعتراض على عملية مالية",
      en: "Complaint & Transaction Objection Form",
    },
    description: {
      ar: "نموذج مخصص لتقديم الاعتراضات المالية أو الشكاوى الرسمية بشأن العمليات المصرفية وأجهزة الصراف الآلي والبطاقات ليتم معالجتها من قبل وحدة رعاية العملاء.",
      en: "Form dedicated to submitting financial objections or formal complaints regarding banking operations, ATMs, and cards for processing by Customer Care.",
    },
    category: {
      ar: "خدمة العملاء",
      en: "Customer Service",
    },
    fileSize: "1.1 MB",
    fileType: "PDF",
    fileUrl: "/documents/نموذج فتح حساب.pdf",
    updatedAt: "2026-06-28",
  },
];
