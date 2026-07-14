import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"

const DiscoverProductsSection = dynamic(() => import("@/components/home/discover-products-section").then(mod => mod.DiscoverProductsSection))
const AppPromoSection = dynamic(() => import("@/components/home/app-promo-section").then(mod => mod.AppPromoSection))
const CardsSection = dynamic(() => import("@/components/home/cards-section").then(mod => mod.CardsSection))
const FinancingServices = dynamic(() => import("@/components/home/financing-services").then(mod => mod.FinancingServices))
const PartnersLogoCarousel = dynamic(() => import("@/components/home/partners-logo-carousel").then(mod => mod.PartnersLogoCarousel))
const NewsSection = dynamic(() => import("@/components/home/news-section").then(mod => mod.NewsSection))

export function HomePageContent() {
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
