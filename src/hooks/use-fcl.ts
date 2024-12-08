import { fclApi } from "@/apis/fcl.api";
import { CreateFclBody, UpdateFclBody } from "@/schema/fcl.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";

const useFcl = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();
  const getAllFcl = useQuery({
    queryKey: ["fcls"],
    queryFn: fclApi.getAllFcl,
  });

  const useGetFclById = (id: string) => {
    return useQuery({
      queryKey: ["fcls", id],
      queryFn: () => {
        return fclApi.getFcl(id);
      },
    });
  };

  const { mutateAsync: createFcl } = useMutation({
    mutationFn: (data: CreateFclBody) => fclApi.createFcl(data),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Success",
        description: "FCL created successfully",
      });
      setId("");
      router.push("/freight");
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["fcls"],
      });
    },
  });

  const useUpdateFcl = (id: string, data: UpdateFclBody) => {
    return useMutation({
      mutationFn: () => {
        return fclApi.updateFcl(id, data);
      },
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Success",
          description: "FCL updated successfully",
        });
        router.push("/freight");
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["fcls"],
        });
      },
    });
  };

  return {
    getAllFcl,
    getFclById: useGetFclById,
    createFcl,
    updateFcl: useUpdateFcl,
  };
};

export default useFcl;
