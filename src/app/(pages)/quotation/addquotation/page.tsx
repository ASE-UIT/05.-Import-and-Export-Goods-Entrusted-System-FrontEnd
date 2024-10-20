"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  pickupDate: z.coerce.date().nullable(),
  deliveryDate: z.coerce.date().nullable(),
  quotationDate: z.coerce.date().nullable(),
  expiredDate: z.coerce.date().nullable(),
  status: z.string().nonempty({ message: "Please select a status" }),
  price: z.string().nonempty({ message: "Price is required" }),
});

export default function AddQuotationtPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      quoteID: "",
      employeeID: "",
      pickupDate: null,
      deliveryDate: null,
      quotationDate: null,
      expiredDate: null,
      status: "",
      price: "",
    },
  });

  const router = useRouter();
  
  // Separate states for each date
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  const [quotationDate, setQuotationDate] = useState<Date | null>(null);
  const [expiredDate, setExpiredDate] = useState<Date | null>(null);

  const onSubmit = (values: any) => {
    console.log(values);
    router.push("/quotation");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Quotation</h1>
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

          {/* Pickup Date */}
          <FormField
            control={form.control}
            name="pickupDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Pickup Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={pickupDate}
                    onChange={(date) => {
                      setPickupDate(date);
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

          {/* Delivery Date */}
          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Delivery Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={deliveryDate}
                    onChange={(date) => {
                      setDeliveryDate(date);
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

          {/* Quotation Date */}
          <FormField
            control={form.control}
            name="quotationDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Quotation Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={quotationDate}
                    onChange={(date) => {
                      setQuotationDate(date);
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

          {/* Expired Date */}
          <FormField
            control={form.control}
            name="expiredDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Expired Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={expiredDate}
                    onChange={(date) => {
                      setExpiredDate(date);
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
          {/* Price */}
          <FormField
            control={form.control}
            name="price"
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
