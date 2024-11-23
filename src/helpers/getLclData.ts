import useLcl from "@/hooks/use-lcl";
import useFreight from "@/hooks/use-freight";

export const getLclData = () => {
  const { data: allFreight } = useFreight().getAllFreight;
  const { data: allLcl } = useLcl().getAllLcl;
  const lcl = allLcl && allLcl.data ? allLcl.data : [];
  const freightData = allFreight && allFreight.data ? allFreight.data : [];
  const lclData: (Freight & LCL)[] = freightData
    .map((freight: Freight) => {
      const lclFreight = lcl.find((a) => a.freight_id === freight.id);
      return lclFreight ? { ...freight, ...lclFreight } : null;
    })
    .filter((item) => item !== null) as (Freight & LCL)[];
  return lclData;
};