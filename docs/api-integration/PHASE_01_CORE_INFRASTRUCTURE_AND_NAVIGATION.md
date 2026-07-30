# 🚀 القسم الأول: خطة تنفيذ البنية التحتية وقائمة التنقل (Phase 1 Detailed Implementation Plan)

تُغطي هذه الوثيقة خطة التنفيذ المعتمدة والمفصلة لربط **القسم الأول (البنية التحتية وقائمة التنقل)** بنقطة الاتصال `GET /navigation`.

---

## 🎯 أهداف المرحلة
1. إعداد عميل الاتصال الموحد الموثوق لربط الـ API بالفرونت إند مع دعم الترويسات القياسية واللغة والتحقق من الأخطاء.
2. جلب القائمة التنقلية الهيكلية للموقع (Navigation Header & Footer) من الـ Backend ديناميكياً.
3. التوافق التام مع آلية البيانات الاحتياطية (Fallback) لضمان استقرار واجهة المستخدم وعدم توقف الموقع في حال انقطاع الـ API.

---

## 🛠️ الملفات المطلوبة وتغييرات الكود المحددة

### 1. طبقة الاتصال البرمجي والأنواع (API Client & Type System)

#### 📄 [NEW] `lib/api-client.ts`
- **الوصف:** العميل الرئيسي لإجراء طلبات الاتصال بـ Backend البنك.
- **المهام الرئيسية:**
  - القراءة التلقائية للعنوان الأساسي من `.env.local` (`NEXT_PUBLIC_API_BASE_URL`).
  - تزويد كل طلب بالترويسات الإلزامية: `Accept: application/json`, `Content-Type: application/json`.
  - جلب اللغة الحالية المحددة في الجلسة وتمريرها في `Accept-Language`.
  - معالجة الأخطاء السلسة واسترجاع رسائل الخطأ بدقة.

#### 📄 [NEW] `types/navigation.ts`
- **الوصف:** تعريف الواجهات البرمجية الخاصة بـ API التنقل (`GET /navigation`).
- **الهيكل المتبع:**
```typescript
export interface NavigationChildItem {
  id: number;
  title: string;
  subtitle?: string | null;
  url?: string | null;
  icon?: string | null;
  badge?: string | null;
  target?: string;
  order_index: number;
  children?: NavigationChildItem[];
}

export interface NavigationParentItem {
  id: number;
  title: string;
  subtitle?: string | null;
  url?: string | null;
  icon?: string | null;
  badge?: string | null;
  target?: string;
  order_index: number;
  children: NavigationChildItem[];
}

export interface NavigationSection {
  id: number;
  key: string;
  title: string;
  lang: string;
  order_index: number;
  items: NavigationParentItem[];
}
```

#### 📄 [NEW] `services/navigation-service.ts`
- **الوصف:** وحدة استدعاء بيانات التنقل واسترجاعها مع دعم آلية التراجع الاحتياطي (Fallback).
- **المهام:**
  - استدعاء `GET /navigation`.
  - في حالة النجاح: إرجاع كائنات `NavigationSection[]`.
  - في حالة الفشل أو الانقطاع: استخدام كائن البيانات الاحتياطية الثابتة وإظهار تنبيه مسجل في اللوج دون تعطيل واجهة المستخدم.

---

### 2. ربط المكونات الواجهية (Layout Integration)

#### 📄 [MODIFY] `components/layout/header.tsx`
- **الوصف:** مكون الهيدر العلوي والقوائم المنسدلة.
- **التعديلات:**
  - استبدال مصفوفة القوائم الثابتة بقوائم ديناميكية يتم جلبها عبر `navigation-service`.
  - ربط الروابط والتصنيفات والأيقونات بالحقول المرتجعة مع الاحتفاظ بالتصميم المميز والأيقونات الحالية.

#### 📄 [MODIFY] `components/layout/footer.tsx`
- **الوصف:** الفوتر السفلي للموقع.
- **التعديلات:**
  - ربط روابط الفوتر بأقسام التنقل المخصصة المرتجعة من الـ Backend لضمان التناسق التام.

---

## 🧪 خطة التحقق والاختبار (Verification Plan)

1. **فحص البناء والأنواع:**
   ```bash
   npx tsc --noEmit
   ```
2. **اختبار الاستجابة اللحظية:**
   - اختبار جلب القائمة من `http://localhost:8000/api/v1/navigation`.
3. **اختبار الأمان والسقوط الآمن (Fallback Verification):**
   - إيقاف سيرفر الـ Backend مؤقتاً والتحقق من فتح المكونات للبيانات الثابتة دون توقف الصفحة.
