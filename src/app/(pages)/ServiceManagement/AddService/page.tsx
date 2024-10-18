import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUp, Upload } from "lucide-react";

export default function AddService() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full justify-center items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">
          Service Information
        </div>
      </div>

      <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-full py-8 flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            {/* Service ID */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Service ID:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Service ID"
                  defaultValue="01"
                />
              </div>
            </div>
            {/* Service Name */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Service Name:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Service Name"
                  defaultValue="Customs procedures"
                />
              </div>
            </div>
            {/* Short Name */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Short Name:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Short Name"
                  defaultValue="CP"
                />
              </div>
            </div>
            {/* Fee */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                  Fee:
                </div>
                <Input
                  className="h-[60px] w-[500px]"
                  placeholder="Enter Fee"
                  defaultValue="1$"
                />
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
