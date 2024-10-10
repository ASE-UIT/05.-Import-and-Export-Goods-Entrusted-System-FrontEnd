enum PaymentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Cancelled = "Cancelled",
  Failed = "Failed",
  Refunded = "Refunded",
  OnHold = "On Hold",
}

interface Payment {
  invoice_id: number;
  amount_paid: number;
  status: PaymentStatus;
  created_at: string;
}

enum InvoiceStatus {
  Pending = "Pending",
  PartiallyPaid = "Partially Paid",
  Paid = "Paid",
  Cancelled = "Cancelled",
  Overdue = "Overdue",
  Refunded = "Refunded",
}

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

enum ShipmentType {
  AirFreight = "Air Freight",
  SeaFreight = "Sea Freight",
  LandFreight = "Land Freight",
}

enum ShipmentStatus {
  Pending = "Pending",
  DocumentVerification = "Document Verification",
  CustomsClearancePending = "Customs Clearance Pending",
  CustomsCleared = "Customs Cleared",
  ProcessingAtOriginPort = "Processing at Origin Port",
  LoadedOnVessel = "Loaded on Vessel",
  InTransit = "In Transit",
  ArriveAtDestinationPort = "Arrive at Destination Port",
  CustomsClearanceAtDestination = "Customs Clearance at Destination",
  ProcessingAtDestinationWarehouse = "Processing at Destination Warehouse",
  Delivered = "Delivered",
  OutForDelivery = "Out for Delivery",
  FailedDeliveryAttempt = "Failed Delivery Attempt",
  HeldAtCustoms = "Held at Customs",
  ReturnedToSender = "Returned to Sender",
  OnHold = "On Hold",
}

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
}

enum ContractStatus {
  Pending = "Pending",
  Active = "Active",
  Expired = "Expired",
  Terminated = "Terminated",
}

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

enum QuoteReqStatus {
  Pending = "Pending",
  Rejected = "Rejected",
  InProgress = "In Progress",
  Completed = "Completed",
  Accepted = "Accepted",
  Cancelled = "Cancelled",
}

interface QuoteRequest {
  quote_request_id: number;
  customer_id: number;
  request_date: string;
  status: QuoteReqStatus;
  create_at: string;
  update_at: string;
}

enum ProviderStatus {
  Active = "Active",
  Inactive = "Inactive",
}

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

enum QuotationStatus {
  Draft = "Draft",
  Booked = "Booked",
}

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
