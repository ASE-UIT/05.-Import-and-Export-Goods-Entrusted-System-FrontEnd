"use client";

import { DataTable } from "@/app/(pages)/quotations/components/data-table";
import { columns, IQuotation } from "./components/columns";
import useQuotation from "@/hooks/use-quotation";
import { useEffect, useState } from "react";
import { QuotationDetailsType } from "@/schema/quotation.schema";
import { z } from "zod";

const formSchema = z.object({
  quoteReqId: z.string(),
  employeeId: z.string(),
  freightId: z.string(),
  userId: z.string(),
  pickupDate: z.string(),
  deliveryDate: z.string(),
  quotationDate: z.string(),
  expiredDate: z.string(),
  status: z.string(),
  totalPrice: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export default function QuotationManagementPage() {
  const [quotationData, setQuotationData] = useState<IQuotation[]>([]);
  const { data, isLoading, error } = useQuotation.useGetQuotations();

  useEffect(() => {
    if (data) {
      setQuotationData(
        data.map((quotation: QuotationDetailsType) => ({
          id: quotation.id,
          quoteReqId: quotation.quoteReqId,
          employeeId: quotation.employeeId,
          freightId: quotation.freightId,
          userId: quotation.userId,
          pickupDate: quotation.pickupDate.toString(),
          deliveryDate: quotation.deliveryDate.toString(),
          quotationDate: quotation.quotationDate.toString(),
          expiredDate: quotation.expiredDate.toString(),
          status: quotation.status,
          totalPrice: quotation.totalPrice.toString(),
          createdAt: quotation.createdAt,
          updatedAt: quotation.updatedAt,
        }))
      );
    }
  }, [data]);

  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))] ml-4">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Quotation</span>
        </div>
        <DataTable
          columns={columns}
          data={quotationData}
          isLoading={isLoading}
          error={error?.message}
        />
      </div>
    </div>
  );
}
