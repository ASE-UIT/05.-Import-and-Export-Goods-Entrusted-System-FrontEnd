"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { LandFreight } from "@/types/data";

export const landColumns: ColumnDef<LandFreight>[] = [
  {
    accessorKey: "provider_id",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Provider ID
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("provider_id")}</div>,
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
          <ArrowUpDown className="ml-2 size-4" />
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
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("destination"),
  },
  {
    accessorKey: "transit_time",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transit Time
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("transit_time"),
  },
  {
    accessorKey: "valid_from",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valid From
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("valid_from"),
  },
  {
    accessorKey: "valid_until",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valid Until
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("valid_until"),
  },
  {
    accessorKey: "addition_fee_breakdown",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          Addition Fee Breakdown
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("addition_fee_breakdown"),
  },
  {
    accessorKey: "schedule",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          Schedule
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("schedule"),
  },
  {
    accessorKey: "price_0_100",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 0-100
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_0_100"),
  },
  {
    accessorKey: "price_100_200",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 100-200
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_100_200"),
  },
  {
    accessorKey: "price_200_500",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 200-500
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_200_500"),
  },
  {
    accessorKey: "price_500_1500",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 500-1500
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_500_1500"),
  },
  {
    accessorKey: "price_1500_5000",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 1500-5000
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_1500_5000"),
  },
  {
    accessorKey: "price_5000_10000",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 5000-10000
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_5000_10000"),
  },
  {
    accessorKey: "price_10000",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price 10000+
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price_10000"),
  },
];
