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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LoginBody, LoginBodyType } from "@/schema/auth.schema";
import { useState } from "react";
import useAuth from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { ErrorType } from "@/types/error.type";
import { toast } from "@/hooks/use-toast";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const loginAction = useAuth.useLogin();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      await loginAction.mutateAsync(values);
      toast({
        title: "Login success",
        description: "You have successfully logged in",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error({ error });
      switch ((error as ErrorType).statusCode) {
        case 401:
          form.setError("username", {
            message: "Invalid username or password",
          });
          form.setError("password", {
            message: "Invalid username or password",
          });
          break;
        default:
          toast({
            title: "Login failed",
            description: "An error occurred while logging in",
            variant: "destructive",
          });
          break;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full flex-shrink-0"
        noValidate
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px] font-bold">User Name</FormLabel>
              <FormControl>
                <Input
                  className="h-[60px]"
                  placeholder="Enter your username"
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
              <FormLabel className="text-[16px] font-bold">Password</FormLabel>
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

        <Button
          type="submit"
          className="!mt-8 w-full h-[60px] text-2xl"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
