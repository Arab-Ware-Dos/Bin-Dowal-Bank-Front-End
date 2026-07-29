export function normalizeSearchText(value: string): string {
  if (!value) return "";
  return value
    .replace(/[أإآ]/g, "ا") // توحيد الألف
    .replace(/ى/g, "ي") // توحيد الألف المقصورة مع الياء
    .replace(/[ؤئء]/g, "ء") // توحيد أشكال الهمزة المتوسطة والمتطرفة لتجنب اختلاف (شئون/شؤون)
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "") // إزالة التشكيل
    .replace(/ـ/g, "") // إزالة التطويل
    .toLocaleLowerCase() // الأحرف الإنجليزية للحالة الصغيرة
    .replace(/\s+/g, " ") // دمج المسافات
    .trim();
}
