"use client";
import UpdateTrackingForm from "@/app/(pages)/shipment/tracking/components/update-tracking-form";

export default function UpdateTrackingPage({
  params,
}: {
  params: { shipmentId: string };
}) {
  return (
    <div className="p-6 w-3/5">
      <UpdateTrackingForm shipmentId={params.shipmentId} />
    </div>
  );
}
