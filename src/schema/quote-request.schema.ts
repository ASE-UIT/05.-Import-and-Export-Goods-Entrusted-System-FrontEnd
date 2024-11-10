import { z } from "zod";
export const createQuoteRequestBody = z
  .object({
    username: z.string().min(1),
    password: z
      .string()
      .min(6, "Password must have at least 6 characters.")
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter.")
      .regex(/[a-z]/, "Password must contain at least 1 lower case letter.")
      .regex(/[0-9]/, "Password must contain at least 1 number.")
      .regex(
        /[#?!@$%^&*-]/,
        "Password must contain at least 1 special character."
      ),
  })
  .strict();

export const getQuoteRequest = z.object({
    id: z.string().uuid(),
    requestDate: z.date(),
    status: z.string(),
    customerId: z.string().uuid(),
    createdAt: z.date(),
    updatedAt: z.date()
});
function mapToQuoteRequest(data: z.infer<typeof getQuoteRequest>): QuoteRequest {
  return {
    quote_request_id: parseInt(data.id),               // Assuming `id` is a stringified number
    customer_id: parseInt(data.customerId),             // Assuming `customerId` is a stringified number
    request_date: data.requestDate.toDateString(),       // Converting Date to string
    status: data.status,
    create_at: data.createdAt.toDateString(),            // Converting Date to string
    update_at: data.updatedAt.toDateString()             // Converting Date to string
  };
}

export type GetQuoteRequestType = z.TypeOf<typeof getQuoteRequest>;

export type CreateQuoteRequestType = z.TypeOf<typeof createQuoteRequestBody>;
export default mapToQuoteRequest;