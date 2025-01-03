import useFcl from "@/hooks/use-fcl";
import useFreight from "@/hooks/use-freight";

const useGetFclData = () => {
  const { data: allFreight } = useFreight().getAllFreight;
  const { data: allFcl } = useFcl().getAllFcl;
  const fcl = allFcl ? allFcl.results : [];
  const freightData = allFreight ? allFreight.results : [];
  const fclData: (Freight & FCL)[] = freightData
    .map((freight: Freight) => {
      const fclFreight = fcl.find((a) => a.freight_id === freight.id);
      return fclFreight ? { ...freight, ...fclFreight } : null;
    })
    .filter((item) => item !== null) as (Freight & FCL)[];
  return fclData;
};

export { useGetFclData as getFclData };
