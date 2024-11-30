import { fclApi } from "@/apis/fcl.api";
import { CreateFclBody, UpdateFclBody } from "@/schema/fcl.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useFcl = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();
  const getAllFcl = useQuery({
    queryKey: ["fcls"],
    queryFn: fclApi.getAllFcl,
  });

  const getFclById = (id: string) => {
    return useQuery({
      queryKey: ["fcls", id],
      queryFn: () => {
        return fclApi.getFcl(id);
      },
    });
  };

  const { mutate: createFcl } = useMutation({
    mutationFn: (data: CreateFclBody) => fclApi.createFcl(data),
    onSuccess: () => {
      setId("");
      router.push("/freight");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["fcls"],
      });
    },
  });

  const updateFcl = (id: string, data: UpdateFclBody) => {
    return useMutation({
      mutationFn: () => {
        return fclApi.updateFcl(id, data);
      },
      onSuccess: () => {
        router.push("/freight");
      },
      onError: (error) => {
        toast.error(error.message);
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["fcls"],
        });
      },
    });
  };

  return { getAllFcl, getFclById, createFcl, updateFcl };
};

export default useFcl;
