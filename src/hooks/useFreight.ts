import { freightApi } from "@/apis/freight.api";
import { FreightType } from "@/schema/freight.schema";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useFreight = () => {
  const queryClient = useQueryClient();
  const getAll = useQuery({
    queryKey: ["freights"],
    queryFn: freightApi.getAllFreight,
  });

  const { mutate: createFreight } = useMutation({
    mutationFn: (data: FreightType) => freightApi.createFreight(data),
    onSuccess: () => {
      toast.success("Freight created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["freights"],
      });
    },
  });
  return { getAll, createFreight };
};

export default useFreight;
