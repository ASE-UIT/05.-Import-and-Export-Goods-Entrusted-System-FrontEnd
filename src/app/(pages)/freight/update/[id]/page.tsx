"use client";

import useFreight from "@/hooks/use-freight";
import { UpdateFreightForm } from "../../components/forms/base-freight-form";
import { Toaster } from "@/components/ui/toaster";
import { useFreightStore } from "@/stores/useFreightStore";
import { useState } from "react";
import { FREIGHT_TYPE } from "@/configs/enum";
import { UpdateAirFreightForm } from "../../components/forms/air-freight-form";
import { UpdateLandFreightForm } from "../../components/forms/land-freight-form";
import { UpdateFclForm } from "../../components/forms/fcl-form";
import { UpdateLclForm } from "../../components/forms/lcl-form";
import { useParams } from "next/navigation";
import { FreightBody } from "@/schema/freight.schema";

export default function UpdateFreightPage() {
  const { id: extraId } = useParams<{ id: string }>();
  const freightId = useFreightStore((state) => state.id);
  const [isBaseUpdated, setIsBaseUpdated] = useState(false);
  const { getFreightById } = useFreight();
  const { mutate: updateFreight } = useFreight().useUpdateFreight;

  const { data } = getFreightById(freightId);
  const type = data?.results[0].freightType ?? null;
  console.log(type);

  function handleSubmit(data: FreightBody) {
    updateFreight({
      id: freightId,
      body: {
        ...data,
      },
    });
    setIsBaseUpdated(true);
  }

  const secondForm = (type: FREIGHT_TYPE) => {
    switch (type) {
      case FREIGHT_TYPE.AIR:
        return <UpdateAirFreightForm airId={extraId} />;
      case FREIGHT_TYPE.LAND:
        return <UpdateLandFreightForm landId={extraId} />;
      case FREIGHT_TYPE.FCL:
        return <UpdateFclForm fclId={extraId} />;
      case FREIGHT_TYPE.LCL:
        return <UpdateLclForm lclId={extraId} />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Update Freight</span>
      </div>
      <Toaster />
      {!isBaseUpdated && (
        <UpdateFreightForm freightId={freightId} onSubmit={handleSubmit} />
      )}
      {isBaseUpdated && secondForm(type)}
    </div>
  );
}
