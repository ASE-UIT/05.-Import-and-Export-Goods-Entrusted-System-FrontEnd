import {
  ClipboardPenLine,
  SquareUserRound,
  UserCog,
  Users,
} from "lucide-react";
import React from "react";

export default function GroupButton() {
  return (
    <div className="flex flex-col space-y-2">
      <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
        <div className="flex gap-3 items-center text-2xl dark:text-black">
          <ClipboardPenLine />
          New Quote
        </div>
      </button>
      <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
        <div className="flex gap-3 items-center text-2xl dark:text-black">
          <UserCog />
          Add Employee
        </div>
      </button>
      <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
        <div className="flex gap-3 items-center text-2xl dark:text-black">
          <Users />
          Add Client
        </div>
      </button>
      <button className="p-5 w-[280px] bg-[#DDD7D7] rounded-lg hover:bg-[#9f9b9b] hover:text-white">
        <div className="flex gap-3 items-center text-2xl dark:text-black">
          <SquareUserRound />
          Add Vendor
        </div>
      </button>
    </div>
  );
}
