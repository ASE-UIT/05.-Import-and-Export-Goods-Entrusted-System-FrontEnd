"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

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
  SelectValue
} from "@/components/ui/select";

import { ContactRepBody, ContactRepBodyType } from "@/schema/contactRep.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import useContactRep from "@/hooks/use-contactRep";
import { useEffect } from "react";

import { useProvider } from "@/hooks/use-provider";
import { toast } from "@/hooks/use-toast";



export default function UpdateContactRep() {
  const form = useForm<ContactRepBodyType>({
    resolver: zodResolver(ContactRepBody),
  });
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { useUpdateContactRep, useDetailsContactRep } = useContactRep();
  const { mutate: updateContactRep, isPending } = useUpdateContactRep();

  const { useGetAllProvider } = useProvider()
  const { data: providers } = useGetAllProvider()

  const { data } = useDetailsContactRep(id);
  const contactRep = data?.results[0];

  useEffect(() => {
    if (contactRep) {
      form.reset(contactRep);
      form.setValue("provider_id", contactRep.provider_id);
    }
  }, [contactRep, form]);

  function onSubmit(values: ContactRepBodyType) {
    if (isPending) return;

    updateContactRep(
      { id, body: values },
      {
        onSuccess: () => {
          router.push("/contactrep");
          // alert("ContactRep updated successfully");

          toast({
            title: "Success",
            description: "ContactRep updated successfully",
            variant: "default",
          });
        },
        onError: (error) => {
          const { field, message } = (error as any).errors[0];
          form.setError(field, { type: "manual", message: message });
        },
      }
    );
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">
          Update Contact representatives
        </span>
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
                  <FormLabel className="font-bold">
                    Name
                  </FormLabel>
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
                  <FormLabel className="font-bold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
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
                  <FormLabel className="font-bold">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="branch_location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">
                    Branch Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Branch Location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="provider_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Provider</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-[60px]">
                      <FormControl>
                        <SelectValue placeholder="Provider Name" />
                      </FormControl>
                    </SelectTrigger>
                    <SelectContent>
                      {providers?.results?.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
              <Button
                className="w-1/2 h-10 text-lg"
                type="submit"
                disabled={isPending}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
