import SettingForm from "@/app/(pages)/settings/setting-form";
import React from "react";

export default function SettingPage() {
  return (
    <div className="p-7 w-full">
      <h2 className="text-2xl font-bold text-left">User Settings</h2>
      <div className="w-full">
        <SettingForm />
      </div>
    </div>
  );
}
