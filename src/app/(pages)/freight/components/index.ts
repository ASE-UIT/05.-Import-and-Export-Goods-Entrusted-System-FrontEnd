export interface IFreight {
  id: string;
  provider_name: string;
  freight_type: string;
  origin: string;
  destination: string;
  transit_time: string;
  transit: string;
  valid_from: string;
  valid_until: string;
  note: string;
  free_time: string;
}

export interface ILandFreight extends IFreight {
  // Changes needed
  weight: number;
  weight_100_to_200: number;
  weight_200_to_500: number;
  weight_500_to_1500: number;
  weight_1500_to_5000: number;
  weight_5000_to_10000: number;
  weight_over_10000: number;
}

export interface ISeaFreight extends IFreight {
  // Changes needed
  twenty_DC: number;
  forty_DC: number;
  forty_HC: number;
  twenty_RF: number;
  forty_RF: number;
}

export interface IAirFreight extends IFreight {
  // Changes needed
  forty_five_K: number;
  one_hundred_K: number;
  three_hundred_K: number;
  five_hundred_K: number;
  FSC: number;
  AMS_fees: number;
  SCC: number;
  routine: string;
}
