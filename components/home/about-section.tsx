"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowUpRight, Play } from "lucide-react"

export function AboutSection() {
  const { locale, direction } = useI18n()
  const reduceMotion = useReducedMotion()
  const isAr = locale === "ar"
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const ArrowIcon = isAr ? ChevronLeft : ChevronRight
  const videoId = "obOvMpV9dS4"

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&playsinline=1&rel=0`

  const trustItems = useMemo(
    () => [
      {
        title: isAr ? "الشمول المالي" : "Financial Inclusion",
        desc: isAr
          ? "نوسّع الوصول إلى الخدمات المالية عبر حلول عملية تلائم الاحتياج اليومي وتعزّز الاستفادة منها."
          : "We expand access to financial services through practical solutions that support everyday needs.",
      },
      {
        title: isAr ? "حلول مصرفية وتمويلية" : "Banking & Financing Solutions",
        desc: isAr
          ? "نقدّم حسابات وخدمات ومنتجات تمويلية مصممة لتلبية احتياجات الأفراد والأعمال ضمن إطار مهني واضح."
          : "We offer accounts, services, and financing products tailored to the needs of individuals and businesses.",
      },
      {
        title: isAr ? "التزام وتنمية" : "Commitment & Development",
        desc: isAr
          ? "نعتمد دورًا مصرفيًا تنمويًا يخدم المجتمع المحلي ويلتزم بمبادئ الشريعة الإسلامية."
          : "We follow a development-oriented banking role that serves the local community in line with Islamic Sharia principles.",
      },
    ],
    [isAr]
  )

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease: "easeOut" },
      }

  return (
    <section
      dir={direction}
      className="relative overflow-hidden bg-white py-10 md:py-10 xl:py-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#b91c1c] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.92),rgba(255,255,255,1))]" />
        <div className="absolute start-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(45,49,133,0.06),transparent_68%)] blur-3xl" />
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 lg:px-8 xl:px-12">
        {/* Main composition */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Content */}
          <motion.div {...reveal} className="lg:col-span-5">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[1.5px] w-10 bg-[#b91c1c]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2d3185]">
                {isAr ? "عن البنك" : "About the Bank"}
              </span>
            </div>

            <h2 className="max-w-[12ch] text-4xl font-light leading-[1.12] tracking-tight text-slate-950 md:text-5xl xl:text-[4rem]">
              {isAr ? (
                <>
                 
                  <span className="block font-bold text-[#2d3185]">
                    بنك بن دول
                  </span>
                  <span className="block">للتمويل الأصغر الإسلامي</span>
                </>
              ) : (
                <>
                  Bin Dowal
                  <span className="block font-bold text-[#2d3185]">
                    Islamic Microfinance Bank
                  </span>
                  <span className="block">A Banking Presence for Development</span>
                </>
              )}
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-base">
              {isAr
                ? "يعمل بنك بن دول للتمويل الأصغر الإسلامي على توظيف الشمول المالي لتقديم حلول مصرفية وتمويلية تسهم في التحسين المستدام للظروف المعيشية لعملائه، مع التركيز على خدمة المجتمع المحلي، وتوسيع الوصول إلى الخدمات المالية، وتقديمها ضمن إطار متوافق مع مبادئ الشريعة الإسلامية."
                : "Bin Dowal Islamic Microfinance Bank works to employ financial inclusion in delivering banking and financing solutions that contribute to the sustainable improvement of customers’ living conditions, with a focus on serving the local community, expanding access to financial services, and providing them in line with Islamic Sharia principles."}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-2xl bg-[#2d3185] px-8 text-[15px] font-bold text-white hover:bg-[#23276f]"
              >
                <Link href={getLocalizedHref("/about", locale)} className="flex items-center gap-2">
                  <span>{isAr ? "اكتشف البنك" : "Discover the Bank"}</span>
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
              </Button>

              <Button
                asChild
                className="group h-[3.4rem] min-w-[140px] rounded-full border border-slate-200 bg-white font-bold text-[#0b0d36] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#262b80]/20 hover:bg-slate-50 hover:shadow-md hover:shadow-[#262b80]/5 md:min-w-[160px]"
              >
                <Link href={getLocalizedHref("/contact", locale)} className="flex items-center gap-2">
                  <span>{isAr ? "تواصل معنا" : "Contact Us"}</span>
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual panel with embedded YouTube */}
          <motion.div {...reveal} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0f172a] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0b1120]">
                {!isVideoLoaded ? (
                  <button
                    onClick={() => setIsVideoLoaded(true)}
                    className="absolute inset-0 z-20 flex h-full w-full cursor-pointer items-center justify-center group"
                    aria-label={isAr ? "تشغيل الفيديو" : "Play video"}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={isAr ? "صورة الفيديو" : "Video thumbnail"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute z-30 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b91c1c]">
                      <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </button>
                ) : (
                  <iframe
                    src={embedUrl}
                    title={isAr ? "الفيديو المؤسسي للبنك" : "Bank corporate video"}
                    className="absolute inset-0 h-full w-full scale-[1.08]"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen={false}
                  />
                )}

                {/* overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.76),rgba(2,6,23,0.24),rgba(2,6,23,0.10))]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
                <div className="pointer-events-none absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-[#0f172a]/18 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-[#0f172a]/18 to-transparent" />

                {/* <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                    {isAr ? "فيديو مؤسسي" : "Corporate Film"}
                  </div>

                  <h3 className="max-w-3xl text-2xl font-semibold leading-[1.35] text-white md:text-[2rem]">
                    {isAr
                      ? "مؤسسة مصرفية تنموية تسعى إلى توسيع أثر الخدمات المالية وتقديم حلول أكثر قربًا من احتياجات المجتمع."
                      : "A development-oriented banking institution that seeks to broaden the impact of financial services and provide solutions closer to community needs."}
                  </h3>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium image cards */}
        {/* <motion.div {...reveal} className="mt-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {trustItems.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#39408f] bg-[linear-gradient(135deg,#121847_0%,#1b2460_48%,#0e1531_100%)] p-[1px] shadow-[0_22px_60px_rgba(15,23,42,0.16)]"
                >
                  <div className="relative flex min-h-[300px] flex-col rounded-[calc(2rem-1px)] border border-white/8 bg-[#324198] px-6 py-7 md:px-7 md:py-8">
                    
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_26%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
                    <div className="pointer-events-none absolute -end-10 bottom-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                    
                    <div className="relative z-10">
                      <div
                        className={`mb-4 h-[2px] w-12 bg-gradient-to-r from-[#ed1c24] to-transparent ${
                          isAr ? "ms-auto" : ""
                        }`}
                      />
                      <h4
                        className={`text-xl font-bold leading-tight text-white md:text-[1.4rem] ${
                          isAr ? "text-right" : "text-left"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>

                    
                    <div
                      className={`relative z-10 mt-6 flex flex-1 items-center gap-6 ${
                        isAr ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      
                      <div className="shrink-0">
                        <div className="relative h-[150px] w-[150px] md:h-[180px] md:w-[180px] xl:h-[190px] xl:w-[190px]">
                          <Image
                            src="/images/banking-experience.png"
                            alt={isAr ? "تجربة مصرفية" : "Banking experience"}
                            fill
                            className="object-contain drop-shadow-[0_22px_40px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>

                     
                      <div
                        className={`min-w-0 flex-1 ${
                          isAr ? "text-right" : "text-left"
                        }`}
                      >
                        <p className="text-[15px] leading-7 text-white/72">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-white/15 via-white/8 to-transparent" />
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}