"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CreditCard, Car, Shield, FileText } from "lucide-react"

// Ad slides data - can be customized for bank promotions
const adSlides = [
  {
    id: 1,
    titleAr: "تجربة مصرفية صُمِّمت لك",
    titleEn: "A Banking Experience Designed for You",
    descriptionAr: "اكتشف عالماً من الراحة مع باقات وحسابات مصرف بن دول المصممة خصيصاً لتبسيط معاملاتك المصرفية اليومية وتلبية نمط حياتك الفريد.",
    descriptionEn: "Discover a world of comfort with Bin Dowal Bank packages and accounts designed specifically to simplify your daily banking transactions and meet your unique lifestyle.",
    ctaPrimaryAr: "افتح حسابك الآن",
    ctaPrimaryEn: "Open Your Account Now",
    ctaSecondaryAr: "اكتشف المزيد",
    ctaSecondaryEn: "Discover More",
    primaryLink: "/personal-banking#accounts",
    secondaryLink: "/personal-banking",
    bgImage: "/images/ads/banking-experience.jpg",
    bgGradient: "from-[#ed1c24] via-[#763169] to-[#2d3185]",
  },
  {
    id: 2,
    titleAr: "تمويل السيارات بأقساط ميسرة",
    titleEn: "Car Financing with Easy Installments",
    descriptionAr: "احصل على سيارة أحلامك مع برنامج التمويل المتوافق مع الشريعة الإسلامية بأقساط شهرية مريحة وإجراءات سريعة.",
    descriptionEn: "Get your dream car with our Sharia-compliant financing program with comfortable monthly installments and quick procedures.",
    ctaPrimaryAr: "قدم طلبك الآن",
    ctaPrimaryEn: "Apply Now",
    ctaSecondaryAr: "احسب التمويل",
    ctaSecondaryEn: "Calculate Financing",
    primaryLink: "/financing",
    secondaryLink: "/financing#calculator",
    bgImage: "/images/ads/car-financing.jpg",
    bgGradient: "from-[#ed1c24] via-[#763169] to-[#2d3185]",
  },
  {
    id: 3,
    titleAr: "بطاقات مصممة لاحتياجاتك",
    titleEn: "Cards Designed for Your Needs",
    descriptionAr: "اختر من مجموعة متنوعة من البطاقات المصرفية التي توفر لك مزايا حصرية وعروض مميزة على مشترياتك.",
    descriptionEn: "Choose from a variety of banking cards that offer exclusive benefits and special offers on your purchases.",
    ctaPrimaryAr: "استكشف البطاقات",
    ctaPrimaryEn: "Explore Cards",
    ctaSecondaryAr: "قارن البطاقات",
    ctaSecondaryEn: "Compare Cards",
    primaryLink: "/cards",
    secondaryLink: "/cards#compare",
    bgImage: "/images/ads/banking-cards.jpg",
    bgGradient: "from-[#ed1c24] via-[#763169] to-[#2d3185]",
  },
]

// Quick service links shown at bottom of slider
const quickServices = [
  {
    key: "accounts",
    icon: FileText,
    labelAr: "الحسابات",
    labelEn: "Accounts",
    href: "/personal-banking#accounts",
    bgColor: "bg-[#e8f4fc]",
    iconColor: "text-[#1e3a5f]",
  },
  {
    key: "cards",
    icon: CreditCard,
    labelAr: "البطاقات",
    labelEn: "Cards",
    href: "/cards",
    bgColor: "bg-[#e8f4fc]",
    iconColor: "text-[#1e3a5f]",
  },
  {
    key: "financing",
    icon: Car,
    labelAr: "التمويل",
    labelEn: "Financing",
    href: "/financing",
    bgColor: "bg-[#e8f4fc]",
    iconColor: "text-[#1e3a5f]",
  },
  {
    key: "insurance",
    icon: Shield,
    labelAr: "التأمين",
    labelEn: "Insurance",
    href: "/personal-banking#insurance",
    bgColor: "bg-[#e8f4fc]",
    iconColor: "text-[#1e3a5f]",
  },
]

export function AdsSlider() {
  const { locale, direction, mode } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % adSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + adSlides.length) % adSlides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const slide = adSlides[currentSlide]

  return (
    <section
      className="relative py-0"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Slider Area */}
      <div className={`relative min-h-[500px] md:min-h-[550px] overflow-hidden flex flex-col`}>
        {/* Background Image */}
        {slide.bgImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.bgImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for text readability */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-85`} />
          </div>
        )}

        {/* Fallback gradient if no image */}
        {!slide.bgImage && (
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} z-0`} />
        )}

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 flex-1">
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center max-w-3xl mx-auto"
              >
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-[#ffffff] font-cairo mb-6">
                  {locale === "ar" ? slide.titleAr : slide.titleEn}
                </h2>

                {/* Description */}
                <p className="text-2xl text-[#ffffff] mb-8 leading-relaxed font-medium font-cairo max-w-2xl">
                  {locale === "ar" ? slide.descriptionAr : slide.descriptionEn}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#1e3a5f] hover:bg-[#2a4a72] text-white px-8 py-6 text-base font-semibold font-cairo rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href={mode === "url" ? getLocalizedHref(slide.primaryLink, locale) : slide.primaryLink}>
                      {locale === "ar" ? slide.ctaPrimaryAr : slide.ctaPrimaryEn}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all"
                  >
                    <Link href={mode === "url" ? getLocalizedHref(slide.secondaryLink, locale) : slide.secondaryLink}>
                      {locale === "ar" ? slide.ctaSecondaryAr : slide.ctaSecondaryEn}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={direction === "rtl" ? nextSlide : prevSlide}
              className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-[#1e3a5f]" />
            </button>
            <button
              onClick={direction === "rtl" ? prevSlide : nextSlide}
              className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-[#1e3a5f]" />
            </button>

            {/* Dots Indicator */}
            {/* <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
              {adSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "bg-red-500 w-8"
                      : "bg-red-500/30 w-2 hover:bg-red-500/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Quick Services Card - Floating */}
      {/* <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative -mt-20 md:-mt-24 z-10 bg-white rounded-2xl shadow-xl border border-border/50 p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {quickServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <div
                    className={`p-4 md:p-5 rounded-2xl ${service.bgColor} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className={`h-6 w-6 md:h-7 md:w-7 ${service.iconColor}`} />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-[#1e3a5f]">
                    {locale === "ar" ? service.labelAr : service.labelEn}
                  </span>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div> */}
    </section>
  )
}
