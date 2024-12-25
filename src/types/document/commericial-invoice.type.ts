export type Product = {
    qty: number;
    description: string;
    unitOfMeasure: string;
    unitPrice: number;
}

export type CommercialInvoice = {
    id: string;
    type: string;
    docNumber: string;
    userId: string;
    fields: {
        shipmentId: string;
        seller: string;
        soldTo: string;
        shipTo: string;
        invoiceNumber: string;
        invoiceDate: string;
        customerReferenceNumber: string;
        customerDate: string;
        termsOfSale: string;
        termsOfPayment: string;
        currencyOfSettlement: string;
        modeOfShipment: string;
        billOfLadingAWB: string;
        products: Product[];
        totalPrice: string;
        packageMarks: string;
        totalCommercialValue: string;
        miscCharges: string;
        totalInvoiceValue: string;
        certifications: string;
      };
    schema: Record<string, any>;
    shipmentId: string;
  };