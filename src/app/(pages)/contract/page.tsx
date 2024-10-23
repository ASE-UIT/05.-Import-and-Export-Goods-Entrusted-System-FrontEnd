"use client";

import { DataTable } from "@/app/(pages)/contract/components/data-table";
import { columns } from "./components/columns";

import { contractData } from "./data/contract-data";

export default function ContractManagementPage() {
  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Contract</span>
        </div>
        <DataTable columns={columns} data={contractData} />
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f4e9e0ca176961372b3f0211213578301bbe742c
