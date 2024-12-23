"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import useDocument from "@/hooks/use-document";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  docNumber: z.string(),
  shipmentId: z.string(),
  seller: z.string(),
  soldTo: z.string(),
  shipTo: z.string(),
  invoiceNumber: z.string(),
  invoiceDate: z.date(),
  customerReferenceNumber: z.string(),
  customerDate: z.date(),
  termsOfSale: z.string(),
  termsOfPayment: z.string(),
  currencyOfSettlement: z.string(),
  modeOfShipment: z.string(),
  billOfLadingAWB: z.string(),
  products: z.array(
    z.object({
      qty: z.number(),
      description: z.string(),
      unitOfMeasure: z.number(),
      unitPrice: z.number(),
    })
  ),
  totalPrice: z.string(),
  packageMarks: z.string(),
  totalCommercialValue: z.string(),
  miscCharges: z.string(),
  totalInvoiceValue: z.string(),
  certifications: z.string(),
});

export const CommercialInvoiceForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      docNumber: "",
      shipmentId: "",
      seller: "",
      soldTo: "",
      shipTo: "",
      invoiceNumber: "",
      invoiceDate: new Date(),
      customerReferenceNumber: "",
      customerDate: new Date(),
      termsOfSale: "",
      termsOfPayment: "",
      currencyOfSettlement: "",
      modeOfShipment: "",
      billOfLadingAWB: "",
      products: [{ qty: 0, description: "", unitOfMeasure: 0, unitPrice: 0 }],
      totalPrice: "",
      packageMarks: "",
      totalCommercialValue: "",
      miscCharges: "",
      totalInvoiceValue: "",
      certifications: "",
    },
  });

  const router = useRouter();
  const { mutate: CreateDocument } = useDocument.useCreateDocument(router);

  const { data: shipments, isLoading: isLoadingShipments } =
    useShipmentTracking.useGetShipment();

  const products = form.watch("products");

  useEffect(() => {
    const totalPrice = products.reduce((total, product) => {
      const qty = product.qty;
      const unitPrice = product.unitPrice;
      return total + qty * unitPrice;
    }, 0);
    form.setValue("totalPrice", totalPrice.toString());
  }, [products]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Commercial Invoice Data:", values);
    const fields = {
      docNumber: values.docNumber,
      shipmentId: values.shipmentId,
      seller: values.seller,
      soldTo: values.soldTo,
      shipTo: values.shipTo,
      invoiceNumber: values.invoiceNumber,
      invoiceDate: values.invoiceDate,
      customerReferenceNumber: values.customerReferenceNumber,
      customerDate: values.customerDate,
      termsOfSale: values.termsOfSale,
      termsOfPayment: values.termsOfPayment,
      currencyOfSettlement: values.currencyOfSettlement,
      modeOfShipment: values.modeOfShipment,
      billOfLadingAWB: values.billOfLadingAWB,
      products: values.products,
      totalPrice: values.totalPrice,
      packageMarks: values.packageMarks,
      totalCommercialValue: values.totalCommercialValue,
      miscCharges: values.miscCharges,
      totalInvoiceValue: values.totalInvoiceValue,
      certifications: values.certifications,
    };
    const createQuoteRequest = {
      shipmentId: values.shipmentId,
      type: "COMMERCIAL_INVOICE",
      docNumber: values.docNumber ? parseInt(values.docNumber) : 0,
      fields,
    };
    console.log(createQuoteRequest);
    CreateDocument(createQuoteRequest);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto p-6 bg-white h-full"
      >
        <Card className="w-full max-w-4xl mx-auto p-6 bg-white h-full">
          <CardContent className="p-0">
            <div className="text-center text-xl font-bold mb-6">
              COMMERCIAL INVOICE
            </div>
            <div className="grid grid-cols-2 mb-0">
              <div className="border border-b-0 p-4 space-y-2">
                <div className="font-semibold">DOCUMENT NUMBER</div>
                <FormField
                  control={form.control}
                  name="docNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="border border-b-0 border-l-0 p-4 space-y-2">
                <div className="font-semibold">SHIPMENT ID</div>
                <FormField
                  control={form.control}
                  name="shipmentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full h-[60px] text-lg ">
                            <SelectValue placeholder="Shipment" />
                          </SelectTrigger>
                          <SelectContent>
                            {shipments && !isLoadingShipments ? (
                              shipments.results.map((it) => (
                                <SelectItem key={it.id} value={it.id}>
                                  {it.id}
                                </SelectItem>
                              ))
                            ) : (
                              <div className="flex items-center justify-center">
                                Loading shipments
                              </div>
                            )}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="border border-b-0 p-4 pt-0 space-y-2">
                <div className="font-semibold">SELLER</div>
                <FormField
                  control={form.control}
                  name="seller"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="border-r border-t px-4 py-4 flex items-center justify-between">
                  <div className="w-1/2 flex justify-between items-center gap-2">
                    <span className="font-semibold">INVOICE NUMBER</span>
                    <FormField
                      control={form.control}
                      name="invoiceNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="size-12" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2 flex justify-end items-center gap-2">
                    <span className="font-semibold">DATE:</span>
                    <FormField
                      control={form.control}
                      name="invoiceDate"
                      render={({ field }) => (
                        <FormItem>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    field.value.toLocaleDateString("en-GB")
                                  ) : (
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date) =>
                                  field.onChange(date ?? new Date())
                                }
                                disabled={(date) =>
                                  date < new Date() &&
                                  date.toDateString() !==
                                    new Date().toDateString()
                                }
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="border-r border-t px-4 py-4 flex items-center justify-between">
                  <div className="w-1/2 flex justify-between items-center">
                    <span className="font-semibold text-wrap">
                      CUSTOMER REF NO.
                    </span>
                    <FormField
                      control={form.control}
                      name="customerReferenceNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="size-12" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2 flex justify-end items-center gap-2">
                    <span className="font-semibold">DATE:</span>
                    <FormField
                      control={form.control}
                      name="customerDate"
                      render={({ field }) => (
                        <FormItem>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    field.value.toLocaleDateString("en-GB")
                                  ) : (
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date) =>
                                  field.onChange(date ?? new Date())
                                }
                                disabled={(date) =>
                                  date < new Date() &&
                                  date.toDateString() !==
                                    new Date().toDateString()
                                }
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="border border-b-0 p-4 space-y-2">
                <div className="font-semibold">SOLD TO</div>
                <FormField
                  control={form.control}
                  name="soldTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="border-t border-r border-b p-4 space-y-2">
                  <div className="font-semibold">TERMS OF SALE</div>
                  <FormField
                    control={form.control}
                    name="termsOfSale"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea className="w-full" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="border-r p-4 space-y-2">
                  <div className="font-semibold">TERMS OF PAYMENT</div>
                  <FormField
                    control={form.control}
                    name="termsOfPayment"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea className="w-full" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="border border-b-0 p-4 space-y-2">
                <div className="font-semibold">SHIP TO</div>
                <FormField
                  control={form.control}
                  name="shipTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="border-t border-r border-b p-4 space-y-2">
                  <div className="font-semibold">CURRENCY OF SETTLEMENT</div>
                  <FormField
                    control={form.control}
                    name="currencyOfSettlement"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input className="w-full" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="border-r p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">MODE OF SHIPMENT</span>
                    <span className="font-semibold">BILL OF LADING/AWB</span>
                  </div>
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="modeOfShipment"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="w-full" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="billOfLadingAWB"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="w-full" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-b-0 flex flex-col items-center">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="border-r p-2 w-20">QTY</th>
                    <th className="border-r p-2 w-1/2">
                      PRODUCT DESCRIPTION AND HARMONIZED CODE
                    </th>
                    <th className="border-r p-2 w-32">UNIT OF MEASURE</th>
                    <th className="border-r p-2 w-32">UNIT PRICE</th>
                    <th className="p-2 w-32">TOTAL PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((_, index) => (
                    <tr key={index}>
                      <td className="border-r border-b p-2">
                        <FormField
                          control={form.control}
                          name={`products.${index}.qty`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  className="w-full"
                                  defaultValue={0}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    const newProducts = [...products];
                                    newProducts[index].qty = parseInt(value);
                                    form.setValue("products", newProducts);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="border-r border-b p-2">
                        <FormField
                          control={form.control}
                          name={`products.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input className="w-full" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="border-r border-b p-2">
                        <FormField
                          control={form.control}
                          name={`products.${index}.unitOfMeasure`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  defaultValue={0}
                                  className="w-full"
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    const newProducts = [...products];
                                    newProducts[index].unitOfMeasure =
                                      parseInt(value);
                                    form.setValue("products", newProducts);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="border-r border-b p-2">
                        <FormField
                          control={form.control}
                          name={`products.${index}.unitPrice`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  defaultValue={0}
                                  className="w-full"
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    const newProducts = [...products];
                                    newProducts[index].unitPrice =
                                      parseInt(value);
                                    form.setValue("products", newProducts);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      {index === 0 && (
                        <td className="p-2 border-b" rowSpan={products.length}>
                          <FormField
                            control={form.control}
                            name="totalPrice"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    disabled={true}
                                    className="w-full"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button
                className="m-2"
                type="button"
                onClick={() =>
                  form.setValue("products", [
                    ...products,
                    { qty: 0, description: "", unitOfMeasure: 0, unitPrice: 0 },
                  ])
                }
              >
                Add Product
              </Button>
            </div>

            <div className="border border-b-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="border-r p-2 w-1/3">PACKAGE MARKS</th>
                    <th className="border-r p-2">VALUE DETAILS</th>
                    <th className="p-2">AMOUNTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r p-2" rowSpan={3}>
                      <FormField
                        control={form.control}
                        name="packageMarks"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea className="w-full" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="border-r border-b p-2">
                      <div className="font-semibold">
                        TOTAL COMMERCIAL VALUE
                      </div>
                    </td>
                    <td className="border-b p-2">
                      <FormField
                        control={form.control}
                        name="totalCommercialValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input className="w-full" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-b p-2">
                      <div className="font-semibold">
                        MISC CHARGES (PACKING, INSURANCE, ETC.)
                      </div>
                    </td>
                    <td className="border-b p-2">
                      <FormField
                        control={form.control}
                        name="miscCharges"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input className="w-full" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r p-2">
                      <div className="font-semibold">TOTAL INVOICE VALUE</div>
                    </td>
                    <td className="p-2">
                      <FormField
                        control={form.control}
                        name="totalInvoiceValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input className="w-full" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2">
              <div className="border p-4 space-y-2">
                <div className="font-semibold">CERTIFICATIONS</div>
                <FormField
                  control={form.control}
                  name="certifications"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea className="w-full" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="border-t border-r border-b p-4 space-y-8 ">
                <div className="text-sm font-semibold">
                  I CERTIFY THAT THE STATED EXPORT PRICES AND DESCRIPTION OF
                  GOODS ARE TRUE AND CORRECT
                </div>
                <div>
                  <hr />
                  <div className="font-semibold mb-1">SIGNED</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">TITLE</div>
                  <hr />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center w-full">
          <Button className="mt-2" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CommercialInvoiceForm;
