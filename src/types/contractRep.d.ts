type Sort<B = null> = {
  sortBy?: ?(B | string);
  sortOrder?: ?("ASC" | "DESC");
};

type ContactRepQueryParams = {
  email: ?string;
  phone: ?string;
  name: ?string;
  page: ?number;
  limit: ?number;
} & Sort<"id" | "name" | "email" | "phone">;

type ContactRepResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
};
