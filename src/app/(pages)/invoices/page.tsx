"use client";

import { DataTable } from "@/app/(pages)/invoices/components/data-table";
import { columns, IInvoice } from "./components/columns";
import useGetInvoice from "@/hooks/use-invoice";
import { useState, useEffect } from "react";
import { InvoiceDetailsType } from "@/schema/invoice.schema";
import { format } from "date-fns";
import { z } from "zod";
import { Toaster } from "react-hot-toast";

const formSchema = z.object({
  contractId: z.string(),
  employeeId: z.string(),
  invoiceDate: z.date(),
  paidDate: z.string(),
  expiredDate: z.date(),
  status: z.string(),
  taxAmount: z.string(),
  totalAmount: z.string(),
  paidAmount: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default function InvoiceManagement() {
  const [invoiceData, setInvoiceData] = useState<IInvoice[]>([]);
  const { data, isLoading, error } = useGetInvoice.useGetInvoiceDetail();

  useEffect(() => {
    if (data) {
      setInvoiceData(
        data.data.map((invoice: InvoiceDetailsType) => ({
          id: invoice.id,
          contract_id: invoice.contractId,
          employee_id: invoice.employeeId,
          paid_date: format(new Date(invoice.paidDate), 'dd/MM/yyyy'),
          invoice_date: format(new Date(invoice.invoiceDate), 'dd/MM/yyyy'),
          expired_date: format(new Date(invoice.expiredDate), 'dd/MM/yyyy'),
          status: invoice.status,
          tax: invoice.taxAmount,
          total: invoice.totalAmount,
          paid_amount: invoice.paidAmount,
          created_at: format(new Date(invoice.createdAt), 'dd/MM/yyyy HH:mm:ss'),
          updated_at: format(new Date(invoice.updatedAt), 'dd/MM/yyyy HH:mm:ss'),
        }))
      );
    }
  }, [data]);

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Invoice</span>
          <Toaster position="top-right" reverseOrder={false} />
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