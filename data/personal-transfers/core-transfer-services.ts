import { localTransfersService } from "./local-transfers";
import { internationalTransfersService } from "./international-transfers";
import { fastMoneyTransfersService } from "./fast-money-transfers";
import type { PersonalTransferService } from "@/types/personal-transfer-service";
import type { PersonalCoreTransferSlug } from "@/lib/personal-core-transfer-routes";

export const coreTransferServicesData = {
  "local-transfers": localTransfersService,
  "international-transfers": internationalTransfersService,
  "fast-money-transfers": fastMoneyTransfersService,
} satisfies Record<PersonalCoreTransferSlug, PersonalTransferService>;

export function getPersonalCoreTransferService(
  slug: PersonalCoreTransferSlug,
): PersonalTransferService {
  return coreTransferServicesData[slug];
}

export const sharedTransferContent = {
  tagline: { ar: "الخدمات المالية", en: "Financial Services" },
  startApp: { ar: "ابدأ عبر التطبيق", en: "Start via App" },
  branchesAtms: { ar: "الفروع والصرافات", en: "Branches & ATMs" },
  systemLabel: { ar: "نظام الحوالات", en: "Transfer System" },
  processFlow: { ar: "مسار العملية", en: "Process Flow" },
  processTitle: { ar: "رحلة تحويل أوضح ويمكن تكرارها على بقية الصفحات", en: "A clearer transfer journey that can be reused across the rest of the pages" },
  processDesc: { ar: "تم تخفيف الطابع البصري الثقيل للكروت وتحويل الرحلة إلى مسار خطوات أكثر نظامية وملاءمة لصفحات الحوالات.", en: "The heavy card treatment has been reduced and replaced with a more structured step flow better suited for transfer pages." },
  feesLimits: { ar: "الرسوم والحدود", en: "Fees & Limits" },
  reqTitle: { ar: "صياغة تشغيلية أوضح للسياسات والمتطلبات", en: "A clearer operational presentation of policies and requirements" },
  reqDesc: { ar: "بدلاً من الاكتفاء ببطاقات عامة، يعرض هذا القسم قواعد تشغيلية مختصرة بصياغة أوضح وأقرب إلى تجربة عميل بنكي فعلية.", en: "Instead of relying on generic cards, this section presents brief operational rules in a clearer way, closer to a real banking customer experience." },
  faqEyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
  faqTitle: { ar: "الأسئلة الأكثر ارتباطًا بتنفيذ الحوالة", en: "The most relevant questions about transfer execution" },
  getStarted: { ar: "ابدأ الآن", en: "Get Started" },
  nearestBranch: { ar: "ابحث عن أقرب فرع", en: "Find the Nearest Branch" },
  relatedServicesTitle: { ar: "خدمات أخرى مرتبطة", en: "Related Services" },
  hereToHelp: { ar: "نحن هنا لمساعدتك", en: "We're Here to Help" },
  contactDesc: { ar: "فريق خدمة العملاء متاح للإجابة على جميع استفساراتك وتقديم الدعم اللازم.", en: "Our customer service team is available to answer all your inquiries and provide necessary support." },
  contactUs: { ar: "اتصل بنا", en: "Contact Us" },
  faqLink: { ar: "الأسئلة الشائعة", en: "FAQ" },
  serviceSnapshot: { ar: "ملخص الخدمة", en: "Service Snapshot" },
  channelsTitle: { ar: "اختر طريقة تنفيذ الحوالة", en: "Choose how to execute the transfer" },
  channelsDesc: { ar: "بدلاً من عرض معلومات عامة، يتغير هذا القسم بحسب قناة التنفيذ ليعطي المستخدم صورة أوضح عما سيحتاجه قبل البدء.", en: "Instead of showing generic information, this section changes by execution channel to give the user a clearer view of what will be needed before getting started." },
  channelsEyebrow: { ar: "قنوات التنفيذ", en: "Execution Channels" }
};
