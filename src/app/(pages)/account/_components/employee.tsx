"use client";

import { DataTable } from "@/app/(pages)/account/_components/data-table";
import { columns } from "./employee-columns";

import { UserResponseType } from "@/schema/user.schema";

type EmployeeProps = {
  data?: UserResponseType[];
};

export default function Employee({ data }: EmployeeProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Employee Account</span>
        </div>
        {data && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
