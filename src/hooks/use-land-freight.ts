import { landFreightApi } from "@/apis/land-freight.api";
import {
  CreateLandFreightBody,
  UpdateLandFreightBody,
} from "@/schema/land-freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useLandFreight = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();
  const getAllLand = useQuery({
    queryKey: ["land-freights"],
    queryFn: landFreightApi.getAllLandFreight,
  });

  const getLandById = (id: string) => {
    return useQuery<EximResponseWrapper<LandFreight>, Error>({
      queryKey: ["land-freights", id],
      queryFn: () => {
        return landFreightApi.getLandFreight(id);
      },
    });
  };

  const { mutate: createLandFreight } = useMutation({
    mutationFn: (data: CreateLandFreightBody) =>
      landFreightApi.createLandFreight(data),
    onSuccess: () => {
      setId("");
      router.push("/freight");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["land-freights"],
      });
    },
  });

  const updateLandFreight = (id: string, data: UpdateLandFreightBody) => {
    return useMutation({
      mutationFn: () => {
        return landFreightApi.updateLandFreight(id, data);
      },
      onSuccess: () => {
        router.push("/freight");
      },
      onError: (error) => {
        toast.error(error.message);
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["land-freights"],
        });
      },
    });
  };
  return { getAllLand, getLandById, createLandFreight, updateLandFreight };
};

export default useLandFreight;
