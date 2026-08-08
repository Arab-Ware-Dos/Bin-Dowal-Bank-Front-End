export const customerServiceFormAvailability = {
  complaints: false,
  serviceRequest: false,
  bankCardsRequest: false,
  contact: true
} as const;

export type CustomerServiceFormKey = keyof typeof customerServiceFormAvailability;
