import packingListAction from "@/apis/document/packingList.api";
import * as docAction from "@/apis/document/document.api";
import { toast } from "@/hooks/use-toast";
import { CreateDocumentType } from "@/schema/document/packinglist.schema";
import { ErrorType } from "@/types/error.type";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import commericialInvoiceAction from "@/apis/document/commercial-invoice.api";

const useCommercialInvoice = {
  useGetDocument(userId?: string, type?: string) {
    return useQuery({
      queryKey: ["documents"],
      queryFn: () => commericialInvoiceAction.getDocument(userId, type),
    });
  },
  useGetDocumentById(id: string) {
    return useQuery({
      queryKey: ["documents", id],
      queryFn: () => commericialInvoiceAction.getDocumentById(id),
    });
  },

  useCreateDocument(router: ReturnType<typeof useRouter>) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createDocumentBody: CreateDocumentType) =>
        packingListAction.createDocument(createDocumentBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["document"],
        });
        toast({
          title: "Create success",
          description: "Document created successfully",
          duration: 10000,
        });
        router.push("/quote-request");
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
};

export default useCommercialInvoice;

