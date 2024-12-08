import { z } from "zod";

export const CreatePaymentBody = z.object({
    invoiceId: z.string().uuid(),
    status: z.string(),
    amountPaid: z.string(),
});

export const PaymentDetailsRes = z.object({
    id: z.string(),
    invoiceId: z.string().uuid(),
    status: z.string(),
    amountPaid: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const PaymentRes = z.object({
  message: z.string(),
  data: z.array(PaymentDetailsRes),
});

export type CreatePaymentType = z.TypeOf<typeof CreatePaymentBody>;
export type PaymentsResType = z.TypeOf<typeof PaymentRes>;
export type PaymentDetailsType = z.TypeOf<typeof PaymentDetailsRes>;