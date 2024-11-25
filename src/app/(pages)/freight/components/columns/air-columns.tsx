"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { IAirFreight } from "..";

export const airColumns: ColumnDef<IAirFreight>[] = [
  {
    accessorKey: "provider_name",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Provider Name
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("provider_name")}</div>,
  },
  {
    accessorKey: "freight_type",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          Freight Type
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("freight_type")}</div>,
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
    accessorKey: "transit",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transit
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("transit"),
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
    accessorKey: "note",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          Note
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("note"),
  },
  {
    accessorKey: "free_time",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Free Time
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("free_time"),
  },
  {
    accessorKey: "forty_five_K",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          45K
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("forty_five_K"),
  },
  {
    accessorKey: "one_hundred_K",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          100K
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("one_hundred_K"),
  },
  {
    accessorKey: "three_hundred_K",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          300K
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("three_hundred_K"),
  },
  {
    accessorKey: "five_hundred_K",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          500K
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("five_hundred_K"),
  },
  {
    accessorKey: "FSC",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          FSC
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("FSC"),
  },
  {
    accessorKey: "AMS_fees",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          AMS Fees
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("AMS_fees"),
  },
  {
    accessorKey: "SCC",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          SCC
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("SCC"),
  },
  {
    accessorKey: "routine",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Routine
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("routine"),
  },
];
