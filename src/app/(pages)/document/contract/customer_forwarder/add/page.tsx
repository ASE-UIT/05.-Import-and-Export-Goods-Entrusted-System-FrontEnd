"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  Form,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { CreateDocumentType } from "@/schema/document/customer-forwarder.schema";
import useShipmentTracking from "@/hooks/use-shipment-tracking";

const formSchema = z.object({
    date: z.string(),
    location: z.string(),
    A_name: z.string(),
    A_address: z.string(),
    A_phone: z.string(),
    A_account: z.string(),
    A_bank: z.string(),
    A_represent: z.string(),
    A_position: z.string(),
    A_authorNumber: z.string(),
    A_authorDate: z.string(),
    A_signPosition: z.string(),
    B_name: z.string(),
    B_address: z.string(),
    B_phone: z.string(),
    B_account: z.string(),
    B_bank: z.string(),
    B_represent: z.string(),
    B_position: z.string(),
    B_authorNumber: z.string(),
    B_authorDate: z.string(),
    B_signPosition: z.string(),
    sum: z.string(),
    vnd: z.string(),
    foreignCurrency: z.string(),
    rows: z.array(
        z.object({
          productName: z.string(),
          unitCalculation: z.string(),
          quantity: z.string(),
          price: z.string(),
          total: z.string(),
          note: z.string(),
        })
    ),
    shipmentId: z.string(),
    docNumber: z.string(),
    exportDate: z.string(),
    deliveryDate: z.string(),
    time: z.string(),
    day: z.string(),
    address: z.string(),
    bank: z.string(),
    item1: z.string(),
    item2: z.string(),
    item3: z.string(),
    price1: z.string(),
    price2: z.string(),
    price3: z.string(),
    fee: z.string(),
    method: z.string(),
    area: z.string(),
    overdueRate: z.string(),
    penaltyRate: z.string(),
    contractDate: z.string(),
    version: z.string(),
    perVersion: z.string(),
    signA: z.string(),
    signB: z.string(),
    place: z.string(),
});

