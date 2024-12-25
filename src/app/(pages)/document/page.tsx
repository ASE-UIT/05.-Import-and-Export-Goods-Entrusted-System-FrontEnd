import React from 'react';
import CertificateOfOrigin from './components/certificate-of-origin/certificate-of-origin';


const mockData1 = {
  shipper: { name: 'string', address: 'string' },
  forwardingAgent: 'string',
  consignee: { name: 'string', address: 'string' },
  notifyParty: 'string',
  exportingCarrier: 'string',
  countryOfManufacture: 'string',
  totalPackages: 0,
  dateOfExport: 'string',
  commodities: [
    {
      marks: 'string',
      description: 'string',
      quantity: 'string',
      weightGross: 0,
      weightNet: 0,
    },
  ],
}


const mockData2 = {
  shipper: { name: 'Global Export Co., Ltd.', address: '123 International Trade Street, City A, Country X' },
  forwardingAgent: 'ABC Logistics Ltd.',
  consignee: { name: 'XYZ Importers, Inc.', address: '789 Market Street, City B, Country Y' },
  notifyParty: 'DEF Distribution Services',
  exportingCarrier: 'OceanLine Shipping Co.',
  countryOfManufacture: 'USA',
  totalPackages: 50,
  dateOfExport: 'December 21, 2024',
  commodities: [
    {
      marks: 'AB123',
      description: 'Electronic Components (IC)',
      quantity: '100 Units',
      weightGross: 100,
      weightNet: 95,
    },
    {
      marks: 'DEF456',
      description: 'Printed Circuit Boards (PCB)',
      quantity: '50 Units',
      weightGross: 80,
      weightNet: 75,
    }
  ],
}

function DocumentPage() {
  return (
    <div>
      <CertificateOfOrigin data={mockData1}></CertificateOfOrigin>
    </div>
  );
}

export default DocumentPage;