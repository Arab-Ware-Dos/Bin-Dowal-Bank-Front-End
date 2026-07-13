"use client"

import { HeroSection } from "@/components/home/hero-section"
// import { AdsSlider } from "@/components/home/ads-slider"
// import { QuickActions } from "@/components/home/quick-actions"
import { AppPromoSection } from "@/components/home/app-promo-section"
// import { StatsSection } from "@/components/home/stats-section"
import { NewsSection } from "@/components/home/news-section"
import { DiscoverProductsSection } from "@/components/home/discover-products-section"
import { FinancingServices } from "@/components/home/financing-services"
import { CardsSection } from "@/components/home/cards-section"
// import { OffersSection } from "@/components/home/offers-section"
// import { UpdateSlider } from "@/components/home/update-slider"
// import { PartnershipsSection } from "@/components/home/partnerships-section"
import { PartnersLogoCarousel } from "@/components/home/partners-logo-carousel"
import { AboutSection } from "@/components/home/about-section"
// import { BinDowalPayApp } from "@/components/home/bin-dowal-pay-app"
// import { UnifiedAppsShowcaseSection } from "@/components/home/UnifiedAppsShowcaseSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <UpdateSlider /> */}
      <AboutSection />
      {/* <QuickActions /> */}
      <DiscoverProductsSection />
      <AppPromoSection />
      {/* <BinDowalPayApp /> */}
      {/* <UnifiedAppsShowcaseSection /> */}
      <CardsSection />
      <FinancingServices />
      {/* <OffersSection /> */}
      {/* <AdsSlider /> */}
      
      {/* <StatsSection /> */}
      <PartnersLogoCarousel />
      {/* <PartnershipsSection /> */}
      
      <NewsSection />
    </>
  )
}
