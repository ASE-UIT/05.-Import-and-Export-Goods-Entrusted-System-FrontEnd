import { FREIGHT_TYPE, WEEKDAY } from "@/configs/enum";

PaymentStatus =
  "Pending" | "Completed" | "Cancelled" | "Failed" | "Refunded" | "On Hold";

interface Payment {
  invoice_id: number;
  amount_paid: number;
  status: PaymentStatus;
  created_at: string;
}

InvoiceStatus =
  "Pending" | "Partially Paid" | "Paid" | "Cancelled" | "Overdue" | "Refunded";

interface Invoice {
  invoice_id: number;
  contract_id: number;
  employee_id: number;
  invoice_date: string;
  paid_date: string;
  status: InvoiceStatus;
  tax_amount: number;
  total_amount: number;
}

ShipmentType = "Air Freight" | "Sea Freight" | "Land Freight";

ShipmentStatus =
  "Pending" |
  "Document Verification" |
  "Customs Clearance Pending" |
  "Customs Cleared" |
  "Processing at Origin Port" |
  "Loaded on Vessel" |
  "In Transit" |
  "Arrive at Destination Port" |
  "Customs Clearance at Destination" |
  "Processing at Destination Warehouse" |
  "Delivered" |
  "Out for Delivery" |
  "Failed Delivery Attempt" |
  "Held at Customs" |
  "Returned to Sender" |
  "On Hold";

interface Shipment {
  shipment_id: number;
  shipment_type: ShipmentType;
  contract_id: number;
}

interface ShipmentTracking {
  tracking_id: number;
  shipment_id: number;
  status: ShipmentStatus;
  location: string;
  client: string;
  shipment_type: ShipmentType;
}

ContractStatus = "Pending" | "Active" | "Expired" | "Terminated";

interface Contract {
  contract_id: number;
  quotation_id: number;
  start_date: string;
  employee_id: number;
  contract_date: string;
  status: ContractStatus;
  end_date: string;
  create_at: string;
  update_at: string;
}

QuoteReqStatus =
  "Pending" |
  "Rejected" |
  "In Progress" |
  "Completed" |
  "Accepted" |
  "Cancelled";

interface QuoteRequest {
  quote_request_id: number;
  customer_id: number;
  request_date: string;
  status: QuoteReqStatus;
  create_at: string;
  update_at: string;
}

ProviderStatus = "Active" | "Inactive";

interface Provider {
  provider_id: number;
  name: string;
  contactrep_id: number;
  email: string;
  phone: string;
  address: string;
  country: string;
  status: ProviderStatus;
}

interface ContactRep {
  contactrep_id: number;
  name: string;
  email: string;
  phone: string;
}

QuotationStatus = "Draft" | "Booked";

interface Quotation {
  quotation_id: number;
  quote_request_id: number;
  employee_id: number;
  total_price: number;
  pickup_date: string;
  delivery_date: string;
  quotation_date: string;
  expired_date: string;
  freight_id: number;
  status: QuotationStatus;
}

interface Freight {
  id: string;
  freightType: FREIGHT_TYPE;
  origin: string;
  destination: string;
  transitTime: number;
  additionFee: number;
  validFrom: Date;
  validUntil: Date;
  addition_fee_breakdown: string;
  schedule: WEEKDAY;
  providerId: string;
}

interface LandFreight {
  price_0_100: number;
  price_100_200: number;
  price_200_500: number;
  price_500_1500: number;
  price_1500_5000: number;
  price_5000_10000: number;
  price_10000: number;
  freight_id: string;
}

interface AirFreight {
  price_0K: number;
  price_45K: number;
  price_100K: number;
  price_300K: number;
  price_500K: number;
  freight_id: string;
}

interface LCL {
  cost: number;
  freight_id: string;
}

interface FCL {
  price_20dc: number;
  price_40dc: number;
  price_40hc: number;
  price_20rf: number;
  price_40rf: number;
  freight_id: string;
}
