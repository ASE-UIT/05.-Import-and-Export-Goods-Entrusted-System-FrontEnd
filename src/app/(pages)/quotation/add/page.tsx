"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  quote_request_id: z.string(),
  employee_id: z.string(),
  freight_id: z.string(),
  pickup_date: z.date().optional(),
  delivery_date: z.date().optional(),
  quotation_date: z.date().optional(),
  expired_date: z.date().optional(),
  status: z.string(),
  total_price: z.string(),
});

export default function AddQuotationtPage() {
  const { id: quotation_id } = useParams<{ id: string }>();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [quotationDate, setQuotationDate] = useState<Date | undefined>(undefined);
  const [expiredDate, setExpiredDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (pickupDate) form.setValue("pickup_date", pickupDate);
  }, [pickupDate]);

  useEffect(() => {
    if (deliveryDate) form.setValue("delivery_date", deliveryDate);
  }, [deliveryDate]);

  useEffect(() => {
    if (quotationDate) form.setValue("quotation_date", quotationDate);
  }, [quotationDate]);

  useEffect(() => {
    if (expiredDate) form.setValue("expired_date", expiredDate);
  }, [expiredDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
    <div className="flex w-full justify-between items-end">
      <span className="text-3xl font-bold">Add Quotation</span>
    </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className="flex flex-col items-center w-[600px] gap-4 py-4">
          {/* Quotation ID */}
          <FormField
            control={form.control}
            name="quote_request_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Quotation Request ID</FormLabel>
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

          {/* Freight ID */}
          <FormField
            control={form.control}
            name="freight_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Freight ID</FormLabel>
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
            {/* Pickup Date */}
            <FormItem>
              <FormLabel className="font-bold">Pickup Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
               <FormMessage />
            </FormItem>

            {/* Delivery Date */}
            <FormItem>
              <FormLabel className="font-bold">Delivery Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Quotation Date */} 
            <FormItem>
              <FormLabel className="font-bold">Quotation Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Expired Date */} 
            <FormItem>
              <FormLabel className="font-bold">Expired Date</FormLabel>
              <FormControl>
                <DatePickerDemo />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Price */}
          <FormField
              control={form.control}
              name="total_price"
              render={({ field }) => (
                <FormItem className="w-[500px]">
                  <FormLabel className="font-bold">Total Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Total Price" {...field} />
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
                      <SelectItem value="Pending">Draft</SelectItem>
                      <SelectItem value="Active">Booked</SelectItem>
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
              <Link href="/quotation" className="w-1/2 h-14">
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