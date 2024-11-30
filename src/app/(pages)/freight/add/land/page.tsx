"use client";

import useLandFreight from "@/hooks/use-land-freight";
import { CreateLandFreightForm } from "../../components/forms/land-freight-form";

export default function AddLandFreightPage() {
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Land Freight</span>
      </div>
      <CreateLandFreightForm onSubmit={useLandFreight().createLandFreight} />
    </div>
  );
}
