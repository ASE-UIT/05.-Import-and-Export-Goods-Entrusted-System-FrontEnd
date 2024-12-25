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
import { CreateDocumentType } from "@/schema/document/im_ex-license.schema";
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
    undefined,
  );

  const router = useRouter();
  const { mutate: CreateDocument } = useDocument.useCreateEximDocument(router);

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
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

    // Kiểm tra các trường trong `fields`
    const fields = {
      companyName: values.companyName,
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

    // Tìm các trường chưa được điền
    const emptyFields = Object.entries(fields).filter(
      ([_, value]) => !value || value === "",
    );

    // Nếu có trường nào trống, hiển thị thông báo lỗi
    if (emptyFields.length > 0) {
      const missingFields = emptyFields.map(([key]) => key).join(", ");
      alert(`Create failed: Missing required fields ${missingFields}`);
      console.error("Create failed: Missing required fields");
      return; // Dừng lại, không tiếp tục tạo tài liệu
    }

    // Nếu tất cả trường đã được điền, tiếp tục xử lý
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
    <div className="mx-auto w-full max-w-5xl border border-gray-300 bg-white p-8 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold">Exim License</h2>
      <div className="container mx-auto max-w-screen-lg p-6"></div>
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
                    <SelectTrigger className="h-[60px] w-full text-lg">
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
                    className="input-underline"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Điều 1 */}
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-bold">Company Information</h3>
            <div className="grid grid-cols-2 items-center gap-4">
              {/* Company Name */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter company's name"
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
                    <FormLabel className="text-lg">Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter company address"
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
                    <FormLabel className="text-lg">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter company's phone number"
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
                    <FormLabel className="text-lg">Fax Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter company's fax number"
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
                    <FormLabel className="text-lg">Business License</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter company's  Business License"
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
                    <FormLabel className="text-lg">Issued By</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Issued By....."
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
                    <FormLabel className="text-lg">Issued Date</FormLabel>
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
            <h3 className="mb-2 text-lg font-bold">
              Article 1: Import (Export) Information
            </h3>
            <div className="grid grid-cols-2 items-center gap-4">
              {/* Nhập khẩu (xuất khẩu) */}
              <FormField
                control={form.control}
                name="importExport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Import (Export) </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Import / Export "
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
                    <FormLabel>Purpose of Import (Export)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter purpose"
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
                    <FormLabel>Import (Export) Checkpoint</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Checkpoint"
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
                    <FormLabel>
                      Means and Conditions of Transportation
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Means and Conditions of Transportation"
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
                    <FormLabel>Estimated Time</FormLabel>
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
                    <FormLabel>Number of Import (Export) Operations</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="number"
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
            <FormLabel className="text-lg">Article 2:</FormLabel>
            <p>
              Company{" "}
              <span className="font-semibold">
                {form.watch("companyName") || "........"}
              </span>{" "}
              Shall be responsible for complying with the provisions of the Law
              on Drug Prevention and Control.
            </p>
          </div>
          {/* Điều 3 */}
          <div className="mb-4">
            <FormLabel className="text-lg">Article 3:</FormLabel>
            <p>
              This license is valid until the end of:
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
