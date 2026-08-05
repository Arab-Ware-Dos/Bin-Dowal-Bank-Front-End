"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { getLocalizedHref } from "@/lib/localized-routes"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  Globe,
  Handshake,
  Heart,
  Lightbulb,
  MapPin,
  Scale,
  Shield,
  Smartphone,
  Target,
  Users,
} from "lucide-react"

type LocalizedItem = {
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
}

type LocalizedIconItem = LocalizedItem & {
  icon: LucideIcon
}

type MetricItem = {
  icon: LucideIcon
  labelAr: string
  labelEn: string
  valueAr?: string
  valueEn?: string
  animatedValue?: number
  suffix?: string
  descAr: string
  descEn: string
}

const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
}

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const aboutHighlights: LocalizedIconItem[] = [
  {
    icon: Building2,
    titleAr: "مؤسسة مصرفية وطنية حديثة",
    titleEn: "A Modern National Banking Institution",
    descAr: "تأسس البنك عام 2021م ليقدم نموذجاً مصرفياً يجمع بين الموثوقية والحداثة.",
    descEn: "Established in 2021 to deliver a banking model that combines reliability and modernity.",
  },
  {
    icon: Users,
    titleAr: "دعم الأفراد والمشاريع",
    titleEn: "Supporting Individuals & Enterprises",
    descAr: "حلول مالية ومصرفية موجّهة للأفراد والمشاريع الصغيرة والمتوسطة.",
    descEn: "Financial and banking solutions designed for individuals and small and medium-sized enterprises.",
  },
  {
    icon: Shield,
    titleAr: "ثقة وشفافية والتزام",
    titleEn: "Trust, Transparency & Commitment",
    descAr: "تجربة مصرفية تقوم على الأمان والوضوح والالتزام بالقيم الإسلامية.",
    descEn: "A banking experience built on security, clarity, and commitment to Islamic values.",
  },
]

const values: LocalizedIconItem[] = [
  {
    icon: Award,
    titleAr: "التميز",
    titleEn: "Excellence",
    descAr: "نسعى إلى تقديم خدمات مصرفية عالية الجودة ترتكز على الكفاءة والاحترافية والتحسين المستمر.",
    descEn: "We strive to deliver high-quality banking services built on efficiency, professionalism, and continuous improvement.",
  },
  {
    icon: Scale,
    titleAr: "الالتزام",
    titleEn: "Commitment",
    descAr: "نلتزم بمسؤولياتنا المهنية والمؤسسية، ونحرص على الوفاء بمعاييرنا ووعودنا في كل ما نقدمه.",
    descEn: "We are committed to our professional and institutional responsibilities, upholding our standards and promises in everything we do.",
  },
  {
    icon: Lightbulb,
    titleAr: "الابتكار",
    titleEn: "Innovation",
    descAr: "نطوّر حلولاً مالية ومصرفية حديثة تواكب المتغيرات وتمنح عملاءنا قيمة عملية حقيقية.",
    descEn: "We develop modern financial and banking solutions that keep pace with change and deliver practical value to our clients.",
  },
  {
    icon: Handshake,
    titleAr: "الشراكة",
    titleEn: "Partnership",
    descAr: "نبني علاقات قائمة على التعاون والثقة المتبادلة بما يحقق المنفعة المشتركة ويعزز الأثر الإيجابي.",
    descEn: "We build relationships based on collaboration and mutual trust to create shared value and positive impact.",
  },
  {
    icon: Shield,
    titleAr: "الثقة والأمان",
    titleEn: "Trust & Security",
    descAr: "نضع موثوقية الخدمات وأمن التعاملات في صميم تجربتنا المصرفية بما يعزز ثقة العملاء واستقرار العلاقة معهم.",
    descEn: "We place service reliability and transaction security at the heart of our banking experience to strengthen trust and long-term confidence.",
  },
  {
    icon: Heart,
    titleAr: "المسؤولية المجتمعية",
    titleEn: "Social Responsibility",
    descAr: "نؤمن بدورنا في دعم المجتمع والمساهمة في التنمية المستدامة عبر مبادرات وشراكات ذات أثر ملموس.",
    descEn: "We believe in our role in supporting society and contributing to sustainable development through meaningful initiatives and partnerships.",
  },
]

