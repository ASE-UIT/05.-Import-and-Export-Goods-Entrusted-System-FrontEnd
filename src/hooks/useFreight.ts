import { freightApi } from "@/apis/freight.api";
import { useQuery } from "@tanstack/react-query";

const useFreight = () => {
  const getAll = useQuery({
    queryKey: ["freights"],
    queryFn: freightApi.getAllFreight,
  });
  return { getAll };
};

export default useFreight;
