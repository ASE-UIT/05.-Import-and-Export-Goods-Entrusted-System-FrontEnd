import { z } from "zod";

// Enum for shipment types
export const shipmentTypeEnum = z.enum(["AIR", "LAND", "LCL", "FCL" ]);
export const shipmentStatusEnum = z.enum([
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
  "ON_HOLD"
]);


export const shipmentSchema = z.object({
  shipmentType: shipmentTypeEnum, // Shipment type, must be one of the enum values
  contractId: z.string().min(1, "Contract ID cannot be empty"), // Contract ID must be a non-empty string
  location: z.string().min(1, "Location cannot be empty"), // Location must be a non-empty string
  status: shipmentStatusEnum
  
});

export type createShipmentData = z.infer<typeof shipmentSchema>;
export type updateShipmentData =z.infer<
  ReturnType<typeof shipmentSchema.partial>
>;