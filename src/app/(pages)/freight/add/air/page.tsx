"use client";

import useAirFreight from "@/hooks/use-air-freight";
import { CreateAirFreightForm } from "../../components/forms/air-freight-form";
import { Toaster } from "@/components/ui/toaster";

export default function AddAirFreightPage() {
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Air Freight</span>
      </div>
      <Toaster />
      <CreateAirFreightForm onSubmit={useAirFreight().createAirFreight} />
    </div>
  );
}
