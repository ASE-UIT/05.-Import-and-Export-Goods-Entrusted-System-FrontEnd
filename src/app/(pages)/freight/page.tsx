/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { DataTable } from '../customers/components/data-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { landColumns } from './components/columns/land-columns';
import { landData } from './data/land-data';
import { seaColumns } from './components/columns/sea-columns';
import { seaData } from './data/sea-data';
import { airColumns } from './components/columns/air-columns';
import { airData } from './data/air-data';
export default function FreightManagementPage() {
  const freightTypes = ['land', 'sea', 'air'];

  const freightTable = {
    land: {
      columns: landColumns,
      data: landData,
    },
    sea: {
      columns: seaColumns,
      data: seaData,
    },
    air: {
      columns: airColumns,
      data: airData,
    },
  };
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
        <TabsContent value="land">
          {/* <DataTable
            columns={freightTable.land.columns}
            data={freightTable.land.data}
          /> */}
        </TabsContent>
        <TabsContent value="sea">
          {/* <DataTable
            columns={freightTable.sea.columns}
            data={freightTable.sea.data}
          /> */}
        </TabsContent>
        <TabsContent value="air">
          {/* <DataTable
            columns={freightTable.air.columns}
            data={freightTable.air.data}
          /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
