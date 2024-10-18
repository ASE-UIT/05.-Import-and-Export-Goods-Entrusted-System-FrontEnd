import React from 'react';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button'; 
import Link from 'next/link';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'; // Adjust the import path as necessary
import { DatePickerDemo } from '@/components/date-picker';


export default function Page() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">Add Quotation</div>
      </div>
      <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-full py-8 flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            {/* Quotation Request ID*/}
            <div className="self-stretch h-[90px] justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Quotation Request ID:</div>
                <Select>
                  <SelectTrigger className="h-[60px] w-[500px]">
                    <SelectValue placeholder="Select quotation ID" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ID1">ID 1</SelectItem>
                    <SelectItem value="ID2">ID 2</SelectItem>
                    <SelectItem value="ID3">ID 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Employee ID */}
            <div className="self-stretch h-[90px] justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Employee ID:</div>
                <Select>
                  <SelectTrigger className="h-[60px] w-[500px]">
                    <SelectValue placeholder="Select employee ID" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ID1">ID 1</SelectItem>
                    <SelectItem value="ID2">ID 2</SelectItem>
                    <SelectItem value="ID3">ID 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Pickup Date và Delivery Date */}
            <div className="h-[90px] w-[500px] justify-between items-end gap-[20px] flex">
            {/* Pickup Date */}
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
            Pickup Date:
             </div>
            <div className="relative">
            <DatePickerDemo /> {/* Sử dụng DatePicker */}
            </div>
            </div>

            {/* Delivery Date */}
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
            Delivery Date:
            </div>
            <div className="relative">
            <DatePickerDemo /> {/* Sử dụng DatePicker */}
            </div>
            </div>
            </div>

            
            {/* Quotation Date và Expired Date */}
            <div className="h-[90px] w-[500px] justify-between items-end gap-[20px] flex">
            {/* Quotation Date */}
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
            Quotation Date:
             </div>
            <div className="relative">
            <DatePickerDemo /> {/* Sử dụng DatePicker */}
            </div>
            </div>

            {/* Expired Date */}
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">
            Expired Date:
            </div>
            <div className="relative">
            <DatePickerDemo /> {/* Sử dụng DatePicker */}
            </div>
            </div>
            </div>

            {/* Status */}
            <div className="self-stretch h-[90px] justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Status:</div>
                <Select>
                  <SelectTrigger className="h-[60px] w-[500px]">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="status1">Draft</SelectItem>
                    <SelectItem value="status2">Booked</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Total price */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Total Price:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter name" defaultValue="75,000" />
              </div>
            </div>
            </div>

            
            
          {/* Buttons */}
          <div className="w-[500px] justify-center items-start gap-2.5 inline-flex">
            {/* Cancel Button */}
            <Button className="px-8 rounded-[5px] border border-[#424242] text-[#060606] text-sm font-normal tracking-wide bg-white">
              <Link href={"/quotation/quotationmanagement"}>Cancel</Link>
            </Button>
            
            {/* Save Button */}
            <Button className="px-8 rounded-[5px] border border-[#424242] text-[#060606] text-sm font-normal tracking-wide bg-white">
              <Link href={"/quotation/quotationmanagement"}>Save</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}