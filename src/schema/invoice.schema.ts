import { z } from "zod";

export const CreateInvoiceBody = z.object({
    contractId: z.string().uuid(),
    employeeId: z.string().uuid(),
    expiredDate: z.date(),
    taxAmount: z.string(),
    totalAmount: z.string(),
});

export const UpdateInvoiceBody = z.object({
    status: z.string(),
});

export const InvoiceDetailsRes = z.object({
    id: z.string(),
    contractId: z.string().uuid(),
    employeeId: z.string().uuid(),
    invoiceDate: z.date(),
    paidDate: z.string(),
    expiredDate: z.date(),
    status: z.string(),
    taxAmount: z.string(),
    totalAmount: z.string(),
    paidAmount: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const ContractDetailsRes = z.object({
    id: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    status: z.string(),
    contractDate: z.date(),
    employeeId: z.string(),
    quotationId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });

export const InvoiceRes = z.object({
  message: z.string(),
  data: z.array(InvoiceDetailsRes),
});

export const ContractDetailRes = z.array(ContractDetailsRes); // Array

export type UpdateInvoiceType = z.TypeOf<typeof UpdateInvoiceBody>;
export type CreateInvoiceType = z.TypeOf<typeof CreateInvoiceBody>;
export type InvoicesResType = z.TypeOf<typeof InvoiceRes>;
export type InvoiceDetailsType = z.TypeOf<typeof InvoiceDetailsRes>;
export type ContractDetailResType = z.TypeOf<typeof ContractDetailRes>; // Array
