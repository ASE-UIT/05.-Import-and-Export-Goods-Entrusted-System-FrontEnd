"use client";

import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export interface IShipmentDetails {
  id: string; // Thêm trường ID để sử dụng trong các liên kết
  type: string;
  number: string;
  image: string;
  created_at: string;
  updated_at: string;
  status: string;
}

export const columns: ColumnDef<IShipmentDetails>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <Button
        className="pl-0"
        variant="ghost"
        style={{ backgroundColor: "transparent" }}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Document ID
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <Button
        className="pl-0"
        variant="ghost"
        style={{ backgroundColor: "transparent" }}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Document Type
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    accessorKey: "number",
    header: ({ column }) => (
      <Button
        className="pl-0"
        variant="ghost"
        style={{ backgroundColor: "transparent" }}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Document Number
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("number")}</div>,
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <Button
        className="pl-0"
        variant="ghost"
        style={{ backgroundColor: "transparent" }}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Image
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        <img
          src={row.getValue("image")}
          alt="Document"
          className="h-10 w-10 object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <Button
        className="pl-0"
        variant="ghost"
        style={{ backgroundColor: "transparent" }}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created at
      </Button>
    ),
    cell: ({ row }) => row.getValue("created_at"),
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => (
      <Button
        className="pl-0"
        variant="ghost"
        style={{ backgroundColor: "transparent" }}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Updated at
      </Button>
    ),
    cell: ({ row }) => row.getValue("updated_at"),
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
        <Link href={`/shipment/details/seaimport/update/${row.getValue("id")}`}>
          <button
            className="text-blue-500"
            aria-label={`Edit ${row.getValue("id")}`}
          >
            Edit
          </button>
        </Link>
      </div>
    ),
  },
];
