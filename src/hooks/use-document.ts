import packingListAction from "@/apis/document/packingList.api";
import * as docAction from "@/apis/document/document.api";
import { toast } from "@/hooks/use-toast";
import { CreateDocumentType } from "@/schema/document/packinglist.schema";
import { ErrorType } from "@/types/error.type";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDocument = {
  useGetDocument(userId?: string, type?: string) {
    return useQuery({
      queryKey: ["documents"],
      queryFn: () => docAction.default.getDocument(userId, type),
    });
  },
  useGetAllDocument(type?: string) {
    return useQuery({
      queryKey: ["documents"],
      queryFn: () => docAction.default.getAllDocument(type),
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
        router.push("/document/packing-list");
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
  useGetPackingListDocumentById(id: string) {
        return useQuery({
        queryKey: ["document", id],
        queryFn: async () => {
            try {
            const result = await packingListAction.getDocumentById(id);
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
