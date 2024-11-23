import { FREIGHT_TYPE, WEEKDAY } from "@/configs/enum";
import { z } from "zod";

export const freightBody = z
  .object({
    id: z.string().uuid(),
    freightType: z.nativeEnum(FREIGHT_TYPE),
    origin: z.string(),
    destination: z.string(),
    transitTime: z.coerce.number(),
    additionFee: z.coerce.number(),
    validFrom: z.coerce.date(),
    validUntil: z.coerce.date(),
    addition_fee_breakdown: z.string(),
    schedule: z.nativeEnum(WEEKDAY),
    providerId: z.string().uuid(),
  })
  .partial();
export type FreightType = z.TypeOf<typeof freightBody>;

export const allFreightType = z.array(freightBody);

export type AllFreightType = z.TypeOf<typeof allFreightType>;
