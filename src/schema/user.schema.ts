import { z } from "zod";

export const CreateUsersBody = z
  .object({
    username: z.string().min(1).max(16).describe("The user's username"),
    password: z
      .string()
      .min(8)
      .max(64)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must have at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    role: z
      .enum([
        "MANAGER",
        "ACCOUNTANT",
        "SALES",
        "CUSTOMER_SERVICE",
        "HUMAN_RESOURCES",
        "DOCUMENTATION",
      ])
      .describe("The user role. Cannot be ADMIN"),
    employeeId: z
      .string()
      .uuid()
      .describe("The employee ID associated with the user"),
  })
  .strict();

export const UpdatePasswordBody = z
  .object({
    oldPassword: z
      .string()
      .min(6, "Password must have at least 6 characters.")
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter.")
      .regex(/[a-z]/, "Password must contain at least 1 lower case letter.")
      .regex(/[0-9]/, "Password must contain at least 1 number.")
      .regex(
        /[#?!@$%^&*-]/,
        "Password must contain at least 1 special character."
      ),
    newPassword: z
      .string()
      .min(1)
      .max(64)
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter.")
      .regex(/[a-z]/, "Password must contain at least 1 lower case letter.")
      .regex(/[0-9]/, "Password must contain at least 1 number.")
      .regex(
        /[#?!@$%^&*-]/,
        "Password must contain at least 1 special character."
      ),
  })
  .strict();

export type CreateUsersBodyType = z.infer<typeof CreateUsersBody>;
export type UpdatePasswordBodyType = z.infer<typeof UpdatePasswordBody>;
