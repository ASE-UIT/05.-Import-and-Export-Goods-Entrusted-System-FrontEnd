"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useState } from "react";

const schema = z.object({
  quote_request_id: z.string().nonempty({ message: "Please select an ID" }),
  employee_id: z.string().nonempty({ message: "Please select an ID" }),
  freight_id: z.string().nonempty({ message: "Please select an ID" }),
  pickup_date: z.coerce.date().nullable(),
  delivery_date: z.coerce.date().nullable(),
  quotation_date: z.coerce.date().nullable(),
  expired_date: z.coerce.date().nullable(),
  status: z.string().nonempty({ message: "Please select a status" }),
  total_price: z.string().nonempty({ message: "Price is required" }),
});

export default function AddQuotationtPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      quote_request_id: "",
      employee_id: "",
      freight_id: "",
      pickup_date: null,
      delivery_date: null,
      quotation_date: null,
      expired_date: null,
      status: "",
      total_price: "",
    },
  });

  const router = useRouter();

  const onSubmit = (values: any) => {
    console.log(values);
    router.push("/quotation");
  };

  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
    <div className="flex w-full justify-between">
      <span className="text-3xl font-bold">Update Quotation</span>
    </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Quotation ID */}
          <FormField
            control={form.control}
            name="quote_request_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quotation Request ID</FormLabel>
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

          {/* Freight ID */}
          <FormField
            control={form.control}
            name="freight_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Freight ID</FormLabel>
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
          {/* Pickup Date */}
          <FormField
            control={form.control}
            name="pickup_date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full"> 
                <FormLabel>Pickup Date</FormLabel>
                <FormControl>
                <DatePickerDemo />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Delivery Date */}
          <FormField
            control={form.control}
            name="delivery_date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full"> 
                <FormLabel>Delivery Date</FormLabel>
                <FormControl>
                <DatePickerDemo />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4"> 
          {/* Quotation Date */}
          <FormField
            control={form.control}
            name="quotation_date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full"> 
                <FormLabel>Quotation Date</FormLabel>
                <FormControl>
                <DatePickerDemo />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Expired Date */}
          <FormField
            control={form.control}
            name="expired_date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full"> 
                <FormLabel>Expired Date</FormLabel>
                <FormControl>
                <DatePickerDemo />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                      <SelectItem value="Pending">Draft</SelectItem>
                      <SelectItem value="Active">Booked</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price */}
          <FormField
            control={form.control}
            name="total_price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Total Price"
                    className="w-[500px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

           {/* Button */}
           <div className="flex justify-center mt-6">
            <div className="flex gap-2 w-[300px]">
            <Link href="/quotation" className="w-1/2">
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
