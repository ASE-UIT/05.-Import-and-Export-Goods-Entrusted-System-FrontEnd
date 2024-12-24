import documentAction from "@/apis/document/document.api";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

const useDocument = {
  useGetDocument(userId?: string, type?: string) {
    return useQuery({
      queryKey: ["documents"],
      queryFn: () => documentAction.getDocument(userId, type),
    });
  },
};

export default useDocument;
