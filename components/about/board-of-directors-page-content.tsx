"use client"

import { useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { PageHero } from "@/components/ui/page-hero"
import {
  boardMembers,
  chairman,
  viceChairman,
  regularMembers,
  type BoardMember,
} from "@/data/board-of-directors"
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Eye,
  Lightbulb,
  Scale,
  TrendingUp,
  Quote,
  Users,
  FileText,
  ChevronRight,
} from "lucide-react"

/* ─────────────────────────────────────────
   Animation Variants
───────────────────────────────────────── */
const FADE_UP = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" },
}

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
}

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

/* ─────────────────────────────────────────
   Governance Values Data
───────────────────────────────────────── */
const governanceValues = [
  {
    icon: ShieldCheck,
    titleAr: "الحوكمة",
    titleEn: "Governance",
    descAr: "إطار رقابي صارم يضمن اتخاذ القرارات بكفاءة وانضباط مؤسسي.",
    descEn: "A rigorous oversight framework ensuring disciplined and efficient decision-making.",
  },
  {
    icon: Eye,
    titleAr: "الشفافية",
    titleEn: "Transparency",
    descAr: "الإفصاح الكامل والوضوح في جميع التعاملات والممارسات المؤسسية.",
    descEn: "Full disclosure and clarity across all institutional dealings and practices.",
  },
  {
    icon: Scale,
    titleAr: "النزاهة",
    titleEn: "Integrity",
    descAr: "الالتزام التام بالمعايير الأخلاقية والمهنية في كل قرار وممارسة.",
    descEn: "Unwavering adherence to ethical and professional standards in every decision.",
  },
  {
    icon: TrendingUp,
    titleAr: "الاستدامة",
    titleEn: "Sustainability",
    descAr: "بناء قيمة طويلة الأمد تتجاوز الربحية نحو التأثير الإيجابي.",
    descEn: "Building long-term value that goes beyond profitability toward positive impact.",
  },
  {
    icon: Lightbulb,
    titleAr: "دعم النمو",
    titleEn: "Growth Support",
    descAr: "تمكين الأفراد والمشاريع من خلال قرارات استراتيجية موجّهة للتنمية.",
    descEn: "Empowering individuals and enterprises through development-oriented strategic decisions.",
  },
]

