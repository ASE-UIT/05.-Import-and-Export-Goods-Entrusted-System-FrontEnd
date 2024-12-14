"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import StatusBadge from "@/components/status-badge";
import Link from "next/link";
import { format } from "date-fns";
import TransportContractModal from "./customer_forwarder.form";

export interface IContract {
  id: string;
  quotationId: string;
  employeeId: string;
  startDate: string;
  contractDate: string;
  endDate: string;
  status: string;
}

export const columns: ColumnDef<IContract>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contract ID
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "quotationId",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quotation ID
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("quotationId")}</div>,
  },
  {
    accessorKey: "employeeId",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employee ID
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("employeeId")}</div>,
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Date
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => format(row.getValue("startDate"), "yyyy-MM-dd"),
    sortingFn: (a, b) =>
      new Date(a.original.startDate).getTime() -
      new Date(b.original.startDate).getTime(),
  },
  {
    accessorKey: "contractDate",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contract Date
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => format(row.getValue("contractDate"), "yyyy-MM-dd"),
    sortingFn: (a, b) =>
      new Date(a.original.contractDate).getTime() -
      new Date(b.original.contractDate).getTime(),
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          End Date
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => format(row.getValue("endDate"), "yyyy-MM-dd"),
    sortingFn: (a, b) =>
      new Date(a.original.endDate).getTime() -
      new Date(b.original.endDate).getTime(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <div>
        <Link href={`/contracts/update/${row.getValue("id")}`}>
          <button className="text-blue-500">Edit</button>
        </Link>
      </div>
    ),
  },
  {
    id: "viewContract",
    header: "View Contract",
    cell: ({ row }) => (
      <div>
        <TransportContractModal />
      </div>
    ),
  },
];
