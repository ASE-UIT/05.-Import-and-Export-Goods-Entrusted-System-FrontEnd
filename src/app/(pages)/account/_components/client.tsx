"use client";

import { DataTable } from "@/app/(pages)/account/_components/data-table";
import { columns } from "./client-columns";

import { UserResponseType } from "@/schema/user.schema";

type ClientProps = {
  data?: UserResponseType[];
};

export default function Client({ data }: ClientProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Client Account</span>
        </div>
        {data && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
