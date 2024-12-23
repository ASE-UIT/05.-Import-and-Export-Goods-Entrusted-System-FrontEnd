import { z } from "zod";

const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  fee: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Service = z.infer<typeof ServiceSchema>;
