"use client";

import { DataTable } from "@/app/(pages)/contactrep/components/data-table";
import { Loader2, TriangleAlert } from "lucide-react";

import { columns } from "./components/columns";
// import { contactrepData } from "./data/contactrep-data";
import useContactRep from "@/hooks/use-contactrep";


export default function ContactrepManagement() {
  const {
    data: contactrepData,
    isPending,
    isError,
  } = useContactRep.useGetContactRep();

  if (isPending) {
    return (
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
        <div>
          <Loader2 className="size-10 animate-spin text-muted-foreground mx-auto" />
          <h2 className="text-lg">Loading Contactrep...</h2>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
        <div>
          <TriangleAlert className="size-10 text-destructive mx-auto" />
          <h2 className="text-lg text-destructive">
            Error loading contactrep
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">
            Contactrep Management
          </span>
        </div>
        <DataTable columns={columns} data={contactrepData} />
      </div>
    </div>
  );
}