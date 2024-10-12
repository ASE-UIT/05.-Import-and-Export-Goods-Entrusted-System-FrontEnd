"use client";

import { DataTable } from "@/app/(pages)/customers/components/data-table";
import { CirclePlus, Search } from "lucide-react";
import { columns, ICustomer } from "./components/columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CustomerManagementPage() {
  const data: ICustomer[] = [
    {
      name: "Nguyen Van A",
      shortName: "AL",
      email: "AnhLong@gmail.com",
      phone: "0123456789",
      taxId: "123",
      address: "HCMC",
      legalRepName: "AL",
    },
    {
      name: "Tran Hoang B",
      shortName: "AL",
      email: "AnhLong@gmail.com",
      phone: "0123456789",
      taxId: "123",
      address: "HCMC",
      legalRepName: "AL",
    },
    {
      name: "Le Thi C",
      shortName: "AL",
      email: "AnhLong@gmail.com",
      phone: "0123456789",
      taxId: "123",
      address: "HCMC",
      legalRepName: "AL",
    },
  ];

  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Customer</span>
        </div>
        <div className="flex w-full justify-between">
          <div className="w-[300px]">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="pl-8" />
            </div>
          </div>
          <Button variant="default">
            <CirclePlus className="mr-2" />
            <span>Add Customer</span>
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
