"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import { UpdatePasswordBodyType } from "@/schema/user.schema";
import useUser from "@/hooks/use-user";
import { toast } from "@/hooks/use-toast";
import { ErrorType } from "@/types/error.type";

const formSchema = z
  .object({
    oldPassword: z.string().min(8),
    newPassword: z
      .string()
      .min(6, "Password must have at least 6 characters.")
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter.")
      .regex(/[a-z]/, "Password must contain at least 1 lower case letter.")
      .regex(/[0-9]/, "Password must contain at least 1 number.")
      .regex(
        /[#?!@$%^&*-]/,
        "Password must contain at least 1 special character."
      ),
    confirmPassword: z
      .string()
      .min(6, "Password must have at least 6 characters.")
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter.")
      .regex(/[a-z]/, "Password must contain at least 1 lower case letter.")
      .regex(/[0-9]/, "Password must contain at least 1 number.")
      .regex(
        /[#?!@$%^&*-]/,
        "Password must contain at least 1 special character."
      ),
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
type formSchemaType = z.infer<typeof formSchema>;

export default function ChangePasswordForm({
  userId,
  onSuccess,
}: {
  userId: string;
  onSuccess: () => void;
}) {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const updatePassword = useUser.useUpdatePassword();
  const [loading, setLoading] = useState(false);

  async function changePassword(
    id: string,
    updatePasswordDetails: UpdatePasswordBodyType
  ) {
    if (loading) return;
    setLoading(true);
    try {
      await updatePassword.mutateAsync({ id, updatePasswordDetails });
      toast({
        title: "Success",
        description: "Password changed successfully",
      });
      onSuccess();
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

  const onSubmit = form.handleSubmit((values) => {
    const changePasswordData: UpdatePasswordBodyType = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    changePassword(userId, changePasswordData);
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

        <Button
          type="submit"
          className="!mt-8 w-full h-[60px] text-xl"
          disabled={loading}
        >
          {loading ? "Loading..." : "Change Password"}
        </Button>
      </form>
    </Form>
  );
}
