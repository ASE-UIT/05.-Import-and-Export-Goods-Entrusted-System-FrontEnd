import { FREIGHT_TYPE, WEEKDAY } from "@/configs/enum";
import { z } from "zod";

export const freightBody = z.object({
  id: z.string().uuid(),
  freightType: z.nativeEnum(FREIGHT_TYPE),
  origin: z.string(),
  destination: z.string(),
  transitTime: z.number(),
  additionFee: z.number(),
  validFrom: z.coerce.date(),
  validUntil: z.coerce.date(),
  addition_fee_breakdown: z.string(),
  schedule: z.nativeEnum(WEEKDAY),
  providerId: z.string().uuid(),
});
export type FreightResponse = z.TypeOf<typeof freightBody>;

export const allFreightResponse = z.array(freightBody);

export type AllFreightResponse = z.TypeOf<typeof allFreightResponse>;
