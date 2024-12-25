"use client";

import useAuth from "@/hooks/use-auth";
import useDocument from "@/hooks/use-document";
import { Document } from "@/types/document/document.type";
import { useEffect, useState } from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default function Page() {
    const {
        data: user,
        isLoading: userLoading,
        error: userError,
    } = useAuth.useGetSession();

    const {
        data: documentAll,
        isLoading,
        isError,
    } = useDocument.useGetDocument();

    const [document, setDocument] = useState<Document[]>();
    const [customsDeclare, setCustomsDeclare] = useState<Document[]>();

    useEffect(() => {
        if (user?.role.name === "CLIENT") {
            setDocument(
                Array.isArray(documentAll?.data)
                    ? documentAll?.data.filter(
                          (item) => item.userId === user?.id
                      )
                    : []
            );
        } else {
            setDocument(
                documentAll && Array.isArray(documentAll.data)
                    ? documentAll.data
                    : []
            );
        }
    }, [user, documentAll]);

    useEffect(() => {
        if (document) {
            setCustomsDeclare(
                document.filter((item) => item.type === "SALES_CONTRACT")
            );
        }
    }, [document]);

    if (isLoading || userLoading) return <div>Loading...</div>;

    if (isError || userError) return <div>Error...</div>;

    return (
        <div className="flex w-full flex-col p-[24px]">
            <div className="flex w-full flex-col gap-[20px]">
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">Sales Contract</span>
                </div>
                {customsDeclare && (
                    <DataTable columns={columns} data={customsDeclare} />
                )}
            </div>
        </div>
    );
}
