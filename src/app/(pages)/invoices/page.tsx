"use client";

import { DataTable } from "@/app/(pages)/invoices/components/data-table";
import { columns, IInvoice } from "./components/columns";
import useGetInvoice from "@/hooks/use-invoice";
import { useState, useEffect } from "react";
import { InvoiceDetailsType } from "@/schema/invoice.schema";
import { format } from "date-fns";


export default function InvoiceManagement() {
  const [invoiceData, setInvoiceData] = useState<IInvoice[]>([]);
  const { data, isLoading, error } = useGetInvoice.useGetInvoice();

  useEffect(() => {
    if (data) {
      setInvoiceData(
        data.data.map((invoice: InvoiceDetailsType) => ({
          id: invoice.id,
          contract_id: invoice.contractId, // Chuyển đổi sang snake_case
          employee_id: invoice.employeeId,
          invoice_date: format(new Date(invoice.invoiceDate), "yyyy-MM-dd"),
          paid_date: format(new Date(invoice.paidDate), "yyyy-MM-dd"),
          status: invoice.status,
          tax: invoice.tax,
          total: invoice.totalAmount,
          action: "",
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