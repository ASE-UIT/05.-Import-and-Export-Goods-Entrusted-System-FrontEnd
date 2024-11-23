"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";
import Link from "next/link";
import { useContactRep } from "@/hooks/use-contactRep";
import { contactRepSchema } from "@/schema/contactRep.schema";
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
import { useParams } from "next/navigation";

const formSchema = z.object({
  name: z.string(),
  contactrep: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  country: z.string(),
});

export default function UpdateContactrep() {
  const { id: contactrepId } = useParams<{ id: string }>();

  const { useGetContactRepById, useUpdateContactRep } = useContactRep();

  const updateMutation = useUpdateContactRep();

  const {
    data: contactrep,
    error,
    isPending,
  } = useGetContactRepById(contactrepId);

  const form = useForm<z.infer<typeof contactRepSchema>>({
    resolver: zodResolver(contactRepSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (contactrep) {
      console.log(contactrep);
      if (contactrep.data) {
        const contactRepData = contactrep.data[0];

        form.reset({
          name: contactRepData.name,
          email: contactRepData.email,
          phone: contactRepData.phone,
        });
      }
    }
  }, [contactrep, form]);

  function onSubmit(values: z.infer<typeof contactRepSchema>) {
    try {
      updateMutation.mutate({
        id: contactrepId,
        data: values,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update ContactRep</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

            <div className="w-1/2 flex gap-2.5">
              <Button
                variant={"outline"}
                type="button"
                className="w-1/2 h-10 text-lg"
              >
                <Link href="/contactrep">Cancel</Link>
              </Button>
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
