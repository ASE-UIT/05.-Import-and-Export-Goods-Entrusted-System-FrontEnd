"use client";

import { DataTable } from "@/app/(pages)/customers/components/data-table";
import { CirclePlus, Search } from "lucide-react";
import { columns, ICustomer } from "./components/columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useReactTable } from "@tanstack/react-table";
import { DataTableFilter } from "./components/data-table-filter";

export default function CustomerManagementPage() {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);

  const data: ICustomer[] = [
    {
      name: "Nguyen Van A",
      shortName: "NVA",
      email: "AnhLong@gmail.com",
      phone: "0123456789",
      taxId: "123",
      address: "HCMC",
      legalRepName: "AL",
    },
    {
      name: "Tran Hoang B",
      shortName: "THB",
      email: "AnhLong@gmail.com",
      phone: "0123456789",
      taxId: "123",
      address: "HCMC",
      legalRepName: "AL",
    },
    {
      name: "Le Thi C",
      shortName: "LTC",
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
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
