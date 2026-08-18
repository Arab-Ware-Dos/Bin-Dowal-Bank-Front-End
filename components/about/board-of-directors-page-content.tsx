"use client"


import { getBoardMembers } from "@/services/board-members-service"
import { useEffect, useState } from "react"
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

/* ──────────────────────────────────────────────────
   Animation Variants
────────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────────
   Governance Values Data
────────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────────
   Member Avatar Component
────────────────────────────────────────────────── */
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
        className={"relative overflow-hidden rounded-full " + sizeClasses[size] + " " + categoryGradient[member.category]}
      >
        <Image src={member.image} alt={member.nameAr} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className={"relative flex items-center justify-center rounded-full bg-gradient-to-br " + categoryGradient[member.category] + " " + sizeClasses[size] + " font-bold tracking-wide text-white"}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_65%)]" />
      <span className="relative z-10">{member.initials}</span>
    </div>
  )
}

/* ──────────────────────────────────────────────────
   Chairman Message Section
────────────────────────────────────────────────── */
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.07),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(11,13,54,0.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div {...FADE_UP} className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_8px_24px_rgba(11,13,54,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#262b80]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "كلمة رئيس مجلس الإدارة" : "Chairman's Message"}
            </span>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            {...FADE_UP}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[320px]">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#262b80]/8 via-transparent to-[#8b1e3f]/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-[#dde3ef] bg-gradient-to-b from-[#f8f9fc] to-white p-8 shadow-[0_24px_60px_rgba(11,13,54,0.10)]">
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

                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-[#262b80]/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ed1c24]/70" />
                    <span className="h-px w-8 bg-[#8b1e3f]/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...FADE_UP}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-[28px] border border-[#dde3ef] bg-gradient-to-b from-white to-[#f8f9fc] p-8 shadow-[0_18px_50px_rgba(11,13,54,0.07)] md:p-10">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.05),transparent_40%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/15 to-transparent" />

              <div className="relative z-10">
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

/* ──────────────────────────────────────────────────
   Hierarchy Card Component
────────────────────────────────────────────────── */
function HierarchyCard({
  member,
  isAr,
  featured = false,
}: {
  member: BoardMember
  isAr: boolean
  featured?: boolean
}) {
  const name = isAr ? member.nameAr : member.nameEn
  const title = isAr ? member.titleAr : member.titleEn

  return (
    <div
      className={"group relative overflow-hidden rounded-[24px] border p-6 text-center transition-all duration-300 " + (
        featured
          ? "border-[#262b80]/20 bg-white shadow-[0_20px_50px_rgba(38,43,128,0.12)] hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(38,43,128,0.18)]"
          : "border-[#dde3ef] bg-white shadow-[0_12px_36px_rgba(11,13,54,0.06)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,13,54,0.10)]"
      )}
    >
      <div
        className={"absolute inset-x-0 top-0 h-[3px] rounded-t-[24px] " + (
          featured
            ? "bg-gradient-to-r from-[#2d3185] via-[#763169] to-[#ed1c24]"
            : "bg-gradient-to-r from-[#262b80]/40 via-[#8b1e3f]/30 to-transparent"
        )}
      />

      <div className="flex flex-col items-center">
        <div className="mb-4">
          <MemberAvatar member={member} size={featured ? "lg" : "md"} />
        </div>

        <h3
          className={"font-bold leading-snug text-[#0b0d36] " + (
            featured ? "text-lg md:text-xl" : "text-base md:text-lg"
          )}
        >
          {name}
        </h3>

        <p
          className={"mt-1 font-semibold tracking-wide " + (
            featured ? "text-xs text-[#262b80]" : "text-xs text-slate-500"
          )}
        >
          {title}
        </p>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────
   Hierarchy Section
────────────────────────────────────────────────── */
function HierarchySection({
  isAr,
  chairmanMember,
  viceChairmanMember,
  regularList,
}: {
  isAr: boolean
  chairmanMember: BoardMember
  viceChairmanMember: BoardMember
  regularList: BoardMember[]
}) {
  return (
    <section className="relative overflow-hidden border-y border-[#d7dbea] bg-gradient-to-b from-[#f8f9fc] to-[#f3f5fa] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,43,128,0.07),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,24,46,0.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#262b80]/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
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

        <div className="flex flex-col items-center">
          <motion.div {...FADE_UP} className="w-full max-w-sm">
            <HierarchyCard member={chairmanMember} isAr={isAr} featured />
          </motion.div>

          <div className="flex flex-col items-center py-3">
            <div className="h-8 w-px bg-gradient-to-b from-[#262b80]/40 to-[#262b80]/15" />
            <div className="h-2 w-2 rounded-full bg-[#262b80]/40" />
            <div className="h-4 w-px bg-gradient-to-b from-[#262b80]/15 to-[#262b80]/40" />
          </div>

          <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="w-full max-w-xs">
            <HierarchyCard member={viceChairmanMember} isAr={isAr} />
          </motion.div>

          <div className="flex flex-col items-center py-3">
            <div className="h-8 w-px bg-gradient-to-b from-[#262b80]/30 to-[#262b80]/10" />
            <div className="h-2 w-2 rounded-full bg-[#262b80]/30" />
            <div className="h-4 w-px bg-gradient-to-b from-[#262b80]/10 to-transparent" />
          </div>

          <motion.div
            {...FADE_UP}
            transition={{ delay: 0.15 }}
            className="mb-8 flex items-center gap-4 w-full max-w-3xl"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#262b80]/20" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#262b80]">
              {isAr ? "أعضاء مجلس الإدارة" : "Board Members"}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#262b80]/20" />
          </motion.div>

          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {regularList.map((member) => (
              <motion.div key={member.id} variants={STAGGER_ITEM}>
                <HierarchyCard member={member} isAr={isAr} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────
   Members Grid Section
────────────────────────────────────────────────── */
function MembersGridSection({
  isAr,
  membersList,
}: {
  isAr: boolean
  membersList: BoardMember[]
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div {...FADE_UP} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-[#f8f9fc] px-5 py-2 shadow-[0_8px_24px_rgba(11,13,54,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#262b80]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "أعضاء المجلس" : "Board Members"}
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#0b0d36] md:text-4xl">
            {isAr ? "جميع أعضاء مجلس الإدارة" : "All Board of Directors Members"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            {isAr
              ? "قيادة موثوقة وكفاءات متعددة تعمل معاً لتحقيق رؤية البنك الاستراتيجية."
              : "Trusted leadership and diverse expertise working together to achieve the bank's strategic vision."}
          </p>
        </motion.div>

        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {membersList.map((member) => {
            const name = isAr ? member.nameAr : member.nameEn
            const title = isAr ? member.titleAr : member.titleEn

            return (
              <motion.div
                key={member.id}
                variants={STAGGER_ITEM}
                className="group relative overflow-hidden rounded-[28px] border border-[#dde3ef] bg-gradient-to-b from-white to-[#f8f9fc] p-8 shadow-[0_14px_40px_rgba(11,13,54,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#262b80]/20 hover:shadow-[0_24px_55px_rgba(38,43,128,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[28px] bg-gradient-to-r from-[#262b80]/20 via-[#8b1e3f]/20 to-transparent" />

                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <MemberAvatar member={member} size="lg" />
                  </div>

                  <h3 className="mb-1 text-xl font-bold leading-snug text-[#0b0d36]">
                    {name}
                  </h3>
                  <p className="mb-4 text-sm font-semibold tracking-wide text-[#262b80]">
                    {title}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-[#262b80]/20" />
                    <span className="h-1 w-1 rounded-full bg-[#8b1e3f]/50" />
                    <span className="h-px w-8 bg-[#262b80]/20" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────
   Governance Values Section
────────────────────────────────────────────────── */
function GovernanceValuesSection({ isAr }: { isAr: boolean }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fc] to-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div {...FADE_UP} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#262b80]/10 bg-white px-5 py-2 shadow-[0_8px_24px_rgba(11,13,54,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#262b80]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#262b80]">
              {isAr ? "قيم الحوكمة والمسؤولية" : "Governance & Responsibility Values"}
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#0b0d36] md:text-4xl">
            {isAr ? "المبادئ الموجهة لقرارات المجلس" : "Guiding Principles of the Board"}
          </h2>
        </motion.div>

        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {governanceValues.map((val, i) => {
            const Icon = val.icon
            return (
              <motion.div
                key={i}
                variants={STAGGER_ITEM}
                className="group relative overflow-hidden rounded-[24px] border border-[#dde3ef] bg-white p-6 shadow-[0_10px_30px_rgba(11,13,54,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#262b80]/20 hover:shadow-[0_20px_40px_rgba(38,43,128,0.10)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#262b80]/8 text-[#262b80] transition-colors duration-300 group-hover:bg-[#262b80] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0b0d36]">
                  {isAr ? val.titleAr : val.titleEn}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {isAr ? val.descAr : val.descEn}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────
   Main BoardOfDirectorsPageContent Component
────────────────────────────────────────────────── */
export function BoardOfDirectorsPageContent() {
  const { locale } = useI18n()
  const isAr = locale === "ar"
  const [membersState, setMembersState] = useState<BoardMember[]>(boardMembers)

  useEffect(() => {
    async function loadData() {
      try {
        const dynamicMembers = await getBoardMembers(locale)
        if (dynamicMembers && dynamicMembers.length > 0) {
          setMembersState(dynamicMembers)
        }
      } catch (e) {
        console.warn('Failed to load dynamic board data', e)
      }
    }
    loadData()
  }, [locale])

  const chairmanMember = membersState.find((m) => m.category === "chairman") || chairman
  const viceChairmanMember = membersState.find((m) => m.category === "vice-chairman") || viceChairman
  const regularList = membersState.filter((m) => m.category === "member")

  return (
    <div>
      <PageHero
        title={isAr ? "مجلس الإدارة" : "Board of Directors"}
        subtitle={isAr ? "قيادة مصرفية خبيرة ترسم مسار النمو المستدام والابتكار المالي" : "Expert banking leadership steering sustainable growth and financial innovation"}
        breadcrumbs={[
          { labelKey: "nav.home", href: "/" },
          { labelKey: "nav.about", href: "/about" },
          { labelKey: "nav.boardOfDirectors" },
        ]}
      />

      <ChairmanMessageSection member={chairmanMember} isAr={isAr} />

      <HierarchySection
        isAr={isAr}
        chairmanMember={chairmanMember}
        viceChairmanMember={viceChairmanMember}
        regularList={regularList.length > 0 ? regularList : regularMembers}
      />

      <MembersGridSection isAr={isAr} membersList={membersState} />

      <GovernanceValuesSection isAr={isAr} />
    </div>
  )
}
