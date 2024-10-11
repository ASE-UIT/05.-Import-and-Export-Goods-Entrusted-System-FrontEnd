const statusColors: { [key in Status]: string } = {
  Pending: "#FF7700",
  Completed: "#108080",
  Cancelled: "#3C3C3C",
  Failed: "#3C3C3C",
  Refunded: "#108080",
  "Partially Paid": "#3C3C3C",
  Overdue: "#FF7700",
  "Document Verification": "#3C3C3C",
  "Customs Clearance Pending": "#FF7700",
  "Customs Cleared": "#108080",
  "Processing At Origin Port": "#3C3C3C",
  "Loaded On Vessel": "#108080",
  "In Transit": "#108080",
  "Arrive At Destination Port": "#108080",
  "Customs Clearance At Destination": "#3C3C3C",
  "Processing At Destination Warehouse": "#3C3C3C",
  Delivered: "#108080",
  "Out For Delivery": "#FF7700",
  "Failed Delivery Attempt": "#060606",
  "Held At Customs": "#3C3C3C",
  "Returned To Sender": "#060606",
  "On Hold": "#3C3C3C",
  Active: "#108080",
  Expired: "#3C3C3C",
  Terminated: "#060606",
  Rejected: "#060606",
  "In Progress": "#108080",
  Accepted: "#108080",
  Inactive: "#3C3C3C",
  Draft: "#3C3C3C",
  Booked: "#108080",
};

export type Status =
  | "Pending"
  | "Completed"
  | "Cancelled"
  | "Failed"
  | "Refunded"
  | "Partially Paid"
  | "Overdue"
  | "Document Verification"
  | "Customs Clearance Pending"
  | "Customs Cleared"
  | "Processing At Origin Port"
  | "Loaded On Vessel"
  | "In Transit"
  | "Arrive At Destination Port"
  | "Customs Clearance At Destination"
  | "Processing At Destination Warehouse"
  | "Delivered"
  | "Out For Delivery"
  | "Failed Delivery Attempt"
  | "Held At Customs"
  | "Returned To Sender"
  | "On Hold"
  | "Active"
  | "Expired"
  | "Terminated"
  | "Rejected"
  | "In Progress"
  | "Accepted"
  | "Inactive"
  | "Draft"
  | "Booked";

const StatusBadge = ({ status }: { status: Status }) => {
  const color = statusColors[status] || "#E0E0E0";

  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        padding: "0.2rem 0.5rem",
        borderRadius: "0.5rem",
        fontSize: "0.8rem",
        fontWeight: "bold",
        maxWidth: "120px",
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {status}
    </div>
  );
};

export default StatusBadge;
