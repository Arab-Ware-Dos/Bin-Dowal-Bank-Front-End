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
  Scale,
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
  logo?: string;
  cols?: number;
  subLinks?: NavLink[];
};

export type NavSubGroup = {
  title: { ar: string; en: string };
  cols?: number;
  rows?: number;
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
      { key: "vision", href: "/about#vision", label: { ar: "التوجهات الإستراتيجية", en: "Strategic Directions" }, icon: Lightbulb },
      { key: "board", href: "/about/board-of-directors", label: { ar: "مجلس الإدارة", en: "Board of Directors" }, icon: Users },
      { key: "management", href: "/about#management", label: { ar: "الإدارة التنفيذية", en: "Executive Management" }, icon: UserCheck },
      { key: "partners", href: "/about/partners", label: { ar: "الشركاء", en: "Partners" }, icon: HeartHandshake },
      { key: "social", href: "/about/social-responsibility", label: { ar: "المسؤولية المجتمعية", en: "Social Responsibility" }, icon: HeartHandshake },
      { key: "compliance", href: "/about/compliance-statement", label: { ar: "بيان الامتثال", en: "Compliance Statement" }, icon: ShieldCheck },
      { key: "governance", href: "/about/corporate-governance", label: { ar: "الحوكمة المؤسسية", en: "Corporate Governance" }, icon: Scale },
    ]
  },
  {
    key: "personalBanking",
    href: "/personal-banking",
    label: { ar: "خدمات الأفراد", en: "Personal Banking" },
    image: "/images/personalCover.png",
    imageTitle: { ar: "حلول الأفراد", en: "Personal Solutions" },
    imageDesc: { ar: "خدمات مصرفية تلبي احتياجاتك اليومية وتطلعاتك المستقبلية.", en: "Banking services tailored to your daily needs and future aspirations." },
    imageLink: "/personal-banking",
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
        cols: 2,
        links: [
          {
            key: "localTransfers",
            href: "/personal/local-transfers",
            label: { ar: "التحويلات المحلية", en: "Local Transfers" },
            icon: Send,
            subLinks: [
              { key: "doolExpress", href: "/personal/dool-express", label: { ar: "دول إكسبرس", en: "Dool Express" }, logo: "/images/partners/local/dool-express.png" },
              { key: "unifiedNetwork", href: "/personal/unified-network", label: { ar: "الشبكة الموحدة", en: "UNMoney" }, logo: "/images/partners/local/unmoney.png" },
            ]
          },
          {
            key: "expressRemittances",
            href: "/personal/fast-money-transfers",
            label: { ar: "الحوالات السريعة", en: "Express Remittances" },
            icon: Plane,
            cols: 1,
            subLinks: [
              { key: "moneygram", href: "/personal/moneygram", label: { ar: "موني جرام", en: "MoneyGram" }, logo: "/images/partners/international/Asset 43@3x.png" },
              { key: "shift", href: "/personal/shift", label: { ar: "شفت", en: "Shift" }, logo: "/images/partners/international/Shift-logo.png" },
              { key: "upt", href: "/personal/upt", label: { ar: "UPT", en: "UPT" }, logo: "/images/partners/international/Asset 44@3x.png" },
              { key: "bin-yaala", href: "/personal/bin-yaala", label: { ar: "بن يعلا", en: "Bin Yaala" }, logo: "/images/partners/international/Asset 46@3x.png" },
              { key: "alawneh", href: "/personal/alawneh", label: { ar: "العلاونة", en: "Alawneh" }, logo: "/images/partners/international/Asset 53@3x.png" },
              { key: "zamzam", href: "/personal/zamzam", label: { ar: "زمزم", en: "Zamzam" }, logo: "/images/partners/international/Asset 49@3x.png" },
              { key: "swift", href: "/personal/swift", label: { ar: "سويفت", en: "Swift" }, logo: "/images/partners/international/Asset 48@3x.png" },
            ]
          },
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
    href: "/business-banking",
    label: { ar: "بن دول أعمال", en: "Bin Dowal Business" },
    image: "/images/company-header-cover.png",
    imageTitle: { ar: "تمكين الشركات", en: "Empowering Business" },
    imageDesc: { ar: "حلول أعمال متكاملة تدعم نمو مستقبلك التجاري عبر باقات تمويلية وخدمات إدارة النقد والحلول الرقمية.", en: "Comprehensive business solutions." },
    imageLink: "/business-banking",
    groups: [
      {
        title: { ar: "الشركات الكبيرة والمتوسطة", en: "Large Corporate" },
        cols: 2,
        rows: 5,
        links: [
          { key: "corpCurrent", href: "/business/corporate-current-account", label: { ar: "حسابات مصرفية", en: "Bank Accounts" }, icon: Building2 },
          { key: "corpInvestments", href: "/business/corporate-investment-deposits", label: { ar: "الودائع الاستثمارية", en: "Investment Deposits" }, icon: TrendingUp },
          { key: "swift", href: "/business/swift-transfers", label: { ar: "حوالات السويفت", en: "SWIFT Transfers" }, icon: Globe2 },
          // { key: "credits", href: "/business#credits", label: { ar: "الاعتمادات المستندية", en: "Letters of Credit" }, icon: FileText },
          { key: "guarantees", href: "/business/bank-guarantees", label: { ar: "خطابات الضمان", en: "Letters of Guarantees" }, icon: ShieldCheck },
          { key: "payroll", href: "/business/business-banking-payroll", label: { ar: "تحويل الرواتب", en: "Payroll Management" }, icon: Users },
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
          { key: "smallProjects", href: "/financing", label: { ar: "تمويل المشاريع", en: "Projects Financing" }, icon: Briefcase },
          { key: "smallAccounts", href: "/business/corporate-current-account", label: { ar: "حسابات الأعمال", en: "Business Accounts" }, icon: Wallet },
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
          { key: "expatCurrent", href: "/accounts/expat", label: { ar: "حساب المغتربين", en: "Expatriate Account" }, icon: Globe2 },
          // { key: "expatSavings", href: "/accounts/expat", label: { ar: "حسابات التوفير والودائع", en: "Savings & Investments" }, icon: HandCoins },
          // { key: "expatIntl", href: "/accounts/expat", label: { ar: "خدمات التحويل الدولي", en: "International Transfers" }, icon: Send },
          // { key: "expatLocal", href: "/accounts/expat", label: { ar: "خدمات التحويل المحلي", en: "Local Transfers" }, icon: Landmark },
          // { key: "expatDigital", href: "/digital-channels", label: { ar: "الخدمات الرقمية", en: "Digital Services" }, icon: Laptop },
        ]
      },
      {
        title: { ar: "حساب القاصر", en: "Minors Account" },
        links: [
          { key: "minorSavings", href: "/personal/minors-account", label: { ar: "حساب القاصر", en: "Minors Account" }, icon: Baby },
          // { key: "minorInvestments", href: "/personal/minors-account", label: { ar: "حساب الودائع الاستثمارية", en: "Investment Deposit Account" }, icon: TrendingUp },
        ]
      },
      {
        title: { ar: "حساب نور للسيدات", en: "Noor Account (Ladies)" },
        links: [
          { key: "noorCurrent", href: "/accounts/noor", label: { ar: "حساب نور للسيدات", en: "Noor Account (Ladies)" }, icon: Wallet },
          // { key: "noorSavings", href: "/accounts/noor", label: { ar: "حسابات التوفير", en: "Savings Accounts" }, icon: HandCoins },
          // { key: "noorInvestments", href: "/accounts/noor", label: { ar: "الودائع الاستثمارية", en: "Investment Deposits" }, icon: TrendingUp },
          { key: "noorCard", href: "/accounts/noor-ladies-card", label: { ar: "بطاقة نور للسيدات", en: "Noor Ladies Card" }, icon: CreditCard },
          // { key: "noorDigital", href: "/digital-channels", label: { ar: "الخدمات الرقمية", en: "Digital Services" }, icon: Laptop },
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
    href: "/digital-channels",
    label: { ar: "الخدمات الإلكترونية", en: "E-Services" },
    singleLinks: [
      { key: "bankApp", href: "/e-services/mobile-banking", label: { ar: "التطبيق البنكي", en: "Mobile Banking" }, icon: Smartphone },
      { key: "internetBank", href: "/e-services/internet-banking", label: { ar: "منصة بن دول اعمال", en: "Internet Banking" }, icon: Monitor },
      { key: "eWallet", href: "/e-services/e-wallet", label: { ar: "المحفظة الإلكترونية", en: "e-Wallet" },  logo: "/images/partners/pay.png" },
      { key: "posNet", href: "/e-services/mushtarayati-network", label: { ar: "شبكة مشترياتي", en: "Mushtarayati Network" },  logo: "/images/partners/musht.png"  },
      { key: "bankCards", href: "/cards", label: { ar: "البطاقات البنكية", en: "Bank Cards" }, icon: CreditCard },
    ]
  },
  {
    key: "knowledgeCenter",
    href: "/knowledge",
    label: { ar: "مركز المعرفة", en: "Knowledge Center" },
    singleLinks: [
      { key: "faq", href: "/knowledge-center/faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" }, desc: { ar: "إجابات واضحة ومنظمة لأكثر الاستفسارات شيوعًا حول خدمات البنك", en: "Clear organized answers to the most common questions about bank services" }, icon: HelpCircle },
      { key: "reports", href: "/knowledge-center/annual-reports", label: { ar: "التقارير السنوية", en: "Annual Reports" }, desc: { ar: "أرشيف التقارير السنوية والقوائم المالية للبنك بصيغة PDF مع إمكانية التصفح والتنزيل", en: "Archive of the bank's annual reports and financial statements in PDF format" }, icon: FileText },
      { key: "bankNews", href: "/news", label: { ar: "أخبار البنك", en: "Bank News" }, icon: Newspaper },
      { key: "digitalLibrary", href: "/digital-library", label: { ar: "المكتبة الرقمية", en: "Digital Library" }, icon: Newspaper },
      { key: "careers", href: "/knowledge-center/careers", label: { ar: "الوظائف", en: "Careers" }, desc: { ar: "استكشف الفرص الوظيفية وانضم إلى فريق عمل بنك بن دول", en: "Explore career opportunities and join the Bin Dowal Bank team" }, icon: Briefcase },
    ]
  },
  // {
  //   key: "digitalLibrary",
  //   href: "/digital-library",
  //   label: { ar: "المكتبة", en: "Library" },
  //   // singleLinks: [
  //   //   { key: "digitalLibraryProducts", href: "/digital-library/products", label: { ar: "المنتجات", en: "Products" }, icon: Newspaper },
  //   //   { key: "digitalLibraryGuides", href: "/digital-library/guides", label: { ar: "الإرشادات", en: "Guides" }, icon: Newspaper },
  //   // ]
  // },
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
      {
        key: "forms",
        href: "/customer-service/forms",
        label: { ar: "نماذج البنك", en: "Bank Forms" },
        desc: { ar: "مكتبة شاملة لنماذج وطلبات الخدمات المصرفية بصيغة PDF قابلة للتنزيل والطباعة", en: "Comprehensive library of banking service forms and applications in PDF format ready for download and printing" },
        icon: FileText
      },
      // { key: "callCenter", href: "/contact#call-center", label: { ar: "مركز الاتصال", en: "Call Center" }, icon: UserCog },
    ]
  }
];
