"use client";

import { DataTable } from "../customers/components/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { landColumns } from "./components/columns/land-columns";
import { airColumns } from "./components/columns/air-columns";
import { FREIGHT_TYPE } from "@/configs/enum";
import useAirFreight from "@/hooks/useAirFreight";
import { airDataFormatter } from "@/helpers/airDataFormatter";
import { AirFreight } from "@/types/data";
import useLandFreight from "@/hooks/useLandFreight";
import { landDataFormatter } from "@/helpers/landDataFormatter";
import { fclColumns } from "./components/columns/fcl-columns";
import { lclColumns } from "./components/columns/lcl-columns";

export default function FreightManagementPage() {
  const freightTypes = Object.values(FREIGHT_TYPE);
  const { data: allAirData } = useAirFreight().getAllAir;
  const { data: allLandData } = useLandFreight().getAllLand;
  const airData: AirFreight[] = allAirData ? airDataFormatter(allAirData) : [];
  const landData = allLandData ? landDataFormatter(allLandData) : [];

  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <Tabs
        defaultValue={freightTypes[0]}
        className="flex flex-col w-full gap-[20px]"
      >
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Freight</span>
          <div className="flex items-center justify-between">
            <TabsList>
              {freightTypes.map((item, index) => (
                <TabsTrigger key={index} value={item}>
                  {item.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        <TabsContent value={FREIGHT_TYPE.LAND}>
          <DataTable columns={landColumns} data={landData} />
        </TabsContent>
        <TabsContent value={FREIGHT_TYPE.AIR}>
          <DataTable columns={airColumns} data={airData} />
        </TabsContent>
        <TabsContent value={FREIGHT_TYPE.FCL}>
          <DataTable columns={fclColumns} data={[]} />
        </TabsContent>
        <TabsContent value={FREIGHT_TYPE.LCL}>
          <DataTable columns={lclColumns} data={[]} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
