"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DocumentDetails() {
  const router = useRouter();
  const { id: documentId } = useParams<{ id: string }>();

  const { data: documentData } = useDocument.useGetCustomerForwarderListById(documentId);

  const handleBack = () => {
    router.push("/document/contract"); 
  };

  if (!documentData) {
    return <div className="text-center mt-8">Document not found.</div>;
  }

  const fields = documentData?.data?.[0]?.fields;

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg border border-gray-200">
      
      <div className="mb-6">
        <Button
          onClick={handleBack}
          className="text-white px-5 py-2 rounded-md shadow transition-all"
        >
          Back
        </Button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Document Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {fields && (
          <>
            
          </>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rows</h2>
      <table className="w-full border-collapse table-auto border border-gray-300 rounded-md mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">STT</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Tên hàng</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Đơn vị tính</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Số lượng</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Đơn giá</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Thành tiền</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {fields?.rows.map((row: any, index: number) => (
            <tr
              key={index}
              className={`transition hover:bg-gray-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="border p-4 text-sm text-gray-800">{row.productName}</td>
              <td className="border p-4 text-sm text-gray-800">{row.unitCalculation}</td>
              <td className="border p-4 text-sm text-gray-800">{row.quantity}</td>
              <td className="border p-4 text-sm text-gray-800">{row.price}</td>
              <td className="border p-4 text-sm text-gray-800">{row.total}</td>
              <td className="border p-4 text-sm text-gray-800">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}
