"use client";

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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import {
  CreateLegalRepBody,
  CreateLegalRepBodyType,
} from "@/schema/regalRep.schema";
import useLegalRep from "@/hooks/use-legalRep";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";

export default function AddContactRep() {
  const form = useForm<CreateLegalRepBodyType>({
    resolver: zodResolver(CreateLegalRepBody),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { useCreateLegalRep } = useLegalRep();
  const { mutateAsync: createLegalRep } = useCreateLegalRep(); //

  async function onSubmit(values: CreateLegalRepBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      await createLegalRep(values);
      toast({
        title: "Success",
        description: "Legal representative created successfully",
      });
      router.push("/regal-representative");
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
        <span className="text-3xl font-bold">Add Legal Representative</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
          noValidate
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
              <Link
                href="/legal-representative"
                className="w-1/2 h-14 text-lg bg-white text-black"
              >
                <Button
                  className="w-full h-10  text-lg"
                  variant={"outline"}
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                className="w-1/2 h-10 text-lg"
                variant={"default"}
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Add"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
