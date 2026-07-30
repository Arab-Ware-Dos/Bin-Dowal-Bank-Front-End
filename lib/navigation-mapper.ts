import { NavItem, NavSubGroup, NavLink, navigationData } from '@/data/navigation';
import { NavigationSection, NavigationItem } from '@/types/navigation';

// خريطة مطابقة المفاتيح بين الـ API والـ Frontend للحفاظ على الصور والغلاف التجميلي لكل قسم
const KEY_ALIASES: Record<string, string> = {
  about_us: 'about',
  individual_services: 'personalBanking',
  business_services: 'businessBanking',
  special_services: 'specialServices',
  electronic_services: 'electronicServices',
  knowledge_center: 'knowledgeCenter',
  news_center: 'newsCenter',
  customer_service: 'customerService',
};

export function mapApiToNavItems(sections: NavigationSection[], locale: string = 'ar'): NavItem[] {
  if (!sections || sections.length === 0) return navigationData;

  return sections.map((section) => {
    // المطابقة الذكية للمفتاح لجلب الغلاف والصور الخاصة بالقسم
    const mappedKey = KEY_ALIASES[section.key] || section.key;

    const staticMatch = navigationData.find(
      (n) => n.key === mappedKey || n.key === section.key || n.label.ar === section.title || n.label.en === section.title
    );

    const navItem: NavItem = {
      key: section.key || `nav_${section.id}`,
      href: staticMatch?.href || '#',
      label: {
        ar: locale === 'ar' ? section.title : (staticMatch?.label.ar || section.title),
        en: locale === 'en' ? section.title : (staticMatch?.label.en || section.title),
      },
      image: staticMatch?.image,
      imageTitle: staticMatch?.imageTitle,
      imageDesc: staticMatch?.imageDesc,
      imageLink: staticMatch?.imageLink,
    };

    // معالجة الأقسام الفرعية والمجموعات
    if (section.items && section.items.length > 0) {
      const isSingleGroup = section.items.length === 1 && (
        section.items[0].title === "الخدمات المتاحة" || 
        section.items[0].title === "Available Services" || 
        section.items[0].title === "الخدمات"
      );

      if (isSingleGroup && section.items[0].children) {
        // Single Links layout (الكروت مع اللوحة الجانبية المصورة)
        navItem.singleLinks = section.items[0].children.map((child) => mapApiChildToNavLink(child, locale));
      } else {
        // Groups layout (مجموعات متعددة الأعمدة)
        navItem.groups = section.items.map((group) => {
          const navGroup: NavSubGroup = {
            title: { ar: group.title, en: group.title },
            links: (group.children || []).map((child) => mapApiChildToNavLink(child, locale)),
          };
          return navGroup;
        });
      }
    }

    return navItem;
  });
}

function mapApiChildToNavLink(child: NavigationItem, locale: string): NavLink {
  const navLink: NavLink = {
    key: `link_${child.id}`,
    href: child.url || '#',
    label: {
      ar: child.title,
      en: child.title,
    },
    desc: child.subtitle ? { ar: child.subtitle, en: child.subtitle } : undefined,
    icon: child.icon || undefined,
  };

  if (child.children && child.children.length > 0) {
    navLink.subLinks = child.children.map((subChild) => mapApiChildToNavLink(subChild, locale));
  }

  return navLink;
}
