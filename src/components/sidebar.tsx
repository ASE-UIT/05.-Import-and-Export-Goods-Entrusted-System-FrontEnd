"use client";

import useAuth from "@/hooks/use-auth";
import {
  CircleUser,
  ClipboardCheck,
  ClipboardMinus,
  ClipboardPenLine,
  FileInput,
  FileText,
  LayoutDashboard,
  Receipt,
  Settings,
  Truck,
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

interface SectionProps {
  children: React.ReactNode;
  title?: string;
}

function MenuItem({ icon, title, path }: MenuItemProps) {
  const currentPath = usePathname();
  const isActive = currentPath.includes(path);

  return (
    <Link href={path}>
      <div
        className={`
          flex items-center px-4 py-2.5 mx-2 space-x-3 text-sm rounded-lg
          transition-all duration-200 ease-in-out
          ${
            isActive
              ? "bg-primary text-white shadow-sm"
              : "text-white/90 hover:bg-white/10"
          }
        `}
      >
        <span className="w-5 h-5">{icon}</span>
        <span className="font-medium">{title}</span>
      </div>
    </Link>
  );
}

function Section({ children, title }: SectionProps) {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  return (
    <div className="py-1.5">
      {title && (
        <h3 className="px-6 mb-1.5 text-xs font-semibold text-white/60 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

export default function Sidebar() {
  const { data: user } = useAuth.useGetSession();
  const isClient = user?.role.name === "CLIENT";

  const renderOperationsItems = () => {
    if (isClient) {
      return (
        <>
          <MenuItem
            icon={<FileInput />}
            title="Quote Request"
            path="/quote-request"
          />
          <MenuItem icon={<FileText />} title="Documents" path="/document" />
        </>
      );
    }

    return (
      <>
        <MenuItem
          icon={<FileInput />}
          title="Quote Request"
          path="/quote-request"
        />
        <MenuItem icon={<Receipt />} title="Quotations" path="/quotations" />
        <MenuItem
          icon={<ClipboardCheck />}
          title="Shipments"
          path="/shipment"
        />
        <MenuItem icon={<Truck />} title="Freight" path="/freight" />
        <MenuItem icon={<FileText />} title="Documents" path="/document" />
      </>
    );
  };

  return (
    <div className="w-[--sidebar-width] min-h-screen bg-secondary fixed left-0 top-0">
      <div className="flex flex-col h-full">
        {/* Logo or Brand Section */}
        <div className="p-4">
          <h1 className="text-lg font-bold text-white">Dashboard</h1>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1">
          {!isClient && (
            <Section title="Main">
              <MenuItem
                icon={<LayoutDashboard />}
                title="Dashboard"
                path="/dashboard"
              />
            </Section>
          )}

          <Section title="Operations">{renderOperationsItems()}</Section>

          {!isClient && (
            <>
              <Section title="Stakeholders">
                <MenuItem
                  icon={<Users />}
                  title="Customers"
                  path="/customers"
                />
                <MenuItem
                  icon={<UserCheck />}
                  title="Providers"
                  path="/provider"
                />
                <MenuItem
                  icon={<UserCog />}
                  title="Employees"
                  path="/employees"
                />
                <MenuItem
                  icon={<CircleUser />}
                  title="Account"
                  path="/account"
                />
              </Section>

              <Section title="Finance">
                <MenuItem
                  icon={<ClipboardPenLine />}
                  title="Invoices"
                  path="/invoices"
                />
                <MenuItem
                  icon={<ClipboardMinus />}
                  title="Payments"
                  path="/payments"
                />
              </Section>
            </>
          )}
        </nav>

        {/* Settings Section at Bottom */}
        <div className="p-3 border-t border-white/10">
          <MenuItem icon={<Settings />} title="Settings" path="/settings" />
        </div>
      </div>
    </div>
  );
}
