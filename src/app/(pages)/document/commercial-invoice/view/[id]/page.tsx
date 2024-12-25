"use client";

import { useParams } from "next/navigation";
import CommercialInvoiceDisplay from "../../components/invoiceDisplay";
import useCommercialInvoice from "@/hooks/use-commercial-invoice";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useCommercialInvoice.useGetDocumentById(id);
  const invoiceData = data?.data;
  console.log(invoiceData);
  return (
    <>
      {!isLoading && invoiceData && (
        <CommercialInvoiceDisplay
          docNumber={invoiceData[0].docNumber}
          fields={invoiceData[0].fields}
        />
      )}
    </>
  );
}
