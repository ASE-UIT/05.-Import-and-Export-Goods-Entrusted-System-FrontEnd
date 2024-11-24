import { z } from "zod";

export const CreateContractBody = z.object({
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  contractDate: z.string(),
  employeeId: z.string().uuid(),
  quotationId: z.string().uuid(),
});

export const UpdateContractBody = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  contractDate: z.string().optional(),
  status: z.string().optional(),
});

export const ContractDetailsRes = z.object({
  id: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  contractDate: z.string(),
  employeeId: z.string(),
  quotationId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ContractsRes = z.object({
  message: z.string(),
  data: z.array(ContractDetailsRes),
});

export const QuotationDetailsRes = z.object({
  id: z.string().uuid(),
  totalPrice: z.number(),
  pickupDate: z.string(),
  deliveryDate: z.string(),
  quotationDate: z.string(),
  expiredDate: z.string(),
  status: z.string(),
  quoteReqId: z.string().uuid(),
  freightId: z.string().uuid(),
  employeeId: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const BookedQuotationsRes = z.array(QuotationDetailsRes);

export type UpdateContractType = z.TypeOf<typeof UpdateContractBody>;
export type CreateContractType = z.TypeOf<typeof CreateContractBody>;
export type ContractsResType = z.TypeOf<typeof ContractsRes>;
export type ContractDetailsType = z.TypeOf<typeof ContractDetailsRes>;
export type BookedQuotationsType = z.TypeOf<typeof BookedQuotationsRes>;