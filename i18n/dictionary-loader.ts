import type { Dictionary } from "./types";
import { isLocale } from "./config";

// We cast the imports to Dictionary to enforce the shape
const dictionaryLoaders = {
  ar: () =>
    import("./dictionaries/ar.json").then((module) => module.default as Dictionary),
  en: () =>
    import("./dictionaries/en.json").then((module) => module.default as Dictionary),
};

export async function loadDictionary(locale: string): Promise<Dictionary> {
  if (!isLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return dictionaryLoaders[locale]();
}
