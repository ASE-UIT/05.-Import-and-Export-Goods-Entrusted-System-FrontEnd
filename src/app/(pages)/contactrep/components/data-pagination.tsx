import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
  setQueryParams: Dispatch<SetStateAction<ContactRepQueryParams>>
}

export function DataTablePagination<TData>({
  table,
  setQueryParams,
}: DataTablePaginationProps<TData>) {
  const pageCount = table.getPageCount();
  const [currentPage, setCurrentPage] = useState(
    table.getState().pagination.pageIndex
  );
  const [currentLimit, setCurrentLimit] = useState(
    table.getState().pagination.pageSize
  );

  useEffect(() => {
    setQueryParams((prev) => ({
      ...prev,
      page: currentPage + 1,
    }));
  }, [currentPage, setQueryParams]);

  useEffect(() => {
    setQueryParams((prev: ContactRepQueryParams) => ({
      ...prev,
      limit: currentLimit,
    }));
  }, [currentLimit, setQueryParams]);

  return (
    <div className="flex flex-row-reverse items-end justify-between pt-[10px]">
      <div className="flex items-center gap-[50px]">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${currentLimit}`}
            onValueChange={(value) => {
              setCurrentLimit(Number(value));
            }}
          >
            <SelectTrigger className="h-[32px] w-[64px]">
              <SelectValue placeholder={currentLimit} />
            </SelectTrigger>
            <SelectContent side="top">
              {[1, 5, 10, 20].map((pageSize) => (
                <SelectItem
                  key={pageSize}
                  value={`${pageSize}`}
                >
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
            onClick={() => setCurrentPage(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleArrowLeftIcon className="size-[16px]" />
          </Button>
          <Button
            variant="outline"
            className="size-[32px] p-0"
            onClick={() => setCurrentPage((prev) => prev - 1)}
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
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="size-[16px]" />
          </Button>
          <Button
            variant="outline"
            className="size-[32px] p-0"
            onClick={() => setCurrentPage(pageCount - 1)}
            disabled={!table.getCanNextPage()}
          >
            <DoubleArrowRightIcon className="size-[16px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
