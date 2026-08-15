export interface NavigationItem {
  id: number;
  title: string;
  title_ar?: string | null;
  title_en?: string | null;
  subtitle?: string | null;
  subtitle_ar?: string | null;
  subtitle_en?: string | null;
  url?: string | null;
  icon?: string | null;
  badge?: string | null;
  target?: string;
  order_index: number;
  children?: NavigationItem[];
}

export interface NavigationSection {
  id: number;
  key: string;
  title: string;
  title_ar?: string | null;
  title_en?: string | null;
  lang: string;
  url?: string | null;
  order_index: number;
  items?: NavigationItem[] | null;
}

export interface NavigationApiResponse {
  data: NavigationSection[];
}
