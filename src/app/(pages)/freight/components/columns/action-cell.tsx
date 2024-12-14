import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useFreightStore } from "@/stores/useFreightStore";
import { Button } from "@/components/ui/button";

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
      <Button
        id="update-freight"
        onClick={handleUpdateClick}
        variant="default"
        className="hidden"
      ></Button>
      <span
        className="cursor-pointer text-blue-500 underline"
        onClick={() => {
          document.getElementById("update-freight")?.click();
        }}
      >
        Update
      </span>
    </div>
  );
};

export default ActionCell;
