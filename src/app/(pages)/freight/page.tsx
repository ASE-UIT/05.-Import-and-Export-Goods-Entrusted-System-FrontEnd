"use client";

import { DataTable } from "@/components/table/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { landColumns } from "./components/columns/land-columns";
import { airColumns } from "./components/columns/air-columns";
import { FREIGHT_TYPE } from "@/configs/enum";
import { fclColumns } from "./components/columns/fcl-columns";
import { lclColumns } from "./components/columns/lcl-columns";
import { getAirData } from "@/helpers/getAirData";
import { getLandData } from "@/helpers/getLandData";
import { getFclData } from "@/helpers/getFclData";
import { useGetLclData } from "@/helpers/getLclData";

export default function FreightManagementPage() {
  const freightTypes = Object.values(FREIGHT_TYPE);

  const airfreightdata = getAirData();
  const landfreightdata = getLandData();
  const fclData = getFclData();
  const lclData = useGetLclData();
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
          <DataTable columns={landColumns} data={landfreightdata} />
        </TabsContent>
        <TabsContent value={FREIGHT_TYPE.AIR}>
          <DataTable columns={airColumns} data={airfreightdata} />
        </TabsContent>
        <TabsContent value={FREIGHT_TYPE.FCL}>
          <DataTable columns={fclColumns} data={fclData} />
        </TabsContent>
        <TabsContent value={FREIGHT_TYPE.LCL}>
          <DataTable columns={lclColumns} data={lclData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
