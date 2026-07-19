import { getDictionary } from '@/i18n/get-dictionary'
import { isLocale, Locale } from '@/i18n/config'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!isLocale(locale)) return {};
  
  return {
    title: locale === 'ar' ? 'إثبات Root Layout العربي' : 'English Root Layout Proof',
    robots: {
      index: false,
      follow: false,
      nocache: true,
    }
  }
}

export default async function RootProofPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!isLocale(locale)) notFound()
  
  const dict = await getDictionary(locale)
  
  return (
    <div data-root-proof="true" className="container mx-auto p-8 max-w-4xl mt-12 bg-white rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-3xl font-bold mb-6 text-[#2d3185]">
        {locale === 'ar' ? 'إثبات بنية المسار الجذري' : 'Root Layout Proof'}
      </h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 rounded-xl">
          <p className="font-semibold text-slate-700">Route Locale: <span className="font-normal text-slate-900">{locale}</span></p>
        </div>
        
        <div className="p-4 bg-slate-50 rounded-xl">
          <p className="font-semibold text-slate-700">nav.home: <span className="font-normal text-slate-900">{dict["nav.home"]}</span></p>
        </div>
        
        <div className="p-4 bg-slate-50 rounded-xl">
          <p className="font-semibold text-slate-700">nav.creditCard: <span className="font-normal text-slate-900">{dict["nav.creditCard"]}</span></p>
        </div>
      </div>
    </div>
  )
}
