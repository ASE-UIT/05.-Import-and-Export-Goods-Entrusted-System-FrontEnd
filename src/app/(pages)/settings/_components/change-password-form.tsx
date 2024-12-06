"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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

const ChangePasswordBody = z.object({
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
});
type ChangePasswordBodyType = z.infer<typeof ChangePasswordBody>;

export default function ChangePasswordForm() {
  const form = useForm<ChangePasswordBodyType>({
    resolver: zodResolver(ChangePasswordBody),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });
  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="space-y-4 w-full flex-shrink-0"
        noValidate
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Old Password</FormLabel>
              <FormControl>
                <Input
                  className="h-[60px]"
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">New Password</FormLabel>
              <FormControl>
                <Input
                  className="h-[60px]"
                  placeholder="Enter your new password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  className="h-[60px]"
                  placeholder="Confirm your new password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="!mt-8 w-full h-[60px] text-xl">
          Change Password
        </Button>
      </form>
    </Form>
  );
}
