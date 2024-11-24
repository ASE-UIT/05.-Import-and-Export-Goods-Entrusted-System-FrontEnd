"use client";

import { DataTable } from "@/app/(pages)/provider/components/data-table";
import { columns } from "./components/columns";
import { providerData } from "./data/provider-data";

export default function ProviderManagement() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Provider Management</span>
        </div>
        <DataTable columns={columns} data={providerData} />
      </div>
    </div>
  );
}