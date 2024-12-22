"use client";

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

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
import useEmployee from "@/hooks/use-employee";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";
import { useRouter } from "next/navigation";
import {
  CreateClientAccountBody,
  CreateClientAccountBodyType,
  CreateEmployeeAccountBody,
  CreateEmployeeAccountBodyType,
} from "@/schema/user.schema";
import useUser from "@/hooks/use-user";
import { EmployeeResType } from "@/types/employee.type";
import useCustomer from "@/hooks/use-customer";

export default function AddClientPage() {
  const [loading, setLoading] = useState(false);
  const { data: user } = useUser.useGetListUser();
  const { useListCustomer } = useCustomer();
  const { data: customer } = useListCustomer();
  const create = useUser.useCreateClientAccount();

  const [customerNotUser, setCustomerNotUser] = useState<CustomerResponse[]>(
    []
  );

  useEffect(() => {
    if (customer && user) {
      const customerNotUser = customer.results?.filter(
        (e) => !user?.data?.find((u) => u.customerId === e.id)
      );
      setCustomerNotUser(customerNotUser || []);
    }
  }, [customer, user]);

  const router = useRouter();

  const form = useForm<CreateClientAccountBodyType>({
    resolver: zodResolver(CreateClientAccountBody),
    defaultValues: {
      username: "",
      password: "",
      role: "CLIENT",
      customerId: "",
    },
  });

  async function onSubmit(values: CreateClientAccountBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      await create.mutateAsync(values);
      toast({
        title: "Success",
        description: "Employee Account create successfully",
      });
      router.push("/account");
    } catch (error) {
      toast({
        title: "Error",
        description:
          (error as ErrorType)?.errors?.[0]?.message ||
          (error as ErrorType)?.message ||
          "An error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Client Account</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">User Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="customerId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Employee</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="h-[60px]">
                          <SelectValue placeholder="Select customer" />
                        </SelectTrigger>
                        <SelectContent>
                          {customerNotUser.length === 0 ? (
                            <SelectItem disabled value="no-customer">
                              No customer available
                            </SelectItem>
                          ) : (
                            customerNotUser.map((customer) => (
                              <SelectItem key={customer.id} value={customer.id}>
                                {customer.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Role</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="w-full h-14 text-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Add Client Account"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
