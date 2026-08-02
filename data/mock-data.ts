// Mock data for the banking website


export interface Product {
  id: string
  icon: string
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
  href: string
}

export interface NewsItem {
  id: string
  titleAr: string
  titleEn: string
  excerptAr: string
  excerptEn: string
  contentAr: string
  contentEn: string
  date: string
  imageUrl: string
  category: string
}

export interface Branch {
  id: string
  nameAr: string
  nameEn: string
  cityAr: string
  cityEn: string
  areaAr: string
  areaEn: string
  addressAr: string
  addressEn: string
  phone: string
  hoursAr: string
  hoursEn: string
  services: Array<{ ar: string; en: string }>
  region: string
  isMainBranch?: boolean
  lat: number
  lng: number
}

export interface Card {
  id: string
  nameAr: string
  nameEn: string
  type: "debit" | "credit" | "prepaid"
  descAr: string
  descEn: string
  benefitsAr: string[]
  benefitsEn: string[]
  annualFee: number
  imageUrl: string
  imageSrc?: string
  imageAr?: string
  imageEn?: string
  imageAltAr?: string
  imageAltEn?: string
}


export interface FAQ {
  id: string
  questionAr: string
  questionEn: string
  answerAr: string
  answerEn: string
  category: string
}

export interface Leader {
  id: string
  nameAr: string
  nameEn: string
  positionAr: string
  positionEn: string
  imageUrl: string
}


export const products: Product[] = [
  {
    id: "atms",
    icon: "Landmark",
    titleAr: "شبكة الصرافات الآلية",
    titleEn: "ATM Network",
    descAr: "شبكة واسعة تضمن لك وصولاً سريعاً للنقد في مختلف المواقع الحيوية",
    descEn: "A wide network that ensures quick access to cash in various vital locations",
    href: "/digital-channels#atms",
  },
  {
    id: "web-bank",
    icon: "Landmark",
    titleAr: "الويب بنك للشركات",
    titleEn: "Corporate Web Bank",
    descAr: "منصتك لإدارة مالية شاملة، وللوصول إلى مجموعة أوسع من الخدمات المصرفية من مكانك",
    descEn: "Your platform for comprehensive financial management and access to a wider range of banking services from your place",
    href: "/digital-channels#web-bank",
  },
  {
    id: "pos",
    icon: "CreditCard",
    titleAr: "نقاط البيع (شبكة مشترياتي)",
    titleEn: "Points of Sale (Mushtarati Network)",
    descAr: "تسوق وادفع بسهولة لدى آلاف المتاجر دون الحاجة لحمل النقود",
    descEn: "Shop and pay easily at thousands of stores without the need to carry cash",
    href: "/digital-channels#pos",
  },
  {
    id: "mobile-banking",
    icon: "Smartphone",
    titleAr: "الخدمات المصرفية عبر الجوال",
    titleEn: "Mobile Banking Services",
    descAr: "أنجز معاملاتك المصرفية بكل سهولة وأمان عبر تطبيقنا المتميز",
    descEn: "Complete your banking transactions with ease and security through our distinguished app",
    href: "/digital-channels#mobile",
  },
]

export const stats = [
  { id: "branches", valueAr: "+500", valueEn: "500+", labelKey: "stats.branches" },
  { id: "atms", valueAr: "+2000", valueEn: "2000+", labelKey: "stats.atms" },
  { id: "customers", valueAr: "+1M", valueEn: "1M+", labelKey: "stats.customers" },
  { id: "experience", valueAr: "+15", valueEn: "15+", labelKey: "stats.experience" },
]

