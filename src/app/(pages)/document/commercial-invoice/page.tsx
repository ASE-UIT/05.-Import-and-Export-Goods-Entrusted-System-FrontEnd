"use client";

import { columns } from "@/app/(pages)/document/commercial-invoice/_components/columns";
import { DataTable } from "@/app/(pages)/document/commercial-invoice/_components/data-table";
import useAuth from "@/hooks/use-auth";
import useDocument from "@/hooks/use-document";
import { Document } from "@/types/document/document.type";
import React, { useEffect, useState } from "react";

export default function Page() {
  const {
    data: documentAll,
    isLoading,
    isError,
  } = useDocument.useGetDocument();
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useAuth.useGetSession();

  const [document, setDocument] = useState<Document[]>();
  const [commercialInvoices, setCommercialInvoices] = useState<Document[]>();

  useEffect(() => {
    if (user?.role.name === "CLIENT") {
      setDocument(
        Array.isArray(documentAll?.data)
          ? documentAll?.data.filter((item) => item.userId === user?.id)
          : [],
      );
    } else {
      setDocument(
        documentAll && Array.isArray(documentAll.data) ? documentAll.data : [],
      );
    }
  }, [user, documentAll]);

  useEffect(() => {
    if (document) {
      setCommercialInvoices(
        document.filter((item) => item.type === "COMMERCIAL_INVOICE"),
      );
    }
  }, [document]);

  if (isLoading || userLoading) return <div>Loading...</div>;

  if (isError || userError) return <div>Error...</div>;

  return (
    <div className="flex w-full flex-col p-[24px]">
      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">Commercial Invoice</span>
        </div>
        {commercialInvoices && (
          <DataTable columns={columns} data={commercialInvoices} />
        )}
      </div>
    </div>
  );
}
