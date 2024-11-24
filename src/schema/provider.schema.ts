import { z } from "zod";

export const providerSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  email: z.string().email(),
  phone: z.string().min(1, "Phone Number cannot be empty"),
  address: z.string().min(1, "Address cannot be empty"),
  country: z.string().min(1, "Country cannot be empty"),
  contactRepId: z.string().min(1, "Contact Rep cannot be empty"),
});

export type createProviderData = z.infer<typeof providerSchema>;
export type updateProviderData = z.infer<
  ReturnType<typeof providerSchema.partial>
>;
