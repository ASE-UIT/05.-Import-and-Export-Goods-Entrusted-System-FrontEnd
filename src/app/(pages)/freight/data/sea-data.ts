import { ISeaFreight } from "../components";

export const seaData: ISeaFreight[] = [
  {
    id: "1",
    provider_name: "Evergreen",
    freight_type: "Sea",
    origin: "Shanghai",
    destination: "Los Angeles",
    transit_time: "10",
    transit: "20",
    valid_from: "01/01/2021",
    valid_until: "01/01/2022",
    note: "Note",
    free_time: "10",
    twenty_DC: 50,
    forty_DC: 150,
    forty_HC: 500,
    twenty_RF: 2000,
    forty_RF: 3000,
  },
  {
    id: "2",
    provider_name: "Maersk",
    freight_type: "Sea",
    origin: "Hong Kong",
    destination: "New York",
    transit_time: "15",
    transit: "25",
    valid_from: "01/02/2021",
    valid_until: "01/02/2022",
    note: "Priority service",
    free_time: "12",
    twenty_DC: 60,
    forty_DC: 160,
    forty_HC: 550,
    twenty_RF: 2100,
    forty_RF: 3100,
  },
  {
    id: "3",
    provider_name: "MSC",
    freight_type: "Sea",
    origin: "Busan",
    destination: "Seattle",
    transit_time: "12",
    transit: "22",
    valid_from: "01/03/2021",
    valid_until: "01/03/2022",
    note: "Refrigerated cargo",
    free_time: "8",
    twenty_DC: 55,
    forty_DC: 155,
    forty_HC: 505,
    twenty_RF: 2050,
    forty_RF: 3050,
  },
  {
    id: "4",
    provider_name: "CMA CGM",
    freight_type: "Sea",
    origin: "Ningbo",
    destination: "Miami",
    transit_time: "20",
    transit: "30",
    valid_from: "01/04/2021",
    valid_until: "01/04/2022",
    note: "Special rates",
    free_time: "14",
    twenty_DC: 65,
    forty_DC: 165,
    forty_HC: 570,
    twenty_RF: 2200,
    forty_RF: 3200,
  },
  {
    id: "5",
    provider_name: "Hapag-Lloyd",
    freight_type: "Sea",
    origin: "Tokyo",
    destination: "San Francisco",
    transit_time: "14",
    transit: "24",
    valid_from: "01/05/2021",
    valid_until: "01/05/2022",
    note: "Weekly departures",
    free_time: "9",
    twenty_DC: 70,
    forty_DC: 170,
    forty_HC: 590,
    twenty_RF: 2300,
    forty_RF: 3300,
  },
  {
    id: "6",
    provider_name: "Yang Ming",
    freight_type: "Sea",
    origin: "Taipei",
    destination: "Houston",
    transit_time: "18",
    transit: "28",
    valid_from: "01/06/2021",
    valid_until: "01/06/2022",
    note: "Fast track service",
    free_time: "11",
    twenty_DC: 58,
    forty_DC: 158,
    forty_HC: 510,
    twenty_RF: 2080,
    forty_RF: 3080,
  },
  {
    id: "7",
    provider_name: "ZIM",
    freight_type: "Sea",
    origin: "Haifa",
    destination: "New Orleans",
    transit_time: "22",
    transit: "32",
    valid_from: "01/07/2021",
    valid_until: "01/07/2022",
    note: "Customs clearance included",
    free_time: "13",
    twenty_DC: 62,
    forty_DC: 162,
    forty_HC: 580,
    twenty_RF: 2250,
    forty_RF: 3250,
  },
  {
    id: "8",
    provider_name: "APL",
    freight_type: "Sea",
    origin: "Singapore",
    destination: "Atlanta",
    transit_time: "19",
    transit: "29",
    valid_from: "01/08/2021",
    valid_until: "01/08/2022",
    note: "Transit insurance included",
    free_time: "15",
    twenty_DC: 67,
    forty_DC: 167,
    forty_HC: 600,
    twenty_RF: 2400,
    forty_RF: 3400,
  },
  {
    id: "9",
    provider_name: "K Line",
    freight_type: "Sea",
    origin: "Osaka",
    destination: "Boston",
    transit_time: "16",
    transit: "26",
    valid_from: "01/09/2021",
    valid_until: "01/09/2022",
    note: "Door-to-door service",
    free_time: "7",
    twenty_DC: 53,
    forty_DC: 153,
    forty_HC: 520,
    twenty_RF: 2000,
    forty_RF: 3000,
  },
  {
    id: "10",
    provider_name: "Evergreen",
    freight_type: "Sea",
    origin: "Shenzhen",
    destination: "Los Angeles",
    transit_time: "11",
    transit: "21",
    valid_from: "01/10/2021",
    valid_until: "01/10/2022",
    note: "Direct route",
    free_time: "10",
    twenty_DC: 54,
    forty_DC: 154,
    forty_HC: 525,
    twenty_RF: 2010,
    forty_RF: 3010,
  },
  {
    id: "11",
    provider_name: "Maersk",
    freight_type: "Sea",
    origin: "Xiamen",
    destination: "Seattle",
    transit_time: "15",
    transit: "25",
    valid_from: "01/11/2021",
    valid_until: "01/11/2022",
    note: "Priority handling",
    free_time: "12",
    twenty_DC: 66,
    forty_DC: 166,
    forty_HC: 575,
    twenty_RF: 2150,
    forty_RF: 3150,
  },
  {
    id: "12",
    provider_name: "MSC",
    freight_type: "Sea",
    origin: "Nanjing",
    destination: "Miami",
    transit_time: "18",
    transit: "28",
    valid_from: "01/12/2021",
    valid_until: "01/12/2022",
    note: "Expedited shipping",
    free_time: "8",
    twenty_DC: 57,
    forty_DC: 157,
    forty_HC: 530,
    twenty_RF: 2025,
    forty_RF: 3025,
  },
  {
    id: "13",
    provider_name: "CMA CGM",
    freight_type: "Sea",
    origin: "Qingdao",
    destination: "San Francisco",
    transit_time: "14",
    transit: "24",
    valid_from: "01/01/2022",
    valid_until: "01/01/2023",
    note: "Weekly departures",
    free_time: "9",
    twenty_DC: 68,
    forty_DC: 168,
    forty_HC: 590,
    twenty_RF: 2250,
    forty_RF: 3250,
  },
  {
    id: "14",
    provider_name: "Hapag-Lloyd",
    freight_type: "Sea",
    origin: "Vladivostok",
    destination: "Los Angeles",
    transit_time: "20",
    transit: "30",
    valid_from: "01/02/2022",
    valid_until: "01/02/2023",
    note: "Multi-modal options",
    free_time: "10",
    twenty_DC: 69,
    forty_DC: 169,
    forty_HC: 600,
    twenty_RF: 2300,
    forty_RF: 3300,
  },
  {
    id: "15",
    provider_name: "Yang Ming",
    freight_type: "Sea",
    origin: "Tianjin",
    destination: "Chicago",
    transit_time: "17",
    transit: "27",
    valid_from: "01/03/2022",
    valid_until: "01/03/2023",
    note: "Customs assistance available",
    free_time: "11",
    twenty_DC: 64,
    forty_DC: 164,
    forty_HC: 580,
    twenty_RF: 2200,
    forty_RF: 3200,
  },
  {
    id: "16",
    provider_name: "ZIM",
    freight_type: "Sea",
    origin: "Antwerp",
    destination: "Houston",
    transit_time: "21",
    transit: "31",
    valid_from: "01/04/2022",
    valid_until: "01/04/2023",
    note: "Flexible schedules",
    free_time: "13",
    twenty_DC: 71,
    forty_DC: 171,
    forty_HC: 610,
    twenty_RF: 2400,
    forty_RF: 3400,
  },
  {
    id: "17",
    provider_name: "APL",
    freight_type: "Sea",
    origin: "Rotterdam",
    destination: "New Orleans",
    transit_time: "19",
    transit: "29",
    valid_from: "01/05/2022",
    valid_until: "01/05/2023",
    note: "Discounts for bulk shipments",
    free_time: "15",
    twenty_DC: 73,
    forty_DC: 173,
    forty_HC: 620,
    twenty_RF: 2500,
    forty_RF: 3500,
  },
  {
    id: "18",
    provider_name: "K Line",
    freight_type: "Sea",
    origin: "Dalian",
    destination: "San Diego",
    transit_time: "13",
    transit: "23",
    valid_from: "01/06/2022",
    valid_until: "01/06/2023",
    note: "Special handling for fragile goods",
    free_time: "7",
    twenty_DC: 55,
    forty_DC: 155,
    forty_HC: 540,
    twenty_RF: 2150,
    forty_RF: 3150,
  },
  {
    id: "19",
    provider_name: "Evergreen",
    freight_type: "Sea",
    origin: "Ningbo",
    destination: "Atlanta",
    transit_time: "16",
    transit: "26",
    valid_from: "01/07/2022",
    valid_until: "01/07/2023",
    note: "Additional tracking services",
    free_time: "10",
    twenty_DC: 72,
    forty_DC: 172,
    forty_HC: 615,
    twenty_RF: 2450,
    forty_RF: 3450,
  },
  {
    id: "20",
    provider_name: "Maersk",
    freight_type: "Sea",
    origin: "Guangzhou",
    destination: "Los Angeles",
    transit_time: "14",
    transit: "24",
    valid_from: "01/08/2022",
    valid_until: "01/08/2023",
    note: "Comprehensive logistics solutions",
    free_time: "12",
    twenty_DC: 65,
    forty_DC: 165,
    forty_HC: 605,
    twenty_RF: 2350,
    forty_RF: 3350,
  },
];
