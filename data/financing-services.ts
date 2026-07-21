export interface FinancingService {
  id: "tameer" | "takamul" | "thimar" | "solar" | "zad" | "noor"
  titleKey: string
  descriptionKey: string
  image: string
  href: string
  details?: {
    minAmount?: number
    maxAmount?: number
    maxPeriodMonths?: number
    profitRate?: number
    requirementsKey?: string
  }
  showOnHome: boolean
  showOnFinancingPage: boolean
  order: number
}

export const financingServices: FinancingService[] = [
  {
    id: "tameer",
    titleKey: "financingServices.tameer",
    descriptionKey: "financingServices.tameer.desc",
    image: "/images/financing-services/6.webp",
    href: "/personal/financing-taameer",
    showOnHome: true,
    showOnFinancingPage: true,
    order: 1,
  },
  {
    id: "takamul",
    titleKey: "financingServices.takamul",
    descriptionKey: "financingServices.takamul.desc",
    image: "/images/financing-services/1.webp",
    href: "/personal/financing-takamul",
    showOnHome: true,
    showOnFinancingPage: true,
    order: 2,
  },
  {
    id: "thimar",
    titleKey: "financingServices.thimar",
    descriptionKey: "financingServices.thimar.desc",
    image: "/images/financing-services/2.webp",
    href: "/personal/financing-thimar",
    showOnHome: true,
    showOnFinancingPage: true,
    order: 3,
  },
  {
    id: "solar",
    titleKey: "financingServices.solar",
    descriptionKey: "financingServices.solar.desc",
    image: "/images/financing-services/3.webp",
    href: "/financing",
    showOnHome: false,
    showOnFinancingPage: false,
    order: 4,
  },
  {
    id: "zad",
    titleKey: "financingServices.zad",
    descriptionKey: "financingServices.zad.desc",
    image: "/images/financing-services/5.webp",
    href: "/personal/financing-zad",
    showOnHome: true,
    showOnFinancingPage: true,
    order: 5,
  },
  {
    id: "noor",
    titleKey: "financingServices.noor",
    descriptionKey: "financingServices.noor.desc",
    image: "/images/financing-services/4.webp",
    href: "/personal/financing-noor",
    showOnHome: true,
    showOnFinancingPage: true,
    order: 6,
  },
]
