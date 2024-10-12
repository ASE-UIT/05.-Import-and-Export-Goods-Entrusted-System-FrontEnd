import LoginForm from "@/app/(auth)/login/login-form";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center p-6">
        <div className="pl-14 pr-14 space-y-8 mt-12">
          <Image
            className="absolute top-[-30px] left-[100px] z-1"
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={200}
            quality={100}
          />
          <div className="space-y-3 text-center">
            <h1 className=" text-6xl text-primary font-bold">Sign in</h1>
            <p className="opacity-60 text-2xl ">
              Please fill your email and password to sign in.
            </p>
          </div>
          <LoginForm />
        </div>
        <div className="p-5">
          <Image
            className="mt-12"
            src="/images/login_image.png"
            alt="logo"
            width={600}
            height={600}
            quality={100}
          />
        </div>
      </div>
    </>
  );
}
