"use client";

"use client";

import { ReportChart } from "@/app/(pages)/dashboard/_components/report-chart";
import {
  columns,
  TableShipmentTracking,
} from "@/app/(pages)/dashboard/_components/columns";
import GroupButton from "@/app/(pages)/dashboard/_components/group-button";
import GroupCard from "@/app/(pages)/dashboard/_components/group-card";
import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/(pages)/dashboard/_components/data-table";
import Link from "next/link";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { Shipment } from "@/types/shipment.type";

export default function Dashboard() {
  const {
    data: shipments,
    isLoading: isLoadingShipments,
    error: shipmentError,
  } = useShipmentTracking.useGetShipment();

  const [data, setData] = useState<TableShipmentTracking[]>([]);
  useEffect(() => {
    if (shipments?.results) {
      setData(
        shipments.results.map((shipment: Shipment) => ({
          shipment_id: shipment.id,
          shipment_type: shipment.shipmentType,
          location: shipment.tracking?.location || "",
          client: shipment.contract?.quotation.quotationReq.customer.name || "",
          status: shipment.tracking?.status || "",
        }))
      );
    }
  }, [shipments?.results]);

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
          <DataTable
            columns={columns}
            data={data}
            isPending={isLoadingShipments}
            error={shipmentError?.message}
          />
        </div>
      </div>
    </div>
  );
}
