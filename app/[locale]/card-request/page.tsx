import { redirect } from "next/navigation";

export default async function CardRequestShortRoute({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/customer-service/bank-cards-request`);
}
