type LegalRepQueryParams = {
  email: ?string;
  phone: ?string;
  name: ?string;
};

type LegalRepResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type CreateLegalRepBody = {
  name: string;
  email: string;
  phone: string;
};

type UpdateLegalRepBody = {
  name: ?string;
  email: ?string;
  phone: ?string;
};