export const newsItems: NewsItem[] = [
  {
    id: "1",
    titleAr: "إطلاق خدمة التمويل الرقمي الجديدة",
    titleEn: "Launch of New Digital Financing Service",
    excerptAr: "أعلن البنك عن إطلاق خدمة التمويل الرقمي الجديدة التي تتيح للعملاء الحصول على تمويل فوري",
    excerptEn: "The bank announced the launch of a new digital financing service that allows customers to get instant financing",
    contentAr: "أعلن بنك بن دول للتمويل الأصغر الإسلامي عن إطلاق خدمة التمويل الرقمي الجديدة التي تتيح للعملاء الحصول على تمويل فوري بخطوات بسيطة عبر تطبيق الجوال. تأتي هذه الخدمة في إطار جهود البنك المستمرة لتطوير خدماته الرقمية وتلبية احتياجات العملاء المتنامية.",
    contentEn: "Bin Dowal Islamic Microfinance Bank announced the launch of a new digital financing service that allows customers to get instant financing with simple steps through the mobile app. This service comes as part of the bank's ongoing efforts to develop its digital services and meet the growing needs of customers.",
    date: "2026-02-15",
    imageUrl: "/news-1.jpg",
    category: "services",
  },
  {
    id: "2",
    titleAr: "افتتاح فرع جديد في قصيعر",
    titleEn: "Opening New Branch in Qasayer",
    excerptAr: "يواصل البنك توسعه بافتتاح فرع جديد في قصيعر",
    excerptEn: "The bank continues its expansion by opening a new branch in Qasayer",
    contentAr: "يواصل بنك بن دول للتمويل الأصغر الإسلامي توسعه الجغرافي بافتتاح فرع جديد في قصيعر، وذلك ضمن خطته الاستراتيجية للوصول إلى المزيد من العملاء وتقديم خدماته المصرفية المميزة.",
    contentEn: "Bin Dowal Islamic Microfinance Bank continues its geographic expansion by opening a new branch in Qasayer, as part of its strategic plan to reach more customers and provide its distinctive banking services.",
    date: "2026-02-10",
    imageUrl: "/news-2.jpg",
    category: "expansion",
  },
  {
    id: "3",
    titleAr: "جائزة أفضل بنك للتمويل الأصغر",
    titleEn: "Best Microfinance Bank Award",
    excerptAr: "حصل البنك على جائزة أفضل بنك للتمويل الأصغر في المنطقة",
    excerptEn: "The bank received the Best Microfinance Bank award in the region",
    contentAr: "حصل بنك بن دول للتمويل الأصغر الإسلامي على جائزة أفضل بنك للتمويل الأصغر في المنطقة، تقديراً لجهوده المتميزة في دعم المشاريع الصغيرة والمتوسطة وتقديم حلول تمويلية مبتكرة.",
    contentEn: "Bin Dowal Islamic Microfinance Bank received the Best Microfinance Bank award in the region, in recognition of its outstanding efforts in supporting small and medium enterprises and providing innovative financing solutions.",
    date: "2026-02-05",
    imageUrl: "/news-3.jpg",
    category: "awards",
  },
  {
    id: "4",
    titleAr: "تحديث تطبيق الجوال بمميزات جديدة",
    titleEn: "Mobile App Update with New Features",
    excerptAr: "أطلق البنك تحديثاً جديداً لتطبيق الجوال يتضمن مميزات متقدمة",
    excerptEn: "The bank launched a new mobile app update with advanced features",
    contentAr: "أطلق بنك بن دول للتمويل الأصغر الإسلامي تحديثاً جديداً لتطبيق الجوال يتضمن مميزات متقدمة تشمل التحويل الفوري وإدارة البطاقات وخدمات الدفع الإلكتروني المحسنة.",
    contentEn: "Bin Dowal Islamic Microfinance Bank launched a new mobile app update with advanced features including instant transfer, card management, and enhanced electronic payment services.",
    date: "2026-01-28",
    imageUrl: "/news-4.jpg",
    category: "technology",
  },
  {
    id: "5",
    titleAr: "شراكة استراتيجية مع شركات التقنية المالية",
    titleEn: "Strategic Partnership with Fintech Companies",
    excerptAr: "وقع البنك شراكات استراتيجية مع عدد من شركات التقنية المالية",
    excerptEn: "The bank signed strategic partnerships with several fintech companies",
    contentAr: "وقع بنك بن دول للتمويل الأصغر الإسلامي شراكات استراتيجية مع عدد من شركات التقنية المالية الرائدة لتطوير خدماته الرقمية وتقديم حلول مبتكرة للعملاء.",
    contentEn: "Bin Dowal Islamic Microfinance Bank signed strategic partnerships with several leading fintech companies to develop its digital services and provide innovative solutions to customers.",
    date: "2026-01-20",
    imageUrl: "/news-5.jpg",
    category: "partnerships",
  },
  {
    id: "6",
    titleAr: "برنامج تدريب الخريجين الجدد",
    titleEn: "New Graduate Training Program",
    excerptAr: "أطلق البنك برنامجاً تدريبياً شاملاً للخريجين الجدد",
    excerptEn: "The bank launched a comprehensive training program for new graduates",
    contentAr: "أطلق بنك بن دول للتمويل الأصغر الإسلامي برنامجاً تدريبياً شاملاً للخريجين الجدد يهدف إلى تأهيلهم للعمل في القطاع المصرفي وتطوير مهاراتهم المهنية.",
    contentEn: "Bin Dowal Islamic Microfinance Bank launched a comprehensive training program for new graduates aimed at qualifying them to work in the banking sector and developing their professional skills.",
    date: "2026-01-15",
    imageUrl: "/news-6.jpg",
    category: "careers",
  },
]

