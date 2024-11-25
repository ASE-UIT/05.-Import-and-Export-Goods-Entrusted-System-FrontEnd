"use client";
import { columns, ShipmentTrackingTable } from "./components/columns";
import { columns, ShipmentTrackingTable } from "./components/columns";
import { DataTable } from "./components/table";
import React, { useEffect, useState } from "react";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { ShipmentTracking } from "@/types/shipment-tracking.type";
import { Shipment } from "@/types/shipment.type";

const mergeShipmentData = (
  trackings: ShipmentTracking[],
  shipments: Shipment[]
): ShipmentTrackingTable[] => {
  return trackings.map((tracking) => {
    const shipment = shipments.find((s) => s.id === tracking.shipmentId);

    if (!shipment) {
      throw new Error(`No shipment found for tracking ID: ${tracking.id}`);
    }

    return {
      id: tracking.id,
      shipment_id: tracking.shipmentId,
      tracking_id: tracking.id,
      shipment_type: shipment.shipmentType,
      location: tracking.location,
      status: tracking.status,
    };
  });
};

export default function ShipmentTrackingPage() {
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
  const [shipmentMocking, setShipmentMocking] = useState<
    ShipmentTrackingTable[]
  >([]);

  useEffect(() => {
    if (shipments && shipmentTracking) {
      const shipmentData = mergeShipmentData(shipmentTracking, shipments);
      setShipmentMocking(shipmentData);
    }
  }, [shipments, shipmentTracking]);

  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Shipment Tracking</span>
        </div>
        <DataTable
          columns={columns}
          data={shipmentMocking}
          isPending={isLoadingTracking || isLoadingShipments}
          error={trackingError?.message || shipmentError?.message}
        />
      </div>
    </div>
  );
}
