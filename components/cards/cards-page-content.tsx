"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { getLocalizedHref } from "@/lib/localized-routes";
import { PageHero } from "@/components/ui/page-hero";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cards, faqs, type Card as CardType } from "@/data/mock-data";
import { getBankCards } from "@/services/cards-service";
import { getBankFaqs } from "@/services/faqs-service";
import {
  Banknote,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ImageIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

type BankCard = CardType & {
  currencyAr?: string;
  currencyEn?: string;
  highlightAr?: string;
  highlightEn?: string;
  imageSrc?: string;
  imageAr?: string;
  imageEn?: string;
  imageAltAr?: string;
  imageAltEn?: string;
  requirementsAr?: string[];
  requirementsEn?: string[];
};

type CardTypeMeta = {
  id: string;
  labelAr: string;
  labelEn: string;
  shortAr: string;
  shortEn: string;
  gradient: string;
};

function resolveCardImage(url?: string | null): string {
  if (!url) return "/images/cards/debit-card.png";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  if (url.startsWith("/")) {
    const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, "") || "http://127.0.0.1:8000";
    return apiBase + url;
  }
  return url;
}

const bankCards = cards as BankCard[];

const cardTypeMeta: Record<string, CardTypeMeta> = {
  debit: {
    id: "debit",
    labelAr: "بطاقات الخصم",
    labelEn: "Debit Cards",
    shortAr: "خصم",
    shortEn: "Debit",
    gradient: "from-[#07133f] via-[#324198] to-[#101a54]",
  },
  credit: {
    id: "credit",
    labelAr: "البطاقات الائتمانية",
    labelEn: "Credit Cards",
    shortAr: "ائتمان",
    shortEn: "Credit",
    gradient: "from-[#111827] via-[#324198] to-[#7b2334]",
  },
  prepaid: {
    id: "prepaid",
    labelAr: "مسبقة الدفع",
    labelEn: "Prepaid Cards",
    shortAr: "مسبقة الدفع",
    shortEn: "Prepaid",
    gradient: "from-[#0b1d3f] via-[#324198] to-[#0f766e]",
  },
  virtual: {
    id: "virtual",
    labelAr: "البطاقات الافتراضية",
    labelEn: "Virtual Cards",
    shortAr: "افتراضية",
    shortEn: "Virtual",
    gradient: "from-[#101a54] via-[#324198] to-[#4c1d95]",
  },
};

