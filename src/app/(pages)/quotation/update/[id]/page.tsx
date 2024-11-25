"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useEffect } from "react";
import { format } from "date-fns";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  quote_request_id: z.string(),
  employee_id: z.string(),
  freight_id: z.string(),
  pickup_date: z.date(),
  delivery_date: z.date(),
  quotation_date: z.date(),
  expired_date: z.date(),
  status: z.string(),
  total_price: z.string(),
});

export default function UpdateQuotationtPage() {
  // const { id: quotation_id } = useParams<{ id: string }>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [quotationDate, setQuotationDate] = useState<Date | undefined>(
    undefined
  );
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
    console.log({
      ...values,
      pickup_date: values.pickup_date
        ? format(values.pickup_date, "d-M-yyyy")
        : undefined,
      delivery_date: values.delivery_date
        ? format(values.delivery_date, "d-M-yyyy")
        : undefined,
      quotation_date: values.quotation_date
        ? format(values.quotation_date, "d-M-yyyy")
        : undefined,
      expired_date: values.expired_date
        ? format(values.expired_date, "d-M-yyyy")
        : undefined,
    });
  }
  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Quotation</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Quotation ID */}
            <FormField
              control={form.control}
              name="quote_request_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Quotation Request ID
                  </FormLabel>
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

            <div className="w-[500px] flex space-x-[12px]">
              {/* Pickup Date */}
              <FormField
                control={form.control}
                name="pickup_date"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Pickup Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !pickupDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {pickupDate ? (
                              format(pickupDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={pickupDate}
                            onSelect={(date) => setPickupDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Delivery Date */}
              <FormField
                control={form.control}
                name="delivery_date"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Delivery Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !deliveryDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {deliveryDate ? (
                              format(deliveryDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={deliveryDate}
                            onSelect={(date) => setDeliveryDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[500px] flex space-x-[12px]">
              {/* Quotation Date */}
              <FormField
                control={form.control}
                name="quotation_date"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Quotation Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !quotationDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {quotationDate ? (
                              format(quotationDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={quotationDate}
                            onSelect={(date) => setQuotationDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Expired Date */}
              <FormField
                control={form.control}
                name="expired_date"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Expired Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !expiredDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {expiredDate ? (
                              format(expiredDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={expiredDate}
                            onSelect={(date) => setExpiredDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                <Button
                  className="w-full h-10 text-lg"
                  variant={"outline"}
                  type="button"
                >
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
