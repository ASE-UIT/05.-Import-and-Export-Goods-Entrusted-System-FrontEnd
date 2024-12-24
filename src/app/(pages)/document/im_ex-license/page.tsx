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
import { CreateDocumentType } from "@/schema/document.schema";
import useShipmentTracking from "@/hooks/use-shipment-tracking";

// Define schema only once
const formSchema = z.object({
  shipmentId: z.string(),
  docNumber: z.string(),
  companyName: z.string(),
  address: z.string(),
  phone: z.string(),
  fax: z.string(),
  businessLicense: z.string(),
  issuedBy: z.string(),
  issuedDate: z.string(),
  importExport: z.string(),
  purpose: z.string(),
  port: z.string(),
  transportConditions: z.string(),
  estimatedTime: z.string(),
  executionTimes: z.string(),
  expiryDate: z.string(),
});

function ImportExportForm() {
  // date
  const [expiryDate, setExpiryDate] = useState<Date | undefined>(undefined);
  const [issuedDate, setIssuedDate] = useState<Date | undefined>(undefined);
  const [estimatedTime, setEstimatedTime] = useState<Date | undefined>(
    undefined
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      phone: "",
      fax: "",
      businessLicense: "",
      issuedBy: "",
      issuedDate: "",
      importExport: "",
      purpose: "",
      port: "",
      transportConditions: "",
      estimatedTime: "",
      executionTimes: "",
      expiryDate: "",
    },
  });

  useEffect(() => {
    if (expiryDate)
      form.setValue("expiryDate", format(expiryDate, "yyyy-MM-dd"));
  }, [expiryDate]);

  useEffect(() => {
    if (issuedDate)
      form.setValue("issuedDate", format(issuedDate, "yyyy-MM-dd"));
  }, [issuedDate]);

  useEffect(() => {
    if (estimatedTime)
      form.setValue("estimatedTime", format(estimatedTime, "yyyy-MM-dd"));
  }, [estimatedTime]);

  // onsubmit

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Exim Data:", values);
    const fields = {
      address: values.address,
      phone: values.phone,
      fax: values.fax,
      businessLicense: values.businessLicense,
      issuedBy: values.issuedBy,
      issuedDate: values.issuedDate,
      importExport: values.importExport,
      purpose: values.purpose,
      port: values.port,
      transportConditions: values.transportConditions,
      estimatedTime: values.estimatedTime,
      executionTimes: values.executionTimes,
      expiryDate: values.expiryDate,
    };
    const createQuoteRequest: CreateDocumentType = {
      shipmentId: values.shipmentId,
      type: "EXIM_LISENCE",
      docNumber: values.docNumber ? parseInt(values.docNumber, 10) : 0,
      fields,
    };
    console.log(createQuoteRequest);
    CreateDocument(createQuoteRequest);
  }
  return (
    <div className="w-full max-w-5xl mx-auto p-8 border border-gray-300 shadow-md bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Exim License</h2>
      <div className="container mx-auto p-6 max-w-screen-lg"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Shipment ID */}
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

          {/* docNumber */}
          <FormField
            control={form.control}
            name="docNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Document Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter doc number"
                    {...field}
                    type="number"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Điều 1 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Thông tin công ty</h3>
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Company Name */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Công ty</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tên công ty"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Trụ sở tại</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Địa chỉ"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Điện thoại</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Số điện thoại"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Fax */}
              <FormField
                control={form.control}
                name="fax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Số fax</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Số fax"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Business License */}
              <FormField
                control={form.control}
                name="businessLicense"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Giấy phép kinh doanh
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123456"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Issued By */}
              <FormField
                control={form.control}
                name="issuedBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Cơ quan cấp</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Cơ quan cấp"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Issued Date */}
              <FormField
                control={form.control}
                name="issuedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Cấp ngày</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">
              Điều 1: Thông tin nhập khẩu (xuất khẩu)
            </h3>
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Nhập khẩu (xuất khẩu) */}
              <FormField
                control={form.control}
                name="importExport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nhập khẩu (xuất khẩu)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập khẩu hoặc xuất khẩu"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Mục đích nhập khẩu (xuất khẩu) */}
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mục đích nhập khẩu (xuất khẩu)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Mục đích"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Cửa khẩu nhập khẩu (xuất khẩu) */}
              <FormField
                control={form.control}
                name="port"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cửa khẩu nhập khẩu (xuất khẩu)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Cửa khẩu"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Phương tiện và điều kiện vận chuyển */}
              <FormField
                control={form.control}
                name="transportConditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phương tiện và điều kiện vận chuyển</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phương tiện vận chuyển"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Thời gian thực hiện nhập khẩu (xuất khẩu) dự kiến */}
              <FormField
                control={form.control}
                name="estimatedTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thời gian thực hiện dự kiến</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Số lần thực hiện nhập khẩu (xuất khẩu) */}
              <FormField
                control={form.control}
                name="executionTimes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Số lần thực hiện nhập khẩu (xuất khẩu)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Số lần"
                        className="input-underline"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Điều 2 */}
          <div className="mb-4">
            <FormLabel className="text-lg">Điều 2:</FormLabel>
            <p>
              Công ty{" "}
              <span className="font-semibold">
                {form.watch("companyName") || "........"}
              </span>{" "}
              có trách nhiệm thực hiện đúng quy định của Luật Phòng, chống ma
              túy.
            </p>
          </div>
          {/* Điều 3 */}
          <div className="mb-4">
            <FormLabel className="text-lg">Điều 3:</FormLabel>
            <p>
              Giấy phép này có giá trị đến hết ngày:
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="date"
                        className="input-underline"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </p>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ImportExportForm;
