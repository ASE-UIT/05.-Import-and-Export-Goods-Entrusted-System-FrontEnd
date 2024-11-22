"use client";

import { DataTable } from "@/app/(pages)/contactrep/components/data-table";
import { columns } from "./components/columns";
import { contactrepData as sampleData } from "./data/sample-data";
import { useContactRep } from "@/hooks/use-contactRep";

export default function ContactrepManagement() {
  const { useGetAllContactRep } = useContactRep();

  const { data: contactRepData, error, isPending } = useGetAllContactRep();

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">ContactRep Management</span>
        </div>
        <DataTable
          columns={columns}
          data={contactRepData?.data ?? sampleData}
          error={error}
          isPending={isPending}
        />
      </div>
    </div>
  );
}
