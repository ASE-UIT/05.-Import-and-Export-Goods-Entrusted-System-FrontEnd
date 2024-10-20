"use client";
import { columns } from "./components/columns";
import { quoteRequestMocking } from "./data/quote-request-data";
import { DataTable } from "./components/table";

export default function CustomerManagementPage() {
  

  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Quote Request Management</span>
        </div>
        <DataTable columns={columns} data={quoteRequestMocking} />
      </div>
    </div>
  );
}
