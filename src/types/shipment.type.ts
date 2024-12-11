import { z } from "zod";

export const ShipmentSchema = z.object({
  id: z.string().uuid(),
  shipmentType: z.enum(["AIR", "LAND", "FCL", "LCL"]),
  contractId: z.string().uuid(),
  tracking: z
    .object({
      status: z.string(),
      location: z.string(),
    })
    .optional(),
  contract: z
    .object({
      quotationId: z.string().uuid(),
      endDate: z.string(),
      quotation: z.object({
        quoteReqId: z.string().uuid(),
        totalPrice: z.number(),
        quotationReq: z.object({
          customerId: z.string().uuid(),
          customer: z.object({
            id: z.string().uuid(),
            name: z.string(),
          }),
          quoteReqDetails: z.object({
            destination: z.string(),
            origin: z.string(),
          }),
        }),
      }),
    })
    .optional(),
});

export type Shipment = z.infer<typeof ShipmentSchema>;
