export interface BankFormApiItem {
  id: number;
  title: string;
  title_ar: string;
  title_en?: string | null;
  file_url: string;
  file_size?: string | null;
  category?: string | null;
  order_index?: number;
  is_published?: boolean;
}

export interface FormsApiResponse {
  data: BankFormApiItem[];
}

export interface BankFormItem {
  id: string | number;
  title: {
    ar: string;
    en: string;
  };
  fileSize: string;
  fileType: string;
  fileUrl: string;
  category?: string;
}
