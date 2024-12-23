"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
import useQuotation from "@/hooks/use-quotation";
import { useRouter } from "next/navigation";
import { CreateQuotationType } from "@/schema/quotation.schema";
import useAuth from "@/hooks/use-auth";
import useService from "@/hooks/use-service";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";

const formSchema = z.object({
  quoteReqId: z.string(),
  employeeId: z.string(),
  freightId: z.string(),
  pickupDate: z.string(),
  deliveryDate: z.string(),
  quotationDate: z.string(),
  expiredDate: z.string(),
  serviceId: z.array(z.string()),
});

export default function AddQuotationtPage() {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [quotationDate, setQuotationDate] = useState<Date | undefined>(
    undefined
  );
  const [expiredDate, setExpiredDate] = useState<Date | undefined>(undefined);
  const [quoteRequest, setQuoteRequest] = useState<string[]>();
  const [freights, setFreight] = useState<string[]>();

  const { data: listService } = useService.useGetService();

  const router = useRouter();
  const { data: quoteRequestData } = useQuotation.useGetBookedQuoteRequest();
  const { data: freightData } = useQuotation.useGetFreight();
  const { mutateAsync: createQuotation, status } =
    useQuotation.useCreateQuotation(router);
  const { data: sessionData } = useAuth.useGetSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quoteReqId: "",
      employeeId: "",
      freightId: "",
      pickupDate: "",
      deliveryDate: "",
      quotationDate: "",
      expiredDate: "",
      serviceId: [],
    },
  });

  useEffect(() => {
    if (sessionData && sessionData.employee.id) {
      form.setValue("employeeId", sessionData.employee.id);
    }
  }, [sessionData, form]);

  useEffect(() => {
    if (quoteRequestData) {
      const quoteRequest = quoteRequestData.map((it) => it.id);
      setQuoteRequest(quoteRequest);
    }
  }, [quoteRequestData]);

  useEffect(() => {
    if (freightData?.data?.results) {
      const freights = freightData.data.results.map((it) => it.id);
      setFreight(freights);
    } else {
      console.error("Freight data is not valid:", freightData);
    }
  }, [freightData]);

  useEffect(() => {
    if (pickupDate)
      form.setValue("pickupDate", format(pickupDate, "yyyy-MM-dd"));
  }, [pickupDate, form]);

  useEffect(() => {
    if (quotationDate)
      form.setValue("quotationDate", format(quotationDate, "yyyy-MM-dd"));
  }, [quotationDate, form]);

  useEffect(() => {
    if (expiredDate)
      form.setValue("expiredDate", format(expiredDate, "yyyy-MM-dd"));
  }, [expiredDate, form]);

  useEffect(() => {
    if (deliveryDate)
      form.setValue("deliveryDate", format(deliveryDate, "yyyy-MM-dd"));
  }, [deliveryDate, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const createQuotationBody: CreateQuotationType = {
      quoteReqId: values.quoteReqId,
      employeeId: values.employeeId,
      freightId: values.freightId,
      pickupDate: values.pickupDate,
      deliveryDate: values.deliveryDate,
      quotationDate: values.quotationDate,
      expiredDate: values.expiredDate,
      serviceId: values.serviceId,
    };
    createQuotation(createQuotationBody, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Quotation has been added successfully",
        });
      },
      onError: (error: ErrorType) => {
        toast({
          title: "Error",
          description: error?.errors?.[0]?.message || error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Quotation</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Quote Request ID */}
            <FormField
              control={form.control}
              name="quoteReqId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">
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
                        {quoteRequest ? (
                          quoteRequest.map((it) => (
                            <SelectItem key={it} value={it}>
                              {it}
                            </SelectItem>
                          ))
                        ) : (
                          <div className="flex items-center justify-center">
                            No Quote Request Available
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

            {/* Freight ID */}
            <FormField
              control={form.control}
              name="freightId"
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
                        {freights ? (
                          freights.map((it) => (
                            <SelectItem key={it} value={it}>
                              {it}
                            </SelectItem>
                          ))
                        ) : (
                          <div className="flex items-center justify-center">
                            No Freight Available
                          </div>
                        )}
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
                name="pickupDate"
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
                name="deliveryDate"
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
                name="quotationDate"
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
                name="expiredDate"
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

            {/* Services */}

            <FormField
              control={form.control}
              name="serviceId" // Changed from serviceIds to serviceId to match schema
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base font-bold">
                    Services
                  </FormLabel>
                  <FormControl>
                    <div className="grid gap-4">
                      {listService?.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            checked={field.value?.includes(service.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, service.id]
                                : field.value.filter((id) => id !== service.id);
                              field.onChange(updatedValue);
                            }}
                          />
                          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {service.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Button */}
          <div className="flex justify-center mt-6">
            <div className="w-1/2 flex gap-2.5">
              <Link href="/quotations" className="w-1/2 h-14">
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
