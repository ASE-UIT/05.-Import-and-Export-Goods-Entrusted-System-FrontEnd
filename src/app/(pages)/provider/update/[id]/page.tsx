"use client";

import { useProvider } from "@/hooks/use-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { providerSchema } from "@/schema/provider.schema";
import { useParams, useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";

export default function UpdateProvider() {
  const { id: providerId } = useParams<{ id: string }>();

  const { useGetProviderById, useUpdateProvider } = useProvider();
  const [loading, setLoading] = useState(false);

  const updateMutation = useUpdateProvider();

  const form = useForm<z.infer<typeof providerSchema>>({
    resolver: zodResolver(providerSchema),
  });

  const { data: provider } = useGetProviderById(providerId);
  const router = useRouter();

  useEffect(() => {
    if (provider) {
      console.log(provider);
      if (provider.results) {
        const providerData = provider.results[0];

        form.reset({
          name: providerData.name,
          email: providerData.email,
          phone: providerData.phone,
          address: providerData.address,
          country: providerData.country,
          status: providerData.status as "active" | "inactive",
        });
      }
    }
  }, [provider, form]);

  async function onSubmit(values: z.infer<typeof providerSchema>) {
    if (loading) return;
    setLoading(true);
    try {
      await updateMutation.mutateAsync({
        id: providerId,
        data: values,
      });
      toast({
        title: "Success",
        description: "Provider updated successfully",
      });
      router.push("/provider");
    } catch (error) {
      toast({
        title: "Error",
        description:
          (error as ErrorType).errors?.[0]?.message ||
          (error as ErrorType).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
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
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={provider?.results[0].status}
                    >
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
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
              <Button
                className="w-1/2 h-10 text-lg"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Update"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
