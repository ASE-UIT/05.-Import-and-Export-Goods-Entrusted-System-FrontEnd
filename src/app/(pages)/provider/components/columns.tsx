"use client";

import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import Link from 'next/link';

export interface IProvider {
  id: string;
  name: string;
  contactrep: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  status: string;
}

export const columns: ColumnDef<IProvider>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "contactrep",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ContactRep
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("contactrep")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("email"),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("phone"),
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("address"),
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("country"),
  },
  {
    accessorKey: "status",
    header: "Status",  
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <div>  
        <Link href={`/provider/update?id=${row.getValue("id")}`}>
          <button className="text-blue-500">Edit</button>
        </Link>
      </div>
    ),
  },
];
