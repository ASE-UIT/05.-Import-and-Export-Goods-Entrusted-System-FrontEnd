"use client";

import { DataTable } from "@/app/(pages)/service/components/data-table";
import { columns } from "./components/columns";
import useService from "@/hooks/use-service";
import Loader from "@/components/loader";
import { useEffect } from "react";

export default function ServiceManagement() {
  const { data, isLoading, error, refetch } = useService.useGetService();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Loader />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Service Management</span>
        </div>
        {data && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
