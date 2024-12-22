"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import DropdownMenuCustom from "../../add/components/dropdown-menu";
import React, { useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useParams, useRouter } from "next/navigation";
import useQuoteRequest from "@/hooks/use-quote-request";
import { UpdateQuoteRequestType } from "@/schema/quote-request.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const formSchema = z.object({
  requestDate: z.string(),
  userId: z.string(),
  cargoInsurance: z.boolean(),
  origin: z.string(),
  destination: z.string(),
  packageType: z.string(),
  status: z.string(),
  shipmentType: z.string(),
  shipmentReadyDate: z.string(),
  shipmentDeadline: z.string(),
  weight: z.string(),
  height: z.string(),
  width: z.string(),
  length: z.string(),
});

export default function QuoteRequestUpdateForm() {
  const { id: quoteRequestId } = useParams<{ id: string }>();

  const [shipmentReadyDate, setShipmentReadyDate] = useState<Date | undefined>(
    undefined
  );
  const [shipmentDeadline, setShipmentDeadline] = useState<Date | undefined>(
    undefined
  );
  const [requestDate, setRequestDate] = useState<Date | undefined>(undefined);

  const router = useRouter();

  const { mutate: UpdateQuoteRequest } = useQuoteRequest.useUpdateQuoteRequest(
    quoteRequestId,
    router
  );
  const { data: customerData } = useQuoteRequest.useGetCustomerInfo();
  const { data: getFullDetails } =
    useQuoteRequest.useGetFullQuoteRequestDetail(quoteRequestId);

  const defaultCustomer = customerData?.data.results?.find(
    (customer) => customer.id === getFullDetails?.customerId
  );
  const customerName = defaultCustomer ? defaultCustomer.name : "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      requestDate: "",
      origin: "",
      destination: "",
      shipmentReadyDate: "",
      shipmentDeadline: "",
      status: "",
      packageType: "",
      shipmentType: "",
      cargoInsurance: false,
      weight: "",
      height: "",
      length: "",
      width: "",
    },
  });
  useEffect(() => {
    if (getFullDetails) {
      form.reset({
        userId: getFullDetails.customerId || "",
        requestDate: getFullDetails.requestDate
          ? format(new Date(getFullDetails.requestDate), "yyyy-MM-dd")
          : "",
        origin: getFullDetails.quoteReqDetails?.origin || "",
        destination: getFullDetails.quoteReqDetails?.destination || "",
        shipmentReadyDate: getFullDetails.quoteReqDetails?.shipmentReadyDate
          ? format(
              new Date(getFullDetails.quoteReqDetails.shipmentReadyDate),
              "yyyy-MM-dd"
            )
          : "",
        shipmentDeadline: getFullDetails.quoteReqDetails?.shipmentDeadline
          ? format(
              new Date(getFullDetails.quoteReqDetails.shipmentDeadline),
              "yyyy-MM-dd"
            )
          : "",
        status: getFullDetails.status || "",
        packageType:
          getFullDetails.quoteReqDetails?.packageDetails?.packageType || "",
        cargoInsurance: getFullDetails.quoteReqDetails?.cargoInsurance || false,
        shipmentType: getFullDetails.quoteReqDetails?.shipmentType || "",
        weight:
          getFullDetails.quoteReqDetails?.packageDetails?.weight?.toString() ||
          "",
        height:
          getFullDetails.quoteReqDetails?.packageDetails?.height?.toString() ||
          "",
        length:
          getFullDetails.quoteReqDetails?.packageDetails?.length?.toString() ||
          "",
        width:
          getFullDetails.quoteReqDetails?.packageDetails?.width?.toString() ||
          "",
      });

      if (getFullDetails.requestDate) {
        setRequestDate(new Date(getFullDetails.requestDate));
      }
      if (getFullDetails.quoteReqDetails?.shipmentReadyDate) {
        setShipmentReadyDate(
          new Date(getFullDetails.quoteReqDetails.shipmentReadyDate)
        );
      }
      if (getFullDetails.quoteReqDetails?.shipmentDeadline) {
        setShipmentDeadline(
          new Date(getFullDetails.quoteReqDetails.shipmentDeadline)
        );
      }
    }
  }, [getFullDetails, form]);

  useEffect(() => {
    if (shipmentReadyDate)
      form.setValue(
        "shipmentReadyDate",
        format(shipmentReadyDate, "yyyy-MM-dd")
      );
  }, [shipmentReadyDate]);

  useEffect(() => {
    if (shipmentDeadline)
      form.setValue("shipmentDeadline", format(shipmentDeadline, "yyyy-MM-dd"));
  }, [shipmentDeadline]);

  useEffect(() => {
    if (requestDate)
      form.setValue("requestDate", format(requestDate, "yyyy-MM-dd"));
  }, [requestDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updateQuoteRequest: UpdateQuoteRequestType = {
      requestDate: values.requestDate,
      userId: values.userId,
      cargoInsurance: values.cargoInsurance,
      origin: values.origin,
      destination: values.destination,
      packageType: values.packageType,
      shipmentType: values.shipmentType,
      status: values.status,
      shipmentReadyDate: values.shipmentReadyDate,
      shipmentDeadline: values.shipmentDeadline,
      weight: values.weight ? parseInt(values.weight, 10) : 0,
      height: values.weight ? parseInt(values.height, 10) : 0,
      width: values.weight ? parseInt(values.width, 10) : 0,
      length: values.weight ? parseInt(values.length, 10) : 0,
    };
    console.log(updateQuoteRequest);
    UpdateQuoteRequest(updateQuoteRequest);
  }
  return (
    <div className="flex flex-col p-[24px] w-full h-full flex-grow ">
      <div className="flex flex-col w-full gap-[20px] ">
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-bold">Update Quote Request</span>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-2.5"
          >
            <div className="flex w-full gap-2.5">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Customer Name</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full h-[60px] text-lg ">
                            <SelectValue placeholder={customerName} />
                          </SelectTrigger>
                          <SelectContent>
                            {customerData?.data.results ? (
                              customerData.data.results.map((it) => (
                                <SelectItem key={it.id} value={it.id}>
                                  {it.name}
                                </SelectItem>
                              ))
                            ) : (
                              <div className="flex items-center justify-center">
                                No Customer Available
                              </div>
                            )}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="requestDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-lg">Request Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full h-[60px] pl-3 text-lg font-normal flex items-center justify-start hover:bg-primary",
                                !field.value && "text-black"
                              )}
                            >
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-white rounded-md border"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={(date) => setRequestDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex w-full gap-2.5">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="origin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Origin</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Origin"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Destination</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="City, Port"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex w-full gap-2.5">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="shipmentReadyDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-lg">
                        Delivery Start Date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full h-[60px] pl-3 text-lg font-normal flex items-center justify-start hover:bg-primary",
                                !field.value && "text-black"
                              )}
                            >
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-white rounded-md border"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={(date) => setShipmentReadyDate(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="shipmentDeadline"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-lg">
                        Delivery End Date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full h-[60px] pl-3 text-lg font-normal flex items-center justify-start hover:bg-primary",
                                !field.value && "text-black"
                              )}
                            >
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-white rounded-md border"
                          align="start"
                          side="bottom"
                        >
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={(date) => setShipmentDeadline(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="cargoInsurance"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Cargo Insurance
                    </label>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2.5 p-2.5 rounded-md border">
              <div className="flex w-full gap-2.5">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-1xl font-bold">
                      Package Information :
                    </span>
                  </div>
                  <FormField
                    control={form.control}
                    name="packageType"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <DropdownMenuCustom<z.infer<typeof formSchema>>
                            options={["DRY", "SEA", "FREEZE"]}
                            label="Package Type"
                            selectedOption={field.value}
                            setSelectedOption={field.onChange}
                            field={field}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-1xl font-bold">Shipment Type :</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="shipmentType"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <DropdownMenuCustom<z.infer<typeof formSchema>>
                            options={["AIR", "LAND", "FCL", "LCL"]}
                            label="Shipment Type"
                            selectedOption={field.value}
                            setSelectedOption={field.onChange}
                            field={field}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-1xl font-bold">Status :</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <DropdownMenuCustom<z.infer<typeof formSchema>>
                            options={[
                              "PENDING",
                              "INPROGRESS",
                              "COMPLETED",
                              "CANCELLED",
                            ]}
                            label="Status"
                            selectedOption={field.value}
                            setSelectedOption={field.onChange}
                            field={field}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex w-full gap-2.5">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Weight</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Weight"
                            {...field}
                            className="w-full"
                            type="number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Height</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Height"
                            {...field}
                            className="w-full"
                            type="number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex w-full gap-2.5">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Length</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Length"
                            {...field}
                            className="w-full"
                            type="number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Width</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Width"
                            {...field}
                            className="w-full"
                            type="number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex mb-6">
              <Button type="submit">Update</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
