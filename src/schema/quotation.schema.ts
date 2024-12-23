import { z } from "zod";

export const CreateQuotationBody = z.object({
  quoteReqId: z.string().uuid(),
  employeeId: z.string().uuid(),
  freightId: z.string().uuid(),
  pickupDate: z.string(),
  deliveryDate: z.string(),
  quotationDate: z.string(),
  expiredDate: z.string(),
  serviceId: z.array(z.string()).nullable(),
});

export const UpdateQuotationBody = z.object({
  pickupDate: z.string().optional(),
  deliveryDate: z.string().optional(),
  quotationDate: z.string().optional(),
  expiredDate: z.string().optional(),
  status: z.string().optional(),
});

export const QuotationDetailsRes = z.object({
  id: z.string(),
  totalPrice: z.string(),
  pickupDate: z.date(),
  deliveryDate: z.date(),
  quotationDate: z.date(),
  expiredDate: z.date(),
  status: z.string(),
  quoteReqId: z.string(),
  freightId: z.string(),
  employeeId: z.string(),
  userId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const QuotationsRes = z.object({
  message: z.string(),
  data: z.array(QuotationDetailsRes),
});

export const QuoteRequestDetailsRes = z.object({
  id: z.string().uuid(),
  requestDate: z.date(),
  status: z.string(),
  customerId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const FreightDetailsRes = z.object({
  id: z.string().uuid(),
  freightType: z.string(),
  origin: z.string(),
  destination: z.string(),
  transitTime: z.number(),
  additionFee: z.number(),
  validFrom: z.date(),
  validUntil: z.date(),
  addition_fee_breakdown: z.string(),
  schedule: z.string(),
  providerId: z.string().uuid(),
});

export const FreightDetailRes = z.object({
  message: z.string(),
  data: z.object({
    results: z.array(FreightDetailsRes),
  }),
});

export const BookedQuoteRequestRes = z.array(QuoteRequestDetailsRes);

export type UpdateQuotationType = z.TypeOf<typeof UpdateQuotationBody>;
export type CreateQuotationType = z.TypeOf<typeof CreateQuotationBody>;
export type QuotationResType = QuotationDetailsType[];
export type QuotationDetailsType = z.TypeOf<typeof QuotationDetailsRes>;
export type BookedQuoteRequestType = z.TypeOf<typeof BookedQuoteRequestRes>;
export type FreightDetailResType = z.TypeOf<typeof FreightDetailRes>;
