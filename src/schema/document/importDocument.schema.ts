import { z } from "zod";

//sample

export const importDocumentSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  email: z.string().email(),
  phone: z.string().min(1, "Phone Number cannot be empty"),
  address: z.string().min(1, "Address cannot be empty"),
  country: z.string().min(1, "Country cannot be empty"),
  contactRepId: z.string().min(1, "Contact Rep cannot be empty"),
});

export type importDocumentData = z.infer<typeof importDocumentSchema>;
