"use client";

import { Button } from "@/components/ui/button";
import { Document } from "@/types/document/document.type";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<Document>[] = [
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
    accessorKey: "docNumber",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Doc Number
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("docNumber")}</div>,
  },
  {
    accessorKey: "shipmentId",
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
    cell: ({ row }) => <div>{row.getValue("shipmentId")}</div>,
  },
  {
    accessorKey: "userId",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User ID
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("userId"),
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
          Type
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("type"),
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div>
          <Link
            href={`/document/contract/customer_forwarder/${row.getValue("id")}`}
          >
            <button className="text-blue-500">View</button>
          </Link>
        </div>
      );
    },
  },
];
