export type ErrorType = {
  statusCode: number;
  message: string;
  error?: string;
  errors?: {
    field: string;
    message: string;
  }[];
};
