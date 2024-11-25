"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import Link from "next/link";
import { format } from "date-fns"; // Import format function

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  contract_id: z.string(),
  employee_id: z.string(),
  invoice_date: z.date().optional(),
  paid_date: z.date().optional(),
  tax: z.string(),
  total_amount: z.string(),
});

export default function AddInvoice() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // State for invoice date and paid date
  const [invoiceDate, setInvoiceDate] = useState<Date | undefined>(undefined);
  const [paidDate, setPaidDate] = useState<Date | undefined>(undefined);

  // Sync invoice date with form when it changes
  useEffect(() => {
    if (invoiceDate) {
      form.setValue("invoice_date", invoiceDate);
    }
  }, [invoiceDate]);

  // Sync paid date with form when it changes
  useEffect(() => {
    if (paidDate) {
      form.setValue("paid_date", paidDate);
    }
  }, [paidDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here we format the date when displaying in the console or sending to an API
    console.log({
      ...values,
      invoice_date: values.invoice_date
        ? format(values.invoice_date, "d-M-yyyy")
        : undefined,
      paid_date: values.paid_date
        ? format(values.paid_date, "d-M-yyyy")
        : undefined,
    });
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Invoice</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Contract ID */}
            <FormField
              control={form.control}
              name="contract_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Contract ID</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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

            {/* Date pickers */}
            <div className="w-full flex space-x-[12px]">
              {/* Invoice Date */}
              <FormField
                control={form.control}
                name="invoice_date"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Invoice Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !invoiceDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {invoiceDate ? (
                              format(invoiceDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={invoiceDate}
                            onSelect={(date) => setInvoiceDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Paid Date */}
              <FormField
                control={form.control}
                name="paid_date"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Paid Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !paidDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {paidDate ? (
                              format(paidDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={paidDate}
                            onSelect={(date) => setPaidDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <Link href="/payment" className="w-1/2 h-14">
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
