"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useProvider } from "@/hooks/use-provider";
import { useEffect } from "react";

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
import { useParams } from "next/navigation";
import { providerSchema } from "@/schema/provider.schema";
import { useContactRep } from "@/hooks/use-contactRep";

export default function UpdateProvider() {
  const { id: providerId } = useParams<{ id: string }>();

  const { useGetProviderById, useUpdateProvider } = useProvider();
  const { useGetAllContactRep } = useContactRep();

  const updateMutation = useUpdateProvider();
  const { data: contactReps } = useGetAllContactRep();

  const form = useForm<z.infer<typeof providerSchema>>({
    resolver: zodResolver(providerSchema),
  });

  const { data: provider, error, isPending } = useGetProviderById(providerId);

  useEffect(() => {
    if (provider) {
      console.log(provider);
      if (provider.data) {
        const providerData = provider.data[0];

        form.reset({
          name: providerData.name,
          email: providerData.email,
          phone: providerData.phone,
          address: providerData.address,
          country: providerData.country,
          contactRepId: providerData.contactRepId,
        });
      }
    }
  }, [provider, form]);

  function onSubmit(values: z.infer<typeof providerSchema>) {
    try {
      updateMutation.mutate({
        id: providerId,
        data: values,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Provider</span>
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

            {/* Contact Representative as Select */}
            <FormField
              control={form.control}
              name="contactRepId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">ContactRep</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder="Select a representative" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReps ? (
                          contactReps.data?.map((contactRep) => (
                            <SelectItem
                              key={contactRep.id}
                              value={contactRep.id}
                            >
                              {contactRep.name}
                            </SelectItem>
                          ))
                        ) : (
                          <>
                            <SelectItem value="01">
                              Representative 01
                            </SelectItem>
                            <SelectItem value="02">
                              Representative 02
                            </SelectItem>
                            <SelectItem value="03">
                              Representative 03
                            </SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
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
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-1/2 flex gap-2.5">
              <Link href="/provider" className="w-1/2 h-10">
                <Button
                  className="w-full h-10 text-lg"
                  variant={"outline"}
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
