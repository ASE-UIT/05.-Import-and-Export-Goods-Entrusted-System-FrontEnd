"use client";

import { DataTable } from "@/app/(pages)/viewhistory/components/data-table";
import { columns } from "./components/columns";
import { historyData } from "./data/viewhistory-data";

export default function InvoiceManagement() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Invoice</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl">Total revenue: 1000</span>
        </div>
        <DataTable columns={columns} data={historyData} />
      </div>
    </div>
  );
}