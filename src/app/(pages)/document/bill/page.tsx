"use client";

import { columns } from "@/app/(pages)/document/bill/_components/columns";
import { DataTable } from "@/app/(pages)/document/bill/_components/data-table";
import useAuth from "@/hooks/use-auth";
import useDocument from "@/hooks/use-document";
import useUser from "@/hooks/use-user";
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
  const [airWaybill, setAirWaybill] = useState<Document[]>();

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
      setAirWaybill(
        document.filter(
          (item) => item.type === "AIRWAY_BILL" || item.type === "LANDING_BILL",
        ),
      );
    }
  }, [document]);

  if (isLoading || userLoading) return <div>Loading...</div>;

  if (isError || userError) return <div>Error...</div>;

  return (
    <div className="flex w-full flex-col p-[24px]">
      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">Bill</span>
        </div>
        {airWaybill && <DataTable columns={columns} data={airWaybill} />}
      </div>
    </div>
  );
}
