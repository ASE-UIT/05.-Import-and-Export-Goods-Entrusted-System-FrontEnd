"use client";
import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { IShipmentFormat } from "@/types/shipment.d";

export const columns: ColumnDef<IShipmentFormat>[] = [
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
    cell: ({ row }) => row.getValue("shipmentId"),
  },
  {
    accessorKey: "shipmentType",
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
    cell: ({ row }) => <div>{row.getValue("shipmentType")}</div>,
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
    accessorKey: "endDate",
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
    cell: ({ row }) => row.getValue("endDate"),
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
      const shipment = row.original as IShipmentFormat; // Ép kiểu cho row.original

      let linkTo: string;

      if (shipment.shipmentType === "Sea Freight") {
        linkTo =
          shipment.origin === shipment.destination
            ? `/shipment/details/seaimport/` // Đường dẫn cho sea import
            : `/shipment/details/seaexport/`; // Đường dẫn cho sea export
      } else if (shipment.shipmentType === "Air Freight") {
        linkTo =
          shipment.origin === shipment.destination
            ? `/shipment/details/airimport/` // Đường dẫn cho air import
            : `/shipment/details/airexport/`; // Đường dẫn cho air export
      } else if (shipment.shipmentType === "Land Freight") {
        linkTo =
          shipment.origin === shipment.destination
            ? `/shipment/details/landimport/` // Đường dẫn cho land import
            : `/shipment/details/landexport/`; // Đường dẫn cho land export
      } else {
        linkTo = `/shipment/details/other/${shipment.shipmentId}`; // Đường dẫn mặc định nếu không thuộc các loại trên
      }

      return (
        <div>
          <Link href={linkTo}>
            <button
              className="text-blue-500"
              aria-label={`Edit ${shipment.shipmentId}`}
            >
              View details
            </button>
          </Link>
        </div>
      );
    },
  },
];
