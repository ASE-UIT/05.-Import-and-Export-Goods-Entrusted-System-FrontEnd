"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type TableShipmentTracking = {
  shipment_id: string;
  tracking_id: string;
  shipment_type: string;
  location: string;
  status: string;
};

export const columns: ColumnDef<TableShipmentTracking>[] = [
  {
    accessorKey: "shipment_id",
    header: "Shipment ID",
  },
  {
    accessorKey: "tracking_id",
    header: "Tracking ID",
  },
  {
    accessorKey: "shipment_type",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Shipment Type
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("shipment_type")}</div>,
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
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("location")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
