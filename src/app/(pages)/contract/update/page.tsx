"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DatePickerDemo } from '@/components/date-picker';

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
import * as z from "zod";
import "react-datepicker/dist/react-datepicker.css"; 
import React from "react";

const schema = z.object({
  quotation_id: z.string().nonempty({ message: "Please select an ID" }),
  employee_id: z.string().nonempty({ message: "Please select an ID" }),
  start_date: z.coerce.date().nullable(),
  end_date: z.coerce.date().nullable(),
  contract_date: z.coerce.date().nullable(),
  status: z.string().nonempty({ message: "Please select a status" }),
});

export default function AddContractPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      quotation_id: "",
      employee_id: "",
      start_date: null,
      end_date: null,
      contract_date: null,
      status: "",
    },
  });

  
  const router = useRouter();

  const onSubmit = (values: any) => {
    console.log(values);
    router.push("/contract");
  };

  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
    <div className="flex w-full justify-between">
      <span className="text-3xl font-bold">Update Contract</span>
    </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Quotation ID */}
          <FormField
            control={form.control}
            name="quotation_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quotation ID</FormLabel>
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
                <FormLabel>Employee ID</FormLabel>
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

          <div className="flex space-x-4"> 
          {/* Start Date */}
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full"> 
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                <DatePickerDemo />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date */}
          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full"> 
                <FormLabel>End Date</FormLabel>
                <FormControl>
                <DatePickerDemo />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

          {/* Contract Date */}
          <FormField
            control={form.control}
            name="contract_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Contract Date</FormLabel>
                <FormControl>
                  <DatePickerDemo/>
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
              <FormItem>
                <FormLabel>Status</FormLabel>
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

          {/* Button */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-2 w-[300px]">
            <Link href="/contract" className="w-1/2">
              <Button className="w-full h-10 text-md bg-white text-black" type="button">
                Cancel
              </Button>
            </Link>
              <Button className="w-1/2 h-10 text-md" type="submit">
                  Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}