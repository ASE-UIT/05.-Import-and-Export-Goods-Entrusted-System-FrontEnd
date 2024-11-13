"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Input } from "@/components/ui/input";

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
import {
  ContractDetailsType,
  UpdateContractType,
} from "@/schema/contract.schema";

const formSchema = z
  .object({
    quotationId: z.string().optional(),
    employeeId: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    contractDate: z.string(),
    status: z.string(),
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

export default function UpdateContractPage() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [contractDate, setContractDate] = useState<Date | undefined>();

  const [isStartDateOpen, setStartDateOpen] = useState(false);
  const [isEndDateOpen, setEndDateOpen] = useState(false);
  const [isContractDateOpen, setContractDateOpen] = useState(false);

  const [contract, setContract] = useState<ContractDetailsType>();
  const path = usePathname();
  const id = path.split("/").pop();
  const { data, error } = useContract.useGetContractDetails(id);

  const router = useRouter();

  const { mutate: updateContract, status } = useContract.useUpdateContract(
    id,
    router
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleDateSelect = (date: Date) => {
    setStartDate(date);
    setStartDateOpen(false);
  };

  const handleEndSelect = (date: Date) => {
    setEndDate(date);
    setEndDateOpen(false);
  };

  const handleContractSelect = (date: Date) => {
    setContractDate(date);
    setContractDateOpen(false);
  };

  useEffect(() => {
    if (data && data.data.length > 0) {
      const contractData = data.data[0];
      setContract({
        id: contractData.id,
        quotationId: contractData.quotationId,
        employeeId: contractData.employeeId,
        startDate: contractData.startDate,
        contractDate: contractData.contractDate,
        endDate: contractData.endDate,
        status: contractData.status,
        createdAt: contractData.createdAt,
        updatedAt: contractData.updatedAt,
      });
      setStartDate(parseISO(contractData.startDate));
      setEndDate(parseISO(contractData.endDate));
      setContractDate(parseISO(contractData.contractDate));
      form.setValue("status", contractData.status);
    }
  }, [data]);

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
    const updateContractBody: Partial<UpdateContractType> = {
      ...(values.startDate !== contract?.startDate && {
        startDate: values.startDate,
      }),
      ...(values.endDate !== contract?.endDate && { endDate: values.endDate }),
      ...(values.contractDate !== contract?.contractDate && {
        contractDate: values.contractDate,
      }),
      ...(values.status.toUpperCase() !== contract?.status && {
        status: values.status.toUpperCase(),
      }),
    };
    if (Object.keys(updateContractBody).length > 0) {
      updateContract(updateContractBody);
    } else {
      form.setError("root", {
        type: "validate",
        message:
          "No changes detected. The current data is identical to the previous version.",
      });
    }
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Contract</span>
      </div>
      {error ? (
        error.message
      ) : (
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
                      <Input
                        value={contract?.id || field.value || ""}
                        readOnly
                        className="w-[500px] h-[60px] bg-gray-100 text-gray-500 cursor-not-allowed"
                      />
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
                        value={contract?.employeeId || field.value || ""}
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
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel className="text-[16px] font-bold">
                        Start Date
                      </FormLabel>
                      <FormControl>
                        <Popover
                          open={isStartDateOpen}
                          onOpenChange={setStartDateOpen}
                        >
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
                                <span>
                                  {contract &&
                                    format(parseISO(contract.startDate), "PPP")}
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={(date) =>
                                handleDateSelect(date || new Date())
                              }
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
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel className="text-[16px] font-bold">
                        End Date
                      </FormLabel>
                      <FormControl>
                        <Popover
                          open={isEndDateOpen}
                          onOpenChange={setEndDateOpen}
                        >
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
                                <span>
                                  {contract &&
                                    format(parseISO(contract.endDate), "PPP")}
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={endDate}
                              onSelect={(date) =>
                                handleEndSelect(date || new Date())
                              }
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
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel className="text-[16px] font-bold">
                        Contract Date
                      </FormLabel>
                      <FormControl>
                        <Popover
                          open={isContractDateOpen}
                          onOpenChange={setContractDateOpen}
                        >
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
                                <span>
                                  {contract &&
                                    format(
                                      parseISO(contract.contractDate),
                                      "PPP"
                                    )}
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={contractDate}
                              onSelect={(date) =>
                                handleContractSelect(date || new Date())
                              }
                            />
                          </PopoverContent>
                        </Popover>
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
                    <FormLabel className="font-bold">Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={contract?.status}
                      >
                        <SelectTrigger className="w-[500px] h-[60px]">
                          <SelectValue placeholder={contract?.status} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending">PENDING</SelectItem>
                          <SelectItem value="Active">ACTIVE</SelectItem>
                          <SelectItem value="Terminated">TERMINATED</SelectItem>
                          <SelectItem value="Expired">EXPIRED</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormMessage className="text-[14px]">
                {form.formState.errors.root?.message}
              </FormMessage>
            </div>
            {/* Button */}
            <div className="flex justify-center mt-6">
              <div className="w-1/2 flex gap-2.5">
                <Link href="/contracts" className="w-1/2 h-14">
                  <Button
                    className="w-full h-10 text-lg"
                    variant={"outline"}
                    type="button"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button className="w-1/2 h-10 text-lg" type="submit">
                  {status === "pending" ? "Updating..." : "Save"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
