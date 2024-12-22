"use client";

import { useShipment } from "@/hooks/use-shipment";
import { DataTable } from "@/app/(pages)/shipment/components/data-table";
import { columns } from "./components/columns";
export default function ShipmentManagement() {
  const { useGetAllShipment } = useShipment();
  const data = useGetAllShipment();
  let res = data.data ? data.data : [];
  // let formatData = [];
  console.log(data);

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Shipment Management</span>
        </div>
        <DataTable columns={columns} data={res} />
      </div>
    </div>
  );
}
