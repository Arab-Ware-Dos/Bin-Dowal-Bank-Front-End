export type InitiativeCategory = "environment" | "social" | "disability" | "health";

export interface Initiative {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  briefAr: string;
  briefEn: string;
  contentAr: string;
  contentEn: string;
  category: InitiativeCategory;
  year: number;
  status: "completed" | "ongoing" | "seasonal";
  imageUrl: string;
  featured?: boolean;
}

export interface ImpactStat {
  id: string;
  labelAr: string;
  labelEn: string;
  value: number;
  suffix?: string;
  icon: any;
}

export const impactStats: ImpactStat[] = [
  {
    id: "initiatives",
    labelAr: "مبادرة مجتمعية",
    labelEn: "Community Initiatives",
    value: 50,
    suffix: "+",
    icon: "HeartHandshake",
  },
  {
    id: "beneficiaries",
    labelAr: "مستفيد مسجل",
    labelEn: "Registered Beneficiaries",
    value: 120,
    suffix: " ألف+",
    icon: "Users",
  },
  {
    id: "regions",
    labelAr: "محافظة يمنية",
    labelEn: "Yemeni Governorates",
    value: 6,
    icon: "MapPin",
  },
  {
    id: "partnerships",
    labelAr: "شراكة استراتيجية",
    labelEn: "Strategic Partnerships",
    value: 15,
    suffix: "+",
    icon: "Handshake",
  },
];

export const initiativeCategories = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "environment", labelAr: "مبادرات بيئية", labelEn: "Environmental" },
  { id: "social", labelAr: "مبادرات اجتماعية", labelEn: "Social" },
  { id: "disability", labelAr: "ذوي الإعاقة", labelEn: "Disabilities" },
  { id: "health", labelAr: "مبادرات صحية", labelEn: "Health" },
];

