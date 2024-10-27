"use client";

import {
  ClipboardCheck,
  ClipboardMinus,
  ClipboardPenLine,
  LayoutDashboard,
  ListTodo,
  Receipt,
  Search,
  Settings,
  UserCheck,
  UserCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  path: string;
}

function MenuItem({ icon, title, path }: MenuItemProps) {
  const currentPath = usePathname();
  const isActive = currentPath.includes(path);

  if (isActive) {
    return (
      <Link href={path}>
        <div className="flex items-center p-[10px] space-x-[10px] text-white text-[14px] w-[200px] bg-primary rounded-[5px]">
          <span>{icon}</span>
          <span className="leading-6">{title}</span>
        </div>
      </Link>
    );
  }
  return (
    <Link href={path}>
      <div className="flex items-center p-[10px] space-x-[10px] text-white text-[14px] w-[200px] hover:bg-foreground/20 hover:rounded-md ">
        <span>{icon}</span>
        <span className="leading-6">{title}</span>
      </div>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="w-60 h-[900px] bg-secondary fixed">
      <div className="p-5 gap-y-3 border-b border-[#FCFCFC]/[40]">
        <MenuItem
          icon={<LayoutDashboard />}
          title="Dashboard"
          path="/dashboard"
        />
        <MenuItem icon={<ListTodo />} title="Tasks" path="/tasks" />
        <MenuItem icon={<Search />} title="Rates" path="/rates" />
        <MenuItem icon={<Receipt />} title="Quotes" path="/quotes" />
        <MenuItem
          icon={<ClipboardCheck />}
          title="Shipments"
          path="/shipment"
        />
      </div>
      <div className="p-5 gap-y-3 border-b border-[#FCFCFC]/[40]">
        <MenuItem icon={<UserCog />} title="Employees" path="/employees" />
        <MenuItem icon={<Users />} title="Customers" path="/customers" />
        <MenuItem icon={<UserCheck />} title="Providers" path="/provider" />
      </div>
      <div className="p-5 gap-y-3 border-b border-[#FCFCFC]/[40]">
        <MenuItem
          icon={<ClipboardPenLine />}
          title="Accounting"
          path="/accounting"
        />
        <MenuItem icon={<ClipboardMinus />} title="Report" path="/report" />
      </div>
      <div className="p-5 gap-y-3 ">
        <MenuItem icon={<Settings />} title="Settings" path="/settings" />
      </div>
    </div>
  );
}
