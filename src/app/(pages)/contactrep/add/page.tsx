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
import { useProvider } from "@/hooks/use-provider";
import { useRouter } from "next/navigation";

export default function AddContactRep() {
  const form = useForm<ContactRepBodyType>({
    resolver: zodResolver(ContactRepBody),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      branch_location: "",
    },
  });

  const { useCreateContractRep } = useContactRep();

  const { useGetAllProvider } = useProvider()
  const { data: providers } = useGetAllProvider()

  const router = useRouter();
  const { mutate: createContactRep, isPending } = useCreateContractRep();

  function onSubmit(values: ContactRepBodyType) {
    if (isPending) return;
    createContactRep(values, {
      onSuccess: () => {
        form.reset();
        router.push("/contactrep");
      },
      onError: (error) => {
        const { field, message } = (error as any).errors[0];
        form.setError(field, { type: "manual", message: message });
      },
    });
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Contactrep</span>
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
              <Link
                href="/contactrep"
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
