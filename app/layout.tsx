import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageLoader } from '@/components/layout/page-loader'
import { Chatbot } from '@/components/layout/chatbot'
import './globals.css'
export const metadata: Metadata = {
  metadataBase: new URL('https://bdbankui.arabwaredos.com'),
  title: {
    default: 'بنك بن دول للتمويل الأصغر الإسلامي | Bin Dowal Islamic Microfinance Bank',
    template: '%s | بنك بن دول',
  },
  description: 'بنك بن دول للتمويل الأصغر الإسلامي - حلول تمويل مبتكرة متوافقة مع الشريعة الإسلامية. تمكين المجتمع عبر خدمات مصرفية إسلامية رائدة.',
  keywords: ['بنك', 'تمويل إسلامي', 'تمويل أصغر', 'Islamic banking', 'microfinance', 'Yemen', 'حضرموت', 'Bin Dowal'],
  authors: [{ name: 'Bin Dowal Islamic Microfinance Bank' }],
  openGraph: {
    title: 'بنك بن دول للتمويل الأصغر الإسلامي',
    description: 'حلول تمويل مبتكرة متوافقة مع الشريعة الإسلامية. شريكك الموثوق للنمو والنجاح.',
    url: '/',
    siteName: 'بنك بن دول',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og/bindowal-bank-og.png',
        width: 1200,
        height: 630,
        alt: 'بنك بن دول للتمويل الأصغر الإسلامي',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بنك بن دول للتمويل الأصغر الإسلامي',
    description: 'حلول تمويل مبتكرة متوافقة مع الشريعة الإسلامية. تمكين المجتمع عبر خدمات مصرفية إسلامية رائدة.',
    images: ['/images/og/bindowal-bank-og.png'],
  },

  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="font-sans">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <PageLoader />
        <I18nProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
