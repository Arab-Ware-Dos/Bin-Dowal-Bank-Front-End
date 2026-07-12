/**
 * بيانات مجلس الإدارة — Board of Directors Data
 * بنك بن دول للتمويل الأصغر الإسلامي
 *
 * هذه البنية مصممة لتكون API-ready وقابلة للربط مع Laravel / CMS مستقبلاً.
 * لإضافة عضو جديد: أضف كائناً جديداً إلى المصفوفة boardMembers.
 */

export type BoardMemberCategory = "chairman" | "vice-chairman" | "member";

export interface BoardMember {
  /** معرّف فريد للعضو — سيُستخدم كـ ID عند ربطه بـ API */
  id: string;
  /** الترتيب في العرض (الأصغر = الأول) */
  order: number;
  /** الفئة: chairman | vice-chairman | member */
  category: BoardMemberCategory;
  /** الاسم الكامل بالعربية */
  nameAr: string;
  /** الاسم الكامل بالإنجليزية */
  nameEn: string;
  /** المسمى الوظيفي بالعربية */
  titleAr: string;
  /** المسمى الوظيفي بالإنجليزية */
  titleEn: string;
  /** الحروف الأولى للاسم — تُستخدم في Avatar Placeholder */
  initials: string;
  /** مسار صورة العضو — يُترك فارغاً إذا لم تتوفر الصورة */
  image?: string;
  /**
   * كلمة العضو — يُستخدم حالياً لرئيس مجلس الإدارة فقط.
   * placeholder احترافي قابل للاستبدال من CMS / API.
   */
  messageAr?: string;
  messageEn?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "saeed-omar-al-maari",
    order: 1,
    category: "chairman",
    nameAr: "سعيد عمر سعيد المعاري",
    nameEn: "Saeed Omar Saeed Al-Ma'ari",
    titleAr: "رئيس مجلس الإدارة",
    titleEn: "Chairman of the Board",
    initials: "سم",
    image: "/images/board-of-directors/saeed-omar.png",
    messageAr: "إن تأســيس بنــك بــن دول للتمويــل الأصغــر الإسلامــي جــاء امتــدادا لمســيرة ناجحــة ورؤيــة طموحــة تهــدف إلــى الإســهام الفاعــل فــي تطويــر القطــاع المصرفــي فــي اليمـن، مـن خلال تقديـم خدمـات ماليـة ومصرفيـة مبتكـرة تواكـب تطلعـات الأفـراد ورواد الأعمـال، وتدعم عجلة التنميـة الاقتصادية والاجتماعية. لقـد حرصنـا منـذ البدايـة علـى أن يكـون البنـك رائـدا فـي مجـال التمويـل الإسلامـي والشــمول المالــي، عبــر حلــول مصرفيــة عصريــة وآمنــة تســهم فــي تمكيــن الشــرائح المسـتهدفة من تحقيق طموحاتها بثقة واسـتقرار. واليـوم، وبفضـل توفيـق الله أولا، ثـم بجهـود كوادرنـا المؤهلـة وثقـة عملائنـا الكـرام، اسـتطاع البنـك أن يرسـخ مكانتـه كمؤسسـة ماليـة موثوقـة تمتلـك شـبكة واسـعة مــن الفــروع ونقــاط الخدمــة المنتشــرة فــي مختلــف المحافظــات، ممــا يتيــح لنــا الوصـول إلـى عملائنا في كل مكان وتقديـم خدماتنا بجودة وكفاءة عالية. نواصــل فــي بنــك بــن دول مســيرتنا نحــو المســتقبل بخطــى ثابتــة، مســتندين إلــى قيمنـا الراسـخة فـي الشـفافية، الابتـكار، وخدمـة المجتمـع، سـاعين لأن نكـون البنـك الأقـرب لعملائنا والأكثر إسـهاما في دعم الاقتصاد الوطني. والله ولي التوفيق",
    messageEn: "The establishment of Bin Dowal Islamic Microfinance Bank marks a significant milestone in our journey, reflecting our commitment to actively contribute to the development of Yemen's banking sector. Our primary objective is to deliver innovative financial and banking services that meet the aspirations of individuals and entrepreneurs, thereby facilitating economic and social development. Since our inception, we have been dedicated to establishing the bank as a leader in Islamic finance and financial inclusion. We achieve this through modern, secure, and Sharia-compliant banking solutions that empower our target groups to pursue their goals with confidence and stability. We extend our sincere appreciation to our dedicated staff and the trust of our valued clients. The bank has successfully established itself as a trusted financial institution with an extensive network of branches and service points across various governorates, ensuring high-quality and efficient service delivery to our customers nationwide. At Bin Dowal Bank, we are moving towards the future with a focus on our core values: transparency, innovation, and community service. We strive to be the bank closest to our customers and the most significant contributor to supporting the national economy..Thank you",
  },
  {
    id: "omar-abdullah-al-maari",
    order: 2,
    category: "vice-chairman",
    nameAr: "عمر عبدالله عمر المعاري",
    nameEn: "Omar Abdullah Omar Al-Ma'ari",
    titleAr: "نائب رئيس مجلس الإدارة",
    titleEn: "Vice Chairman of the Board",
    initials: "عم",
    image: undefined,
  },
  {
    id: "ali-omar-bin-doul",
    order: 3,
    category: "member",
    nameAr: "علي عمر سعيد بن دول",
    nameEn: "Ali Omar Saeed Bin Dowal",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "عب",
    image: undefined,
  },
  {
    id: "walid-ahmed-al-naqeeb",
    order: 4,
    category: "member",
    nameAr: "وليد احمد علي النقيب",
    nameEn: "Walid Ahmed Ali Al-Naqeeb",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "وا",
    image: undefined,
  },
  {
    id: "aboud-mohammed-al-abl",
    order: 5,
    category: "member",
    nameAr: "عبود محمد سالمين العبل",
    nameEn: "Aboud Mohammed Salmin Al-Abl",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "عع",
    image: undefined,
  },
  {
    id: "shayef-ali-al-ansi",
    order: 6,
    category: "member",
    nameAr: "شايف علي محمد العنسي",
    nameEn: "Shayef Ali Mohammed Al-Ansi",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "شع",
    image: undefined,
  },
  {
    id: "mahfoudh-abdulkarim-al-masali",
    order: 7,
    category: "member",
    nameAr: "محفوظ عبدالكريم المصلي",
    nameEn: "Mahfoudh Abdulkarim Al-Masali",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "مع",
    image: undefined,
  },
  {
    id: "yasser-saeed-barbaa",
    order: 8,
    category: "member",
    nameAr: "ياسر سعيد سالم بارباع",
    nameEn: "Yasser Saeed Salem Barbaa",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "يب",
    image: undefined,
  },
  {
    id: "khaled-awadh-bin-wabr",
    order: 9,
    category: "member",
    nameAr: "خالد عوض احمد بن وبر",
    nameEn: "Khaled Awadh Ahmed Bin Wabr",
    titleAr: "عضو مجلس الإدارة",
    titleEn: "Board Member",
    initials: "خب",
    image: undefined,
  },
];

/** الرئيس */
export const chairman = boardMembers.find((m) => m.category === "chairman")!;

/** نائب الرئيس */
export const viceChairman = boardMembers.find(
  (m) => m.category === "vice-chairman"
)!;

/** أعضاء مجلس الإدارة (بدون الرئيس والنائب) */
export const regularMembers = boardMembers.filter(
  (m) => m.category === "member"
);
