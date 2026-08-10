export const customerServiceFormAvailability = {
  complaints: false,
  serviceRequest: false,
  bankCardsRequest: false,
  contact: false
} as const;

export type CustomerServiceFormKey = keyof typeof customerServiceFormAvailability;
