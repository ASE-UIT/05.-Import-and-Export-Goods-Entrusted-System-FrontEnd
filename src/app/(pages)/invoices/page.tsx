"use client";

import { DataTable } from "@/app/(pages)/invoices/components/data-table";
import { columns, IInvoice } from "./components/columns";
import useGetInvoice from "@/hooks/use-invoice";
import { useState, useEffect } from "react";
import { InvoiceDetailsType } from "@/schema/invoice.schema";
import { format } from "date-fns";
import { z } from "zod";

const formSchema = z.object({
  contractId: z.string(),
  employeeId: z.string(),
  invoiceDate: z.date(),
  paidDate: z.string(),
  expiredDate: z.date(),
  status: z.string(),
  taxAmount: z.string(),
  totalAmount: z.string(),
});

export default function InvoiceManagement() {
  const [invoiceData, setInvoiceData] = useState<IInvoice[]>([]);
  const { data, isLoading, error } = useGetInvoice.useGetInvoice();

  useEffect(() => {
    if (data) {
      setInvoiceData(
        data.data.map((invoice: InvoiceDetailsType) => ({
          id: invoice.id,
          contract_id: invoice.contractId,
          employee_id: invoice.employeeId,
          paid_date: invoice.paidDate,
          invoice_date: invoice.invoiceDate.toString(),
          expired_date: invoice.expiredDate.toString(),
          status: invoice.status,
          tax: invoice.taxAmount,
          total: invoice.totalAmount,
        }))
      );
    }
  }, [data]);

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Invoice</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl">Total revenue: 1000</span>
        </div>
        <DataTable
          columns={columns}
          data={invoiceData}
          isLoading={isLoading}
          error={error?.message}
        />      
        </div>
    </div>
  );
}