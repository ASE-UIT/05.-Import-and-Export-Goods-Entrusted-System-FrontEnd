import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUp, Upload } from "lucide-react";
export default function AddCompulsorySE() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full justify-center items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold">
          Optional Document Sea Export
        </div>
      </div>
      <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-full py-8 flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            {/* Document Type */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Document Type:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Document Type"
                  defaultValue="Contract Invoice"
                />
              </div>
            </div>

            {/* Document Number */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Document Type:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Document Number"
                  defaultValue="01"
                />
              </div>
            </div>

            {/* Add Image */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Image:
                </div>
                <div className="relative w-[500px]">
                  <div className="flex items-center justify-center h-[60px] w-full pl-12 pr-4 border border-neutral-300 rounded-lg">
                    <input
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute inset-0 cursor-pointer" // Hide input and make clickable
                    />
                    <span className="text-gray-500 text-sm">
                      Choose an image
                    </span>
                  </div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Upload />
                  </div>
                </div>
              </div>
            </div>

            {/* Created at */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Created at:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter created at"
                  defaultValue="12/05/2024 - 12h30p28s"
                />
              </div>
            </div>

            {/* Updated at */}
            <div className="h-[90px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                Updated at:
              </div>
              <Input
                className="h-[60px] w-[500px]"
                placeholder="Enter updated at"
                defaultValue="20/05/2024 - 12h30p28s"
              />
            </div>
            {/* Add File */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  File:
                </div>
                <div className="relative w-[500px]">
                  <div className="flex items-center justify-center h-[60px] w-full pl-12 pr-4 border border-neutral-300 rounded-lg">
                    <input
                      type="file"
                      className="opacity-0 absolute inset-0 cursor-pointer" // Hide input but keep it clickable
                    />
                    <span className="text-gray-500 text-sm">Choose a file</span>
                  </div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <FileUp />
                  </div>
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
