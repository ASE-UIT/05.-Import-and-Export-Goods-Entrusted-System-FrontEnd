import { z } from "zod";

export const CreateServiceBody = z
  .object({
    name: z.string().min(1),
    shortName: z.string().min(1),
    fee: z.coerce.number().min(0).positive(),
  })
  .strict();

export const UpdateServiceBody = z
  .object({
    name: z.string().min(1),
    shortName: z.string().min(1),
    fee: z.coerce.number().min(0).positive(),
  })
  .strict();

export type CreateServiceBodyType = z.TypeOf<typeof CreateServiceBody>;
export type UpdateServiceBodyType = z.TypeOf<typeof UpdateServiceBody>;
