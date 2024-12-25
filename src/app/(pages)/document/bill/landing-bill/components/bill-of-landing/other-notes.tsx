import React from 'react';
import BillOfLandingWrapper from './wrapper';

type Props = {
  data?: {
    codAmount?: string;
    feeTerms?: {
      collect?: boolean;
      prepaid?: boolean;
      customerCheck?: boolean;
    };
    trailerLoaded?: {
      shipper?: boolean;
      driver?: boolean;
    };
    freightCounted?: {
      shipper?: boolean;
      driverPallets?: boolean;
      driverPieces?: boolean;
    };
  };
};

function BillOfLandingOtherNotes({ data }: Props) {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/2">
          <BillOfLandingWrapper className="h-20">
            <p className="text-xs">
              Where the rate is dependent on value, shippers are required to
              state specifically in writing the agreed or declared value of the
              property as follows:
            </p>
            <p className="text-xs">
              “The agreed or declared value of the property is specifically
              stated by the shipper to be not exceeding __________________ per
              ___________________.”
            </p>
          </BillOfLandingWrapper>
        </div>
        <div className="w-1/2">
          <BillOfLandingWrapper className="h-20">
            <p className="text-lg font-bold">COD Amount: $ {data?.codAmount}</p>
            <div className="flex items-center gap-3">
              <span>Fee Terms: </span>
              <div className="flex gap-1 items-center">
                <span>Collect:</span>
                <input type="checkbox" checked={data?.feeTerms?.collect} />
              </div>
              <div className="flex gap-1 items-center">
                <span>Prepaid:</span>
                <input type="checkbox" checked={data?.feeTerms?.prepaid} />
              </div>
              <div className="flex gap-1 items-center">
                <span>Customer check acceptable:</span>
                <input
                  type="checkbox"
                  checked={data?.feeTerms?.customerCheck}
                />
              </div>
            </div>
          </BillOfLandingWrapper>
        </div>
      </div>

      <BillOfLandingWrapper>
        <span className="font-bold">
          NOTE Liability Limitation for loss or damage in this shipment may be
          applicable. See 49 U.S.C. 14706(c)(1)(A) and (B).
        </span>
      </BillOfLandingWrapper>

      <div className="flex items-center">
        <div className="w-1/2">
          <BillOfLandingWrapper className="h-36">
            <span>
              RECEIVED, subject to individually determined rates or contracts
              that have been agreed upon in writing between the carrier and
              shipper, if applicable, otherwise to the rates, classifications
              and rules that have been established by the carrier and are
              available to the shipper, on request, and to all applicable state
              and federal regulations.
            </span>
          </BillOfLandingWrapper>
        </div>
        <div className="w-1/2">
          <BillOfLandingWrapper className="h-36">
            <span>
              The carrier shall not make delivery of this shipment without
              payment of freight and all other lawful charges.
              _______________________________________Shipper Signature
            </span>
          </BillOfLandingWrapper>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-1/3">
          <BillOfLandingWrapper className="h-36">
            <p className="text-lg">SHIPPER SIGNATURE / DATE</p>
            <p className="text-xs">
              This is to certify that the above named materials are properly
              classified, packaged, marked and labeled, and are in proper
              condition for transportation according to the applicable
              regulations of the DOT.
            </p>
          </BillOfLandingWrapper>
        </div>
        <div className="w-1/3">
          <BillOfLandingWrapper className="h-36">
            <div className="flex gap-2">
              <div className="w-1/2">
                <span className="underline text-lg">Trailer Loaded:</span>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={data?.trailerLoaded?.shipper}
                  />
                  <span>By Shipper</span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={data?.trailerLoaded?.driver}
                  />
                  <span>By Driver</span>
                </div>
              </div>
              <div className="w-1/2">
                <span className="underline text-lg">Freight Counted:</span>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={data?.freightCounted?.shipper}
                  />
                  <span>By Shipper</span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={data?.freightCounted?.driverPallets}
                  />
                  <span>By Driver/pallets said to contain</span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={data?.freightCounted?.driverPieces}
                  />
                  <span>By Driver/Pieces</span>
                </div>
              </div>
            </div>
          </BillOfLandingWrapper>
        </div>
        <div className="w-1/3">
          <BillOfLandingWrapper className="h-36">
            <p className="text-lg font-bold">CARRIER SIGNATURE / PICKUP DATE</p>
            <p className="text-xs">
              Carrier acknowledges receipt of packages and required placards.
              Carrier certifies emergency response information was made
              available and/or carrier has the DOT emergency response guidebook
              or equivalent documentation in the vehicle.
            </p>
            <p className="text-xs font-bold">
              Property described above is received in good order, except as
              noted.
            </p>
          </BillOfLandingWrapper>
        </div>
      </div>
    </>
  );
}

export default BillOfLandingOtherNotes;
