import { fetchAPI } from '@/lib/api-client';
import { NavigationApiResponse, NavigationSection } from '@/types/navigation';

// Default Fallback Data matching the API schema to ensure the site never breaks offline
export const FALLBACK_NAVIGATION_DATA: NavigationSection[] = [
  {
    id: 1,
    key: "about_us",
    title: "عن البنك",
    lang: "ar",
    order_index: 1,
    items: [
      {
        id: 1,
        title: "الخدمات المتاحة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 2, title: "نبذة عن البنك", subtitle: "القيم والخبرة المصرفية", url: "/about", icon: "Building2", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 3, title: "التوجهات الاستراتيجية", subtitle: "رؤيتنا المستقبلية", url: "/about#strategic-directions", icon: "Lightbulb", badge: null, target: "_self", order_index: 2, children: [] },
          { id: 4, title: "مجلس الإدارة", subtitle: "القيادة الهيكلية", url: "/board-members", icon: "Users", badge: null, target: "_self", order_index: 3, children: [] },
          { id: 5, title: "الإدارة التنفيذية", subtitle: "الفريق الإداري", url: "/executives", icon: "UserCheck", badge: null, target: "_self", order_index: 4, children: [] },
          { id: 6, title: "الشركاء", subtitle: "شبكة البنوك المراسلة", url: "/partners", icon: "Handshake", badge: null, target: "_self", order_index: 5, children: [] },
          { id: 7, title: "المسؤولية المجتمعية", subtitle: "المبادرات والحملات", url: "/csr-initiatives", icon: "HeartHandshake", badge: null, target: "_self", order_index: 6, children: [] },
          { id: 8, title: "بيان الامتثال", subtitle: "معايير الأمان والشفافية", url: "/about#compliance", icon: "ShieldCheck", badge: null, target: "_self", order_index: 7, children: [] },
          { id: 9, title: "الحوكمة المؤسسية", subtitle: "أنظمة وإدارات الحوكمة", url: "/about#governance", icon: "Scale", badge: null, target: "_self", order_index: 8, children: [] }
        ]
      }
    ]
  },
  {
    id: 2,
    key: "individual_services",
    title: "خدمات الأفراد",
    lang: "ar",
    order_index: 2,
    items: [
      {
        id: 10,
        title: "الحسابات",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 11, title: "الحساب الجاري", subtitle: null, url: "/services/current-account", icon: "Wallet", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 12, title: "حساب التوفير", subtitle: null, url: "/services/savings-account", icon: "PiggyBank", badge: null, target: "_self", order_index: 2, children: [] },
          { id: 13, title: "الودائع الاستثمارية", subtitle: null, url: "/services/investment-deposits", icon: "TrendingUp", badge: null, target: "_self", order_index: 3, children: [] }
        ]
      },
      {
        id: 14,
        title: "الخدمات المالية",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 2,
        children: [
          {
            id: 15,
            title: "التحويلات المحلية",
            subtitle: null,
            url: "#",
            icon: "Send",
            badge: null,
            target: "_self",
            order_index: 1,
            children: [
              { id: 16, title: "دول إكسبرس", subtitle: null, url: "/services/dowal-express", icon: "Zap", badge: null, target: "_self", order_index: 1, children: [] },
              { id: 17, title: "الشبكة الموحدة", subtitle: null, url: "/services/unified-network-transfers", icon: "Network", badge: null, target: "_self", order_index: 2, children: [] }
            ]
          },
          {
            id: 18,
            title: "الحوالات السريعة",
            subtitle: null,
            url: "#",
            icon: "Globe",
            badge: null,
            target: "_self",
            order_index: 2,
            children: [
              { id: 19, title: "موني جرام", subtitle: null, url: "/services/moneygram", icon: "DollarSign", badge: null, target: "_self", order_index: 1, children: [] },
              { id: 20, title: "شفت", subtitle: null, url: "/services/shift", icon: "ArrowLeftRight", badge: null, target: "_self", order_index: 2, children: [] },
              { id: 21, title: "UPT", subtitle: null, url: "/services/upt", icon: "CreditCard", badge: null, target: "_self", order_index: 3, children: [] },
              { id: 22, title: "بن يعلا", subtitle: null, url: "/services/ben-yalla", icon: "Building", badge: null, target: "_self", order_index: 4, children: [] },
              { id: 23, title: "العلاونة", subtitle: null, url: "/services/alawneh", icon: "Landmark", badge: null, target: "_self", order_index: 5, children: [] },
              { id: 24, title: "زمزم", subtitle: null, url: "/services/zamzam", icon: "Coins", badge: null, target: "_self", order_index: 6, children: [] },
              { id: 25, title: "سويفت", subtitle: null, url: "/services/swift-transfers", icon: "Globe2", badge: null, target: "_self", order_index: 7, children: [] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    key: "business_services",
    title: "بن دول أعمال",
    lang: "ar",
    order_index: 3,
    items: [
      {
        id: 26,
        title: "الشركات الكبيرة والمتوسطة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 27, title: "حسابات مصرفية", subtitle: null, url: "/services/corporate-current-account", icon: "Building2", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 28, title: "الودائع الاستثمارية", subtitle: null, url: "/services/corporate-investment-deposits", icon: "TrendingUp", badge: null, target: "_self", order_index: 2, children: [] },
          { id: 29, title: "حوالات السويفت", subtitle: null, url: "/services/corporate-swift-transfers", icon: "Globe", badge: null, target: "_self", order_index: 3, children: [] },
          { id: 30, title: "الضمانات البنكية", subtitle: null, url: "/services/corporate-bank-guarantees", icon: "ShieldCheck", badge: null, target: "_self", order_index: 4, children: [] },
          { id: 31, title: "تحويل الرواتب", subtitle: null, url: "/services/payroll-transfer", icon: "Users", badge: null, target: "_self", order_index: 5, children: [] }
        ]
      },
      {
        id: 32,
        title: "الشركات الصغيرة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 2,
        children: [
          { id: 33, title: "تمويل المشاريع", subtitle: null, url: "/services/thimar-sme-financing", icon: "Briefcase", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 34, title: "حسابات الأعمال", subtitle: null, url: "/services/business-accounts", icon: "Wallet", badge: null, target: "_self", order_index: 2, children: [] }
        ]
      }
    ]
  },
  {
    id: 5,
    key: "electronic_services",
    title: "الخدمات الإلكترونية",
    lang: "ar",
    order_index: 5,
    items: [
      {
        id: 56,
        title: "الخدمات المتاحة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 57, title: "التطبيق البنكي", subtitle: null, url: "/services/mobile-banking-app", icon: "Smartphone", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 58, title: "منصة بن دول أعمال", subtitle: null, url: "/services/business-platform", icon: "Monitor", badge: null, target: "_self", order_index: 2, children: [] },
          { id: 59, title: "المحفظة الإلكترونية", subtitle: null, url: "/services/e-wallet", icon: "Wallet", badge: null, target: "_self", order_index: 3, children: [] },
          { id: 60, title: "شبكة مشترياتي", subtitle: null, url: "/services/pos-network", icon: "ShoppingBag", badge: null, target: "_self", order_index: 4, children: [] },
          { id: 61, title: "البطاقات البنكية", subtitle: null, url: "/services/atm-cards-services", icon: "CreditCard", badge: null, target: "_self", order_index: 5, children: [] }
        ]
      }
    ]
  },
  {
    id: 6,
    key: "knowledge_center",
    title: "مركز المعرفة",
    lang: "ar",
    order_index: 6,
    items: [
      {
        id: 62,
        title: "الخدمات المتاحة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 63, title: "الأسئلة الشائعة", subtitle: null, url: "/faqs", icon: "HelpCircle", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 64, title: "التقارير السنوية", subtitle: null, url: "/annual-reports", icon: "FileText", badge: null, target: "_self", order_index: 2, children: [] }
        ]
      }
    ]
  },
  {
    id: 7,
    key: "news_center",
    title: "الأخبار",
    lang: "ar",
    order_index: 7,
    items: [
      {
        id: 65,
        title: "الخدمات المتاحة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 66, title: "أخبار البنك", subtitle: null, url: "/news", icon: "Newspaper", badge: null, target: "_self", order_index: 1, children: [] }
        ]
      }
    ]
  },
  {
    id: 8,
    key: "customer_service",
    title: "خدمة العملاء",
    lang: "ar",
    order_index: 8,
    items: [
      {
        id: 67,
        title: "الخدمات المتاحة",
        subtitle: null,
        url: null,
        icon: null,
        badge: null,
        target: "_self",
        order_index: 1,
        children: [
          { id: 68, title: "تواصل معنا", subtitle: null, url: "/contact", icon: "PhoneCall", badge: null, target: "_self", order_index: 1, children: [] },
          { id: 69, title: "تقديم شكوى", subtitle: null, url: "/complaints", icon: "AlertCircle", badge: null, target: "_self", order_index: 2, children: [] },
          { id: 70, title: "طلب خدمة", subtitle: null, url: "/service-request", icon: "FilePlus", badge: null, target: "_self", order_index: 3, children: [] },
          { id: 71, title: "طلب بطاقة بنكية", subtitle: null, url: "/card-request", icon: "CreditCard", badge: null, target: "_self", order_index: 4, children: [] },
          { id: 72, title: "نماذج البنك", subtitle: null, url: "/forms", icon: "FileCheck", badge: null, target: "_self", order_index: 5, children: [] }
        ]
      }
    ]
  }
];

export async function getNavigationData(locale: string = 'ar'): Promise<NavigationSection[]> {
  try {
    const response = await fetchAPI<NavigationApiResponse>('/navigation', {
      locale,
      next: { revalidate: 3600 },
    });

    if (response && Array.isArray(response.data) && response.data.length > 0) {
      console.log('🟢 [API Connected] Navigation data loaded LIVE from Backend API: GET /api/v1/navigation');
      return response.data;
    }
  } catch (error) {
    console.warn(
      '⚠️ [API Fallback Active] Backend server is offline or returned an error. Using local fallback data.',
      error instanceof Error ? error.message : error
    );
  }

  return FALLBACK_NAVIGATION_DATA;
}

