export interface Remittance {
  id: string;
  fullName: string;
  senderName: string;
  amount: number;
  currency: string;
  date: string;
  branch: string;
}

// Mock data for unclaimed remittances
export const unclaimedRemittancesData: Remittance[] = [
  {
    id: "REM-1001",
    fullName: "مالك أمين عبدالله باعباد",
    senderName: "محمد صالح",
    amount: 500,
    currency: "SAR",
    date: "2024-05-10",
    branch: "الفرع الرئيسي - صنعاء",
  },
  {
    id: "REM-1002",
    fullName: "أحمد محمد علي صالح",
    senderName: "مؤسسة الأمل",
    amount: 1200,
    currency: "USD",
    date: "2024-05-15",
    branch: "فرع عدن",
  },
  {
    id: "REM-1003",
    fullName: "مالك أمين عبدالله باعباد",
    senderName: "عمر باوزير",
    amount: 3000,
    currency: "SAR",
    date: "2024-06-01",
    branch: "فرع المكلا",
  },
  {
    id: "REM-1004",
    fullName: "فاطمة أحمد سالم بكر",
    senderName: "سالم بكر",
    amount: 150,
    currency: "USD",
    date: "2024-06-12",
    branch: "فرع سيئون",
  },
  {
    id: "REM-1005",
    fullName: "مالك أمين عبدالله باعباد",
    senderName: "صالح محمد",
    amount: 200,
    currency: "SAR",
    date: "2024-06-20",
    branch: "الفرع الرئيسي - صنعاء",
  }
];
