"use client";
import SettingForm from "@/app/(pages)/settings/setting-form";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SettingPage() {
  const router = useRouter();
  return (
    <div className="p-7 w-full">
      <div className="flex items-center gap-4">
        <Button onClick={() => router.back()} className="" variant={"outline"}>
          <ArrowLeft />
        </Button>
        <h2 className="text-2xl font-bold text-left">User Settings</h2>
      </div>
      <div className="w-full">
        <SettingForm />
      </div>
    </div>
  );
}
