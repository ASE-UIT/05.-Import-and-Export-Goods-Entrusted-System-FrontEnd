"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { data, isLoading } = useDocument.useGetDocument(
    undefined,
    "COMMERCIAL_INVOICE",
    undefined
  );
  const invoiceData = data?.data;
  const router = useRouter();

  const handleViewClick = (id: string) => {
    router.push(`/document/commercial-invoice/view/${id}`);
  };

  return (
    <>
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
