"use client";

import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

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

import { Button } from "@/components/ui/button";
import * as dataTableFilter from "@/components/table/data-filter";
import { CirclePlus } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { DataTablePagination } from "@/components/table/data-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  error: Error | null;
  isPending: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isPending,
  error,
  isPending,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const router = useRouter();
  const path = usePathname();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="w-full">
      <div className="flex w-full justify-between pb-[10px] mb-[20px]">
        <dataTableFilter.DataTableFilter table={table} />
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.push(`/contactrep`)}>
            View Contactrep
          </Button>
          <Button variant="default" onClick={() => router.push(`${path}/add`)}>
            <CirclePlus className="mr-2" />
            <span>Add {path.slice(1, path.length)}</span>
          </Button>
        </div>
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <React.Fragment key={cell.id}>
                      {isPending ? (
                        <TableCell>
                          <Skeleton className="w-full h-10 bg-neutral-300" />
                        </TableCell>
                      ) : (
                        <TableCell>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      )}
                    </React.Fragment>
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
      <DataTablePagination table={table} />
    </div>
  );
}
