import customerForwarderListAction from "@/apis/document/customer-forwarder.api";
import { CreateCustomerForwarderDocumentType } from "@/schema/document/customer-forwarder.schema";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


const useDocument = {
    useCreateCustomerForwarderDocument(router: ReturnType<typeof useRouter>) {
        const queryClient = useQueryClient();
        return useMutation({
          mutationFn: (createCustomerForwarderDocumentBody: CreateCustomerForwarderDocumentType) =>
            customerForwarderListAction.createCustomerForwarderDocument(createCustomerForwarderDocumentBody),
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["document"],
            });
            toast({
              title: "Create success",
              description: "Document created successfully",
              duration: 10000,
            });
            router.push("/document/contract/customer_forwarder");
          },
          onError: (error: ErrorType) => {
            console.error("Error during create:", error);
            toast({
              title: "Create failed",
              description: "An error occurred while creating document",
              variant: "destructive",
              duration: 5000,
            });
            throw error;
          },
        });
      },
      useGetCustomerForwarderListById(id: string) {
        return useQuery({
        queryKey: ["document", id],
        queryFn: async () => {
            try {
            const result = await customerForwarderListAction.getDocumentById(id);
            return result;
            } catch (error) {
            console.error("Error during get document:", error);
            throw error;
            }
        },
        retry: 0,
        });
    },
};
export default useDocument;