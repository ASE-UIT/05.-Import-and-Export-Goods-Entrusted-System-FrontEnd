"use client";

import { DataTable } from "@/app/(pages)/shipment/components/data-table";
import { columns } from "./components/columns";
import { shipmentDetailsData } from "./data/details-data";

export default function ShipmentDetails() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        {/* Shipment Details Section */}
        <div className="flex flex-col">
          <span className="text-3xl font-bold">
            Shipment Sea Export Details
          </span>
          <span className="text-2xl font-bold pt-7">Compulsory</span>
        </div>
        <DataTable columns={columns} data={shipmentDetailsData} />
        {/* Optional Section */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Optional</span>
        </div>
        <DataTable columns={columns} data={[]} />{" "}
        {/* Data table với data trống */}
      </div>
    </div>
  );
}