const filterOrder = ["debit", "credit", "prepaid", "virtual"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function getTypeMeta(type: string): CardTypeMeta {
  return (
    cardTypeMeta[type] ?? {
      id: type,
      labelAr: type,
      labelEn: type,
      shortAr: type,
      shortEn: type,
      gradient: "from-[#07133f] via-[#324198] to-[#101a54]",
    }
  );
}

function getCardName(card: BankCard, locale: string) {
  return locale === "ar" ? card.nameAr : card.nameEn;
}

function getCardDescription(card: BankCard, locale: string) {
  return locale === "ar" ? card.descAr : card.descEn;
}

function getCardHighlight(card: BankCard, locale: string) {
  const fallback =
    locale === "ar" ? "حل مصرفي مرن وآمن" : "Flexible and secure banking";

  return locale === "ar"
    ? card.highlightAr ?? fallback
    : card.highlightEn ?? fallback;
}

function getCardImageSrc(card: BankCard, locale: string) {
  return locale === "ar"
    ? card.imageAr ?? card.imageSrc
    : card.imageEn ?? card.imageSrc;
}

function getCardImageAlt(card: BankCard, locale: string) {
  return locale === "ar"
    ? card.imageAltAr ?? ("صورة " + card.nameAr)
    : card.imageAltEn ?? (card.nameEn + " card image");
}

function getCardBenefits(card: BankCard, locale: string) {
  return locale === "ar" ? card.benefitsAr : card.benefitsEn;
}

function getCardRequirements(card: BankCard, locale: string) {
  const fallbackAr = [
    "حساب جاري أو توفير لدى البنك.",
    "وجود رصيد بالحساب.",
  ];

  const fallbackEn = [
    "A current or savings account with the bank.",
    "Available balance in the account.",
  ];

  const requirements =
    locale === "ar" ? card.requirementsAr : card.requirementsEn;

  return requirements && requirements.length > 0
    ? requirements
    : locale === "ar"
      ? fallbackAr
      : fallbackEn;
}

function formatAnnualFee(card: BankCard, locale: string) {
  const fee = Number(card.annualFee ?? 0);

  if (!Number.isFinite(fee) || fee <= 0) {
    return locale === "ar" ? "مجاني" : "Free";
  }

  const amount = new Intl.NumberFormat(locale === "ar" ? "ar-YE" : "en-US", {
    maximumFractionDigits: 0,
  }).format(fee);

  const currency =
    locale === "ar" ? card.currencyAr ?? "ر.ي" : card.currencyEn ?? "YER";

  return amount + " " + currency;
}

function CardImagePreview({
  card,
  locale,
}: {
  card: BankCard;
  locale: string;
}) {
  const imageSrc = getCardImageSrc(card, locale);

  return (
    <div className="relative w-full">
      {imageSrc ? (
        <div className="relative mx-auto w-full">
          <div className="relative aspect-[1.586/1] w-full overflow-hidden">
            <Image
              src={resolveCardImage(imageSrc)}
              unoptimized
              alt={getCardImageAlt(card, locale)}
              fill
              sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 92vw"
              className="object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      ) : (
        <div className="flex aspect-[1.586/1] w-full flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-dashed border-[#324198]/20 bg-[#324198]/[0.03] p-6 text-center">
          <ImageIcon className="h-9 w-9 text-[#324198]/70" />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {locale === "ar"
                ? "صورة البطاقة غير مضافة"
                : "Card image not added"}
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {locale === "ar"
                ? "أضف imageSrc داخل بيانات البطاقة لعرض الصورة الحقيقية هنا."
                : "Add imageSrc in the card data to show the real card image here."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function CardsPageContent() {
  const router = useRouter();
  const { t, locale, mode } = useI18n();
  const resolveHref = (target: string) => mode === "url" ? getLocalizedHref(target, locale) : target;
  const [filter, setFilter] = useState("all");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsState, setCardsState] = useState<BankCard[]>(bankCards);
  const [dynamicFaqs, setDynamicFaqs] = useState<{ id: string; category: string; questionAr: string; questionEn: string; answerAr: string; answerEn: string }[]>([]);
  
  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    async function loadData() {
      try {
        const [apiCards, apiFaqs] = await Promise.all([
          getBankCards(locale),
          getBankFaqs('cards', locale),
        ]);

        if (apiCards && apiCards.length > 0) {
          const mapped: BankCard[] = apiCards.map((c) => ({
            id: String(c.slug || c.id),
            nameAr: c.name_ar,
            nameEn: c.name_en || c.name_ar,
            type: c.type,
            annualFee: Number(c.annual_fee) || 0,
            descAr: c.desc_ar || '',
            descEn: c.desc_en || '',
            benefitsAr: c.benefits_ar || [],
            benefitsEn: c.benefits_en || [],
            requirementsAr: c.requirements_ar || [],
            requirementsEn: c.requirements_en || [],
            currencyAr: c.currency_ar,
            currencyEn: c.currency_en,
            highlightAr: c.highlight_ar,
            highlightEn: c.highlight_en,
            imageSrc: resolveCardImage(c.image_url || c.image_path),
            imageUrl: resolveCardImage(c.image_url || c.image_path) || '/images/cards/debit-card.png',
          }));
          setCardsState(mapped);
        }

        if (apiFaqs && apiFaqs.length > 0) {
          setDynamicFaqs(
            apiFaqs.map((f) => ({
              id: String(f.id),
              category: f.category,
              questionAr: f.question_ar,
              questionEn: f.question_en,
              answerAr: f.answer_ar,
              answerEn: f.answer_en,
            }))
          );
        }
      } catch (err) {
        console.warn('[CardsPageContent] Error fetching remote data', err);
      }
    }
    loadData();
  }, [locale]);

  const filterItems = useMemo(() => {
    const existingTypes = Array.from(
      new Set(cardsState.map((card) => card.type)),
    );

    const orderedTypes = filterOrder.filter((type) =>
      (existingTypes as string[]).includes(type),
    );

    const extraTypes = existingTypes.filter(
      (type) => !filterOrder.includes(type),
    );

    const typeItems = [...orderedTypes, ...extraTypes].map((type) =>
      getTypeMeta(type),
    );

    return [{ id: "all", labelAr: "الكل", labelEn: "All" }, ...typeItems];
  }, [cardsState]);

  const filteredCards = useMemo(() => {
    return filter === "all"
      ? cardsState
      : cardsState.filter((card) => card.type === filter);
  }, [cardsState, filter]);

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);

  const paginatedCards = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCards.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCards, currentPage]);

  const cardsFaqs = useMemo(() => {
    if (dynamicFaqs.length > 0) {
      return dynamicFaqs;
    }
    return faqs.filter((faq) => faq.category === "cards");
  }, [dynamicFaqs]);

  function handleFilterChange(typeId: string) {
    setFilter(typeId);
    setExpandedCardId(null);
    setCurrentPage(1);
  }

  function toggleCardDetails(cardId: string) {
    setExpandedCardId((current) => (current === cardId ? null : cardId));
  }

  return (
    <>
      <PageHero
        title={locale === "ar" ? "البطاقات المصرفية" : "Banking Cards"}
        subtitle={locale === "ar" ? "حلول دفع عصرية وآمنة تلبي متطلباتك اليومية والتجارية" : "Modern and secure payment solutions that meet your daily and business needs"}
        breadcrumbs={[{ labelKey: "nav.cards" }]}
      />

      <section className="z-20 border-b border-[#324198]/10 bg-background/85 py-5 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-[#324198]/10 bg-white/80 p-3 shadow-sm shadow-[#324198]/5 dark:bg-slate-950/70 lg:flex-row lg:items-center lg:justify-between">
            <div className="px-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#324198]/70">
                {locale === "ar" ? "اختر نوع البطاقة" : "Choose card type"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {locale === "ar"
                  ? "استعرض الخيارات المصرفية المناسبة لاستخدامك اليومي والرقمي."
                  : "Browse banking card options for daily and digital use."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterItems.map((type) => {
                const isActive = filter === type.id;

                return (
                  <Button
                    key={type.id}
                    type="button"
                    variant={isActive ? "default" : "outline"}
                    aria-pressed={isActive}
                    onClick={() => handleFilterChange(type.id)}
                    className={
                      isActive
                        ? "rounded-full bg-[#324198] px-5 text-white shadow-sm shadow-[#324198]/25 hover:bg-[#263477] hover:text-white"
                        : "rounded-full border-[#324198]/15 bg-white/70 px-5 text-[#324198] hover:bg-[#324198]/10 hover:text-[#324198] dark:bg-slate-950/40 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                    }
                  >
                    {locale === "ar" ? type.labelAr : type.labelEn}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="cards-list"
        className="relative overflow-hidden py-16 lg:py-20"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(50,65,152,0.08),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(123,35,52,0.06),transparent_32%)]" />

        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Badge className="mb-4 rounded-full border-[#324198]/15 bg-[#324198]/5 px-4 py-1.5 text-[#324198] shadow-none hover:bg-[#324198]/10">
                <ShieldCheck className="me-2 h-4 w-4" />
                {locale === "ar"
                  ? "بطاقات آمنة ومرنة"
                  : "Secure and flexible cards"}
              </Badge>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {locale === "ar"
                  ? "حلول بطاقات مصممة لاحتياجاتك"
                  : "Card solutions designed around your needs"}
              </h2>

              <p className="mt-3 text-muted-foreground">
                {locale === "ar"
                  ? "استعرض أهم تفاصيل البطاقة مباشرة، وافتح المتطلبات والمعلومات الإضافية داخل البطاقة نفسها دون نافذة منبثقة."
                  : "View the key card information directly, and expand requirements and additional information inside the same card without a dialog."}
              </p>
            </div>

            <div className="rounded-2xl border border-[#324198]/10 bg-white/75 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:bg-slate-950/60">
              {locale === "ar" ? "عدد البطاقات المعروضة:" : "Visible cards:"}{" "}
              <span className="font-bold text-[#324198]">
                {filteredCards.length}
              </span>
            </div>
          </div>

          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredCards.length === 0 ? (
                <motion.div
                  key="empty-state"
                  variants={itemVariants}
                  className="md:col-span-2 xl:col-span-3"
                >
                  <div className="rounded-[2rem] border border-dashed border-[#324198]/20 bg-white/70 p-10 text-center shadow-sm dark:bg-slate-950/50">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#324198]/10 text-[#324198]">
                      <CreditCard className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                      {locale === "ar"
                        ? "لا توجد بطاقات ضمن هذا التصنيف"
                        : "No cards found in this category"}
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                      {locale === "ar"
                        ? "جرّب اختيار تصنيف آخر أو أضف بطاقة جديدة ليتم عرضها تلقائيًا هنا."
                        : "Try another filter or add a new card to display it here automatically."}
                    </p>
                  </div>
                </motion.div>
              ) : (
                paginatedCards.map((card) => {
                  const meta = getTypeMeta(card.type);
                  const cardName = getCardName(card, locale);
                  const benefits = getCardBenefits(card, locale) ?? [];
                  const requirements = getCardRequirements(card, locale);
                  const visibleBenefits = benefits.slice(0, 3);
                  const hiddenBenefits = benefits.slice(3);
                  const isExpanded = expandedCardId === card.id;
                  const detailsId = "card-details-" + card.id;

                  return (
                    <motion.div
                      key={card.id}
                      variants={itemVariants}
                      layout
                      exit={{ opacity: 0, scale: 0.96 }}
                    >
                      <UICard className="group overflow-hidden rounded-[2rem] border-[#324198]/10 bg-white/85 shadow-sm shadow-[#324198]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#324198]/25 hover:shadow-xl hover:shadow-[#324198]/10 dark:bg-slate-950/70">
                        <div className="px-6 pt-6">
                          <CardImagePreview card={card} locale={locale} />
                        </div>

                        <CardContent className="space-y-5 p-6">
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                              {formatAnnualFee(card, locale)}
                            </span>
                            <Badge
                              variant="secondary"
                              className="rounded-lg bg-[#324198]/10 px-2.5 py-1 text-xs font-semibold text-[#324198] dark:bg-white/10 dark:text-slate-300"
                            >
                              {locale === "ar" ? meta.labelAr : meta.labelEn}
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-[#324198] dark:text-white">
                              {cardName}
                            </h3>

                            <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                              {getCardHighlight(card, locale) || getCardDescription(card, locale)}
                            </p>
                          </div>

                          <div className="space-y-2.5 rounded-2xl bg-slate-50/70 p-4 dark:bg-slate-900/40">
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                              {locale === "ar" ? "أبرز المزايا:" : "Key Benefits:"}
                            </p>
                            {visibleBenefits.length > 0 ? (
                              <ul className="space-y-2">
                                {visibleBenefits.map((benefit, index) => (
                                  <li
                                    key={card.id + "-visible-benefit-" + index}
                                    className="flex items-start gap-2 text-sm leading-5 text-slate-700 dark:text-slate-300"
                                  >
                                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                      <Check className="h-3 w-3" />
                                    </span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs text-muted-foreground">
                                {locale === "ar"
                                  ? "لم تتم إضافة مميزات لهذه البطاقة بعد."
                                  : "No benefits added yet."}
                              </p>
                            )}
                          </div>

                          <AnimatePresence initial={false}>
                            {isExpanded ? (
                              <motion.div
                                id={detailsId}
                                key="expanded-details"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.24,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden border-t border-[#324198]/10 pt-4 dark:border-white/5"
                              >
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                                      <ShieldCheck className="h-5 w-5 text-[#324198]" />
                                      {locale === "ar"
                                        ? "المتطلبات"
                                        : "Requirements"}
                                    </h4>

                                    <ul className="space-y-2.5">
                                      {requirements.map(
                                        (requirement, index) => (
                                          <li
                                            key={card.id + "-requirement-" + index}
                                            className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                                          >
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
                                              <Check className="h-3.5 w-3.5" />
                                            </span>
                                            <span>{requirement}</span>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>

                                  {hiddenBenefits.length > 0 ? (
                                    <div>
                                      <h5 className="mb-3 text-sm font-semibold text-[#324198]">
                                        {locale === "ar"
                                          ? "المميزات الإضافية"
                                          : "More benefits"}
                                      </h5>

                                      <ul className="space-y-2.5">
                                        {hiddenBenefits.map(
                                          (benefit, index) => (
                                            <li
                                              key={card.id + "-hidden-benefit-" + index}
                                              className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                                            >
                                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
                                                <Check className="h-3.5 w-3.5" />
                                              </span>
                                              <span>{benefit}</span>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  ) : null}

                                  <div className="grid gap-3 rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-950/50">
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="text-sm text-muted-foreground">
                                        {locale === "ar"
                                          ? "الرسوم السنوية"
                                          : "Annual fee"}
                                      </span>

                                      <span className="font-bold text-[#324198]">
                                        {formatAnnualFee(card, locale)}
                                      </span>
                                    </div>

                                    <p className="text-xs leading-5 text-muted-foreground">
                                      {locale === "ar"
                                        ? "تخضع تفاصيل الرسوم والحدود وشروط الاستخدام للسياسات المعتمدة لدى البنك."
                                        : "Fees, limits, and usage terms are subject to the bank’s approved policies."}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>

                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <Button
                              type="button"
                              variant="outline"
                              aria-expanded={isExpanded}
                              aria-controls={detailsId}
                              onClick={() => toggleCardDetails(card.id)}
                              className="h-12 rounded-2xl border-[#324198]/15 bg-white/70 text-[#324198] hover:bg-[#324198]/10 hover:text-[#324198] dark:bg-slate-950/40 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                            >
                              {isExpanded
                                ? locale === "ar"
                                  ? "إخفاء التفاصيل"
                                  : "Hide details"
                                : locale === "ar"
                                  ? "عرض التفاصيل"
                                  : "View details"}

                              <ChevronDown
                                className={"ms-2 h-4 w-4 transition-transform duration-300 " + (isExpanded ? "rotate-180" : "")}
                              />
                            </Button>

                            <Button
                              className="h-12 rounded-2xl bg-[#324198] text-white hover:bg-[#263477]"
                              size="lg"
                              onClick={() => router.push(resolveHref("/customer-service/forms"))}
                            >
                              {locale === "ar" ? "طلب البطاقة" : "Apply for Card"}
                            </Button>
                          </div>
                        </CardContent>
                      </UICard>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <Button
                      variant="ghost"
                      className="gap-1 px-2.5 sm:pl-2.5"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    >
                      <ChevronLeft className={locale === "ar" ? "rotate-180" : ""} />
                      <span className="hidden sm:block">
                        {locale === "ar" ? "السابق" : "Previous"}
                      </span>
                    </Button>
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i + 1);
                        }}
                        href="#"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <Button
                      variant="ghost"
                      className="gap-1 px-2.5 sm:pr-2.5"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    >
                      <span className="hidden sm:block">
                        {locale === "ar" ? "التالي" : "Next"}
                      </span>
                      <ChevronRight className={locale === "ar" ? "rotate-180" : ""} />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <FAQAccordion faqs={cardsFaqs as any} />
    </>
  );
}
