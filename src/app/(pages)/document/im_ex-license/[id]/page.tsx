"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DocumentDetails() {
  const router = useRouter();
  const { id: documentId } = useParams<{ id: string }>();

  const { data: documentData } = useDocument.useGetEximDocumentById(documentId);

  const handleBack = () => {
    router.push("/document/im_ex-license"); // Navigate back to /document
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
<h2 className="text-2xl font-bold text-gray-800 mb-8">
  Company Information
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {fields && (
          <>
          <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Comany Name</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.companyName}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Address</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.address}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Phone</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.phone}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Fax</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.fax}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Business License</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.businessLicense}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Issued By</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.issuedBy}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Issued Date</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.issuedDate}</p>
            </div>
          </>
        )}
        
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
License Information
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
  {fields && (
    <>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">Import / Export</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.importExport}</p>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">Purpose</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.purpose}</p>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">Import / Export Checkpoint</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.port}</p>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">Transportation Conditions</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.transportConditions}</p>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">Estimated Time</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.estimatedTime}</p>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">Number of Operations</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.executionTimes}</p>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-4">
        <strong className="text-gray-600">This license is valid until the end of</strong>
        <p className="text-lg text-gray-900 font-medium">{fields.expiryDate}</p>
      </div>
    </>
  )}
</div>


    </div>
  );
}
