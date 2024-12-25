import React from 'react';
import BillOfLandingWrapper from './wrapper';
import './bill-of-landing.css';

type Props = {
  data?: {
    info?: {
      orderNumber?: string;
      pkgs?: number;
      weight?: number;
      pallet?: boolean;
      shipperInfo?: string;
    }[];
    total?: {
      pkgs?: number;
      weight?: number;
    };
  };
};

function BillOfLandingCustomerOrder({ data }: Props) {
  const populatedInfoData:
    | {
        orderNumber?: string;
        pkgs?: string;
        weight?: number;
        pallet?: boolean;
        shipperInfo?: string;
      }[]
    | undefined = data?.info
    ? [
        ...data.info,
        ...Array(8 - data.info.length).fill({
          orderNumber: undefined,
          pkgs: undefined,
          weight: undefined,
          pallet: undefined,
          shipperInfo: undefined,
        }),
      ]
    : undefined;

  return (
    <div>
      <BillOfLandingWrapper
        title="CUSTOMER ORDER INFORMATION"
        hasPadding={false}
      >
        <div>
          <table>
            <thead>
              <tr>
                <th className="text-sm font-bold">CUSTOMER ORDER NUMBER</th>
                <th className="text-sm font-bold"># PKGS</th>
                <th className="text-sm font-bold">WEIGHT</th>
                <th colSpan={2}>
                  <p className="text-sm font-bold">PALLET/SLIP</p>
                  <p className="text-xs">(CIRCLE ONE)</p>
                </th>
                <th className="text-sm font-bold">ADDITIONAL SHIPPER INFO</th>
              </tr>
            </thead>

            <tbody>
              {populatedInfoData?.map((data, index) => (
                <tr key={index}>
                  <td>{data.orderNumber}</td>
                  <td>{data.pkgs}</td>
                  <td>{data.weight}</td>
                  <td className="font-bold">
                    <div
                      style={
                        data.pallet == true
                          ? {
                              borderColor: '#000',
                              borderWidth: 1,
                              borderRadius: 999,
                            }
                          : {}
                      }
                    >
                      Y
                    </div>
                  </td>
                  <td className="font-bold">
                    <div
                      style={
                        data.pallet == false
                          ? {
                              borderColor: '#000',
                              borderWidth: 1,
                              borderRadius: 999,
                            }
                          : {}
                      }
                    >
                      N
                    </div>
                  </td>
                  <td>{data.shipperInfo}</td>
                </tr>
              ))}
              <tr>
                <td className="text-lg font-bold">GRAND TOTAL</td>
                <td>{data?.total?.pkgs}</td>
                <td>{data?.total?.weight}</td>
                <td className="bg-gray-400 border-0"></td>
                <td className="bg-gray-400 border-0"></td>
                <td className="bg-gray-400 border-0"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </BillOfLandingWrapper>
    </div>
  );
}

export default BillOfLandingCustomerOrder;
