"use client";
import { columns } from "@/app/(pages)/legal-representative/components/columns";
import { DataTable } from "@/app/(pages)/legal-representative/components/data-table";
import Loader from "@/components/loader";
import useLegalRep from "@/hooks/use-legalRep";

export default function RegalRep() {
  const { useListLegalRep } = useLegalRep();

  const { data, isLoading, error } = useListLegalRep();
  console.log(data);

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
          <span className="text-3xl font-bold">
            Legal Representative Management
          </span>
        </div>
        {data && <DataTable columns={columns} data={data.results} />}
      </div>
    </div>
  );
}
