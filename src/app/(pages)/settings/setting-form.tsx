"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChangePasswordForm from "@/app/(pages)/settings/_components/change-password-form";
import useAuth from "@/hooks/use-auth";
import Loader from "@/components/loader";
import useCustomer from "@/hooks/use-customer";
import { Customer, Employee } from "@/types/user.type";

const UserSettingBody = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  phone: z.string(),
  dateOfBirth: z.string().nullable(),
  taxId: z.string().nullable(),
  avatar: z.string(),
});

type UserSettingBodyType = z.infer<typeof UserSettingBody>;

export default function SettingForm() {
  const { data: user, isLoading } = useAuth.useGetSession();
  const { useDetailsCustomer } = useCustomer();
  const { data: customer } = useDetailsCustomer(user?.customerId ?? "");
  const [currentUser, setCurrentUser] = useState<Employee | Customer>();
  useEffect(() => {
    if (user && user.customerId) {
      setCurrentUser(customer);
    } else {
      setCurrentUser(user?.employee);
    }
  }, [user, customer]);
  const [date, setDate] = useState<Date>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<UserSettingBodyType>({
    resolver: zodResolver(UserSettingBody),
    defaultValues: {
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
      address: currentUser?.address ?? "",
      phone: currentUser?.phone ?? "",
      dateOfBirth: currentUser && "dob" in currentUser ? currentUser.dob : "",
      taxId: currentUser && "taxId" in currentUser ? currentUser.taxId : "",
      avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${currentUser?.name}`,
    },
  });

  useEffect(() => {
    form.reset({
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
      address: currentUser?.address ?? "",
      phone: currentUser?.phone ?? "",
      dateOfBirth: currentUser && "dob" in currentUser ? currentUser.dob : "",
      taxId: currentUser && "taxId" in currentUser ? currentUser.taxId : "",
      avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${currentUser?.name}`,
    });
    setDate(user?.employee.dob ? new Date(user.employee.dob) : new Date());
  }, [form, user, currentUser]);

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Loader />
      </div>
    );

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="relative">
          <Avatar className="size-[150px]">
            <AvatarImage
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${currentUser?.name}`}
              alt="avatar"
            />
            <AvatarFallback>{currentUser?.name}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-4 pl-80 pr-80">
        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 w-full flex-shrink-0"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      placeholder="Enter your name"
                      {...field}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      placeholder="Enter your address"
                      {...field}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <div className="w-full mr-8">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[16px] font-bold">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[60px]"
                          placeholder="Enter your phone"
                          {...field}
                          readOnly
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {currentUser && "dob" in currentUser && (
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={() => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-[16px] font-bold">
                          Date Of Birth
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[60px]"
                            placeholder="Enter your date of birth"
                            value={date ? format(date, "MM/dd/yyyy") : ""}
                            readOnly
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentUser && "taxId" in currentUser && (
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="taxId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[16px] font-bold">
                          Tax ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[60px]"
                            placeholder="Enter your tax id"
                            {...field}
                            value={field.value ?? ""}
                            readOnly
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <div className="space-y-2">
                <Label className="text-[16px] font-bold">Password</Label>
                <p>Password must be at least 8 characters long</p>
              </div>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="mt-4" variant={"outline"} size={"lg"}>
                    Change
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Change Password
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      Password must be at least 8 characters long
                    </DialogDescription>
                  </DialogHeader>
                  <ChangePasswordForm
                    userId={user?.id ?? ""}
                    onSuccess={() => {
                      setIsDialogOpen(false);
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>

            <div className=" justify-end gap-3 !mt-8 hidden">
              <Button className="" variant={"outline"} size={"lg"}>
                Cancel
              </Button>
              <Button className="" type="submit" size={"lg"}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
