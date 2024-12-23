import { z } from "zod";

export const CreateLegalRepBody = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email().min(1, "Email is required"),
});

export const UpdateLegalRepBody = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

export type CreateLegalRepBodyType = z.TypeOf<typeof CreateLegalRepBody>;
export type UpdateLegalRepBodyType = z.TypeOf<typeof UpdateLegalRepBody>;
