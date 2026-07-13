const fs = require('fs');

const arStr = fs.readFileSync('i18n/dictionaries/ar.json', 'utf-8');
const enStr = fs.readFileSync('i18n/dictionaries/en.json', 'utf-8');
const ar = JSON.parse(arStr);
const en = JSON.parse(enStr);

const arKeys = Object.keys(ar);
const enKeys = Object.keys(en);

console.log("AR keys count:", arKeys.length);
console.log("EN keys count:", enKeys.length);

const ctxStr = fs.readFileSync('lib/i18n-context.tsx', 'utf-8');
const startIndex = ctxStr.indexOf('const translations');
const startBrace = ctxStr.indexOf('{', startIndex);
let braceCount = 0;
let endBrace = -1;

for (let i = startBrace; i < ctxStr.length; i++) {
  if (ctxStr[i] === '{') braceCount++;
  if (ctxStr[i] === '}') braceCount--;
  if (braceCount === 0) {
    endBrace = i;
    break;
  }
}

const objStr = ctxStr.slice(startBrace, endBrace + 1);
const translations = eval('(' + objStr + ')');

const ctxArKeys = Object.keys(translations.ar);
const ctxEnKeys = Object.keys(translations.en);

console.log("Ctx AR keys count:", ctxArKeys.length);
console.log("Ctx EN keys count:", ctxEnKeys.length);
