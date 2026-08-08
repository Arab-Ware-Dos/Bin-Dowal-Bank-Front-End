export interface JobData {
  id: string;
  slug?: string;
  title: { ar: string; en: string };
  startDate: string;
  endDate: string;
  location: { ar: string; en: string };
  department?: { ar: string; en: string };
  employmentType?: string;
  applicationEmail?: string;
  qualifications: { ar: string[]; en: string[] };
  responsibilities: { ar: string[]; en: string[] };
  conditions: { ar: string[]; en: string[] };
  description?: { ar: string; en: string };
  isActive?: boolean;
}

export const careersData: JobData[] = [
  {
    id: "1",
    slug: "customer-service-representative",
    title: { ar: "ممثل خدمة عملاء", en: "Customer Service Representative" },
    startDate: "2026-08-01",
    endDate: "2026-08-30",
    location: { ar: "عدن، اليمن", en: "Aden, Yemen" },
    department: { ar: "خدمة العملاء", en: "Customer Service" },
    employmentType: "دوام كامل",
    applicationEmail: "careers@bindowalbank.com",
    qualifications: {
      ar: [
        "درجة البكالوريوس في إدارة الأعمال أو مجال ذي صلة.",
        "خبرة لا تقل عن سنتين في مجال خدمة العملاء.",
        "إجادة استخدام الحاسب الآلي وتطبيقات الأوفيس."
      ],
      en: [
        "Bachelor's degree in Business Administration or a related field.",
        "Minimum 2 years of experience in customer service.",
        "Proficiency in computer skills and MS Office applications."
      ]
    },
    responsibilities: {
      ar: [
        "استقبال العملاء والترحيب بهم وتقديم المساعدة اللازمة.",
        "الرد على استفسارات العملاء وشكاويهم بكفاءة وفعالية.",
        "تنفيذ المعاملات المصرفية بدقة وسرعة.",
        "ترويج خدمات ومنتجات البنك للعملاء."
      ],
      en: [
        "Welcoming customers and providing necessary assistance.",
        "Responding to customer inquiries and complaints efficiently and effectively.",
        "Executing banking transactions accurately and quickly.",
        "Promoting bank services and products to customers."
      ]
    },
    conditions: {
      ar: [
        "القدرة على العمل تحت الضغط.",
        "مهارات تواصل ممتازة.",
        "اللباقة وحسن المظهر.",
        "التفرغ التام للعمل."
      ],
      en: [
        "Ability to work under pressure.",
        "Excellent communication skills.",
        "Tact and good appearance.",
        "Full-time commitment."
      ]
    },
    description: {
      ar: "يسر بنك بن دول للتمويل الأصغر الإسلامي الإعلان عن فتح باب التقديم لوظيفة ممثل خدمة عملاء في الفرع الرئيسي لمدينة عدن.",
      en: "Bin Dowal Bank for Islamic Microfinance is pleased to announce a job vacancy for a Customer Service Representative in Aden main branch."
    },
    isActive: true
  },
  {
    id: "2",
    slug: "it-support-specialist",
    title: { ar: "أخصائي دعم تقنية المعلومات", en: "IT Support Specialist" },
    startDate: "2026-08-01",
    endDate: "2026-09-05",
    location: { ar: "عدن، اليمن", en: "Aden, Yemen" },
    department: { ar: "تقنية المعلومات", en: "Information Technology" },
    employmentType: "دوام كامل",
    applicationEmail: "careers@bindowalbank.com",
    qualifications: {
      ar: [
        "بكالوريوس تقنية معلومات أو علوم حاسوب.",
        "خبرة لا تقل عن 3 سنوات في الدعم الفني المصرفي."
      ],
      en: [
        "Bachelor's degree in IT or Computer Science.",
        "At least 3 years experience in banking IT support."
      ]
    },
    responsibilities: {
      ar: [
        "متابعة وصيانة شبكات البنك وأجهزة الحاسوب.",
        "تقديم الدعم الفني لموظفي الفروع.",
        "إدارة الأنظمة المصرفية وحل المشكلات الفنية."
      ],
      en: [
        "Monitor and maintain bank networks and computer equipment.",
        "Provide technical support to branch staff.",
        "Manage banking systems and solve technical issues."
      ]
    },
    conditions: {
      ar: [
        "إجادة الشبكات والأنظمة التشغيلية.",
        "التفرغ التام وإمكانية التنقل."
      ],
      en: [
        "Proficiency in networks and operating systems.",
        "Full-time commitment and mobility."
      ]
    },
    description: {
      ar: "إعلان عن توفر فرصة عمل لأخصائي دعم تقنية المعلومات.",
      en: "Job opportunity announcement for IT Support Specialist."
    },
    isActive: true
  }
];
