import React from 'react';
import './table.css'

type CertificateOfOriginData = {
  shipper?: { name: string; address: string };
  forwardingAgent?: string;
  consignee?: { name: string; address: string };
  notifyParty?: string;
  exportingCarrier?: string;
  countryOfManufacture?: string;
  totalPackages?: number;
  dateOfExport?: string;
  commodities?: {
    marks: string;
    description: string;
    quantity: string;
    weightGross: number;
    weightNet: number;
  }[];

};






const CertificateOfOrigin = ({data} : {data: CertificateOfOriginData}) => {
  const commodities = data?.commodities
  ? [
      ...data.commodities,
      ...Array(8 - data.commodities.length).fill({
        marks: undefined,
        description: undefined,
        quantity: undefined,
        weightGross: undefined,
        weightNet: undefined,
      }),
    ]
  : undefined;
  return (
    <div className="border border-black p-6 max-w-6xl w-full mx-auto">
      {/* Header */}
      <h1 className="text-center font-bold uppercase text-lg border-b border-black pb-2 mb-4">
        Certificate of Origin
      </h1>

      {/* Section 1: Shipper & Consignee */}
      <div className="grid grid-cols-2 gap-4 border-b border-black pb-4 mb-4">
        <div className="space-y-2">
          <p className="text-sm font-bold">Shipper Name and Address </p>
          <div className="border border-black h-32"> {data.shipper?.name} <br /> {data.shipper?.address}</div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold">Forwarding Agent - References</p>
          <div className="border border-black h-32"> {data.forwardingAgent} </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-b border-black pb-4 mb-4">
        <div className="space-y-2">
          <p className="text-sm font-bold">Consignee Name and Address</p>
          <div className="border border-black h-32"> {data.consignee?.name} <br /> {data.consignee?.address}</div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold">Notify Party</p>
          <div className="border border-black h-32"> {data.notifyParty}</div>
        </div>
      </div>

      {/* Section 2: Export Details */}
      <div className="grid grid-cols-2 gap-4 border-b border-black pb-4 mb-4">
        <div className="space-y-2">
          <p className="text-sm font-bold">Exporting Carrier</p>
          <div className="border border-black h-16">{data.exportingCarrier}</div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold">Country of Manufacture</p>
          <div className="border border-black h-16">{data.countryOfManufacture}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-b border-black pb-4 mb-4">
        <div className="space-y-2">
          <p className="text-sm font-bold">Total Number of Packages</p>
          <div className="border border-black h-16">{data.totalPackages}</div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold">Date of Export</p>
          <div className="border border-black h-16">{data.dateOfExport}</div>
        </div>
      </div>

      {/* Section 3: Commodity Description Table */}
      <div className="mb-6">
      <table>
            <thead>
              <tr>
                <th rowSpan={2} className="text-sm font-bold column-marks" >
                  Marks & Numbers
                </th>
                <th rowSpan={2} className="text-sm font-bold column-description">
                  Commodity Description
                </th>
                <th rowSpan={2} className='column-quantity'>
                  <p className="text-sm font-bold">Quantity /</p>
                  <p className="text-sm font-bold">
                    Unit of Measure
                  </p>
                </th>
                <th colSpan={2} className="text-sm font-bold column-weight">
                  Weight (kg)
                </th>
              </tr>
              <tr>
                <th className="text-sm font-bold">Gross</th>
                <th className="text-sm font-bold">Net</th>
              </tr>
            </thead>
            
            <tbody>
            {commodities?.map((commodity, index) => (
              <tr key={index}>
                <td>{commodity.marks}</td>
                <td>{commodity.description}</td>
                <td>{commodity.quantity}</td>
                <td>{commodity.weightGross}</td>
                <td>{commodity.weightNet}</td>
              </tr>
            ))}
            </tbody>
            
          </table>
      </div>

      {/* Section 4: Footer */}
      <div className="text-sm space-y-2 border-t border-black pt-4">
        <p>
          These commodities, technology or software were exported from the United States of America in accordance with
          the Export Administration Regulations. Diversion contrary to U.S. law prohibited.
        </p>
        <p>Dated at ___________________ on the ______ day of ___________________, 20 ________.</p>
        <p>Signature of Notary: ____________________________________________</p>
        <p>Sworn to before me this ______ day of ___________________, 20 ________.</p>
        <p>Signature of Notary: ____________________________________________</p>
        <p>
          The ___________________________, a recognized Chamber of Commerce under the laws of the State of
          ___________________, has examined the manufacturer's invoice or shipper's affidavit concerning the origin of
          the merchandise and, according to the best of its knowledge and belief, finds that the products named
          originated in the ___________________________.
        </p>
        <p>Secretary: ____________________________________________</p>
      </div>
    </div>
  );
};

export default CertificateOfOrigin;
