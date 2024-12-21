import { z } from "zod";

export const lclBody = z.object({
  lcl_id: z.string().optional(),
  cost: z.number(),
  freight_id: z.string(),
});

export type LclBody = z.TypeOf<typeof lclBody>;
