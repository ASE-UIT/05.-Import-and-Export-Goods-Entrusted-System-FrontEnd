import { landFreightApi } from "@/apis/land-freight.api";
import { LandFreightBody } from "@/schema/land-freight.schema";
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
    queryFn: () => landFreightApi.getAllLandFreight(),
  });
  const useGetLandById = (id: string) => {
    return useQuery({
      queryKey: ["land-freights", id],
      queryFn: () => {
        return landFreightApi.getLandFreight(id);
      },
    });
  };
  const { mutateAsync: createLandFreight } = useMutation({
    mutationFn: (data: LandFreightBody) =>
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

  const useUpdateLandFreight = () => {
    return useMutation({
      mutationFn: ({ id, body }: { id: string; body: LandFreightBody }) => {
        return landFreightApi.updateLandFreight(id, body);
      },
      onSuccess: (_, req) => {
        queryClient.invalidateQueries({
          queryKey: ["land-freights", req.id],
        });
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
    });
  };
  return {
    getAllLand,
    getLandById: useGetLandById,
    createLandFreight,
    useUpdateLandFreight,
  };
};

export default useLandFreight;
