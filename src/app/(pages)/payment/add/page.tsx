"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import Link from "next/link";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import usePayment from "@/hooks/use-payment";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/use-auth";
import { CreatePaymentBody, CreatePaymentType } from "@/schema/payment.schema";
import useInvoice from "@/hooks/use-invoice";

const formSchema = z.object({
  invoiceId: z.string(),
  status: z.string(),
  amountPaid: z.string(),
});

export default function AddInvoice() {
  const router = useRouter();

  const { mutate: createPayment, status } =
    usePayment.useCreatePayment(router);
  const { data: sessionData } = useAuth.useGetSession();
  const { data: invoices, isLoading } = useInvoice.useGetInvoiceDetail();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const invoiceIds = invoices?.data.results.map((invoice) => invoice.id) || [];


  function onSubmit(values: z.infer<typeof formSchema>) {
    const createPaymentBody: CreatePaymentType = {
      invoiceId: values.invoiceId,
      status: values.status.toUpperCase(),
      amountPaid: values.amountPaid,
    };
      createPayment(createPaymentBody);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Payment</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Invoice ID */}
            <FormField
          control={form.control}
          name="invoiceId"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-bold">Invoice ID</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full h-[60px]">
                    <SelectValue placeholder="Select invoice ID" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        Loading Invoices...
                      </div>
                    ) : invoiceIds.length > 0 ? (
                      invoiceIds.map((id) => (
                        <SelectItem key={id} value={id}>
                          {id}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="flex items-center justify-center">
                        No Invoice Available
                      </div>
                    )}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


            {/* Tax */}
            <FormField
              control={form.control}
              name="amountPaid"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Amount Paid</FormLabel>
                  <FormControl>
                    <Input placeholder="Amount Paid" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Completed">COMPLETED</SelectItem>
                        <SelectItem value="Pending">PENDING</SelectItem>
                        <SelectItem value="Paid">PAID</SelectItem>
                        <SelectItem value="Cancelled">CANCELLED</SelectItem>
                        <SelectItem value="Failed">FAILED</SelectItem>
                        <SelectItem value="Refunded">REFUNDED</SelectItem>
                        <SelectItem value="Onhold">ONHOLD</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-1/2 flex gap-2.5">
              <Link href="/payment" className="w-1/2 h-14">
                <Button className="w-full h-10 text-lg" variant={"outline"} type="button">
                  Cancel
                </Button>
              </Link>
              <Button className="w-1/2 h-10 text-lg" type="submit">
                {status === "pending" ? "Adding..." : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
