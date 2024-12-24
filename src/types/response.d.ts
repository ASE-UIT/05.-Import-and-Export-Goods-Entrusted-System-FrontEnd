type EximResponseWrapper<T = null> = {
  message: string;
  data?: T;
};

type PaginationWrapper<T = null> = {
  results: T;
  pagination: Pagination;
};

type Pagination = {
  records: number;
  currentPage: ?number;
  totalPages: ?number;
  nextPage: ?number;
  prevPage: ?number;
};
