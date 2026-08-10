"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { getLocalizedHref } from "@/lib/localized-routes"
import { SectionHeader } from "@/components/ui/section-header"
import { ViewAllButton } from "@/components/ui/view-all-button"

const CATEGORY_CONFIG = {
  personal: {
    id: "personal",
    link: "/financing#personal",
    labelKey: "discoverProducts.personal",
  },
  business: {
    id: "business",
    link: "/financing#business",
    labelKey: "discoverProducts.business",
  },
} as const

type Category = keyof typeof CATEGORY_CONFIG

type Product = {
  id: number
  titleKey: string
  category: Category
  image: string
  href: string
}

const categories = Object.keys(CATEGORY_CONFIG) as Category[]

const products: readonly Product[] = [
  {
    id: 1,
    titleKey: "discoverProducts.prod1.title",
    category: "personal",
    image: "/images/customer-services/Current-account.webp",
    href: "/personal/current-account",
  },
  {
    id: 2,
    titleKey: "discoverProducts.prod2.title",
    category: "personal",
    image: "/images/customer-services/Savings.webp",
    href: "/personal/savings-account",
  },
  {
    id: 3,
    titleKey: "discoverProducts.prod3.title",
    category: "personal",
    image: "/images/customer-services/Investment-deposits.webp",
    href: "/personal/investment-deposit",
  },
  {
    id: 4,
    titleKey: "discoverProducts.prod4.title",
    category: "personal",
    image: "/images/customer-services/minors-account.webp",
    href: "/personal/minors-account",
  },
  {
    id: 5,
    titleKey: "discoverProducts.prod5.title",
    category: "business",
    image: "/images/business-services/Corporate-current-account.webp",
    href: "/business/corporate-current-account",
  },
  {
    id: 6,
    titleKey: "discoverProducts.prod6.title",
    category: "business",
    image: "/images/business-services/Investment-deposits.webp",
    href: "/business/corporate-investment-deposits",
  },
  {
    id: 7,
    titleKey: "discoverProducts.prod7.title",
    category: "business",
    image: "/images/business-services/SWIFT-transfer.webp",
    href: "/personal/swift",
  },
  {
    id: 8,
    titleKey: "discoverProducts.prod8.title",
    category: "business",
    image: "/images/business-services/Letter-of-guarantee.webp",
    href: "/business/bank-guarantees",
  },
]

const MAX_VISIBLE_PRODUCTS = 4

export function DiscoverProductsSection() {
  const { mode, locale, t, direction } = useI18n()
  const [activeCategory, setActiveCategory] =
    useState<Category>("personal")

  const activeMeta = CATEGORY_CONFIG[activeCategory]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  const visibleProducts = filteredProducts.slice(0, MAX_VISIBLE_PRODUCTS)
  const shouldShowViewAll = filteredProducts.length > MAX_VISIBLE_PRODUCTS

  return (
    <section
      dir={direction}
      aria-labelledby="discover-products-heading"
      className="relative w-full overflow-hidden bg-[#f7f8fb] py-16 md:py-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,42,79,0.05),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#324198]/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <SectionHeader
          id="discover-products-heading"
          badge={t("discoverProducts.badge")}
          title={t("discoverProducts.title")}
          description={t("discoverProducts.description")}
          showDivider={true}
        />

        <div
          className="mt-10 flex flex-wrap justify-center gap-3 md:mt-14"
          role="tablist"
          aria-label="تصنيفات المنتجات"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category
            const meta = CATEGORY_CONFIG[category]

            return (
              <button
                key={category}
                id={`discover-products-tab-${meta.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`discover-products-panel-${meta.id}`}
                onClick={() => setActiveCategory(category)}
                className={[
                  "rounded-full px-5 py-2.5 font-cairo text-sm font-semibold transition-all duration-300 md:px-6 md:text-base",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b93d6] focus-visible:ring-offset-2",
                  isActive
                    ? "bg-[#324198] text-white shadow-[0_10px_25px_rgba(30,42,79,0.18)]"
                    : "border border-[#324198]/10 bg-white text-[#324198] hover:border-[#324198]/20 hover:bg-[#f2f4f8]",
                ].join(" ")}
              >
                {t(meta.labelKey)}
              </button>
            )
          })}
        </div>

        {visibleProducts.length > 0 ? (
          <div
            id={`discover-products-panel-${activeMeta.id}`}
            role="tabpanel"
            aria-labelledby={`discover-products-tab-${activeMeta.id}`}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {visibleProducts.map((product) => (
              <Link
                key={product.id}
                href={mode === "url" ? getLocalizedHref(product.href, locale) : product.href}
                className="group block h-full outline-none"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#324198]/8 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[#324198]/15 group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] group-focus-visible:-translate-y-1.5 group-focus-visible:border-[#324198]/15">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#f3f5f9] px-3 py-1 font-cairo text-[11px] font-medium text-[#5f6982]">
                      {t(CATEGORY_CONFIG[product.category].labelKey)}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#8b93d6]" />
                  </div>

                  <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[22px] bg-[#edf1f7]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#324198]/10" />

                    <Image
                      src={product.image}
                      alt={t(product.titleKey)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#324198]/35 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col pt-5">


                    <h3 className="mt-2 font-cairo text-xl font-bold leading-snug text-[#324198] md:text-[22px]">
                      {t(product.titleKey)}
                    </h3>

                    <p className="mt-3 font-cairo text-sm leading-7 text-[#667089]">
                      {t("discoverProducts.productDesc")}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#324198]/8 pt-4">
                      <span className="font-cairo text-sm font-semibold text-[#324198]">
                        {t("discoverProducts.exploreProduct")}
                      </span>

                      <span className={`inline-flex items-center gap-2 font-cairo text-sm font-medium text-[#6d76b8] transition-transform duration-300 ${direction === 'ltr' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}>
                        {t("discoverProducts.more")}
                        <span aria-hidden="true">{direction === 'ltr' ? "→" : "←"}</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[24px] border border-[#324198]/8 bg-white p-8 text-center shadow-sm">
            <p className="font-cairo text-base text-[#324198]">
              {t("discoverProducts.noProducts")}
            </p>
          </div>
        )}

        {shouldShowViewAll && (
          <ViewAllButton
            label={t("discoverProducts.viewAll")}
            href={mode === "url" ? getLocalizedHref(activeMeta.link, locale) : activeMeta.link}
          />
        )}
      </div>
    </section>
  )
}
