import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button'; 
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'; // Adjust the import path as necessary


export default function updateprovider() {
  return (
    <div className="h-full w-full p-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">Update Provider</div>
      </div>
      <div className="self-stretch h-full flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-full py-8 flex-col justify-start items-center gap-[30px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            {/* Name */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Name:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter name" defaultValue="Khang Buoi" />
              </div>
            </div>

            {/* ContactRep*/}
            <div className="self-stretch h-[90px] justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">ContactRep:</div>
                <Select>
                  <SelectTrigger className="h-[60px] w-[500px]">
                    <SelectValue placeholder="Select contact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contact1">Contact 1</SelectItem>
                    <SelectItem value="contact2">Contact 2</SelectItem>
                    <SelectItem value="contact3">Contact 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Email */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Email:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter email" defaultValue="provider@gmail.com" />
              </div>
            </div>

            {/* Phone number */}
            <div className="h-[90px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Phone number:</div>
              <Input className="h-[60px] w-[500px]" placeholder="Enter phone number" defaultValue="0123456789" />
            </div>

            {/* Address */}
            <div className="self-stretch justify-center items-end gap-[100px] inline-flex">
              <div className="grow shrink basis-0 h-[97px] flex-col justify-between items-start inline-flex">
                <div className="text-black text-base font-bold leading-normal tracking-wide">Address:</div>
                <Input className="h-[60px] w-[500px]" placeholder="Enter address" defaultValue="123 Tran Duy Hung" />
              </div>
            </div>

            {/* Country */}
            <div className="h-[90px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch text-black text-base font-bold leading-normal tracking-wide">Country:</div>
              <Input className="h-[60px] w-[500px]" placeholder="Enter country" defaultValue="Viet Nam" />
            </div>
          </div>

          {/* Buttons */}
          <div className="w-[500px] justify-center items-start gap-2.5 inline-flex">
            {/* Cancel Button */}
            <Button className="px-8 rounded-[5px] border border-[#424242] text-[#060606] text-sm font-normal tracking-wide bg-white">
                <Link href={"/providermanagement/providermanagement"}>Cancel</Link>
            </Button>
            
            {/* Save Button */}
            <Button className="px-8 bg-[#108080] rounded-[5px] text-white text-sm font-normal tracking-wide">
                <Link href={"/providermanagement/providermanagement"}>Save</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}