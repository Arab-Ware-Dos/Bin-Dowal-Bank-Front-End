export interface BankServiceApiFeature {
  title_ar?: string;
  title_en?: string;
  description_ar?: string;
  description_en?: string;
}

export interface BankServiceApiStep {
  title_ar?: string;
  title_en?: string;
  description_ar?: string;
  description_en?: string;
}

export interface BankServiceApiFaq {
  question_ar?: string;
  question_en?: string;
  answer_ar?: string;
  answer_en?: string;
}

export interface BankServiceApiSectionContent {
  id: number;
  type: "feature" | "step" | "faq";
  title?: string;
  title_ar?: string;
  title_en?: string;
  content?: string;
  content_ar?: string;
  content_en?: string;
  order_index?: number;
}

export interface BankServiceApiRelated {
  slug: string;
  name_ar?: string;
  name_en?: string;
  title_ar?: string;
  title_en?: string;
}

export interface BankServiceItemData {
  id: number;
  slug: string;
  title_ar: string;
  title_en: string;
  name_ar?: string;
  name_en?: string;
  page_name_ar?: string;
  page_name_en?: string;
  category_ar?: string;
  category_en?: string;
  summary_ar?: string;
  summary_en?: string;
  icon_config?: { type: 'icon' | 'image'; value: string } | null;
  icon?: { type: 'icon' | 'image'; value: string } | null;
  order_index?: number;
  meta_title?: string;
  meta_description?: string;
  hero_title?: string;
  hero_description?: string;
  about_title?: string;
  about_title_ar?: string;
  about_title_en?: string;
  about_content?: string;
  about_content_ar?: string;
  about_content_en?: string;
  why_title?: string;
  why_title_ar?: string;
  why_title_en?: string;
  why_description_ar?: string;
  why_description_en?: string;
  why_content?: Array<string | { text_ar?: string; text_en?: string; content_ar?: string; content_en?: string }> | null;
  target_audiences?: Array<string | { text_ar?: string; text_en?: string; content_ar?: string; content_en?: string }> | null;
  conditions?: Array<string | { text_ar?: string; text_en?: string; content_ar?: string; content_en?: string }> | null;
  conditions_title_ar?: string;
  conditions_title_en?: string;
  conditions_description_ar?: string;
  conditions_description_en?: string;
  steps_title_ar?: string;
  steps_title_en?: string;
  steps_description_ar?: string;
  steps_description_en?: string;
  features_title_ar?: string;
  features_title_en?: string;
  features_description_ar?: string;
  features_description_en?: string;
  pricing_table?: Array<{ label_ar?: string; label_en?: string; value_ar?: string; value_en?: string; currency_ar?: string; currency_en?: string; amount?: string }> | null;
  related_title_ar?: string;
  related_title_en?: string;
  related_description_ar?: string;
  related_description_en?: string;
  related_services_data?: any[] | null;
  features?: BankServiceApiFeature[];
  steps?: BankServiceApiStep[];
  faqs?: BankServiceApiFaq[];
  sections_content?: BankServiceApiSectionContent[];
  related_services?: BankServiceApiRelated[];
  is_active?: boolean;
}

export interface BankServiceSingleApiResponse {
  data: BankServiceItemData;
}

export interface BankServicesListApiResponse {
  data: BankServiceItemData[];
}
