import { z } from "zod";

// Enum for shipment types
export const shipmentTypeEnum = z.enum(["AIR", "LAND", "FCL", "LCL"]);

export const shipmentSchema = z.object({
  shipmentType: shipmentTypeEnum, // Shipment type, must be one of the enum values
  contractId: z.string().min(1, "Contract ID cannot be empty"), // Contract ID must be a non-empty string
  location: z.string().min(1, "Location cannot be empty"), // Location must be a non-empty string
});

export type createShipmentData = z.infer<typeof shipmentSchema>;
export type updateShipmentData =z.infer<
  ReturnType<typeof shipmentSchema.partial>
>;