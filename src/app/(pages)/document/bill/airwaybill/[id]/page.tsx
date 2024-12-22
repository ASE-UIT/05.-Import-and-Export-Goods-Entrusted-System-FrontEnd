"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import AirWayBill from "../../../../document/bill/components/airwaybill";
import useDocument from "@/hooks/use-document";
import { Button } from "@/components/ui/button";

export default function AirWayBillPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { data: airWaybillData, isLoading } = useDocument.useGetDocumentById(
    id,
    "PACKING_LIST"
  );
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
