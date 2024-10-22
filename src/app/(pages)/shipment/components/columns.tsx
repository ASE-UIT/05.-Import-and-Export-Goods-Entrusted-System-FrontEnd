"use client";

import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { ReactNode } from "react";

export interface IShipment {
  id: string;
  type: string;
  client: string;
  price: string;
  enddate: string;
  location: string;
  status: string;
}

export const columns: ColumnDef<IShipment>[] = [
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
          Shipment ID
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Shipment type
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("client")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price"),
  },
  {
    accessorKey: "enddate",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          End date
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("enddate"),
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Location
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("location"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
];
