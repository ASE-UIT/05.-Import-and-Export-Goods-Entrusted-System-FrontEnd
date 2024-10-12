"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginBodyType = z.infer<typeof LoginBody>;

const LoginForm = () => {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full flex-shrink-0"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Email</FormLabel>
              <FormControl>
                <Input
                  className="h-[60px]"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">Password</FormLabel>
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

        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center space-x-4">
            <Checkbox className="w-5 h-5 text-2xl" />
            <Label className="opacity-60 text-xl font-normal">
              Remember me
            </Label>
          </div>
          <Link href="#" className="opacity-60 text-xl font-normal">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="!mt-8 w-full h-[60px] text-2xl">
          Sign in
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
