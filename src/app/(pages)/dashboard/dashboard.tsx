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
import { Shipment } from "@/types/shipment.type";
import useCustomer from "@/hooks/use-customer";
import useFreight from "@/hooks/use-freight";
import useQuoteRequest from "@/hooks/use-quote-request";
import useAuth from "@/hooks/use-auth";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: user } = useAuth.useGetSession();
  const {
    data: shipments,
    isLoading: isLoadingShipments,
    error: shipmentError,
  } = useShipmentTracking.useGetShipment();

  const { useListCustomer } = useCustomer();
  const { data: customers } = useListCustomer();

  const { getAllFreight } = useFreight();

  const { data: freight } = getAllFreight;

  const { data: quoteRequest } = useQuoteRequest.useGetQuoteRequest();

  useEffect(() => {
    if (user?.role?.name === "CLIENT") {
      redirect("/quote-request");
    }
  }, [user]);

  const activeStatuses = [
    "DOCUMENT_VERIFICATION",
    "CUSTOMS_CLEARANCE_PENDING",
    "PROCESSING_AT_ORIGIN_PORT",
    "LOADED_ON_VESSEL",
    "IN_TRANSIT",
    "ARRIVE_AT_DESTINATION_PORT",
    "CUSTOMS_CLEARANCE_AT_DESTINATION",
    "PROCESSING_AT_DESTINATION_WAREHOUSE",
    "OUT_FOR_DELIVERY",
    "ON_HOLD",
  ];

  const activeShipments = shipments?.results?.filter((shipment) =>
    activeStatuses.includes(shipment.tracking?.status || ""),
  );

  console.log("quoteRequest", quoteRequest?.length);
  console.log("freight", freight?.pagination?.records);
  console.log("shipment", shipments?.pagination?.records);
  console.log("customer", customers?.pagination?.records);

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
        })),
      );
    }
  }, [shipments?.results]);

  return (
    <div className="w-full space-y-4 p-6">
      <GroupCard
        customer={customers?.pagination?.records}
        shipment={activeShipments?.length}
        freight={freight?.pagination?.records}
        quote={quoteRequest?.length}
      />
      <div className="flex w-full space-x-7">
        <GroupButton />
        <ReportChart
          customer={customers?.results}
          shipment={shipments?.results}
          quote={quoteRequest}
        />
      </div>
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between">
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
