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

export default function AddShipment() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full justify-center items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">
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
                  <Input
                    className="h-[60px] w-full pl-4 pr-[140px]" // Adds padding-right to make space for the dropdown
                    placeholder="Choose Document Type"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="absolute right-0 top-0 h-[60px] w-[140px] bg-[#ece9e9] rounded-tr-[5px] rounded-br-[5px] border-l border-neutral-300 flex items-center justify-center cursor-pointer">
                        <div className="opacity-50 text-[#202224] text-sm font-normal font-['Nunito Sans']">
                          Type
                        </div>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2">
                      <DropdownMenuItem>Air Freight</DropdownMenuItem>
                      <DropdownMenuItem>Sea Freight</DropdownMenuItem>
                      <DropdownMenuItem>Land Freight</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
