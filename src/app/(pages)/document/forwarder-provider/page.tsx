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
import { CalendarIcon, Warehouse } from "lucide-react";
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
import { CreateDocumentType } from "@/schema/document.schema";
import { before } from "node:test";
import useShipmentTracking from "@/hooks/use-shipment-tracking";


const formSchema = z.object({
  date: z.string(),
  place: z.string(),
  nameA: z.string(),
  addressA: z.string(),
  phoneA: z.string(),
  taxA: z.string(),
  faxA: z.string(),
  numberA: z.string(),
  numberB: z.string(),
  representA: z.string(),
  positionA: z.string(),
  nameB: z.string(),
  faxB: z.string(),
  phoneB: z.string(),
  taxB: z.string(),
  addressB: z.string(),
  representB: z.string(),
  positionB: z.string(),
  fresh: z.string(),
  freshNum: z.string(),
  fade: z.string(),
  fadeNum: z.string(),
  keep: z.string(),
  keepNum: z.string(),
  fragile: z.string(),
  fragileNum: z.string(),
  cattle: z.string(),
  cattleNum: z.string(),
  freight: z.string(),
  warehouse: z.string(),
  location: z.string(),
  transport: z.string(),
  speed: z.string(),
  roof: z.string(),
  transportNum: z.string(),
  resTime: z.string(),
  resMoney: z.string(),
  resMoneyLetter: z.string(),
  waitTime: z.string(),
  totalFee: z.string(),
  delayTime: z.string(),
  beforeTime: z.string(),
  methodA: z.string(),
  methodB: z.string(),
  freeTime: z.string(),
  nightFee: z.string(),
  holidayFee: z.string(),
  rewardFee: z.string(),
  fineFee: z.string(),
  loss: z.string(),
  peopleNum: z.string(),
  mainFeeA: z.string(),
  mainFeeB: z.string(),
  totalCost: z.string(),
  perMile: z.string(),
  boatFee: z.string(),
  conveyFee: z.string(),
  materialFee: z.string(),
  cageFee: z.string(),
  fuelFee: z.string(),
  parkFee: z.string(),
  declareFee: z.string(),
  portFee: z.string(),
  navigatorFee: z.string(),
  totalCostFee: z.string(),
  totalCostFeeLetter: z.string(),
  formA: z.string(),
  formB: z.string(),
  preventA: z.string(),
  preventB: z.string(),
  fineFor: z.string(),
  bankFee: z.string(),
  noReasonFee: z.string(),
  fromDate: z.string(),
  toDate: z.string(),
  meetDate: z.string(),
  ver: z.string(),
  rows: z.array(
    z.object({
      productName: z.string(),
      qtyA: z.string(),
      locationA: z.string(),
      timeA: z.string(),
      qtyB: z.string(),
      locationB: z.string(),
      timeB: z.string(),
      note: z.string(),
    })
  ),
  signatureA: z.string(),
  signatureB: z.string(),
  shipmentId: z.string(),
  docNumber: z.string(),
});
export default function PackingList() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [shippingDate, setShippingDate] = useState<Date | undefined>(undefined);
  const [rows, setRows] = useState(
    Array(1).fill({ qty: "", description: "", weight: "", productNumber: "" })
  );

  const {
    data: shipments,
    isLoading: isLoadingShipments,
    error: shipmentError,
  } = useShipmentTracking.useGetShipment(
    undefined,
    undefined,
    undefined,
    undefined
  );

  const router = useRouter();
  const { mutate: CreateDocument } = useDocument.useCreateDocument(router);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { qty: "", description: "", weight: "", productNumber: "" },
    ]);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      rows: Array(1).fill({
        productName: "",
        qtyA: "",
        locationA: "",
        timeA: "",
        qtyB: "",
        locationB: "",
        timeB: "",
        note: "",
      }),
      signatureA: "",
      signatureB: "",
      shipmentId: "",
      docNumber: "",
      place: "",
      nameA: "",
      addressA: "",
      taxA: "",
      faxA: "",
      representA: "",
      positionA: "",
      nameB: "",
      faxB: "",
      phoneB: "",
      taxB: "",
      addressB: "",
      representB: "",
      positionB: "",
      numberA: "",
      numberB: "",
      fresh: "",
      freshNum: "",
      fade: "",
      fadeNum: "",
      keep: "",
      keepNum: "",
      fragile: "",
      fragileNum: "",
      cattle: "",
      cattleNum: "",
      freight: "",
      warehouse: "",
      location: "",
      transport: "",
      speed: "",
      roof: "",
      transportNum:"",
      resMoney: "",
      resTime: "",
      waitTime: "",
      resMoneyLetter: "",
      totalFee: "",
      delayTime: "",
      beforeTime: "",
      methodA: "",
      methodB: "",
      freeTime: "",
      nightFee: "",
      holidayFee: "",
      rewardFee: "",
      fineFee: "",
      loss:"",
      peopleNum: "",
      mainFeeA: "",
      mainFeeB: "",
      totalCost: "",
      perMile: "",
      boatFee: "",
      conveyFee: "",
      materialFee: "",
      cageFee: "",
      fuelFee: "",
      parkFee: "",
      declareFee: "",
      portFee: "",
      navigatorFee: "",
      totalCostFee: "",
      totalCostFeeLetter: "",
      formA: "",
      formB: "",
      preventA: "",
      preventB: "",
      fineFor: "",
      bankFee: "",
      noReasonFee: "",
      fromDate: "",
      toDate: "",
      meetDate: "",
      ver: "",
    },
  });

  useEffect(() => {
    if (date) form.setValue("date", format(date, "yyyy-MM-dd"));
  }, [date]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Packing List Data:", values);
    const fields = {
      date: values.date,
      rows: values.rows,
      signatureA: values.signatureA,
      signatureB: values.signatureB,
      place: values.place,
      docNumber: values.docNumber,
      nameA: values.nameA,
      addressA: values.addressA,
      taxA: values.taxA,
      faxA: values.faxA,
      representA: values.representA,
      positionA: values.positionA,
      nameB: values.nameB,
      faxB: values.faxB,
      phoneB: values.phoneB,
      taxB: values.taxB,
      addressB: values.addressB,
      representB: values.representB,
      numberA: values.numberA,
      numberB: values.numberB,
      positionB: values.positionB,
      fresh: values.fresh,
      freshNum: values.freshNum,
      fade: values.fade,
      fadeNum: values.fadeNum,
      keep: values.keep,
      keepNum: values.keepNum,
      fragile: values.fragile,
      fragileNum: values.fragileNum,
      cattle: values.cattle,
      cattleNum: values.cattleNum,
      freight: values.freight,
      warehouse: values.warehouse,
      location: values.location,
      transport: values.transport,
      speed: values.speed,
      roof: values.roof,
      transportNum: values.transportNum,
      resMoney: values.resMoney,
      resTime: values.resTime,
      resMoneyLetter: values.resMoneyLetter,
      waitTime: values.waitTime,
      totalFee: values.totalFee,
      delayTime: values.delayTime,
      beforeTime: values.beforeTime,
      methodA: values.methodA,
      methodB: values.methodB,
      freeTime: values.freeTime,
      nightFee: values.nightFee,
      holidayFee: values.holidayFee,
      rewardFee: values.rewardFee,
      fineFee: values.fineFee,
      loss: values.loss,
      peopleNum: values.peopleNum,
      mainFeeA: values.mainFeeA,
      mainFeeB: values.mainFeeB,
      totalCost: values.totalCost,
      perMile: values.perMile,
      boatFee: values.boatFee,
      conveyFee: values.conveyFee,
      materialFee: values.materialFee,
      cageFee: values.cageFee,
      fuelFee: values.fuelFee,
      parkFee: values.parkFee,
      declareFee: values.declareFee,
      portFee: values.portFee,
      navigatorFee: values.navigatorFee,
      totalCostFee: values.totalCostFee,
      totalCostFeeLetter: values.totalCostFeeLetter,
      formA: values.formA,
      formB: values.formB,
      preventA: values.preventA,
      preventB: values.preventB,
      fineFor: values.fineFor,
      bankFee: values.bankFee,
      noReasonFee: values.noReasonFee,
      fromDate: values.fromDate,
      toDate: values.toDate,
      meetDate: values.meetDate,
      ver: values.ver,
    };
    const createQuoteRequest: CreateDocumentType = {
      shipmentId: values.shipmentId,
      type: "FORWARDER_PROVIDER_CONTRACT",
      docNumber: values.docNumber ? parseInt(values.docNumber, 10) : 0,
      fields,
    };
    console.log(createQuoteRequest);
    CreateDocument(createQuoteRequest);
  }
  return (
    <div className="w-full max-w-5xl mx-auto p-8 border border-gray-300 shadow-md bg-white">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h1>
        <div className="text-sm mt-2 text-center">
          <p className="text-xl font-bold">Độc lập – Tự do – Hạnh phúc</p>
          <p className="text-xl font-bold">__________________</p>
          <p className="text-xl font-bold">HỢP ĐỒNG VẬN CHUYỂN HÀNG HÓA</p>
        </div>
      </div>

      <div className=" gap-4 mb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="w-full flex justify-center">
                <FormField
                  control={form.control}
                  name="docNumber" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="italic text-lg">Số hợp đồng</FormLabel>
                      <FormControl>
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-1/10 py-1 outline-none text-center items-end"
                        />
                      </FormControl>
                      <span className="italic">/HĐVCHH</span>
                    </FormItem>
                  )}
                />

              </div>
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
                    <SelectTrigger className="w-full h-[60px] text-lg ">
                      <SelectValue placeholder="Shipment" />
                    </SelectTrigger>
                    <SelectContent>
                      {shipments ? (
                        shipments.results.map((it) => (
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
              <div className="flex">
                <FormField
                    control={form.control}
                    name="date" 
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="italic text-lg">Hôm nay, </FormLabel>
                        <FormControl>
                          <input
                            {...field} 
                            className="italic border-dotted border-b-2 w-1/10 py-1 outline-none text-center items-end"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="place" 
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="italic text-lg">Tại </FormLabel>
                        <FormControl>
                          <input
                            {...field} 
                            className="italic border-dotted border-b-2 w-1/10 py-1 outline-none text-center items-end"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
              </div>
              <h1 className="italic text-lg">Chúng tôi gồm có:</h1>
              <div>
              <FormField
                control={form.control}
                name="nameA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="font-bold text-lg flex-shrink-0">
                        BÊN CHỦ HÀNG (BÊN A): 
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              </div>
              <FormField
                control={form.control}
                name="addressA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Địa chỉ:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Điện thoại:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="faxA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Fax:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Mã số thuế:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Tài khoản số:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="representA"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Do ông (bà)
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">làm đại diện</span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="positionA" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Chức vụ
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              {/* Party B */}
              <div>
              <FormField
                control={form.control}
                name="nameB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="font-bold text-lg flex-shrink-0">
                        BÊN VẬN CHUYỂN (BÊN B): 
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              </div>
              <FormField
                control={form.control}
                name="addressB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Địa chỉ:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Điện thoại:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="faxB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Fax:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Mã số thuế:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Tài khoản số:
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="representB"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Do ông (bà)
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">làm đại diện</span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="positionB" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                        Chức vụ
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <h1 className="text-lg"> Hai bên cùng thỏa thuận ký hợp đồng với những nội dung sau:</h1>
            <h2 className="font-bold text-lg">ĐIỀU 1: HÀNG HÓA VẬN CHUYỂN</h2>
            <h1 className="text-lg"> 1.1. Tên hàng: Bên A thuê bên B vận tải những hàng hóa sau:</h1>
            <h1 className="text-lg">  1.2. Tính chất hàng hóa:</h1>
            <h1 className="text-lg">  Bên B cần lưu ý bảo đảm cho bên A những loại hàng sau được an toàn:</h1>
            {/* Term 1 */}
            <div className="flex">
              <FormField
                control={form.control}
                name="fresh"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">a)</FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">(1) hàng cần giữ tươi sống: </span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="freshNum"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {/* Term 2 */}
            <div className="flex">
              <FormField
                control={form.control}
                name="fade"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">b)</FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">hàng cần bảo quản không để biến chất: </span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fadeNum"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">(2)</span>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {/* Term 3 */}
            <div className="flex">
              <FormField
                control={form.control}
                name="keep"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">c)</FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">hàng nguy hiểm cần che đậy hoặc để riêng: </span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keepNum"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {/* Term 4 */}
            <div className="flex">
              <FormField
                control={form.control}
                name="fragile"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">d)</FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">hàng dễ vỡ: </span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fragileNum"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {/* Term 5 */}
            <div className="flex">
              <FormField
                control={form.control}
                name="cattle"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">e)</FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">súc vật cần giữ sống bình thường: </span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cattleNum"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {/* Freight */}
            <FormField
                control={form.control}
                name="freight"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                      1.3. Đơn vị tính đơn giá cước: 
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="italic border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">(3)</span>
                    </div>
                  </FormItem>
                )}
              />
              <h2 className="font-bold text-lg">ĐIỀU 2: ĐỊA ĐIỂM NHẬN HÀNG VÀ GIAO HÀNG</h2>
              {/* Warehouse */}
              <FormField
                control={form.control}
                name="warehouse"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                      2.1. Bên B đưa phương tiện đến nhận hàng tại (kho hàng)
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">(4) do bên A giao.</span>
                    </div>
                  </FormItem>
                )}
              />
              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                      2.2. Bên B giao hàng cho bên A tại địa điểm
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field}
                          className="border-dotted border-b-2 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span className="flex-shrink-0">(5)</span>
                    </div>
                  </FormItem>
                )}
              />
             <h2 className="font-bold text-lg">ĐIỀU 3: ĐỊCH LỊCH THỜI GIAN GIAO NHẬN HÀNG</h2>
            <table className="w-full border-collapse border border-gray-400 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2" rowSpan={2}>STT</th>
                  <th className="border border-gray-400 p-2" rowSpan={2}>Tên hàng</th>
                  <th className="border border-gray-400 p-2" colSpan={3}>Nhận hàng</th>
                  <th className="border border-gray-400 p-2" colSpan={3}>Giao hàng</th>
                  <th className="border border-gray-400 p-2" rowSpan={2}>Ghi chú</th>
                </tr>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2">Số lượng</th>
                  <th className="border border-gray-400 p-2">Địa điểm</th>
                  <th className="border border-gray-400 p-2">Thời gian</th>
                  <th className="border border-gray-400 p-2">Số lượng</th>
                  <th className="border border-gray-400 p-2">Địa điểm</th>
                  <th className="border border-gray-400 p-2">Thời gian</th>
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
                        name={`rows.${index}.productName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Product Name"
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
                        name={`rows.${index}.qtyA`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Number"
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
                        name={`rows.${index}.locationA`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Location"
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
                        name={`rows.${index}.timeA`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="date" placeholder="Time" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>

                    <td className="border border-gray-400 p-2">
                    <FormField
                        control={form.control}
                        name={`rows.${index}.qtyB`}
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
                        name={`rows.${index}.locationB`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Location"
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
                        name={`rows.${index}.locationB`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="date" placeholder= "Time" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>

                    <td className="border border-gray-400 p-2">
                      <FormField
                        control={form.control}
                        name={`rows.${index}.note`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder= "Note" />
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

            <h2 className="font-bold text-lg">ĐIỀU 4: PHƯƠNG TIỆN VẬN TẢI</h2>
            {/* Rule 4 */}
            <FormField
                control={form.control}
                name="transport" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-lg flex-shrink-0">
                      4.1. Bên A yêu cầu bên B vận tải số hàng trên bằng phương tiện
                      </FormLabel>
                      <FormControl className="flex-grow">
                        <input
                          {...field} 
                          className="italic border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <h1 className="text-lg">Phải có những khả năng cần thiết như:</h1>
              <FormField
                control={form.control}
                name="speed" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="font-normal text-lg flex-shrink-0">
                      - Tốc độ phải đạt 
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field} 
                          className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                        />
                      </FormControl>
                      <span>km/h</span>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roof" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="font-normal text-lg flex-shrink-0">
                      - Có mái che 
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field} 
                          className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="transportNum" 
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="font-normal text-lg flex-shrink-0">
                      - Số lượng phương tiện là:
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field} 
                          className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <p className="text-lg font-normal">4.3. Bên B phải chuẩn bị đầy đủ giấy tờ cho phương tịên đi lại hợp lệ trên tuyến giao thông đó để vận tải số hàng hóa đã thỏa thuận như trên và chịu mọi hậu quả về giấy tờ pháp lý của phương tiện vận tải.</p>
              <p  className="text-lg font-normal">4.4. Bên B phải làm vệ sinh phương tiện vận tải khi nhận hàng, chi phí vệ sinh phương tiện vận tải sau khi giao</p>
              <div className="flex items-center">
                <FormField
                  control={form.control}
                  name="resMoney"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                          hàng bên A phải chịu là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>đồng (Bằng chữ:</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resMoneyLetter"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-64 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>)</span>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center">
                <FormField
                  control={form.control}
                  name="resTime"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        4.5. Sau khi bên B đưa phương tiện đến nhận hàng mà bên A chưa có hàng để giao sau:
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>phút</span>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <p className="font-normal text-lg leading-loose">thì bên A phải chứng nhận cho bên B đem phương tiện về và phải trả giá cước của loại hàng thấp nhất về giá vận tải theo đoạn đường đã hợp đồng. Trong trường hợp không tìm thấy người đại diện của bên A tại địa điểm giao</p>
              <div className="flex items-center">
                <FormField
                  control={form.control}
                  name="waitTime"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        hàng, bên B chờ sau
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">phút, có quyền nhờ Ủy ban nhân dân cơ sở xác nhận phương tiện có đến và</span>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <span className="font-normal text-lg">cho phương tiện về và yêu cầu thanh toán chi phí như trên.</span>
              <p className="font-normal text-lg">4.6. Bên B có quyền từ chối không nhận hàng nếu bên A giao hàng không đúng loại hàng ghi trong vận đơn khi xét thấy phương tiện điều động không thích hợp với loại hàng đó, có quyền yêu cầu bên A phải chịu phạt</p>
              <FormField
                  control={form.control}
                  name="totalFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">% giá trị tổng cước phí.</span>
                      </div>
                    </FormItem>
                  )}
                />
              <p className="font-normal text-lg">4.7. Trường hợp bên B đưa phương tiện đến nhận hàng chậm so với lịch giao nhận phải chịu phạt hợp đồng là</p>
              <FormField
                  control={form.control}
                  name="delayTime"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng/ giờ.</span>
                      </div>
                    </FormItem>
                  )}
                />
              <h2 className="font-bold text-lg">ĐIỀU 5: GIẤY TỜ CHO VIỆC VẬN CHUYỂN HÀNG HÓA</h2>
              <p className="font-normal text-lg">5.1. Bên B phải làm giấy xác báo hàng hóa (phải được đại diện bên B ký, đóng dấu xác nhận) trước</p>
              <FormField
                  control={form.control}
                  name="beforeTime"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">giờ so với thời điểm giao hàng.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="font-normal text-lg">Bên B phải xác báo lại cho bên A số lượng và trọng tải các phương tiện có thể điều động trong 24 giờ trước khi bên A giao hàng. Nếu bên A không xác báo xin phương tiện thì bên B không chịu trách nhiệm.</p>
                <p className="font-normal text-lg">5.2. Các giấy tờ khác nếu có.</p>
                <h2 className="font-bold text-lg">ĐIỀU 6: PHƯƠNG THỨC GIAO NHẬN HÀNG HÓA</h2>
                <p className="font-normal text-lg">6.1. Hai bên thỏa thuận nhận hàng theo phương thức sau:</p>
                <p className="font-normal text-lg">Lưu ý: Tùy theo từng loại hàng và tính chất phương tiện vận tải mà thỏa thuận giao nhận theo một trong các phương thức sau:</p>
                <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Nguyên đai, nguyên kiện, nguyên bao.</li>
                  <li>- Theo trọng lượng, thể tích.</li>
                  <li>- Theo nguyên hầm hay container.</li>
                  <li>- Theo ngấn nước của phương tiện vận tải thủy.</li>
                </ul>
                <p className="font-normal text-lg">6.2. Bên A đề nghị bên B giao hàng theo phương thức:</p>
                <FormField
                  control={form.control}
                  name="methodA"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="methodB"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                {/* Rule 7 */}
              <h2 className="font-bold text-lg">ĐIỀU 7: TRÁCH NHIỆM XẾP DỠ HÀNG HÓA</h2>
              <p className="font-normal text-lg">7.1. Bên B (A) có trách nhiệm xếp dỡ hàng hóa.</p>
              <p className="font-normal text-lg">Chú ý:</p>
              <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Tại địa điểm có thể tổ chức xếp dỡ chuyên trách thì chi phí xếp dỡ do bên A chịu.</li>
                  <li>- Trong trường hợp bên A phụ trách xếp dỡ (không thuê chuyên trách) thì bên vận tải có trách nhiệm hướng dẫn về kỹ thuật xếp dỡ.</li>
              </ul>
              <FormField
                  control={form.control}
                  name="freeTime"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        7.2. Thời gian xếp dỡ giải phóng phương tiện là 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>giờ</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nightFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        Lưu ý : Nếu cần xếp dỡ vào ban đêm, vào ngày lễ và ngày chủ nhật bên A phải báo trước cho bên B 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="holidayFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        giờ, phải trả chi phí cao hơn giờ hành chính là  
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>đồng/giờ (tấn).</span>
                      </div>
                    </FormItem>
                  )}
                />
              <p className="font-normal text-lg">7.3. Mức thưởng phạt</p>
              <FormField
                  control={form.control}
                  name="rewardFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Nếu xếp dỡ xong trước thời gian quy định và an toàn thì sẽ thưởng là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng/giờ.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fineFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Xếp dỡ chậm bị phạt là:
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng/giờ.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="font-normal text-lg">- Xếp dỡ hư hỏng hàng hóa phải bồi thường theo giá trị thị trường tự do tại địa điểm bốc xếp.</p>
                {/* Rule 8 */}
                <h2 className="font-bold text-lg">ĐIỀU 8: GIẢI QUYẾT HAO HỤT HÀNG HÓA</h2>
                <FormField
                  control={form.control}
                  name="loss"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Nếu hao hụt theo quy định dưới mức
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">% tổng số lượng hàng thì bên B không phải bồi thường.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="font-normal text-lg">- Hao hụt trên tỷ lệ cho phép thì bên B phải bồi thường cho bên A theo giá trị thị trường tự do tại nơi giao hàng (áp dụng cho trường hợp bên A không cử người áp tải).</p>
                {/* Rule 9 */}
                <h2 className="font-bold text-lg">ĐIỀU 9: NGƯỜI ÁP TẢI HÀNG HÓA (Nếu có)</h2>
                <FormField
                  control={form.control}
                  name="peopleNum"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        9.1. Bên A cử
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">người theo phương tiện để áp tải hàng.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="text-lg font-normal">Lưu ý: Các trường hợp sau đây bên A buộc phải cử người áp tải:</p>
                <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Hàng quý hiếm: vàng, kim cương, đá quý...</li>
                  <li>- Hàng tươi sống đi đường phải ướp;</li>
                  <li>- Súc vật sống cần cho ăn dọc đường;</li>
                  <li>- Hàng nguy hiểm;</li>
                  <li>- Các loại súng ống, đạn dược;</li>
                  <li>- Linh cửu, thi hài.</li>
                </ul>
                <p className="text-lg font-normal">9.2. Người áp tải có trách nhiệm bảo vệ hàng hóa và giải quyết các thủ tục kiểm tra liên quan đến hàng hóa trên đường vận chuyển.</p>
                <p className="text-lg font-normal">9.3. Bên B không phải chịu trách nhiệm hàng mất mát nhưng phải có trách nhiệm điều khiển phương tiện đúng yêu cầu kỹ thuật để không gây hư hỏng, mất mát hàng hóa. Nếu không giúp đỡ hoặc điều khiển phương tiện theo yêu cầu của người áp tải nhằm giữ gìn bảo vệ hàng hóa hoặc có hành vi vô trách nhiệm khác làm thiệt hại cho bên A thì phải chịu trách nhiệm theo phần lỗi của mình.</p>
                {/* Rule 10 */}
                <h2 className="font-bold text-lg">ĐIỀU 10: THANH TOÁN PHÍ VẬN TẢI (6)</h2>
                <p className="text-lg font-normal">10.1. Tiền cước phí chính mà bên A phải thanh toán cho bên B bao gồm:</p>
                <FormField
                  control={form.control}
                  name="mainFeeA"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Loại hàng thứ nhất là:
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mainFeeB"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Loại hàng thứ hai là:
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p>- ...</p>
                <FormField
                  control={form.control}
                  name="totalCost"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        Tổng cộng cước phí chính là: 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="text-lg font-normal">10.2. Tiền phụ phí vận tải bên A phải thanh toán cho bên B gồm:</p>
                <FormField
                  control={form.control}
                  name="perMile"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Phí tổn điều xe một số quãng đường không chở hàng là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng/km</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="boatFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Cước qua phà là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="conveyFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Chi phí chuyển tải là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="materialFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Phí tổn vật dụng chèn lót là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cageFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Chuồng cũi cho súc vật là 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fuelFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Giá chênh lệch nhiên liệu tổng cộng là 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parkFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Lệ phí bến đổ phương tiện là 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="declareFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Kê khai trị giá hàng hóa 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Cảng phí 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="navigatorFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        - Hoa tiêu phí
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">đồng</span>
                      </div>
                    </FormItem>
                  )}
                />
              <div className="flex">
                <FormField
                  control={form.control}
                  name="totalCostFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        10.3. Tổng cộng cước phí bằng số:
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalCostFeeLetter"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        (Bằng chữ:
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>)</span>
                      </div>
                    </FormItem>
                  )}
                />
            </div>
            <p className="text-lg font-normal">10.4. Bên A thanh toán cho bên B bằng hình thức sau:</p>
            <FormField
                  control={form.control}
                  name="formA"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="formB"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
            {/* Rule 11 */}
            <h2 className="font-bold text-lg">ĐIỀU 11: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h2>
            <p className="text-lg font-normal">11.1. Quyền và nghĩa vụ của bên A</p>
            <p className="text-lg font-normal">a) Nghĩa vụ của bên A:</p>
            <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Trả đủ tiền cước phí vận chuyển cho bên B theo đúng thời hạn, phương thức đã thoả thuận;</li>
                  <li>- Trông coi tài sản trên đường vận chuyển, nếu có thoả thuận. Trong trường hợp bên A trông coi tài sản mà tài sản bị mất mát, hư hỏng thì không được bồi thường.</li>
                  <li>- Bên A phải bồi thường thiệt hại cho bên B và người thứ ba về thiệt hại do tài sản vận chuyển có tính chất nguy hiểm, độc hại mà không có biện pháp đóng gói, bảo đảm an toàn trong quá trình vận chuyển.</li>
            </ul>
            <p className="text-lg font-normal">b) Quyền của bên A:</p>
            <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Yêu cầu bên B chuyên chở tài sản đến đúng địa điểm, thời điểm đã thoả thuận;</li>
                  <li>- Trực tiếp hoặc chỉ định người thứ ba nhận lại tài sản đã thuê vận chuyển;</li>
                  <li>- Yêu cầu bên B bồi thường thiệt hại.</li>
            </ul>
            <p className="text-lg font-normal">11.2. Quyền và nghĩa vụ của bên B</p>
            <p className="text-lg font-normal">a) Nghĩa vụ của bên B:</p>
            <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Bảo đảm vận chuyển hàng hóa đầy đủ, an toàn đến địa điểm đã định, theo đúng thời hạn;</li>
                  <li>- Trả tài sản cho người có quyền nhận;</li>
                  <li>- Chịu chi phí liên quan đến việc chuyên chở tài sản, trừ trường hợp có thoả thuận khác;</li>
                  <li>- Mua bảo hiểm trách nhiệm dân sự theo quy định của pháp luật;</li>
                  <li>- Bồi thường thiệt hại cho bên A trong trường hợp bên B để mất mát, hư hỏng tài sản do lỗi của mình, trừ trường hợp có thoả thuận khác hoặc pháp luật có quy định khác.</li>
            </ul>
            <p className="text-lg font-normal">b) Quyền của bên B:</p>
            <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Kiểm tra sự xác thực của tài sản, của vận đơn hoặc chứng từ vận chuyển tương đương khác;</li>
                  <li>- Từ chối vận chuyển tài sản không đúng với loại tài sản đã thoả thuận trong hợp đồng;</li>
                  <li>- Yêu cầu bên A thanh toán đủ cước phí vận chuyển đúng thời hạn;</li>
                  <li>- Từ chối vận chuyển tài sản cấm giao dịch, tài sản có tính chất nguy hiểm, độc hại, nếu bên B biết hoặc phải biết;</li>
                  <li>- Yêu cầu bên A bồi thường thiệt hại.</li>
            </ul>
            {/* Rule 12 */}
            <h2 className="font-bold text-lg">ĐIỀU 12: ĐĂNG KÝ BẢO HIỂM</h2>
            <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Bên A phải chi phí mua bảo hiểm hàng hóa.</li>
                  <li>- Bên B chi phí mua bảo hiểm phương tiện vận tải với chi nhánh Bảo Việt.</li>
            </ul>
            {/* Rule 13 */}
            <h2 className="font-bold text-lg">ĐIỀU 13: BIỆN PHÁP BẢO ĐẢM THỰC HIỆN HỢP ĐỒNG (Nếu có)</h2>
            <FormField
                  control={form.control}
                  name="preventA"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preventB"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-full py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                {/* Rule 14 */}
                <h2 className="font-bold text-lg">ĐIỀU 14: TRÁCH NHIỆM DO VI PHẠM HỢP ĐỒNG</h2>
                <p className="text-lg font-normal">14.1. Bên nào vi phạm hợp đồng, một mặt phải trả cho bên bị vi phạm tiền phạt vi phạm hợp đồng, mặt khác nếu có thiệt hại xảy ra do lỗi vi phạm hợp đồng dẫn đến như mất mát, hư hỏng, tài sản phải chi phí để ngăn chặn hạn chế thiệt hại do vi phạm gây ra, tiền phạt do vi phạm hợp đồng khác và tiền bồi thường thiệt hại mà bên bị vi phạm đã phải trả cho bên thứ ba là hậu quả trực tiếp của sự vi phạm này gây ra.</p>
                <p className="text-lg font-normal">14.2. Nếu bên A đóng gói hàng mà không khai hoặc khai không đúng sự thật về số lượng, trọng lượng hàng hóa</p>
                <FormField
                  control={form.control}
                  name="fineFor"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        thì bên A phải chịu phạt đến
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">% số tiền cước phải trả cho lô hàng đó.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="text-lg font-normal">14.3. Nếu bên B có lỗi làm hư hỏng hàng hóa trong quá trình vận chuyển thì:</p>
                <ul className="mt-1 text-lg" style={{ lineHeight: "2.5" }}>
                  <li>- Trong trường hợp có thể sửa chữa được nếu bên A đã tiến hành sửa chữa thì bên B phải đài thọ phí tổn.</li>
                  <li>- Nếu hư hỏng đến mức không còn khả năng sửa chữa thì hai bên thỏa thuận mức bồi thường hoặc nhờ cơ quan chuyên môn giám định và xác nhận tỷ lệ bồi thường.</li>
                </ul>
                <p className="text-lg font-normal">14.4. Nếu bên A vi phạm nghĩa vụ thanh toán tổng cước phí vận chuyển thì phải chịu phạt theo mức lãi suất</p>
                <FormField
                  control={form.control}
                  name="bankFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                         chậm trả của tín dụng ngân hàng là
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">% ngày (hoặc tháng) tính từ ngày hết hạn thanh toán.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="text-lg font-normal">14.5. Bên nào đã ký hợp đồng mà không thực hiện hợp đồng hoặc đơn phương đình chỉ thực hiện hợp đồng</p>
                <FormField
                  control={form.control}
                  name="noReasonFee"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        mà không có lý do chính đáng thì sẽ bị phạt tới
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span className="font-normal text-lg">% giá trị phần tổng cước phí dự chi.</span>
                      </div>
                    </FormItem>
                  )}
                />
                <p className="text-lg font-normal">14.6. Nếu hợp đồng này có một bên nào đó gây ra đồng thời nhiều loại vi phạm, thì chỉ phải chịu một loại phạt có số tiền phạt ở mức cao nhất theo các mức phạt mà hai bên đã thỏa thuận trong hợp đồng này, trừ các loại trách hiệm bồi thường khi làm mất mát hoặc hư hỏng hàng hóa lúc vận chuyển.</p>
                {/* Rule 15 */}
                <h2 className="font-bold text-lg">ĐIỀU 15: GIẢI QUYẾT TRANH CHẤP HỢP ĐỒNG</h2>
                <p className="text-lg font-normal">Các bên cam kết cùng nhau thực hiện hợp đồng. Nếu trong quá trình thực hiện có phát sinh vướng mắc các bên sẽ trao đổi trên tinh thần hợp tác, trường hợp hai bên không thỏa thuận được thì việc tranh chấp sẽ được phán quyết bởi tòa án.</p>
                {/* Rule 16 */}
                <h2 className="font-bold text-lg">ĐIỀU 16: HIỆU LỰC CỦA HỢP ĐỒNG</h2>
                <div className="flex">
                <FormField
                  control={form.control}
                  name="fromDate"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        Hợp đồng này có hiệu lực từ
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="toDate"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        Đến 
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
            </div>
            <FormField
                  control={form.control}
                  name="meetDate"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        Hai bên sẽ họp và lập biên bản thanh lý hợp đồng vận chuyển hàng hóa này vào ngày
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ver"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-5">
                        <FormLabel className="font-normal text-lg flex-shrink-0">
                        Hợp đồng được lập thành
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="font-normal border-dotted border-b-2 w-32 py-1 outline-none text-center"
                          />
                        </FormControl>
                        <span>bản, mỗi bên giữ một bản và có giá trị như nhau.</span>
                      </div>
                    </FormItem>
                  )}
                />


            <div className="mt-8 flex justify-between items-center">
              <div className="flex-1 text-center">
                <p className="text-lg font-bold">Đại diện 2 bên ký tên</p>
                <div className="flex border-t mt-4 py-2 gap-[30px]">
                  {/* FormField for Signature */}
                  <FormField
                    control={form.control}
                    name="signatureA"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Party A" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="signatureB"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Party B" {...field} />
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