export const branches: Branch[] = [
  {
    id: "1",
    nameAr: "الفرع الرئيسي - المكلا",
    nameEn: "Main Branch - Mukalla",
    cityAr: "المكلا",
    cityEn: "Mukalla",
    areaAr: "حي المكلا",
    areaEn: "Mukalla District",
    addressAr: "شارع المكلا، حي المكلا، المكلا",
    addressEn: "Olaya Street, Olaya District, Mukalla",
    phone: "+966112456789",
    hoursAr: "الأحد - الخميس: 8:00 ص - 4:00 م",
    hoursEn: "Sun - Thu: 8:00 AM - 4:00 PM",
    services: [
      { ar: "صراف آلي", en: "ATM" },
      { ar: "إيداع", en: "Deposits" },
      { ar: "قروض", en: "Loans" },
      { ar: "بطاقات", en: "Cards" },
      { ar: "خدمات تجارية", en: "Corporate Services" }
    ],
    region: "riyadh",
    isMainBranch: true,
    lat: 24.7136,
    lng: 46.6753,
  },
  {
    id: "2",
    nameAr: "فرع المكلا - المكلا",
    nameEn: "Mukalla Branch - Mukalla",
    cityAr: "المكلا",
    cityEn: "Mukalla",
    areaAr: "حي المكلا",
    areaEn: "Mukalla District",
    addressAr: "شارع المكلا، حي المكلا، المكلا",
    addressEn: "Prince Muhammad Street, Al Hamra District, Jeddah",
    phone: "+966122334455",
    hoursAr: "الأحد - الخميس: 8:00 ص - 4:00 م",
    hoursEn: "Sun - Thu: 8:00 AM - 4:00 PM",
    services: [
      { ar: "صراف آلي", en: "ATM" },
      { ar: "إيداع", en: "Deposits" },
      { ar: "قروض", en: "Loans" },
      { ar: "بطاقات", en: "Cards" }
    ],
    region: "jeddah",
    lat: 21.5433,
    lng: 39.1728,
  },
  {
    id: "3",
    nameAr: "فرع سيئون - سيئون",
    nameEn: "Sayun Branch - Sayun",
    cityAr: "سيئون",
    cityEn: "Sayun",
    areaAr: "حي سيئون",
    areaEn: "Sayun District",
    addressAr: "شارع سيئون، حي سيئون، سيئون",
    addressEn: "Corniche Street, Al Shati District, Dammam",
    phone: "+966138112233",
    hoursAr: "الأحد - الخميس: 8:00 ص - 4:00 م",
    hoursEn: "Sun - Thu: 8:00 AM - 4:00 PM",
    services: [
      { ar: "صراف آلي", en: "ATM" },
      { ar: "إيداع", en: "Deposits" },
      { ar: "قروض", en: "Loans" }
    ],
    region: "dammam",
    lat: 26.4207,
    lng: 50.0888,
  },
  {
    id: "4",
    nameAr: "فرع المكلا - المكلا",
    nameEn: "Mukalla Branch - Mukalla",
    cityAr: "المكلا",
    cityEn: "Mukalla",
    areaAr: "حي المكلا",
    areaEn: "Mukalla District",
    addressAr: "شارع المكلا، حي المكلا، المكلا",
    addressEn: "King Fahd Street, Al Aziziyah District, Makkah",
    phone: "+966125556789",
    hoursAr: "الأحد - الخميس: 9:00 ص - 3:00 م",
    hoursEn: "Sun - Thu: 9:00 AM - 3:00 PM",
    services: [
      { ar: "صراف آلي", en: "ATM" },
      { ar: "إيداع", en: "Deposits" },
      { ar: "قروض", en: "Loans" },
      { ar: "بطاقات", en: "Cards" }
    ],
    region: "makkah",
    lat: 21.3891,
    lng: 39.8579,
  },
  {
    id: "5",
    nameAr: "فرع المكلا - المكلا",
    nameEn: "Mukalla Branch - Mukalla",
    cityAr: "المكلا",
    cityEn: "Mukalla",
    areaAr: "حي المكلا",
    areaEn: "Mukalla District",
    addressAr: "شارع المكلا، حي المكلا، المكلا",
    addressEn: "King Abdulaziz Street, Al Salam District, Madinah",
    phone: "+966148889999",
    hoursAr: "الأحد - الخميس: 8:00 ص - 4:00 م",
    hoursEn: "Sun - Thu: 8:00 AM - 4:00 PM",
    services: [
      { ar: "صراف آلي", en: "ATM" },
      { ar: "إيداع", en: "Deposits" },
      { ar: "قروض", en: "Loans" },
      { ar: "بطاقات", en: "Cards" },
      { ar: "خدمات تجارية", en: "Corporate Services" }
    ],
    region: "madinah",
    lat: 24.5247,
    lng: 39.5692,
  },
  {
    id: "6",
    nameAr: "فرع المكلا - المكلا",
    nameEn: "Mukalla Branch - Mukalla",
    cityAr: "المكلا",
    cityEn: "Mukalla",
    areaAr: "حي المكلا",
    areaEn: "Mukalla District",
    addressAr: "شارع المكلا، حي المكلا، المكلا",
    addressEn: "Sea Street, Al Thuqbah District, Khobar",
    phone: "+966138776655",
    hoursAr: "الأحد - الخميس: 8:00 ص - 4:00 م",
    hoursEn: "Sun - Thu: 8:00 AM - 4:00 PM",
    services: [
      { ar: "صراف آلي", en: "ATM" },
      { ar: "إيداع", en: "Deposits" },
      { ar: "قروض", en: "Loans" }
    ],
    region: "dammam",
    lat: 26.2172,
    lng: 50.1971,
  },
]

