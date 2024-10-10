"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "invoice_id",
    header: "Invoice ID",
  },
  {
    accessorKey: "amount_paid",
    header: "Amount Paid",
  },
  {
    accessorKey: "created_at",
    header: "Created at",
  },
];
