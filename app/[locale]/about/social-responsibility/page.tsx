import { SocialResponsibilityPageContent } from "@/components/about/social-responsibility-page-content"
import { isLocale } from "@/i18n/config"
import { notFound } from "next/navigation"

type LocalizedSocialResponsibilityPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocalizedSocialResponsibilityPageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    title: isAr ? "المسؤولية الاجتماعية | بنك بن دول" : "Social Responsibility | Bin Dowal Bank",
    description: isAr 
      ? "مبادرات بنك بن دول في مجال المسؤولية الاجتماعية وتنمية المجتمع"
      : "Bin Dowal Bank's initiatives in social responsibility and community development",
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function LocalizedSocialResponsibilityPage({
  params,
}: LocalizedSocialResponsibilityPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div data-localized-route="about/social-responsibility" data-locale={locale}>
      <SocialResponsibilityPageContent />
    </div>
  );
}
