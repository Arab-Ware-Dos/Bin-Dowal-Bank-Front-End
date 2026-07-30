# 🚀 القسم الأول: خطة تنفيذ البنية التحتية وقائمة التنقل (Phase 1 Detailed Implementation Plan)

تُغطي هذه الوثيقة خطة التنفيذ المعتمدة والمفصلة لربط **القسم الأول (البنية التحتية وقائمة التنقل)** بنقطة الاتصال `GET /navigation`.

---

## 🎯 أهداف المرحلة
1. إعداد عميل الاتصال الموحد الموثوق لربط الـ API بالفرونت إند مع دعم الترويسات القياسية واللغة والتحقق من الأخطاء.
2. جلب القائمة التنقلية الهيكلية للموقع (Navigation Header & Footer) من الـ Backend ديناميكياً.
3. التوافق التام مع آلية البيانات الاحتياطية (Fallback) لضمان استقرار واجهة المستخدم وعدم توقف الموقع في حال انقطاع الـ API.
4. إعداد مكون العرض الديناميكي للأيقونات (`dynamic-icon.tsx`) لتحويل أسماء الأيقونات المرتجعة من الـ Backend (مثل `"FileCheck"`, `"Wallet"`, `"Building2"`) إلى أيقونات تفاعلية من مكتبة `lucide-react`.

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

#### 📄 [NEW] `components/ui/dynamic-icon.tsx`
- **الوصف:** مكون عام ورئيسي لتحويل النص المرتجع في حقل `"icon"` إلى مكون أيقونة Lucide.
- **آلية العمل:**
  ```tsx
  import * as Icons from 'lucide-react';
  import { LucideProps } from 'lucide-react';

  interface DynamicIconProps extends LucideProps {
    name?: string | null;
    fallback?: keyof typeof Icons;
  }

  export function DynamicIcon({ name, fallback = 'HelpCircle', ...props }: DynamicIconProps) {
    if (!name) return null;
    
    // البحث عن الأيقونة في مكتبة lucide-react برمز اسمها المرتجع من الـ API
    const IconComponent = (Icons as Record<string, React.ComponentType<LucideProps>>)[name]
      || (Icons as Record<string, React.ComponentType<LucideProps>>)[fallback]
      || Icons.HelpCircle;

    return <IconComponent {...props} />;
  }
  ```

#### 📄 [NEW] `types/navigation.ts`
- **الوصف:** تعريف الواجهات البرمجية الخاصة بـ API التنقل (`GET /navigation`).

#### 📄 [NEW] `services/navigation-service.ts`
- **الوصف:** وحدة استدعاء بيانات التنقل واسترجاعها مع دعم آلية التراجع الاحتياطي (Fallback).

---

### 2. ربط المكونات الواجهية (Layout Integration)

#### 📄 [MODIFY] `components/layout/header.tsx`
- استخدام المكون `<DynamicIcon name={item.icon} className="w-5 h-5" />` لعرض الأيقونات الديناميكية المرتجعة من الـ Backend مثل `FileCheck`, `Wallet`, `Building2`.

#### 📄 [MODIFY] `components/layout/footer.tsx`
- ربط روابط الفوتر بأقسام التنقل المخصصة المرتجعة من الـ Backend.

---

## 🧪 خطة التحقق والاختبار (Verification Plan)

1. **فحص البناء والأنواع:** `npx tsc --noEmit`
2. **اختبار عرض الأيقونات:** التأكد من ظهور أيقونة `FileCheck` الخاصة بنماذج البنك وأيقونة `Building2` وأيقونة `Wallet` وغيرها بشكل سليم وبدون أي خطأ في الصفحة.
