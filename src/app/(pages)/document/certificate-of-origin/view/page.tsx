import React from 'react';
import CertificateOfOrigin from './certificate-of-origin';

const mockData = {
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
        <CertificateOfOrigin data={mockData}></CertificateOfOrigin>
      </div>
    );
  }
  export default DocumentPage;