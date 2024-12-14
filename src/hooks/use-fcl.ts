import { fclApi } from "@/apis/fcl.api";
import { FclBody } from "@/schema/fcl.schema";
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
    queryFn: () => fclApi.getAllFcl(),
  });

  const useGetFclById = (id: string) => {
    return useQuery({
      queryKey: ["fcls", id],
      queryFn: () => fclApi.getFcl(id),
    });
  };

  const { mutateAsync: createFcl } = useMutation({
    mutationFn: (data: FclBody) => fclApi.createFcl(data),
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

  const useUpdateFcl = () => {
    return useMutation({
      mutationFn: ({ id, body }: { id: string; body: FclBody }) => {
        return fclApi.updateFcl(id, body);
      },
      onSuccess: (_, req) => {
        queryClient.invalidateQueries({
          queryKey: ["fcls", req.id],
        });
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
    });
  };

  return {
    getAllFcl,
    getFclById: useGetFclById,
    createFcl,
    useUpdateFcl,
  };
};

export default useFcl;
