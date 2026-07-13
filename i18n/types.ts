import arDictionary from "./dictionaries/ar.json";

export type DictionaryKey = keyof typeof arDictionary;

export type Dictionary = Record<DictionaryKey, string>;
