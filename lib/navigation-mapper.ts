import { NavItem, NavSubGroup, NavLink, navigationData } from '@/data/navigation';
import { NavigationSection, NavigationItem } from '@/types/navigation';

// خريطة مطابقة المفاتيح بين الـ API والـ Frontend للحفاظ على الصور والغلاف التجميلي والتخطيط الفاخر لكل قسم
const KEY_ALIASES: Record<string, string> = {
  about_us: 'about',
  individual_services: 'personalBanking',
  business_services: 'businessBanking',
  special_services: 'specialServices',
  electronic_services: 'electronicServices',
  knowledge_center: 'knowledgeCenter',
  news_center: 'newsCenter',
  customer_service: 'customerService',
  unclaimed_remittances: 'unclaimedRemittances',
  unclaimed_remittance: 'unclaimedRemittances',
  'unclaimed-remittances': 'unclaimedRemittances',
};

export function mapApiToNavItems(sections: NavigationSection[], locale: string = 'ar'): NavItem[] {
  if (!sections || sections.length === 0) return navigationData;

  return sections.map((section) => {
    // المطابقة الذكية للمفتاح لجلب الغلاف والصور الخاصة بالقسم
    const mappedKey = KEY_ALIASES[section.key] || section.key;

    const staticMatch = navigationData.find(
      (n) => n.key === mappedKey || n.key === section.key || n.label.ar === section.title || n.label.en === section.title
    );

    const titleAr = section.title_ar || (locale === 'ar' ? section.title : staticMatch?.label.ar) || section.title;
    const titleEn = section.title_en || (locale === 'en' ? section.title : staticMatch?.label.en) || section.title;

    // تحديد رابط التبويب إذا كان رابطاً مباشراً أو مطابقاً للبيانات الثابتة
    let computedHref = staticMatch?.href || section.url;
    if (!computedHref) {
      if (section.key) {
        computedHref = section.key.startsWith('/')
          ? section.key
          : `/${section.key.replace(/_/g, '-')}`;
      } else {
        computedHref = '#';
      }
    }

    const navItem: NavItem = {
      key: section.key || `nav_${section.id}`,
      href: computedHref,
      label: {
        ar: titleAr,
        en: titleEn,
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
        section.items[0].title_ar === "الخدمات المتاحة" ||
        section.items[0].title_en === "Available Services"
      );

      if (isSingleGroup && section.items[0].children) {
        // Single Links layout (الكروت مع اللوحة الجانبية المصورة)
        navItem.singleLinks = section.items[0].children.map((child, idx) => {
          const staticChild = staticMatch?.singleLinks?.[idx] || staticMatch?.singleLinks?.find(s => s.label.ar === child.title || s.label.en === child.title);
          return mapApiChildToNavLink(child, staticChild);
        });
      } else {
        // Groups layout (مجموعات متعددة الأعمدة)
        navItem.groups = section.items.map((group, groupIdx) => {
          const groupTitleAr = group.title_ar || group.title;
          const groupTitleEn = group.title_en || group.title;

          // البحث عن التنسيق الثابت المماثل لهذه المجموعة (مثل cols: 2 أو rows: 5)
          const staticGroup = staticMatch?.groups?.[groupIdx] || staticMatch?.groups?.find(g => 
            g.title.ar === group.title || 
            g.title.en === group.title || 
            g.title.ar === groupTitleAr || 
            g.title.en === groupTitleEn
          );

          const navGroup: NavSubGroup = {
            title: { ar: groupTitleAr, en: groupTitleEn },
            cols: staticGroup?.cols,
            rows: staticGroup?.rows,
            links: (group.children || []).map((child, childIdx) => {
              const staticLink = staticGroup?.links?.[childIdx] || staticGroup?.links?.find(l => l.label.ar === child.title || l.label.en === child.title);
              return mapApiChildToNavLink(child, staticLink);
            }),
          };
          return navGroup;
        });
      }
    }

    return navItem;
  });
}

function mapApiChildToNavLink(child: NavigationItem, staticLink?: NavLink): NavLink {
  const childTitleAr = child.title_ar || child.title;
  const childTitleEn = child.title_en || child.title;

  const childSubtitleAr = child.subtitle_ar || child.subtitle || undefined;
  const childSubtitleEn = child.subtitle_en || child.subtitle || undefined;

  const navLink: NavLink = {
    key: `link_${child.id}`,
    href: child.url || staticLink?.href || '#',
    label: {
      ar: childTitleAr,
      en: childTitleEn,
    },
    desc: (childSubtitleAr || childSubtitleEn) ? { 
      ar: childSubtitleAr || childSubtitleEn || '', 
      en: childSubtitleEn || childSubtitleAr || '' 
    } : staticLink?.desc,
    icon: child.icon || staticLink?.icon || undefined,
    cols: staticLink?.cols,
  };

  if (child.children && child.children.length > 0) {
    navLink.subLinks = child.children.map((subChild, subIdx) => {
      const staticSubLink = staticLink?.subLinks?.[subIdx] || staticLink?.subLinks?.find(s => s.label.ar === subChild.title || s.label.en === subChild.title);
      return mapApiChildToNavLink(subChild, staticSubLink);
    });
  }

  return navLink;
}
