import { localTransfersService } from "./local-transfers";
import { internationalTransfersService } from "./international-transfers";
import { fastMoneyTransfersService } from "./fast-money-transfers";
import type { PersonalTransferService } from "@/types/personal-transfer-service";
import type { PersonalCoreTransferSlug } from "@/lib/personal-core-transfer-routes";

export const coreTransferServicesData = {
  "local-transfers": localTransfersService,
  "international-transfers": internationalTransfersService,
  "fast-money-transfers": fastMoneyTransfersService,
} satisfies Record<PersonalCoreTransferSlug, PersonalTransferService>;

export function getPersonalCoreTransferService(
  slug: PersonalCoreTransferSlug,
): PersonalTransferService {
  return coreTransferServicesData[slug];
}
