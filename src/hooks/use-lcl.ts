import { lclApi } from "@/apis/lcl.api";
import { LclBody } from "@/schema/lcl.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";

const useLcl = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();

  const getAllLcl = useQuery({
    queryKey: ["lcls"],
    queryFn: () => lclApi.getAllLcl(),
  });

  const useGetLclById = (id: string) => {
    return useQuery({
      queryKey: ["lcls", id],
      queryFn: () => lclApi.getLcl(id),
    });
  };

  const { mutateAsync: createLcl } = useMutation({
    mutationFn: (data: LclBody) => lclApi.createLcl(data),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Success",
        description: "LCL created successfully",
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
        queryKey: ["lcls"],
      });
    },
  });

  const useUpdateLcl = () => {
    return useMutation({
      mutationFn: ({ id, body }: { id: string; body: LclBody }) => {
        return lclApi.updateLcl(id, body);
      },
      onSuccess: (_, req) => {
        queryClient.invalidateQueries({
          queryKey: ["lcls", req.id],
        });
        toast({
          variant: "default",
          title: "Success",
          description: "LCL updated successfully",
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
    getAllLcl,
    getLclById: useGetLclById,
    createLcl,
    useUpdateLcl,
  };
};

export default useLcl;
