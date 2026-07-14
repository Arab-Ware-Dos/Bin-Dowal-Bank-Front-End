const fs = require('fs');
const path = require('path');

const routes = [
  { path: 'business-banking', name: 'BusinessBanking', titleAr: 'خدمات الأعمال', titleEn: 'Business Services' },
  { path: 'personal-banking', name: 'PersonalBanking', titleAr: 'الخدمات الشخصية', titleEn: 'Personal Services' },
  { path: 'financing', name: 'Financing', titleAr: 'التمويل', titleEn: 'Financing' },
  { path: 'digital-channels', name: 'DigitalChannels', titleAr: 'القنوات الرقمية', titleEn: 'Digital Channels' }
];

fs.mkdirSync('components/banking', { recursive: true });

routes.forEach(r => {
  const legacyPath = path.join('app/(legacy)', r.path, 'page.tsx');
  let content = fs.readFileSync(legacyPath, 'utf8');
  
  // Create shared component
  const sharedContent = content.replace(
    new RegExp('export default function ' + r.name + 'Page'),
    'export function ' + r.name + 'PageContent'
  );
  fs.writeFileSync(path.join('components/banking', r.path + '-page-content.tsx'), sharedContent);

  // Update legacy route shell
  const legacyShell = `import { ${r.name}PageContent } from "@/components/banking/${r.path}-page-content"

export default function ${r.name}Page() {
  return <${r.name}PageContent />
}
`;
  fs.writeFileSync(legacyPath, legacyShell);

  // Create localized route shell
  const locDir = path.join('app/[locale]', r.path);
  fs.mkdirSync(locDir, { recursive: true });
  const locShell = `import { notFound } from "next/navigation"
import { isLocale } from "@/lib/i18n-config"
import { ${r.name}PageContent } from "@/components/banking/${r.path}-page-content"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  
  return {
    title: locale === "ar" ? "${r.titleAr} | بنك بن دول" : "${r.titleEn} | Bin Dowal Bank",
    description: locale === "ar" 
      ? "استكشف ${r.titleAr} المقدمة من بنك بن دول للتمويل الأصغر الإسلامي."
      : "Explore ${r.titleEn} provided by Bin Dowal Islamic Microfinance Bank.",
    robots: {
      index: false,
      follow: false,
    }
  }
}

type Localized${r.name}PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function Localized${r.name}Page({
  params,
}: Localized${r.name}PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <div data-localized-route="${r.path}" data-locale={locale}>
      <${r.name}PageContent />
    </div>
  )
}
`;
  fs.writeFileSync(path.join(locDir, 'page.tsx'), locShell);
});