export const cards: Card[] = [
  {
    id: "1",
    nameAr: "بطاقة بن دول الكلاسيكية",
    nameEn: "Bin Dowal Classic Card",
    type: "debit",
    descAr: "بطاقة خصم مثالية للاستخدام اليومي",
    descEn: "Perfect debit card for daily use",
    benefitsAr: ["سحب نقدي مجاني من أجهزة البنك", "تسوق آمن عبر الإنترنت", "تنبيهات فورية للمعاملات"],
    benefitsEn: ["Free cash withdrawal from bank ATMs", "Secure online shopping", "Instant transaction alerts"],
    annualFee: 0,
    imageUrl: "/images/cards/debit_desert-compressed.webp",
    imageSrc: "/images/cards/debit_desert-compressed.webp",
    imageAr: "/images/cards/debit_desert-compressed.webp",
    imageEn: "/images/cards/debit_desert-compressed.webp",
    imageAltAr: "صورة بطاقة بن دول الكلاسيكية",
    imageAltEn: "Bin Dowal Classic Card image",
  },
  {
    id: "2",
    nameAr: "بطاقة بن دول الذهبية",
    nameEn: "Bin Dowal Gold Card",
    type: "credit",
    descAr: "بطاقة ائتمان مع مزايا حصرية",
    descEn: "Credit card with exclusive benefits",
    benefitsAr: ["حد ائتماني مرتفع", "نقاط مكافآت على كل عملية شراء", "دخول صالات المطار"],
    benefitsEn: ["High credit limit", "Reward points on every purchase", "Airport lounge access"],
    annualFee: 300,
    imageUrl: "/images/cards/gold-credit.webp",
    imageSrc: "/images/cards/gold-credit.webp",
    imageAr: "/images/cards/gold-credit.webp",
    imageEn: "/images/cards/gold-credit.webp",
    imageAltAr: "صورة بطاقة بن دول الذهبية",
    imageAltEn: "Bin Dowal Gold Card image",
  },
  {
    id: "3",
    nameAr: "بطاقة بن دول البلاتينية",
    nameEn: "Bin Dowal Platinum Card",
    type: "credit",
    descAr: "بطاقة ائتمان فاخرة لنمط الحياة المميز",
    descEn: "Premium credit card for distinguished lifestyle",
    benefitsAr: ["حد ائتماني عالي جداً", "خدمة كونسيرج على مدار الساعة", "تأمين سفر شامل", "مضاعفة نقاط المكافآت"],
    benefitsEn: ["Very high credit limit", "24/7 concierge service", "Comprehensive travel insurance", "Double reward points"],
    annualFee: 1000,
    imageUrl: "/images/cards/front.webp",
    imageSrc: "/images/cards/front.webp",
    imageAr: "/images/cards/front.webp",
    imageEn: "/images/cards/front.webp",
    imageAltAr: "صورة بطاقة بن دول البلاتينية",
    imageAltEn: "Bin Dowal Platinum Card image",
  },
  {
    id: "4",
    nameAr: "بطاقة بن دول مسبقة الدفع",
    nameEn: "Bin Dowal Prepaid Card",
    type: "prepaid",
    descAr: "تحكم كامل في إنفاقك",
    descEn: "Complete control over your spending",
    benefitsAr: ["لا حاجة لحساب بنكي", "إعادة شحن سهلة", "مثالية للسفر والتسوق"],
    benefitsEn: ["No bank account required", "Easy recharge", "Perfect for travel and shopping"],
    annualFee: 50,
    imageUrl: "/images/cards/shopping-prepaid.webp",
    imageSrc: "/images/cards/shopping-prepaid.webp",
    imageAr: "/images/cards/shopping-prepaid.webp",
    imageEn: "/images/cards/shopping-prepaid.webp",
    imageAltAr: "صورة بطاقة بن دول مسبقة الدفع",
    imageAltEn: "Bin Dowal Prepaid Card image",
  },
  {
    id: "5",
    nameAr: "بطاقة نور",
    nameEn: "Noor Card",
    type: "credit",
    descAr: "بطاقة ائتمان تمنحك حرية التسوق مع مكافآت على كل عملية",
    descEn: "Credit card that gives you freedom to shop with rewards on every transaction",
    benefitsAr: ["لا حاجة لحساب بنكي", "إعادة شحن سهلة", "مثالية للسفر والتسوق"],
    benefitsEn: ["No bank account required", "Easy recharge", "Perfect for travel and shopping"],
    annualFee: 50,
    imageUrl: "/images/cards/debit-noor.webp",
    imageSrc: "/images/cards/debit-noor.webp",
    imageAr: "/images/cards/debit-noor.webp",
    imageEn: "/images/cards/debit-noor.webp",
    imageAltAr: "صورة بطاقة بن دول مسبقة الدفع",
    imageAltEn: "Bin Dowal Prepaid Card image",
  },
]


