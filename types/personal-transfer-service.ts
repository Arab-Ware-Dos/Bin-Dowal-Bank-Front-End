import type { PersonalCoreTransferSlug } from "@/lib/personal-core-transfer-routes";

export type LocalizedText = {
  ar: string;
  en: string;
};

export type TransferIconKey =
  | "send"
  | "globe"
  | "wallet"
  | "building"
  | "shield"
  | "clock"
  | "zap"
  | "smartphone"
  | "scan-line"
  | "clock3"
  | "bell-ring"
  | "map-pin"
  | "landmark"
  | "arrow-left-right"
  | "file-check";

export type TransferFeature = {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  iconKey?: TransferIconKey;
};

export type TransferTab = {
  id: string;
  label: LocalizedText;
  title?: LocalizedText;
  description?: LocalizedText;
  items?: TransferFeature[];
};

export type TransferStep = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type TransferFaq = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export type PersonalTransferService = {
  slug: PersonalCoreTransferSlug;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  hero?: {
    image?: string;
    eyebrow?: LocalizedText;
  };
  labels?: {
    channels?: LocalizedText;
    requirements?: LocalizedText;
    steps?: LocalizedText;
    faqs?: LocalizedText;
  };
  overview?: LocalizedText;
  features?: TransferFeature[];
  channels?: TransferTab[];
  benefits?: LocalizedText[];
  requirements?: TransferFeature[];
  steps?: TransferStep[];
  faqs?: TransferFaq[];
  cta: {
    label: LocalizedText;
    href: string;
  };
  relatedServicesKeys?: string[];
  metadata: {
    title: LocalizedText;
    description: LocalizedText;
  };
};
