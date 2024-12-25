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
    companyName:z.string(),
    address: z.string(),
    phone: z.string(),
    fax:  z.string(),
    businessLicense:  z.string(),
    issuedBy:  z.string(),
    issuedDate:  z.string(),
    importExport:  z.string(),
    purpose:  z.string(),
    port:  z.string(),
    transportConditions: z.string(),
    estimatedTime:  z.string(),
    executionTimes:  z.string(),
    expiryDate:  z.string(),
});
  export const getEximDocumentById = z.object({
  id: z.string(),
  type: z.string(),
  docNumber: z.string(),
  userId: z.string(),
  fields: fieldsSchema, 
  schema: z.record(z.any()),
  shipmentId: z.string(),
});
  export type CreateDocumentType = z.TypeOf<typeof createDocumentType>;
    export type GetEximDocumentByIdType = z.TypeOf<typeof getEximDocumentById>;