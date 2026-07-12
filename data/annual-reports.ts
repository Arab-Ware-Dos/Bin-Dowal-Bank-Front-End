export type AnnualReport = {
  id: string;
  year: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  coverImage: string;
  pdfFile: string;
  pages: number;
  size: string; // e.g. "4.2 MB"
  featured: boolean;
  publishDate: string; // ISO date string
};

export const annualReports: AnnualReport[] = [
  {
    id: "report-2024",
    year: 2024,
    titleAr: "التقرير السنوي 2024",
    titleEn: "Annual Report 2024",
    descriptionAr:
      "يستعرض هذا التقرير الأداء السنوي لبنك بن دول للتمويل الأصغر الإسلامي خلال عام 2024، شاملاً المؤشرات المالية الرئيسية، ومستجدات التوسع الجغرافي والرقمي، ومحاور الاستدامة والمسؤولية المجتمعية.",
    descriptionEn:
      "This report reviews Bin Dowal Islamic Microfinance Bank's annual performance for 2024, covering key financial indicators, geographic and digital expansion updates, and sustainability and corporate responsibility highlights.",
    coverImage: "/images/annual-reports/cover-2024.jpg",
    pdfFile: "/documents/Bin-Dowal-Bank-Profile.pdf",
    pages: 124,
    size: "8.4 MB",
    featured: true,
    publishDate: "2025-03-15",
  },
  {
    id: "report-2023",
    year: 2023,
    titleAr: "التقرير السنوي 2023",
    titleEn: "Annual Report 2023",
    descriptionAr:
      "يرصد التقرير مسيرة البنك خلال عام 2023 وما حققه من نمو في محافظ التمويل، وتطوير القنوات الرقمية، وتوسيع شبكة الفروع والنقاط الخدمية عبر المحافظات اليمنية.",
    descriptionEn:
      "The report tracks the bank's journey throughout 2023, including growth in financing portfolios, digital channel development, and the expansion of branches and service points across Yemeni governorates.",
    coverImage: "/images/annual-reports/cover-2023.jpg",
    pdfFile: "/documents/Bin-Dowal-Bank-Profile.pdf",
    pages: 112,
    size: "7.1 MB",
    featured: false,
    publishDate: "2024-03-20",
  },
  {
    id: "report-2022",
    year: 2022,
    titleAr: "التقرير السنوي 2022",
    titleEn: "Annual Report 2022",
    descriptionAr:
      "يوثّق التقرير العام الثاني للبنك منذ تأسيسه، مُسلّطاً الضوء على التوسع في الخدمات المصرفية، واستحداث منتجات تمويلية جديدة، وتعزيز الشمول المالي في المجتمعات اليمنية.",
    descriptionEn:
      "The report documents the bank's second year since founding, highlighting expansion in banking services, new financing products, and enhanced financial inclusion across Yemeni communities.",
    coverImage: "/images/annual-reports/cover-2022.jpg",
    pdfFile: "/documents/Bin-Dowal-Bank-Profile.pdf",
    pages: 98,
    size: "6.3 MB",
    featured: false,
    publishDate: "2023-04-10",
  },
  {
    id: "report-2021",
    year: 2021,
    titleAr: "التقرير السنوي 2021",
    titleEn: "Annual Report 2021",
    descriptionAr:
      "التقرير التأسيسي الأول لبنك بن دول للتمويل الأصغر الإسلامي، يرسم ملامح الانطلاقة الرسمية للبنك وإنجازاته في عامه الأول وأبرز مؤشراته المالية والتشغيلية.",
    descriptionEn:
      "The inaugural report of Bin Dowal Islamic Microfinance Bank, outlining the bank's official launch, first-year achievements, and key financial and operational indicators.",
    coverImage: "/images/annual-reports/cover-2021.jpg",
    pdfFile: "/documents/Bin-Dowal-Bank-Profile.pdf",
    pages: 84,
    size: "5.2 MB",
    featured: false,
    publishDate: "2022-05-01",
  },
];
