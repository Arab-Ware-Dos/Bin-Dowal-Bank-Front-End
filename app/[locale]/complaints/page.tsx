import { redirect } from "next/navigation";

export default async function ComplaintsShortRoute({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/customer-service/complaints`);
}
