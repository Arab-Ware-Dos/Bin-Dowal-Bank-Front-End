"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { getLocalizedHref } from "@/lib/localized-routes"
import { PartnershipsSection } from "@/components/home/partnerships-section"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function PartnersPageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"

  const text = {
    heroTitle: isAr ? "شركاؤنا" : "Our Partners",
    heroSubtitle: isAr
      ? "نعتز بشراكاتنا المحلية والدولية التي تسهم في تعزيز خدماتنا المصرفية وتوسيع أثرنا المؤسسي."
      : "We value our local and international partnerships that help strengthen our banking services and expand our institutional impact.",
    home: isAr ? "الرئيسية" : "Home",
    about: isAr ? "عن البنك" : "About Us",
    introTitle: isAr ? "شراكات استراتيجية للنمو" : "Strategic Partnerships for Growth",
    introDesc: isAr
      ? "نحن في بنك بن دول نؤمن بأن النجاح المستدام يتحقق من خلال التعاون الوثيق مع شركائنا. نسعى دائماً لبناء علاقات قوية مع المؤسسات المحلية والدولية لتقديم أفضل الحلول المالية المبتكرة والمتوافقة مع الشريعة الإسلامية."
      : "At Bin Dowal Bank, we believe that sustainable success is achieved through close cooperation with our partners. We always strive to build strong relationships with local and international institutions to provide the best innovative Sharia-compliant financial solutions.",
    ctaTitle: isAr ? "هل ترغب بالتعاون معنا؟" : "Interested in partnering with us?",
    ctaDesc: isAr
      ? "تواصل معنا لمعرفة فرص الشراكة والتكامل المؤسسي."
      : "Contact us to explore institutional partnership opportunities.",
    ctaButton: isAr ? "تواصل معنا" : "Contact Us",
  }

  return (
    <div className="min-h-screen bg-white font-sans" dir={direction}>
      {/* Hero */}
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        breadcrumbs={[
          { labelKey: text.home, href: "/" },
          { labelKey: text.about, href: "/about" },
          { labelKey: text.heroTitle },
        ]}
      />

      {/* Intro Section */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#0b0d36] mb-8 font-cairo">
                {text.introTitle}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#262b80] to-[#8b1e3f] mx-auto mb-10 rounded-full" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-cairo">
                {text.introDesc}
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-[#262b80] rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-[#8b1e3f] rounded-full" />
        </div>
      </section>

      {/* Partnerships Section (Reused Component) */}
      <div className="bg-[#f8f9fc]">
        <PartnershipsSection />
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#0b0d36] via-[#181d6f] to-[#0b0d36] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#8b1e3f]/20 blur-[80px] rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-8">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-cairo">
                {text.ctaTitle}
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-cairo leading-relaxed">
                {text.ctaDesc}
              </p>
              
              <Link
                href={getLocalizedHref("/contact", locale)}
                className="group inline-flex items-center gap-3 bg-white text-[#0b0d36] hover:bg-slate-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span>{text.ctaButton}</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
