import invoiceAction from "@/apis/invoice.api";
import {
  CreateInvoiceType,
  UpdateInvoiceType,
} from "@/schema/invoice.schema";
import { ErrorType } from "@/types/error.type";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useInvoice = {
  useCreateInvoice(router: ReturnType<typeof useRouter>) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createInvoiceBody: CreateInvoiceType) =>
        invoiceAction.createInvoice(createInvoiceBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["invoices"],
        });
        router.push("/invoice");
      },
      onError: (error: ErrorType) => {
        console.error("Error during update invoice:", error);
        throw error;
      },
    });
  },
  useGetInvoice() {
    return useQuery({
      queryKey: ["invoices"],
      queryFn: async () => {
        try {
          const result = await invoiceAction.getInvoice();
          return result;
        } catch (error) {
          console.error("Error during get invoice:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useGetInvoiceDetails(id: string | undefined) {
    return useQuery({
      queryKey: ["invoiceDetails", id],
      queryFn: async () => {
        try {
          const result = await invoiceAction.getInvoiceDetails(id);
          return result;
        } catch (error) {
          console.error("Error during get invoice:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useGetContractDetails() {
    return useQuery({
      queryKey: ["contractDetails"],
      queryFn: async () => {
        try {
          const result = await invoiceAction.getContractDetail();
          return result; // Kết quả trả về là ContractDetailsType[]
        } catch (error) {
          console.error("Error during get contracts:", error);
          throw error;
        }
      },
      retry: 0,
    });
  }, 

  useUpdateInvoice(
    id: string | undefined,
    router: ReturnType<typeof useRouter>
  ): UseMutationResult<any, ErrorType, Partial<UpdateInvoiceType>> {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (updateInvoiceBody: Partial<UpdateInvoiceType>) =>
        invoiceAction.updateInvoice(id, updateInvoiceBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["invoiceDetails", id],
        });
        router.push("/invoice");
      },
      onError: (error: ErrorType) => {
        console.error("Error during update invoice:", error);
        throw error;
      },
    });
  },
};

export default useInvoice;