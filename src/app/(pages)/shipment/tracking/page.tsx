import { DataTable } from '@/components/data-table'
import React from 'react'
import { columns } from './column';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PaginationUtil } from './pagination';

async function getData(): Promise<ShipmentTracking[]> {
  // Fetch data from your API here.
  return [
    {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
    {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "In Transit",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
    {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
     {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
     {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
     {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
     {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
     {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },
     {
      tracking_id: 65767687,
      shipment_id: 5435435,
      status: "Pending",
      location: "Hoi an",
      client: "Quang khanh",
      shipment_type: "Air Freight"
    },

    // ...
  ];
}
export default async function page() {
  const data= await getData();
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-full p-7'>
      <div className='flex justify-center items-start w-full h-full'>
        <div className="relative w-full py-2.5">
          <Input
            type="text"
            placeholder="Search..."
            className="w-80 pl-10 pr-4"
            />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
            <Search />
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full">
          <DataTable columns={columns} data={data}  />
      </div>
      <div className='flex justify-center items-start w-full h-full'>
        <PaginationUtil/>
      </div>
    </div>
     
    </>
     
  )
}
