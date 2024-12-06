import { z } from "zod";

export const ShipmentTrackingSchema = z.object({
  id: z.string().uuid(),
  status: z.enum([
    "PENDING",
    "DOCUMENT_VERIFICATION",
    "CUSTOMS_CLEARANCE_PENDING",
    "CUSTOMS_CLEARED",
    "PROCESSING_AT_ORIGIN_PORT",
    "LOADED_ON_VESSEL",
    "IN_TRANSIT",
    "ARRIVE_AT_DESTINATION_PORT",
    "CUSTOMS_CLEARANCE_AT_DESTINATION",
    "PROCESSING_AT_DESTINATION_WAREHOUSE",
    "DELIVERED",
    "OUT_FOR_DELIVERY",
    "FAILED_DELIVERY_ATTEMPT",
    "HELD_AT_CUSTOMS",
    "RETURNED_TO_SENDER",
    "ON_HOLD",
  ]),
  location: z.string(),
  shipmentId: z.string().uuid(),
});

export type ShipmentTracking = z.infer<typeof ShipmentTrackingSchema>;
