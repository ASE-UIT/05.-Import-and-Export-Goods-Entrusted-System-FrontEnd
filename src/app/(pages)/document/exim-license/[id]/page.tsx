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
    router.push("/document/exim-license"); // Navigate back to /document
  };

  if (!documentData) {
    return <div className="mt-8 text-center">Document not found.</div>;
  }

  const fields = documentData?.data?.[0]?.fields;

  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-lg border border-gray-200 bg-white p-8 shadow-md">
      <div className="mb-6">
        <Button
          onClick={handleBack}
          className="rounded-md px-5 py-2 text-white shadow transition-all"
        >
          Back
        </Button>
      </div>
      {/* Tiêu đề */}
      <h1 className="mb-8 text-center text-2xl font-bold">
        IMPORT/EXPORT LICENSE
      </h1>

      {/* Nội dung */}
      <div className="mb-4 text-lg font-medium">
        <p style={{ marginBottom: "10px" }}>
          Director of the Ministry of Industry and Trade:{" "}
          <span>Nguyen Hoang Long</span>
        </p>
        <p style={{ marginBottom: "10px" }}>
          Based on the Law on Drug Prevention and Control dated: March 30, 2021;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Based on Decree No. 123/ND-CP dated June 15, 2021 of the Government
          detailing and guiding the implementation of a number of articles of
          the Law on Drug Prevention and Control;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Based on Decision No. 456/QD-TTg dated September 10, 2021 of the
          Ministry of Industry and Trade regarding the definition of functions,
          duties, powers, and organizational structure of the Ministry of
          Industry and Trade;
        </p>
        <p>
          Considering the application for granting an Import (Export) License in
          the file number 789/HS dated December 1, 2021 of the Ministry of
          Industry and Trade.
        </p>
      </div>

      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Document Details
      </h1>

      {/* Company info */}
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Company Information
      </h2>
      <div className="p-2">
        {fields && (
          <>
            <p className="mb-2 text-lg font-medium">
              Company <span className="font-bold">{fields.companyName}</span>,
              located at <span className="font-bold">{fields.address}</span>,
              phone number: <span className="font-bold">{fields.phone}</span>,
              fax number: <span className="font-bold">{fields.fax}</span>,
              Business License No.{" "}
              <span className="font-bold">{fields.businessLicense}</span>,
              issued by <span className="font-bold">{fields.issuedBy}</span> on{" "}
              <span className="font-bold">{fields.issuedDate}</span>, is
              authorized to:
            </p>
          </>
        )}
      </div>

      {/* EXIm DOC INFO */}

      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        License Information
      </h2>
      <div className="p-2">
        {fields && (
          <>
            <p className="mb-2 text-lg font-medium">
              1. Import / Export:{" "}
              <span className="font-bold">{fields.importExport}</span>
            </p>
            <p className="mb-2 text-lg font-medium">
              2. Purpose of Import / Export:{" "}
              <span className="font-bold">{fields.purpose}</span>
            </p>
            <p className="mb-2 text-lg font-medium">
              3. Import / Export Checkpoint:{" "}
              <span className="font-bold">{fields.port}</span>
            </p>
            <p className="mb-2 text-lg font-medium">
              4. Transportation Conditions:{" "}
              <span className="font-bold">{fields.transportConditions}</span>
            </p>
            <p className="mb-2 text-lg font-medium">
              5. Estimated Time for Import / Export:{" "}
              <span className="font-bold">{fields.estimatedTime}</span>
            </p>
            <p className="mb-2 text-lg font-medium">
              6. Number of Import / Export Operations:{" "}
              <span className="font-bold">{fields.executionTimes}</span>
            </p>
          </>
        )}
      </div>

      {/* MINOR PART */}

      <div className="p-2">
        {fields && (
          <>
            <p className="mb-4 text-lg font-medium">
              <span></span> The company{" "}
              <span className="font-bold">{fields.companyName}</span> is
              responsible for strictly complying with the provisions of the Law
              on Drug Prevention and Control; Decree No.{" "}
              <span className="font-bold">123/ND-CP</span> dated{" "}
              <span className="font-bold">June 15, 2021</span> of the Government
              detailing and guiding the implementation of certain articles of
              the Law on Drug Prevention and Control and{" "}
              <span>the Anti-Drug Law 2021</span>.
            </p>
            <p className="mb-4 text-lg font-medium">
              <span className="font-bold"></span> This license is valid until
              the end of{" "}
              <span className="font-bold">
                {fields.expiryDate || ".../.../..."}
              </span>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
