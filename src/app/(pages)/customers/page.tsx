"use client";

import { DataTable } from "@/app/(pages)/customers/components/data-table";
import { columns } from "./components/columns";

import { customerData } from "./data/customer-data";

export default function CustomerManagementPage() {
  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Customer</span>
        </div>
        <DataTable columns={columns} data={customerData} />
      </div>
    </div>
  );
}
