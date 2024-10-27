import { ReportChart } from "@/app/(pages)/dashboard/_components/report-chart";
import {
  columns,
  TableShipmentTracking,
} from "@/app/(pages)/dashboard/_components/columns";
import GroupButton from "@/app/(pages)/dashboard/_components/group-button";
import GroupCard from "@/app/(pages)/dashboard/_components/group-card";
import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/(pages)/dashboard/_components/data-table";
import Link from "next/link";

async function getData(): Promise<TableShipmentTracking[]> {
  return [
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Air Freight",
      location: "Ho Chi Minh City",
      status: "In Transit",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Sea Freight",
      location: "Ha Noi",
      status: "Pending",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Land Freight",
      location: "Los Angeles",
      status: "In Transit",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Air Freight",
      location: "California",
      status: "Pending",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Sea Freight",
      location: "Gia Lai",
      status: "Pending",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Land Freight",
      location: "Vung Tau",
      status: "Pending",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Air Freight",
      location: "Da Nang City",
      status: "Pending",
    },
    {
      shipment_id: 123,
      tracking_id: 123,
      shipment_type: "Sea Freight",
      location: "Quang Nam",
      status: "Pending",
    },

    // ...
  ];
}

export default async function Dashboard() {
  const data = await getData();
  return (
    <div className="p-6 space-y-4 w-full">
      <GroupCard />
      <div className="flex w-full space-x-7">
        <GroupButton />
        <ReportChart />
      </div>
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">RECENT SHIPMENTS</h2>
          <Link href="/shipment">
            <Button className="mt-2 p-0" variant={"link"}>
              View All
            </Button>
          </Link>
        </div>
        <div className="container mx-auto">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
