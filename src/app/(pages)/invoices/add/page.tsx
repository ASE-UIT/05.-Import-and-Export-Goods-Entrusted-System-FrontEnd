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
import useInvoice from "@/hooks/use-invoice";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/use-auth";
import { CreateInvoiceBody, CreateInvoiceType } from "@/schema/invoice.schema";
import useContract from "@/hooks/use-contract";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  contractId: z.string(),
  employeeId: z.string(),
  expiredDate: z.date(),
  taxAmount: z.string(),
  totalAmount: z.string(),
});

export default function AddInvoice() {
  const [expiredDate, setExpiredDate] = useState<Date | undefined>(undefined);
  const router = useRouter();
  const { toast } = useToast();

  const { mutate: createInvoice, status } =
    useInvoice.useCreateInvoice(router);
  const { data: sessionData } = useAuth.useGetSession();
  const { data: contracts, isLoading } = useContract.useGetContracts();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const contractIds = contracts?.data.map((contract) => contract.id) || [];


  useEffect(() => {
    if (sessionData) {
      form.setValue("employeeId", sessionData.employee.id);
    }
  }, [sessionData]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    const createInvoiceBody: CreateInvoiceType = {
      contractId: values.contractId,
      employeeId: values.employeeId,
      expiredDate: values.expiredDate,
      taxAmount: values.taxAmount,
      totalAmount: values.totalAmount,
    };
    createInvoice(createInvoiceBody, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Invoice created successfully!",
          variant: "default",
        });
        router.push("/invoices");
      },
      onError: (err) => {
        toast({
          title: "Error",
          description: err.message || "Failed to create invoice.",
          variant: "destructive",
        });
      },
    });
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
          name="contractId"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-bold">Contract ID</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full h-[60px]">
                    <SelectValue placeholder="Select contract ID" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        Loading Contracts...
                      </div>
                    ) : contractIds.length > 0 ? (
                      contractIds.map((id) => (
                        <SelectItem key={id} value={id}>
                          {id}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="flex items-center justify-center">
                        No Contract Available
                      </div>
                    )}
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
              name="employeeId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Employee ID</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value || ""}
                      readOnly
                      className="w-full h-[60px] bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex space-x-[12px]">
            <FormField
                control={form.control}
                name="expiredDate"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">Expired Date</FormLabel>
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
                            onSelect={(date) => {
                              setExpiredDate(date);
                              field.onChange(date);
                            }}                           />
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
              name="taxAmount"
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
              name="totalAmount"
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
              <Link href="/invoices" className="w-1/2 h-14">
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
