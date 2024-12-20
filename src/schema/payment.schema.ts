import { z } from "zod";

export const CreatePaymentBody = z.object({
    invoiceId: z.string().uuid(),
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

  export const Pagination = z.object({
    currentPage: z.number().nullable(),
    records: z.number(),
    totalPages: z.number().nullable(),
    nextPage: z.number().nullable(),
    prevPage: z.number().nullable(),
  });
  
  export const PaymentData = z.object({
    pagination: Pagination,
    results: z.array(PaymentDetailsRes),
    totalRevenue: z.number(),
  });

export const PaymentRes = z.object({
  message: z.string(),
  data: PaymentData,
});

export type CreatePaymentType = z.TypeOf<typeof CreatePaymentBody>;
export type PaymentsResType = z.TypeOf<typeof PaymentRes>;
export type PaymentDetailsType = z.TypeOf<typeof PaymentDetailsRes>;