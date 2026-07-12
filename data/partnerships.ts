export interface Partner {
  id: string
  nameAr: string
  nameEn: string
  logo: string
  category: "local" | "international" | "correspondent"
}

export const partnerships: Partner[] = [
  // Local Partnerships
  {
    id: "local-1",
    nameAr: "تضامن العقارية",
    nameEn: "Tadhamon Real Estate",
    logo: "/images/partners/local-1.png",
    category: "local",
  },
  {
    id: "local-2",
    nameAr: "مؤسسة الأمل",
    nameEn: "Al-Amal Foundation",
    logo: "/images/partners/local-2.png",
    category: "local",
  },
  

  // International Partnerships
  {
    id: "int-1",
    nameAr: "موني جرام",
    nameEn: "Money Gram",
    logo: "/images/partners/moneygram-logo.png",
    category: "international",
  },
  {
    id: "int-2",
    nameAr: "شفت",
    nameEn: "Shift",
    logo: "/images/partners/Shift-logo.png",
    category: "international",
  },
  

  // Correspondent Banks
  {
    id: "corr-1",
    nameAr: "بنك الاتحاد",
    nameEn: "Etihad Bank",
    logo: "/images/partners/etihad-bank.png",
    category: "correspondent",
  },
  {
    id: "corr-2",
    nameAr: "مصرف الراجحي",
    nameEn: "Al Rajhi Bank",
    logo: "/images/partners/Al_Rajhi_Bank_Logo.png",
    category: "correspondent",
  },
  
]
