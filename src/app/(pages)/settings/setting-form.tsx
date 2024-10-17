import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SettingForm() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <Avatar className="size-[150px]">
          <AvatarImage src="https://placehold.co/400" alt="KhangBuoi" />
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
        <div>
          <Button variant={"outline"} className="">
            Change Avatar
          </Button>
        </div>
      </div>
    </>
  );
}
