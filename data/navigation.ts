import {
  Wallet,
  HandCoins,
  TrendingUp,
  CreditCard,
  Building2,
  Briefcase,
  Users,
  Banknote,
  Send,
  Phone,
  FileText,
  Smartphone,
  Globe2,
  ShieldCheck,
  Landmark,
  Monitor,
  Video,
  Newspaper,
  Calendar,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  HeartHandshake,
  UserCheck,
  BadgeCheck,
  BriefcaseBusiness,
  Building,
  UserCog,
  Baby,
  Plane,
  Calculator,
  Laptop,
  GraduationCap
} from "lucide-react";


export type NavLink = {
  key: string;
  href: string;
  label: { ar: string; en: string };
  desc?: { ar: string; en: string };
  icon?: any;
  subLinks?: NavLink[];
};

export type NavSubGroup = {
  title: { ar: string; en: string };
  links: NavLink[];
};

export type NavItem = {
  key: string;
  href: string;
  label: { ar: string; en: string };
  image?: string;
  imageTitle?: { ar: string; en: string };
  imageDesc?: { ar: string; en: string };
  imageLink?: string;
  groups?: NavSubGroup[];
  singleLinks?: NavLink[];
};

export const navigationData: NavItem[] = [
  {
    key: "about",
    href: "/about",
    label: { ar: "عن البنك", en: "About Us" },
    image: "/images/about-header-cover.jpg",
    imageTitle: { ar: "بنك بن دول", en: "Bin Dowal Bank" },
    imageDesc: { ar: "شريكك المالي الموثوق نحو مستقبل مستدام وخدمات مصرفية راقية.", en: "Your trusted financial partner towards a sustainable future." },
    imageLink: "/about",
    singleLinks: [
      { key: "aboutUs", href: "/about", label: { ar: "نبذة عن البنك", en: "About the Bank" }, icon: Landmark },
      { key: "vision", href: "/about#vision", label: { ar: "الرؤية والرسالة", en: "Vision & Mission" }, icon: Lightbulb },
      { key: "board", href: "/about/board-of-directors", label: { ar: "مجلس الإدارة", en: "Board of Directors" }, icon: Users },
      { key: "management", href: "/about#management", label: { ar: "الإدارة التنفيذية", en: "Executive Management" }, icon: UserCheck },
      { key: "reports", href: "/about/annual-reports", label: { ar: "التقارير السنوية", en: "Annual Reports" }, icon: FileText },
      { key: "partners", href: "/about/partners", label: { ar: "الشركاء", en: "Partners" }, icon: HeartHandshake },
      { key: "social", href: "/about/social-responsibility", label: { ar: "المسؤولية المجتمعية", en: "Social Responsibility" }, icon: HeartHandshake },
    ]
  },
  {
    key: "personalBanking",
    href: "",
    label: { ar: "خدمات الأفراد", en: "Personal Banking" },
    image: "/images/personalCover.png",
    imageTitle: { ar: "حلول الأفراد", en: "Personal Solutions" },
    imageDesc: { ar: "خدمات مصرفية تلبي احتياجاتك اليومية وتطلعاتك المستقبلية.", en: "Banking services tailored to your daily needs and future aspirations." },
    imageLink: "/personal",
    groups: [
      {
        title: { ar: "الحسابات", en: "Accounts" },
        links: [
          { key: "currentAccount", href: "/personal/current-account", label: { ar: "الحساب الجاري", en: "Current Account" }, icon: Wallet },
          { key: "savingsAccount", href: "/personal/savings-account", label: { ar: "حساب التوفير", en: "Savings Account" }, icon: Wallet },
          { key: "investmentDeposits", href: "/personal/investment-deposit", label: { ar: "الودائع الاستثمارية", en: "Investment Deposits" }, icon: TrendingUp },
        ]
      },
      {
        title: { ar: "الخدمات المالية", en: "Financial Services" },
        links: [
          {
            key: "localTransfers",
            href: "/personal/local-transfers",
            label: { ar: "التحويلات المحلية", en: "Local Transfers" },
            icon: Send,
            subLinks: [
              { key: "doolExpress", href: "/personal/dool-express", label: { ar: "دول إكسبرس", en: "Dool Express" } },
              { key: "unifiedNetwork", href: "/personal/unified-network", label: { ar: "الشبكة الموحدة", en: "Unified Network" } },
            ]
          },
          {
           key: "expressRemittances",
             href: "/personal/fast-money-transfers",
            label: { ar: "الحوالات السريعة", en: "Express Remittances" },
            icon: Plane,
            subLinks: [
              { key: "moneygram", href: "/personal/moneygram", label: { ar: "موني جرام", en: "MoneyGram" } },
              { key: "shift", href: "/personal/shift", label: { ar: "شفت", en: "Shift" } },
              { key: "upt", href: "/personal/upt", label: { ar: "يو بي تي UPT", en: "UPT" } },
              { key: "bin-yaala", href: "/personal/bin-yaala", label: { ar: "بن يعلا", en: "Bin Yaala" } },
              { key: "alawneh", href: "/personal/alawneh", label: { ar: "العلاونة - الأردن", en: "Alawneh - Jordan" } },
              { key: "zamzam", href: "/personal/zamzam", label: { ar: "زمزم - الأردن", en: "Zamzam - Jordan" } },
              { key: "swift", href: "/personal/swift", label: { ar: "سويفت", en: "Swift" } },
            ]
          },
          // { key: "expressRemittances", href: "/personal/fast-money-transfers", label: { ar: "الحوالات السريعة", en: "Express Remittances" }, icon: Plane },
        ]
      },
      
      // {
      //   title: { ar: "البطاقات", en: "Cards" },
      //   links: [
      //     { key: "creditCard", href: "/personal/credit-card", label: { ar: "بطاقة الائتمان", en: "Credit Card" }, icon: CreditCard },
      //     { key: "debitCard", href: "/personal/debit-card", label: { ar: "بطاقة الخصم المباشر", en: "Debit Card" }, icon: Banknote },
      //     { key: "prepaidCard", href: "/personal/prepaid-card", label: { ar: "بطاقة مسبقة الدفع", en: "Prepaid Card" }, icon: Wallet },
      //     { key: "virtualCard", href: "/personal/virtual-card", label: { ar: "بطاقة الدفع الافتراضية", en: "Virtual Card" }, icon: Smartphone },
      //   ]
      // },
      // {
      //   title: { ar: "الخدمات الإلكترونية", en: "E-Services" },
      //   links: [
      //     { key: "mobileBanking", href: "/personal/mobile-banking", label: { ar: "الموبايل البنكي", en: "Mobile Banking" }, icon: Smartphone },
      //     { key: "eWallet", href: "/personal/e-wallet", label: { ar: "المحفظة الإلكترونية", en: "e-Wallet" }, icon: ShieldCheck },
      //     { key: "pos", href: "/personal/mushtarayati-network", label: { ar: "نقاط البيع شبكة مشترياتي", en: "POS Mushtarayati" }, icon: Monitor },
      //   ]
      // },

    ]
  },

  {
    key: "businessBanking",
    href: "/business",
    label: { ar: "بن دول أعمال", en: "Bin Dowal Business" },
    image: "/images/company-header-cover.png",
    imageTitle: { ar: "تمكين الشركات", en: "Empowering Business" },
    imageDesc: { ar: "حلول أعمال متكاملة تدعم نمو مستقبلك التجاري عبر باقات تمويلية وخدمات إدارة النقد والحلول الرقمية.", en: "Comprehensive business solutions." },
    imageLink: "/business",
    groups: [
      {
        title: { ar: "الشركات الكبيرة والمتوسطة", en: "Large Corporate" },
        links: [
          { key: "corpCurrent", href: "/business/corporate-current-account", label: { ar: "حسابات مصرفية", en: "Bank Accounts" }, icon: Building2 },
          { key: "corpInvestments", href: "/business/corporate-investment-deposits", label: { ar: "الودائع الاستثمارية", en: "Investment Deposits" }, icon: TrendingUp },
          { key: "corpFinance", href: "/business#finance", label: { ar: "التمويلات التجارية", en: "Commercial Financing" }, icon: BriefcaseBusiness },
          { key: "swift", href: "/business/swift-transfers", label: { ar: "حوالات السويفت", en: "SWIFT Transfers" }, icon: Globe2 },
          // { key: "credits", href: "/business#credits", label: { ar: "الاعتمادات المستندية", en: "Letters of Credit" }, icon: FileText },
          { key: "guarantees", href: "/business/bank-guarantees", label: { ar: "الضمانات البنكية", en: "Bank Guarantees" }, icon: ShieldCheck },
          { key: "cashManagement", href: "/business#cash", label: { ar: "إدارة النقد", en: "Cash Management" }, icon: Calculator },
          { key: "payroll", href: "/business#payroll", label: { ar: "تحويل الرواتب", en: "Payroll Management" }, icon: Users },
          // { key: "intlTrade", href: "/business#trade", label: { ar: "خدمات التجارة الدولية", en: "International Trade" }, icon: Plane },
        ]
      },
      // {
      //   title: { ar: "الشركات المتوسطة", en: "Medium Enterprises" },
      //   links: [
      //     { key: "medFinance", href: "/business#med-finance", label: { ar: "التمويل التجاري", en: "Commercial Financing" }, icon: BriefcaseBusiness },
      //     { key: "medGuarantees", href: "/business/bank-guarantees", label: { ar: "الضمانات", en: "Guarantees" }, icon: ShieldCheck },
      //     { key: "medTransfers", href: "/business#transfers", label: { ar: "الحوالات", en: "Transfers" }, icon: Send },
      //     { key: "medCash", href: "/business#cash", label: { ar: "إدارة النقد", en: "Cash Management" }, icon: Calculator },
      //   ]
      // },
      {
        title: { ar: "الشركات الصغيرة", en: "Small Businesses" },
        links: [
          { key: "smallProjects", href: "/financing#business", label: { ar: "تمويل المشاريع", en: "Projects Financing" }, icon: Briefcase },
          { key: "smallAccounts", href: "/business/corporate-current-account", label: { ar: "حسابات الأعمال", en: "Business Accounts" }, icon: Wallet },
          { key: "smallPayments", href: "/business#payments", label: { ar: "خدمات الدفع", en: "Payment Services" }, icon: Banknote },
        ]
      }
    ]
  },
  {
    key: "customServices",
    href: "/custom-services",
    label: { ar: "خدمات مخصصة", en: "Custom Services" },
    groups: [
      {
        title: { ar: "حساب المغتربين", en: "Expatriate Account" },
        links: [
          { key: "expatCurrent", href: "/accounts/expat", label: { ar: "حسابات جارية بالعملات الأجنبية", en: "Foreign Currency Accounts" }, icon: Globe2 },
          { key: "expatSavings", href: "/accounts/expat#savings", label: { ar: "حسابات التوفير والودائع", en: "Savings & Investments" }, icon: HandCoins },
          { key: "expatIntl", href: "/accounts/expat#intl-transfers", label: { ar: "خدمات التحويل الدولي", en: "International Transfers" }, icon: Send },
          { key: "expatLocal", href: "/accounts/expat#local-transfers", label: { ar: "خدمات التحويل المحلي", en: "Local Transfers" }, icon: Landmark },
          { key: "expatDigital", href: "/digital", label: { ar: "الخدمات الرقمية", en: "Digital Services" }, icon: Laptop },
        ]
      },
      {
        title: { ar: "حساب القاصر", en: "Minors Account" },
        links: [
          { key: "minorSavings", href: "/personal/minors-account", label: { ar: "حساب توفير", en: "Savings Account" }, icon: Baby },
          { key: "minorInvestments", href: "/personal/minors-account#investments", label: { ar: "حساب الودائع الاستثمارية", en: "Investment Deposit Account" }, icon: TrendingUp },
        ]
      },
      {
        title: { ar: "حساب نور للسيدات", en: "Noor Account (Ladies)" },
        links: [
          { key: "noorCurrent", href: "/accounts/noor", label: { ar: "حسابات الجارية", en: "Bank Accounts" }, icon: Wallet },
          { key: "noorSavings", href: "/accounts/noor#savings", label: { ar: "حسابات التوفير", en: "Savings Accounts" }, icon: HandCoins },
          { key: "noorInvestments", href: "/accounts/noor#investments", label: { ar: "الودائع الاستثمارية", en: "Investment Deposits" }, icon: TrendingUp },
          { key: "noorCard", href: "/cards/noor-card", label: { ar: "بطاقة نور البنكية", en: "Noor Bank Card" }, icon: CreditCard },
          { key: "noorDigital", href: "/digital", label: { ar: "الخدمات الرقمية", en: "Digital Services" }, icon: Laptop },
        ]
      },
      {
        title: { ar: "التمويلات", en: "Financing" },
        links: [
          // { key: "personalFinance", href: "/personal/financing-personal", label: { ar: "التمويل الشخصي", en: "Personal Financing" }, icon: UserCheck },
          // { key: "realEstate", href: "/personal/financing-home", label: { ar: "التمويل العقاري", en: "Real Estate Financing" }, icon: Building },
          // { key: "smallProjects", href: "/personal/financing-business", label: { ar: "تمويل المشاريع الصغيرة", en: "Small Projects Financing" }, icon: Briefcase },
          { key: "financingTakamul", href: "/personal/financing-takamul", label: { ar: "تكامل", en: "Takamul" }, icon: Lightbulb },
          { key: "financingThimar", href: "/personal/financing-thimar", label: { ar: "ثمار", en: "Thimar" }, icon: TrendingUp },
          { key: "financingTaameer", href: "/personal/financing-taameer", label: { ar: "تعمير", en: "Ta'meer" }, icon: Building2 },
          { key: "financingNoor", href: "/personal/financing-noor", label: { ar: "نور", en: "Noor" }, icon: HeartHandshake },
          { key: "financingZad", href: "/personal/financing-zad", label: { ar: "زاد", en: "Zad" }, icon: GraduationCap },
        ]
      },
      // {
      //   title: { ar: "حساب الشباب", en: "Youth Account" },
      //   links: [
      //     { key: "youthCurrent", href: "/accounts/youth", label: { ar: "حسابات جارية", en: "Bank Accounts" }, icon: Wallet },
      //     { key: "youthEdu", href: "/accounts/youth#education", label: { ar: "تمويل التعليم", en: "Education Financing" }, icon: Building2 },
      //     { key: "youthDigital", href: "/digital", label: { ar: "الخدمات الرقمية", en: "Digital Services" }, icon: Smartphone },
      //   ]
      // },


    ]
  },
  {
    key: "digitalChannels",
    href: "/e-services",
    label: { ar: "الخدمات الإلكترونية", en: "E-Services" },
    singleLinks: [
      { key: "bankApp", href: "/e-services/mobile-banking", label: { ar: "التطبيق البنكي", en: "Mobile Banking" }, icon: Smartphone },
      { key: "internetBank", href: "/e-services/bindawal-business", label: { ar: "منصة بن دول اعمال", en: "Internet Banking" }, icon: Monitor },
      { key: "eWallet", href: "/e-services/e-wallet", label: { ar: "المحفظة الإلكترونية", en: "e-Wallet" }, icon: ShieldCheck },
      { key: "posNet", href: "/e-services/mushtarayati-network", label: { ar: "شبكة مشترياتي", en: "Mushtarayati Network" }, icon: Monitor },
      { key: "bankCards", href: "/cards", label: { ar: "البطاقات البنكية", en: "Bank Cards" }, icon: CreditCard },
    ]
  },
  {
    key: "knowledgeCenter",
    href: "/knowledge",
    label: { ar: "مركز المعرفة", en: "Knowledge Center" },
    singleLinks: [
      { key: "faq", href: "/knowledge-center/faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" }, desc: { ar: "إجابات واضحة ومنظمة لأكثر الاستفسارات شيوعًا حول خدمات البنك", en: "Clear organized answers to the most common questions about bank services" }, icon: HelpCircle },
      { key: "guides", href: "/knowledge#guides", label: { ar: "الأدلة التعليمية", en: "Educational Guides" }, icon: FileText },
      { key: "videos", href: "/knowledge#videos", label: { ar: "الفيديوهات التوضيحية", en: "Explainer Videos" }, icon: Video },
      { key: "awareness", href: "/knowledge#awareness", label: { ar: "التوعية المالية", en: "Financial Awareness" }, icon: Lightbulb },
    ]
  },
  {
    key: "news",
    href: "/news",
    label: { ar: "الاخبار", en: "News" },
    singleLinks: [
      { key: "bankNews", href: "/news", label: { ar: "أخبار البنك", en: "Bank News" }, icon: Newspaper },
      { key: "events", href: "/news#events", label: { ar: "الفعاليات", en: "Events" }, icon: Calendar },
      { key: "marketing", href: "/news#campaigns", label: { ar: "الحملات التسويقية", en: "Marketing Campaigns" }, icon: TrendingUp },
      { key: "pressRelease", href: "/news#press", label: { ar: "البيانات الصحفية", en: "Press Releases" }, icon: MessageSquare },
    ]
  },
  {
    key: "contact",
    href: "/contact",
    label: { ar: "خدمة العملاء", en: "Customer Service" },
    singleLinks: [
      { key: "contactUs", href: "/contact", label: { ar: "تواصل معنا", en: "Contact Us" }, icon: Phone },
      {
        key: "complaint",
        href: "/customer-service/complaints",
        label: { ar: "تقديم شكوى", en: "Submit a Complaint" },
        desc: { ar: "قناة منظمة لاستقبال الشكاوى ومتابعتها بعناية ومهنية", en: "Organized channel for receiving and professionally following up on complaints" },
        icon: ShieldCheck
      },
      {
        key: "requestService",
        href: "/customer-service/service-request",
        label: { ar: "طلب خدمة", en: "Request a Service" },
        desc: { ar: "مسار واضح وميسر لتقديم طلبات الخدمات المصرفية", en: "Clear and accessible pathway for submitting banking service requests" },
        icon: Briefcase
      },
      {
        key: "creditCardRequest",
        href: "/customer-service/bank-cards-request",
        label: { ar: "طلب بطاقة بنكية", en: "Credit Card Request" },
        desc: { ar: "نموذج لطلب الحصول على منتجات وبطاقات بنك بن دول", en: "Form to request Bin Dowal Bank products and cards" },
        icon: CreditCard
      },
      // { key: "callCenter", href: "/contact#call-center", label: { ar: "مركز الاتصال", en: "Call Center" }, icon: UserCog },
    ]
  }
];
