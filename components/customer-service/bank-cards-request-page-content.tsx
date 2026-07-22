'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { getLocalizedHref } from '@/lib/localized-routes';
import { PageHero } from '@/components/ui/page-hero';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import Link from 'next/link';
import { FormUnavailableNotice } from './form-unavailable-notice';
import {
  CreditCard,
  Send,
  CheckCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  User,
  Phone,
  Banknote,
  Clock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' }
};

export function BankCardsRequestPageContent() {
  const { locale, mode } = useI18n();
  const resolveHref = (target: string) => {
    if (!target.startsWith('/') || target.startsWith('//')) return target;
    return mode === 'url' ? getLocalizedHref(target, locale) : target;
  };

  const inputClassName =
    'h-12 rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10';

  const features = [
    {
      icon: CreditCard,
      titleAr: 'بطاقات ائتمانية متنوعة',
      titleEn: 'Various Credit Cards',
      descAr: 'اختر البطاقة التي تناسب أسلوب حياتك واحتياجاتك المالية.',
      descEn: 'Choose the card that suits your lifestyle and financial needs.'
    },
    {
      icon: ShieldCheck,
      titleAr: 'أمان عالي',
      titleEn: 'High Security',
      descAr: 'تمتع بتجربة تسوق آمنة مع تقنيات الحماية المتقدمة.',
      descEn:
        'Enjoy a secure shopping experience with advanced protection technologies.'
    },
    {
      icon: Banknote,
      titleAr: 'مكافآت وعروض',
      titleEn: 'Rewards & Offers',
      descAr: 'احصل على عروض حصرية ومكافآت عند استخدام بطاقتك.',
      descEn: 'Get exclusive offers and rewards when using your card.'
    },
    {
      icon: Clock,
      titleAr: 'موافقة سريعة',
      titleEn: 'Fast Approval',
      descAr: 'إجراءات مبسطة وموافقة سريعة لتلبية احتياجاتك.',
      descEn: 'Simplified procedures and fast approval to meet your needs.'
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      questionAr: 'ما هي شروط الحصول على بطاقة ائتمانية؟',
      questionEn: 'What are the requirements to get a credit card?',
      answerAr:
        'تختلف الشروط حسب نوع البطاقة، ولكن بشكل عام يجب أن يكون لديك دخل ثابت وحساب بنكي نشط.',
      answerEn:
        'Requirements vary by card type, but generally you must have a steady income and an active bank account.'
    },
    {
      id: 'faq-2',
      questionAr: 'كم تستغرق عملية الموافقة وإصدار البطاقة؟',
      questionEn: 'How long does approval and card issuance take?',
      answerAr:
        'عادة ما تستغرق العملية من 3 إلى 5 أيام عمل بعد استكمال كافة المستندات المطلوبة.',
      answerEn:
        'The process usually takes 3 to 5 business days after all required documents are completed.'
    },
    {
      id: 'faq-3',
      questionAr: 'هل يمكنني طلب بطاقة إذا لم يتم تحويل راتبي للبنك؟',
      questionEn:
        'Can I request a card if my salary is not transferred to the bank?',
      answerAr:
        'نعم، يمكنك ذلك بشرط تقديم إثبات دخل معتمد وتلبية المعايير الائتمانية الأخرى.',
      answerEn:
        'Yes, provided you submit verified proof of income and meet other credit criteria.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(38,43,128,0.05),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={
          locale === 'ar'
            ? 'التقديم على البطاقات الائتمانية'
            : 'Credit Card Application'
        }
        subtitle={
          locale === 'ar'
            ? 'تقدم بطلب الحصول على منتجات بنك بن دول واكتشف عالماً من المزايا المصممة خصيصاً لك.'
            : 'Apply for Bin Dowal Bank products and discover a world of benefits designed specially for you.'
        }
        breadcrumbs={[
          { labelKey: locale === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
          { labelKey: locale === 'ar' ? 'خدمة العملاء' : 'Customer Service', href: resolveHref('/contact') },
          {
            labelKey:
              locale === 'ar' ? 'طلب بطاقة بنكية' : 'Credit Card Request'
          }
        ]}
      />

      {/* Form & Features */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.45),rgba(241,245,249,0.9))]" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Form Section */}
            <motion.div {...fadeInUp} className="lg:col-span-8">
              <Card className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_28px_90px_-35px_rgba(11,13,54,0.28)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#7a1f3d]/80" />

                <CardHeader className="relative pb-4">
                  <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#262b80]/10 bg-[#262b80]/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80]">
                    {locale === 'ar' ? 'نموذج الطلب' : 'APPLICATION FORM'}
                  </div>

                  <CardTitle className="flex items-center gap-3 text-2xl text-[#0b0d36] md:text-[28px]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_16px_30px_-16px_rgba(38,43,128,0.55)]">
                      <CreditCard className="h-5 w-5" />
                    </span>
                    {locale === 'ar'
                      ? 'تقدم بطلب الحصول على منتجات بنك بن دول'
                      : 'Apply for Bin Dowal Bank Products'}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <FormUnavailableNotice locale={locale} contactHref={resolveHref('/contact')} />
                  <form onSubmit={handleSubmit} className="space-y-8 opacity-60">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                          <User className="h-5 w-5 text-[#262b80]" />
                          <h3 className="text-lg font-bold text-[#0b0d36]">
                            {locale === 'ar'
                              ? 'المعلومات الشخصية'
                              : 'Personal Information'}
                          </h3>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2.5">
                            <Label
                              htmlFor="name"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar' ? 'الاسم' : 'Name'}
                            </Label>
                            <Input
                              id="name"
                              required
                              disabled
                              className={inputClassName}
                            />
                          </div>

                          <div className="space-y-2.5">
                            <Label
                              htmlFor="idNumber"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar'
                                ? 'رقم الهوية / الإقامة'
                                : 'ID / Iqama Number'}
                            </Label>
                            <Input
                              id="idNumber"
                              required
                              disabled
                              className={inputClassName}
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2.5">
                            <Label
                              htmlFor="cardType"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar'
                                ? 'مهتم في اي بطاقة'
                                : 'Interested in which card'}
                            </Label>
                            <Select required disabled>
                              <SelectTrigger className={inputClassName} disabled>
                                <SelectValue
                                  placeholder={
                                    locale === 'ar'
                                      ? 'اختر البطاقة'
                                      : 'Select Card'
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="credit">
                                  {locale === 'ar'
                                    ? 'بطاقة بن دول الائتمانية'
                                    : 'Bin Dowal Credit Card'}
                                </SelectItem>
                                <SelectItem value="prepaid">
                                  {locale === 'ar'
                                    ? 'بطاقة بن دول الذهبية'
                                    : 'Bin Dowal Gold Card'}
                                </SelectItem>
                                <SelectItem value="noor">
                                  {locale === 'ar' ? 'بطاقة نور' : 'Noor Card'}
                                </SelectItem>
                                <SelectItem value="debit">
                                  {locale === 'ar'
                                    ? 'بطاقة الخصم المباشر'
                                    : 'Bin Dowal Debit Card'}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2.5">
                            <Label
                              htmlFor="lang"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar'
                                ? 'لغة التواصل المفضلة'
                                : 'Preferred Communication Language'}
                            </Label>
                            <Select required disabled>
                              <SelectTrigger className={inputClassName} disabled>
                                <SelectValue
                                  placeholder={
                                    locale === 'ar'
                                      ? 'اختر اللغة'
                                      : 'Select Language'
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ar">
                                  {locale === 'ar' ? 'العربية' : 'Arabic'}
                                </SelectItem>
                                <SelectItem value="en">
                                  {locale === 'ar' ? 'الإنجليزية' : 'English'}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Financial Information */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                          <Banknote className="h-5 w-5 text-[#262b80]" />
                          <h3 className="text-lg font-bold text-[#0b0d36]">
                            {locale === 'ar'
                              ? 'المعلومات المالية'
                              : 'Financial Information'}
                          </h3>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2.5">
                            <Label
                              htmlFor="hasAccount"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar'
                                ? 'هل لديك حساب بنكي في بنك بن دول؟'
                                : 'Do you have an account in Bin Dowal Bank?'}
                            </Label>
                            <Select required disabled>
                              <SelectTrigger className={inputClassName} disabled>
                                <SelectValue
                                  placeholder={
                                    locale === 'ar' ? 'اختر' : 'Select'
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">
                                  {locale === 'ar' ? 'نعم' : 'Yes'}
                                </SelectItem>
                                <SelectItem value="no">
                                  {locale === 'ar' ? 'لا' : 'No'}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2.5">
                            <Label
                              htmlFor="salaryTransfer"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar'
                                ? 'هل يتم تحويل راتبك إلى بنك بن دول؟'
                                : 'Is your salary transferred to Bin Dowal Bank?'}
                            </Label>
                            <Select required disabled>
                              <SelectTrigger className={inputClassName} disabled>
                                <SelectValue
                                  placeholder={
                                    locale === 'ar' ? 'اختر' : 'Select'
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">
                                  {locale === 'ar' ? 'نعم' : 'Yes'}
                                </SelectItem>
                                <SelectItem value="no">
                                  {locale === 'ar' ? 'لا' : 'No'}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2.5 sm:w-1/2 sm:pr-2 rtl:sm:pr-0 rtl:sm:pl-2">
                          <Label
                            htmlFor="salary"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar'
                              ? 'كم الراتب الشهري؟'
                              : 'What is your monthly salary?'}
                          </Label>
                          <Select required disabled>
                            <SelectTrigger className={inputClassName} disabled>
                              <SelectValue
                                placeholder={
                                  locale === 'ar' ? 'اختر' : 'Select'
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="less_5000">
                                {locale === 'ar'
                                  ? 'أقل من 5,000 ريال'
                                  : 'Less than 5,000 SAR'}
                              </SelectItem>
                              <SelectItem value="5000_10000">
                                {locale === 'ar'
                                  ? '5,000 - 10,000 ريال'
                                  : '5,000 - 10,000 SAR'}
                              </SelectItem>
                              <SelectItem value="10000_20000">
                                {locale === 'ar'
                                  ? '10,000 - 20,000 ريال'
                                  : '10,000 - 20,000 SAR'}
                              </SelectItem>
                              <SelectItem value="more_20000">
                                {locale === 'ar'
                                  ? 'أكثر من 20,000 ريال'
                                  : 'More than 20,000 SAR'}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                          <Phone className="h-5 w-5 text-[#262b80]" />
                          <h3 className="text-lg font-bold text-[#0b0d36]">
                            {locale === 'ar'
                              ? 'بيانات التواصل'
                              : 'Contact Information'}
                          </h3>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2.5">
                            <Label
                              htmlFor="phone"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar' ? 'رقم الجوال' : 'Mobile Number'}
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              disabled
                              className={inputClassName}
                            />
                          </div>

                          <div className="space-y-2.5">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium text-[#0b0d36]"
                            >
                              {locale === 'ar'
                                ? 'البريد الإلكتروني'
                                : 'Email Address'}
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              disabled
                              className={inputClassName}
                            />
                          </div>
                        </div>

                        <div className="space-y-2.5 sm:w-1/2 sm:pr-2 rtl:sm:pr-0 rtl:sm:pl-2">
                          <Label
                            htmlFor="bestTime"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar'
                              ? 'أفضل وقت للاتصال بي'
                              : 'Best time to contact me'}
                          </Label>
                          <Select required disabled>
                            <SelectTrigger className={inputClassName} disabled>
                              <SelectValue
                                placeholder={
                                  locale === 'ar'
                                    ? 'اختر الوقت المناسب'
                                    : 'Select Time'
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12am_5pm">
                                {locale === 'ar'
                                  ? 'من 12:00 ص إلى 05:00 م'
                                  : '12:00 AM to 05:00 PM'}
                              </SelectItem>
                              <SelectItem value="4am_12pm">
                                {locale === 'ar'
                                  ? 'من 04:00 ص إلى 12:00 م'
                                  : '04:00 AM to 12:00 PM'}
                              </SelectItem>
                              <SelectItem value="8pm_4pm">
                                {locale === 'ar'
                                  ? 'من 08:00 م إلى 04:00 م'
                                  : '08:00 PM to 04:00 PM'}
                              </SelectItem>
                              <SelectItem value="8am_12pm">
                                {locale === 'ar'
                                  ? 'من 8:00 ص إلى 12:00 م'
                                  : '08:00 AM to 12:00 PM'}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled
                        className="h-13 w-full rounded-xl bg-slate-300 text-slate-500 shadow-none"
                      >
                        <Send className="me-2 h-4 w-4 opacity-50" />
                        {locale === 'ar' ? 'الإرسال غير متاح حاليًا' : 'Submission currently unavailable'}
                      </Button>
                    </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features Sidebar */}
            <motion.div {...fadeInUp} className="lg:col-span-4 space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-[24px] border-none bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0b0d36] to-[#262b80] rtl:left-auto rtl:right-0" />
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#262b80] transition-colors group-hover:bg-[#262b80]/5">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0b0d36] mb-1">
                        {locale === 'ar' ? feature.titleAr : feature.titleEn}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {locale === 'ar' ? feature.descAr : feature.descEn}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={
              locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'
            }
            subtitle={
              locale === 'ar'
                ? 'إجابات لاستفساراتكم حول البطاقات'
                : 'Answers to your questions about cards'
            }
          />

          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map(faq => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="text-start text-lg font-semibold text-[#0b0d36] hover:text-[#262b80] py-4">
                    {locale === 'ar' ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                    {locale === 'ar' ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA / Related Links */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#0b0d36] mb-4">
              {locale === 'ar'
                ? 'هل تبحث عن خدمات أخرى؟'
                : 'Looking for other services?'}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href={resolveHref('/customer-service/service-request')}>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-[#262b80]/20 text-[#262b80] hover:bg-[#262b80]/5"
                >
                  {locale === 'ar' ? 'طلب خدمة' : 'Request a Service'}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </Link>
              <Link href={resolveHref('/customer-service/complaints')}>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-[#262b80]/20 text-[#262b80] hover:bg-[#262b80]/5"
                >
                  {locale === 'ar' ? 'تقديم شكوى' : 'Submit a Complaint'}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
