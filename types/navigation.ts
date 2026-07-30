export interface NavigationItem {
  id: number;
  title: string;
  subtitle?: string | null;
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
  lang: string;
  order_index: number;
  items: NavigationItem[];
}

export interface NavigationApiResponse {
  data: NavigationSection[];
}
