import { z } from "zod";

export const CreateInvoiceBody = z.object({
    contractId: z.string().uuid(),
    employeeId: z.string().uuid(),
    invoiceDate: z.date(),
    paidDate: z.date(),
    expiredDate: z.date(),
    status: z.string(),
    tax: z.string(),
    totalAmount: z.string(),
});

export const UpdateInvoiceBody = z.object({
    contractId: z.string().uuid(),
    employeeId: z.string().uuid(),
    invoiceDate: z.date(),
    paidDate: z.date(),
    expiredDate: z.date(),
    status: z.string(),
    tax: z.string(),
    totalAmount: z.string(),
});

export const InvoiceDetailsRes = z.object({
    id: z.string(),
    contractId: z.string().uuid(),
    employeeId: z.string().uuid(),
    invoiceDate: z.date(),
    paidDate: z.date(),
    expiredDate: z.date(),
    status: z.string(),
    tax: z.string(),
    totalAmount: z.string(),
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

export const ContractDetailRes = z.array(ContractDetailsRes);
export type UpdateInvoiceType = z.TypeOf<typeof UpdateInvoiceBody>;
export type CreateInvoiceType = z.TypeOf<typeof CreateInvoiceBody>;
export type InvoicesResType = z.TypeOf<typeof InvoiceRes>;
export type InvoiceDetailsType = z.TypeOf<typeof InvoiceDetailsRes>;
export type ContractDetailsType = z.TypeOf<typeof ContractDetailRes>;