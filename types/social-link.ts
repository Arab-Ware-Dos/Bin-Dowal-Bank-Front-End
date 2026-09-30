export interface SocialLinkItem {
  id: number | string;
  platform: string;
  name: string;
  name_ar?: string;
  name_en?: string;
  url: string;
  icon?: string | null;
  order_index?: number;
  is_active?: boolean;
}

export interface SocialLinksApiResponse {
  data: SocialLinkItem[];
  links?: Record<string, string>;
}
