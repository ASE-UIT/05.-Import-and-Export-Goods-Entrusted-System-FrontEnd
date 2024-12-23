"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DocumentDetails() {
  const router = useRouter();
  const { id: documentId } = useParams<{ id: string }>();

  const { data: documentData } = useDocument.useGetDOcumentById(documentId);

  const handleBack = () => {
    router.push("/document"); // Navigate back to /document
  };

  if (!documentData) {
    return <div className="text-center mt-8">Document not found.</div>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-xl border border-gray-300">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Button
          onClick={handleBack}
          className=" text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Back
        </Button>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Document Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <div>
            <strong className="text-gray-700">Department Name:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.departmentName}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">Account No:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.accountNo}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">Date:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.date}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">Shipping Date:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.shippingDate}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">Sent To:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.sentTo}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">From To:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.fromTo}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">Shipping Co:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].fields.shippingCo}
            </span>
          </div>
          <div>
            <strong className="text-gray-700">Doc Number:</strong>{" "}
            <span className="text-gray-900">
              {documentData?.data?.[0].docNumber}
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rows</h2>
      <table className="w-full border-collapse table-auto border border-gray-300 shadow-sm mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left text-sm font-medium text-gray-700">
              Qty
            </th>
            <th className="p-3 text-left text-sm font-medium text-gray-700">
              Description
            </th>
            <th className="p-3 text-left text-sm font-medium text-gray-700">
              Weight
            </th>
            <th className="p-3 text-left text-sm font-medium text-gray-700">
              Product #
            </th>
          </tr>
        </thead>
        <tbody>
          {documentData?.data?.[0].fields.rows.map(
            (row: any, index: number) => (
              <tr
                key={index}
                className={`transition duration-200 hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border p-3 text-center text-sm text-gray-700">
                  {row.qty}
                </td>
                <td className="border p-3 text-sm text-gray-700">
                  {row.description}
                </td>
                <td className="border p-3 text-center text-sm text-gray-700">
                  {row.weight}
                </td>
                <td className="border p-3 text-center text-sm text-gray-700">
                  {row.productNumber}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="mb-8">
        <strong className="text-gray-800">Instructions:</strong>
        <p className="text-gray-700">
          {documentData?.data?.[0].fields.instructions}
        </p>
      </div>

      <div>
        <strong className="text-gray-800">Signature:</strong>
        <p className="text-gray-700">
          {documentData?.data?.[0].fields.signature}
        </p>
      </div>
    </div>
  );
}
