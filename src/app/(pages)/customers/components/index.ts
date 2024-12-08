export interface ICustomer {
  id?: string;
  name?: string;
  short_name?: string;
  email?: string;
  phone?: string;
  tax_id?: string;
  address?: string;
  legal_rep_name?: string;
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

export const customerMappingProp = new Map<string, string>([
  ['id', 'id'],
  ['name', 'name'],
  ['short_name', 'shortName'],
  ['email', 'email'],
  ['phone', 'phone'],
  ['tax_id', 'taxId'],
  ['address', 'address'],
]);
