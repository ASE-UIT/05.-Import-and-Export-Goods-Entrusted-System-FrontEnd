// import z from "zod";

// export const contactRepSchema = z.object({
//   name: z.string().min(1, "Name cannot be empty"),
//   email: z.string().email(),
//   phone: z.string().min(1, "Phone Number cannot be empty"),
// });

// export type createContactRepData = z.infer<typeof contactRepSchema>;
// export type updateContactRepData = z.infer<
//   ReturnType<typeof contactRepSchema.partial>
// >;

import { z } from "zod";

export const ContactRepRes = z.object({
  message: z.string(),
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      phone: z.string(),
    })
  ),
});

export const ContactRepBody = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email().min(1, "Email is required"),
});

export type ContactRepResType = z.TypeOf<typeof ContactRepRes>;
export type ContactRepBodyType = z.TypeOf<typeof ContactRepBody>;