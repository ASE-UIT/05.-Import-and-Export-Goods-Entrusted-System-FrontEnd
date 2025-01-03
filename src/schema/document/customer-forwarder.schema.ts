import { z } from "zod";
export const createCustomerForwarderDocumentType = z
  .object({
    shipmentId: z.string().uuid(),
    type: z.string(),
    docNumber: z.string(),
    fields : z.record(z.any()),
    schema : z.record(z.any()).optional(),
  })
  const fieldsSchema = z.object({
    date: z.string(),
    location: z.string(),
    A_name: z.string(),
    A_address: z.string(),
    A_phone: z.string(),
    A_account: z.string(),
    A_bank: z.string(),
    A_represent: z.string(),
    A_position: z.string(),
    A_authorNumber: z.string(),
    A_authorDate: z.string(),
    A_signPosition: z.string(),
    B_name: z.string(),
    B_address: z.string(),
    B_phone: z.string(),
    B_account: z.string(),
    B_bank: z.string(),
    B_represent: z.string(),
    B_position: z.string(),
    B_authorNumber: z.string(),
    B_authorDate: z.string(),
    B_signPosition: z.string(),
    sum: z.string(),
    vnd: z.string(),
    foreignCurrency: z.string(),
    rows: z.array(
        z.object({
          productName: z.string(),
          unitCalculation: z.string(),
          quantity: z.string(),
          price: z.string(),
          total: z.string(),
          note: z.string(),
        })
    ),
    shipmentId: z.string(),
    docNumber: z.string(),
    exportDate: z.string(),
    deliveryDate: z.string(),
    time: z.string(),
    day: z.string(),
    address: z.string(),
    bank: z.string(),
    item1: z.string(),
    item2: z.string(),
    item3: z.string(),
    price1: z.string(),
    price2: z.string(),
    price3: z.string(),
    fee: z.string(),
    method: z.string(),
    area: z.string(),
    overdueRate: z.string(),
    penaltyRate: z.string(),
    contractDate: z.string(),
    version: z.string(),
    perVersion: z.string(),
    signA: z.string(),
    signB: z.string(),
    place: z.string(),
  })

  export const getCustomerForwarderDocumentById = z.object({
    id: z.string(),
    type: z.string(),
    docNumber: z.string(),
    userId: z.string(),
    fields: fieldsSchema, 
    schema: z.record(z.any()),
    shipmentId: z.string(),
  });
  export type CreateCustomerForwarderDocumentType = z.TypeOf<typeof createCustomerForwarderDocumentType>;
  export type GetCustomerForwarderDocumentByIdType = z.TypeOf<typeof getCustomerForwarderDocumentById>;