const strategicGoals: LocalizedItem[] = [
  {
    titleAr: "الريادة والابتكار",
    titleEn: "Leadership & Innovation",
    descAr: "تمكين عملائنا من تحقيق تطلعاتهم المالية عبر تجربة مصرفية متطورة تضيف لهم قيمة حقيقية في حياتهم وأعمالهم.",
    descEn: "Empowering our clients to achieve their financial aspirations through an advanced banking experience that adds real value to their lives and businesses.",
  },
  {
    titleAr: "التمكين والشمول المالي",
    titleEn: "Empowerment & Financial Inclusion",
    descAr: "إتاحة خدمات مالية ومصرفية تسهّل حياة الأفراد، وتساعد المشاريع الاقتصادية على النمو والاستقرار.",
    descEn: "Providing financial and banking services that make life easier for individuals and help economic projects grow and remain stable.",
  },
  {
    titleAr: "الثقة والاستدامة",
    titleEn: "Trust & Sustainability",
    descAr: "منح عملائنا والمساهمين طمأنينة دائمة من خلال تعامل شفاف يدعم نمواً مالياً طويل الأمد.",
    descEn: "Providing lasting confidence to our clients and shareholders through transparent practices that support long-term financial growth.",
  },
  {
    titleAr: "الشراكات والمسؤولية",
    titleEn: "Partnerships & Responsibility",
    descAr: "خلق فرص تعاون مع شركاء محليين ودوليين بما يعود بالنفع على المجتمع ويعزز التنمية المستدامة.",
    descEn: "Creating opportunities for cooperation with local and international partners in ways that benefit society and advance sustainable development.",
  },
]

const metrics: MetricItem[] = [
  {
    icon: Building2,
    labelAr: "سنة التأسيس",
    labelEn: "Established",
    valueAr: "2021",
    valueEn: "2021",
    descAr: "انطلاقة حديثة برؤية مصرفية واضحة",
    descEn: "A modern launch with a clear banking vision",
  },
  {
    icon: MapPin,
    labelAr: "المقر الرئيسي",
    labelEn: "Head Office",
    valueAr: "المكلا",
    valueEn: "Mukalla",
    descAr: "حضرموت",
    descEn: "Hadramout",
  },
  {
    icon: Globe,
    labelAr: "الفروع",
    labelEn: "Branches",
    animatedValue: 35,
    suffix: "+",
    descAr: "حضور مصرفي في مختلف المحافظات",
    descEn: "Banking presence across multiple governorates",
  },
  {
    icon: Briefcase,
    labelAr: "نقاط الخدمة",
    labelEn: "Service Points",
    animatedValue: 1700,
    suffix: "+",
    descAr: "انتشار واسع عبر شبكة دول إكسبرس",
    descEn: "Wide reach through Dowal Express network",
  },
]

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      setCount(value)
      return
    }

    const duration = 2000
    const startTime = performance.now()

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isInView, shouldReduceMotion, value])

  return <span ref={ref}>{count}</span>
}

function MetricCard({
  item,
  isAr,
  delay = 0,
}: {
  item: MetricItem
  isAr: boolean
  delay?: number
}) {
  const value =
    item.animatedValue !== undefined ? (
      <span className="inline-flex items-baseline gap-1">
        {isAr && item.suffix ? <span>{item.suffix}</span> : null}
        <AnimatedNumber value={item.animatedValue} />
        {!isAr && item.suffix ? <span>{item.suffix}</span> : null}
      </span>
    ) : (
      <span>{isAr ? item.valueAr : item.valueEn}</span>
    )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -3 }}
      className="group relative h-full overflow-hidden rounded-[24px] px-5 py-6 md:px-6 md:py-7"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.34),rgba(255,255,255,0.10)_55%,rgba(38,43,128,0.03)_100%)] opacity-80" />
      <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-[#262b80]/[0.05] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#7a1f3d]/[0.05] blur-2xl" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#262b80]/70" />
          <span className="h-px w-4 bg-[#7a1f3d]/50" />
        </div>

        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#262b80]/8 text-[#262b80]">
            <item.icon className="h-5 w-5" />
          </div>
        </div>

        <h3 className="text-[1.8rem] font-bold leading-none tracking-[-0.04em] text-[#0b0d36] md:text-[2rem] lg:text-[2.2rem]">
          {value}
        </h3>

        <p className="mt-3 text-sm font-medium leading-6 text-[#5E6B85] md:text-[15px]">
          {isAr ? item.labelAr : item.labelEn}
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {isAr ? item.descAr : item.descEn}
        </p>
      </div>
    </motion.div>
  )
}

function InfoCard({
  item,
  isAr,
}: {
  item: LocalizedIconItem
  isAr: boolean
}) {
  return (
    <motion.div
      variants={STAGGER_ITEM}
      className="relative h-full overflow-hidden rounded-[27px] bg-gradient-to-b from-white via-white to-slate-50/90 p-7 transition-all duration-300 md:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.06),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,30,63,0.04),transparent_22%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#262b80]/10 bg-gradient-to-br from-[#f8f9fc] to-white shadow-[0_10px_25px_rgba(11,13,54,0.06)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_30px_rgba(11,13,54,0.10)]">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.08),transparent_65%)]" />
            <item.icon className="relative z-10 h-6 w-6 text-[#262b80]" strokeWidth={1.8} />
          </div>

          <div className="mt-2 h-px flex-1 bg-gradient-to-r from-[#262b80]/10 via-[#8b1e3f]/20 to-transparent" />
        </div>

        <h4 className="mb-3 text-xl font-bold leading-snug text-[#0b0d36] md:text-[1.35rem]">
          {isAr ? item.titleAr : item.titleEn}
        </h4>

        <p className="text-[15px] leading-8 text-slate-600 md:text-base">
          {isAr ? item.descAr : item.descEn}
        </p>

        <div className="mt-6 pt-5">
          <div className="h-px w-full bg-gradient-to-r from-[#262b80]/10 via-slate-200/80 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

