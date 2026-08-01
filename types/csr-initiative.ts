export type CsrCategory = "environment" | "social" | "disability" | "health";

export type CsrStatus = "completed" | "ongoing" | "seasonal";

export interface CsrInitiative {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  briefAr: string;
  briefEn: string;
  contentAr: string;
  contentEn: string;
  imageUrl: string;
  category: CsrCategory;
  status: CsrStatus;
  year: number;
  publishedAt?: string;
  featured?: boolean;
}

export interface CsrInitiativeDetail extends CsrInitiative {}