import { z } from "zod";
export const createDocumentType = z
  .object({
    shipmentId: z.string().uuid(),
    type: z.string(),
    docNumber: z.number(),
    fields : z.record(z.any()),
    schema : z.record(z.any()).optional(),
  });
  export type CreateDocumentType = z.TypeOf<typeof createDocumentType>;