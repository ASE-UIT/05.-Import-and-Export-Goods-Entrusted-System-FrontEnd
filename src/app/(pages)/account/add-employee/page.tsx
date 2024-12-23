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
  CreateEmployeeAccountBody,
  CreateEmployeeAccountBodyType,
} from "@/schema/user.schema";
import useUser from "@/hooks/use-user";
import { EmployeeResType } from "@/types/employee.type";

export default function AddEmployeePage() {
  const [loading, setLoading] = useState(false);
  const { data: user } = useUser.useGetListUser();
  const { data: employee } = useEmployee.useGetListEmployee();
  const create = useUser.useCreateEmployeeAccount();

  const [employeeNotUser, setEmployeeNotUser] = useState<EmployeeResType[]>([]);
  const [role, setRole] = useState<
    | "MANAGER"
    | "ACCOUNTANT"
    | "SALES"
    | "CUSTOMER_SERVICE"
    | "HUMAN_RESOURCES"
    | "HUMAN_RESOURCE"
    | "DOCUMENTATION"
    | "CLIENT"
  >("SALES");
  useEffect(() => {
    if (employee && user) {
      const employeeNotUser = employee?.data?.filter(
        (e) => !user?.data?.find((u) => u.employeeId === e.id)
      );
      setEmployeeNotUser(employeeNotUser || []);
    }
  }, [employee, user]);

  const router = useRouter();

  const form = useForm<CreateEmployeeAccountBodyType>({
    resolver: zodResolver(CreateEmployeeAccountBody),
    defaultValues: {
      username: "",
      password: "",
      role: "SALES",
      employeeId: "",
    },
  });

  useEffect(() => {
    form.setValue("role", role);
  }, [role, form]);

  async function onSubmit(values: CreateEmployeeAccountBodyType) {
    console.log(values);
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

  const handleEmployeeChange = (employeeId: string) => {
    const selectedEmployee = employeeNotUser.find(
      (emp) => emp.id === employeeId
    );

    if (selectedEmployee) {
      form.setValue("employeeId", employeeId);

      form.setValue(
        "role",
        selectedEmployee.position as
          | "MANAGER"
          | "ACCOUNTANT"
          | "SALES"
          | "CUSTOMER_SERVICE"
          | "HUMAN_RESOURCES"
          | "HUMAN_RESOURCE"
          | "DOCUMENTATION"
          | "CLIENT"
      );
      setRole(
        selectedEmployee.position as
          | "MANAGER"
          | "ACCOUNTANT"
          | "SALES"
          | "CUSTOMER_SERVICE"
          | "HUMAN_RESOURCES"
          | "HUMAN_RESOURCE"
          | "DOCUMENTATION"
          | "CLIENT"
      );
    }
  };

  return (
    <div className="flex flex-col items-center p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex w-full justify-between">
        <span className="text-3xl font-bold">Add Employee Account</span>
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
                name="employeeId"
                render={({}) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold">Employee</FormLabel>
                    <FormControl>
                      <Select onValueChange={handleEmployeeChange}>
                        <SelectTrigger className="h-[60px]">
                          <SelectValue placeholder="Select employee" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeNotUser.length === 0 ? (
                            <SelectItem disabled value="no-employee">
                              No employee available
                            </SelectItem>
                          ) : (
                            employeeNotUser.map((employee) => (
                              <SelectItem key={employee.id} value={employee.id}>
                                {employee.name}
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
                      <Input {...field} value={role} readOnly />
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
              {loading ? "Loading..." : "Add Employee Account"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
