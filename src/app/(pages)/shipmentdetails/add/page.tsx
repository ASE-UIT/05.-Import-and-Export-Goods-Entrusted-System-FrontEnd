"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

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
import { Upload } from "lucide-react";

const formSchema = z.object({
  type: z.string().nonempty("Document type is required"), // Thêm thông báo lỗi nếu cần
  document: z.instanceof(File, { message: "Please upload a valid document" }),
  number: z.string().nonempty("Document number is required"),
  image: z.instanceof(File, { message: "Please upload a valid image" }),
});

export default function AddShipmentDocument() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.document || !values.image) {
      alert("Both document and image are required");
      return;
    }
    console.log(values); // In ra giá trị file đã được nạp
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Shipment Document</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Input document type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document</FormLabel>
                  <FormControl>
                    <label className="border border-gray-300 rounded-md p-2 cursor-pointer h-[61px] flex items-center justify-between">
                      <span className="flex items-center flex-1 text-left">
                        <Upload className="mr-2" />
                        {field.value ? field.value.name : "Select a document"}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            const file = files[0];
                            // Kiểm tra kích thước tệp (giới hạn 5MB)
                            if (file.size > 5 * 1024 * 1024) {
                              alert("File size exceeds 5MB");
                              return;
                            }
                            field.onChange(file);
                          } else {
                            field.onChange(null);
                          }
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Type Document Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Image</FormLabel>
                  <FormControl>
                    <label className="border border-gray-300 rounded-md p-2 cursor-pointer h-[61px] flex items-center justify-between">
                      <span className="flex items-center flex-1 text-left">
                        <Upload className="mr-2" />
                        {field.value ? field.value.name : "Select an image"}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            const file = files[0];
                            // Kiểm tra kích thước tệp (giới hạn 5MB)
                            if (file.size > 5 * 1024 * 1024) {
                              alert("File size exceeds 5MB");
                              return;
                            }
                            field.onChange(file);
                          } else {
                            field.onChange(null);
                          }
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-1/2 flex gap-2.5">
              <Link href="/shipmentdetails" className="w-1/2 h-14 text-lg">
                <Button
                  variant={"outline"}
                  className="w-full h-10 text-lg"
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button className="w-1/2 h-10 text-lg" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
