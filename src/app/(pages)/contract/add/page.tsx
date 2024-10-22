"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DatePickerDemo } from '@/components/date-picker';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css"; 
import React from "react";

const formSchema = z.object({
  quotation_id: z.string(),
  employee_id: z.string(),
  start_date: z.date().optional(),
  end_date: z.date().optional(),
  contract_date: z.date().optional(),
  status: z.string(),
});

export default function AddContractPage() {
  const { id: contract_id } = useParams<{ id: string }>();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [contractDate, setContractDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (startDate) form.setValue("start_date", startDate);
  }, [startDate]);

  useEffect(() => {
    if (endDate) form.setValue("end_date", endDate);
  }, [endDate]);

  useEffect(() => {
    if (contractDate) form.setValue("contract_date", contractDate);
  }, [contractDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
    <div className="flex w-full justify-between items-end">
      <span className="text-3xl font-bold">Add Contract</span>
    </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex flex-col items-center w-[600px] gap-4 py-4">
          {/* Quotation ID */}
          <FormField
            control={form.control}
            name="quotation_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Quotation ID</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[500px] h-[60px]">
                      <SelectValue placeholder="Select an ID" />
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
              <FormItem>
                <FormLabel className="font-bold">Employee ID</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[500px] h-[60px]">
                      <SelectValue placeholder="Select an ID" />
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

            <div className="w-[500px] grid grid-cols-2 gap-4">
            {/* Start Date */}
            <FormItem>
              <FormLabel className="font-bold">Start Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
               <FormMessage />
            </FormItem>

            {/* End Date */}
            <FormItem>
              <FormLabel className="font-bold">End Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Contract Date */} 
            <FormItem>
              <FormLabel className="font-bold">Contract Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[500px] h-[60px]">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Terminated">Terminated</SelectItem>
                      <SelectItem value="Expired">Expired</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
          {/* Button */}
          <div className="flex justify-center mt-6">
          <div className="w-1/2 flex gap-2.5">
              <Link href="/contract" className="w-1/2 h-14">
                <Button className="w-full h-10 text-lg" variant={"outline"} type="button">
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
