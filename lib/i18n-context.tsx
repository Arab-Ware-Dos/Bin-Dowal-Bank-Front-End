"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

type Locale = "ar" | "en"
type Direction = "rtl" | "ltr"

export type I18nMode = "legacy" | "url"

interface I18nContextType {
  locale: Locale
  direction: Direction
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  mode: I18nMode
}

const translations: Record<Locale, Record<string, string>> = {
  ar: {
    // Search
    "search.placeholder": "ابحث في الموقع...",
    "search.title": "نتائج البحث",
    "search.resultsFor": "نتائج البحث عن:",
    "search.resultCount": "تم العثور على {count} نتيجة",
    "search.noResults": "لم يتم العثور على نتائج مطابقة لبحثك.",
    "search.suggestion": "جرّب استخدام كلمات مختلفة أو أكثر عمومية.",
    "search.emptyQuery": "الرجاء إدخال كلمة للبحث عنها.",
    "search.searchButton": "بحث",

    // Navigation
    "nav.home": "الرئيسية",
    "nav.personalBanking": "خدمات الأفراد",
    "nav.businessBanking": "بن دول أعمال",
    "nav.cards": "البطاقات",
    "nav.financing": "التمويل",
    "nav.digitalChannels": "الخدمات الاكترونية",
    "nav.about": "عن البنك",
    "nav.news": "الأخبار",
    "nav.contact": "اتصل بنا",
    "nav.branches": "الفروع و الصرافات",
    "nav.login": "تسجيل الدخول",

    // Personal Banking Sub-items
    "nav.accounts": "الحسابات",
    "nav.currentAccount": "الحساب الجاري",
    "nav.savingsAccount": "حساب التوفير",
    "nav.investmentDeposit": "الوديعة الاستثمارية",
    "nav.minorsAccount": "حساب القاصر",
    "nav.localTransfers": "التحويلات المحلية",
    "nav.intlTransfers": "التحويلات الدولية",
    "nav.expressRemittances": "الحوالات السريعة",
    "nav.creditCard": "بطاقة الائتمان",
    "nav.debitCard": "بطاقة الخصم المباشر",
    "nav.prepaidCard": "بطاقة مسبقة الدفع",
    "nav.virtualCard": "بطاقة الدفع الافتراضية",
    "nav.mobileBanking": "الموبايل البنكي",
    "nav.eWallet": "المحفظة الإلكترونية",
    "nav.pos": "نقاط البيع شبكة مشترياتي",
    "nav.posNet": "شبكة مشترياتي",
    "nav.personalFinance": "التمويل الشخصي",
    "nav.realEstate": "التمويل العقاري",
    "nav.smallProjects": "تمويل المشاريع الصغيرة",
    "nav.savings": "الادخار",
    "nav.remittances": "الحوالات",

    // Business Banking Sub-items
    "nav.sme": "المشاريع الصغيرة والمتوسطة",
    "nav.corporate": "الشركات",
    "nav.payroll": "الرواتب",
    "nav.corporateCurrentAccount": "الحساب الجاري للشركات",
    "nav.corporateInvestmentDeposits": "الودائع الاستثمارية للشركات",
    "nav.swiftTransfers": "حوالات السويفت",
    "nav.bankGuarantees": "خطابات الضمان",

    // Cards Sub-items
    "nav.debitCards": "بطاقة الخصم الفوري",
    "nav.creditCards": "البطاقة الائتمانية",
    "nav.prepaidCards": "بطاقة الدفع المسبق",
    "nav.noorCard": "بطاقة نور",

    // Financing Sub-items
    "nav.autoFinancing": "تمويل السيارات",
    "nav.homeFinancing": "التمويل العقاري",
    "nav.personalFinancing": "التمويل الشخصي",
    "nav.financingTakamul": "تمويل تكامل",
    "nav.financingThimar": "تمويل ثمار",
    "nav.financingTaameer": "تمويل تعمير",
    "nav.financingNoor": "تمويل نور",
    "nav.financingZad": "تمويل زاد",

    // Digital Channels Sub-items
    "nav.mobileApp": "تطبيق الجوال",
    "nav.internetBanking": "الخدمات المصرفية عبر الإنترنت",
    "nav.internetBank": "منصة بن دول اعمال",
    "nav.atms": "أجهزة الصراف الآلي",

    // About Sub-items
    "nav.story": "قصتنا",
    "nav.governance": "الحوكمة",
    "nav.careers": "الوظائف",

    // Topbar
    "topbar.accessibility": "إمكانية الوصول",
    "topbar.language": "English",
    "topbar.download": "تحميل الملف التعريفي",

    // Hero
    "hero.title": "مصرفية إسلامية تناسب أعمالك",
    "hero.subtitle": "حلول تمويل مبتكرة متوافقة مع الشريعة الإسلامية لدعم نموك وتحقيق أهدافك",
    "hero.cta.primary": "استكشف منتجاتنا",
    "hero.cta.secondary": "حمّل التطبيق",

    // Quick Actions
    "quickActions.title": "الوصول السريع إلى الخدمات الأساسية",
    "quickActions.openAccount": "افتح حساباً",
    "quickActions.calculateFinancing": "احسب تمويلك",
    "quickActions.findBranch": "ابحث عن فرع",
    "quickActions.compareCards": "قارن البطاقات",
    "quickActions.downloadApp": "حمّل التطبيق",
    "quickActions.contactUs": "تواصل معنا",

    // E-Services
    "eServices.title": "الخدمات الإلكترونية",
    "eServices.subtitle": "حلول مصرفية رقمية ذكية تلبي طموحاتك",
    "eServices.learnMore": "اعرف المزيد",

    // Specialized services
    "nav.specializedServices": "خدمات مخصصة",
    "nav.noorAccount": "حساب نور",
    "nav.expatAccount": "حساب المغتربين",
    "nav.taameerAccount": "حساب تعمير",
    "nav.zadAccount": "حساب زاد",
    "nav.thimarAccount": "حساب ثمار",
    "nav.takamulAccount": "حساب تكامل",





    // Calculator
    "calculator.title": "احسب تمويلك",
    "calculator.auto": "تمويل السيارات",
    "calculator.home": "التمويل العقاري",
    "calculator.personal": "التمويل الشخصي",
    "calculator.amount": "مبلغ التمويل",
    "calculator.period": "مدة التمويل (أشهر)",
    "calculator.monthlyPayment": "القسط الشهري التقديري",
    "calculator.disclaimer": "* النتائج تقديرية وقد تختلف عن العرض الفعلي",
    "calculator.calculate": "احسب",
    "calculator.sar": "ريال",

    // App Promo
    "appPromo.title": "تطبيق الموبايل البنكي",
    "appPromo.subtitle": "جميع خدماتك المصرفية في جيبك",
    "appPromo.feature1": "تحكم بإعدادات بطاقتك",
    "appPromo.feature2": "نفذ حوالاتك",
    "appPromo.feature3": "سدد فواتيرك",
    "appPromo.feature4": "تابع حساباتك",
    "appPromo.feature5": "اسحب نقدا من الصراف الآلي بدون بطاقة عبر خدمة  (Card-less)",
    "appPromo.download": "حمّل التطبيق الآن",
    "appPromo.scanQr": "امسح الرمز للتحميل",

    // Stats
    "stats.branches": "فرع",
    "stats.atms": "جهاز صراف",
    "stats.customers": "عميل",
    "stats.experience": "سنوات خبرة",

    // News
    "news.title": "آخر الأخبار",
    "news.readMore": "اقرأ المزيد",
    "news.viewAll": "عرض جميع الأخبار",

    // Footer
    "footer.quickLinks": "روابط سريعة",
    "footer.products": "المنتجات",
    "footer.support": "الدعم",
    "footer.followUs": "تابعنا",
    "footer.newsletter": "النشرة البريدية",
    "footer.newsletterPlaceholder": "بريدك الإلكتروني",
    "footer.subscribe": "اشترك",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "footer.address": "الجمهورية اليمنية - حضرموت - المكلا",

    // Common
    "common.loading": "جاري التحميل...",
    "common.search": "بحث",
    "common.filter": "تصفية",
    "common.all": "الكل",
    "common.viewDetails": "عرض التفاصيل",
    "common.apply": "تقدم الآن",
    "common.backToHome": "العودة للرئيسية",

    // Pages
    "page.personalBanking.title": "الخدمات المصرفية الشخصية",
    "page.personalBanking.subtitle": "حلول مصرفية شاملة تلبي جميع احتياجاتك",
    "page.businessBanking.title": "الخدمات المصرفية للأعمال",
    "page.businessBanking.subtitle": "شريكك المصرفي لنجاح أعمالك",
    "page.cards.title": "البطاقات",
    "page.cards.subtitle": "اختر البطاقة المناسبة لأسلوب حياتك",
    "page.financing.title": "التمويل",
    "page.financing.subtitle": "حقق أحلامك مع حلول التمويل المرنة",
    "page.digitalChannels.title": "القنوات الرقمية",
    "page.digitalChannels.subtitle": "خدمات مصرفية متطورة في متناول يدك",
    "page.about.title": "عن البنك",
    "page.about.subtitle": "تعرف على قصتنا ورؤيتنا",
    "page.news.title": "الأخبار",
    "page.news.subtitle": "آخر أخبارنا وفعالياتنا",
    "page.contact.title": "اتصل بنا",
    "page.contact.subtitle": "نحن هنا لمساعدتك",
    "page.branches.title": "الفروع",
    "page.branches.subtitle": "ابحث عن أقرب فرع إليك",

    // Contact Form
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "رسالتك",
    "contact.send": "إرسال",
    "contact.success": "تم إرسال رسالتك بنجاح",

    // Branches
    "branches.city": "المدينة",
    "branches.services": "الخدمات",
    "branches.hours": "ساعات العمل",
    "branches.viewOnMap": "عرض على الخريطة",

    // FAQ
    "faq.title": "الأسئلة الشائعة",

    // 404
    "notFound.title": "الصفحة غير موجودة",
    "notFound.subtitle": "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها",
    "notFound.backHome": "العودة إلى الرئيسية",
    "notFound.quickLinks": "روابط مفيدة",

    // Login tooltip
    "login.tooltip": "عرض توضيحي فقط",

    // Financing Services Section
    "financingServices.title": "خدمات التمويل",
    "financingServices.tameer": "تعمير",
    "financingServices.tameer.desc": "تمويل مخصص لبناء المنازل والمشاريع السكنية",
    "financingServices.takamul": "تكامل",
    "financingServices.takamul.desc": "تمويـــل مخصـــص لتغطيــــة الاحتياجات الشخصية أثاث، أجهــــــزة منزليـــــــــة وسلــــــع ضرورية وغيرها",
    "financingServices.thimar": "ثمار",
    "financingServices.thimar.desc": "تمويـــــــل شامـــــــل لدعـــــــم المشاريع الصغيرة والأصغر",
    "financingServices.solar": "الطاقة الشمسية",
    "financingServices.solar.desc": "تمويـــل مخصـــص لشــــــراء أنظمة الطاقة الشمسية",
    "financingServices.zad": "زاد",
    "financingServices.zad.desc": "تمويـــل مخصــص لتغطيـــة تكاليف التعليم",
    "financingServices.noor": "نور",
    "financingServices.noor.desc": "تمويل يسهل على النساء إدارة وتوسيع مشاريعهن الصغيرة والأصغر",

    // BinDowal Pay App
    "binDowalPay.badge": "محفظة رقمية",
    "binDowalPay.title": "محفظة بن دول باي",
    "binDowalPay.description": "محفظة بن دول باي يجمع جميع احتياجاتك المصرفية في مكان واحد. حوّل، ادفع، تابع، وأدر حساباتك بكل يسر وأمان من أي مكان وفي أي وقت.",
    "binDowalPay.feature1": "التحويلات الفورية",
    "binDowalPay.feature2": "إدارة المحفظة",
    "binDowalPay.feature3": "سداد الفواتير",
    "binDowalPay.feature4": "ربط مباشر بحسابات البنك",
    "binDowalPay.slide1.title": "الرئيسية والقائمة المختصرة",
    "binDowalPay.slide1.desc": "اطلع على رصيدك ونفذ عمليات التحويل والشراء والسداد بسرعة من شاشة واحدة.",
    "binDowalPay.slide2.title": "تحويل إلى عميل",
    "binDowalPay.slide2.desc": "حوّل الأموال لأي عميل بخطوات بسيطة ومباشرة من محفظتك اليمنية.",
    "binDowalPay.slide3.title": "دفع فواتير المشتريات",
    "binDowalPay.slide3.desc": "ادفع عمليات شراء البائعين بسرعة وأمان باستخدام رصيدك اليمني.",
    "binDowalPay.slide4.title": "سداد الخدمات والاشتراكات",
    "binDowalPay.slide4.desc": "سدد فواتير الكهرباء والماء وشركات الاتصالات ببضع نقرات من أي مكان.",
    "binDowalPay.getItOn": "متوفر على",
    "binDowalPay.downloadOn": "حمّل من",
    "binDowalPay.googlePlay": "Google Play",
    "binDowalPay.appStore": "App Store",

    // Partnerships
    "partnerships.title": "شركاؤنا",
    "partnerships.subtitle": "نعتز بشراكاتنا الاستراتيجية التي تهدف إلى تقديم حلول مصرفية متكاملة ومبتكرة لعملائنا",
    "partnerships.local": "شراكات محلية",
    "partnerships.international": "شراكات دولية",
    "partnerships.correspondent": "بنوك مراسلة",
    "partnerships.viewAll": "مشاهدة جميع الشركاء",

    // Cards Section
    "cardsSection.badge": "بطاقاتنا المصرفية",
    "cardsSection.title1": "اختر",
    "cardsSection.titleHighlight": "البطاقة",
    "cardsSection.title2": "التي تناسبك",
    "cardsSection.description": "مجموعة متكاملة من البطاقات المصرفية المصممة لتلبية كل احتياجاتك اليومية والمميزة بأعلى معايير الأمان والراحة.",
    "cardsSection.requestCard": "طلب البطاقة",
    "cardsSection.learnMore": "تعرف على المزيد",
    "cardsSection.card1.title": "بطاقة كلاسيك",
    "cardsSection.card1.subtitle": "حلول يومية بمرونة أعلى",
    "cardsSection.card1.feature1": "مقبولة محلياً وعالمياً في جميع نقاط البيع",
    "cardsSection.card1.feature2": "أمان عالي باستخدام تقنية الشريحة الذكية",
    "cardsSection.card1.feature3": "سحوبات نقدية ومشتريات مرنة وميسرة",
    "cardsSection.card2.title": "بطاقة نور",
    "cardsSection.card2.subtitle": "مزايا أكثر وتجربة مصرفية أذكى",
    "cardsSection.card2.feature1": "تسهيلات دفع مرنة ومتوافقة مع الشريعة",
    "cardsSection.card2.feature2": "عروض وخصومات حصرية لدى شركائنا",
    "cardsSection.card2.feature3": "إدارة ذكية ومباشرة عبر تطبيق البنك",
    "cardsSection.card3.title": "بطاقة جولد",
    "cardsSection.card3.subtitle": "تصميم راقٍ ومزايا مميزة",
    "cardsSection.card3.feature1": "أولوية في الخدمة عبر جميع الفروع",
    "cardsSection.card3.feature2": "خدمة عملاء مخصصة على مدار الساعة",
    "cardsSection.card3.feature3": "حد ائتماني مرن ومناسب لتطلعاتك",
    "cardsSection.card4.title": "بطاقة تسوق",
    "cardsSection.card4.subtitle": "تصميم راقٍ ومزايا مميزة",
    "cardsSection.card4.feature1": "أولوية في الخدمة عبر جميع الفروع",
    "cardsSection.card4.feature2": "خدمة عملاء مخصصة على مدار الساعة",
    "cardsSection.card4.feature3": "حد ائتماني مرن ومناسب لتطلعاتك",

    // Discover Products Section
    "discoverProducts.badge": "منتجات بنك بن دول",
    "discoverProducts.title": "اكتشف منتجاتنا",
    "discoverProducts.description": "مجموعة مختارة من المنتجات والخدمات المصرفية المصممة لتقديم تجربة واضحة، عملية، واحترافية للأفراد وقطاع الأعمال.",
    "discoverProducts.personal": "خدمات الأفراد",
    "discoverProducts.business": "بن دول أعمال",
    "discoverProducts.productDesc": "منتج مصرفي مصمم لتقديم تجربة أكثر وضوحًا ومرونة ضمن إطار احترافي موثوق.",
    "discoverProducts.exploreProduct": "استكشف المنتج",
    "discoverProducts.more": "المزيد",
    "discoverProducts.noProducts": "لا توجد منتجات ضمن هذا التصنيف حالياً.",
    "discoverProducts.viewAll": "عرض جميع المنتجات",
    "discoverProducts.prod1.title": "الحساب الجاري",
    "discoverProducts.prod2.title": "حساب التوفير",
    "discoverProducts.prod3.title": "حساب الوديعة الاستثمارية",
    "discoverProducts.prod4.title": "حساب القاصر",
    "discoverProducts.prod5.title": "الحساب الجاري للشركات",
    "discoverProducts.prod6.title": "الودائع الاستثمارية للشركات",
    "discoverProducts.prod7.title": "حوالة السويفت",
    "discoverProducts.prod8.title": "خطابات الضمان",
  },
  en: {
    // Search
    "search.placeholder": "Search the website...",
    "search.title": "Search Results",
    "search.resultsFor": "Search results for:",
    "search.resultCount": "Found {count} results",
    "search.noResults": "No matching results found for your search.",
    "search.suggestion": "Try using different or more general words.",
    "search.emptyQuery": "Please enter a search term.",
    "search.searchButton": "Search",

    // Navigation
    "nav.home": "Home",
    "nav.personalBanking": "Personal Banking",
    "nav.businessBanking": "Business Banking",
    "nav.cards": "Cards",
    "nav.financing": "Financing",
    "nav.digitalChannels": "Digital Channels",
    "nav.about": "About Us",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.branches": "Branches & ATMs",
    "nav.login": "Login",

    // Personal Banking Sub-items
    "nav.accounts": "Accounts",
    "nav.currentAccount": "Current Account",
    "nav.savingsAccount": "Savings Account",
    "nav.investmentDeposit": "Investment Deposit",
    "nav.minorsAccount": "Minors Account",
    "nav.localTransfers": "Local Transfers",
    "nav.intlTransfers": "International Transfers",
    "nav.expressRemittances": "Express Remittances",
    "nav.creditCard": "Credit Card",
    "nav.debitCard": "Debit Card",
    "nav.prepaidCard": "Prepaid Card",
    "nav.virtualCard": "Virtual Card",
    "nav.mobileBanking": "Mobile Banking",
    "nav.eWallet": "e-Wallet",
    "nav.personalFinance": "Personal Finance",
    "nav.realEstate": "Real Estate Finance",
    "nav.smallProjects": "Small Projects Finance",
    "nav.savings": "Savings",
    "nav.remittances": "Remittances",

    // Business Banking Sub-items
    "nav.sme": "SME",
    "nav.corporate": "Corporate",
    "nav.payroll": "Payroll",
    "nav.pos": "POS Solutions",
    "nav.posNet": "Mushtarayati Network",
    "nav.corporateCurrentAccount": "Corporate Current Account",
    "nav.corporateInvestmentDeposits": "Corporate Investment Deposits",
    "nav.swiftTransfers": "SWIFT Transfers",
    "nav.bankGuarantees": "Bank Guarantees",

    // Cards Sub-items
    "nav.debitCards": "Debit Card",
    "nav.creditCards": "Credit Card",
    "nav.prepaidCards": "Prepaid Card",
    "nav.noorCard": "Noor Card",

    // Financing Sub-items
    "nav.autoFinancing": "Auto Financing",
    "nav.homeFinancing": "Home Financing",
    "nav.personalFinancing": "Personal Financing",
    "nav.financingTakamul": "Takamul Financing",
    "nav.financingThimar": "Thimar Financing",
    "nav.financingTaameer": "Ta'meer Financing",
    "nav.financingNoor": "Noor Financing",
    "nav.financingZad": "Zad Financing",

    // Digital Channels Sub-items
    "nav.mobileApp": "Mobile App",
    "nav.internetBanking": "Internet Banking",
    "nav.internetBank": "Bin Dowal Business Platform",
    "nav.atms": "ATMs",

    // About Sub-items
    "nav.story": "Our Story",
    "nav.governance": "Governance",
    "nav.careers": "Careers",

    // Topbar
    "topbar.accessibility": "Accessibility",
    "topbar.language": "العربية",
    "topbar.download": "Download Bank Profile",

    // Hero
    "hero.title": "Islamic Banking for Your Business",
    "hero.subtitle": "Innovative Sharia-compliant financing solutions to support your growth and achieve your goals",
    "hero.cta.primary": "Explore Our Products",
    "hero.cta.secondary": "Download App",

    // Quick Actions
    "quickActions.title": "Quick Services",
    "quickActions.openAccount": "Open Account",
    "quickActions.calculateFinancing": "Calculate Financing",
    "quickActions.findBranch": "Find Branch",
    "quickActions.compareCards": "Compare Cards",
    "quickActions.downloadApp": "Download App",
    "quickActions.contactUs": "Contact Us",

    // E-Services
    "eServices.title": "E-Services",
    "eServices.subtitle": "Smart digital banking solutions that meet your ambitions",
    "eServices.learnMore": "Learn More",

    // Specialized services
    "nav.specializedServices": "Specialized Services",
    "specializedServices.title": "Specialized Services",
    "specializedServices.subtitle": "Smart digital banking solutions that meet your ambitions",
    "specializedServices.learnMore": "Learn More",
    "nav.noorAccount": "Noor Account",
    "nav.expatAccount": "Expat Account",
    "nav.taameerAccount": "Taameer Account",
    "nav.zadAccount": "Zad Account",
    "nav.thimarAccount": "Thimar Account",
    "nav.takamulAccount": "Takamul Account",


    // Calculator
    "calculator.title": "Calculate Your Financing",
    "calculator.auto": "Auto Financing",
    "calculator.home": "Home Financing",
    "calculator.personal": "Personal Financing",
    "calculator.amount": "Financing Amount",
    "calculator.period": "Period (Months)",
    "calculator.monthlyPayment": "Estimated Monthly Payment",
    "calculator.disclaimer": "* Results are estimates and may differ from actual offer",
    "calculator.calculate": "Calculate",
    "calculator.sar": "SAR",

    // App Promo
    "appPromo.title": "Bin Dowal App",
    "appPromo.subtitle": "All your banking services in your pocket",
    "appPromo.feature1": "Easy Money Transfer",
    "appPromo.feature2": "Manage Your Accounts",
    "appPromo.feature3": "Pay Bills",
    "appPromo.feature4": "Track Transactions",
    "appPromo.feature5": "Withdraw cash from ATM without a card via Card-less service",
    "appPromo.download": "Download Now",
    "appPromo.scanQr": "Scan to Download",

    // Stats
    "stats.branches": "Branches",
    "stats.atms": "ATMs",
    "stats.customers": "Customers",
    "stats.experience": "Years Experience",

    // News
    "news.title": "Latest News",
    "news.readMore": "Read More",
    "news.viewAll": "View All News",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.products": "Products",
    "footer.support": "Support",
    "footer.followUs": "Follow Us",
    "footer.newsletter": "Newsletter",
    "footer.newsletterPlaceholder": "Your Email",
    "footer.subscribe": "Subscribe",
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.address": "Saudi Arabia, Riyadh",

    // Common
    "common.loading": "Loading...",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.all": "All",
    "common.viewDetails": "View Details",
    "common.apply": "Apply Now",
    "common.backToHome": "Back to Home",

    // Pages
    "page.personalBanking.title": "Personal Banking",
    "page.personalBanking.subtitle": "Comprehensive banking solutions for all your needs",
    "page.businessBanking.title": "Business Banking",
    "page.businessBanking.subtitle": "Your banking partner for business success",
    "page.cards.title": "Cards",
    "page.cards.subtitle": "Choose the card that fits your lifestyle",
    "page.financing.title": "Financing",
    "page.financing.subtitle": "Achieve your dreams with flexible financing",
    "page.digitalChannels.title": "Digital Channels",
    "page.digitalChannels.subtitle": "Advanced banking services at your fingertips",
    "page.about.title": "About Us",
    "page.about.subtitle": "Discover our story and vision",
    "page.news.title": "News",
    "page.news.subtitle": "Latest news and events",
    "page.contact.title": "Contact Us",
    "page.contact.subtitle": "We are here to help",
    "page.branches.title": "Branches",
    "page.branches.subtitle": "Find your nearest branch",

    // Contact Form
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Your Message",
    "contact.send": "Send",
    "contact.success": "Message sent successfully",

    // Branches
    "branches.city": "City",
    "branches.services": "Services",
    "branches.hours": "Working Hours",
    "branches.viewOnMap": "View on Map",

    // FAQ
    "faq.title": "Frequently Asked Questions",

    // 404
    "notFound.title": "Page Not Found",
    "notFound.subtitle": "Sorry, the page you're looking for doesn't exist or has been moved.",
    "notFound.backHome": "Back to Home",
    "notFound.quickLinks": "Quick Links",

    // Login tooltip
    "login.tooltip": "Frontend demo only",

    // Financing Services Section
    "financingServices.title": "Financing Services",
    "financingServices.tameer": "Tameer",
    "financingServices.tameer.desc": "Financing dedicated to building homes and residential projects",
    "financingServices.takamul": "Takamul",
    "financingServices.takamul.desc": "Financing for personal needs like furniture, home appliances, and essential goods",
    "financingServices.thimar": "Thimar",
    "financingServices.thimar.desc": "Comprehensive financing to support small and micro projects",
    "financingServices.solar": "Solar Energy",
    "financingServices.solar.desc": "Financing dedicated to purchasing solar energy systems",
    "financingServices.zad": "Zad",
    "financingServices.zad.desc": "Financing dedicated to covering educational costs",
    "financingServices.noor": "Noor",
    "financingServices.noor.desc": "Financing that facilitates women in managing and expanding their small and micro projects",

    // BinDowal Pay App
    "binDowalPay.badge": "Bin Dowal Pay App",
    "binDowalPay.title": "All Your Banking Services at Your Fingertips",
    "binDowalPay.description": "Bin Dowal Pay brings all your banking needs together in one place. Transfer, pay, monitor, and manage your accounts with ease and security — anytime, anywhere.",
    "binDowalPay.feature1": "Instant Transfers",
    "binDowalPay.feature2": "Wallet Management",
    "binDowalPay.feature3": "Bill Payments",
    "binDowalPay.feature4": "Direct Link to Bank Accounts",
    "binDowalPay.slide1.title": "Home & Quick Actions",
    "binDowalPay.slide1.desc": "Check your balance and execute transfers, purchases, and payments fast from one screen.",
    "binDowalPay.slide2.title": "Transfer to a Client",
    "binDowalPay.slide2.desc": "Send money to any client in simple, direct steps straight from your YER wallet.",
    "binDowalPay.slide3.title": "Pay Purchase Bills",
    "binDowalPay.slide3.desc": "Pay merchant purchase bills quickly and securely using your YER wallet balance.",
    "binDowalPay.slide4.title": "Pay Services & Subscriptions",
    "binDowalPay.slide4.desc": "Pay electricity, water, and telecom bills in just a few taps from anywhere.",
    "binDowalPay.getItOn": "GET IT ON",
    "binDowalPay.downloadOn": "Download on the",
    "binDowalPay.googlePlay": "Google Play",
    "binDowalPay.appStore": "App Store",

    // Partnerships
    "partnerships.title": "Our Partners",
    "partnerships.subtitle": "We take pride in our strategic partnerships aimed at providing integrated and innovative banking solutions to our customers",
    "partnerships.local": "Local Partnerships",
    "partnerships.international": "International Partnerships",
    "partnerships.correspondent": "Correspondent Banks",
    "partnerships.viewAll": "View All Partners",

    // Cards Section
    "cardsSection.badge": "Our Bank Cards",
    "cardsSection.title1": "Choose",
    "cardsSection.titleHighlight": "the card",
    "cardsSection.title2": "that suits you",
    "cardsSection.description": "An integrated set of bank cards designed to meet all your daily needs, featuring the highest standards of security and convenience.",
    "cardsSection.requestCard": "Request Card",
    "cardsSection.learnMore": "Learn More",
    "cardsSection.card1.title": "Classic Card",
    "cardsSection.card1.subtitle": "Daily solutions with higher flexibility",
    "cardsSection.card1.feature1": "Accepted locally and globally at all POS",
    "cardsSection.card1.feature2": "High security using smart chip technology",
    "cardsSection.card1.feature3": "Flexible and easy cash withdrawals and purchases",
    "cardsSection.card2.title": "Noor Card",
    "cardsSection.card2.subtitle": "More benefits and a smarter banking experience",
    "cardsSection.card2.feature1": "Flexible and Sharia-compliant payment facilities",
    "cardsSection.card2.feature2": "Exclusive offers and discounts with our partners",
    "cardsSection.card2.feature3": "Smart and direct management via the bank's app",
    "cardsSection.card3.title": "Gold Card",
    "cardsSection.card3.subtitle": "Elegant design and premium benefits",
    "cardsSection.card3.feature1": "Priority service across all branches",
    "cardsSection.card3.feature2": "Dedicated 24/7 customer service",
    "cardsSection.card3.feature3": "Flexible credit limit suited to your aspirations",
    "cardsSection.card4.title": "Shopping Card",
    "cardsSection.card4.subtitle": "Elegant design and premium benefits",
    "cardsSection.card4.feature1": "Priority service across all branches",
    "cardsSection.card4.feature2": "Dedicated 24/7 customer service",
    "cardsSection.card4.feature3": "Flexible credit limit suited to your aspirations",

    // Discover Products Section
    "discoverProducts.badge": "Bin Dowal Bank Products",
    "discoverProducts.title": "Discover Our Products",
    "discoverProducts.description": "A selected range of banking products and services designed to provide a clear, practical, and professional experience for individuals and the business sector.",
    "discoverProducts.personal": "Personal Services",
    "discoverProducts.business": "Bin Dowal Business",
    "discoverProducts.productDesc": "A banking product designed to offer a clearer and more flexible experience within a reliable professional framework.",
    "discoverProducts.exploreProduct": "Explore Product",
    "discoverProducts.more": "More",
    "discoverProducts.noProducts": "No products currently available in this category.",
    "discoverProducts.viewAll": "View All Products",
    "discoverProducts.prod1.title": "Current Account",
    "discoverProducts.prod2.title": "Savings Account",
    "discoverProducts.prod3.title": "Investment Deposit Account",
    "discoverProducts.prod4.title": "Minors Account",
    "discoverProducts.prod5.title": "Corporate Current Account",
    "discoverProducts.prod6.title": "Corporate Investment Deposits",
    "discoverProducts.prod7.title": "SWIFT Transfer",
    "discoverProducts.prod8.title": "Letters of Guarantee",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

type BaseI18nProviderProps = {
  children: ReactNode;
};

type LegacyI18nProviderProps = BaseI18nProviderProps & {
  mode?: "legacy";
  initialLocale?: Locale;
};

type UrlI18nProviderProps = BaseI18nProviderProps & {
  mode: "url";
  initialLocale: Locale;
};

export type I18nProviderProps = LegacyI18nProviderProps | UrlI18nProviderProps;

export function I18nProvider(props: I18nProviderProps) {
  if (props.mode === "url" && !props.initialLocale) {
    throw new Error("I18nProvider requires initialLocale when mode is 'url'.");
  }

  const mode = props.mode || "legacy";
  const initialLocale = props.initialLocale || "ar";
  const { children } = props;

  const [legacyLocale, setLegacyLocale] = useState<Locale>(initialLocale)

  const currentLocale = mode === "url" ? initialLocale : legacyLocale
  const direction: Direction = currentLocale === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    if (mode === "legacy") {
      document.documentElement.lang = currentLocale
      document.documentElement.dir = direction
    }
  }, [currentLocale, direction, mode])

  const setLocale = useCallback((newLocale: Locale) => {
    if (mode === "url") {
      console.warn("setLocale is disabled in URL mode. Please use URL-based navigation.")
      return
    }
    setLegacyLocale(newLocale)
  }, [mode])

  const t = useCallback(
    (key: string): string => {
      return translations[currentLocale][key] || key
    },
    [currentLocale]
  )

  return (
    <I18nContext.Provider value={{ locale: currentLocale, direction, setLocale, t, mode }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
