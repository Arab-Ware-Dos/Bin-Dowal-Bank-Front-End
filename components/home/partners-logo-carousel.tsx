"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";
import { partnersData } from "@/data/partners";
import type { Partner } from "@/data/partners";
import { useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ViewAllButton } from "@/components/ui/view-all-button";
import { getLocalizedHref } from "@/lib/localized-routes";

export function PartnersLogoCarousel() {
  const { t, locale, direction } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  // Filter and sort partners
  const activePartners = useMemo(() => {
    return partnersData
      .filter((p) => p.showInCarousel)
      .sort(
        (a, b) =>
          (a.carouselOrder ?? Number.MAX_SAFE_INTEGER) -
          (b.carouselOrder ?? Number.MAX_SAFE_INTEGER)
      );
  }, []);

  // Triple the items to ensure enough coverage for the infinite scroll
  const duplicatedPartners = useMemo(() => {
    return [...activePartners, ...activePartners, ...activePartners];
  }, [activePartners]);

  const sectionReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as any },
      };

  if (activePartners.length === 0) return null;

  return (
    <section 
      className="relative w-full py-8 md:py-10 bg-white overflow-hidden border-y border-gray-100"
      dir={direction}
    >
      <SectionHeader
        badge={direction === "rtl" ? "شراكات استراتيجية" : "Strategic Partnerships"}
        title={t("partnerships.title")}
        description={t("partnerships.subtitle")}
      />
      

      <div className="relative flex items-center">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        
        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex w-full overflow-hidden">
          <div 
            className="flex items-center gap-6 md:gap-10 animate-scroll hover:[animation-play-state:paused] py-2"
            style={{
              animation: `scroll-${direction} 105s linear infinite`,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <LogoCard key={`${partner.id}-${index}`} partner={partner} locale={locale} />
            ))}
          </div>
        </div>
      </div>

      <ViewAllButton
        label={t("partnerships.viewAll")}
        href={getLocalizedHref("/about/partners", locale)}
      />

      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100% / 3));
          }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}

function LogoCard({ partner, locale }: { partner: Partner; locale: "ar" | "en" }) {
  const name = locale === "ar" ? partner.name.ar : partner.name.en;

  const content = (
    <div className="group relative flex items-center justify-center h-16 w-32 md:h-20 md:w-40 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#324198]/20 px-4">
      <div className="relative w-full h-10 md:h-12 flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={name}
          fill
          className="object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          sizes="(max-width: 768px) 120px, 160px"
        />
      </div>
      
      {/* Subtle tooltip on hover */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-[#324198] text-white text-[10px] py-1 px-2 rounded font-cairo z-20">
        {name}
      </div>
    </div>
  );

  if (partner.href && partner.href !== "#") {
    return (
      <a href={partner.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

