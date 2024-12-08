"use client";

import { DataTable } from "@/app/(pages)/payment/components/data-table";
import { columns, IPayment } from "./components/columns";
import useGetPayment from "@/hooks/use-payment";
import { useState, useEffect } from "react";
import { PaymentDetailsType } from "@/schema/payment.schema";
import { format } from "date-fns"; // Thêm thư viện date-fns
import { z } from "zod";

const formSchema = z.object({
  invoiceId: z.string(),
  status: z.string(),
  amountPaid: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default function PaymentManagement() {
  const [paymentData, setPaymentData] = useState<IPayment[]>([]);
  const { data, isLoading, error } = useGetPayment.useGetPaymentDetail();

  useEffect(() => {
    if (data) {
      console.log(data);
      setPaymentData(
        data.data.map((payment: PaymentDetailsType) => ({
          id: payment.id,
          invoice_id: payment.invoiceId,
          amount: payment.amountPaid,
          status: payment.status,
          create_date: payment.createdAt.toString(),
          update_date: payment.updatedAt.toString(),
        }))
      );
    }
  }, [data]);

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Payment</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl">Total revenue: 1000</span>
        </div>
        <DataTable
          columns={columns}
          data={paymentData}
          isLoading={isLoading}
          error={error?.message}
        />
      </div>
    </div>
  );
}