export const faqs: FAQ[] = [
  {
    id: "1",
    questionAr: "كيف أفتح حساباً جديداً؟",
    questionEn: "How do I open a new account?",
    answerAr: "يمكنك فتح حساب جديد عبر زيارة أقرب فرع مع الهوية الوطنية أو الإقامة، أو من خلال تطبيق الجوال.",
    answerEn: "You can open a new account by visiting the nearest branch with your National ID or Residency, or through the mobile app.",
    category: "accounts",
  },
  {
    id: "2",
    questionAr: "ما هي متطلبات الحصول على تمويل شخصي؟",
    questionEn: "What are the requirements for personal financing?",
    answerAr: "تحتاج إلى الهوية الوطنية أو الإقامة، شهادة راتب حديثة، وكشف حساب آخر 3 أشهر.",
    answerEn: "You need a National ID or Residency, recent salary certificate, and last 3 months bank statement.",
    category: "financing",
  },
  {
    id: "3",
    questionAr: "كيف أستخدم تطبيق الجوال؟",
    questionEn: "How do I use the mobile app?",
    answerAr: "حمّل التطبيق من متجر التطبيقات، سجل الدخول باستخدام بيانات حسابك، ويمكنك البدء في إجراء معاملاتك.",
    answerEn: "Download the app from the app store, log in with your account credentials, and you can start making transactions.",
    category: "digital",
  },
  {
    id: "4",
    questionAr: "ما هي حدود السحب اليومية؟",
    questionEn: "What are the daily withdrawal limits?",
    answerAr: "حد السحب اليومي هو 10,000 ريال للبطاقات العادية و20,000 ريال للبطاقات الذهبية والبلاتينية.",
    answerEn: "Daily withdrawal limit is 10,000 SAR for regular cards and 20,000 SAR for Gold and Platinum cards.",
    category: "cards",
  },
  {
    id: "5",
    questionAr: "هل خدماتكم متوافقة مع الشريعة الإسلامية؟",
    questionEn: "Are your services Sharia-compliant?",
    answerAr: "نعم، جميع منتجاتنا وخدماتنا متوافقة مع أحكام الشريعة الإسلامية وتحت إشراف هيئة رقابية شرعية.",
    answerEn: "Yes, all our products and services are Sharia-compliant and supervised by a Sharia supervisory board.",
    category: "general",
  },
]

