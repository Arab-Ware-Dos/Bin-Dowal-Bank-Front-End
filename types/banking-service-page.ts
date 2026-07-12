export type LocalizedText = {
  ar: string;
  en: string;
};

export type ServiceTextBlock = {
  title: LocalizedText;
  subtitle?: LocalizedText;
  description?: LocalizedText;
};

export type ServiceFeatureCard = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon?: string;
};

export type ServiceSimpleItem = {
  id: string;
  text: LocalizedText;
};

export type ServiceFaq = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export type ServiceTableRow = {
  id: string;
  label: LocalizedText;
  value: LocalizedText;
};

export type ServiceFeature = {
  id: string;
  text: LocalizedText;
};

export type ServiceStep = {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
};

export type ServicePageCustomSection = {
  id: string; // Used for DOM id and navigation
  componentId: string; // The ID of the component in the registry
  props?: Record<string, any>;
  navTitle?: LocalizedText; // If provided, it will appear in the sidebar navigation
};

export type ServicePageData = {
  slug: string;
  section: "personal" | "business" | "accounts" | "e-services";
  title: LocalizedText;
  subtitle: LocalizedText;
  heroImage: string;
  breadcrumbs: {
    labelKey?: string;
    label?: LocalizedText;
    href?: string;
  }[];
  tagline?: LocalizedText;
  primaryCta?: {
    label: LocalizedText;
    href: string;
  };
  
  // New Fields (Optional)
  customSections?: ServicePageCustomSection[];
  seoDescription?: LocalizedText;
  overview?: ServiceTextBlock;
  why?: ServiceTextBlock & { items?: ServiceSimpleItem[] };
  featureCards?: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    items: ServiceFeatureCard[];
  };
  audience?: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    items: ServiceSimpleItem[];
  };
  requirementsSection?: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    items: ServiceSimpleItem[];
    note?: LocalizedText;
    table?: ServiceTableRow[];
  };
  stepsSection?: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    steps: ServiceStep[];
    note?: LocalizedText;
  };
  ctaSection?: {
    title: LocalizedText;
    description: LocalizedText;
    primaryLabel: LocalizedText;
    primaryHref: string;
    secondaryLabel?: LocalizedText;
    secondaryHref?: string;
  };
  faqs?: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    items: ServiceFaq[];
  };

  // Old Fields (Kept for backward compatibility)
  details?: {
    title: LocalizedText;
    subtitle: LocalizedText;
    features: ServiceFeature[];
  };
  benefits?: {
    title: LocalizedText;
    subtitle: LocalizedText;
    items: ServiceFeature[];
  };
  howToGet?: {
    title: LocalizedText;
    subtitle: LocalizedText;
    requirements: ServiceFeature[];
    channels: ServiceFeature[];
  };
  subscribe?: {
    title: LocalizedText;
    subtitle: LocalizedText;
    steps: ServiceStep[];
  };
  nextStep?: {
    title: LocalizedText;
    description: LocalizedText;
  };
  relatedServicesKeys?: string[];
};
