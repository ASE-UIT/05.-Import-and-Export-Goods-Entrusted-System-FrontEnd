"use client";
import { columns, ShipmentTrackingTable } from "./components/columns";
import { DataTable } from "./components/table";
import React, { useEffect, useState } from "react";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { Shipment } from "@/types/shipment.type";

export default function ShipmentTrackingPage() {
  const [searchParams, setSearchParams] = useState<{
    limit: number;
    page: number;
  }>({
    limit: 10,
    page: 1,
  });

  const {
    data: shipments,
    isLoading: isLoadingShipments,
    error: shipmentError,
  } = useShipmentTracking.useGetShipment(
    undefined,
    undefined,
    searchParams.page,
    searchParams.limit
  );
  const [shipmentMocking, setShipmentMocking] = useState<
    ShipmentTrackingTable[]
  >([]);

  useEffect(() => {
    if (shipments?.results) {
      setShipmentMocking(
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

  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (shipments?.pagination.totalPages) {
      setTotalPages(shipments?.pagination.totalPages);
    }
  }, [shipments?.pagination.totalPages]);

  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Shipment Tracking</span>
        </div>
        <DataTable
          columns={columns}
          totalPages={totalPages}
          data={shipmentMocking}
          isPending={isLoadingShipments}
          error={shipmentError?.message}
          queryParams={searchParams}
          setQueryParams={setSearchParams}
        />
      </div>
    </div>
  );
}