export const leaders: Leader[] = [
  {
    id: "1",
    nameAr: "أحمد بن محمد العبدالله",
    nameEn: "Ahmed bin Mohammed Al-Abdullah",
    positionAr: "الرئيس التنفيذي",
    positionEn: "Chief Executive Officer",
    imageUrl: "/leader-1.jpg",
  },
  {
    id: "2",
    nameAr: "سارة بنت عبدالرحمن الفهد",
    nameEn: "Sarah bint Abdulrahman Al-Fahd",
    positionAr: "نائب الرئيس التنفيذي",
    positionEn: "Deputy CEO",
    imageUrl: "/leader-2.jpg",
  },
  {
    id: "3",
    nameAr: "خالد بن سعود المالكي",
    nameEn: "Khalid bin Saud Al-Maliki",
    positionAr: "المدير المالي",
    positionEn: "Chief Financial Officer",
    imageUrl: "/leader-3.jpg",
  },
  {
    id: "4",
    nameAr: "نورة بنت فيصل القحطاني",
    nameEn: "Noura bint Faisal Al-Qahtani",
    positionAr: "مدير العمليات",
    positionEn: "Chief Operations Officer",
    imageUrl: "/leader-4.jpg",
  },
]

export const cities = [
  { ar: "المكلا", en: "Mukalla" },
  { ar: "سيئون", en: "Sayun" },
  { ar: "الدمام", en: "Dammam" },
  { ar: "مكة المكرمة", en: "Makkah" },
  { ar: "المدينة المنورة", en: "Madinah" },
  { ar: "المكلا", en: "Mukalla" },
]

