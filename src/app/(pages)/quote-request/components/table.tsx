"use client";

import * as React from "react";
import { Button } from "../../../../components/ui/button";
import { CirclePlus } from "lucide-react";
import { PATH_NAME } from "@/configs";
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

import { useRouter } from "next/navigation";
import { DataTablePagination } from "../../shipment/tracking/components/pagination";
import { DataTableFilter } from "./filter";
import StatusBadge, { Status } from "@/components/status-badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CustomDialog } from "./popup";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [quoteRequestId, setQuoteRequestId] = React.useState<string | null>(
    null
  );
  const router = useRouter();
  const handleRowClick = async (row) => {
    const id = row.original.quote_request_id;
    setSelectedRow(row);
    setQuoteRequestId(id);
    setIsPopupOpen(true);
  };
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
    <div>
      <div className="flex w-full justify-between pb-[10px]">
        <DataTableFilter table={table} />
        <div className="flex space-x-[10px]">
          <Button
            variant="default"
            onClick={() => router.push(`${PATH_NAME.QUOTE_REQUEST}/add`)}
          >
            <CirclePlus className="mr-2" />
            <span>Create quote request</span>
          </Button>
          <Button
            variant="default"
            onClick={() => router.push(`${PATH_NAME.QUOTE_REQUEST}/send`)}
            className="bg-accent hover:bg-accent"
          >
            <CirclePlus className="mr-2" />
            <span>Send quote request</span>
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
                  key={row.original.quote_request_id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => handleRowClick(row)}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.columnDef.accessorKey === "status" ? (
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
      {isPopupOpen && quoteRequestId && (
        <CustomDialog
          quoteRequestId={quoteRequestId}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
      <DataTablePagination table={table} />
    </div>
  );
}
