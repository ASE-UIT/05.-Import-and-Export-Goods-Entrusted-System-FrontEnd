import z from "zod";

export const contactRepSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  email: z.string().email(),
  phone: z.string().min(1, "Phone Number cannot be empty"),
});

export type createContactRepData = z.infer<typeof contactRepSchema>;
export type updateContactRepData = z.infer<
  ReturnType<typeof contactRepSchema.partial>
>;
