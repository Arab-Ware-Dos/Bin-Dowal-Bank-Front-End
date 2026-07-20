export interface RelatedService {
  id: string | number
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
  href: string
  categoryAr?: string
  categoryEn?: string
}

export const accountsRelatedServices: RelatedService[] = [
  {
    id: "savings",
    titleAr: "حساب التوفير",
    titleEn: "Savings Account",
    descriptionAr: "ضمان لمستقبلك ومستقبل عائلتك مع خيارات استثمارية تتوافق مع الشريعة.",
    descriptionEn: "Secure your future and your family's future with Sharia-compliant investment options.",
    image: "/images/customer-services/Savings.webp",
    href: "/personal/savings-account",
    categoryAr: "الحسابات المصرفية",
    categoryEn: "Banking Accounts",
  },
  {
    id: "current",
    titleAr: "الحساب الجاري",
    titleEn: "Current Account",
    descriptionAr: "إدارة معاملاتك اليومية بمرونة تامة وأمان عالٍ.",
    descriptionEn: "Manage your daily transactions with complete flexibility and high security.",
    image: "/images/customer-services/Current-account.webp",
    href: "/personal/current-account",
    categoryAr: "الحسابات المصرفية",
    categoryEn: "Banking Accounts",
  },
  {
    id: "minors",
    titleAr: "حساب القصر",
    titleEn: "Minors Account",
    descriptionAr: "حساب مصمم خصيصاً لتأمين وتنمية أموال الأطفال وضمان مستقبلهم.",
    descriptionEn: "Specially designed to secure and grow children's funds for their future.",
    image: "/images/customer-services/minors-account.webp",
    href: "/personal/minors-account",
    categoryAr: "الحسابات المصرفية",
    categoryEn: "Banking Accounts",
  },
  {
    id: "investment",
    titleAr: "الودائع الاستثمارية",
    titleEn: "Investment Deposits",
    descriptionAr: "استثمر أموالك وفق أحكام الشريعة الإسلامية بعوائد تنافسية.",
    descriptionEn: "Invest your money according to Islamic Sharia with competitive returns.",
    image: "/images/customer-services/Investment-deposits.webp",
    href: "/personal/investment-deposit",
    categoryAr: "الحسابات المصرفية",
    categoryEn: "Banking Accounts",
  }
];

export const transfersRelatedServices: RelatedService[] = [
  {
    id: "local-transfer",
    titleAr: "التحويلات المحلية",
    titleEn: "Local Transfers",
    descriptionAr: "أرسل واستقبل الأموال داخل اليمن بكل أمان وسرعة وبأسعار تنافسية.",
    descriptionEn: "Send and receive money within Yemen safely, quickly, and at competitive rates.",
    image: "/images/bank-update/services.jpg",
    href: "/personal/local-transfers",
    categoryAr: "التحويلات والأموال",
    categoryEn: "Transfers & Money",
  },
  {
    id: "international-transfer",
    titleAr: "التحويلات الدولية",
    titleEn: "International Transfers",
    descriptionAr: "خدمات تحويل الأموال حول العالم عبر شبكة واسعة من المراسلين.",
    descriptionEn: "Money transfer services around the world through a wide network of correspondents.",
    image: "/images/business-services/SWIFT-transfer.webp",
    href: "/personal/international-transfers",
    categoryAr: "التحويلات والأموال",
    categoryEn: "Transfers & Money",
  },
  {
    id: "fast-money",
    titleAr: "تحويلات سريعة",
    titleEn: "Fast Money Transfers",
    descriptionAr: "أسرع الوسائل لإرسال الأموال واستلامها فوراً عبر شركاؤنا العالميون.",
    descriptionEn: "The fastest ways to send and receive money instantly through our global partners.",
    image: "/images/bank-update/bindwal-pay.jpg",
    href: "/personal/fast-money-transfers",
    categoryAr: "التحويلات والأموال",
    categoryEn: "Transfers & Money",
  }
];

export const financingRelatedServices: RelatedService[] = [
  {
    id: "personal-financing",
    titleAr: "التمويلات الشخصية",
    titleEn: "Personal Financing",
    descriptionAr: "حلول تمويلية مرنة تغطي كافة احتياجاتك بشروط ميسرة ومتوافقة مع الشريعة.",
    descriptionEn: "Flexible financing solutions covering all your needs with easy, Sharia-compliant terms.",
    image: "/images/financing-services/1.webp",
    href: "/financing",
    categoryAr: "التمويل والاستثمار",
    categoryEn: "Financing & Investment",
  },
  {
    id: "thimar",
    titleAr: "تمويل التعليم (ثمار)",
    titleEn: "Education Financing (Thimar)",
    descriptionAr: "استثمر في مستقبل أبنائك مع حلول تمويل التعليم الميسرة.",
    descriptionEn: "Invest in your children's future with easy education financing solutions.",
    image: "/images/financing-services/Thimar.png",
    href: "/financing",
    categoryAr: "التمويل والاستثمار",
    categoryEn: "Financing & Investment",
  },
  {
    id: "solar",
    titleAr: "تمويل الطاقة الشمسية",
    titleEn: "Solar Energy Financing",
    descriptionAr: "حلول طاقة مستدامة لمنزلك أو مشروعك بتمويل ميسر.",
    descriptionEn: "Sustainable energy solutions for your home or project with easy financing.",
    image: "/images/financing-services/Solar.png",
    href: "/financing",
    categoryAr: "التمويل والاستثمار",
    categoryEn: "Financing & Investment",
  },
  {
    id: "tameer",
    titleAr: "تمويل البناء (تعمير)",
    titleEn: "Construction Financing (Tameer)",
    descriptionAr: "ابنِ منزل الأحلام مع باقات تمويل البناء المتكاملة.",
    descriptionEn: "Build your dream home with integrated construction financing packages.",
    image: "/images/financing-services/Tameer.png",
    href: "/financing",
    categoryAr: "التمويل والاستثمار",
    categoryEn: "Financing & Investment",
  }
];

export const allRelatedServices: RelatedService[] = [
  ...accountsRelatedServices,
  ...transfersRelatedServices,
  ...financingRelatedServices,
];
