"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  UpdateServiceBody,
  UpdateServiceBodyType,
} from "@/schema/service.schema";
import useService from "@/hooks/use-service";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorType } from "@/types/error.type";
import { toast } from "@/hooks/use-toast";

export default function UpdateService() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const { data } = useService.useGetService(
    "",
    decodeURIComponent(serviceName)
  );
  const updateService = useService.useUpdateService();
  const [loading, setLoading] = useState(false);

  const form = useForm<UpdateServiceBodyType>({
    resolver: zodResolver(UpdateServiceBody),
    defaultValues: {
      name: data?.[0].name,
      shortName: data?.[0].shortName,
      fee: data?.[0].fee,
    },
  });

  const router = useRouter();

  useEffect(() => {
    form.reset({
      name: data?.[0].name,
      shortName: data?.[0].shortName,
      fee: data?.[0].fee,
    });
  }, [data, form]);

  async function onSubmit(values: UpdateServiceBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      if (data?.[0].id) {
        await updateService.mutateAsync({
          serviceId: data[0].id,
          service: values,
        });
        router.push("/service");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: (error as ErrorType).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Service</span>
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
              name="shortName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Short Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Short name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fee"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Fee</FormLabel>
                  <FormControl>
                    <Input placeholder="Fee" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-1/2 flex gap-2.5">
              <Link href="/service" className="w-1/2 h-14 text-lg">
                <Button
                  variant={"outline"}
                  className="w-full h-10 text-lg"
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
