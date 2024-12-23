import { ErrorType } from "@/types/error.type";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";
import { CreateDocumentType } from "@/schema/document.schema";
import documentAction from "@/apis/document.api";

const useDocument = {
  useCreateDocument(router: ReturnType<typeof useRouter>) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createDocumentBody: CreateDocumentType) =>
        documentAction.createDocument(createDocumentBody),
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
  useGetDocument(shipmentId?: string, type?: string, docNumber?: string) {
    return useQuery({
      queryKey: ["document", shipmentId],
      queryFn: () => {
        return documentAction.getDocument(shipmentId, type);
      },
    });
  },
  useGetDocumentById(id: string) {
    return useQuery({
      queryKey: ["document", id],
      queryFn: () => {
        return documentAction.getDocumentById(id);
      },
    });
  },
};
export default useDocument;
