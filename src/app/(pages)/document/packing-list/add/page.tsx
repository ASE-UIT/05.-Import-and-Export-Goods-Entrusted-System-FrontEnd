"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
} from "@/components/ui/form";
import { Controller, useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { CreateDocumentType } from "@/schema/document/packinglist.schema";
import useShipmentTracking from "@/hooks/use-shipment-tracking";

const formSchema = z.object({
  departmentName: z.string(),
  accountNo: z.string(),
  date: z.string(),
  shippingDate: z.string(),
  sentTo: z.string(),
  fromTo: z.string(),
  shippingCo: z.string(),
  rows: z.array(
    z.object({
      qty: z.string(),
      description: z.string(),
      weight: z.string(),
      productNumber: z.string(),
    }),
  ),
  signature: z.string(),
  instructions: z.string(),
  shipmentId: z.string(),
  docNumber: z.string(),
});
export default function PackingList() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [shippingDate, setShippingDate] = useState<Date | undefined>(undefined);
  const [rows, setRows] = useState(
    Array(1).fill({ qty: "", description: "", weight: "", productNumber: "" }),
  );

  const router = useRouter();
  const { mutate: CreateDocument } = useDocument.useCreateDocument(router);
  const { data: documents } = useDocument.useGetAllDocument("PACKING_LIST");
  const {
    data: shipments,
    isLoading: isLoadingShipments,
    error: shipmentError,
  } = useShipmentTracking.useGetShipment(
    undefined,
    undefined,
    undefined,
    undefined,
  );
  const documentShipmentIds = documents?.data?.shipmentId;
  console.log("document id " + documentShipmentIds);

  const filteredShipments = shipments?.results.filter(
    (shipment) => !documentShipmentIds?.includes(shipment.id),
  );
  console.log("shipment id" + filteredShipments);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { qty: "", description: "", weight: "", productNumber: "" },
    ]);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departmentName: "",
      accountNo: "",
      date: "",
      shippingDate: "",
      sentTo: "",
      fromTo: "",
      shippingCo: "",
      rows: Array(1).fill({
        qty: "",
        description: "",
        weight: "",
        productNumber: "",
      }),
      signature: "",
      instructions: "",
      shipmentId: "",
      docNumber: "",
    },
  });

  useEffect(() => {
    if (date) form.setValue("date", format(date, "yyyy-MM-dd"));
  }, [date]);

  useEffect(() => {
    if (shippingDate)
      form.setValue("shippingDate", format(shippingDate, "yyyy-MM-dd"));
  }, [shippingDate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Packing List Data:", values);
    const fields = {
      departmentName: values.departmentName,
      accountNo: values.accountNo,
      date: values.date,
      shippingDate: values.shippingDate,
      sentTo: values.sentTo,
      fromTo: values.fromTo,
      shippingCo: values.shippingCo,
      rows: values.rows,
      signature: values.signature,
      instructions: values.instructions,
    };
    const createQuoteRequest: CreateDocumentType = {
      shipmentId: values.shipmentId,
      type: "PACKING_LIST",
      docNumber: values.docNumber,
      fields,
    };
    console.log(createQuoteRequest);
    CreateDocument(createQuoteRequest);
  }
  return (
    <div className="mx-auto w-full max-w-5xl border border-gray-300 bg-white p-8 shadow-md">
      <div className="mb-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Company Name</h1>
        <div className="mt-2 text-center text-sm">
          <p>Address will go here, City, State, Zip</p>
          <p>Tel: 000-000-0000 | Fax: 000-000-0000</p>
          <p>Email: info@company.com</p>
        </div>
      </div>

      <h2 className="mb-4 text-center text-2xl font-bold">Packing List</h2>

      <div className="mb-6 gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="departmentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Department Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter department name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Account No:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter account number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-lg">Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "flex h-[60px] w-full items-center justify-start pl-3 text-lg font-normal hover:bg-primary",
                              !field.value && "text-black",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto rounded-md border bg-white p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(date) => setDate(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shippingDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-lg">Shipping Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "flex h-[60px] w-full items-center justify-start pl-3 text-lg font-normal hover:bg-primary",
                              !field.value && "text-black",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto rounded-md border bg-white p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(date) => setShippingDate(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sentTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Sent To:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter recipient" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fromTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">From To:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter sender" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shippingCo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Shipping Co:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter shipping company" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shipmentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Shipment</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="h-[60px] w-full text-lg">
                          <SelectValue placeholder="Shipment" />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredShipments ? (
                            filteredShipments.map((it) => (
                              <SelectItem key={it.id} value={it.id}>
                                {it.id}
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
              <FormField
                control={form.control}
                name="docNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Document Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter doc number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <table className="mb-6 w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2">Sr #</th>
                  <th className="border border-gray-400 p-2">Qty</th>
                  <th className="border border-gray-400 p-2">Description</th>
                  <th className="border border-gray-400 p-2">Weight</th>
                  <th className="border border-gray-400 p-2">Product #</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((_, index) => (
                  <tr key={index} className="odd:bg-gray-50 even:bg-gray-100">
                    <td className="border border-gray-400 p-2 text-center">
                      {index + 1}
                    </td>

                    <td className="border border-gray-400 p-2">
                      <FormField
                        control={form.control}
                        name={`rows.${index}.qty`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Qty"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>

                    <td className="border border-gray-400 p-2">
                      <FormField
                        control={form.control}
                        name={`rows.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Description" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>

                    <td className="border border-gray-400 p-2">
                      <FormField
                        control={form.control}
                        name={`rows.${index}.weight`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Weight"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>

                    <td className="border border-gray-400 p-2">
                      <FormField
                        control={form.control}
                        name={`rows.${index}.productNumber`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Product #" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button type="button" onClick={addRow} className="mb-4">
              Add Row
            </Button>
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Instruction</h3>
              <FormField
                control={form.control}
                name="instructions"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Enter instructions here"
                        className="mt-2 w-full"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex-1 text-center">
                <p className="text-sm font-semibold">Authorized Signatures</p>
                <div className="mt-4 border-t py-2">
                  {/* FormField for Signature */}
                  <FormField
                    control={form.control}
                    name="signature"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Signature" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
