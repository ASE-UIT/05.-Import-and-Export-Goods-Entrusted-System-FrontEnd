import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button'; 
import { DatePickerDemo } from '@/components/date-picker';
export default function addinvoice() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full justify-center items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">Invoice</div>
      </div>
      <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-full py-8 flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            {/* Invoice ID */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Invoice ID:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter invoice ID" defaultValue="01" />
              </div>
            </div>

            {/* Contract ID */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Contract ID:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter contract ID" defaultValue="01" />
              </div>
            </div>

            {/* Employee ID */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Employee ID:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter employee ID" defaultValue="01" />
              </div>
            </div>

          <div className="flex gap-5 w-full">
            {/* Invoice Date */}
          <div className="self-stretch h-[90px] justify-center items-end inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                Invoice Date:
              </div>
              <div className="relative">
                <DatePickerDemo/> 
              </div>
            </div>
          </div>

            {/* Paid Date */}
          <div className="self-stretch h-[90px] justify-center items-end inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
                Paid Date:
              </div>
              <div className="relative">
                <DatePickerDemo /> 
              </div>
            </div>
          </div>
          </div>


            {/* Tax */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Tax:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter tax" defaultValue="0123456789" />
              </div>
            </div>

            {/* Total Amount */}
            <div className="h-[90px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Total Amount:</div>
              <Input className="h-[60px] w-[500px]" placeholder="Enter total amount" defaultValue="123456789" />
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
