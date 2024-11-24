import providerAction from "@/apis/provider.api";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import {
  createProviderData,
  updateProviderData,
} from "@/schema/provider.schema";

export const useProvider = () => {
  const queryClient = useQueryClient();

  const useGetAllProvider = () => {
    return useQuery({
      queryKey: ["providers"],
      queryFn: () => {
        return providerAction.getProvider();
      },
    });
  };

  const useCreateProvider = () => {
    return useMutation({
      mutationFn: (data: createProviderData) =>
        providerAction.createProvider(data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["providers"],
        });
      },
    });
  };

  const useUpdateProvider = () => {
    return useMutation({
      mutationFn: ({ id, data }: { id: string; data: updateProviderData }) =>
        providerAction.updateProvider(id, data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["providers"],
        });
      },
    });
  };

  const useGetProviderById = (id: string) => {
    return useQuery({
      queryKey: ["provider", id],
      queryFn: () => {
        return providerAction.getProvider(id);
      },
    });
  };

  return {
    queryClient,
    useGetAllProvider,
    useCreateProvider,
    useUpdateProvider,
    useGetProviderById,
  };
};
