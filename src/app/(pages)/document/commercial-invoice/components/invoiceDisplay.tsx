"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  qty: number;
  description: string;
  unitOfMeasure: number;
  unitPrice: number;
}

interface CommercialInvoiceProps {
  docNumber: number;
  fields: {
    shipmentId: string;
    seller: string;
    soldTo: string;
    shipTo: string;
    invoiceNumber: string;
    invoiceDate: string;
    customerReferenceNumber: string;
    customerDate: string;
    termsOfSale: string;
    termsOfPayment: string;
    currencyOfSettlement: string;
    modeOfShipment: string;
    billOfLadingAWB: string;
    products: Product[];
    totalPrice: string;
    packageMarks: string;
    totalCommercialValue: string;
    miscCharges: string;
    totalInvoiceValue: string;
    certifications: string;
  };
}

export default function CommercialInvoiceDisplay({
  docNumber,
  fields,
}: CommercialInvoiceProps) {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 border border-gray-300 shadow-md bg-white">
      <Card className="w-full max-w-4xl mx-auto p-6 bg-white h-full">
        <CardContent className="p-0">
          <div className="text-center text-xl font-bold mb-6">
            COMMERCIAL INVOICE
          </div>
          <div className="grid grid-cols-2 mb-0">
            <div className="border border-b-0 p-4 space-y-2">
              <div className="font-semibold">DOCUMENT NUMBER</div>
              <div>{docNumber}</div>
            </div>
            <div className="border border-b-0 border-l-0 p-4 space-y-2">
              <div className="font-semibold">SHIPMENT ID</div>
              <div>{fields.shipmentId}</div>
            </div>
            <div className="border border-b-0 p-4 pt-0 space-y-2">
              <div className="font-semibold">SELLER</div>
              <div>{fields.seller}</div>
            </div>
            <div>
              <div className="border-r border-t px-4 py-4 flex items-center justify-between">
                <div className="w-3/5 flex justify-between items-center gap-2">
                  <span className="font-semibold">INVOICE NUMBER</span>
                  <div>{fields.invoiceNumber}</div>
                </div>
                <div className="w-2/5 flex justify-end items-center gap-2">
                  <span className="font-semibold">DATE:</span>
                  <div>
                    {new Date(fields.invoiceDate).toLocaleDateString("en-GB")}
                  </div>
                </div>
              </div>
              <div className="border-r border-t px-4 py-4 flex items-center justify-between">
                <div className="w-3/5 flex justify-between items-center">
                  <span className="font-semibold text-wrap">
                    CUSTOMER REF NO.
                  </span>
                  <div>{fields.customerReferenceNumber}</div>
                </div>
                <div className="w-2/5 flex justify-end items-center gap-2">
                  <span className="font-semibold">DATE:</span>
                  <div>
                    {new Date(fields.customerDate).toLocaleDateString("en-GB")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="border border-b-0 p-4 space-y-2">
              <div className="font-semibold">SOLD TO</div>
              <div>{fields.soldTo}</div>
            </div>
            <div>
              <div className="border-t border-r border-b p-4 space-y-2">
                <div className="font-semibold">TERMS OF SALE</div>
                <div>{fields.termsOfSale}</div>
              </div>
              <div className="border-r p-4 space-y-2">
                <div className="font-semibold">TERMS OF PAYMENT</div>
                <div>{fields.termsOfPayment}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="border border-b-0 p-4 space-y-2">
              <div className="font-semibold">SHIP TO</div>
              <div>{fields.shipTo}</div>
            </div>
            <div>
              <div className="border-t border-r border-b p-4 space-y-2">
                <div className="font-semibold">CURRENCY OF SETTLEMENT</div>
                <div>{fields.currencyOfSettlement}</div>
              </div>
              <div className="border-r p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">MODE OF SHIPMENT</span>
                  <span className="font-semibold">BILL OF LADING/AWB</span>
                </div>
                <div className="flex gap-4">
                  <div>{fields.modeOfShipment}</div>
                  <div>{fields.billOfLadingAWB}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-b-0 flex flex-col items-center">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="border-r p-2 w-20">QTY</th>
                  <th className="border-r p-2 w-1/2">
                    PRODUCT DESCRIPTION AND HARMONIZED CODE
                  </th>
                  <th className="border-r p-2 w-32">UNIT OF MEASURE</th>
                  <th className="border-r p-2 w-32">UNIT PRICE</th>
                  <th className="p-2 w-32">TOTAL PRICE</th>
                </tr>
              </thead>
              <tbody>
                {fields.products.map((product, index) => (
                  <tr key={index}>
                    <td className="border-r border-b p-2">{product.qty}</td>
                    <td className="border-r border-b p-2">
                      {product.description}
                    </td>
                    <td className="border-r border-b p-2">
                      {product.unitOfMeasure}
                    </td>
                    <td className="border-r border-b p-2">
                      {product.unitPrice}
                    </td>
                    {index === 0 && (
                      <td
                        className="p-2 border-b"
                        rowSpan={fields.products.length}
                      >
                        {fields.totalPrice}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-b-0">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="border-r p-2 w-1/3">PACKAGE MARKS</th>
                  <th className="border-r p-2">VALUE DETAILS</th>
                  <th className="p-2">AMOUNTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r p-2" rowSpan={3}>
                    {fields.packageMarks}
                  </td>
                  <td className="border-r border-b p-2">
                    <div className="font-semibold">TOTAL COMMERCIAL VALUE</div>
                  </td>
                  <td className="border-b p-2">
                    {fields.totalCommercialValue}
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-b p-2">
                    <div className="font-semibold">
                      MISC CHARGES (PACKING, INSURANCE, ETC.)
                    </div>
                  </td>
                  <td className="border-b p-2">{fields.miscCharges}</td>
                </tr>
                <tr>
                  <td className="border-r p-2">
                    <div className="font-semibold">TOTAL INVOICE VALUE</div>
                  </td>
                  <td className="p-2">{fields.totalInvoiceValue}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2">
            <div className="border p-4 space-y-2">
              <div className="font-semibold">CERTIFICATIONS</div>
              <div>{fields.certifications}</div>
            </div>
            <div className="border-t border-r border-b p-4 space-y-8 ">
              <div className="text-sm font-semibold">
                I CERTIFY THAT THE STATED EXPORT PRICES AND DESCRIPTION OF GOODS
                ARE TRUE AND CORRECT
              </div>
              <div>
                <hr />
                <div className="font-semibold mb-1">SIGNED</div>
              </div>
              <div>
                <div className="font-semibold mb-1">TITLE</div>
                <hr />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
