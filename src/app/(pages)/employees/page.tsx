"use client";

import { DataTable } from "@/app/(pages)/employees/components/data-table";
import { columns } from "./components/columns";
import useEmployee from "@/hooks/use-employee";
import { useEffect, useState } from "react";
import { EmployeeResType } from "@/types/employee.type";
import Loader from "@/components/loader";

export default function EmployeeManagementPage() {
  const { data, isLoading, error } = useEmployee.useGetListEmployee();

  const [employeeData, setEmployeeData] = useState<EmployeeResType[]>();

  useEffect(() => {
    if (data) {
      setEmployeeData(
        data?.data?.filter(
          (employee) =>
            employee.user?.role.name !== "CLIENT" &&
            employee.user?.role.name !== "ADMIN"
        )
      );
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Loader />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))] ">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Employee List</span>
        </div>
        <DataTable columns={columns} data={employeeData || []} />
      </div>
    </div>
  );
}
