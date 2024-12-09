import React, { useState } from "react";

const statusColors: { [_key in Status]: string } = {
  PENDING: "#FF7700",
  COMPLETED: "#108080",
  CANCELLED: "#3C3C3C",
  FAILED: "#3C3C3C",
  REFUNDED: "#108080",
  PARTIALLY_PAID: "#3C3C3C",
  OVERDUE: "#FF7700",
  DOCUMENT_VERIFICATION: "#3C3C3C",
  CUSTOMS_CLEARANCE_PENDING: "#FF7700",
  CUSTOMS_CLEARED: "#108080",
  PROCESSING_AT_ORIGIN_PORT: "#3C3C3C",
  LOADED_ON_VESSEL: "#108080",
  IN_TRANSIT: "#108080",
  ARRIVE_AT_DESTINATION_PORT: "#108080",
  CUSTOMS_CLEARANCE_AT_DESTINATION: "#3C3C3C",
  PROCESSING_AT_DESTINATION_WAREHOUSE: "#3C3C3C",
  DELIVERED: "#108080",
  OUT_FOR_DELIVERY: "#FF7700",
  FAILED_DELIVERY_ATTEMPT: "#060606",
  HELD_AT_CUSTOMS: "#3C3C3C",
  RETURNED_TO_SENDER: "#060606",
  ON_HOLD: "#3C3C3C",
  ACTIVE: "#108080",
  EXPIRED: "#3C3C3C",
  TERMINATED: "#060606",
  REJECTED: "#060606",
  IN_PROGRESS: "#108080",
  ACCEPTED: "#108080",
  INACTIVE: "#3C3C3C",
  DRAFT: "#3C3C3C",
  BOOKED: "#108080",
  PAID: "#108080",
};

export type Status =
  | "PENDING"
  | "COMPLETED"
  | "CANCELLED"
  | "FAILED"
  | "REFUNDED"
  | "PARTIALLY_PAID"
  | "OVERDUE"
  | "DOCUMENT_VERIFICATION"
  | "CUSTOMS_CLEARANCE_PENDING"
  | "CUSTOMS_CLEARED"
  | "PROCESSING_AT_ORIGIN_PORT"
  | "LOADED_ON_VESSEL"
  | "IN_TRANSIT"
  | "ARRIVE_AT_DESTINATION_PORT"
  | "CUSTOMS_CLEARANCE_AT_DESTINATION"
  | "PROCESSING_AT_DESTINATION_WAREHOUSE"
  | "DELIVERED"
  | "OUT_FOR_DELIVERY"
  | "FAILED_DELIVERY_ATTEMPT"
  | "HELD_AT_CUSTOMS"
  | "RETURNED_TO_SENDER"
  | "ON_HOLD"
  | "ACTIVE"
  | "EXPIRED"
  | "TERMINATED"
  | "REJECTED"
  | "IN_PROGRESS"
  | "ACCEPTED"
  | "INACTIVE"
  | "DRAFT"
  | "PAID"
  | "BOOKED";

const StatusBadge = ({ status }: { status: Status }) => {
  const [isHovered, setIsHovered] = useState(false);
  const color = statusColors[status] || "#E0E0E0";

  // Convert status from SNAKE_CASE to Title Case for display
  const displayStatus = status
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <div
      className="w-full relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <div
          className="absolute z-10 bg-black/80 text-white text-xs px-2 py-1 rounded-md 
                     bottom-full left-1/2 transform -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full text-center"
        >
          {displayStatus}
        </div>
      )}

      {/* Status Badge */}
      <div
        className="px-2 py-1 rounded-full text-xs font-semibold text-white 
                   text-center truncate max-w-[120px] shadow-sm transition-all duration-300 
                   group-hover:shadow-md hover:cursor-pointer"
        style={{
          backgroundColor: color,
          boxShadow: isHovered
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none",
        }}
      >
        {displayStatus}
      </div>
    </div>
  );
};

export default StatusBadge;
