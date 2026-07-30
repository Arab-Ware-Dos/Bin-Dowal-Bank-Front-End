# 💳 القسم الثاني: خطة تنفيذ الخدمات المصرفية وتفاصيلها (Phase 2 Detailed Sub-Plan)

تغطي هذه الوثيقة الخطة الفرعية التفصيلية لربط موديول **الخدمات والمنتجات المصرفية** بالواجهات البرمجية التالية:
1. `GET /services` (قائمة الخدمات وتصفية الفئات والبحث).
2. `GET /services/{slug}` (تفاصيل الخدمة الكاملة بالشروط والمميزات والأسئلة الشائعة والخطوات).

---

## 📋 الأهداف ونطاق العمل
- عرض قائمة الخدمات المصرفية ديناميكياً مع دعم البحث بالاسم والتصفية بالفئة (`Personal Banking`, `Business Banking`, `E-Services`).
- تحويل صفحة تفاصيل الخدمة الحالية إلى صفحة ديناميكية تقرأ بيانات الشروط، المميزات، خطوات التقديم، الفئات المستهدفة، والأسئلة الشائعة من خادم الـ API.

---

## 🛠️ الملفات المطلوبة

### 1. الأنواع والخدمات (Types & Services)
- 📄 `types/banking-service.ts`: تعريف `ServiceSummaryItem` و `ServiceDetailData`.
- 📄 `services/banking-services-api.ts`:
  - `fetchServices(params?: { search?: string; category?: string; page?: number })`
  - `fetchServiceBySlug(slug: string)`

### 2. المكونات وصفحات الواجهة (Pages & Components)
- 📄 `app/[locale]/services/page.tsx` (أو المكون المقابل): ربط التصفية والبحث واستعراض كروت الخدمات المرتجعة من `/services`.
- 📄 `app/[locale]/services/[slug]/page.tsx` (أو المكون المقابل): استدعاء `/services/{slug}` وعرض الأقسام التفصيلية (Hero, Why Us, Features, Conditions, Steps, FAQs, Related Services).

---

## 🧪 خطة التحقق والاختبار
- اختبار البحث باستعلامات مختلفة والتحقق من الترقيم (Pagination meta).
- التأكد من فتح تفاصيل أي خدمة عبر الـ Slug بشكل سلس وإرجاع أخطاء 404 عند تمرير Slug غير موجود.
