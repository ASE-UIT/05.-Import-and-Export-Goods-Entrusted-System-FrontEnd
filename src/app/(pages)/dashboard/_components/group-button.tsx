import {
  ClipboardPenLine,
  SquareUserRound,
  UserCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function GroupButton() {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/quotation/add">
        <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
          <div className="flex gap-3 items-center text-2xl dark:text-black">
            <ClipboardPenLine />
            New Quote
          </div>
        </button>
      </Link>
      <Link href="/employees/add">
        <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
          <div className="flex gap-3 items-center text-2xl dark:text-black">
            <UserCog />
            Add Employee
          </div>
        </button>
      </Link>
      <Link href="/customers/add">
        <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
          <div className="flex gap-3 items-center text-2xl dark:text-black">
            <Users />
            Add Customer
          </div>
        </button>
      </Link>
      <Link href="/provider/add">
        <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
          <div className="flex gap-3 items-center text-2xl dark:text-black">
            <SquareUserRound />
            Add Provider
          </div>
        </button>
      </Link>
    </div>
  );
}
