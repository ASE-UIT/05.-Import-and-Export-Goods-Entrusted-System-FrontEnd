import paymentAction from "@/apis/payment.api";
import {
  CreatePaymentType,
} from "@/schema/payment.schema";
import { ErrorType } from "@/types/error.type";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePayment = {
  useCreatePayment(router: ReturnType<typeof useRouter>) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createPaymentBody: CreatePaymentType) =>
        paymentAction.createPayment(createPaymentBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["payments"],
        });
        router.push("/payment");
      },
      onError: (error: ErrorType) => {
        console.error("Error during create payment:", error);
        throw error;
      },
    });
  },
  useGetPayment(id: string | undefined) {
    return useQuery({
      queryKey: ["paymentDetails", id],
      queryFn: async () => {
        try {
          const result = await paymentAction.getPayment();
          return result;
        } catch (error) {
          console.error("Error during get payments:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useGetPaymentDetail() {
    return useQuery({
      queryKey: ["payments"],
      queryFn: async () => {
        try {
          const result = await paymentAction.getPayment();
          return result;
        } catch (error) {
          console.error("Error during get payment:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },
};

export default usePayment;