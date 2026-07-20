export type PartnerCategory = "local" | "international" | "correspondent";

export interface Partner {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  logo: string;
  category: PartnerCategory;
  href?: string;
  showInCarousel: boolean;
  carouselOrder?: number;
}

export const partnersData: Partner[] = [
  // Local Partnerships
  {
    id: "local-22",
    name: {
      ar: "شريك محلي 22",
      en: "Local Partner 22",
    },
    logo: "/images/partners/local/Asset 22@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-23",
    name: {
      ar: "شريك محلي 23",
      en: "Local Partner 23",
    },
    logo: "/images/partners/local/Asset 23@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-24",
    name: {
      ar: "شريك محلي 24",
      en: "Local Partner 24",
    },
    logo: "/images/partners/local/Asset 24@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-25",
    name: {
      ar: "شريك محلي 25",
      en: "Local Partner 25",
    },
    logo: "/images/partners/local/Asset 25@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-26",
    name: {
      ar: "شريك محلي 26",
      en: "Local Partner 26",
    },
    logo: "/images/partners/local/Asset 26@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-27",
    name: {
      ar: "شريك محلي 27",
      en: "Local Partner 27",
    },
    logo: "/images/partners/local/Asset 27@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-28",
    name: {
      ar: "شريك محلي 28",
      en: "Local Partner 28",
    },
    logo: "/images/partners/local/Asset 28@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-29",
    name: {
      ar: "شريك محلي 29",
      en: "Local Partner 29",
    },
    logo: "/images/partners/local/Asset 29@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-30",
    name: {
      ar: "شريك محلي 30",
      en: "Local Partner 30",
    },
    logo: "/images/partners/local/Asset 30@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-31",
    name: {
      ar: "شريك محلي 31",
      en: "Local Partner 31",
    },
    logo: "/images/partners/local/Asset 31@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-32",
    name: {
      ar: "شريك محلي 32",
      en: "Local Partner 32",
    },
    logo: "/images/partners/local/Asset 32@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-33",
    name: {
      ar: "شريك محلي 33",
      en: "Local Partner 33",
    },
    logo: "/images/partners/local/Asset 33@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-34",
    name: {
      ar: "شريك محلي 34",
      en: "Local Partner 34",
    },
    logo: "/images/partners/local/Asset 34@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-35",
    name: {
      ar: "شريك محلي 35",
      en: "Local Partner 35",
    },
    logo: "/images/partners/local/Asset 35@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-36",
    name: {
      ar: "شريك محلي 36",
      en: "Local Partner 36",
    },
    logo: "/images/partners/local/Asset 36@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-37",
    name: {
      ar: "شريك محلي 37",
      en: "Local Partner 37",
    },
    logo: "/images/partners/local/Asset 37@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-38",
    name: {
      ar: "شريك محلي 38",
      en: "Local Partner 38",
    },
    logo: "/images/partners/local/Asset 38@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-39",
    name: {
      ar: "شريك محلي 39",
      en: "Local Partner 39",
    },
    logo: "/images/partners/local/Asset 39@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-40",
    name: {
      ar: "شريك محلي 40",
      en: "Local Partner 40",
    },
    logo: "/images/partners/local/Asset 40@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-41",
    name: {
      ar: "شريك محلي 41",
      en: "Local Partner 41",
    },
    logo: "/images/partners/local/Asset 41@3x.png",
    category: "local",
    showInCarousel: true,
  },
  {
    id: "local-42",
    name: {
      ar: "شريك محلي 42",
      en: "Local Partner 42",
    },
    logo: "/images/partners/local/Asset 42@3x.png",
    category: "local",
    showInCarousel: true,
  },

  // International Partnerships
  
  {
    id: "international-43",
    name: {
      ar: "شريك دولي 43",
      en: "International Partner 43",
    },
    logo: "/images/partners/international/Asset 43@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-44",
    name: {
      ar: "شريك دولي 44",
      en: "International Partner 44",
    },
    logo: "/images/partners/international/Asset 44@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-45",
    name: {
      ar: "شريك دولي 45",
      en: "International Partner 45",
    },
    logo: "/images/partners/international/Asset 45@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-46",
    name: {
      ar: "شريك دولي 46",
      en: "International Partner 46",
    },
    logo: "/images/partners/international/Asset 46@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-48",
    name: {
      ar: "شريك دولي 48",
      en: "International Partner 48",
    },
    logo: "/images/partners/international/Asset 48@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-49",
    name: {
      ar: "شريك دولي 49",
      en: "International Partner 49",
    },
    logo: "/images/partners/international/Asset 49@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-50",
    name: {
      ar: "شريك دولي 50",
      en: "International Partner 50",
    },
    logo: "/images/partners/international/Asset 50@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-51",
    name: {
      ar: "شريك دولي 51",
      en: "International Partner 51",
    },
    logo: "/images/partners/international/Asset 51@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-52",
    name: {
      ar: "شريك دولي 52",
      en: "International Partner 52",
    },
    logo: "/images/partners/international/Asset 52@3x.png",
    category: "international",
    showInCarousel: true,
  },
  {
    id: "international-53",
    name: {
      ar: "شريك دولي 53",
      en: "International Partner 53",
    },
    logo: "/images/partners/international/Asset 53@3x.png",
    category: "international",
    showInCarousel: true,
  },

  // Correspondent Banks
 
  {
    id: "correspondent-54",
    name: {
      ar: "بنك مراسل 54",
      en: "Correspondent Bank 54",
    },
    logo: "/images/partners/correspondent/Asset 54@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-55",
    name: {
      ar: "بنك مراسل 55",
      en: "Correspondent Bank 55",
    },
    logo: "/images/partners/correspondent/Asset 55@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-56",
    name: {
      ar: "بنك مراسل 56",
      en: "Correspondent Bank 56",
    },
    logo: "/images/partners/correspondent/Asset 56@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-57",
    name: {
      ar: "بنك مراسل 57",
      en: "Correspondent Bank 57",
    },
    logo: "/images/partners/correspondent/Asset 57@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-58",
    name: {
      ar: "بنك مراسل 58",
      en: "Correspondent Bank 58",
    },
    logo: "/images/partners/correspondent/Asset 58@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-59",
    name: {
      ar: "بنك مراسل 59",
      en: "Correspondent Bank 59",
    },
    logo: "/images/partners/correspondent/Asset 59@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-60",
    name: {
      ar: "بنك مراسل 60",
      en: "Correspondent Bank 60",
    },
    logo: "/images/partners/correspondent/Asset 60@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-61",
    name: {
      ar: "بنك مراسل 61",
      en: "Correspondent Bank 61",
    },
    logo: "/images/partners/correspondent/Asset 61@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-62",
    name: {
      ar: "بنك مراسل 62",
      en: "Correspondent Bank 62",
    },
    logo: "/images/partners/correspondent/Asset 62@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-63",
    name: {
      ar: "بنك مراسل 63",
      en: "Correspondent Bank 63",
    },
    logo: "/images/partners/correspondent/Asset 63@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
  {
    id: "correspondent-64",
    name: {
      ar: "بنك مراسل 64",
      en: "Correspondent Bank 64",
    },
    logo: "/images/partners/correspondent/Asset 64@3x.png",
    category: "correspondent",
    showInCarousel: true,
  },
];
