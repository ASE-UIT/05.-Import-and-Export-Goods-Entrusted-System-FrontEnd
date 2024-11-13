import { allLandFreightBody } from "@/schema/land-freight.schema";
import { LandFreight } from "@/types/data";
import { z } from "zod";

export function landDataFormatter(
  data: z.infer<typeof allLandFreightBody>
): LandFreight[] {
  return data.data.map((item) => ({
    price_0_100: item.price_0_100,
    price_100_200: item.price_100_200,
    price_200_500: item.price_200_500,
    price_500_1500: item.price_500_1500,
    price_1500_5000: item.price_1500_5000,
    price_5000_10000: item.price_5000_10000,
    price_10000: item.price_10000,
    freight_id: item.freight_id,
  }));
}
