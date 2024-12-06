import { freightApi } from "@/apis/freight.api";
import { CreateFreightBody, UpdateFreightBody } from "@/schema/freight.schema";
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
      queryFn: () => {
        return freightApi.getFreight(id);
      },
    });
  };
  const { mutateAsync: createFreight } = useMutation({
    mutationFn: (data: CreateFreightBody) => freightApi.createFreight(data),
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

  const { mutateAsync: updateFreight } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateFreightBody }) =>
      freightApi.updateFreight(id, data),

    onSuccess: (data) => {
      toast({
        variant: "default",
        title: "Success",
        description: "Freight updated successfully",
      });
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
  return {
    getAllFreight,
    getFreightById: useGetFreightById,
    createFreight,
    updateFreight,
  };
};

export default useFreight;
