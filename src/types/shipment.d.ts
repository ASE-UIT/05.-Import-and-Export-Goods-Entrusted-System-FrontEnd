export interface  IShipment {
  id: string;
  shipmentType: string;
  contractId: string;
  contract: {
    endDate: string;
    quotation: quotation;
    invoice: invoiceElement[];
    quotationId: string;
  };
  
  tracking: {
    status: string;
    location: string;
  };
};

export interface IShipmentFormat {
  shipmentId: string;
  shipmentType: string;
  client: string;
  price: string;
  endDate: string;
  location: string;
  status: string;
  origin: string;
  destination: string;
  contractId: string
}

interface  invoiceElement {
  totalAmount: number;
}

export interface  IShipmentResponse {
  results: IShipment[];
  pagination: pagination;
};

interface  pagination {
  currentPage: number;
  records: number;
  totalPages: number;
  nextPage: number;
  prevPage: number;
}


interface  quotationReq {
  customerId: string;
  customer: customer;
  quoteReqDetails: quoteReqDetails;
}

interface  customer {
  id: string;
  name: string;
}

interface  quoteReqDetails {
  destination: string;
  origin: string;
}

interface  quotation {
  quotationReq: quotationReq;
  quoteReqId: string;
};