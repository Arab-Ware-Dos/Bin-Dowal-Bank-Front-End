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
import { Textarea } from '@/components/ui/textarea';
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
  FileSignature,
  FileCheck2,
  HelpCircle,
  LifeBuoy,
  Send,
  CheckCircle,
  FileText,
  MapPin,
  ArrowRight,
  ClipboardPen,
  ListChecks,
  PhoneCall,
  Zap,
  CheckSquare
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' }
};

export function ServiceRequestPageContent() {
  const { locale, mode } = useI18n();
  const resolveHref = (target: string) => {
    if (!target.startsWith('/') || target.startsWith('//')) return target;
    return mode === 'url' ? getLocalizedHref(target, locale) : target;
  };

  const inputClassName =
    'h-12 rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10';

  const textareaClassName =
    'min-h-[140px] rounded-xl border-slate-200/80 bg-white/90 shadow-none transition-all duration-300 placeholder:text-slate-400 focus-visible:border-[#262b80]/40 focus-visible:ring-[3px] focus-visible:ring-[#262b80]/10';

  const categories = [
    {
      icon: FileSignature,
      titleAr: 'تحديث البيانات',
      titleEn: 'Data Update',
      descAr: 'تحديث معلوماتك الشخصية أو تفاصيل الاتصال المرتبطة بحسابك.',
      descEn:
        'Update your personal information or contact details linked to your account.'
    },
    {
      icon: FileCheck2,
      titleAr: 'طلب مستند أو شهادة',
      titleEn: 'Document Request',
      descAr: 'طلب شهادات بنكية، كشوف حساب، أو خطابات رسمية.',
      descEn:
        'Request bank certificates, account statements, or official letters.'
    },
    {
      icon: HelpCircle,
      titleAr: 'الاستفسار عن خدمة',
      titleEn: 'Service Inquiry',
      descAr: 'طرح استفسارات حول خدماتنا أو منتجاتنا المصرفية.',
      descEn: 'Ask questions about our banking services or products.'
    },
    {
      icon: LifeBuoy,
      titleAr: 'دعم مرتبط بالحساب',
      titleEn: 'Account Support',
      descAr: 'طلب المساعدة في قضايا أو تحديات تواجهها مع حسابك.',
      descEn:
        'Request assistance with issues or challenges you face with your account.'
    }
  ];

  const processSteps = [
    {
      icon: ClipboardPen,
      titleAr: 'تعبئة الطلب',
      titleEn: 'Fill Application',
      descAr: 'تقديم تفاصيل الخدمة المطلوبة عبر النموذج بخطوات بسيطة.',
      descEn:
        'Submit the details of the required service via the form in simple steps.'
    },
    {
      icon: ListChecks,
      titleAr: 'مراجعة البيانات',
      titleEn: 'Data Review',
      descAr: 'تدقيق الطلب من قبل فريق الدعم لضمان اكتمال المتطلبات.',
      descEn:
        'Review of the request by the support team to ensure requirements are complete.'
    },
    {
      icon: PhoneCall,
      titleAr: 'التواصل مع العميل',
      titleEn: 'Customer Contact',
      descAr: 'إبلاغ العميل بحالة الطلب أو الحاجة لمعلومات إضافية.',
      descEn:
        'Informing the customer of the request status or need for additional information.'
    },
    {
      icon: Zap,
      titleAr: 'تنفيذ الطلب',
      titleEn: 'Request Execution',
      descAr: 'إنجاز الخدمة وتوجيه العميل للاستلام أو الاستفادة منها.',
      descEn:
        'Completing the service and directing the customer to receive or utilize it.'
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      questionAr: 'ما أنواع الخدمات التي يمكن طلبها عبر هذه الصفحة؟',
      questionEn: 'What types of services can be requested through this page?',
      answerAr:
        'يمكنك طلب تحديث بياناتك، إصدار شهادات بنكية، كشوفات حساب، وغيرها من الخدمات المصرفية المباشرة.',
      answerEn:
        'You can request data updates, issuance of bank certificates, account statements, and other direct banking services.'
    },
    {
      id: 'faq-2',
      questionAr: 'هل يمكن إرفاق مستندات مع الطلب؟',
      questionEn: 'Can I attach documents with the request?',
      answerAr:
        'نعم، يوفر النموذج خاصية إرفاق الملفات المطلوبة لمعالجة خدمتك بشكل أسرع.',
      answerEn:
        'Yes, the form provides a feature to attach required files to process your service faster.'
    },
    {
      id: 'faq-3',
      questionAr: 'كيف أتابع حالة طلبي؟',
      questionEn: 'How do I track the status of my request?',
      answerAr:
        'سيصلك إشعار برقم مرجعي بعد التقديم، ويمكنك متابعة حالة الطلب من خلال الاتصال بخدمة العملاء.',
      answerEn:
        'You will receive a notification with a reference number after submission, and you can track the status by calling customer service.'
    },
    {
      id: 'faq-4',
      questionAr: 'هل يلزم أن أكون عميلاً لدى البنك؟',
      questionEn: 'Do I need to be a customer of the bank?',
      answerAr:
        'بعض الخدمات تتطلب أن تكون عميلاً مسجلاً برقم حساب، بينما يمكن الاستفسار عن الخدمات دون الحاجة لحساب.',
      answerEn:
        'Some services require you to be a registered customer with an account number, while service inquiries can be made without an account.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(122,31,61,0.03),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      <PageHero
        title={locale === 'ar' ? 'طلب خدمة' : 'Service Request'}
        subtitle={
          locale === 'ar'
            ? 'نضع بين يديك مساراً واضحاً وميسراً لتقديم طلباتك المصرفية بكل سهولة، لضمان حصولك على تجربة سلسة واحترافية تناسب تطلعاتك.'
            : 'We provide a clear and accessible pathway for submitting your banking requests with ease, ensuring a smooth and professional experience.'
        }
        breadcrumbs={[
          { labelKey: locale === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
          { labelKey: locale === 'ar' ? 'خدمة العملاء' : 'Customer Service', href: resolveHref('/contact') },
          { labelKey: locale === 'ar' ? 'طلب خدمة' : 'Service Request' }
        ]}
      />

      {/* Service Categories */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80] shadow-sm backdrop-blur-sm">
              {locale === 'ar' ? 'أنواع الخدمات' : 'SERVICE CATEGORIES'}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0d36] md:text-4xl">
              {locale === 'ar'
                ? 'كيف يمكننا مساعدتك اليوم؟'
                : 'How can we assist you today?'}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-all duration-500 hover:border-[#262b80]/15 hover:shadow-[0_24px_60px_-28px_rgba(11,13,54,0.28)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7a1f3d]/30 to-transparent" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7a1f3d]/[0.03] blur-2xl transition-transform duration-500 group-hover:scale-110" />
                  <CardContent className="p-6 md:p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_16px_30px_-16px_rgba(38,43,128,0.6)]">
                      <category.icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold leading-7 text-[#0b0d36]">
                        {locale === 'ar' ? category.titleAr : category.titleEn}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">
                        {locale === 'ar' ? category.descAr : category.descEn}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form & Process */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.45),rgba(241,245,249,0.9))]" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Form Section */}
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <Card className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_28px_90px_-35px_rgba(11,13,54,0.28)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] via-[#262b80] to-[#7a1f3d]/80" />

                <CardHeader className="relative pb-4">
                  <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#262b80]/10 bg-[#262b80]/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80]">
                    {locale === 'ar' ? 'الطلب الإلكتروني' : 'ONLINE REQUEST'}
                  </div>

                  <CardTitle className="flex items-center gap-3 text-2xl text-[#0b0d36] md:text-[28px]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#3b43a8] text-white shadow-[0_16px_30px_-16px_rgba(38,43,128,0.55)]">
                      <FileText className="h-5 w-5" />
                    </span>
                    {locale === 'ar' ? 'تعبئة الطلب' : 'Fill Application'}
                  </CardTitle>

                  <p className="text-sm leading-7 text-slate-600 md:text-base">
                    {locale === 'ar'
                      ? 'أدخل بياناتك ونوع الخدمة المطلوبة ليتم توجيهها للقسم المختص.'
                      : 'Enter your details and the required service type to be directed to the relevant department.'}
                  </p>
                </CardHeader>

                <CardContent className="relative">
                  <FormUnavailableNotice locale={locale} contactHref={resolveHref('/contact')} />
                  <form onSubmit={handleSubmit} className="space-y-6 opacity-60">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label
                            htmlFor="name"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
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
                            htmlFor="account"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar'
                              ? 'رقم العميل أو الحساب'
                              : 'Customer or Account Number'}
                          </Label>
                          <Input id="account" className={inputClassName} />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
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

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label
                            htmlFor="type"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar'
                              ? 'نوع الخدمة المطلوبة'
                              : 'Required Service Type'}
                          </Label>
                          <Select required disabled>
                            <SelectTrigger className={inputClassName} disabled>
                              <SelectValue
                                placeholder={
                                  locale === 'ar'
                                    ? 'اختر الخدمة'
                                    : 'Select service'
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="update">
                                {locale === 'ar'
                                  ? 'تحديث بيانات'
                                  : 'Data Update'}
                              </SelectItem>
                              <SelectItem value="document">
                                {locale === 'ar'
                                  ? 'طلب مستند'
                                  : 'Document Request'}
                              </SelectItem>
                              <SelectItem value="inquiry">
                                {locale === 'ar'
                                  ? 'استفسار عن خدمة'
                                  : 'Service Inquiry'}
                              </SelectItem>
                              <SelectItem value="support">
                                {locale === 'ar'
                                  ? 'دعم فني'
                                  : 'Technical Support'}
                              </SelectItem>
                              <SelectItem value="other">
                                {locale === 'ar' ? 'أخرى' : 'Other'}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2.5">
                          <Label
                            htmlFor="branch"
                            className="text-sm font-medium text-[#0b0d36]"
                          >
                            {locale === 'ar'
                              ? 'الفرع المفضل للتنفيذ'
                              : 'Preferred Branch'}
                          </Label>
                          <Select>
                            <SelectTrigger className={inputClassName}>
                              <SelectValue
                                placeholder={
                                  locale === 'ar'
                                    ? 'اختر الفرع'
                                    : 'Select branch'
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="main">
                                {locale === 'ar'
                                  ? 'الفرع الرئيسي - المكلا'
                                  : 'Main Branch - Mukalla'}
                              </SelectItem>
                              <SelectItem value="digital">
                                {locale === 'ar'
                                  ? 'عبر القنوات الرقمية'
                                  : 'Via Digital Channels'}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <Label
                          htmlFor="details"
                          className="text-sm font-medium text-[#0b0d36]"
                        >
                          {locale === 'ar' ? 'تفاصيل الطلب' : 'Request Details'}
                        </Label>
                        <Textarea
                          id="details"
                          rows={5}
                          required
                          disabled
                          className={textareaClassName}
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label
                          htmlFor="attachment"
                          className="text-sm font-medium text-[#0b0d36]"
                        >
                          {locale === 'ar'
                            ? 'مرفقات عند الحاجة'
                            : 'Attachments if needed'}
                        </Label>
                        <div className="relative">
                          <Input
                            id="attachment"
                            type="file"
                            className={`pt-2.5 file:mr-4 file:rounded-full file:border-0 file:bg-[#262b80]/10 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-[#262b80] hover:file:bg-[#262b80]/20 ${inputClassName}`}
                          />
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

            {/* Process & Value */}
            <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
              {/* Process Steps */}
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-[#262b80]/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#262b80] shadow-sm backdrop-blur-sm">
                  {locale === 'ar' ? 'الخطوات' : 'PROCESS'}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0b0d36] mb-6">
                  {locale === 'ar' ? 'كيف يعمل النظام؟' : 'How it Works?'}
                </h2>

                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-slate-200 rtl:before:right-6 rtl:before:left-auto">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-[#262b80]/15 text-[#262b80] shadow-sm z-10">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="pt-2 pb-4">
                        <h4 className="text-base font-semibold text-[#0b0d36] mb-1">
                          {locale === 'ar' ? step.titleAr : step.titleEn}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {locale === 'ar' ? step.descAr : step.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Block */}
              <Card className="rounded-[26px] border-none bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.15)] relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0d36] to-[#262b80]" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#0b0d36]">
                    {locale === 'ar'
                      ? 'لماذا تستخدم هذه الخدمة؟'
                      : 'Why Use This Service?'}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      {
                        ar: 'وضوح تام في مسار الطلب',
                        en: 'Complete clarity in request processing'
                      },
                      {
                        ar: 'سهولة تنظيم المستندات وتوجيهها',
                        en: 'Easy organization and routing of documents'
                      },
                      {
                        ar: 'متابعة أكثر ترتيبًا للنتائج',
                        en: 'More organized tracking of results'
                      },
                      {
                        ar: 'قناة رسمية معتمدة للبنك',
                        en: 'Official approved bank channel'
                      }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckSquare className="w-5 h-5 text-[#262b80] shrink-0 mt-0.5 opacity-80" />
                        <span className="text-sm leading-relaxed text-slate-700">
                          {locale === 'ar' ? item.ar : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
                ? 'كل ما تود معرفته عن طلبات الخدمات'
                : 'Everything you need to know about service requests'
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
                ? 'هل لديك مشكلة أو شكوى؟'
                : 'Have an issue or complaint?'}
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              {locale === 'ar'
                ? 'في حال وجود أي إشكالية أو رغبة في تقديم شكوى حول مستوى الخدمة، يرجى التوجه لصفحة الشكاوى.'
                : 'In case of any issue or desire to submit a complaint about the service level, please go to the complaints page.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
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
              <Link href={resolveHref('/customer-service/bank-cards-request')}>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-[#262b80]/20 text-[#262b80] hover:bg-[#262b80]/5"
                >
                  {locale === 'ar' ? 'طلب بطاقة بنكية' : 'Bank Cards Request'}
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
