export type Document = {
  id: string;
  type: string;
  docNumber: number;
  userId: string;
  fields: Record<string, any>;
  schema: Record<string, any>;
  shipmentId: string;
};
