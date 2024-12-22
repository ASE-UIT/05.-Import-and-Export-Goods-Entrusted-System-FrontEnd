import { z } from "zod";

export const airFreightBody = z.object({
  price_0K: z.number(),
  price_45K: z.number(),
  price_100K: z.number(),
  price_300K: z.number(),
  price_500K: z.number(),
  freight_id: z.string(),
});

export type AirFreightBody = z.TypeOf<typeof airFreightBody>;
