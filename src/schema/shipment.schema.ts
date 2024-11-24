import { z } from "zod";

// Enum for shipment types
export const shipmentTypeEnum = z.enum(["Air Freight", "Land Freight", "Sea Freight"]);
export const shipmentStatusEnum = z.enum(["Pending" ,
  "Document Verification" ,
  "Customs Clearance Pending" ,
  "Customs Cleared" ,
  "Processing at Origin Port" ,
  "Loaded on Vessel" ,
  "In Transit" ,
  "Arrive at Destination Port" ,
  "Customs Clearance at Destination" ,
  "Processing at Destination Warehouse" ,
  "Delivered" ,
  "Out for Delivery" ,
  "Failed Delivery Attempt" ,
  "Held at Customs" ,
  "Returned to Sender" ,
  "On Hold"
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