export const branchServices = [
  { id: "atm", ar: "صراف آلي", en: "ATM" },
  { id: "deposit", ar: "إيداع", en: "Deposit" },
  { id: "loans", ar: "قروض", en: "Loans" },
  { id: "cards", ar: "بطاقات", en: "Cards" },
  { id: "corporate", ar: "خدمات الشركات", en: "Corporate Services" },
]

export const heroSlides = [
  {
    id: "digital-banking",
    eyebrowAr: "الخدمات الرقمية",
    eyebrowEn: "Digital Banking",
    titleAr: "خدماتك المصرفية من جوالك",
    titleEn: "Banking services from your phone",
    subtitleAr:
      "تابع حساباتك ونفّذ عملياتك المصرفية بسهولة وأمان عبر القنوات الرقمية لبنك بن دول.",
    subtitleEn:
      "Manage your accounts and banking transactions easily and securely through Bin Dowal Bank digital channels.",
    primaryHref: "/e-services/mobile-banking",
    secondaryHref: "/e-services/e-wallet",
    primaryCtaAr: "تطبيق بنك بن دول",
    primaryCtaEn: "Bin Dowal Bank App",
    secondaryCtaAr: "محفظة بن دول باي",
    secondaryCtaEn: "Bin Dowal Pay",
    visual: {
      type: "mobile-app",
      image: "/images/mockup-mobile-apps.png",
      badgeAr: "تجربة رقمية أسهل",
      badgeEn: "Smarter digital experience",
      stat: {
        value: "24/7",
        labelAr: "خدمة متاحة",
        labelEn: "Available service",
      },
    },
  },
  {
    id: "bank-cards",
    eyebrowAr: "البطاقات المصرفية",
    eyebrowEn: "Bank Cards",
    titleAr: "بطاقات مصرفية تلائم احتياجاتك",
    titleEn: "Cards designed for your everyday needs",
    subtitleAr:
      "حلول دفع مرنة وآمنة تساعدك على إدارة مشترياتك اليومية بثقة أكبر.",
    subtitleEn:
      "Flexible and secure payment solutions designed to support your daily purchases with confidence.",
    primaryHref: "/cards",
    secondaryHref: "/customer-service/forms",
    primaryCtaAr: "استكشف البطاقات",
    primaryCtaEn: "Explore cards",
    secondaryCtaAr: "طلب بطاقة جديدة",
    secondaryCtaEn: "Apply for a new card",
    visual: {
      type: "cards",
      image: "/images/cards/debit_desert-compressed.webp",
      altAr: "بطاقة بنك بن دول المصرفية",
      altEn: "Bin Dowal Bank card",
      badgeAr: "دفع آمن ومرن",
      badgeEn: "Secure flexible payments",
      stat: {
        value: "+100K",
        labelAr: "عميل",
        labelEn: "Customers",
      },
    },
  },
  {
    id: "branches-atms",
    eyebrowAr: "الفروع والصرافات",
    eyebrowEn: "Branches & ATMs",
    titleAr: "أقرب إليك في كل وقت",
    titleEn: "Closer to you, whenever you need us",
    subtitleAr:
      "اعثر على أقرب فرع أو صراف آلي بسهولة، واحصل على خدماتك المصرفية بسرعة ووضوح.",
    subtitleEn:
      "Find the nearest branch or ATM easily and access your banking services with speed and clarity.",
    primaryHref: "/atm-and-branches",
    secondaryHref: "/contact",
    primaryCtaAr: "اعثر على أقرب فرع",
    primaryCtaEn: "Find nearest branch",
    secondaryCtaAr: "تواصل معنا",
    secondaryCtaEn: "Contact us",
    visual: {
      type: "branches",
      image: "/images/branches-map.png",
      badgeAr: "شبكة مصرفية قريبة منك",
      badgeEn: "A network near you",
      stat: {
        value: "+100",
        labelAr: "صراف آلي",
        labelEn: "ATMs",
      },
    },
  },
]