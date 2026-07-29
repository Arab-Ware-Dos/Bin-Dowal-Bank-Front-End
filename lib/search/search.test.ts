import test from "node:test";
import assert from "node:assert";
import { normalizeSearchText } from "./normalize-search-text";
import { calculateSearchScore } from "./calculate-search-score";

test("Normalize Search Text", async (t) => {
  await t.test("Normalizes Arabic alef", () => {
    assert.strictEqual(normalizeSearchText("أإآا"), "اااا");
  });

  await t.test("Removes diacritics and tatweel", () => {
    assert.strictEqual(normalizeSearchText("اَلْتَّمْوِيل"), "التمويل");
    assert.strictEqual(normalizeSearchText("التـمـويـل"), "التمويل");
  });

  await t.test("Unifies Alef Maksura with Ya", () => {
    assert.strictEqual(normalizeSearchText("هدى"), "هدي");
    assert.strictEqual(normalizeSearchText("يحيى"), "يحيي");
  });

  await t.test("Handles Hamza variants correctly", () => {
    // We unified [ؤئء] to ء to avoid "شؤون" vs "شئون" mismatches
    assert.strictEqual(normalizeSearchText("شئون"), "شءون");
    assert.strictEqual(normalizeSearchText("شؤون"), "شءون");
    assert.strictEqual(normalizeSearchText("رؤية"), "رءية");
    assert.strictEqual(normalizeSearchText("مسؤول"), "مسءول");
  });

  await t.test("Does NOT unify Ta Marbuta and Ha", () => {
    assert.notStrictEqual(normalizeSearchText("مدرسة"), normalizeSearchText("مدرسه"));
  });

  await t.test("Lowercases English and trims spaces", () => {
    assert.strictEqual(normalizeSearchText("  FiNaNcE  "), "finance");
    assert.strictEqual(normalizeSearchText("a   b"), "a b");
  });
});

test("Calculate Search Score", async (t) => {
  await t.test("Exact title match returns 100", () => {
    assert.strictEqual(calculateSearchScore("تمويل الأفراد", "تمويل الأفراد", "وصف"), 100);
    assert.strictEqual(calculateSearchScore("Finance", "finance", "desc"), 100); // case insensitive
    assert.strictEqual(calculateSearchScore("تمويل الافراد", "تمويل الأفراد", "وصف"), 100); // alef normalized
  });

  await t.test("Title starts with query returns 80", () => {
    assert.strictEqual(calculateSearchScore("تمويل", "تمويل الأفراد", "وصف"), 80);
  });

  await t.test("Title contains query returns 60", () => {
    assert.strictEqual(calculateSearchScore("الأفراد", "تمويل الأفراد الاسلامي", "وصف"), 60);
  });

  await t.test("Scores multiple words coverage", () => {
    const scoreFull = calculateSearchScore("تمويل الأفراد", "تمويل الأفراد الاسلامي", "وصف");
    const scorePartial = calculateSearchScore("تمويل الشركات", "تمويل الأفراد الاسلامي", "وصف");
    assert.ok(scoreFull > scorePartial, "Full coverage should score higher than partial");
  });

  await t.test("Scores description matches", () => {
    const scoreWithDescMatch = calculateSearchScore("إسلامي", "تمويل", "تمويل إسلامي متوافق");
    const scoreWithout = calculateSearchScore("إسلامي", "تمويل", "تمويل عادي");
    assert.ok(scoreWithDescMatch > scoreWithout, "Match in description increases score");
  });
});
