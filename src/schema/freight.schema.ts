import { FREIGHT_TYPE, WEEKDAY } from "@/configs/enum";
import { z } from "zod";

export const freightBody = z.object({
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
});
export type CreateFreightBody = z.TypeOf<typeof freightBody>;
export type UpdateFreightBody = z.TypeOf<
  ReturnType<typeof freightBody.partial>
>;
