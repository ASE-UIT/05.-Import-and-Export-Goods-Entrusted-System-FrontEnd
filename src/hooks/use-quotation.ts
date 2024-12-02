import quotationAction from "@/apis/quotation.api";
import {
  CreateQuotationType,
  UpdateQuotationType,
} from "@/schema/quotation.schema";
import { ErrorType } from "@/types/error.type";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useQuotation = {
    useCreateQuotation(router: ReturnType<typeof useRouter>) {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: (createQuotationBody: CreateQuotationType) =>
          quotationAction.createQuotation(createQuotationBody),
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["quotations"],
          });
          router.push("/quotation");
        },
        onError: (error: ErrorType) => {
          console.error("Error during create quotation:", error);
          throw error;
        },
      });
    },
    useGetQuotations() {
        return useQuery({
          queryKey: ["quotations"],
          queryFn: async () => {
            try {
              const result = await quotationAction.getQuotations();
              return result;
            } catch (error) {
              console.error("Error during get quotation:", error);
              throw error;
            }
          },
          retry: 0,
        });
    },
    useGetBookedQuoteRequest() {
        return useQuery({
          queryKey: ["bookedQuoteRequest"],
          queryFn: async () => {
            try {
              const result = await quotationAction.getBookedQuoteRequest();
              return result;
            } catch (error) {
              console.error("Error during get quotation:", error);
              throw error;
            }
          },
          retry: 0,
        });
    },
    useGetQuotationDetails(id: string | undefined) {
        return useQuery({
          queryKey: ["quotationDetails", id],
          queryFn: async () => {
            try {
              const result = await quotationAction.getQuotationDetails(id);
              return result;
            } catch (error) {
              console.error("Error during get quotation:", error);
              throw error;
            }
          },
          retry: 0,
        });
    },
    useUpdateQuotation(
        id: string | undefined,
        router: ReturnType<typeof useRouter>
      ) {
        const queryClient = useQueryClient();
        return useMutation({
          mutationFn: (updateQuotationBody: Partial<UpdateQuotationType>) =>
            quotationAction.updateQuotation(id, updateQuotationBody),
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["quotationDetails", id],
            });
            router.push("/quotation");
          },
          onError: (error: ErrorType) => {
            console.error("Error during update quotation:", error);
            throw error;
          },
        });
    },
};

export default useQuotation;