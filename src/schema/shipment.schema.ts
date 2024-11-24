import { z } from "zod";

// Shipment Schema
export const Shipment = z.object({
  id: z.string().uuid(), // UUID validation for shipment ID
  shipmentType: z.string().min(1, "Shipment type is required."), // Non-empty string
  contractId: z.string().uuid(), // UUID validation for contract ID
});

// ShipmentResponse Schema
export const ShipmentResponse = z.object({
  message: z
    .string()
    .min(1, "Message is required."),
   
  data: Shipment, // Nested Shipment schema
});

// TypeScript Types
export type ShipmentType = z.TypeOf<typeof Shipment>;
export type ShipmentResponseType = z.TypeOf<typeof ShipmentResponse>;
