export type Document = {
  id: string;
  type: string;
  docNumber: string;
  userId: string;
  fields: Record<string, any>;
  schema: Record<string, any>;
  shipmentId: string;
};
