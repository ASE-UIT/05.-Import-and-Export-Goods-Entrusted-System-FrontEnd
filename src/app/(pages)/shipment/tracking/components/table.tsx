"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./pagination";
import { DataTableFilter } from "./search-filter";
import StatusBadge, { Status } from "@/components/status-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  totalPages: number;
  data: TData[];
  isPending: boolean;
  error: string | undefined;
  queryParams: { limit: number; page: number };
  setQueryParams: React.Dispatch<
    React.SetStateAction<{
      limit: number;
      page: number;
    }>
  >;
}

export function DataTable<TData, TValue>({
  columns,
  totalPages,
  data,
  isPending,
  error,
  queryParams,
  setQueryParams,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      sorting,
      columnFilters,
      pagination: {
        pageIndex: (queryParams.page ?? 1) - 1,
        pageSize: queryParams.limit ?? 1,
      },
    },
  });

  const loadingRows = Array(5).fill(null);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[400px]">
        <AlertCircle className="w-16 h-16 text-neutral-400" />
        <span className="text-lg mt-4 text-neutral-400">{error}</span>
      </div>
    );
  }

  const loadingRows = Array(5).fill(null);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[400px]">
        <AlertCircle className="w-16 h-16 text-neutral-400" />
        <span className="text-lg mt-4 text-neutral-400">{error}</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex w-full justify-between pb-[10px]">
        <DataTableFilter table={table} />
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isPending ? (
              loadingRows.map((_, index) => (
                <TableRow key={index}>
                  {columns.map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                      <Skeleton className="w-full h-10 bg-neutral-300" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
            {isPending ? (
              loadingRows.map((_, index) => (
                <TableRow key={index}>
                  {columns.map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                      <Skeleton className="w-full h-10 bg-neutral-300" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.id === "status" ? (
                      {cell.column.id === "status" ? (
                        <StatusBadge status={cell.getValue() as Status} />
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} setQueryParams={setQueryParams} />
    </div>
  );
}
