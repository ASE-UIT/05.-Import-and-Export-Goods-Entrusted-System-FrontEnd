"use client";

import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Link from 'next/link';

export interface IInvoice {
  id: string;
  contract_id: string;
  employee_id: string;
  invoice_date: string;
  paid_date: string;
  expired_date: string;
  status: string;
  tax: string;
  total: string;
  paid_amount: string;
  created_at: string;
  updated_at: string;
}

export const columns: ColumnDef<IInvoice>[] = [
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
          ID
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "contract_id",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contract ID
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("contract_id")}</div>,
  },
  {
    accessorKey: "employee_id",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employee ID
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("employee_id")}</div>,
  },
  
  {
    accessorKey: "invoice_date",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Invoice Date
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("invoice_date"),
  },
  {
    accessorKey: "paid_date",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Paid Date
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("paid_date"),
  },
  {
    accessorKey: "expired_date",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expired Date
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("expired_date"),
  },
  {
    accessorKey: "status",
    header: "Status",  
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />
  },
  {
    accessorKey: "tax",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tax Amount
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("tax"),
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("total"),
  },
  {
    accessorKey: "paid_amount",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Paid Amount
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("paid_amount"),
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("created_at"),
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated At
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("created_at"),
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <div>  
      <Link href={`/invoices/update/${row.getValue("id")}`}>
      <button className="text-blue-500">Edit</button>
        </Link>
      </div>
    ),
  },
];