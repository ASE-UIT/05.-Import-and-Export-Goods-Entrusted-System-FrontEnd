import { z } from "zod";
export const createDocumentType = z
  .object({
    shipmentId: z.string().uuid(),
    type: z.string(),
    docNumber: z.string(),
    fields : z.record(z.any()),
    schema : z.record(z.any()).optional(),
  });
  const fieldsSchema = z.object({
  departmentName: z.string(),
  accountNo: z.string(),
  date: z.string(),
  shippingDate: z.string(),
  sentTo: z.string(),
  fromTo: z.string(),
  shippingCo: z.string(),
  rows: z.array(
    z.object({
      qty: z.string(),
      description: z.string(),
      weight: z.string(),
      productNumber: z.string(),
    })
  ),
  signature: z.string(),
  instructions: z.string().optional(),
});
  export const getPackingListDocumentById = z.object({
  id: z.string(),
  type: z.string(),
  docNumber: z.string(),
  userId: z.string(),
  fields: fieldsSchema, 
  schema: z.record(z.any()),
  shipmentId: z.string(),
});
  export type CreateDocumentType = z.TypeOf<typeof createDocumentType>;
    export type GetPackingListDocumentByIdType = z.TypeOf<typeof getPackingListDocumentById>;