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
  updateEmployeeBody,
  UpdateEmployeeBodyType,
} from "@/schema/employee.schema";
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
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/loader";

export default function UpdateEmployeePage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useEmployee.useGetDetailEmployee(id);
  const [loading, setLoading] = useState(false);

  const update = useEmployee.useUpdateEmployee();

  const router = useRouter();

  const form = useForm<UpdateEmployeeBodyType>({
    resolver: zodResolver(updateEmployeeBody),
    defaultValues: {
      name: data?.data?.name || "",
      email: data?.data?.email || "",
      phone: data?.data?.phone || "",
      address: data?.data?.address || "",
      position:
        ((data?.data?.position === "HUMAN_RESOURCE"
          ? "HUMAN_RESOURCES"
          : data?.data?.position) as
          | "MANAGER"
          | "ACCOUNTANT"
          | "SALES"
          | "CUSTOMER_SERVICE"
          | "HUMAN_RESOURCES"
          | "DOCUMENTATION") || "SALES",
      dob: data?.data?.dob || "",
      coefficientSalary: data?.data?.coefficientSalary || 0,
      baseSalary: data?.data?.baseSalary || 0,
    },
  });

  console.log(data);

  useEffect(() => {
    form.reset({
      name: data?.data?.name || "",
      email: data?.data?.email || "",
      phone: data?.data?.phone || "",
      address: data?.data?.address || "",
      position:
        ((data?.data?.position === "HUMAN_RESOURCE"
          ? "HUMAN_RESOURCES"
          : data?.data?.position) as
          | "MANAGER"
          | "ACCOUNTANT"
          | "SALES"
          | "CUSTOMER_SERVICE"
          | "HUMAN_RESOURCES"
          | "DOCUMENTATION") || "SALES",
      dob: data?.data?.dob
        ? new Date(data?.data?.dob).toISOString().split("T")[0]
        : "",
      coefficientSalary: data?.data?.coefficientSalary || 0,
      baseSalary: data?.data?.baseSalary || 0,
    });
  }, [data, form]);

  async function onSubmit(values: UpdateEmployeeBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      await update.mutateAsync({ id, updateEmployeeDetails: values });
      toast({
        title: "Success",
        description: "Employee update successfully",
      });
      router.push("/employees");
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

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Loader />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Employee</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
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
                  <FormItem className="w-[60%]">
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
                  <FormItem className="w-[40%]">
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
                name="dob"
                render={({ field }) => (
                  <FormItem className="w-[33%]">
                    <FormLabel className="font-bold">Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={
                          data?.data?.dob
                            ? new Date(data?.data?.dob)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        type="date"
                        placeholder="Date of Birth"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="w-[66%]">
                    <FormLabel className="font-bold">Position</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        data?.data?.position === "HUMAN_RESOURCE"
                          ? "HUMAN_RESOURCES"
                          : data?.data?.position
                      }
                    >
                      <FormControl>
                        <SelectTrigger className="h-[60px]">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="MANAGER">Manager</SelectItem>
                        <SelectItem value="ACCOUNTANT">Accountant</SelectItem>
                        <SelectItem value="SALES">Sales</SelectItem>
                        <SelectItem value="CUSTOMER_SERVICE">
                          Customer Service
                        </SelectItem>
                        <SelectItem value="HUMAN_RESOURCES">
                          Human Resources
                        </SelectItem>
                        <SelectItem value="DOCUMENTATION">
                          Documentation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-2">
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
            </div>
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="baseSalary"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="font-bold">Salary</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Salary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coefficientSalary"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="font-bold">
                      Coefficient Salary
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Coefficient Salary"
                        {...field}
                      />
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
              {loading ? "Loading..." : "Update Employee"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