export default function CustomerForwarderContract() {
    const [rows, setRows] = useState(
        Array(1).fill({ productName: "", unitCalculation: "", quantity: "", price: "", total:"", note:"" })
    );

    const router = useRouter();
    const { mutate: CreateDocument } = useDocument.useCreateDocument(router);

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

    const addRow = () => {
        setRows((prev) => [
        ...prev,
        { productName: "", unitCalculation: "", quantity: "", price: "", total: "", note:"" },
        ]);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: "",
            location: "",
            A_name: "",
            A_address: "",
            A_phone: "",
            A_account: "",
            A_bank: "",
            A_represent: "",
            A_position: "",
            A_authorNumber: "",
            A_authorDate: "",
            A_signPosition: "",
            B_name: "",
            B_address: "",
            B_phone: "",
            B_account: "",
            B_bank: "",
            B_represent: "",
            B_position: "",
            B_authorNumber: "",
            B_authorDate: "",
            B_signPosition: "",
            sum: "",
            vnd: "",
            foreignCurrency: "",
            rows: Array(1).fill({
                productName: "",
                unitCalculation: "",
                quantity: "",
                price: "",
                total: "",
                note: "",
            }),
            shipmentId: "",
            docNumber: "",
            exportDate: "",
            deliveryDate: "",
            time: "",
            day: "",
            bank: "",
            address: "",
            item1: "",
            item2: "",
            item3: "",
            price1: "",
            price2: "",
            price3: "",
            fee: "",
            method: "",
            area: "",
            overdueRate: "",
            penaltyRate: "",
            version: "",
            perVersion: "",
            contractDate: "",
            signA: "",
            signB: "",
            place: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Customer Forwarder Contract Data:", values);
        const fields = {
            date: values.date,
            location: values.location,
            A_name: values.A_name,
            A_address: values.A_address,
            A_phone: values.A_phone,
            A_account: values.A_account,
            A_bank: values.A_bank,
            A_represent: values.A_represent,
            A_position: values.A_position,
            A_authorNumber: values.A_authorNumber,
            A_authorDate: values.A_authorDate,
            A_signPosition: values.A_signPosition,
            B_name: values.B_name,
            B_address: values.B_address,
            B_phone: values.B_phone,
            B_account: values.B_account,
            B_bank: values.B_bank,
            B_represent: values.B_represent,
            B_position: values.B_position,
            B_authorNumber: values.B_authorNumber,
            B_authorDate: values.B_authorDate,
            B_signPosition: values.B_signPosition,
            sum: values.sum,
            vnd: values.vnd,
            foreignCurrency: values.foreignCurrency,
            rows: values.rows,
            exportDate: values.exportDate,
            deliveryDate: values.deliveryDate,
            time: values.time,
            day: values.day,
            bank: values.bank,
            address: values.address,
            item1: values.item1,
            item2: values.item2,
            item3: values.item3,
            price1: values.price1,
            price2: values.price2,
            price3: values.price3,
            fee: values.fee,
            method: values.method,
            area: values.area,
            overdueRate: values.overdueRate,
            penaltyRate: values.penaltyRate,
            version: values.version,
            perVersion: values.perVersion,
            contractDate: values.contractDate,
            signA: values.signA,
            signB: values.signB,
        };

        const createCustomerForwarder: CreateDocumentType = {
            shipmentId: values.shipmentId,
            type: "CUSTOMER_FORWARDER_CONTRACT",
            docNumber: values.docNumber ? parseInt(values.docNumber, 10) : 0,
            fields,
        };
        console.log(createCustomerForwarder);
        CreateDocument(createCustomerForwarder);
    }
    return (
        <div className="w-full max-w-5xl mx-auto p-8 border border-gray-300 shadow-md bg-white">
        <div className="flex flex-col items-center mb-2">
            <h1 className="text-xl font-bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h1>
            <div className="text-sm mt-1 text-center">
                <p>Độc lập - Tự do - Hạnh phúc</p>
                <span className="font-bold">__________________</span><br />
                <span className="font-bold text-xl mt-2 block">HỢP ĐỒNG ỦY THÁC XUẤT KHẨU</span><br />
            </div>
        </div>

        <div className="gap-2 mb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-2 items-center text-center">
                        <div className="flex items-center justify-center gap-x-2">
                            <span className="mb-1">Số:</span>
                            <FormField
                                control={form.control}
                                name="docNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <span className="mb-1">/HĐKTXK</span>
                        </div>
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
                                <SelectTrigger className="w-[200px] h-[30px] text-lg ">
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
                        <div className="flex gap-x-2">
                            <span className="mb-1">Hôm nay, ngày</span>
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tại</span>
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <h2 className="mt-1">Chúng tôi gồm có:</h2>
                    {/* Party B*/}
                    <h2 className="mt-1 font-bold">Bên A (Bên ủy thác)</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tên doanh nghiệp (hoặc cơ quan):</span>
                            <FormField
                                control={form.control}
                                name="A_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Địa chỉ trụ sở chính:</span>
                            <FormField
                                control={form.control}
                                name="A_address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Điện thoại:</span>
                            <FormField
                                control={form.control}
                                name="A_phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tài khoản:</span>
                            <FormField
                                control={form.control}
                                name="A_account"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tại ngân hàng:</span>
                            <FormField
                                control={form.control}
                                name="A_bank"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Đại diện là Ông (Bà):</span>
                            <FormField
                                control={form.control}
                                name="A_represent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Chức vụ:</span>
                            <FormField
                                control={form.control}
                                name="A_position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Giấy ủy quyền số:</span>
                            <FormField
                                control={form.control}
                                name="A_authorNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <span className="mb-1">Viết ngày</span>
                            <FormField
                                control={form.control}
                                name="A_authorDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Do chức vụ:</span>
                            <FormField
                                control={form.control}
                                name="A_signPosition"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <span className="mb-1">Ký</span>
                        </div>
                    </div>

                    {/* Party B*/}
                    <h2 className="mt-1 font-bold">Bên B (Bên ủy thác)</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tên doanh nghiệp (hoặc cơ quan):</span>
                            <FormField
                                control={form.control}
                                name="B_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Địa chỉ trụ sở chính:</span>
                            <FormField
                                control={form.control}
                                name="B_address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Điện thoại:</span>
                            <FormField
                                control={form.control}
                                name="B_phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tài khoản:</span>
                            <FormField
                                control={form.control}
                                name="B_account"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Tại ngân hàng:</span>
                            <FormField
                                control={form.control}
                                name="B_bank"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Đại diện là Ông (Bà):</span>
                            <FormField
                                control={form.control}
                                name="B_represent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Chức vụ:</span>
                            <FormField
                                control={form.control}
                                name="B_position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Giấy ủy quyền số:</span>
                            <FormField
                                control={form.control}
                                name="B_authorNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <span className="mb-1">Viết ngày</span>
                            <FormField
                                control={form.control}
                                name="B_authorDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <span className="mb-1">Do chức vụ:</span>
                            <FormField
                                control={form.control}
                                name="B_signPosition"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                name={field.name}
                                                className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <span className="mb-1">Ký</span>
                        </div>
                    </div>
                    <h2 className="mt-1">Hai bên thỏa thuận và cùng ký kết hợp đồng với các điều khoản như sau:</h2>
                    <h2 className="mt-1 font-bold">Điều 1: Nội dung</h2>
                    <h2 className="mt-1">1. Bên A ủy thác cho bên B thực hiện xuất khẩu những hàng hóa sau:</h2>
                    <table className="w-full border-collapse border border-gray-400 mb-6">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 p-2">STT</th>
                                <th className="border border-gray-400 p-2">Tên hàng</th>
                                <th className="border border-gray-400 p-2">Đơn vị tính</th>
                                <th className="border border-gray-400 p-2">Số lượng</th>
                                <th className="border border-gray-400 p-2">Đơn giá</th>
                                <th className="border border-gray-400 p-2">Thành tiền</th>
                                <th className="border border-gray-400 p-2">Ghi chú</th>
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
                                                    <Input placeholder="Tên hàng" {...field} />
                                                </FormControl>
                                              </FormItem>
                                            )}
                                          />
                                        </td>
                    
                                        <td className="border border-gray-400 p-2">
                                          <FormField
                                            control={form.control}
                                            name={`rows.${index}.unitCalculation`}
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormControl>
                                                  <Input placeholder="Đơn vị tính" {...field} />
                                                </FormControl>
                                              </FormItem>
                                            )}
                                          />
                                        </td>
                    
                                        <td className="border border-gray-400 p-2">
                                          <FormField
                                            control={form.control}
                                            name={`rows.${index}.quantity`}
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormControl>
                                                  <Input
                                                    type="number"
                                                    placeholder="Số luợng"
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
                                            name={`rows.${index}.price`}
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormControl>
                                                  <Input placeholder="Đơn giá" {...field} />
                                                </FormControl>
                                              </FormItem>
                                            )}
                                          />
                                        </td>
                                        <td className="border border-gray-400 p-2">
                                          <FormField
                                            control={form.control}
                                            name={`rows.${index}.total`}
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormControl>
                                                  <Input placeholder="Thành tiền" {...field} />
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
                                                  <Input placeholder="Ghi chú" {...field} />
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

                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex gap-x-2">
                                <span className="mb-1">Cộng:</span>
                                <FormField
                                    control={form.control}
                                    name="sum"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-x-2">
                                <span className="mb-1">2. Tổng giá trị hàng hóa (tính theo tiền Việt Nam):</span>
                                <FormField
                                    control={form.control}
                                    name="vnd"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-x-2">
                                <span className="mb-1">3. Tổng giá trị hàng hóa (tính theo ngoại tệ):</span>
                                <FormField
                                    control={form.control}
                                    name="foreignCurrency"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <h2 className="mb-1 font-bold">Điều 2: Quy cách, chất lượng của hàng hóa</h2>
                            <h2 className="mb-1">1. Bên B có trách nhiệm hướng dẫn cho bên A về tiêu chuẩn, chất lượng hàng hóa, kiểm dịch, bao bì, cách chọn mẫu để chào hàng...ngay từ khi sản xuất, chế biến.</h2>
                            <h2 className="mb-1">2. Bên A phải cung cấp cho bên B các tài liệu cần thiết liên quan về quy cách, phẩm chất, mẫu hàng... để chào bán.</h2>
                            <h2 className="mb-1">3. Bên A phải chịu trách nhiệm về chất lượng hàng hóa nếu có sự sai lệch so với nội dung được chào hàng, đồng thời chịu trách nhiệm về số lượng hàng hóa bên trong bao bì trong các kiện hàng hoặc container do bên A đóng hàng, khi hàng đến tay bên ngoài.</h2>
                            <h2 className="mb-1 font-bold">Điều 3: Quyền sở hữu hàng xuất khẩu</h2>
                            <h2 className="mb-1">1. Hàng hóa được ủy thác xuất khẩu là tài sản thuộc sở hữu của bên A cho đến khi hàng hóa này được bên A chuyển quyền sở hữu cho bên nước ngoài. Trong bất kỳ giai đoạn nào, bên B cũng không có quyền sở hữu số hàng hóa ủy thác này.</h2>
                            <h2 className="mb-1">2. Bên B phải tạo điều kiện cho bên A được tham gia giao dịch, đàm phán với bên nước ngoài về việc chào bán hàng hóa của mình.</h2>

                            <div className="flex flex-wrap items-center mt-1 gap-x-2">
                            <span className="mb-1">3. Mỗi lô hàng bên A cam đoan chỉ ủy thác cho bên B là đơn vị có chức năng xuất nhập khẩu tiến hành chào hàng và xuất khẩu</span>
                            <span>từ ngày</span>
                                <FormField
                                    control={form.control}
                                    name="exportDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[300px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            <span className="mt-1">Nếu sau đó bên A lại chuyển quyền sở hữu lô hàng này cho đơn vị khác hoặc dùng nó để gán nợ, cầm cố, thế chấp, bảo lãnh tài sản trong các KĐKT khác mà không có sự đồng ý của bên B thì bên A phải hoàn toàn chịu trách nhiệm.</span>
                        </div>
                        <h2 className="mt-1 font-bold">Điều 4: Vận chuyển, giao dịch xuất khẩu hàng hóa</h2>
                        <h2 className="mt-1">1. Bên A có trách nhiệm vận chuyển hàng hóa tới địa điểm và thời gian bên B đã hướng dẫn như sau:</h2>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex gap-x-2">
                                <span className="mb-1">Địa điểm:</span>
                                <FormField
                                    control={form.control}
                                    name="place"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[600px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-x-2">
                                <span className="mb-1">Thời gian: Hàng hóa phải có trước</span>
                                <FormField
                                    control={form.control}
                                    name="time"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span className="mb-1">giờ của ngày</span>
                                <FormField
                                    control={form.control}
                                    name="deliveryDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                /> 
                            </div>
                            <div className="flex flex-wrap items-center mt-1 gap-x-2">
                                <span className="mb-1">2. Bên B phải có trách nhiệm khẩn trương giao dịch xuất khẩu hàng hóa trong</span>
                                <FormField
                                    control={form.control}
                                    name="day"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[300px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>ngày (kể từ ngày bên A thông báo đã chuẩn bị đủ các yêu cầu về hàng hóa thỏa thuận với bên B). Nếu không giao dịch được trong thời gian này, bên B phải thông báo ngay cho bên A biết để xử lý lô hàng đó.</span>
                            </div>
                            <h2 className="mt-1">3. Bên B có trách nhiệm xuất khẩu hàng hóa với điều kiện có lợi nhất cho bên A (về giá cả, khả năng thanh toán nhanh bằng ngoại tệ...).</h2>
                            <h2 className="mt-1 font-bold">Điều 5: Thanh toán tiền bán hàng</h2>
                            <div className="flex flex-wrap items-center mt-1 gap-x-2">
                                <span className="mb-1">Bên B có trách nhiệm cung cấp cho ngân hàng</span>
                                <FormField
                                    control={form.control}
                                    name="bank"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>tại</span>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[400px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span className="mt-1">các tài liệu cần thiết để tạo lợi nhuận cho bên A nhận được ngoại tệ của bên nước ngoài thanh toán theo cách nhanh chóng nhất.</span>
                            </div>
                                <h2 className="mt-1">Bên A được quyền sử dụng ngoại tệ đó theo quy định pháp luật, bên B không có quyền trong việc sở hữu số ngoại tệ này.</h2>
                                <h2 className="mt-1 font-bold">Điều 6: Giải quyết rủi ro</h2>
                                <h2 className="mt-1">Bên A phải chịu rủi ro trong quá trình ủy thác xuất khẩu lô hàng nếu bên B chứng minh là mình không có lỗi và đã làm đầy đủ tất cả trách nhiệm đòi bồi thường ở bên thứ ba (là phía có lỗi gây rủi ro).</h2>
                                <h2 className="mt-1">Trường hợp này bên thứ ba thực hiện nghĩa vụ bồi thường trực tiếp cho bên A.</h2>

                                <h2 className="mt-1 font-bold">Điều 7: Thanh toán chi phí ủy thác</h2>
                                <h2 className="mt-1">1. Bên A phải thanh toán cho bên B chi phí ủy thác theo mức hai bên thỏa thuận</h2>
                                <div className="flex gap-x-2">
                                    <span className="mb-1">Số tiền chi phí ủy thác mặt hàng</span>
                                    <FormField
                                        control={form.control}
                                        name="item1"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">(thứ nhất) là </span>
                                    <FormField
                                        control={form.control}
                                        name="price1"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">đồng</span>
                                </div>
                                <div className="flex gap-x-2">
                                    <FormField
                                        control={form.control}
                                        name="item2"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">(thứ hai) là </span>
                                    <FormField
                                        control={form.control}
                                        name="price2"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">đồng</span>
                                </div>
                                <div className="flex gap-x-2">
                                    <FormField
                                        control={form.control}
                                        name="item3"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">(thứ ba) là </span>
                                    <FormField
                                        control={form.control}
                                        name="price3"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">đồng</span>
                                </div>
                                <div className="flex gap-x-2">
                                    <span className="mt-1">Tổng chi phí ủy thác là: </span>
                                    <FormField
                                        control={form.control}
                                        name="fee"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <span className="mt-1">đồng</span>
                                </div>
                                <div className="flex gap-x-2">
                                    <span className="mt-1">Thanh toán theo phương thức: </span>
                                    <FormField
                                        control={form.control}
                                        name="method"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <input
                                                        name={field.name}
                                                        className="border-dotted border-b-2 w-48 py-1 outline-none text-center"
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <h2 className="mt-1 font-bold">Điều 8: Trách nhiệm của các bên trong thực hiện hợp đồng</h2>
                                <h2 className="mt-1">1. Trường hợp hàng hóa bị khiếu nại do sai sót của bên A thì bên A chịu trách nhiệm bồi thường thiệt hại cho bên nước ngoài theo kết quả giải quyết cùng với bên B.</h2>
                                <h2 className="mt-1">2. Bên B có trách nhiệm thực hiện đầy đủ những công việc cần thiết hợp lý để giải quyết những khiếu nại khi bên nước ngoài phát hiện, kể cả trường hợp hàng hóa ủy thác có tổn thất vì gặp rủi ro trên, cũng phái chịu trách nhiệm theo phần lỗi của mình.</h2>
                                <div className="flex flex-wrap items-center mt-1 gap-x-2">
                                <span className="mb-1">3. Khi xác định phần lỗi phải bồi thường thiệt hại vật chất thuộc trách nhiệm của bên A thì bên B có nghĩa vụ gửi những tài liệu</span>
                                <span>pháp lý chứng minh đến ngân hàng ngoại thương khu vực</span>
                                <FormField
                                    control={form.control}
                                    name="area"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-[500px] py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>để ngân hàng này trích tài khoản của bên A và chi trả bồi thường cho bên nước ngoài, đồng thời bên B phải thông báo cho bên A biết.</span>
                            </div>
                            <h2 className="mt-1">4. Nếu bên B hướng dẫn không cụ thể về hàng hóa, dẫn đến sai yêu cầu mà khách hàng đưa ra, gây thiệt hại cho bên A thì bên B có trách nhiệm bồi thường thiệt hại thực tế đã gây ra cho bên A do hàng hóa không xuất khẩu được.</h2>
                            <h2 className="mt-1">5. Bên A không chấp hành đúng thời gian, địa điểm giao nhận hàng dẫn tới hậu quả bị bên nước ngoài phạt hợp đồng với bên B và phải bồi thường các khoản chi phí khác như là cảng phí, tiền thuê phương tiện vận tải... thì bên A chịu trách nhiệm bồi thường thay cho bên B. Nếu lỗi này do bên B hướng dẫn sai thời gian hay địa điểm giao nhận hàng thì bên B phải chịu bồi thường trực tiếp cho bên nước ngoài</h2>
                            <div className="flex flex-wrap items-center mt-1 gap-x-2">
                                <span className="mb-1">6. Nếu bên A chậm thanh toán chi phí ủy thác so với thỏa thuận, bên B được áp dụng mức phạt lãi suất tín dụng quá hạn là</span>
                                <FormField
                                    control={form.control}
                                    name="overdueRate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>% ngày, tính từ ngày hết thời hạn thanh toán chi phí.</span>
                            </div>
                            <div className="flex flex-wrap items-center mt-1 gap-x-2">
                                <span className="mb-1">7. Bên nào đã ký hợp đồng mà không thực hiện hoặc đơn phương đình chỉ việc thực hiện hợp đồng mà không có lý do chính</span>
                                <span>đáng thì sẽ chịu mức phạt</span>
                                <FormField
                                    control={form.control}
                                    name="penaltyRate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>% giá trị phần hợp đồng đã ký.</span>
                            </div>
                            <h2 className="mt-1">8. Nếu xảy ra trường hợp có một bên gây ra nhiều loại vi phạm thì bên này chỉ phải chịu một loại phạt có số tiền phạt ở mức cao nhất mà các bên đã thoả thuận trong hợp đồng.</h2>
                            <h2 className="mt-1 font-bold">Điều 9: Giải quyết tranh chấp hợp đồng</h2>
                            <h2 className="mt-1">1. Hai bên cam kết thực hiện đúng các điều khoản đã thoả thuận.</h2>
                            <h2 className="mt-1">2. Nếu có vấn đề phát sinh, các bên có trách nhiệm kịp thời thông báo cho bên còn lại và tích cực thỏa thuận giải quyết trên cơ sở thoả thuận, bình đẳng cùng có lợi.</h2>
                            <h2 className="mt-1">3.  Trường hợp các bên không tự thương lượng, hòa giải được thì mới đưa vụ tranh chấp ra Toà án giải quyết.</h2>
                            <h2 className="mt-1 font-bold">Điều 10: Các thỏa thuận khác</h2>
                            <h2 className="mt-1 font-bold">Điều 11: Hiệu lực của hợp đồng</h2>
                            <div className="flex gap-x-2">
                                <span className="mb-1">Hợp đồng này có hiệu lực từ ngày ký đến ngày</span>
                                <FormField
                                    control={form.control}
                                    name="contractDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-wrap items-center mt-1 gap-x-2">
                                <span className="mb-1">Hợp đồng này được lập thành</span>
                                <FormField
                                    control={form.control}
                                    name="version"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>mỗi bên giữ</span>
                                <FormField
                                    control={form.control}
                                    name="perVersion"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-24 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <span>bản</span>
                            </div>
                        </div>
                         {/* Signatures */}
                         <div style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", width: "100%", alignItems: "flex-end", alignSelf: "stretch" }}>
                            <div style={{ textAlign: "center" }}>
                            <h3 className="font-bold mt-1">BÊN A</h3>
                            <p>(Ký và ghi rõ họ tên)</p>
                            <FormField
                                    control={form.control}
                                    name="signA"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div style={{ textAlign: "center" }}>
                            <h3 className="font-bold mt-1">BÊN B</h3>
                            <p>(Ký và ghi rõ họ tên)</p>
                                <FormField
                                    control={form.control}
                                    name="signB"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input
                                                    name={field.name}
                                                    className="border-dotted border-b-2 w-40 py-1 outline-none text-center"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
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