import { z } from "zod";

export const airWayBillSchema = z.object({
  shipperName: z.string(),
  shipperAddress: z.string(),
  consigneeName: z.string(),
  consigneeAddress: z.string(),
  flightNumber: z.string(),
  flightDate: z.string(),
  trackingNumber: z.string(),
  numberOfPieces: z.number(),
  grossWeight: z.number(),
  declaredValue: z.string(),
  goodsDescription: z.string(),
  signedDate: z.string(),
});

export const createDocumentSchema = z.object({
  shipmentId: z.string(),
  type: z.string(),
  docNumber: z.number(),
  fields: z.record(z.string()),
  schema: z.record(z.string()),
});

export const updateDocumentSchema = z.object({
  type: z.string(),
  docNumber: z.number(),
  fields: z.record(z.string()),
  schema: z.record(z.string()),
});

export type airWayBillData = z.infer<typeof airWayBillSchema>;
export type createDocumentBody = z.infer<typeof createDocumentSchema>;
export type updateDocumentBody = z.infer<typeof updateDocumentSchema>;
