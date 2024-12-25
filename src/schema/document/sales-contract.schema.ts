import { z } from "zod";
export const createSalesContractType = z.object({
    shipmentId: z.string().uuid(),
    type: z.string(),
    // docNumber: z.number(),
    docNumber: z.string(),
    fields: z.record(z.any()),
    schema: z.record(z.any()).optional(),
});

const fieldsSchema = z.object({
    buyer_name: z.string(),
    seller_name: z.string(),
    buyer_add: z.string(),
    seller_add: z.string(),
    date: z.string(),
    product: z.string(),
    amount: z.string(),
    means_of_payment: z.string(),
    cost: z.string(),
    invoice_amount_days: z.string(),
    balance_days: z.string(),
    amount_percent: z.string(),
    delivery_date: z.string(),
    state_name: z.string(),
    seller_signed: z.string(),
    seller_date: z.string(),
    seller_by: z.string(),
    buyer_signed: z.string(),
    buyer_date: z.string(),
    buyer_by: z.string(),
});

export const getSaleContractDocumentById = z.object({
    id: z.string(),
    type: z.string(),
    docNumber: z.number(),
    userId: z.string(),
    fields: fieldsSchema,
    schema: z.record(z.any()),
    shipmentId: z.string(),
});
export type CreateSalesContractType = z.TypeOf<typeof createSalesContractType>;
export type GetSaleContractDocumentByIdType = z.TypeOf<
    typeof getSaleContractDocumentById
>;
