"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ShipmentTracking>[] = [
  {
    accessorKey: "shipment_id",
    header: "Shipment ID",
  },
  {
    accessorKey: "shipment_type",
    header: "Shipment Type",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "tracking_id",
    header: "Tracking ID",
  },
];