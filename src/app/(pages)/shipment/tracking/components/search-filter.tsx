"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableFilter<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const columnsTitle = table.getAllColumns().map((column) => column.id);
  const [currentFilter, setCurrentFilter] = useState<string>(columnsTitle[0]);
  console.log(columnsTitle);
  return (
    <div className="flex gap-[5px]">
      <div className="w-[300px]">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            onChange={(event) =>
              table.getColumn(currentFilter)?.setFilterValue(event.target.value)
            }
            className="pl-8 h-9 text-sm"
          />
        </div>
      </div>
      <Select onValueChange={(value) => setCurrentFilter(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {columnsTitle.map((title) => (
              <SelectItem value={title} key={title}>
                {title
                .replace(/_/g, " ")
                  .replace(/([A-Z])/g, " $1")
                  .toLowerCase()
                  .replace(/\b\w/g, (char) => char.toUpperCase())
                  .replace(/\bId\b/, "ID")}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
