"use client";
import { ModeToggle } from "@/components/mode-toggle";
import * as React from "react";
import { DatePickerDemo } from "@/components/date-picker";

export default function Home() {
  return (
    <div>
      <div className="p-4 flex space-x-10">
        <h1 className="text-4xl">EntrustExim</h1>

        <div className="z-10">
          <ModeToggle />
        </div>
      </div>
      <DatePickerDemo />
    </div>
  );
}
