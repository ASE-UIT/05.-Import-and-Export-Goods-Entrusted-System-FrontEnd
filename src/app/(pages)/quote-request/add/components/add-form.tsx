"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import DropdownMenuCustom from "./dropdown-menu";
import React, { useEffect, useState } from "react";

import React, { useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import useQuoteRequest from "@/hooks/use-quote-request";
import { CreateQuoteRequestType } from "@/schema/quote-request.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const formSchema = z.object({
  requestDate: z.string(),
  customerId: z.string(),
  cargoInsurance: z.boolean(),
  origin: z.string(),
  destination: z.string(),
  packageType: z.string(),
  shipmentType: z.string(),
  shipmentReadyDate: z.string(),
  shipmentDeadline: z.string(),
  weight: z.string(),
  height: z.string(),
  width: z.string(),
  length: z.string(),
});

export default function QuoteRequestAddForm() {
  const [shipmentReadyDate, setShipmentReadyDate] = useState<Date | undefined>(
    undefined
  );
  const [shipmentDeadline, setShipmentDeadline] = useState<Date | undefined>(
    undefined
  );
  const [requestDate, setRequestDate] = useState<Date | undefined>(undefined);
  const [selectedPackageType, setSelectedPackageType] = useState<string | null>(
    null
  );
  const [selectedShipmentType, setSelectedShipmentType] = useState<
    string | null
  >(null);

  const router = useRouter();

  const { mutate: CreateQuoteRequest } =
    useQuoteRequest.useCreateQuoteRequest(router);
  const { data: customerData } = useQuoteRequest.useGetCustomerInfo();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerId: "",
      requestDate: "",
      origin: "",
      destination: "",
      shipmentReadyDate: "",
      shipmentDeadline: "",
      packageType: "",
      cargoInsurance: false,
      weight: "",
      height: "",
      length: "",
      width: "",
    },
  });

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
    console.log(values);
    const createQuoteRequest: CreateQuoteRequestType = {
      requestDate: values.requestDate,
      customerId: values.customerId,
      cargoInsurance: values.cargoInsurance,
      origin: values.origin,
      destination: values.destination,
      packageType: values.packageType,
      shipmentType: values.shipmentType,
      shipmentReadyDate: values.shipmentReadyDate,
      shipmentDeadline: values.shipmentDeadline,
      weight: values.weight ? parseInt(values.weight, 10) : 0,
      height: values.weight ? parseInt(values.height, 10) : 0,
      width: values.weight ? parseInt(values.width, 10) : 0,
      length: values.weight ? parseInt(values.length, 10) : 0,
    };
    console.log(createQuoteRequest);
    CreateQuoteRequest(createQuoteRequest);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2.5"
      >
        <div className="flex w-full gap-2.5">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="customerId"
              name="customerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Customer Name</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full h-[60px] text-lg ">
                        <SelectValue placeholder="Select customer" />
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
                  <FormMessage />
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
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Origin</FormLabel>
                  <FormControl>
                    <Input placeholder="Origin" {...field} className="w-full" />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
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
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
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
              name="shipmentReadyDate"
              name="shipmentReadyDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-lg">Delivery Start Date</FormLabel>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="shipmentDeadline"
              name="shipmentDeadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-lg">Delivery End Date</FormLabel>
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
                  <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2.5 p-2.5 rounded-md border">
          <div className="flex justify-between items-center">
            <span className="text-1xl font-bold">Package Information :</span>
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
                    selectedOption={selectedPackageType}
                    setSelectedOption={setSelectedPackageType}
                    field={field}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    selectedOption={selectedShipmentType}
                    setSelectedOption={setSelectedShipmentType}
                    field={field}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

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
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
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
                        type="number"
                      />
                    </FormControl>
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
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
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
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex mb-6">
          <Button type="submit">Create</Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
}
