import { PageHero } from "@/components/ui/page-hero"
import { newsItems } from "@/data/news"
import { MediaCenterGrid } from "./media-center-grid"
import { buildLocalizedPath } from "@/i18n/pathname"
import { Locale } from "@/i18n/config"

export function NewsPageContent({ locale }: { locale: string }) {
  const isArabic = locale === "ar"

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={isArabic ? "المركز الإعلامي" : "Media Center"}
        subtitle={
          isArabic
            ? "تعرف على أحدث أخبار البنك وفعالياته وإنجازاته المستمرة."
            : "Discover the latest news, events, and ongoing achievements of the bank."
        }
        breadcrumbs={[
          { labelKey: isArabic ? "الرئيسية" : "Home", href: buildLocalizedPath(locale as Locale, "/") },
          { labelKey: isArabic ? "المركز الإعلامي" : "Media Center" },
        ]}
      />

      <section className="bg-muted/10 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <MediaCenterGrid items={newsItems} />
        </div>
      </section>
    </div>
  )
}