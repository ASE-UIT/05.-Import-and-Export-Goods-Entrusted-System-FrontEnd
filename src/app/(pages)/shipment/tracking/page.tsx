import { DataTable } from '@/components/data-table'
import React from 'react'
import { columns } from './column';

import { Search } from 'lucide-react';

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

    // ...
  ];
}
export default async function page() {
  const data= await getData();
  return (
    <>
    <div className='container mx-auto py-7'>
      <Search/>
      <div className="container mx-auto py-14 px-7">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
     
    </>
     
  )
}
