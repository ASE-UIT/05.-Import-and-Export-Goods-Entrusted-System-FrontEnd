"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import Link from "next/link";
import { format, isSameDay } from "date-fns"; // Import format function

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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import useInvoice from "@/hooks/use-invoice";
import { InvoiceDetailsType, UpdateInvoiceType } from "@/schema/invoice.schema";
import { Toaster } from "react-hot-toast";

const formSchema = z.object({
  contractId: z.string().optional(),
  employeeId: z.string().optional(),
  expiredDate: z.date(),
  status: z.string(),
  taxAmount: z.string(),
  totalAmount: z.string(),
});

export default function UpdateInvoice() {
  const [expiredDate, setExpiredDate] = useState<Date | undefined>(undefined);

  const [invoice, setInvoice] = useState<InvoiceDetailsType>();
  const path = usePathname();
  const id = path.split("/").pop();
  const { data, error } = useInvoice.useGetInvoice(id);

  const router = useRouter();
  const { mutate: updateInvoice, status } = useInvoice.useUpdateInvoice(
    id,
    router
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      expiredDate: invoice?.expiredDate || new Date(), // Thêm giá trị mặc định
    },
  });

  useEffect(() => {
    if (data && data.data.length > 0) {
      const invoiceData = data.data.find(invoice => invoice.id === id); // Lọc theo id
    if (invoiceData) {
      setInvoice(invoiceData);
      setExpiredDate(new Date(invoiceData.expiredDate));
      form.setValue("contractId", invoiceData.contractId);
      form.setValue("employeeId", invoiceData.employeeId);
      form.setValue("status", invoiceData.status);
      form.setValue("taxAmount", invoiceData.taxAmount.toString());
      form.setValue("totalAmount", invoiceData.totalAmount.toString());
    }
    }
  }, [data]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updateInvoiceBody: Partial<UpdateInvoiceType> = {
      ...(values.status.toUpperCase() !== invoice?.status.toUpperCase() && {
        status: values.status.toUpperCase(),
      }),
    };
  
    if (Object.keys(updateInvoiceBody).length > 0) {
      updateInvoice(updateInvoiceBody);
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
        <span className="text-3xl font-bold">Update Invoice</span>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Contract ID */}
            <FormField
              control={form.control}
              name="contractId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[16px] font-bold">
                    Contract ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      value={invoice?.id || field.value || ""}
                      readOnly
                      className="w-full h-[60px] bg-gray-100 text-gray-500 cursor-not-allowed"
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
                <FormItem className="w-full">
                  <FormLabel className="text-[16px] font-bold">
                    Employee ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      value={invoice?.employeeId || field.value || ""}
                      readOnly
                      className="w-full h-[60px] bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date pickers */}
            <div className="w-full flex space-x-[12px]">
              {/* Expired Date */}
              <FormField
              control={form.control}
              name="expiredDate"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="text-[16px] font-bold">Expired Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-full h-[60px] justify-start text-left font-normal ${
                            !expiredDate ? "text-muted-foreground" : ""
                          }`}
                          disabled // Vô hiệu hóa button để người dùng không thể mở popover
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expiredDate ? (
                            format(expiredDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={expiredDate}
                          onSelect={(date) => {
                            // Không thực hiện gì khi chọn ngày
                          }}
                          disabled // Vô hiệu hóa calendar để người dùng không thể chọn ngày
                        />
                      </PopoverContent>
                    </Popover>
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
                <FormItem className="w-1/2">
                  <FormLabel className="font-bold">Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={invoice?.status}
                    >
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder={invoice?.status} />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="PENDING">PENDING</SelectItem>
                      <SelectItem value="REFUNDED">REFUNDED</SelectItem>
                      <SelectItem value="CANCELLED">CANCELLED</SelectItem>

                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>

            


            {/* Tax */}
            <FormField
              control={form.control}
              name="taxAmount"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Tax</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tax"
                      {...field}
                      value={field.value || invoice?.taxAmount || ""} 
                      readOnly
                      className="bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* Total Amount */}
            <FormField
              control={form.control}
              name="totalAmount"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Total</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Total"
                      {...field}
                      defaultValue={invoice?.totalAmount || ""} 
                      readOnly
                      className="bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormMessage className="text-[14px]">
                {form.formState.errors.root?.message}
              </FormMessage>
            <div className="w-1/2 flex gap-2.5">
              <Link href="/invoices" className="w-1/2 h-14">
                <Button className="w-full h-10 text-lg" variant={"outline"} type="button">
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
    </div>
  );
}
