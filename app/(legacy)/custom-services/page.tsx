import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

export default function LegacyCustomServicesRedirect() {
  redirect(`/${defaultLocale}/custom-services`);
}
