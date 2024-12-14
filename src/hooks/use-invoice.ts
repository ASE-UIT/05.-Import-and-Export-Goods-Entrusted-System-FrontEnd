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
import { toast } from 'react-hot-toast';


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
        toast.success("Invoice added successfully!");
        router.push("/invoices");
      },

      onError: (error: ErrorType) => {
        console.error("Error during create invoice:", error);
        toast.error("Failed to add invoice. Please try again!");
        throw error;
      },
    });
  },
  useGetInvoice(id: string | undefined) {
    return useQuery({
      queryKey: ["invoiceDetails", id],
      queryFn: async () => {
        try {
          const result = await invoiceAction.getInvoice();
          return result;
        } catch (error) {
          console.error("Error during get invoices:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useGetInvoiceDetail() {
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
        toast.success("Invoice updated successfully!");
        router.push("/invoices");
      },
      onError: (error: ErrorType) => {
        console.error("Error during update invoice:", error);
        toast.error("Failed to update invoice. Please try again!");
        throw error;
      },
    });
  },
};

export default useInvoice;