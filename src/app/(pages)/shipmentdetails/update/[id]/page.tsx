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
  type: z.string(),
  document: z.string(),
  number: z.string(),
  image: z.string(),
});

export default function UpdateService() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Details</span>
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
                    <label className="border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100 transition h-[61px] flex items-center justify-between">
                      {" "}
                      {/* Sử dụng flexbox để căn chỉnh */}
                      <span className="flex items-center flex-1 text-left">
                        {" "}
                        {/* Sử dụng flexbox để căn chỉnh icon và văn bản */}
                        <Upload className="mr-2" />{" "}
                        {/* Thêm khoảng cách bên phải cho icon */}
                        {field.value && typeof field.value !== "string"
                          ? field.value
                          : "Select an image"}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        {...field}
                        onChange={(e) => {
                          const files = e.target.files; // Lấy files
                          if (files && files.length > 0) {
                            const file = files[0]; // Lấy file đầu tiên
                            field.onChange(file); // Cập nhật giá trị cho field
                          } else {
                            field.onChange(null); // Nếu không có file nào, có thể cập nhật giá trị thành null
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
                    <label className="border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100 transition h-[61px] flex items-center justify-between">
                      {" "}
                      {/* Sử dụng flexbox để căn chỉnh */}
                      <span className="flex items-center flex-1 text-left">
                        {" "}
                        {/* Sử dụng flexbox để căn chỉnh icon và văn bản */}
                        <Upload className="mr-2" />{" "}
                        {/* Thêm khoảng cách bên phải cho icon */}
                        {field.value && typeof field.value !== "string"
                          ? field.value
                          : "Select an image"}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        {...field}
                        onChange={(e) => {
                          const files = e.target.files; // Lấy files
                          if (files && files.length > 0) {
                            const file = files[0]; // Lấy file đầu tiên
                            field.onChange(file); // Cập nhật giá trị cho field
                          } else {
                            field.onChange(null); // Nếu không có file nào, có thể cập nhật giá trị thành null
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
              <Link
                href="/shipmentdetails"
                className="w-1/2 h-14 text-lg bg-white text-black"
              >
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
