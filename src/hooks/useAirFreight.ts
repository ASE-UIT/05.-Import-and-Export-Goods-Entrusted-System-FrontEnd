import { airFreightApi } from "@/apis/air-freight.api";
import { useQuery } from "@tanstack/react-query";

const useAirFreight = () => {
  const getAllAir = useQuery({
    queryKey: ["air-freights"],
    queryFn: () => airFreightApi.getAllAirFreight(),
  });
  return { getAllAir };
};

export default useAirFreight;
