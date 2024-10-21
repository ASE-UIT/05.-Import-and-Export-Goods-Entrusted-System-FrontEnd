"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

interface FormData {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export default function Page() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FCFCFC]">
      <Image
        className="p-[10px] absolute inset-0 object-cover z-0"
        fill={true}
        width={0}
        height={0}
        quality={100}
        src="/images/forgot-password-bg.svg"
        alt="Page Background"
      ></Image>
      <div className="z-10 box-border flex flex-col px-[60px] py-[40px] gap-[1rem] w-[657px] items-center rounded-[10px] bg-[#ffffffcc] ">
        {step === 1 && <Form_Step_1 formData={formData} nextStep={nextStep} />}
        {step === 2 && <Form_Step_2 formData={formData} nextStep={nextStep} />}
        {step === 3 && <Form_Step_3 formData={formData} nextStep={nextStep} />}
        {step === 4 && <Form_Step_4_Fail />}
      </div>
    </div>
  );
}

interface FormStepProps {
  formData: FormData;
  nextStep: () => void;
}

const Form_Step_1: React.FC<FormStepProps> = ({ formData, nextStep }) => {
  return (
    <>
      <Image
        src={"/images/logo.png"}
        width={207}
        height={170.506}
        quality={100}
        alt="Main Icon"
      ></Image>
      <div className="flex flex-col gap-[1rem]">
        <h1 className=" text-[#153060] text-[45px] font-[400] leading-[52px] self-stretch">
          Forgot password
        </h1>
        <h2 className="text-[#828282] text-base font-[400] leading-6 tracking-[0.00938rem]">
          Enter your email for the verification proccess,we will send 4 digits
          code to your email.
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[1.3rem] self-stretch">
        <div className="flex w-[33.5rem] flex-col gap-[0.75rem] items-start">
          <h3 className="font-[500] tracking-[0.03rem] text-[#181818] flex flex-col h-[1.8125rem] justify-end self-stretch">
            Email
          </h3>
          <Input type="email" placeholder="Enter your email"></Input>
        </div>
        <Button className="h-[3.75rem] self-stretch" onClick={nextStep}>
          <span className="text-[#fff] text-[1.25rem] font-[600] tracking-[0.0375rem]">
            Continue
          </span>
        </Button>
      </div>
    </>
  );
};

const Form_Step_2: React.FC<FormStepProps> = ({ formData, nextStep }) => {
  const [values, setValues] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (/^\d?$/.test(value)) {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value && index < 3) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };

  return (
    <>
      <Image
        src={"/images/logo.png"}
        width={207}
        height={170.506}
        quality={100}
        alt="Main Icon"
      ></Image>
      <h1 className=" text-[#153060] text-[45px] font-[400] leading-[52px] self-stretch">
        Verification
      </h1>
      <h2 className="text-[#828282] text-base font-[400] leading-6 tracking-[0.00938rem]">
        Enter your 4 digits code that you received on your email.
      </h2>
      <div className="flex flex-col items-start gap-[1.3rem] self-stretch">
        <div className="flex w-[33.5rem] gap-[1.5rem] justify-center">
          {values.map((value, index) => (
            <Input
              key={index}
              type="text"
              value={value}
              onChange={handleChange(index)}
              maxLength={1}
              className="w-[5.25rem] py-4 px-3 flex justify-center items-center text-center text-[2.25rem] font-[400] leading-[2.75rem] tracking-[0.05625rem]"
              inputMode="numeric"
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        <h3 className="w-full font-[400] leading-6 text-[#F2451C] text-center">
          00:30
        </h3>

        <Button className="h-[3.75rem] self-stretch" onClick={nextStep}>
          <span className="text-[#fff] text-[1.25rem] font-[600] tracking-[0.0375rem]">
            Verify
          </span>
        </Button>
      </div>
      <h3 className="text-[#828282] text-center text-[0.875rem] font-[400] leading-5">
        If you didn’t receive a code!{" "}
        <a href="" className="text-[#F2451C]">
          Resend
        </a>
      </h3>
    </>
  );
};

const Form_Step_3: React.FC<FormStepProps> = ({ formData, nextStep }) => {
  return (
    <>
      <Image
        src={"/images/logo.png"}
        width={207}
        height={170.506}
        quality={100}
        alt="Main Icon"
      ></Image>
      <div className="flex flex-col gap-[0.1rem]">
        <h1 className=" text-[#153060] text-[45px] font-[400] leading-[52px] self-stretch">
          New Password
        </h1>
        <h2 className="text-[#828282] text-base font-[400] leading-6 tracking-[0.00938rem]">
          Set the new password for your account so you can login and access all
          featuress.
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[1rem] self-stretch">
        <div className="flex flex-col items-start gap-[0.75rem] self-stretch">
          <div className="flex w-[33.5rem] flex-col gap-[0.5rem] items-start">
            <h3 className="font-[500] tracking-[0.03rem] text-[#181818] flex flex-col h-[1.8125rem] justify-end self-stretch">
              Enter new password
            </h3>
            <Input type="password" placeholder="8 symbols at least"></Input>
          </div>
          <div className="flex w-[33.5rem] flex-col gap-[0.5rem] items-start">
            <h3 className="font-[500] tracking-[0.03rem] text-[#181818] flex flex-col h-[1.8125rem] justify-end self-stretch">
              Confirm password
            </h3>
            <Input type="password" placeholder="8 symbols at least"></Input>
          </div>
        </div>
        <Button className="h-[3.75rem] self-stretch" onClick={nextStep}>
          <span className="text-[#fff] text-[1.25rem] font-[600] tracking-[0.0375rem]">
            Update Password
          </span>
        </Button>
      </div>
    </>
  );
};

function Form_Step_4_Success() {
  return (
    <>
      <Image
        src={"/images/upload.svg"}
        width={0}
        height={0}
        className="w-[10.25rem] h-[10.25rem] z-10"
        quality={100}
        alt="Main Icon"
      ></Image>
      <h1 className=" text-[#153060] text-[45px] font-[400] text-center leading-[52px] self-stretch">
        Successfully
      </h1>
      <h2 className="text-[#828282] text-base font-[400] leading-6 tracking-[0.00938rem]">
        Your password has been reset successfully
      </h2>
      <div className="flex flex-col items-start gap-[1.3rem] self-stretch">
        <Button className="h-[3.75rem] self-stretch">
          <span className="text-[#fff] text-[1.25rem] font-[600] tracking-[0.0375rem]">
            Back To Home Page
          </span>
        </Button>
      </div>
    </>
  );
}

function Form_Step_4_Fail() {
  return (
    <>
      <Image
        src={"/images/Fail.svg"}
        width={0}
        height={0}
        className="w-[10.25rem] h-[10.25rem] z-10"
        quality={100}
        alt="Main Icon"
      ></Image>
      <h1 className=" text-[#153060] text-[45px] font-[400] text-center leading-[52px] self-stretch">
        Something went wrong
      </h1>
      <h2 className="text-[#828282] text-base font-[400] leading-6 tracking-[0.00938rem]">
        Your password reset was unsuccessful. Please try again or contact
        support.{" "}
      </h2>
      <div className="flex flex-col items-start gap-[1.3rem] self-stretch">
        <Button className="h-[3.75rem] self-stretch">
          <span className="text-[#fff] text-[1.25rem] font-[600] tracking-[0.0375rem]">
            Back To Home Page
          </span>
        </Button>
      </div>
    </>
  );
}
