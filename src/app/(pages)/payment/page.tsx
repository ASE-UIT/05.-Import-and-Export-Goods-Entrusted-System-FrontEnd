"use client";

import { DataTable } from "@/app/(pages)/payment/components/data-table";
import { columns } from "./components/columns";
import { invoiceData } from "./data/invoice-data";

export default function PaymentManagement() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Payment</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl">Total debt: 1000</span>
        </div>
        <DataTable columns={columns} data={invoiceData} />
      </div>
    </div>
  );
}