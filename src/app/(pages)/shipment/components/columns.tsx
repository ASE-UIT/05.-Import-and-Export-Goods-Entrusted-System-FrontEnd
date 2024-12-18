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
  origin: string;
  destination: string;
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
    accessorKey: "origin",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Origin
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("origin"),
  },
  {
    accessorKey: "destination",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Destination
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("destination"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const shipment = row.original as IShipment; // Ép kiểu cho row.original

      let linkTo: string;

      if (shipment.type === "Sea Freight") {
        linkTo =
          shipment.origin === shipment.destination
            ? `/shipment/details/seaimport/` // Đường dẫn cho sea import
            : `/shipment/details/seaexport/`; // Đường dẫn cho sea export
      } else if (shipment.type === "Air Freight") {
        linkTo =
          shipment.origin === shipment.destination
            ? `/shipment/details/airimport/` // Đường dẫn cho air import
            : `/shipment/details/airexport/`; // Đường dẫn cho air export
      } else if (shipment.type === "Land Freight") {
        linkTo =
          shipment.origin === shipment.destination
            ? `/shipment/details/landimport/` // Đường dẫn cho land import
            : `/shipment/details/landexport/`; // Đường dẫn cho land export
      } else {
        linkTo = `/shipment/details/other/${shipment.id}`; // Đường dẫn mặc định nếu không thuộc các loại trên
      }

      return (
        <div>
          <Link href={linkTo}>
            <button
              className="text-blue-500"
              aria-label={`Edit ${shipment.id}`}
            >
              View details
            </button>
          </Link>
        </div>
      );
    },
  },
];
