import {
  allAirFreightBody,
  AllAirFreightType,
} from "@/schema/air-freight.schema";
import { AllFreightType } from "@/schema/freight.schema";
import { AirFreight } from "@/types/data";
import { UseQueryResult } from "@tanstack/react-query";
import { z } from "zod";

export function airDataFormatter(
  data: z.infer<typeof allAirFreightBody>
): AirFreight[] {
  return data.data.map((item) => ({
    price_0K: item.price_0K,
    price_45K: item.price_45K,
    price_100K: item.price_100K,
    price_300K: item.price_300K,
    price_500K: item.price_500K,
    freight_id: item.freight_id,
  }));
}
