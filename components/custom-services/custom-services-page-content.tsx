"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { navigationData } from "@/data/navigation"
import { ArrowRight, ArrowLeft } from "lucide-react"
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

export function CustomServicesPageContent() {
  const { locale, direction } = useI18n()
  const isAr = locale === "ar"
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight

  // Find the custom services category from navigationData
  const customServicesCategory = navigationData.find((nav) => nav.key === "customServices")
  const groups = customServicesCategory?.groups || []

  const heroTitle = isAr ? customServicesCategory?.label.ar || "خدمات مخصصة" : customServicesCategory?.label.en || "Custom Services"
  const heroSubtitle = isAr 
    ? "حلول مصرفية مخصصة لتلبي احتياجاتك الفريدة" 
    : "Customized banking solutions to meet your unique needs"

  return (
    <>
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        breadcrumbs={[{ labelKey: "nav.customServices" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-16 last:mb-0">
              <SectionTitle
                title={isAr ? group.title.ar : group.title.en}
                subtitle=""
              />

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.links?.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.div key={link.key} variants={item}>
                      <Card className="h-full flex flex-col rounded-2xl border-border hover:border-primary/30 hover:shadow-lg transition-all">
                        <CardHeader>
                          <div className="p-3 bg-[#262b80]/8 rounded-xl w-fit mb-3">
                            <Icon className="h-6 w-6 text-[#262b80]" />
                          </div>
                          <CardTitle className="text-xl">
                            {isAr ? link.label.ar : link.label.en}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="mt-auto pt-4 flex-1 flex flex-col justify-end">
                          <Button variant="outline" className="w-full justify-between mt-4" asChild>
                            <Link href={link.href}>
                              {isAr ? "التفاصيل" : "Details"}
                              <Arrow className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
