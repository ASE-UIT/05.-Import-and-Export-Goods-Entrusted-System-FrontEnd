"use client";

import { DataTable } from "@/app/(pages)/contactrep/components/data-table";
import { columns } from "./components/columns";
import { contactrepData } from "./data/contactrep-data";

export default function ContactrepManagement() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Contactrep Management</span>
        </div>
        <DataTable columns={columns} data={contactrepData} />
      </div>
    </div>
  );
}