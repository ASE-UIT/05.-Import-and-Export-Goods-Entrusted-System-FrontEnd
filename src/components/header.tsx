"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, MessageSquareMore } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full pr-4 pl-4 flex items-center justify-between border-b border-primary/50 fixed bg-inherit top-0 z-10">
      <div className="flex gap-4 items-center">
        <Image
          src="/images/entrustexim_logo.png"
          alt="logo"
          width={63}
          height={36}
          quality={100}
        />
        <div className="font-bold text-[24px] text-primary">
          Entrust<span className="text-accent">Exim</span>
        </div>
      </div>
      <div className="flex justify-center gap-16 items-center">
        <div className="flex justify-center gap-4 items-center">
          <Button
            className="hover:bg-foreground/10 hover:text-current dark:hover:bg-foreground/30"
            variant={"ghost"}
            size={"icon"}
          >
            <MessageSquareMore />
          </Button>
          <Button
            className="hover:bg-foreground/10 hover:text-current dark:hover:bg-foreground/30"
            variant={"ghost"}
            size={"icon"}
          >
            <Bell />
          </Button>
          <ModeToggle />
        </div>
        <div className="flex justify-center gap-3 items-center">
          <div className="text-right">
            <div className="text-[14px]">Khang Buoi</div>
            <div className="text-xs opacity-50">Admin</div>
          </div>
          <Avatar>
            <AvatarImage src="https://placehold.co/400" alt="KhangBuoi" />
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
