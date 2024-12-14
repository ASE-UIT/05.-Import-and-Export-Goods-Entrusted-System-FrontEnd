import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useFreightStore } from "@/stores/useFreightStore";

const ActionCell = ({
  freightId,
  extraId,
}: {
  freightId: string;
  extraId: string;
}) => {
  const router = useRouter();
  const path = usePathname();
  const setId = useFreightStore((state) => state.setId);

  const handleUpdateClick = () => {
    setId(freightId);
    router.push(`${path}/update/${extraId}`);
  };

  return (
    <div className="flex justify-center">
      <span
        className="cursor-pointer text-blue-500"
        onClick={handleUpdateClick}
      >
        Update
      </span>
    </div>
  );
};

export default ActionCell;
