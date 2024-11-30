"use client";

import useFcl from "@/hooks/use-fcl";
import { CreateFclForm } from "../../components/forms/fcl-form";

export default function AddFclPage() {
  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add FCL</span>
      </div>
      <CreateFclForm onSubmit={useFcl().createFcl} />
    </div>
  );
}
