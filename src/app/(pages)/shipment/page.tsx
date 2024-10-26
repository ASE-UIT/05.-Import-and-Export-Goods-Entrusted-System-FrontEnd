"use client";

import { DataTable } from "@/app/(pages)/shipment/components/data-table";
import { columns } from "./components/columns";
import { shipmentData } from "./data/manage-shipment";

export default function ShipmentManagement() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Shipment Management</span>
        </div>
        <DataTable columns={columns} data={shipmentData} />
      </div>
    </div>
  );
}
