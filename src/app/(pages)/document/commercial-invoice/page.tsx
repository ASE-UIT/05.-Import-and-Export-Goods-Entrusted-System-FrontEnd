"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useCommercialInvoice from "@/hooks/use-commercial-invoice";

export default function Page() {
  const { data, isLoading } = useCommercialInvoice.useGetDocument(undefined, "COMMERCIAL_INVOICE");
  const invoiceData = data?.data;
  const router = useRouter();

  const handleViewClick = (id: string) => {
    router.push(`/document/commercial-invoice/view/${id}`);
  };

  return (
    <>
      {!isLoading && (
        <div className="fixed top-0 right-0 p-4 mt-[var(--header-height)]">
          <Button onClick={() => router.push("/document/commercial-invoice/create")}>
            Create
          </Button>
        </div>
      )}
      {!isLoading && invoiceData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {invoiceData.map((invoice: any) => (
            <Card key={invoice.docNumber} className="shadow-md">
              <CardContent>
                <div className="text-lg font-bold">
                  Document Number: {invoice.docNumber}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleViewClick(invoice.id)}>
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
