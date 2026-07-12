export interface PartnerLogo {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  logo: string;
  category: string;
  href?: string;
  isActive?: boolean;
  order?: number;
}

export const partnersLogoCarouselData: PartnerLogo[] = [
  {
    id: "al-rajhi",
    name: {
      ar: "مصرف الراجحي",
      en: "Al Rajhi Bank"
    },
    logo: "/images/partners/Al_Rajhi_Bank_Logo.png",
    category: "international",
    href: "https://www.alrajhibank.com.sa",
    isActive: true,
    order: 1
  },
  {
    id: "shift",
    name: {
      ar: "شيفت",
      en: "Shift"
    },
    logo: "/images/partners/Shift-logo.png",
    category: "international",
    href: "#",
    isActive: true,
    order: 2
  },
  {
    id: "etihad",
    name: {
      ar: "بنك الاتحاد",
      en: "Etihad Bank"
    },
    logo: "/images/partners/etihad-bank.png",
    category: "international",
    href: "#",
    isActive: true,
    order: 3
  },
  {
    id: "moneygram",
    name: {
      ar: "موني جرام",
      en: "MoneyGram"
    },
    logo: "/images/partners/moneygram-logo.png",
    category: "international",
    href: "https://www.moneygram.com",
    isActive: true,
    order: 4
  },
  {
    id: "local-1",
    name: {
      ar: "شريك محلي 1",
      en: "Local Partner 1"
    },
    logo: "/images/partners/local-1.png",
    category: "local",
    href: "#",
    isActive: true,
    order: 5
  },
  {
    id: "local-2",
    name: {
      ar: "شريك محلي 2",
      en: "Local Partner 2"
    },
    logo: "/images/partners/local-2.png",
    category: "local",
    href: "#",
    isActive: true,
    order: 6
  }
];
