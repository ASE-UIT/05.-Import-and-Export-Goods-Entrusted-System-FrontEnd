import useAirFreight from "@/hooks/use-air-freight";
import useFreight from "@/hooks/use-freight";

const useGetAirData = () => {
  const { data: allFreight } = useFreight().getAllFreight;
  const { data: allAirData } = useAirFreight().getAllAir;
  const airData = allAirData ? allAirData.results : [];
  const freightData = allFreight ? allFreight.results : [];
  const airfreightdata: (Freight & AirFreight)[] = freightData
    .map((freight: Freight) => {
      const air = airData.find((a) => a.freight_id === freight.id);
      return air ? { ...freight, ...air } : null;
    })
    .filter((item) => item !== null) as (Freight & AirFreight)[];
  return airfreightdata;
};

export { useGetAirData as getAirData };
