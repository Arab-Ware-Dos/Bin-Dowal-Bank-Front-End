import fs from 'fs';
import path from 'path';

function validateDictionaries() {
  const arPath = path.resolve(__dirname, 'dictionaries', 'ar.json');
  const enPath = path.resolve(__dirname, 'dictionaries', 'en.json');

  if (!fs.existsSync(arPath) || !fs.existsSync(enPath)) {
    console.error("Dictionaries not found!");
    process.exit(1);
  }

  const ar = JSON.parse(fs.readFileSync(arPath, 'utf-8'));
  const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

  let missingInAr = 0;
  let missingInEn = 0;
  let extraInAr = 0; // Same as missingInEn logically, but let's just count them
  let extraInEn = 0; // Same as missingInAr logically
  let typeMismatches = 0;
  let emptyValues = 0;
  let hasErrors = false;

  function checkKeys(obj1: any, obj2: any, path: string, lang1: string, lang2: string) {
    if (typeof obj1 !== 'object' || obj1 === null) return;
    if (typeof obj2 !== 'object' || obj2 === null) return;

    for (const key of Object.keys(obj1)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (!(key in obj2)) {
        console.error(`Missing in ${lang2}: ${currentPath}`);
        if (lang2 === 'en') missingInEn++;
        if (lang2 === 'ar') missingInAr++;
        hasErrors = true;
      } else {
        const type1 = typeof obj1[key];
        const type2 = typeof obj2[key];
        
        if (type1 !== type2) {
          console.error(`Type mismatch: ${currentPath} (${lang1}: ${type1}, ${lang2}: ${type2})`);
          typeMismatches++;
          hasErrors = true;
        } else if (type1 === 'object' && obj1[key] !== null) {
          checkKeys(obj1[key], obj2[key], currentPath, lang1, lang2);
        } else if (obj1[key] === null || obj2[key] === null) {
          console.error(`Unexpected null value at: ${currentPath}`);
          hasErrors = true;
        } else if (obj1[key] === '' || obj2[key] === '') {
          emptyValues++;
        }
      }
    }
  }

  checkKeys(ar, en, "", "ar", "en");
  
  // Checking for extra keys in EN is the same as missing keys in AR
  // The first pass counted missingInEn. The second pass will count missingInAr (extraInEn).
  // But wait, the prompt wants both "Missing" and "Extra" but they are symmetric.
  // Missing in AR = Extra in EN. Missing in EN = Extra in AR.
  
  // Second pass: obj1=en, obj2=ar
  // If key in EN but not in AR -> Missing in AR
  checkKeys(en, ar, "", "en", "ar");
  
  // Calculate extras
  extraInAr = missingInEn;
  extraInEn = missingInAr;

  console.log(`Missing in ar: ${missingInAr}`);
  console.log(`Missing in en: ${missingInEn}`);
  console.log(`Extra in ar: ${extraInAr}`);
  console.log(`Extra in en: ${extraInEn}`);
  console.log(`Type mismatches: ${typeMismatches}`);
  console.log(`Empty values: ${emptyValues}`);

  if (hasErrors) {
    process.exit(1);
  }
}

validateDictionaries();
