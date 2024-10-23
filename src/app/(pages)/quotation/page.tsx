"use client";

import { DataTable } from "@/app/(pages)/quotation/components/data-table";
import { columns } from "./components/columns";

import { quotationData } from "./data/quotation-data";

export default function QuotationManagementPage() {
  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Quotation</span>
        </div>
        <DataTable columns={columns} data={quotationData} />
      </div>
    </div>
  );
}