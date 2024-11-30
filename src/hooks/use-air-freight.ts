import { airFreightApi } from "@/apis/air-freight.api";
import {
  CreateAirFreightBody,
  UpdateAirFreightBody,
} from "@/schema/air-freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useAirFreight = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();
  const getAllAir = useQuery({
    queryKey: ["air-freights"],
    queryFn: () => airFreightApi.getAllAirFreight(),
  });
  const getAirById = (id: string) => {
    return useQuery({
      queryKey: ["air-freights", id],
      queryFn: () => {
        return airFreightApi.getAirFreight(id);
      },
    });
  };
  const { mutate: createAirFreight } = useMutation({
    mutationFn: (data: CreateAirFreightBody) =>
      airFreightApi.createAirFreight(data),
    onSuccess: () => {
      setId("");
      router.push("/freight");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["air-freights"],
      });
    },
  });

  const updateAirFreight = (id: string, data: UpdateAirFreightBody) => {
    return useMutation({
      mutationFn: () => {
        return airFreightApi.updateAirFreight(id, data);
      },
      onSuccess: () => {
        router.push("/freight");
      },
      onError: (error) => {
        toast.error(error.message);
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["air-freights"],
        });
      },
    });
  };
  return { getAllAir, getAirById, createAirFreight, updateAirFreight };
};

export default useAirFreight;
