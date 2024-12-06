import { landFreightApi } from "@/apis/land-freight.api";
import {
  CreateLandFreightBody,
  UpdateLandFreightBody,
} from "@/schema/land-freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";

const useLandFreight = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();
  const getAllLand = useQuery({
    queryKey: ["land-freights"],
    queryFn: landFreightApi.getAllLandFreight,
  });

  const useGetLandById = (id: string) => {
    return useQuery<EximResponseWrapper<LandFreight>, Error>({
      queryKey: ["land-freights", id],
      queryFn: () => {
        return landFreightApi.getLandFreight(id);
      },
    });
  };

  const { mutateAsync: createLandFreight } = useMutation({
    mutationFn: (data: CreateLandFreightBody) =>
      landFreightApi.createLandFreight(data),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Success",
        description: "Land Freight created successfully",
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
        queryKey: ["land-freights"],
      });
    },
  });

  const useUpdateLandFreight = (id: string, data: UpdateLandFreightBody) => {
    return useMutation({
      mutationFn: () => {
        return landFreightApi.updateLandFreight(id, data);
      },
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Success",
          description: "Land Freight updated successfully",
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
          queryKey: ["land-freights"],
        });
      },
    });
  };
  return {
    getAllLand,
    getLandById: useGetLandById,
    createLandFreight,
    updateLandFreight: useUpdateLandFreight,
  };
};

export default useLandFreight;
