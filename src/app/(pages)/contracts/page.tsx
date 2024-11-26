"use client";

import { DataTable } from "@/app/(pages)/contracts/components/data-table";
import { columns } from "./components/columns";
import useContract from "@/hooks/use-contract";
import { useEffect, useState } from "react";
import { ContractDetailsType } from "@/schema/contract.schema";

export default function ContractManagementPage() {
  const [contractData, setContractData] = useState<IContract[]>([]);
  const { data, isLoading, error } = useContract.useGetContracts();

  useEffect(() => {
    if (data) {
      setContractData(
        data.data.map((contract: ContractDetailsType) => ({
          id: contract.id,
          startDate: contract.startDate.toString(),
          endDate: contract.endDate.toString(),
          status: contract.status,
          contractDate: contract.contractDate.toString(),
          employeeId: contract.employeeId,
          quotationId: contract.quotationId,
          createdAt: contract.createdAt,
          updatedAt: contract.updatedAt,
        }))
      );
    }
  }, [data]);

  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Contracts</span>
        </div>
        <DataTable
          columns={columns}
          data={contractData}
          isLoading={isLoading}
          error={error?.message}
        />
      </div>
    </div>
  );
}
