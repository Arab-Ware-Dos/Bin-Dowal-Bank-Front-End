import { redirect } from "next/navigation";

export default async function FaqsShortRoute({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/knowledge-center/faq`);
}
