"use client";

import useLcl from "@/hooks/use-lcl";
import { CreateLclForm } from "../../components/forms/lcl-form";

export default function AddLclPage() {
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add LCL</span>
      </div>
      <CreateLclForm onSubmit={useLcl().createLcl} />
    </div>
  );
}
