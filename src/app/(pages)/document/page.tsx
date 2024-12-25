import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Link from "next/link";

const DocumentTypeGrid = () => {
  const documentTypes = [
    {
      title: "Customs Declaration",
      link: "/document/customs-declaration",
    },
    {
      title: "Bill",
      link: "/document/bill",
    },
    {
      title: "Packing List",
      link: "/document/packing-list",
    },
    {
      title: "Commercial Invoice",
      link: "/document/commercial-invoice",
    },
    {
      title: "Certificate of Origin",
      link: "/document/certificate-of-origin",
    },
    {
      title: "Exim License",
      link: "/document/exim-license",
    },
    {
      title: "Sales Contract",
      link: "/document/sales-contract",
    },
    {
      title: "Contracts Customer Forwarder",
      link: "/document/contract/customer_forwarder",
    },
    {
      title: "Contracts Forwarder Provider",
      link: "/document/contract/forwarder-provider",
    },

  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Document Types</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {documentTypes.map((type) => (
          <Link
            href={type.link}
            key={type.title}
            className="transition-transform hover:scale-105"
          >
            <Card className="cursor-pointer hover:bg-gray-50">
              <CardHeader className="flex flex-row items-center gap-4">
                <FileText className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DocumentTypeGrid;
