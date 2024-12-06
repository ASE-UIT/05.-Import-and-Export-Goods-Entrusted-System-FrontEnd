import useFreight from "@/hooks/use-freight";
import useLandFreight from "@/hooks/use-land-freight";

const useGetLandData = () => {
  const { data: allFreight } = useFreight().getAllFreight;
  const { data: allLandData } = useLandFreight().getAllLand;
  const freightData = allFreight && allFreight.data ? allFreight.data : [];
  const landData = allLandData && allLandData.data ? allLandData.data : [];
  const landfreightdata: (Freight & LandFreight)[] = freightData
    .map((freight) => {
      const land = landData.find((a) => a.freight_id === freight.id);
      return land ? { ...freight, ...land } : null;
    })
    .filter((item) => item !== null) as (Freight & LandFreight)[];
  return landfreightdata;
};

export { useGetLandData as getLandData };
