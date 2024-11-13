import { z } from "zod";

export const landFreightBody = z.object({
  price_0_100: z.number(),
  price_100_200: z.number(),
  price_200_500: z.number(),
  price_500_1500: z.number(),
  price_1500_5000: z.number(),
  price_5000_10000: z.number(),
  price_10000: z.number(),
  freight_id: z.string(),
});

export type LandFreightType = z.TypeOf<typeof landFreightBody>;

export const allLandFreightBody = z.object({
  message: z.string(),
  data: z.array(landFreightBody),
});

export type AllLandFreightType = z.TypeOf<typeof allLandFreightBody>;
