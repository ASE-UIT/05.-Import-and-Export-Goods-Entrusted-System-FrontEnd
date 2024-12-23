import { freightApi } from "@/apis/freight.api";
import { FreightBody } from "@/schema/freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { useRouter, usePathname } from "next/navigation";

const useFreight = () => {
  const queryClient = useQueryClient();
  const setId = useFreightStore((state) => state.setId);
  const path = usePathname();
  const router = useRouter();
  const getAllFreight = useQuery({
    queryKey: ["freights"],
    queryFn: freightApi.getAllFreight,
  });

  const useGetFreightById = (id: string) => {
    return useQuery({
      queryKey: ["freights", id],
      queryFn: async () => {
        const result = await freightApi.getFreight(id);
        return result;
      },
    });
  };
  const { mutateAsync: createFreight } = useMutation({
    mutationFn: (data: FreightBody) => freightApi.createFreight(data),
    onSuccess: (data) => {
      toast({
        variant: "default",
        title: "Success",
        description: "Freight created successfully",
      });
      setId(data.data.id);
      router.push(`${path}/${data.data.freightType.toLowerCase()}`);
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
        queryKey: ["freights"],
      });
    },
  });

  const useUpdateFreight = useMutation({
    mutationFn: ({ id, body }: { id: string; body: FreightBody }) =>
      freightApi.updateFreight(id, body),
    onError: (error) => {
      console.log(error.message);
      throw error;
    },
    onSuccess: (_, req) => {
      toast({
        variant: "default",
        title: "Success",
        description: "Freight updated successfully",
      });
      queryClient.invalidateQueries({
        queryKey: ["freights", req.id],
      });
    },
  });
  return {
    getAllFreight,
    getFreightById: useGetFreightById,
    createFreight,
    useUpdateFreight,
  };
};

export default useFreight;
