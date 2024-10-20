"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { useState } from "react";

const schema = z.object({
  quoteID: z.string().nonempty({ message: "Please select an ID" }),
  employeeID: z.string().nonempty({ message: "Please select an ID" }),
  startDate: z.coerce.date().nullable(),
  endDate: z.coerce.date().nullable(),
  contractDate: z.coerce.date().nullable(),
  status: z.string().nonempty({ message: "Please select a status" }),
});

export default function AddContractPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      quoteID: "",
      employeeID: "",
      startDate: null,
      endDate: null,
      contractDate: null,
      status: "",
    },
  });

  const router = useRouter();
  
  // Separate states for each date
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [contractDate, setContractDate] = useState<Date | null>(null);

  const onSubmit = (values: any) => {
    console.log(values);
    router.push("/contract");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-left">Add Contract</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Quotation ID */}
          <FormField
            control={form.control}
            name="quoteID"
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
            name="employeeID"
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

          {/* Start Date */}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      field.onChange(date); 
                    }}
                    className="w-[500px] h-[60px] border rounded-md p-2"
                    placeholderText="Select a date"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date */}
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => {
                      setEndDate(date);
                      field.onChange(date); 
                    }}
                    className="w-[500px] h-[60px] border rounded-md p-2"
                    placeholderText="Select a date"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contract Date */}
          <FormField
            control={form.control}
            name="contractDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Contract Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={contractDate}
                    onChange={(date) => {
                      setContractDate(date);
                      field.onChange(date); 
                    }}
                    className="w-[500px] h-[60px] border rounded-md p-2"
                    placeholderText="Select a date"
                  />
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

          {/* Submit Button */}
          <div className="h-[40px] flex justify-center mt-4">
            <Button type="submit" className="h-[40px] w-auto">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
