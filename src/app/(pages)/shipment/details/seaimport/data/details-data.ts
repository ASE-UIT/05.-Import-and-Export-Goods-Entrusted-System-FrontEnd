import { IShipmentDetails } from "../components/columns";

export const shipmentDetailsData: IShipmentDetails[] = [
  {
    id: "1", // ID duy nhất cho từng mục
    type: "Sales Contract",
    number: "SC-001",
    image: "", // link image để trống
    created_at: "2024-10-22T10:00:00Z", // ngày giờ ở định dạng ISO
    updated_at: "2024-10-22T12:30:00Z",
    status: "Active",
  },
  {
    id: "2", // ID duy nhất cho từng mục
    type: "Commercial Invoice",
    number: "CI-002",
    image: "", // link image để trống
    created_at: "2024-10-21T09:15:00Z",
    updated_at: "2024-10-21T11:45:00Z",
    status: "Inactive",
  },
  {
    id: "3", // ID duy nhất cho từng mục
    type: "Bill of Lading",
    number: "BL-003",
    image: "", // link image để trống
    created_at: "2024-10-20T08:30:00Z",
    updated_at: "2024-10-20T09:00:00Z",
    status: "Active",
  },
  {
    id: "4", // ID duy nhất cho từng mục
    type: "Packing List",
    number: "PL-004",
    image: "", // link image để trống
    created_at: "2024-10-19T07:45:00Z",
    updated_at: "2024-10-19T08:15:00Z",
    status: "Inactive",
  },
  {
    id: "5", // ID duy nhất cho từng mục
    type: "Customs Declaration",
    number: "CD-005",
    image: "", // link image để trống
    created_at: "2024-10-18T06:00:00Z",
    updated_at: "2024-10-18T06:30:00Z",
    status: "Active",
  },
];
