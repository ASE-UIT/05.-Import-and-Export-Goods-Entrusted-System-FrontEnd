import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageCount = table.getPageCount();
  const [currentPage, setCurrentPage] = useState(
    table.getState().pagination.pageIndex
  );

  useEffect(() => {
    setCurrentPage(table.getState().pagination.pageIndex);
  }, [table.getState().pagination.pageIndex]);

  return (
    <div className="flex flex-row-reverse items-end justify-between pt-[10px]">
      <div className="flex items-center gap-[50px]">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-[32px] w-[64px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            className="size-[32px] p-0"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleArrowLeftIcon className="size-[16px]" />
          </Button>
          <Button
            variant="outline"
            className="size-[32px] p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="size-[16px]" />
          </Button>
          <ToggleGroup
            type="single"
            value={currentPage.toString()}
            onValueChange={(value) => {
              const pageIndex = Number(value);
              table.setPageIndex(pageIndex);
              setCurrentPage(pageIndex);
            }}
          >
            {Array.from({ length: pageCount }).map((_, index) => (
              <ToggleGroupItem
                key={index}
                className="size-[32px] p-0"
                variant="outline"
                value={index.toString()}
              >
                {index + 1}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Button
            variant="outline"
            className="size-[32px] p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="size-[16px]" />
          </Button>
          <Button
            variant="outline"
            className="size-[32px] p-0"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <DoubleArrowRightIcon className="size-[16px]" />
          </Button>
        </div>
      </div>
      <div>Total: 1000</div>
    </div>
  );
}
