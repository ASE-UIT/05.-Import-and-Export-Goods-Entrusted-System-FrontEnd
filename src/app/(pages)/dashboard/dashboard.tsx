"use client";

import { ReportChart } from "@/app/(pages)/dashboard/_components/report-chart";
import {
  columns,
  TableShipmentTracking,
} from "@/app/(pages)/dashboard/_components/columns";
import GroupButton from "@/app/(pages)/dashboard/_components/group-button";
import GroupCard from "@/app/(pages)/dashboard/_components/group-card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/(pages)/dashboard/_components/data-table";
import Link from "next/link";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { ShipmentTracking } from "@/types/shipment-tracking.type";
import { Shipment } from "@/types/shipment.type";

const mergeShipmentData = (
  trackings: ShipmentTracking[],
  shipments: Shipment[]
): TableShipmentTracking[] => {
  return trackings.map((tracking) => {
    const shipment = shipments.find((s) => s.id === tracking.shipmentId);

    if (!shipment) {
      throw new Error(`No shipment found for tracking ID: ${tracking.id}`);
    }

    return {
      shipment_id: tracking.shipmentId,
      tracking_id: tracking.id,
      shipment_type: shipment.shipmentType,
      location: tracking.location,
      status: tracking.status,
    };
  });
};

export default function Dashboard() {
  const {
    data: shipmentTracking,
    isLoading: isLoadingTracking,
    error: trackingError,
  } = useShipmentTracking.useGetShipmentTracking();
  const {
    data: shipments,
    isLoading: isLoadingShipments,
    error: shipmentError,
  } = useShipmentTracking.useGetShipment();

  const [data, setData] = useState<TableShipmentTracking[]>([]);

  useEffect(() => {
    if (shipments && shipmentTracking) {
      const shipmentData = mergeShipmentData(shipmentTracking, shipments);
      setData(shipmentData);
    }
  }, [shipments, shipmentTracking]);

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
            isPending={isLoadingTracking || isLoadingShipments}
            error={trackingError?.message || shipmentError?.message}
          />
        </div>
      </div>
    </div>
  );
}
