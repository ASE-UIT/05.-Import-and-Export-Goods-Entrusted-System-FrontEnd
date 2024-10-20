export interface ICustomer {
  id: string;
  name: string;
  short_name: string;
  email: string;
  phone: string;
  tax_id: string;
  address: string;
  legal_rep_name: string;
}

export interface ICustomerRequest {
  file?: File;
  name: string;
  short_name: string;
  email: string;
  phone: string;
  tax_id: string;
  address: string;
  legal_rep_name: string;
}
