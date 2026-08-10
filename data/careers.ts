export interface JobData {
  id: string;
  title: { ar: string; en: string };
  startDate: string;
  endDate: string;
  location: { ar: string; en: string };
  qualifications: { ar: string[]; en: string[] };
  responsibilities: { ar: string[]; en: string[] };
  conditions: { ar: string[]; en: string[] };
}

export const careersData: JobData[] = [
  {
    id: "customer-service-rep",
    title: { ar: "ممثل خدمة عملاء", en: "Customer Service Representative" },
    startDate: "2026-08-01",
    endDate: "2026-08-30",
    location: { ar: "عدن، اليمن", en: "Sanaa, Yemen" },
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
    }
  },
  {
    id: "it-support-specialist",
    title: { ar: "أخصائي دعم تقنية المعلومات", en: "IT Support Specialist" },
    startDate: "2026-08-05",
    endDate: "2026-09-05",
    location: { ar: "عدن، اليمن", en: "Aden, Yemen" },
    qualifications: {
      ar: [
        "بكالوريوس في علوم الحاسوب أو تقنية المعلومات.",
        "خبرة سابقة في الدعم الفني والشبكات.",
        "شهادات مهنية في مجال تقنية المعلومات (مثل CompTIA A+، CCNA)."
      ],
      en: [
        "Bachelor's degree in Computer Science or Information Technology.",
        "Previous experience in technical support and networking.",
        "Professional IT certifications (e.g., CompTIA A+, CCNA)."
      ]
    },
    responsibilities: {
      ar: [
        "تقديم الدعم الفني لموظفي البنك وحل مشاكل الأجهزة والبرامج.",
        "صيانة أجهزة الحاسوب والشبكات وملحقاتها.",
        "تثبيت وتحديث البرامج وأنظمة التشغيل.",
        "المساهمة في تنفيذ مشاريع تقنية المعلومات في البنك."
      ],
      en: [
        "Providing technical support to bank employees and resolving hardware/software issues.",
        "Maintaining computers, networks, and peripherals.",
        "Installing and updating software and operating systems.",
        "Contributing to the implementation of IT projects in the bank."
      ]
    },
    conditions: {
      ar: [
        "مهارات تحليلية وقدرة على حل المشكلات التقنية.",
        "القدرة على العمل ضمن فريق.",
        "استعداد للعمل في أوقات مرنة أو خارج أوقات الدوام الرسمي عند الحاجة."
      ],
      en: [
        "Analytical skills and ability to solve technical problems.",
        "Ability to work in a team.",
        "Willingness to work flexible hours or outside official working hours when necessary."
      ]
    }
  }
];
