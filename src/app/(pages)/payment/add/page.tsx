"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import Link from "next/link";

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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useParams } from "next/navigation";
import { DatePickerDemo } from "../components/date-picker"; 

const formSchema = z.object({
  contract_id: z.string(),
  employee_id: z.string(),
  invoice_date: z.date().optional(),
  paid_date: z.date().optional(),
  tax: z.string(),
  total_amount: z.string(),
});

export default function AddInvoice() {
  const { id: customerId } = useParams<{ id: string }>();

  // Khởi tạo form với React Hook Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Trạng thái cục bộ cho ngày
  const [invoiceDate, setInvoiceDate] = useState<Date | undefined>(undefined);
  const [paidDate, setPaidDate] = useState<Date | undefined>(undefined);

  // Đồng bộ ngày vào React Hook Form
  useEffect(() => {
    if (invoiceDate) form.setValue("invoice_date", invoiceDate);
  }, [invoiceDate]);

  useEffect(() => {
    if (paidDate) form.setValue("paid_date", paidDate);
  }, [paidDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Invoice</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Contract ID */}
            <FormField
              control={form.control}
              name="contract_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Contract ID</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder="Select contract ID" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Employee ID */}
            <FormField
              control={form.control}
              name="employee_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Employee ID</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder="Select employee ID" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <div className="w-full flex space-x-4"> {/* Flex container to align items horizontally */}
            {/* DatePicker for Invoice Date */}
            <FormItem className="flex-1 w-full"> {/* Use flex-1 to allow the form items to share space equally */}
              <FormLabel className="font-bold">Invoice Date</FormLabel>
              <FormControl>
                <DatePickerDemo/>
              </FormControl>
              <FormMessage />
             </FormItem>

              {/* DatePicker for Paid Date */}
              <FormItem className="flex-1 w-full">
                <FormLabel className="font-bold">Paid Date</FormLabel>
                <FormControl>
                  <DatePickerDemo/>
                </FormControl>
                <FormMessage />
              </FormItem>
          </div>

            {/* Tax */}
            <FormField
              control={form.control}
              name="tax"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Tax</FormLabel>
                  <FormControl>
                    <Input placeholder="Tax" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Total Amount */}
            <FormField
              control={form.control}
              name="total_amount"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Total Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Total Amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-1/2 flex gap-2.5">
              <Link href="/payment" className="w-1/2 h-14 text-lg bg-white text-black">
                <Button className="w-full h-10 text-lg bg-white text-black" type="button">
                  Cancel
                </Button>
              </Link>
              <Button className="w-1/2 h-10 text-lg" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
