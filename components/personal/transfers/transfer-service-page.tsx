import Link from "next/link";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { RelatedServicesSlider } from "@/components/shared/related-services-slider";
import { allRelatedServices } from "@/data/related-services";
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  Check,
  Clock3,
  Globe2,
  Landmark,
  MapPin,
  ShieldCheck,
  Wallet,
  Zap,
  Smartphone,
  ScanLine,
  Building2,
  FileCheck2,
  LucideIcon,
  ArrowLeftRight,
} from "lucide-react";
import type { PersonalCoreTransferSlug } from "@/lib/personal-core-transfer-routes";
import {
  getPersonalCoreTransferService,
  coreTransferServicesData,
} from "@/data/personal-transfers/core-transfer-services";
import { TransferTabsClient } from "./transfer-tabs-client";
import { TransferFaqClient } from "./transfer-faq-client";
import type { TransferIconKey } from "@/types/personal-transfer-service";

const ICON_MAP: Record<TransferIconKey, LucideIcon> = {
  send: ArrowRight,
  globe: Globe2,
  wallet: Wallet,
  building: Building2,
  shield: ShieldCheck,
  clock: Clock3,
  zap: Zap,
  smartphone: Smartphone,
  "scan-line": ScanLine,
  clock3: Clock3,
  "bell-ring": BellRing,
  "map-pin": MapPin,
  landmark: Landmark,
  "arrow-left-right": ArrowLeftRight,
  "file-check": FileCheck2,
};

function pickLocal<T>(
  obj: { ar: T; en: T } | undefined,
  locale: "ar" | "en"
): T {
  if (!obj) return "" as any;
  return locale === "ar" ? obj.ar : obj.en;
}

type Locale = "ar" | "en";

function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden py-20 ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#324198]/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#324198]/[0.025] blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}

function SectionEyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`mb-3 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        dark
          ? "border-white/15 bg-white/10 text-white/72"
          : "border-[#324198]/12 bg-[#324198]/[0.05] text-[#324198]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <SectionEyebrow dark={dark}>{eyebrow}</SectionEyebrow>
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-3xl text-base leading-8 ${
            centered ? "mx-auto" : "mx-0"
          } ${dark ? "text-white/70" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function OverviewCard({
  iconKey,
  title,
  description,
}: {
  iconKey?: TransferIconKey;
  title: string;
  description?: string;
}) {
  const Icon = iconKey ? ICON_MAP[iconKey] : null;
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#324198]/10 text-[#324198]">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="mb-2 text-base font-semibold text-slate-950">{title}</h3>
      {description && (
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function PolicyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-3 border-b border-slate-200/70 py-4 last:border-b-0 md:grid-cols-[0.3fr_0.7fr]">
      <p className="text-sm font-semibold text-[#324198]">{label}</p>
      <p className="text-sm leading-7 text-slate-600">{value}</p>
    </div>
  );
}

export function TransferServicePage({
  slug,
  locale = "ar",
}: {
  slug: PersonalCoreTransferSlug;
  locale?: Locale;
}) {
  const service = getPersonalCoreTransferService(slug);

  if (!service) {
    notFound();
  }

  const isAr = locale === "ar";
  const CTAArrow = isAr ? ArrowLeft : ArrowRight;

  const relatedServices = allRelatedServices.filter((s) =>
    service.relatedServicesKeys?.includes(String(s.id))
  );

  const transferFamilySlugs: PersonalCoreTransferSlug[] = [
    "local-transfers",
    "international-transfers",
    "fast-money-transfers",
  ];

  return (
    <div data-personal-template="core-transfer" data-personal-transfer-slug={slug}>
      <PageHero
        title={pickLocal(service.title, locale)}
        subtitle={pickLocal(service.subtitle, locale)}
        breadcrumbs={[
          { labelKey: "nav.personalBanking", href: "/personal-banking" },
          {
            labelKey: `nav.${service.slug.replace(/-./g, (x) =>
              x[1].toUpperCase()
            )}` as any,
          },
        ]}
        tagline={isAr ? "الخدمات المالية" : "Financial Services"}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/digital#mobile"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1e2d72] shadow-[0_14px_34px_rgba(7,10,30,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(7,10,30,0.22)]"
          >
            {isAr ? "ابدأ عبر التطبيق" : "Start via App"}
            <CTAArrow className="h-4 w-4" />
          </Link>

          <Link
            href="/atm-and-branches"
            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
          >
            <MapPin className="h-4 w-4" />
            {isAr ? "الفروع والصرافات" : "Branches & ATMs"}
          </Link>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl -translate-y-10 px-4">
        <nav className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_22px_54px_rgba(15,23,42,0.06)] backdrop-blur-md">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {transferFamilySlugs.map((familySlug) => {
              const familyService = coreTransferServicesData[familySlug];
              const isActive = familySlug === slug;
              const title = pickLocal(familyService.title, locale);
              const systemLabel = isAr ? "نظام الحوالات" : "Transfer System";
              
              // Map static icons just for these 3 for simplicity, or use iconMap
              let FamilyIcon = Landmark;
              if (familySlug === "international-transfers") FamilyIcon = Globe2;
              if (familySlug === "fast-money-transfers") FamilyIcon = Zap;

              return (
                <Link
                  key={familySlug}
                  href={`/personal/${familySlug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative overflow-hidden rounded-[22px] border px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "border-[#324198]/12 bg-[linear-gradient(135deg,rgba(36,53,127,0.08),rgba(50,65,152,0.04))] shadow-[0_16px_34px_rgba(50,65,152,0.10)]"
                      : "border-transparent bg-slate-50/70 hover:border-[#324198]/10 hover:bg-white"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#324198]/22 to-transparent" />

                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#324198] text-white shadow-[0_12px_28px_rgba(50,65,152,0.18)]"
                          : "bg-white text-slate-600 group-hover:bg-[#324198] group-hover:text-white"
                      }`}
                    >
                      <FamilyIcon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {systemLabel}
                      </p>
                      <h3
                        className={`mt-1 text-sm font-semibold ${
                          isActive ? "text-[#24357f]" : "text-slate-800"
                        }`}
                      >
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      <SectionShell className="bg-white pt-8">
        <div className="mb-10">
          <SectionHeading
            eyebrow={isAr ? "ملخص الخدمة" : "Service Snapshot"}
            title={pickLocal(service.title, locale)}
            description={pickLocal(
              service.overview || service.description,
              locale
            )}
          />
        </div>

        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.04)]"
              >
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {pickLocal(benefit, locale)}
                </p>
              </div>
            ))}
          </div>
        )}

        {service.features && service.features.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.features.map((item) => (
              <OverviewCard
                key={item.id}
                iconKey={item.iconKey}
                title={pickLocal(item.title, locale)}
                description={
                  item.description
                    ? pickLocal(item.description, locale)
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </SectionShell>

      {service.channels && service.channels.length > 0 && (
        <SectionShell className="bg-[linear-gradient(180deg,#f8faff_0%,#ffffff_100%)]">
          <TransferTabsClient
            title={isAr ? "اختر طريقة تنفيذ الحوالة" : "Choose how to execute the transfer"}
            description={isAr ? "بدلاً من عرض معلومات عامة، يتغير هذا القسم بحسب قناة التنفيذ ليعطي المستخدم صورة أوضح عما سيحتاجه قبل البدء." : "Instead of showing generic information, this section changes by execution channel to give the user a clearer view of what will be needed before getting started."}
            eyebrow={pickLocal(service.labels?.channels, locale) || (isAr ? "قنوات التنفيذ" : "Execution Channels")}
            tabs={service.channels.map((c) => ({
              id: c.id,
              label: pickLocal(c.label, locale),
              title: c.title ? pickLocal(c.title, locale) : undefined,
              description: c.description
                ? pickLocal(c.description, locale)
                : undefined,
              items: (c.items || []).map((i) => ({
                id: i.id,
                title: pickLocal(i.title, locale),
              })),
            }))}
          />
        </SectionShell>
      )}

      {service.steps && service.steps.length > 0 && (
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#17245d_0%,#24357f_45%,#324198_100%)] py-20">
          <div className="absolute inset-0">
            <div className="absolute left-[8%] top-14 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
            <div className="absolute bottom-10 right-[10%] h-56 w-56 rounded-full bg-[#93a2f4]/12 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mb-14">
              <SectionHeading
                eyebrow={pickLocal(service.labels?.steps, locale) || (isAr ? "مسار العملية" : "Process Flow")}
                title={
                  isAr
                    ? "رحلة تحويل أوضح ويمكن تكرارها على بقية الصفحات"
                    : "A clearer transfer journey that can be reused across the rest of the pages"
                }
                description={
                  isAr
                    ? "تم تخفيف الطابع البصري الثقيل للكروت وتحويل الرحلة إلى مسار خطوات أكثر نظامية وملاءمة لصفحات الحوالات."
                    : "The heavy card treatment has been reduced and replaced with a more structured step flow better suited for transfer pages."
                }
                dark
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
              {service.steps.map((step) => (
                <div
                  key={step.id}
                  className="relative rounded-[28px] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_54px_rgba(0,0,0,0.12)] backdrop-blur-md"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="text-4xl font-extrabold tracking-tight text-white/16">
                      {step.id}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-white">
                    {pickLocal(step.title, locale)}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">
                    {pickLocal(step.description, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.requirements && service.requirements.length > 0 && (
        <SectionShell className="bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow={pickLocal(service.labels?.requirements, locale) || (isAr ? "الرسوم والحدود" : "Fees & Limits")}
                title={
                  isAr
                    ? "صياغة تشغيلية أوضح للسياسات والمتطلبات"
                    : "A clearer operational presentation of policies and requirements"
                }
                description={
                  isAr
                    ? "بدلاً من الاكتفاء ببطاقات عامة، يعرض هذا القسم قواعد تشغيلية مختصرة بصياغة أوضح وأقرب إلى تجربة عميل بنكي فعلية."
                    : "Instead of relying on generic cards, this section presents brief operational rules in a clearer way, closer to a real banking customer experience."
                }
                centered={false}
              />
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_54px_rgba(15,23,42,0.05)]">
              {service.requirements.map((item) => (
                <PolicyRow
                  key={item.id}
                  label={pickLocal(item.title, locale)}
                  value={
                    item.description
                      ? pickLocal(item.description, locale)
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        </SectionShell>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <SectionShell className="bg-slate-50/70">
          <div className="mb-14">
            <SectionHeading
              eyebrow={pickLocal(service.labels?.faqs, locale) || (isAr ? "الأسئلة الشائعة" : "FAQ")}
              title={
                isAr
                  ? "الأسئلة الأكثر ارتباطًا بتنفيذ الحوالة"
                  : "The most relevant questions about transfer execution"
              }
            />
          </div>

          <div className="mx-auto max-w-3xl">
            <TransferFaqClient
              items={service.faqs.map((faq) => ({
                id: faq.id,
                question: pickLocal(faq.question, locale),
                answer: pickLocal(faq.answer, locale),
              }))}
            />
          </div>
        </SectionShell>
      )}

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#324198]/[0.05] blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#324198]/10 bg-[linear-gradient(135deg,#f9fbff_0%,#eef2ff_100%)] px-8 py-12 shadow-[0_30px_80px_rgba(50,65,152,0.10)] md:px-10 md:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <SectionEyebrow>
                  {isAr ? "ابدأ الآن" : "Get Started"}
                </SectionEyebrow>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  {pickLocal(service.title, locale)}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {pickLocal(service.description, locale)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href={service.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#324198] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(50,65,152,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2b397f]"
                >
                  {pickLocal(service.cta.label, locale)}
                  <CTAArrow className="h-4 w-4" />
                </Link>

                <Link
                  href="/atm-and-branches"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#324198]/15 hover:text-[#324198]"
                >
                  {isAr ? "ابحث عن أقرب فرع" : "Find the Nearest Branch"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <RelatedServicesSlider
          services={relatedServices}
          titleAr="خدمات أخرى مرتبطة"
          titleEn="Related Services"
        />
      )}
    </div>
  );
}
