"use client";

import Client from "@/app/(pages)/account/_components/client";
import Employee from "@/app/(pages)/account/_components/employee";
import useUser from "@/hooks/use-user";
import { UserResponseType } from "@/schema/user.schema";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const { data } = useUser.useGetListUser();
  const [employee, setEmployee] = useState<UserResponseType[]>([]);
  const [client, setClient] = useState<UserResponseType[]>([]);

  useEffect(() => {
    if (data) {
      const employeeData =
        data?.data?.filter(
          (item: UserResponseType) => item.role.name !== "CLIENT"
        ) || [];
      const clientData =
        data?.data?.filter(
          (item: UserResponseType) => item.role.name === "CLIENT"
        ) || [];
      setEmployee(employeeData);
      setClient(clientData);
    }
  }, [data]);

  return (
    <div className="p-7 w-full">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Account Management
      </h1>
      {data && <Employee data={employee} />}
      {data && <Client data={client} />}
    </div>
  );
}