export const initiatives: Initiative[] = [
  {
    id: "1",
    slug: "coastal-cleanup-campaign",
    titleAr: "حملة استدامة وتنظيف السواحل",
    titleEn: "Sustainability and Coastal Clean-up Campaign",
    briefAr: "مبادرة بيئية تهدف إلى تنظيف السواحل والشواطئ ونشر الوعي البيئي بالتعاون مع شباب المجتمع المحلي.",
    briefEn: "An environmental initiative aiming to clean coasts and beaches and raise environmental awareness in cooperation with local community youth.",
    contentAr: "<p>مبادرة بيئية تهدف إلى تنظيف السواحل والشواطئ ونشر الوعي البيئي بالتعاون مع شباب المجتمع المحلي، من خلال تنظيم حملات ميدانية وورق توعوية لتشجيع الحفاظ على البيئة البحرية والاستدامة البيئية.</p>",
    contentEn: "<p>An environmental initiative aiming to clean coasts and beaches and raise environmental awareness in cooperation with local community youth through field campaigns and awareness workshops to encourage marine conservation and environmental sustainability.</p>",
    category: "environment",
    year: 2024,
    status: "completed",
    imageUrl: "/images/about-header-cover.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "productive-families-empowerment",
    titleAr: "تمكين الأسر المنتجة",
    titleEn: "Productive Families Empowerment",
    briefAr: "توفير حلول تمويلية مصغرة ومعدات إنتاج للأسر ذات الدخل المحدود لبدء مشاريعهم الصغيرة.",
    briefEn: "Providing micro-financing solutions and production equipment for low-income families to start their small businesses.",
    contentAr: "<p>توفير حلول تمويلية مصغرة ومعدات إنتاج للأسر ذات الدخل المحدود لبدء مشاريعهم الصغيرة المستدامة وتأهيلهم لدخول سوق العمل وتحسين مستواهم المعيشي.</p>",
    contentEn: "<p>Providing micro-financing solutions and production equipment for low-income families to launch sustainable small enterprises, qualify them for the job market, and improve their living standards.</p>",
    category: "social",
    year: 2024,
    status: "ongoing",
    imageUrl: "/images/about-header-cover.jpg",
  },
  {
    id: "3",
    slug: "wheelchair-distribution-campaign",
    titleAr: "توزيع الكراسي المتحركة",
    titleEn: "Wheelchair Distribution Campaign",
    briefAr: "حملة لتوزيع الكراسي المتحركة الكهربائية والعادية على الأشخاص ذوي الإعاقة لتسهيل اندماجهم في المجتمع.",
    briefEn: "A campaign to distribute electric and manual wheelchairs to persons with disabilities to facilitate their integration into society.",
    contentAr: "<p>حملة مخصصة لدعم الأشخاص ذوي الإعاقة من خلال توفير كراسي متحركة كهربائية وعادية حديثة ومناسبة لاحتياجاتهم اليومية لتسير الحركة والاندماج بالمجتمع والتعليم والعمل.</p>",
    contentEn: "<p>A campaign dedicated to supporting persons with disabilities by providing modern electric and manual wheelchairs tailored to their daily needs to facilitate mobility, education, work, and social integration.</p>",
    category: "disability",
    year: 2023,
    status: "completed",
    imageUrl: "/images/about-header-cover.jpg",
  },
  {
    id: "4",
    slug: "ramadan-food-basket",
    titleAr: "السلة الرمضانية",
    titleEn: "Ramadan Food Basket Initiative",
    briefAr: "مبادرة سنوية تتكفل بتوزيع السلال الغذائية المتكاملة على الأسر المتعففة خلال شهر رمضان المبارك.",
    briefEn: "An annual initiative distributing comprehensive food baskets to underprivileged families during the holy month of Ramadan.",
    contentAr: "<p>مبادرة مجتمعية سنوية يقدمها البنك لتأمين السلال الغذائية الأساسية المتكاملة وتوزيعها على الأسر المتعففة في مختلف المحافظات لتخفيف الأعباء المعيشية خلال الشهر الفضيل.</p>",
    contentEn: "<p>An annual community initiative by the bank providing essential food baskets to underprivileged families across various governorates to ease financial burdens during Ramadan.</p>",
    category: "social",
    year: 2024,
    status: "seasonal",
    imageUrl: "/images/about-header-cover.jpg",
  },
  {
    id: "5",
    slug: "free-medical-camps",
    titleAr: "المخيمات الطبية المجانية",
    titleEn: "Free Medical Camps",
    briefAr: "إقامة مخيمات طبية مجانية لطب العيون والأسنان في المناطق النائية التي تفتقر للخدمات الصحية.",
    briefEn: "Organizing free medical camps for ophthalmology and dentistry in remote areas lacking healthcare services.",
    contentAr: "<p>تنظيم وإقامة مخيمات طبية متخصصة ومجانية تشمل الفحوصات الطبية وجراحات العيون وتوزيع الأدوية المجانية للمواطنين في المناطق النائية بالتنسيق مع الكوادر الطبية المتخصصة.</p>",
    contentEn: "<p>Organizing free specialized medical camps providing consultations, eye surgeries, and free medication to residents in remote areas in coordination with specialized medical teams.</p>",
    category: "health",
    year: 2024,
    status: "ongoing",
    imageUrl: "/images/about-header-cover.jpg",
    featured: true,
  },
  {
    id: "6",
    slug: "plant-a-tree-for-a-better-future",
    titleAr: "ازرع شجرة لمستقبل أفضل",
    titleEn: "Plant a Tree for a Better Future",
    briefAr: "حملة تشجير واسعة النطاق لزيادة المساحات الخضراء والحد من التصحر في عدد من المدن الرئيسية.",
    briefEn: "A large-scale afforestation campaign to increase green spaces and combat desertification in key cities.",
    contentAr: "<p>حملة تشجير واسعة النطاق لغرس آلاف الأشجار والنباتات الملائمة للمناخ المحلي في الشوارع والمتنزهات والمرافق العامة لزيادة الغطاء النباتي وتحسين المظهر الجمالي والحد من التصحر.</p>",
    contentEn: "<p>A comprehensive afforestation campaign planting thousands of climate-resilient trees and greenery along streets, parks, and public facilities to enhance green spaces and combat desertification.</p>",
    category: "environment",
    year: 2023,
    status: "completed",
    imageUrl: "/images/about-header-cover.jpg",
  },
];