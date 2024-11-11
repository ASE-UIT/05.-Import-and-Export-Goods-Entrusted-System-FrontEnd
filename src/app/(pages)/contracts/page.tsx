"use client";

import { DataTable } from "@/app/(pages)/contracts/components/data-table";
import { columns, IContract } from "./components/columns";
import useContract from "@/hooks/use-contract";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function ContractManagementPage() {
  const [contractData, setContractData] = useState<IContract[]>([]);
  const { data, isLoading, error } = useContract.useGetQuoteRequest();

  useEffect(() => {
    if (data) {
      setContractData(
        data.data.map((contract: IContract) => ({
          id: contract.id,
          quotationId: contract.quotationId,
          employeeId: contract.employeeId,
          startDate: format(contract.startDate, "yyyy-MM-dd"),
          contractDate: format(contract.contractDate, "yyyy-MM-dd"),
          endDate: format(contract.endDate, "yyyy-MM-dd"),
          status: contract.status,
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
