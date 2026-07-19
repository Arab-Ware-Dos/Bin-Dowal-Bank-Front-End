import { I18nProvider } from '@/lib/i18n-context'
import { somarSans } from '@/lib/fonts'
import { SharedSiteShell } from '@/components/layout/shared-site-shell'
import { isLocale, locales, Locale } from '@/i18n/config'
import { notFound } from 'next/navigation'
import { baseMetadata } from '@/lib/seo/site-config'
import '../globals.css'

export const metadata = baseMetadata;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

function getLocaleDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export default async function LocalizedRootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const direction = getLocaleDirection(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning className={`${somarSans.variable} font-sans`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <I18nProvider mode="url" initialLocale={locale}>
          <SharedSiteShell localeMode="url" locale={locale}>
            {children}
          </SharedSiteShell>
        </I18nProvider>
      </body>
    </html>
  )
}
