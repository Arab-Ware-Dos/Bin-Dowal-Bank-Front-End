export interface BankForm {
  id: string;
  title: {
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
    id: "mobile-and-internet-banking-subscription-form",
    title: {
      ar: "طلب اشتراك الموبايل و الوايب المصرفي",
      en: "Mobile and Internet Banking Subscription Form",
    },
    fileSize: "809 KB",
    fileType: "PDF",
    fileUrl: "/documents/طلب اشتراك الموبايل و الوايب المصرفي.pdf",
    updatedAt: "2026-07-01",
  },
  {
    id: "kyc-form",
    title: {
      ar: "KYC form",
      en: "KYC form",
    },
    fileSize: "252 KB",
    fileType: "PDF",
    fileUrl: "/documents/KYC form.pdf",
    updatedAt: "2026-06-15",
  },
  {
    id: "entity-account-opening-agreement",
    title: {
      ar: "اتفاقية فتح الحساب (كيانات اعتباريه)",
      en: "Account Opening Agreement (Business Entities)",
    },
    fileSize: "2.5 MB",
    fileType: "PDF",
    fileUrl: "/documents/Account Opening Agreement (Business Entities).pdf",
    updatedAt: "2026-07-28",
  },
 
];
