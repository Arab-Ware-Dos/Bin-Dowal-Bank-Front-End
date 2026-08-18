import { fetchAPI } from "@/lib/api-client";
import { boardMembers as fallbackMembers, type BoardMember } from "@/data/board-of-directors";

export interface ApiBoardMember {
  id: string | number;
  slug?: string;
  category: "chairman" | "vice-chairman" | "member";
  name_ar: string;
  name_en?: string;
  title_ar: string;
  title_en?: string;
  initials?: string;
  avatar_path?: string | null;
  avatar_url?: string | null;
  message_ar?: string | null;
  message_en?: string | null;
  order_index?: number;
  is_active?: boolean;
}

export async function getBoardMembers(locale = "ar"): Promise<BoardMember[]> {
  try {
    const res = await fetchAPI<{ data: ApiBoardMember[] }>('/board-members', {
      locale,
      next: { revalidate: 60 },
    });

    if (res?.data && res.data.length > 0) {
      return res.data.map((m) => ({
        id: String(m.slug || m.id),
        order: m.order_index || 0,
        category: m.category,
        nameAr: m.name_ar,
        nameEn: m.name_en || m.name_ar,
        titleAr: m.title_ar,
        titleEn: m.title_en || m.title_ar,
        initials: m.initials || (m.name_ar ? m.name_ar.substring(0, 2) : "عض"),
        image: m.avatar_url || m.avatar_path || undefined,
        messageAr: m.message_ar || undefined,
        messageEn: m.message_en || undefined,
      }));
    }
  } catch (e) {
    console.warn("[BoardService] Falling back to static board members", e);
  }

  return fallbackMembers;
}
