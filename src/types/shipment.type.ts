import { z } from "zod";

export const ShipmentSchema = z.object({
  id: z.string().uuid(),
  shipmentType: z.enum(["AIR", "LAND", "FCL", "LCL"]),
  contractId: z.string().uuid(),
});

export type Shipment = z.infer<typeof ShipmentSchema>;
