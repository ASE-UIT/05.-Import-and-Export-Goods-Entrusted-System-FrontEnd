"use client";

import { Button } from "@/components/ui/button";
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
import useContract from "@/hooks/use-contract";
import { useRouter } from "next/navigation";
import { CreateContractType } from "@/schema/contract.schema";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/use-auth";

const formSchema = z
  .object({
    quotationId: z.string(),
    employeeId: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    contractDate: z.string(),
  })
  .refine(
    (data) => {
      return new Date(data.endDate) > new Date(data.startDate);
    },
    {
      message: "End Date must be greater than start date",
      path: ["endDate"],
    }
  )
  .refine(
    (data) => {
      return new Date(data.startDate) >= new Date(data.contractDate);
    },
    {
      message: "Contract Date must be less than or equal to start date",
      path: ["contractDate"],
    }
  );

export default function AddContractPage() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [contractDate, setContractDate] = useState<Date | undefined>(undefined);
  const [acceptedQuotations, setAcceptedQuotations] = useState<string[]>();

  const router = useRouter();
  const { data: acceptedQuotationData } =
    useContract.useAcceptedBookedQuotations();
  const { mutate: createContract, status } =
    useContract.useCreateContract(router);
  const { data: sessionData } = useAuth.useGetSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (sessionData && sessionData.employee.id) {
      form.setValue("employeeId", sessionData.employee.id);
    }
  }, [sessionData]);

  useEffect(() => {
    if (acceptedQuotationData) {
      const quotations = acceptedQuotationData.map((it) => it.id);
      setAcceptedQuotations(quotations);
    }
  }, [acceptedQuotationData]);

  useEffect(() => {
    if (startDate) form.setValue("startDate", format(startDate, "yyyy-MM-dd"));
  }, [startDate]);

  useEffect(() => {
    if (endDate) form.setValue("endDate", format(endDate, "yyyy-MM-dd"));
  }, [endDate]);

  useEffect(() => {
    if (contractDate)
      form.setValue("contractDate", format(contractDate, "yyyy-MM-dd"));
  }, [contractDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const createContractBody: CreateContractType = {
      employeeId: values.employeeId,
      quotationId: values.quotationId,
      status: "PENDING",
      startDate: values.startDate,
      endDate: values.endDate,
      contractDate: values.contractDate,
    };
    createContract(createContractBody);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Contract</span>
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
              name="quotationId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">
                    Quotation ID
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
                        {acceptedQuotations ? (
                          acceptedQuotations.map((it) => (
                            <SelectItem key={it} value={it}>
                              {it}
                            </SelectItem>
                          ))
                        ) : (
                          <div className="flex items-center justify-center">
                            No Quotations Available
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
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">
                    Employee ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      value={field.value || ""}
                      readOnly
                      className="w-[500px] h-[60px] bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-[500px] flex space-x-[12px]">
              {/* Start Date */}
              <FormField
                control={form.control}
                name="startDate"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Start Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !startDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? (
                              format(startDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={(date) => setStartDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* End Date */}
              <FormField
                control={form.control}
                name="endDate"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      End Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !endDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? (
                              format(endDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={(date) => setEndDate(date)}
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
              {/* Contract Date */}
              <FormField
                control={form.control}
                name="contractDate"
                render={() => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-[16px] font-bold">
                      Contract Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full h-[60px] justify-start text-left font-normal ${
                              !contractDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {contractDate ? (
                              format(contractDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={contractDate}
                            onSelect={(date) => setContractDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-center mt-6">
            <div className="w-1/2 flex gap-2.5">
              <Link href="/contract" className="w-1/2 h-14">
                <Button
                  className="w-full h-10 text-lg"
                  variant={"outline"}
                  type="button"
                >
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
