"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { z } from "zod";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { useParams } from "next/navigation";

const formSchema = z.object({
  name: z.string(),
  short_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  tax_id: z.string(),
  address: z.string(),
  legal_rep_name: z.string(),
  file: z
    .instanceof(File)
    .refine((file) => file.size < 10000000, {
      message: "Your file must be less than 10MB.",
    })
    .optional(),
});

export default function UpdateCustomerPage() {
  const { id: customerId } = useParams<{ id: string }>();
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onPickFile = useCallback(
    (acceptedFile: File) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result as string);
        reader.readAsDataURL(acceptedFile);
        form.setValue("file", acceptedFile);
        form.clearErrors("file");
      } catch (error) {
        setPreview(null);
        form.resetField("file");
      }
    },
    [form]
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Customer</span>
        <span className="text-sm font-bold">ID: {customerId}</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center">
            <FormField
              control={form.control}
              name="file"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="size-32">
                        {preview && <AvatarImage src={preview} />}
                        <AvatarFallback className="bg-[#ECECEE]">
                          <Camera className="size-10" />
                        </AvatarFallback>
                      </Avatar>
                      <Input
                        id="file"
                        className="hidden"
                        type="file"
                        accept="image/*"
                        {...fieldProps}
                        onChange={(event) => {
                          const file =
                            event.target.files && event.target.files[0];
                          if (file) {
                            onChange(file);
                            onPickFile(file);
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        Upload Image
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-3/4">
                    <FormLabel className="font-bold">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="short_name"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel className="font-bold">Short Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Short Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-2">
              <FormField
                control={form.control}
                name="tax_id"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Tax ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Tax ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="legal_rep_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Legal Rep Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Legal Rep Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full h-14 text-lg" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}