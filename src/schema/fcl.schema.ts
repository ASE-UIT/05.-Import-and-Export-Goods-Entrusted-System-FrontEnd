import { z } from "zod";

export const fclBody = z.object({
  fcl_id: z.string().optional(),
  price_20dc: z.number(),
  price_40dc: z.number(),
  price_40hc: z.number(),
  price_20rf: z.number(),
  price_40rf: z.number(),
  freight_id: z.string(),
});

export type FclBody = z.TypeOf<typeof fclBody>;
