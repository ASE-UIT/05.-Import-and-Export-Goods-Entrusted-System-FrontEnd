"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectValue } from "@radix-ui/react-select";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import useDocumentAirWayBill from "@/hooks/use-air-waybill";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  shipmentId: z.string(),
  shipperName: z.string(),
  shipperAddress: z.string(),
  consigneeName: z.string(),
  consigneeAddress: z.string(),
  flightNumber: z.string(),
  flightDate: z.string(),
  trackingNumber: z.string(),
  numberOfPieces: z.string(),
  grossWeight: z.string(),
  declaredValue: z.string(),
  goodsDescription: z.string(),
  signedDate: z.string(),
  docNumber: z.string(),
});

export default function AirWayBill(data: any) {
  const router = useRouter()
  const { data: shipmentList } = useShipmentTracking.useGetShipment();
  const { mutate: createDocument } = useDocumentAirWayBill.useCreateAirWaybill(router);
  const shipmentIds =
    shipmentList?.results.map((shipment) => shipment.id) ?? [];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data.data && data.data.fields
      ? {
          shipmentId: data.data.shipmentId,
          shipperName: data.data.fields.shipperName,
          shipperAddress: data.data.fields.shipperAddress,
          consigneeName: data.data.fields.shipperAddress,
          consigneeAddress: data.data.fields.consigneeAddress,
          flightNumber: data.data.fields.flightNumber,
          flightDate: data.data.fields.flightDate,
          trackingNumber: data.data.fields.trackingNumber,
          numberOfPieces: data.data.fields.numberOfPieces,
          grossWeight: data.data.fields.grossWeight,
          declaredValue: data.data.fields.declaredValue,
          goodsDescription: data.data.fields.goodsDescription,
          signedDate: data.data.fields.signedDate,
          docNumber: data.data.docNumber,
        }
      : {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!(Object.keys(data).length === 0) || !(Object.keys(data).length === 0)) {
      createDocument({
        shipmentId: values.shipmentId,
        type: "AIRWAY_BILL",
        docNumber: values.docNumber,
        fields: {
          shipperName: values.shipperName,
          shipperAddress: values.shipperAddress,
          consigneeName: values.consigneeName,
          consigneeAddress: values.consigneeAddress,
          flightNumber: values.flightNumber,
          flightDate: values.flightDate,
          trackingNumber: values.trackingNumber,
          numberOfPieces: values.numberOfPieces,
          grossWeight: values.grossWeight,
          declaredValue: values.declaredValue,
          goodsDescription: values.goodsDescription,
          signedDate: values.signedDate,
        },
        schema: {
          shipperName: "string",
          shipperAddress: "string",
          consigneeName: "string",
          consigneeAddress: "string",
          flightNumber: "string",
          flightDate: "string",
          trackingNumber: "string",
          numberOfPieces: "string",
          grossWeight: "string",
          declaredValue: "string",
          goodsDescription: "string",
          signedDate: "string",
        },
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="max-w-3xl mx-auto my-5 p-5 border rounded-lg border-gray-300">
          <h2 className="text-center font-bold text-xl mb-5">AIR WAYBILL</h2>
          <div className="flex flex-row mb-5 items-center">
            <h3 className="basis-1/3 font-semibold">Shipment ID: </h3>
            <FormField
              control={form.control}
              name="shipmentId"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="basis-2/3 w-[500px] h-[60px] border-gray-300">
                    <SelectValue placeholder="Select an ID" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    {shipmentIds ? (
                      shipmentIds.map((it) => (
                        <SelectItem key={it} value={it}>
                          {it}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="flex items-center justify-center">
                        No Shipments Available
                      </div>
                    )}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-row mb-5 items-center">
            <h3 className="basis-1/3 font-semibold">Doc Number:</h3>
            <FormField
              control={form.control}
              name="docNumber"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Doc Number"
                  readOnly={!(Object.keys(data).length === 0)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="basic-2/3 w-[445px] text-sm border border-gray-300 rounded-md"
                />
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="border rounded-md border-gray-300 p-3">
              <h3 className="font-semibold mb-2">Shipper Information</h3>
              <FormField
                control={form.control}
                name="shipperName"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Name"
                    readOnly={!(Object.keys(data).length === 0)}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="shipperAddress"
                render={({ field }) => (
                  <Textarea
                    placeholder="Address"
                    value={field.value}
                    readOnly={!(Object.keys(data).length === 0)}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-full h-16 p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>

            <div className="border rounded-md border-gray-300 p-3">
              <h3 className="font-semibold mb-2">Consignee Information</h3>
              <FormField
                control={form.control}
                name="consigneeName"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Name"
                    readOnly={!(Object.keys(data).length === 0)}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="consigneeAddress"
                render={({ field }) => (
                  <Textarea
                    placeholder="Address"
                    value={field.value}
                    readOnly={!(Object.keys(data).length === 0)}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-full h-16 p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-5">
            <div>
              <Label className="block mb-1">Flight Number</Label>
              <FormField
                control={form.control}
                name="flightNumber"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Name"
                    value={field.value}
                    readOnly={!(Object.keys(data).length === 0)}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>
            <div>
              <Label className="block mb-1">Date</Label>
              <FormField
                control={form.control}
                name="flightDate"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full h-[60px] border-gray-300 justify-start text-left font-normal`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{format(field.value || new Date(), "PPP")}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="border border-gray-300 rounded-md">
                      <Calendar
                        mode="single"
                        className="w-full p-2 rounded-md"
                        selected={new Date(field.value)}
                        onSelect={(date) => {
                          field.onChange(date);
                          form.setValue(
                            "flightDate",
                            date?.toISOString() || ""
                          );
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
            <div>
              <Label className="block mb-1">Tracking Number</Label>
              <FormField
                control={form.control}
                name="trackingNumber"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Name"
                    readOnly={!(Object.keys(data).length === 0)}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold mb-2">Shipment Details</h3>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <Label className="block mb-1">Number of Pieces</Label>
                <FormField
                  control={form.control}
                  name="numberOfPieces"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Name"
                      readOnly={!(Object.keys(data).length === 0)}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                    />
                  )}
                />
              </div>
              <div>
                <Label className="block mb-1">Gross Weight (kg)</Label>
                <FormField
                  control={form.control}
                  name="grossWeight"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Name"
                      readOnly={!(Object.keys(data).length === 0)}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                    />
                  )}
                />
              </div>
              <div>
                <Label className="block mb-1">Declared Value</Label>
                <FormField
                  control={form.control}
                  name="declaredValue"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Name"
                      readOnly={!(Object.keys(data).length === 0)}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full text-sm mb-3 p-2 border border-gray-300 rounded-md"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold mb-2">Goods Description</h3>
            <FormField
              control={form.control}
              name="goodsDescription"
              render={({ field }) => (
                <Textarea
                  placeholder="Nature and Quantity of Goods"
                  value={field.value}
                  readOnly={!(Object.keys(data).length === 0)}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full h-24 p-2 border border-gray-300 rounded-md"
                ></Textarea>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="font-semibold mb-2">Shipper`s Signature</h3>
              <div className="h-16 border border-gray-300 rounded-md">
                {form.getValues("shipperName")}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Date</h3>
              <FormField
                control={form.control}
                name="signedDate"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full h-[60px] border-gray-300 justify-start text-left font-normal`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{format(field.value || new Date(), "PPP")}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="border border-gray-300 rounded-md">
                      <Calendar
                        mode="single"
                        className="w-full p-2 rounded-md"
                        selected={new Date(field.value)}
                        onSelect={(date) => {
                          field.onChange(date);
                          form.setValue(
                            "signedDate",
                            date?.toISOString() || ""
                          );
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          {(Object.keys(data).length === 0) && <Button type="submit">Save</Button>}
        </div>
      </form>
    </Form>
  );
}
