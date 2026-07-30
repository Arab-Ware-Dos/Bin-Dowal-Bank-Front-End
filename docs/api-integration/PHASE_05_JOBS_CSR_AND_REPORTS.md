# 💼 القسم الخامس: خطة تنفيذ الوظائف، المسؤوليّة المجتمعية والتقارير السنوية (Phase 5 Detailed Sub-Plan)

تغطي هذه الوثيقة الخطة الفرعية التفصيلية لربط الموديولات المتبقية للبنك:
1. `GET /jobs` و `GET /jobs/{slug}` (الوظائف الشاغرة وتفاصيلها ومعلومات التقديم).
2. `GET /csr-initiatives` و `GET /csr-initiatives/{slug}` (مبادرات المسؤولية المجتمعية والحملات البيئية).
3. `GET /annual-reports` (التقارير المالية المعتمدة وروابط الـ PDF).

---

## 📋 الأهداف ونطاق العمل
- عرض الوظائف النشطة والفرص المتاحة وتفاصيل الشروط والمهام وإيميل التقديم المباشر.
- عرض مبادرات وتغطيات المسؤولية المجتمعية حسب التصنيفات (بيئة، صحة، مجتمع).
- استعراض التقارير السنوية والقوائم المالية المعتمدة للبنك وإتاحة تحميل ملفات الـ PDF بروابطها المباشرة وحجم الملف.

---

## 🛠️ الملفات المطلوبة

### 1. الأنواع والخدمات (Types & Services)
- 📄 `types/careers-csr-reports.ts`: تعريف `JobVacancy`, `CsrInitiative`, و `AnnualReport`.
- 📄 `services/careers-api.ts`: `fetchJobs()`, `fetchJobBySlug()`
- 📄 `services/csr-api.ts`: `fetchCsrInitiatives()`, `fetchCsrInitiativeBySlug()`
- 📄 `services/annual-reports-api.ts`: `fetchAnnualReports()`

### 2. المكونات وصفحات الواجهة (Pages & Components)
- 📄 `app/[locale]/careers/page.tsx` و `app/[locale]/careers/[slug]/page.tsx`: صفحة التوظيف والتقديم.
- 📄 `app/[locale]/about/social-responsibility/page.tsx` (أو المكون المخصص): صفحة المبادرات المجتمعية.
- 📄 `app/[locale]/about/annual-reports/page.tsx` (أو المكون المخصص): صفحة القوائم المعتمدة والتقارير السنوية.

---

## 🧪 خطة التحقق والاختبار
- التأكد من فتح روابط الـ PDF وتصفح الوظائف النشطة فقط قبل موعد انتهاء التقديم (`application_deadline`).
- فحص التكامل الكلي واستقرار كافة واجهات الموقع بعد إتمام جميع المراحل الخمس.
