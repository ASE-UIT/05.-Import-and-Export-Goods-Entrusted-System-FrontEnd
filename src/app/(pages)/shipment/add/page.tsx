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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // Nhập Select

const formSchema = z.object({
  id: z.string(),
  type: z.string(),
  contractID: z.string(),
});

export default function AddShipment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Shipment</span>
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
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange} // Handles changes in selected value
                      value={field.value} // Value from the form field
                    >
                      <SelectTrigger className="h-[61px] flex items-center">
                        {" "}
                        {/* Đặt chiều cao và căn giữa */}
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air Freight">Air Freight</SelectItem>
                        <SelectItem value="Land Freight">
                          Land Freight
                        </SelectItem>
                        <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contractID"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Contract ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Type a contract ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-1/2 flex gap-2.5">
              <Link href="/shipment" className="w-1/2 h-14 text-lg">
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
