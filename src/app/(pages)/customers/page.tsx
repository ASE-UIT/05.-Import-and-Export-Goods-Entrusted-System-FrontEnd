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
import { customerData } from "./data/customer-data";

export default function CustomerManagementPage() {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-col p-[24px] w-full h-[calc(100vh-64px)]">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Customer</span>
        </div>
        <DataTable columns={columns} data={customerData} />
      </div>
    </div>
  );
}
