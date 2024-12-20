"use client";

import useFreight from "@/hooks/use-freight";
import { CreateFreightForm } from "../components/forms/base-freight-form";
import { Toaster } from "@/components/ui/toaster";

export default function AddFreightPage() {
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Freight</span>
      </div>
      <Toaster />
      <CreateFreightForm onSubmit={useFreight().createFreight} />
    </div>
  );
}
