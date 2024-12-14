import { airFreightApi } from "@/apis/air-freight.api";
import { AirFreightBody } from "@/schema/air-freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";

const useAirFreight = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const router = useRouter();
  const getAllAir = useQuery({
    queryKey: ["air-freights"],
    queryFn: () => airFreightApi.getAllAirFreight(),
  });
  const useGetAirById = (id: string) => {
    return useQuery({
      queryKey: ["air-freights", id],
      queryFn: () => {
        return airFreightApi.getAirFreight(id);
      },
    });
  };
  const { mutateAsync: createAirFreight } = useMutation({
    mutationFn: (data: AirFreightBody) => airFreightApi.createAirFreight(data),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Success",
        description: "Air Freight created successfully",
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
        queryKey: ["air-freights"],
      });
    },
  });

  const useUpdateAirFreight = () => {
    return useMutation({
      mutationFn: ({ id, body }: { id: string; body: AirFreightBody }) => {
        return airFreightApi.updateAirFreight(id, body);
      },
      onSuccess: (_, req) => {
        queryClient.invalidateQueries({
          queryKey: ["air-freights", req.id],
        });
        toast({
          variant: "default",
          title: "Success",
          description: "Air Freight updated successfully",
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
    getAllAir,
    getAirById: useGetAirById,
    createAirFreight,
    useUpdateAirFreight,
  };
};

export default useAirFreight;
