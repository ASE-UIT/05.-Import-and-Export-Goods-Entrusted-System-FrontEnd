import { ClipboardCheck, ClipboardPenLine, Search, Users } from "lucide-react";

interface InfoCardProps {
  value: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

function InfoCard({ value, title, icon, color }: InfoCardProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex justify-between items-center p-7 min-w-[280px] rounded-lg shadow-lg gap-8"
    >
      <div className="text-white">
        <span className="text-3xl font-medium leading-10">{value}</span>
        <span className="block leading-6 font-medium">{title}</span>
      </div>
      <div className="text-white">{icon}</div>
    </div>
  );
}

export default function GroupCard() {
  return (
    <div className="flex justify-between w-full">
      <InfoCard
        value="200"
        title="Customers"
        icon={<Users className="w-16 h-16 shrink-0" />}
        color="#E85C5C"
      />
      <InfoCard
        value="112"
        title="Active shipments"
        icon={<ClipboardCheck className="w-16 h-16 shrink-0 " />}
        color="#108080"
      />
      <InfoCard
        value="113"
        title="Quote"
        icon={<ClipboardPenLine className="w-16 h-16 shrink-0 " />}
        color="#F70"
      />
      <InfoCard
        value="114"
        title="Freight"
        icon={<Search className="w-16 h-16 shrink-0 " />}
        color="#4F93EB"
      />
    </div>
  );
}
