"use client";

import { DataTable } from "@/app/(pages)/provider/components/data-table";
import { columns } from "./components/columns";
import { useProvider } from "@/hooks/use-provider";
import { providerData as sampleData } from "./data/sample-data";

export default function ProviderManagement() {
  const { useGetAllProvider } = useProvider();

  const { data: providerData, error, isPending } = useGetAllProvider();

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Provider Management</span>
        </div>
        <DataTable
          columns={columns}
          data={providerData?.data ?? sampleData}
          error={error}
          isPending={isPending}
        />
      </div>
    </div>
  );
}