/* ─────────────────────────────────────────
   Member Avatar Component
───────────────────────────────────────── */
function MemberAvatar({
  member,
  size = "md",
}: {
  member: BoardMember
  size?: "sm" | "md" | "lg" | "xl"
}) {
  const sizeClasses = {
    sm: "h-16 w-16 text-lg",
    md: "h-20 w-20 text-xl",
    lg: "h-28 w-28 text-2xl",
    xl: "h-36 w-36 text-3xl",
  }

  const categoryGradient = {
    chairman:
      "from-[#0b0d36] via-[#262b80] to-[#3b44a9] ring-4 ring-white shadow-[0_8px_32px_rgba(38,43,128,0.35)]",
    "vice-chairman":
      "from-[#1a1f5c] via-[#2d3490] to-[#4050b5] ring-2 ring-white/80 shadow-[0_8px_24px_rgba(38,43,128,0.25)]",
    member:
      "from-[#262b80] to-[#3d45a0] ring-2 ring-white/60 shadow-[0_6px_18px_rgba(38,43,128,0.18)]",
  }

  if (member.image) {
    return (
      <div
        className={`relative overflow-hidden rounded-full ${sizeClasses[size]} ${categoryGradient[member.category]}`}
      >
        <Image src={member.image} alt={member.nameAr} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-br ${categoryGradient[member.category]} ${sizeClasses[size]} font-bold tracking-wide text-white`}
    >
      {/* Subtle inner sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_65%)]" />
      <span className="relative z-10">{member.initials}</span>
    </div>
  )
}

/* ─────────────────────────────────────────
   Chairman Message Section
───────────────────────────────────────── */
function ChairmanMessageSection({
  member,
  isAr,
}: {
  member: BoardMember
  isAr: boolean
}) {
  const message = isAr ? member.messageAr : member.messageEn
  const title = isAr ? member.titleAr : member.titleEn
  const name = isAr ? member.nameAr : member.nameEn

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.07),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(11,13,54,0.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Label */}
        <motion.div {...FADE_UP} className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_8px_24px_rgba(11,13,54,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#262b80]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "كلمة رئيس مجلس الإدارة" : "Chairman's Message"}
            </span>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Portrait Card */}
          <motion.div
            {...FADE_UP}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[320px]">
              {/* Decorative background glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#262b80]/8 via-transparent to-[#8b1e3f]/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-[#dde3ef] bg-gradient-to-b from-[#f8f9fc] to-white p-8 shadow-[0_24px_60px_rgba(11,13,54,0.10)]">
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[32px] bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24]" />

                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 mt-2">
                    <MemberAvatar member={member} size="xl" />
                  </div>

                  <h3 className="mb-1 text-xl font-bold leading-snug text-[#0b0d36]">
                    {name}
                  </h3>
                  <p className="mb-4 text-sm font-semibold tracking-wide text-[#262b80]">
                    {title}
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-[#262b80]/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]/70" />
                    <span className="h-px w-8 bg-[#8b1e3f]/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Text */}
          <motion.div
            {...FADE_UP}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-[28px] border border-[#dde3ef] bg-gradient-to-b from-white to-[#f8f9fc] p-8 shadow-[0_18px_50px_rgba(11,13,54,0.07)] md:p-10">
              {/* Subtle radial accent */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.05),transparent_40%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/15 to-transparent" />

              <div className="relative z-10">
                {/* Large quote icon */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#262b80]/8 text-[#262b80]">
                    <Quote className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="pt-3 h-px flex-1 bg-gradient-to-r from-[#262b80]/15 via-[#8b1e3f]/10 to-transparent" />
                </div>

                <blockquote
                  className="text-[1.05rem] leading-[2.1] text-slate-600 md:text-[1.1rem]"
                  dir="rtl"
                >
                  {message}
                </blockquote>

                {/* Bottom signature */}
                <div className="mt-8 flex items-center gap-4 border-t border-[#262b80]/8 pt-6">
                  <div className="h-9 w-9 rounded-lg bg-[#262b80]/8 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#262b80]">{member.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0b0d36]">{name}</p>
                    <p className="text-xs text-slate-500">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Hierarchy Section
───────────────────────────────────────── */
function HierarchySection({
  isAr,
}: {
  isAr: boolean
}) {
  return (
    <section className="relative overflow-hidden border-y border-[#d7dbea] bg-gradient-to-b from-[#f8f9fc] to-[#f3f5fa] py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.07),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,24,46,0.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Label */}
        <motion.div {...FADE_UP} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-white px-5 py-2 shadow-[0_8px_24px_rgba(11,13,54,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#262b80]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "الهيكل الإداري" : "Leadership Structure"}
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#0b0d36] md:text-4xl">
            {isAr ? "تسلسل قيادة مجلس الإدارة" : "Board of Directors Hierarchy"}
          </h2>
        </motion.div>

        {/* Hierarchy tree */}
        <div className="flex flex-col items-center">
          {/* Chairman */}
          <motion.div {...FADE_UP} className="w-full max-w-sm">
            <HierarchyCard member={chairman} isAr={isAr} featured />
          </motion.div>

          {/* Connector */}
          <div className="flex flex-col items-center py-3">
            <div className="h-8 w-px bg-gradient-to-b from-[#262b80]/40 to-[#262b80]/15" />
            <div className="h-2 w-2 rounded-full bg-[#262b80]/40" />
            <div className="h-4 w-px bg-gradient-to-b from-[#262b80]/15 to-[#262b80]/40" />
          </div>

          {/* Vice Chairman */}
          <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="w-full max-w-xs">
            <HierarchyCard member={viceChairman} isAr={isAr} />
          </motion.div>

          {/* Connector to members */}
          <div className="flex flex-col items-center py-3">
            <div className="h-8 w-px bg-gradient-to-b from-[#262b80]/30 to-[#262b80]/10" />
            <div className="h-2 w-2 rounded-full bg-[#262b80]/30" />
            <div className="h-4 w-px bg-gradient-to-b from-[#262b80]/10 to-transparent" />
          </div>

          {/* Members label */}
          <motion.div
            {...FADE_UP}
            transition={{ delay: 0.15 }}
            className="mb-8 flex items-center gap-4 w-full max-w-3xl"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#262b80]/20" />
            <span className="rounded-full border border-[#262b80]/12 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#262b80] shadow-sm">
              {isAr ? "أعضاء مجلس الإدارة" : "Board Members"}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#262b80]/20" />
          </motion.div>

          {/* Regular Members Grid */}
          <motion.div
            className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:max-w-5xl"
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {regularMembers.map((member) => (
              <motion.div key={member.id} variants={STAGGER_ITEM}>
                <MiniMemberCard member={member} isAr={isAr} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Hierarchy Card (Chairman / Vice)
───────────────────────────────────────── */
function HierarchyCard({
  member,
  isAr,
  featured = false,
}: {
  member: BoardMember
  isAr: boolean
  featured?: boolean
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] bg-white text-center transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-2 border-[#262b80]/20 shadow-[0_24px_60px_rgba(38,43,128,0.14)]"
          : "border border-[#dde3ef] shadow-[0_16px_40px_rgba(11,13,54,0.08)]"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24] ${
          featured ? "" : "opacity-60"
        }`}
      />

      {/* Radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.05),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative z-10 p-7 ${featured ? "md:p-9" : "md:p-7"}`}>
        {/* Avatar */}
        <div className="mb-5 flex justify-center">
          <MemberAvatar member={member} size={featured ? "xl" : "lg"} />
        </div>

        {/* Name */}
        <h3
          className={`mb-2 font-bold leading-snug text-[#0b0d36] ${
            featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          }`}
        >
          {isAr ? member.nameAr : member.nameEn}
        </h3>

        {/* Title */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#262b80]/6 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#262b80]" />
          <p className="text-sm font-bold text-[#262b80]">
            {isAr ? member.titleAr : member.titleEn}
          </p>
        </div>

        {/* Decorative bottom bar */}
        <div className="mx-auto mt-2 h-px w-12 bg-gradient-to-r from-[#262b80]/30 to-[#8b1e3f]/20" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Mini Member Card (for grid)
───────────────────────────────────────── */
function MiniMemberCard({
  member,
  isAr,
}: {
  member: BoardMember
  isAr: boolean
}) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-[#dde3ef] bg-white p-5 text-center shadow-[0_10px_30px_rgba(11,13,54,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#262b80]/20 hover:shadow-[0_18px_45px_rgba(38,43,128,0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.05),transparent_50%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-[22px] bg-gradient-to-r from-[#262b80]/40 to-[#8b1e3f]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-3 flex justify-center">
          <MemberAvatar member={member} size="md" />
        </div>
        <h4 className="text-sm font-bold leading-snug text-[#0b0d36]">
          {isAr ? member.nameAr : member.nameEn}
        </h4>
        <p className="mt-1.5 text-xs font-semibold text-[#262b80]/80">
          {isAr ? member.titleAr : member.titleEn}
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Full Members Grid Section
───────────────────────────────────────── */
function MembersGridSection({ isAr }: { isAr: boolean }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(38,43,128,0.06),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div {...FADE_UP} className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_8px_24px_rgba(11,13,54,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#262b80]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "أعضاء المجلس" : "Board Members"}
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#0b0d36] md:text-4xl">
            {isAr ? "جميع أعضاء مجلس الإدارة" : "All Board of Directors Members"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            {isAr
              ? "قيادة موثوقة وكفاءات متعددة تعمل معاً لتحقيق رؤية البنك الاستراتيجية."
              : "Trusted leadership and diverse expertise working together to achieve the bank's strategic vision."}
          </p>
        </motion.div>

        {/* Grid — all 9 members */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {boardMembers.map((member) => (
            <motion.div key={member.id} variants={STAGGER_ITEM}>
              <FullMemberCard member={member} isAr={isAr} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Full Member Card
───────────────────────────────────────── */
function FullMemberCard({
  member,
  isAr,
}: {
  member: BoardMember
  isAr: boolean
}) {
  const isSpecial =
    member.category === "chairman" || member.category === "vice-chairman"

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-[28px] bg-white transition-all duration-300 hover:-translate-y-1.5 ${
        isSpecial
          ? "border-2 border-[#262b80]/18 shadow-[0_20px_55px_rgba(38,43,128,0.13)]"
          : "border border-[#dde3ef] shadow-[0_16px_45px_rgba(11,13,54,0.07)]"
      }`}
    >
      {/* Accent top */}
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24] transition-opacity duration-300 ${
          isSpecial ? "opacity-100" : "opacity-30 group-hover:opacity-100"
        }`}
      />

      {/* Hover radial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.06),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center p-8 text-center">
        {/* Avatar */}
        <div className="mb-5">
          <MemberAvatar
            member={member}
            size={isSpecial ? "lg" : "md"}
          />
        </div>

        {/* Name */}
        <h3
          className={`mb-2 font-bold leading-snug text-[#0b0d36] ${
            isSpecial ? "text-xl" : "text-[1.05rem]"
          }`}
        >
          {isAr ? member.nameAr : member.nameEn}
        </h3>

        {/* Title badge */}
        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 ${
            member.category === "chairman"
              ? "bg-[#262b80]/10 text-[#262b80]"
              : member.category === "vice-chairman"
              ? "bg-[#3d45a0]/8 text-[#3d45a0]"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
          <span className="text-xs font-bold tracking-wide">
            {isAr ? member.titleAr : member.titleEn}
          </span>
        </div>

        {/* Subtle bottom separator */}
        <div className="mt-6 h-px w-12 bg-gradient-to-r from-[#262b80]/25 to-[#8b1e3f]/15 transition-all duration-300 group-hover:w-20" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Governance Values Section
───────────────────────────────────────── */
function GovernanceSection({ isAr }: { isAr: boolean }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] py-20 text-white lg:py-24">
      {/* Background filigree */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/new-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -start-24 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-16 -end-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div {...FADE_UP} className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              {isAr ? "مبادئنا الحاكمة" : "Our Governing Principles"}
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
            {isAr ? "قيم القيادة والحوكمة" : "Leadership & Governance Values"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {isAr
              ? "مبادئ راسخة تقود قرارات مجلس الإدارة وتضمن الأثر المؤسسي المستدام."
              : "Steadfast principles guiding board decisions and ensuring lasting institutional impact."}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {governanceValues.map((val) => {
            const Icon = val.icon
            return (
              <motion.div
                key={val.titleEn}
                variants={STAGGER_ITEM}
                className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_60%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-white/20">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold tracking-wide text-white">
                    {isAr ? val.titleAr : val.titleEn}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/55">
                    {isAr ? val.descAr : val.descEn}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   CTA Closing Section
───────────────────────────────────────── */
function CtaSection({ isAr }: { isAr: boolean }) {
  const { mode, locale } = useI18n()
  const Arrow = isAr ? ArrowLeft : ArrowRight

  const links = [
    {
      href: "/about#vision",
      labelAr: "التوجهات الإستراتيجية",
      labelEn: "Strategic Directions",
      icon: Lightbulb,
    },
    {
      href: "/about#management",
      labelAr: "الإدارة التنفيذية",
      labelEn: "Executive Management",
      icon: Users,
    },
    {
      href: "/knowledge-center/annual-reports",
      labelAr: "التقارير السنوية",
      labelEn: "Annual Reports",
      icon: FileText,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(38,43,128,0.05),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/15 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div {...FADE_UP} className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-[#0b0d36] md:text-3xl">
            {isAr ? "تعرف على المزيد عن البنك" : "Learn More About the Bank"}
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-500">
            {isAr
              ? "اكتشف رؤيتنا ورسالتنا وفريق قيادتنا التنفيذية وتقاريرنا السنوية."
              : "Explore our vision, mission, executive leadership team, and annual reports."}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {links.map((link) => {
            const Icon = link.icon
            return (
              <motion.div key={link.href} variants={STAGGER_ITEM}>
                <Link
                  href={mode === "url" ? getLocalizedHref(link.href, locale) : link.href}
                  className="group flex items-center justify-between gap-4 rounded-[20px] border border-[#dde3ef] bg-[#f8f9fc] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#262b80]/25 hover:bg-white hover:shadow-[0_16px_40px_rgba(38,43,128,0.10)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#262b80] shadow-sm transition-colors duration-300 group-hover:bg-[#262b80] group-hover:text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm font-bold text-[#0b0d36]">
                      {isAr ? link.labelAr : link.labelEn}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#ed1c24]" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
export function BoardOfDirectorsPageContent() {
  const { locale, mode } = useI18n()
  const isAr = locale === "ar"

  return (
    <div className="min-h-screen bg-background font-sans" dir={isAr ? "rtl" : "ltr"}>
      {/* 1. Hero */}
      <PageHero
        title={isAr ? "مجلس الإدارة" : "Board of Directors"}
        subtitle={
          isAr
            ? "مجلس إدارة بنك بن دول يضطلع بمسؤولية رسم التوجهات الاستراتيجية وضمان الحوكمة الرشيدة، مدفوعاً بالالتزام بالقيم الإسلامية وأعلى معايير الشفافية والنزاهة المؤسسية."
            : "The Board of Directors of Bin Dowal Bank is responsible for setting strategic directions and ensuring sound governance, guided by a commitment to Islamic values and the highest standards of transparency and institutional integrity."
        }
        breadcrumbs={[
          { labelKey: isAr ? "الرئيسية" : "Home", href: "/" },
          { labelKey: isAr ? "عن البنك" : "About Us", href: "/about" },
          { labelKey: isAr ? "مجلس الإدارة" : "Board of Directors" },
        ]}
      />

      {/* 2. Chairman's Message */}
      <ChairmanMessageSection member={chairman} isAr={isAr} />

      {/* 3. Hierarchy */}
      <HierarchySection isAr={isAr} />

      {/* 4. Full Members Grid */}
      <MembersGridSection isAr={isAr} />

      {/* 5. Governance Values */}
      <GovernanceSection isAr={isAr} />

      {/* 6. CTA */}
      <CtaSection isAr={isAr} />
    </div>
  )
}
