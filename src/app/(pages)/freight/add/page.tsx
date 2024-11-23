"use client";

import useFreight from "@/hooks/useFreight";
import FreightForm from "../components/forms/base-freight-form";

export default function AddFreightPage() {
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Freight</span>
      </div>
      <FreightForm onSubmit={useFreight().createFreight} />
    </div>
  );
}
