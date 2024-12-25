import React from 'react';
import BillOfLandingWrapper from './wrapper';
import './bill-of-landing.css';

type Props = {
  data?: {
    info?: {
      handling?: {
        qty?: number;
        type?: string;
      };
      package?: {
        qty?: number;
        type?: string;
      };
      weight?: number;
      hm?: string;
      desc?: string;
      ltl?: {
        nmfc?: string;
        class?: string;
      };
    }[];
    total?: {
      unitQty?: number;
      packageQty?: number;
      weight?: number;
    };
  };
};

function BillOfLandingCarrierInfo({ data }: Props) {
  const populatedInfoData:
    | {
        handling?: {
          qty?: number;
          type?: string;
        };
        package?: {
          qty?: number;
          type?: string;
        };
        weight?: number;
        hm?: string;
        desc?: string;
        ltl?: {
          nmfc?: string;
          class?: string;
        };
      }[]
    | undefined = data?.info
    ? [
        ...data.info,
        ...Array(8 - data.info.length).fill({
          handling: {
            qty: undefined,
            type: undefined,
          },
          package: {
            qty: undefined,
            type: undefined,
          },
          weight: undefined,
          hm: undefined,
          desc: undefined,
          ltl: {
            nmfc: undefined,
            class: undefined,
          },
        }),
      ]
    : undefined;

  return (
    <div>
      <BillOfLandingWrapper title="CARRIER INFORMATION" hasPadding={false}>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={2} className="text-sm font-bold">
                  HANDLING UNIT
                </th>
                <th colSpan={2} className="text-sm font-bold">
                  PACAKGE
                </th>
                <th rowSpan={2} className="text-sm font-bold">
                  WEIGHT
                </th>
                <th rowSpan={2}>
                  <p className="text-sm font-bold">H.M.</p>
                  <p className="text-sm font-bold">(X)</p>
                </th>
                <th rowSpan={2}>
                  <p className="text-lg font-bold">COMMODITY DESCRIPTION</p>
                  <p className="text-xs">
                    Commodities requiring special or additional care or
                    attention in handling or stowing must be so marked and
                    packaged as to ensure safe transportation with ordinary
                    care.
                  </p>
                  <p className="text-xs font-bold">
                    See Section 2(e) of NMFC Item 360
                  </p>
                </th>
                <th colSpan={2} className="text-sm font-bold">
                  LTL ONLY
                </th>
              </tr>
              <tr>
                <th>QTY</th>
                <th>TYPE</th>
                <th>QTY</th>
                <th>TYPE</th>
                <th>NMFC #</th>
                <th>CLASS</th>
              </tr>
            </thead>

            <tbody>
              {populatedInfoData?.map((data, index) => (
                <tr key={index}>
                  <td>{data.handling?.qty}</td>
                  <td>{data.handling?.type}</td>
                  <td>{data.package?.qty}</td>
                  <td>{data.package?.type}</td>
                  <td>{data.weight}</td>
                  <td>{data.hm}</td>
                  <td>{data.desc}</td>
                  <td>{data.ltl?.nmfc}</td>
                  <td>{data.ltl?.class}</td>
                </tr>
              ))}
              <tr>
                <td>{data?.total?.unitQty}</td>
                <td className="bg-gray-400"></td>
                <td>{data?.total?.packageQty}</td>
                <td className="bg-gray-400"></td>
                <td>{data?.total?.weight}</td>
                <td className="bg-gray-400"></td>
                <td className="text-lg font-bold">GRAND TOTAL</td>
                <td className="bg-gray-400"></td>
                <td className="bg-gray-400"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </BillOfLandingWrapper>
    </div>
  );
}

export default BillOfLandingCarrierInfo;
