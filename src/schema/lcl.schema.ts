import { z } from "zod";

export const LclBody = z.object({
  Lcl_id: z.string().optional(),
  cost: z.number(),
  freight_id: z.string(),
});

export type CreateLclBody = z.TypeOf<typeof LclBody>;
export type UpdateLclBody = z.TypeOf<ReturnType<typeof LclBody.partial>>;
