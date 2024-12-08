import { z } from "zod";

export const airFreightBody = z.object({
  price_0K: z.number(),
  price_45K: z.number(),
  price_100K: z.number(),
  price_300K: z.number(),
  price_500K: z.number(),
  freight_id: z.string(),
});

export type CreateAirFreightBody = z.TypeOf<typeof airFreightBody>;
export type UpdateAirFreightBody = z.TypeOf<
  ReturnType<typeof airFreightBody.partial>
>;
