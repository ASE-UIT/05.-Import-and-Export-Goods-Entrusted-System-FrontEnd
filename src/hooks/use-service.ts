import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ErrorType } from "@/types/error.type";
import serviceAction from "@/apis/service.api";
import { CreateServiceBodyType } from "@/schema/service.schema";
import { toast } from "@/hooks/use-toast";

const useService = {
  useGetService(shortName?: string, name?: string) {
    return useQuery({
      queryKey: ["service", shortName, name],
      queryFn: async () => {
        try {
          const result = await serviceAction.getService(shortName, name);
          return result;
        } catch (error) {
          console.error("Error during service retrieval:", error);
          throw error;
        }
      },
    });
  },

  useCreateService() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async ({ service }: { service: CreateServiceBodyType }) => {
        await serviceAction.createService(service);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["service"],
        });
        toast({
          title: "Success",
          description: "Service added successfully",
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during service creation:", error);
        throw error;
      },
    });
  },

  useUpdateService() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async ({
        serviceId,
        service,
      }: {
        serviceId: string;
        service: CreateServiceBodyType;
      }) => {
        await serviceAction.updateService(serviceId, service);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["service"],
        });
        toast({
          title: "Success",
          description: "Service updated successfully",
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during service update:", error);
        throw error;
      },
    });
  },
};

export default useService;
