import packingListAction from "@/apis/document/packingList.api";
import forwarderProviderListAction from "@/apis/document/forwarderProvider.api";
import * as docAction from "@/apis/document/document.api";
import { toast } from "@/hooks/use-toast";
import { CreateDocumentType } from "@/schema/document/packinglist.schema";
import { ErrorType } from "@/types/error.type";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateForwarderType } from "@/schema/document/forwarderProvider.schema";

import eximAction from "@/apis/document/eximLicense.api";
import { CreateEximDocumentType } from "@/schema/document/im_ex-license.schema";

const useDocument = {
  // Dành cho packingList
  useGetDocument(userId?: string, type?: string) {
    return useQuery({
      queryKey: ["documents"],
      queryFn: () => docAction.default.getDocument(userId, type),
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

  // Dành cho packingList
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

  // Dành cho forwarderProvider
  useGetForwarderProviderListById(id: string) {
    return useQuery({
      queryKey: ["document", id],
      queryFn: async () => {
        try {
          const result = await forwarderProviderListAction.getDocumentById(id);
          return result;
        } catch (error) {
          console.error("Error during get forwarder provider document:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useCreateForwarder(router: ReturnType<typeof useRouter>) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createDocumentBody: CreateForwarderType) =>
        forwarderProviderListAction.createDocument(createDocumentBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["document"],
        });
        toast({
          title: "Create success",
          description: "Document created successfully",
          duration: 10000,
        });
        router.push("/document/contract/forwarder-provider");
      },
      onError: (error: ErrorType) => {
        console.error("Error during create forwarder provider document:", error);
        toast({
          title: "Create failed",
          description: "An error occurred while creating forwarder provider document",
          variant: "destructive",
          duration: 5000,
        });
        throw error;
      },
    });
  },

  // Dành cho eximLicense
  useGetEximDocumentById(id: string) {
    return useQuery({
      queryKey: ["document", id],
      queryFn: async () => {
        try {
          const result = await eximAction.getDocumentById(id);
          return result;
        } catch (error) {
          console.error("Error during get exim document:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useCreateEximDocument(router: ReturnType<typeof useRouter>) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (createDocumentBody: CreateEximDocumentType) =>
        eximAction.createDocument(createDocumentBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["document"],
        });
        toast({
          title: "Create success",
          description: "Document created successfully",
          duration: 10000,
        });
        router.push("/document/exim-license");
      },
      onError: (error: ErrorType) => {
        console.error("Error during create exim document:", error);
        toast({
          title: "Create failed",
          description: "An error occurred while creating exim document",
          variant: "destructive",
          duration: 5000,
        });
        throw error;
      },
    });
  },
};

export default useDocument;