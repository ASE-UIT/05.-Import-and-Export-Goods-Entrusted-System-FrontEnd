"use client";
import { columns } from "./components/columns";
import { shipmentMocking } from "../data/shipment-data";
import { DataTable } from "./components/table";
import React from 'react'

export default function ShipmentTrackingPage() {
  

  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Shipment Tracking</span>
        </div>
        <DataTable columns={columns} data={shipmentMocking} />
      </div>
    </div>
  );
}
