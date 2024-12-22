type Freight = {
  id: string;
  freightType: FREIGHT_TYPE;
  origin: string;
  destination: string;
  transitTime: number;
  additionFee: number;
  validFrom: Date;
  validUntil: Date;
  addition_fee_breakdown: string;
  schedule: WEEKDAY;
  providerId: string;
};

type LandFreight = {
  land_freight_id: string;
  price_0_100: number;
  price_100_200: number;
  price_200_500: number;
  price_500_1500: number;
  price_1500_5000: number;
  price_5000_10000: number;
  price_10000: number;
  freight_id: string;
};

type AirFreight = {
  air_freight_id: string;
  price_0K: number;
  price_45K: number;
  price_100K: number;
  price_300K: number;
  price_500K: number;
  freight_id: string;
};

type LCL = {
  lcl_id: string;
  cost: number;
  freight_id: string;
};

type FCL = {
  fcl_id: string;
  price_20dc: number;
  price_40dc: number;
  price_40hc: number;
  price_20rf: number;
  price_40rf: number;
  freight_id: string;
};
