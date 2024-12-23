"use client";

import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import CommercialInvoiceDisplay from "../../components/invoiceDisplay";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useDocument.useGetDocumentById(id);
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
