import { fetchAPI } from "@/lib/api-client";
import { SocialLinkItem, SocialLinksApiResponse } from "@/types/social-link";

export const FALLBACK_SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 1,
    platform: "facebook",
    name: "فيسبوك",
    name_ar: "فيسبوك",
    name_en: "Facebook",
    url: "https://www.facebook.com/bindowalbank",
    icon: "facebook",
    order_index: 1,
  },
  {
    id: 2,
    platform: "x",
    name: "إكس (تويتر)",
    name_ar: "إكس (تويتر)",
    name_en: "X (Twitter)",
    url: "https://x.com/bindowalbank",
    icon: "twitter",
    order_index: 2,
  },
  {
    id: 3,
    platform: "instagram",
    name: "إنستغرام",
    name_ar: "إنستغرام",
    name_en: "Instagram",
    url: "https://www.instagram.com/bindowalbank/",
    icon: "instagram",
    order_index: 3,
  },
  {
    id: 4,
    platform: "linkedin",
    name: "لينكد إن",
    name_ar: "لينكد إن",
    name_en: "LinkedIn",
    url: "https://www.linkedin.com/company/%E2%80%8Fbin-dowal-bank%E2%80%8F/posts/",
    icon: "linkedin",
    order_index: 4,
  },
  {
    id: 5,
    platform: "youtube",
    name: "يوتيوب",
    name_ar: "يوتيوب",
    name_en: "YouTube",
    url: "https://www.youtube.com/@bindowalbank",
    icon: "youtube",
    order_index: 5,
  },
  {
    id: 6,
    platform: "threads",
    name: "ثريدز",
    name_ar: "ثريدز",
    name_en: "Threads",
    url: "https://www.threads.com/@bindowalbank",
    icon: "threads",
    order_index: 6,
  },
  {
    id: 7,
    platform: "tiktok",
    name: "تيك توك",
    name_ar: "تيك توك",
    name_en: "TikTok",
    url: "https://www.tiktok.com/@bin.dowal.bank",
    icon: "tiktok",
    order_index: 7,
  },
];

export async function getSocialLinks(locale = "ar"): Promise<SocialLinkItem[]> {
  try {
    const res = await fetchAPI<SocialLinksApiResponse>("/social-links", {
      locale,
      next: { revalidate: 60 },
    });

    if (res?.data && Array.isArray(res.data)) {
      return res.data;
    }
    return [];
  } catch (error) {
    console.warn(
      "⚠️ [SocialLinksService] Using fallback social links:",
      error instanceof Error ? error.message : error
    );
    return FALLBACK_SOCIAL_LINKS;
  }
}
