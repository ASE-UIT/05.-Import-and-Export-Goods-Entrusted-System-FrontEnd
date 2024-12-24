"use client";
import { useParams, useRouter } from "next/navigation";
import AirWayBill from "../../../../document/bill/components/airwaybill";
import { Button } from "@/components/ui/button";
import useDocumentAirWayBill from "@/hooks/use-air-waybill";

export default function AirWayBillPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { data: airWaybillData, isLoading } = useDocumentAirWayBill.useGetDocumentById(
    id,
    "AIRWAY_BILL"
  );
  console.log(airWaybillData)
  if ((airWaybillData && !airWaybillData.data[0]) || isLoading) {
    return (
      <div className="p-[50px] space-y-5">
        <div> No Air WayBill exist!</div>
        <Button
          onClick={() => router.push(`${window.location.pathname}/create`)}
        >
          Create Air Waybill
        </Button>
      </div>
    );
  }
  return <AirWayBill data={airWaybillData.data[0]} />;
}
