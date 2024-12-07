"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { format, isSameDay } from "date-fns";

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
import {
  QuotationDetailsType,
  UpdateQuotationType,
} from "@/schema/quotation.schema";

const formSchema = z.object({
  quoteReqId: z.string().optional(),
  employeeId: z.string().optional(),
  freightId: z.string().optional(),
  pickupDate: z.date(),
  deliveryDate: z.date(),
  quotationDate: z.date(),
  expiredDate: z.date(),
  status: z.string(),
  totalPrice: z.number(),
});

export default function UpdateQuotationtPage() {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [quotationDate, setQuotationDate] = useState<Date | undefined>(undefined);
  const [expiredDate, setExpiredDate] = useState<Date | undefined>(undefined);

  const [isPickupDateOpen, setPickupDateOpen] = useState(false);
  const [isDeliveryDateOpen, setDeliveryDateOpen] = useState(false);
  const [isQuotationDateOpen, setQuotationDateOpen] = useState(false);
  const [isExpiredDateOpen, setExpiredDateOpen] = useState(false);

  const [quotation, setQuotation] = useState<QuotationDetailsType>();
  const path = usePathname();
  const id = path.split("/").pop();
  const { data, error } = useQuotation.useGetQuotationDetails(id);

  const router = useRouter();

  const { mutate: updateQuotation, status } = useQuotation.useUpdateQuotation(
    id,
    router
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handlePickupSelect = (date: Date) => {
    setPickupDate(date);
    setPickupDateOpen(false);
  };

  const handleDeliverySelect = (date: Date) => {
    setDeliveryDate(date);
    setDeliveryDateOpen(false);
  };

  const handleQuotationSelect = (date: Date) => {
    setQuotationDate(date);
    setQuotationDateOpen(false);
  };

  const handleExpiredSelect = (date: Date) => {
    setExpiredDate(date);
    setExpiredDateOpen(false);
  };

  useEffect(() => {
    if (data && data.data.length > 0) {
      const quotationData = data.data[0];
      setQuotation({
        id: quotationData.id,
        quoteReqId: quotationData.quoteReqId,
        employeeId: quotationData.employeeId,
        freightId: quotationData.freightId,
        pickupDate: quotationData.pickupDate,
        deliveryDate: quotationData.deliveryDate,
        quotationDate: quotationData.quotationDate,
        expiredDate: quotationData.expiredDate,
        status: quotationData.status,
        totalPrice: quotationData.totalPrice,
        createdAt: quotationData.createdAt,
        updatedAt: quotationData.updatedAt,
      });
      setPickupDate(new Date(quotationData.pickupDate));
      setDeliveryDate(new Date(quotationData.deliveryDate));
      setQuotationDate(new Date(quotationData.quotationDate));
      setExpiredDate(new Date(quotationData.expiredDate));
      form.setValue("status", quotationData.status);
      form.setValue("quoteReqId", quotationData.quoteReqId);
      form.setValue("employeeId", quotationData.employeeId);
      form.setValue("freightId", quotationData.freightId);
      form.setValue("totalPrice", quotationData.totalPrice);
    }
  }, [data]);

  useEffect(() => {
    if (pickupDate) form.setValue("pickupDate", pickupDate);
  }, [pickupDate]);

  useEffect(() => {
    if (deliveryDate) form.setValue("deliveryDate", deliveryDate);
  }, [deliveryDate]);

  useEffect(() => {
    if (quotationDate) form.setValue("quotationDate", quotationDate);
  }, [quotationDate]);

  useEffect(() => {
    if (expiredDate) form.setValue("expiredDate", expiredDate);
  }, [expiredDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updateQuotationBody: Partial<UpdateQuotationType> = {
      ...(!isSameDay(values.pickupDate, quotation?.pickupDate || new Date()) && {
        pickupDate: values.pickupDate.toISOString(),
      }),
      ...(!isSameDay(values.deliveryDate, quotation?.deliveryDate || new Date()) && {
        deliveryDate: values.deliveryDate.toISOString(),
      }),
      ...(!isSameDay(
        values.quotationDate,
        quotation?.quotationDate || new Date()
      ) && {
        quotationDate: values.quotationDate.toISOString(),
      }),
      ...(!isSameDay(
        values.expiredDate,
        quotation?.expiredDate || new Date()
      ) && {
        expiredDate: values.expiredDate.toISOString(),
      }),
      ...(values.status.toUpperCase() !== quotation?.status.toUpperCase() && {
        status: values.status.toUpperCase(),
      }),
      ...(values.totalPrice !== quotation?.totalPrice && {
        totalPrice: values.totalPrice,
      }),      
    };
    if (Object.keys(updateQuotationBody).length > 0) {
      updateQuotation(updateQuotationBody);
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
        <span className="text-3xl font-bold">Update Quotation</span>
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
                    <Input
                      value={quotation?.id || field.value || ""}
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
                  <FormLabel className="font-bold">Employee ID</FormLabel>
                  <FormControl>
                    <Input
                      value={quotation?.employeeId || field.value || ""}
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
                    <Input
                      value={quotation?.freightId || field.value || ""}
                      readOnly
                      className="w-[500px] h-[60px] bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
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
                      <Popover
                        open={isPickupDateOpen}
                        onOpenChange={setPickupDateOpen}
                    >
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
                            <span>
                              {quotation &&
                                format(quotation.pickupDate, "PPP")}
                            </span>
                          )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={pickupDate}
                            onSelect={(date) => handlePickupSelect(date || new Date())}
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
                      <Popover
                        open={isDeliveryDateOpen}
                        onOpenChange={setDeliveryDateOpen}
                      >
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
                              <span>
                                {quotation && format(quotation.deliveryDate, "PPP")}
                              </span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={deliveryDate}
                            onSelect={(date) => handleDeliverySelect(date || new Date())}
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
                      <Popover
                        open={isQuotationDateOpen}
                        onOpenChange={setQuotationDateOpen}
                      >
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
                              <span>
                                {quotation && format(quotation.quotationDate, "PPP")}
                              </span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={quotationDate}
                            onSelect={(date) => handleQuotationSelect(date || new Date())}
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
                      <Popover
                        open={isExpiredDateOpen}
                        onOpenChange={setExpiredDateOpen}
                      >
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
                              <span>{quotation && format(quotation.expiredDate, "PPP")}</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={expiredDate}
                            onSelect={(date) => handleExpiredSelect(date || new Date())}
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
              name="totalPrice"
              render={({ field }) => (
                <FormItem className="w-[500px]">
                  <FormLabel className="font-bold">Total Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      defaultValue={quotation?.totalPrice}
                      type="number" 
                      className="w-[500px] h-[60px]" 
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
                  <FormLabel className="font-bold">Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={quotation?.status}
                    >
                      <SelectTrigger className="w-[500px] h-[60px]">
                        <SelectValue placeholder={quotation?.status} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Accepted">Accepted</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                        <SelectItem value="Expired">Expired</SelectItem>
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
