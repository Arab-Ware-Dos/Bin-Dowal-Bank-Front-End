"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ArrowLeft, HelpCircle, FileText, Video, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const knowledgeItems = [
  {
    id: "faq",
    icon: HelpCircle,
    titleAr: "الأسئلة الشائعة",
    titleEn: "FAQ",
    descAr: "إجابات واضحة ومنظمة لأكثر الاستفسارات شيوعًا حول خدمات البنك",
    descEn: "Clear organized answers to the most common questions about bank services",
    href: "/knowledge-center/faq",
    status: "active",
  },
  {
    id: "reports",
    icon: FileText,
    titleAr: "التقارير السنوية",
    titleEn: "Annual Reports",
    descAr: "أرشيف التقارير السنوية والقوائم المالية للبنك بصيغة PDF مع إمكانية التصفح والتنزيل",
    descEn: "Archive of the bank's annual reports and financial statements in PDF format",
    href: "/knowledge-center/annual-reports",
    status: "active",
  },
  {
    id: "guides",
    icon: FileText,
    titleAr: "الأدلة التعليمية",
    titleEn: "Educational Guides",
    descAr: "أدلة شاملة لفهم خدماتنا المصرفية والرقمية",
    descEn: "Comprehensive guides to understand our banking and digital services",
    href: null,
    status: "coming_soon",
  },
  {
    id: "videos",
    icon: Video,
    titleAr: "الفيديوهات التوضيحية",
    titleEn: "Explainer Videos",
    descAr: "شروحات مرئية لطرق استخدام القنوات والمنتجات",
    descEn: "Visual explanations of how to use our channels and products",
    href: null,
    status: "coming_soon",
  },
  {
    id: "awareness",
    icon: Lightbulb,
    titleAr: "التوعية المالية",
    titleEn: "Financial Awareness",
    descAr: "نصائح وإرشادات لإدارة أموالك وحمايتها",
    descEn: "Tips and guidelines to manage and protect your money",
    href: null,
    status: "coming_soon",
  },
]

export function KnowledgeCenterPageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight

  const heroTitle = isAr ? "مركز المعرفة" : "Knowledge Center"
  const heroSubtitle = isAr 
    ? "مصدرك الأول لفهم الخدمات المصرفية، وتعزيز وعيك المالي عبر أدلة وإجابات شاملة" 
    : "Your primary source to understand banking services and enhance your financial awareness"

  return (
    <>
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumbs={[{ labelKey: "nav.knowledgeCenter" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {knowledgeItems.map((knowledge) => {
              const Icon = knowledge.icon
              const isComingSoon = knowledge.status === "coming_soon"
              
              return (
                <motion.div key={knowledge.id} variants={item}>
                  <Card className={`h-full flex flex-col rounded-2xl border-border transition-all relative ${isComingSoon ? "opacity-80" : "hover:border-primary/30 hover:shadow-lg"}`}>
                    {isComingSoon && (
                      <Badge className="absolute top-4 end-4 bg-muted text-muted-foreground border-transparent">
                        {isAr ? "قريباً" : "Coming Soon"}
                      </Badge>
                    )}
                    <CardHeader>
                      <div className={`p-3 rounded-xl w-fit mb-3 ${isComingSoon ? "bg-slate-100 text-slate-500" : "bg-[#262b80]/8 text-[#262b80]"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">
                        {isAr ? knowledge.titleAr : knowledge.titleEn}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0 flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-6 flex-1">
                        {isAr ? knowledge.descAr : knowledge.descEn}
                      </p>
                      
                      {!isComingSoon && knowledge.href ? (
                        <Button variant="outline" className="w-full justify-between" asChild>
                          <Link href={knowledge.href}>
                            {isAr ? "تصفح" : "Browse"}
                            <Arrow className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="ghost" disabled className="w-full justify-between bg-slate-50">
                          {isAr ? "تصفح" : "Browse"}
                          <Arrow className="h-4 w-4" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
