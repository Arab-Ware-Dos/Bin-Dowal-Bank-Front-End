export type InitiativeCategory = "environment" | "social" | "disabilities" | "health";

export interface Initiative {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  category: InitiativeCategory;
  year: string;
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
  icon: any; // Using any for lucide-icons to simplify
}

export const impactStats: ImpactStat[] = [
  {
    id: "initiatives",
    labelAr: "مبادرة مجتمعية",
    labelEn: "Community Initiatives",
    value: 50,
    suffix: "+",
    icon: "HeartHandshake"
  },
  {
    id: "beneficiaries",
    labelAr: "مستفيد مسجل",
    labelEn: "Registered Beneficiaries",
    value: 120,
    suffix: " ألف+",
    icon: "Users"
  },
  {
    id: "regions",
    labelAr: "محافظة يمنية",
    labelEn: "Yemeni Governorates",
    value: 6,
    icon: "MapPin"
  },
  {
    id: "partnerships",
    labelAr: "شراكة استراتيجية",
    labelEn: "Strategic Partnerships",
    value: 15,
    suffix: "+",
    icon: "Handshake"
  }
];

export const initiativeCategories = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "environment", labelAr: "مبادرات بيئية", labelEn: "Environmental" },
  { id: "social", labelAr: "مبادرات اجتماعية", labelEn: "Social" },
  { id: "disabilities", labelAr: "ذوي الإعاقة", labelEn: "Disabilities" },
  { id: "health", labelAr: "مبادرات صحية", labelEn: "Health" },
];

export const initiatives: Initiative[] = [
  {
    id: "1",
    slug: "clean-environment-2024",
    titleAr: "حملة استدامة وتنظيف السواحل",
    titleEn: "Sustainability and Coastal Cleanup Campaign",
    excerptAr: "مبادرة بيئية تهدف إلى تنظيف السواحل والشواطئ ونشر الوعي البيئي بالتعاون مع شباب المجتمع المحلي.",
    excerptEn: "An environmental initiative aimed at cleaning coasts and spreading environmental awareness in cooperation with local youth.",
    category: "environment",
    year: "2024",
    status: "completed",
    imageUrl: "/images/csr-environment.jpg", // You can use mock images or placeholders
    featured: true,
  },
  {
    id: "2",
    slug: "empowering-widows",
    titleAr: "تمكين الأسر المنتجة",
    titleEn: "Empowering Productive Families",
    excerptAr: "توفير حلول تمويلية مصغرة ومعدات إنتاج للأسر ذات الدخل المحدود لبدء مشاريعهم الصغيرة.",
    excerptEn: "Providing micro-financing solutions and production equipment for low-income families to start their small businesses.",
    category: "social",
    year: "2023 - 2024",
    status: "ongoing",
    imageUrl: "/images/csr-social-1.jpg",
  },
  {
    id: "3",
    slug: "wheelchairs-distribution",
    titleAr: "توزيع الكراسي المتحركة",
    titleEn: "Wheelchairs Distribution",
    excerptAr: "حملة لتوزيع الكراسي المتحركة الكهربائية والعادية على الأشخاص ذوي الإعاقة لتسهيل اندماجهم في المجتمع.",
    excerptEn: "A campaign to distribute electric and manual wheelchairs to people with disabilities to facilitate their integration into society.",
    category: "disabilities",
    year: "2023",
    status: "completed",
    imageUrl: "/images/csr-disability.png",
  },
  {
    id: "4",
    slug: "ramadan-baskets",
    titleAr: "السلة الرمضانية",
    titleEn: "Ramadan Food Baskets",
    excerptAr: "مبادرة سنوية تتكفل بتوزيع السلال الغذائية المتكاملة على الأسر المتعففة خلال شهر رمضان المبارك.",
    excerptEn: "An annual initiative that provides comprehensive food baskets to families in need during the holy month of Ramadan.",
    category: "social",
    year: "2024",
    status: "seasonal",
    imageUrl: "/images/csr-ramadan.jpg",
  },
  {
    id: "5",
    slug: "medical-camps",
    titleAr: "المخيمات الطبية المجانية",
    titleEn: "Free Medical Camps",
    excerptAr: "إقامة مخيمات طبية مجانية لطب العيون والأسنان في المناطق النائية التي تفتقر للخدمات الصحية.",
    excerptEn: "Establishing free medical camps for eye and dental care in remote areas lacking health services.",
    category: "health",
    year: "2024",
    status: "ongoing",
    imageUrl: "/images/csr-health.png",
    featured: true,
  },
  {
    id: "6",
    slug: "tree-planting",
    titleAr: "ازرع شجرة لمستقبل أفضل",
    titleEn: "Plant a Tree for a Better Future",
    excerptAr: "حملة تشجير واسعة النطاق لزيادة المساحات الخضراء والحد من التصحر في عدد من المدن الرئيسية.",
    excerptEn: "A large-scale afforestation campaign to increase green spaces and combat desertification in several major cities.",
    category: "environment",
    year: "2023",
    status: "completed",
    imageUrl: "/images/csr-tree.png",
  }
];