function ValueCard({
  item,
  isAr,
}: {
  item: LocalizedIconItem
  isAr: boolean
}) {
  return (
    <motion.div variants={STAGGER_ITEM}>
      <div className="group relative h-full overflow-hidden rounded-[28px] border border-[#dde3ef] bg-white p-7 shadow-[0_18px_50px_rgba(11,13,54,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,13,54,0.10)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.06),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(120,24,46,0.04),transparent_22%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#262b80]/10 bg-gradient-to-br from-[#f8f9fc] to-white shadow-[0_10px_25px_rgba(11,13,54,0.06)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_30px_rgba(11,13,54,0.10)]">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.08),transparent_65%)]" />
              <item.icon className="relative z-10 h-6 w-6 text-[#262b80]" strokeWidth={1.8} />
            </div>

            <div className="mt-2 h-px flex-1 bg-gradient-to-r from-[#262b80]/10 via-[#8b1e3f]/20 to-transparent" />
          </div>

          <h4 className="mb-3 text-xl font-bold leading-snug text-[#0b0d36] md:text-[1.35rem]">
            {isAr ? item.titleAr : item.titleEn}
          </h4>

          <p className="text-[15px] leading-8 text-slate-600 md:text-base">
            {isAr ? item.descAr : item.descEn}
          </p>

          <div className="mt-6 pt-5">
            <div className="h-px w-full bg-gradient-to-r from-[#262b80]/10 via-slate-200/80 to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function GoalCard({
  item,
  isAr,
  delay = 0,
}: {
  item: LocalizedItem
  isAr: boolean
  delay?: number
}) {
  return (
    <motion.div
      {...FADE_IN_UP}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-[28px] border border-[#dde3ef] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfe_100%)] p-7 shadow-[0_18px_50px_rgba(11,13,54,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,13,54,0.10)] md:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.05),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />

      <div className="relative z-10 flex gap-4">
        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#262b80]/8 text-[#262b80]">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        <div className="flex-1">
          <div className="mb-2 h-px w-14 bg-gradient-to-r from-[#262b80] to-[#8b1e3f]/70" />
          <h4 className="mb-3 text-xl font-bold leading-snug text-[#0b0d36]">
            {isAr ? item.titleAr : item.titleEn}
          </h4>
          <p className="leading-8 text-slate-600">
            {isAr ? item.descAr : item.descEn}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function AboutPageContent() {
  const { locale } = useI18n()
  const isAr = locale === "ar"
  const shouldReduceMotion = useReducedMotion()

  const text = {
    heroTitle: isAr ? "عن البنك" : "About Us",
    heroSubtitle: isAr
      ? "بنك وطني للتمويل الأصغر الإسلامي، نقدّم حلولاً مالية ومصرفية موثوقة تجمع بين القيم الإسلامية والابتكار، وتدعم الأفراد والأعمال وتعزز الشمول المالي في اليمن."
      : "A national Islamic microfinance bank delivering trusted financial and banking solutions that combine Islamic values with innovation, empowering individuals and businesses while advancing financial inclusion in Yemen.",
    contactUs: isAr ? "تواصل معنا" : "Contact Us",
    identityEyebrow: isAr ? "هويتنا" : "Our Identity",
    identityTitle: isAr
      ? "تمويل إسلامي حديث لخدمة الأفراد والأعمال"
      : "Modern Islamic Finance for Individuals and Businesses",
    identityDescription: isAr
      ? "بنك بن دول للتمويل الأصغر الإسلامي هو مؤسسة مصرفية وطنية حديثة تأسست عام 2021م بموجب ترخيص رسمي صادر عن البنك المركزي اليمني، ليكون أحد البنوك الرائدة في تقديم الحلول المالية والمصرفية الإسلامية الموجهة نحو دعم الأفراد والمشاريع الصغيرة والمتوسطة. ويعمل البنك على تعزيز الشمول المالي، وتحفيز النشاط الاقتصادي، وتقديم خدمات موثوقة وآمنة تجمع بين الالتزام بالقيم الإسلامية والتطوير المستمر للحلول المصرفية الحديثة."
      : "Bin Dowal Islamic Microfinance Bank is a modern national banking institution established in 2021 under an official license issued by the Central Bank of Yemen, to become one of the leading banks in providing Islamic financial and banking solutions for individuals and small and medium-sized enterprises. The bank works to promote financial inclusion, stimulate economic activity, and deliver trusted, secure services that combine Islamic values with continuous banking innovation.",

    establishmentParagraph2: isAr
      ? "ومنذ التاسيس حرصت إدارة البنك على تبني مفهوم الصيرفة الإسلامية في المنتجات المصرفية المقدمة في تكريس لمفهوم التنمية والاستثمار في المشاريع المنتجة التي تضيف قيمة للاقتصاد الوطني والمجتمع وذلك باشراف هيئة رقابة شرعية من ذوي الخبرات والكفاءة في جانب الصيرفة الإسلامية."
      : "Since its launch, the bank has worked to build a banking experience founded on trust, transparency, commitment, and innovation through an integrated ecosystem of traditional and digital banking services that improve access to financial services, support sustainable community development, and reinforce its role as a trusted partner in advancing economic growth in Yemen.",
    establishmentParagraph3: isAr
      ? "وايمانا بأهمية الوصول والانتشار وتوفير خدمات مصرفية للجميع قام البنك بافتتاح 40 فروع ومكاتب موزعة في مناطق مختلفة من المحافظات المحررة، كما عمل البنك على الاستثمار في المجال التقني من خلال توفير خدمات الكترونية متنوعة ومختلفة تلبي احتياجات العملاء وتساهم في تحسين تجربة عميل فريدة."
      : "And with a belief in the importance of access and reach and providing banking services to all, the bank opened 40 branches and offices distributed in different areas of the liberated governorates. The bank has also invested in the technical field by providing various and different electronic services that meet the needs of customers and contribute to improving the customer experience.",
    establishmentParagraph4: isAr
      ? "كما اسهم البنك بشكل فعال في توفير خدمات تمويلية متخصصة تلبي احتياجات افراد المجتمع, وفي هذا السياق كان للبنك دور فعال في تكريس المفهوم الاجتماعي للعمل المصرفي في دعم التعليم لفئة الشباب وابتكار منتجات تمويلية لرائدات الاعمال من السيدات بما يسهم في تحسين الدخل للاسر المنتجة والمشاريع الصغيرة وتقليل البطالة."
      : "The bank has also played an active role in providing specialized financing services that meet the needs of community members, and in this context, the bank has played an active role in consecrating the social concept of banking in supporting education for youth and developing innovative financing products for female entrepreneurs, contributing to improving the income of productive families and small projects and reducing unemployment.",
    establishmentParagraph5: isAr
      ? "وفي مواكبة للمتغيرات العالمية في تكريس مفهوم الاستدامة المالية ومن اداوتها تطبيق مفهوم الشمول المالي, قام بنك بن دول بإطلاق محفظة بن دول باي في خطوة سباقة لتوفير خدمات المالية ومصرفية للافراد والمؤسسات الصغيرة ومتناهية الصغر في خطوة تعكس رسالة البنك الهادفة لضم الفئات المختلفة في النظام المصرفي وتوفير خدمات مالية تلبي احتياجات المجتمع وتساهم في تقليل العرض النقدي و التضخم ضمن توجهات الدولة في تعزيز كفاءة الإدارة المالية للاقتصاد الوطني."
      : "In light of the global changes in consolidating the concept of financial sustainability and its tool for implementing the concept of financial inclusion, Bin Dowal Bank launched the Bin Dowal Pay wallet in a pioneering step to provide financial and banking services to individuals, small and micro enterprises, reflecting the bank's mission to include different groups in the banking system and provide financial services that meet the needs of society and help reduce the money supply and inflation in line with the state's directions to enhance the efficiency of financial management of the national economy.",
      
    establishmentCardTitle: isAr
      ? "انطلاقة نحو تمكين مالي أوسع"
      : "A Launch Toward Broader Financial Empowerment",
    establishmentCardDesc: isAr
      ? "بداية مؤسسة مصرفية حديثة تسعى إلى توسيع الوصول إلى الخدمات المالية وتعزيز التنمية المستدامة."
      : "The beginning of a modern banking institution seeking to expand access to financial services and support sustainable development.",
    reachTitle: isAr ? "الوصول والانتشار" : "Reach & Presence",
    reachSubtitle: isAr
      ? "يمتلك البنك شبكة مصرفية متنامية تضمن وصول الخدمات بسهولة وأمان إلى العملاء في مختلف المحافظات، بما يعزز الشمول المالي ويقرّب الخدمات من الأفراد والأعمال."
      : "The bank maintains a growing banking network that ensures easy and secure access to services across different governorates, enhancing financial inclusion and bringing services closer to individuals and businesses.",
    reachBranchesLabel: isAr ? "فروع البنك" : "Bank Branches",
    reachBranchesDesc: isAr
      ? "أكثر من 35 فرعاً تدعم حضورنا المصرفي في مختلف المحافظات."
      : "More than 35 branches supporting our banking presence across governorates.",
    reachPointsLabel: isAr ? "نقاط الخدمة" : "Service Points",
    reachPointsDesc: isAr
      ? "أكثر من 1700 نقطة خدمة عبر شبكة دول إكسبرس لتوسيع الوصول."
      : "More than 1,700 service points through the Dowal Express network to expand access.",
    reachHeadOfficeLabel: isAr ? "المقر الرئيسي" : "Head Office",
    reachHeadOfficeDesc: isAr
      ? "من حضرموت يمتد نشاط البنك عبر شبكة واسعة مع خطط توسع جغرافي ورقمي."
      : "From Hadramout, the bank extends its activities through a broad network with ambitious geographic and digital expansion plans.",
    visionMissionTitle: isAr ? "رؤيتنا ورسالتنا" : "Vision & Mission",
    visionMissionSubtitle: isAr
      ? "مرتكزات واضحة تقود مسيرتنا نحو النمو والابتكار"
      : "Clear foundations guiding our path toward growth and innovation",
    visionTitle: isAr ? "الرؤية" : "Vision",
    visionDesc: isAr
      ? "نسعى لأن نكون مؤسسة رائدة في توظيف الشمول المالي، من خلال تقديم حلول مبتكرة وفعالة تسهم في تمكين عملائنا وتحقيق تحسين مستدام في مستوى معيشتهم. مبتكرة."
      : "We strive to be a leading institution in the employment of financial inclusion, by providing innovative and effective solutions that contribute to empowering our clients and achieving sustainable improvement in their standard of living. Innovative.",
    missionTitle: isAr ? "الرسالة" : "Mission",
    missionDesc: isAr
      ? "نعمل كمؤسسة تنموية على توظيف مواردنا وإمكاناتنا بكفاءة، لخدمة المجتمع المحلي من خلال تطبيق أفضل الممارسات في مجال التمويل الأصغر. ونسعى إلى تقديم نموذج متكامل للشمول المالي يركز على تمكين المستفيدين اجتماعيًا واقتصاديًا، بما يسهم في تحسين جودة حياتهم، وذلك وفق أحكام الشريعة الإسلامية."
      : "Investing in providing comprehensive and innovative financial and banking solutions for individuals and businesses, built on reliability and operational excellence, while meeting client aspirations and contributing to development.",
    valuesTitle: isAr ? "قيمنا المؤسسية" : "Our Corporate Values",
    valuesSubtitle: isAr
      ? "قيم راسخة توجه أعمالنا وتعزز علاقتنا بعملائنا وشركائنا"
      : "Enduring values that guide our work and strengthen our relationships with clients and partners",
    goalsTitle: isAr ? "أهدافنا الاستراتيجية" : "Strategic Goals",
    goalsSubtitle: isAr
      ? "أولويات واضحة تقود البنك نحو نمو مستدام وتأثير أوسع في القطاع المالي والمجتمع."
      : "Clear priorities guiding the bank toward sustainable growth and wider impact in the financial sector and society.",
    digitalBadge: isAr ? "التحول الرقمي" : "Digital Transformation",
    digitalTitle: isAr
      ? "التحول الرقمي نحو تجربة مصرفية أكثر تطوراً"
      : "Digital Transformation Toward a More Advanced Banking Experience",
    digitalDesc: isAr
      ? "يواصل بنك بن دول الاستثمار في التحول الرقمي وتطوير الحلول التقنية المبتكرة لتعزيز تجربة العملاء ورفع كفاءة الخدمات وتسهيل الوصول إليها. ويأتي ذلك ضمن رؤية طموحة تهدف إلى التوسع الجغرافي والرقمي، وتقديم خدمات مصرفية حديثة وآمنة، بما في ذلك الحلول الرقمية مثل محفظة بن دول باي، بما يدعم مكانة البنك في التمويل الإسلامي الشامل والمستدام في اليمن."
      : "Bin Dowal continues to invest in digital transformation and innovative technological solutions to enhance customer experience, improve service efficiency, and make access easier. This aligns with an ambitious vision for geographic and digital expansion, delivering modern and secure banking services including digital solutions such as Dowal Pay, strengthening the bank’s position in inclusive and sustainable Islamic finance in Yemen.",
    digitalSecurity: isAr ? "أمان وموثوقية" : "Security & Reliability",
    digitalSecurityDesc: isAr
      ? "حماية موثوقة وتجربة رقمية آمنة بمعايير مصرفية حديثة."
      : "Trusted protection and a secure digital experience built on modern banking standards.",
    digitalSolutions: isAr ? "حلول رقمية ذكية" : "Smart Digital Solutions",
    digitalSolutionsDesc: isAr
      ? "خدمات ذكية وسهلة الاستخدام تدعم احتياجات العميل اليومية."
      : "Smart and user-friendly services that support customers’ daily needs.",
    digitalProductName: isAr ? "بن دول باي" : "Dowal Pay",
    digitalProductDesc: isAr
      ? "حلول رقمية لتجربة مصرفية أكثر سهولة"
      : "Digital solutions for an easier banking experience",
    ctaTitle: isAr
      ? "نرافق طموحك بحلول مصرفية موثوقة"
      : "We Support Your Ambitions with Trusted Banking Solutions",
    ctaDesc: isAr
      ? "اكتشف خدماتنا المصرفية وحلولنا الرقمية وشبكة فروعنا الواسعة المصممة لخدمة الأفراد والأعمال في مختلف المحافظات."
      : "Explore our banking services, digital solutions, and broad branch network designed to serve individuals and businesses across different governorates.",
    exploreServices: isAr ? "تصفح خدماتنا" : "Explore Services",
    home: isAr ? "الرئيسية" : "Home",
    establishmentBadge: isAr ? "تأسيس بنك بن دول" : "Bin Dowal Bank Establishment",
    establishmentTitle: isAr ? "منذ 2021: بنك بن دول يطلق خدماته المصرفية المتكاملة" : "Since 2021: Bin Dowal Bank Launches Its Integrated Banking Services",
    establishmentParagraph1: isAr
      ? "تاسس بنك بن دول للتمويل الأصغر الإسلامي في العام 2021م في مدينة المكلا بموجب ترخيص رقم  984/CBY/2022 وفقا لأحكام قانون البنك المركزي اليمني المنظمة لاعمال بنوك التمويل الأصغر الصادر برقم (15) للعام 2009م ومنذ التاسيس عمل بنك بن دول على تقديم خدمات مالية ومصرفية لدعم جهود التنمية والتمكين الاقتصادي في اطار الرسالة الذي أسس لها البنك."
      : "Established in 2021, in Dhowal Microfinance Bank was licensed by the Central Bank of Yemen under license number 984/CBY/2022, adhering to the Islamic microfinance law. From the outset, Dhowal has been committed to providing comprehensive financial and banking services, contributing to economic development and empowerment in line with its founding mission.",
    establishmentYearLabel: isAr ? "منذ 2021" : "Since 2021",
    establishmentMetaLabel1: isAr ? "سنة التأسيس" : "Year of Establishment",
    establishmentMetaValue2: isAr ? "مؤسسة مرخصة" : "Licensed Institution",
    establishmentMetaLabel2: isAr ? "مؤسسة مرخصة" : "Licensed Institution",
    establishmentMiniLabel: isAr ? "تأسس" : "Established",
    establishmentImageAlt: isAr ? "تأسيس بنك بن دول" : "Bin Dowal Bank Establishment",
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.heroTitle },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href={getLocalizedHref("/contact", locale)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0b0d36] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {text.contactUs}
            {isAr ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Link>
        </div>
      </PageHero>




      {/* About */}
      {/* <section className="relative overflow-hidden bg-white py-20 lg:py-28">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(11,13,54,0.05),transparent_28%)]" />
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#262b80]/[0.04] to-transparent" />

  <div className="container relative z-10 mx-auto px-4">
    <div className="mx-auto max-w-5xl text-center">
      <motion.div {...FADE_IN_UP}>
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_10px_30px_rgba(11,13,54,0.04)]">
          <span className="h-2 w-2 rounded-full bg-[#262b80]" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80] md:text-sm">
            {text.identityEyebrow}
          </span>
        </div>

        <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight text-[#0b0d36] md:text-5xl lg:text-6xl">
          {text.identityTitle}
        </h2>

        <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#8b1e3f]/70 to-transparent" />

        <p className="mx-auto max-w-3xl text-lg leading-[1.95] text-slate-600 md:text-xl">
          {text.identityDescription}
        </p>
      </motion.div>
    </div>

    <motion.div
      className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {aboutHighlights.map((item, index) => (
        <div
          key={item.titleEn || item.titleAr || index}
          className="group rounded-[28px] border border-slate-200/70 bg-white/90 p-[1px] shadow-[0_20px_60px_rgba(11,13,54,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,13,54,0.10)]"
        >
          <InfoCard item={item} isAr={isAr} />
        </div>
      ))}
    </motion.div>
  </div>
</section> */}

      {/* Establishment */}
      <section className="relative overflow-hidden border-y border-[#d7dbea] bg-[linear-gradient(180deg,#f8f9fc_0%,#f3f5fa_100%)] py-24 md:py-28">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,24,46,0.06),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#78182e]/20 to-transparent" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            {/* Text Content */}
            <motion.div {...FADE_IN_UP} className="order-2 lg:order-1">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-white px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#262b80]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#262b80]">
                  {text.establishmentBadge}
                </span>
              </div>

              <div className="mb-6 max-w-xl">
                <div className="mb-3 h-px w-20 bg-gradient-to-r from-[#78182e] to-[#262b80]" />
                <h3 className="text-3xl font-bold leading-[1.25] tracking-tight text-[#0f172a] md:text-4xl xl:text-[2.75rem]">
                  {text.establishmentTitle}
                </h3>
              </div>

              <div className="max-w-2xl space-y-5 text-[1.05rem] leading-8 text-slate-600 md:text-lg">
                <p>{text.establishmentParagraph1}</p>
                <p>{text.establishmentParagraph2}</p>
                <p>{text.establishmentParagraph3}</p>
                <p>{text.establishmentParagraph4}</p>
                <p>{text.establishmentParagraph5}</p>
              </div>

             
            </motion.div>

            {/* Visual */}
            <motion.div
              {...FADE_IN_UP}
              transition={{ delay: 0.15 }}
              className="order-1 relative flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative w-full max-w-[450px]">
                {/* Soft visual glow */}
                <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(38,43,128,0.08),transparent_35%)]" />
                <div className="absolute inset-0 rounded-[32px] " />

                <Image
                  src="/images/banking-experience.png"
                  alt={text.establishmentImageAlt || "تأسيس بنك بن دول"}
                  width={700}
                  height={700}
                  className="relative z-[1] h-auto w-full object-contain"
                  priority
                />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.div {...FADE_IN_UP}>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{text.reachTitle}</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
                {text.reachSubtitle}
              </p>
              <div className="mt-6 flex justify-center">
                <Image src="/images/branches-map.png" alt="Reach" width={700} height={700} />
              </div>
            </motion.div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
            <motion.div
              {...FADE_IN_UP}
              transition={{ delay: 0.05 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <div className="absolute right-0 top-0 p-8 opacity-20 transition-opacity group-hover:opacity-40">
                <MapPin className="h-20 w-20 text-white/50" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h4 className="mb-2 text-lg font-medium uppercase tracking-wide text-white/80">
                    {text.reachBranchesLabel}
                  </h4>
                  <div className="mb-4 flex items-baseline gap-2 text-6xl font-bold text-white md:text-7xl">
                    <span>+</span>
                    <AnimatedNumber value={35} />
                  </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  {text.reachBranchesDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              {...FADE_IN_UP}
              transition={{ delay: 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <div className="absolute right-0 top-0 p-8 opacity-20 transition-opacity group-hover:opacity-40">
                <Globe className="h-20 w-20 text-white" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h4 className="mb-2 text-lg font-medium uppercase tracking-wide text-white/80">
                    {text.reachPointsLabel}
                  </h4>
                  <div className="mb-4 flex items-baseline gap-2 text-6xl font-bold text-white md:text-7xl">
                    <span>+</span>
                    <AnimatedNumber value={1700} />
                  </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  {text.reachPointsDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              {...FADE_IN_UP}
              transition={{ delay: 0.15 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <div className="absolute right-0 top-0 p-8 opacity-20 transition-opacity group-hover:opacity-40">
                <Building2 className="h-20 w-20 text-white/50" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h4 className="mb-2 text-lg font-medium uppercase tracking-wide text-white/80">
                    {text.reachHeadOfficeLabel}
                  </h4>
                  <div className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    {isAr ? "المكلا" : "Mukalla"}
                  </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  {text.reachHeadOfficeDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fc_100%)] py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.06),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(120,24,46,0.05),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/15 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...FADE_IN_UP}>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-white px-5 py-2 shadow-[0_10px_30px_rgba(11,13,54,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#262b80]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80] md:text-sm">
                  {text.visionMissionTitle}
                </span>
              </div>

              <h2 className="mb-5 text-3xl font-bold leading-tight text-[#0b0d36] md:text-5xl">
                {text.visionMissionTitle}
              </h2>

              <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#8b1e3f]/70 to-transparent" />

              <p className="text-lg leading-8 text-slate-600 md:text-xl">
                {text.visionMissionSubtitle}
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <motion.div {...FADE_IN_UP}>
              <div className="group relative h-full overflow-hidden rounded-[30px] border border-[#dbe2f0] bg-white/90 p-8 shadow-[0_20px_60px_rgba(11,13,54,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(11,13,54,0.10)] md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.07),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/25 to-transparent" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#262b80] shadow-[0_18px_40px_rgba(38,43,128,0.22)]">
                      <Eye className="h-7 w-7 text-white" />
                    </div>
                    <div className="mt-4 h-px flex-1 bg-gradient-to-r from-[#262b80]/20 via-[#8b1e3f]/20 to-transparent" />
                  </div>

                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#78182e]/70">
                    {isAr ? "الرؤية المؤسسية" : "Corporate Vision"}
                  </div>

                  <h3 className="mb-5 text-2xl font-bold leading-snug text-[#0b0d36] md:text-[2rem]">
                    {text.visionTitle}
                  </h3>

                  <p className="text-lg leading-8 text-slate-600">
                    {text.visionDesc}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...FADE_IN_UP} transition={{ delay: 0.1 }}>
              <div className="group relative h-full overflow-hidden rounded-[30px] border border-[#dbe2f0] bg-[linear-gradient(180deg,rgba(248,249,252,0.96),rgba(255,255,255,0.98))] p-8 shadow-[0_20px_60px_rgba(11,13,54,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(11,13,54,0.10)] md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,24,46,0.07),transparent_28%)]" />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0d36]/20 to-transparent" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#0b0d36] shadow-[0_18px_40px_rgba(11,13,54,0.22)]">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <div className="mt-4 h-px flex-1 bg-gradient-to-r from-[#0b0d36]/20 via-[#8b1e3f]/20 to-transparent" />
                  </div>

                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#78182e]/70">
                    {isAr ? "الرسالة المؤسسية" : "Corporate Mission"}
                  </div>

                  <h3 className="mb-5 text-2xl font-bold leading-snug text-[#0b0d36] md:text-[2rem]">
                    {text.missionTitle}
                  </h3>

                  <p className="text-lg leading-8 text-slate-600">
                    {text.missionDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[#f8f9fc] py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(38,43,128,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(120,24,46,0.05),transparent_20%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...FADE_IN_UP}>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-white px-5 py-2 shadow-[0_10px_30px_rgba(11,13,54,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#262b80]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80] md:text-sm">
                  {text.valuesTitle}
                </span>
              </div>

              <h2 className="mb-5 text-3xl font-bold leading-tight text-[#0b0d36] md:text-5xl">
                {text.valuesTitle}
              </h2>

              <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#8b1e3f]/70 to-transparent" />

              <p className="text-lg leading-8 text-slate-600 md:text-xl">
                {text.valuesSubtitle}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((item) => (
              <ValueCard key={item.titleEn} item={item} isAr={isAr} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="relative overflow-hidden border-t border-[#d7dbea] bg-white py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.05),transparent_30%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div {...FADE_IN_UP}>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_10px_30px_rgba(11,13,54,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#262b80]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80] md:text-sm">
                  {text.goalsTitle}
                </span>
              </div>

              <h2 className="mb-5 text-3xl font-bold text-[#0b0d36] md:text-5xl">
                {text.goalsTitle}
              </h2>

              <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#8b1e3f]/70 to-transparent" />

              <p className="text-lg leading-8 text-slate-600 md:text-xl">
                {text.goalsSubtitle}
              </p>
            </motion.div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {strategicGoals.map((item, index) => (
              <GoalCard key={item.titleEn} item={item} isAr={isAr} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] py-24 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.035]" />

        <div className="pointer-events-none absolute -right-24 top-[-80px] h-[340px] w-[340px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div {...FADE_IN_UP} className="text-white">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <Smartphone className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                  {text.digitalBadge}
                </span>
              </div>

              <h2 className="mb-5 max-w-[620px] text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
                {text.digitalTitle}
              </h2>

              <div className="mb-6 h-px w-24 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />

              <p className="mb-9 max-w-[640px] text-base leading-8 text-white/72 md:text-xl md:leading-9">
                {text.digitalDesc}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group rounded-[26px] border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white">{text.digitalSecurity}</h3>
                    <p className="text-sm leading-6 text-white/60">
                      {text.digitalSecurityDesc}
                    </p>
                  </div>
                </div>

                <div className="group rounded-[26px] border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white">{text.digitalSolutions}</h3>
                    <p className="text-sm leading-6 text-white/60">
                      {text.digitalSolutionsDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...FADE_IN_UP}
              transition={{ delay: 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.05] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="relative z-10 flex items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                  <div className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

                  <motion.div
                    animate={shouldReduceMotion ? { y: 0 } : { y: [0, -6, 0, 6, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <Image
                      src="/images/mockup-mobile-apps.png"
                      alt="Digital banking applications"
                      width={500}
                      height={500}
                      className="h-auto w-[70%] object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.32)] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* <div className="absolute -bottom-5 left-6 hidden rounded-2xl border border-white/12 bg-[#0b1236]/80 px-4 py-3 text-sm text-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl md:flex">
                <span className="font-medium">{text.digitalBadge}</span>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-muted/20 py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div {...FADE_IN_UP} className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {text.ctaTitle}
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
              {text.ctaDesc}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={getLocalizedHref("/digital-channels", locale)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#262b80] px-8 py-4 font-bold text-white transition-colors hover:bg-[#0b0d36]"
              >
                {text.exploreServices}
                {isAr ? (
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                )}
              </Link>

              <Link
                href={getLocalizedHref("/contact", locale)}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-8 py-4 font-bold text-foreground transition-colors hover:bg-muted/50"
              >
                {text.contactUs}
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}