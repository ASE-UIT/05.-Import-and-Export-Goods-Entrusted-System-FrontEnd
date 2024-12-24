"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DocumentDetails() {
  const router = useRouter();
  const { id: documentId } = useParams<{ id: string }>();

  const { data: documentData } = useDocument.useGetPackingListDocumentById(documentId);

  const handleBack = () => {
    router.push("/document/packing-list"); // Navigate back to /document
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
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Department Name</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.departmentName}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Account No</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.accountNo}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Date</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.date}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Shipping Date</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.shippingDate}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Sent To</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.sentTo}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">From To</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.fromTo}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Shipping Co</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.shippingCo}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Doc Number</strong>
              <p className="text-lg text-gray-900 font-medium">{documentData?.data?.[0].docNumber}</p>
            </div>
          </>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rows</h2>
      <table className="w-full border-collapse table-auto border border-gray-300 rounded-md mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Qty</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Description</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Weight</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Product #</th>
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
              <td className="border p-4 text-sm text-gray-800">{row.qty}</td>
              <td className="border p-4 text-sm text-gray-800">{row.description}</td>
              <td className="border p-4 text-sm text-gray-800">{row.weight}</td>
              <td className="border p-4 text-sm text-gray-800">{row.productNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-8 border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Instructions:</strong>
        <p className="text-gray-700">{fields?.instructions}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Signature:</strong>
        <p className="text-gray-700">{fields?.signature}</p>
      </div>
    </div>
  );
}
