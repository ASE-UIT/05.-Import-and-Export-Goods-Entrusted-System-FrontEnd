import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePickerDemo } from "@/components/date-picker";
import { FileUp, Upload } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function Add() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full justify-center items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold ">
          Shipment Information
        </div>
      </div>

      <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-full py-8 flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            {/* Shipment ID */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Shipment ID:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Shipment ID"
                  defaultValue="01"
                />
              </div>
            </div>

            {/* Contract ID */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Contract ID:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Contract ID"
                  defaultValue="01"
                />
              </div>
            </div>

            {/* Shipment Type */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Document Type:
                </div>
                <div className="relative w-[500px]">
                  <select
                    className="h-[60px] w-full pl-4 pr-[140px] bg-white border border-neutral-300 rounded-lg text-sm font-normal text-[#202224]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose Document Type
                    </option>
                    <option value="air-freight">Air Freight</option>
                    <option value="sea-freight">Sea Freight</option>
                    <option value="land-freight">Land Freight</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-[500px] justify-center items-start gap-2.5 inline-flex">
            {/* Cancel Button */}
            <Button className="px-8 rounded-[5px] border border-[#424242] text-[#060606] text-sm font-normal tracking-wide bg-white">
              <Link href={"/invoiceandpayment/invoiceandpayment"}>Cancel</Link>
            </Button>

            {/* Save Button */}
            <Button className="px-8 bg-[#108080] rounded-[5px] text-white text-sm font-normal tracking-wide">
              <Link href={"/invoiceandpayment/invoiceandpayment"}>Save</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
