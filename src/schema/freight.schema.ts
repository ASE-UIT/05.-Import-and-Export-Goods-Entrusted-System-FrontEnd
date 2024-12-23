import { FREIGHT_TYPE, WEEKDAY } from "@/configs/enum";
import { z } from "zod";

export const freightBody = z.object({
  freightType: z.nativeEnum(FREIGHT_TYPE),
  origin: z.string(),
  destination: z.string(),
  transitTime: z.coerce.number(),
  additionFee: z.coerce.number(),
  validFrom: z.date(),
  validUntil: z.date(),
  addition_fee_breakdown: z.string(),
  schedule: z.nativeEnum(WEEKDAY),
  providerId: z.string().uuid(),
  provider: z
    .object({
      status: z.string(),
    })
    .optional(),
});

export type FreightBody = z.TypeOf<typeof freightBody>;
