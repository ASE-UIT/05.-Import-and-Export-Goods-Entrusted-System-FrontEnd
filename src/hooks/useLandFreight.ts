import { landFreightApi } from "@/apis/land-freight.api";
import { useQuery } from "@tanstack/react-query";

const useLandFreight = () => {
  const getAllLand = useQuery({
    queryKey: ["land-freights"],
    queryFn: landFreightApi.getAllLandFreight,
  });
  return { getAllLand };
};

export default useLandFreight;
