type CustomerQueryParams = {
  email: ?string;
  phone: ?string;
  name: ?string;
  page: ?number;
  limit: ?number;
} & Sort<'id' | 'name' | 'shortName' | 'email' | 'phone' | 'address' | 'taxId'>;

type CustomerResponse = {
  id: string;
  name: string;
  shortName: string;
  email: string;
  phone: string;
  address: string;
  taxId: string;
  legalRep: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
};

type CreateCustomerBody = {
  name: string;
  shortName: string;
  email: string;
  phone: string;
  address: string;
  taxId: string;
  legalRepId: string;
};

type UpdateCustomerBody = {
  name: ?string;
  shortName: ?string;
  email: ?string;
  phone: ?string;
  address: ?string;
  taxId: ?string;
};
