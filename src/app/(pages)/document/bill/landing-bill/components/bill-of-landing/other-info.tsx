import React from 'react';
import BillOfLandingWrapper from './wrapper';

type Props = {
  data?: {
    billOfLandingNumber?: number;
    carrier?: {
      name?: string;
      trailerNumber?: number;
      sealNumber?: number;
    };
    scac?: string;
    proNumber?: number;
    chargeTerms?: {
      prepaid?: string;
      collect?: string;
      thirdParty?: string;
    };
    masterBillOfLanding?: boolean;
  };
  className?: string;
};

function BillOfLandingOtherInfo({ data, className }: Props) {
  return (
    <div className={`${className}`}>
      <BillOfLandingWrapper className="min-h-[9.125rem]">
        <p className="text-lg font-semibold">
          Bill of Landing Number: {data?.billOfLandingNumber ?? ''}
        </p>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper>
        <p className="text-lg uppercase font-semibold">
          Carrier name: {data?.carrier?.name ?? ''}
        </p>
        <p>Trailer number: {data?.carrier?.trailerNumber ?? ''}</p>
        <p>Seal number(s): {data?.carrier?.sealNumber ?? ''}</p>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper className="min-h-36">
        <p className="text-sm uppercase font-bold">SCAC: {data?.scac ?? ''}</p>
        <p className="text-sm uppercase font-bold">
          Pro number: {data?.proNumber ?? ''}
        </p>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper>
        <div>
          <span className="font-bold">Freight Charge Terms: </span>
          <span className="text-sm font-bold">
            (freight charges are prepaid unless marked otherwise)
          </span>
        </div>
        <div className="flex items-center gap-20">
          <p className="text-sm font-bold">
            Prepaid {data?.chargeTerms?.prepaid ?? ''}
          </p>
          <p className="text-sm font-bold">
            Collect {data?.chargeTerms?.collect ?? ''}
          </p>
          <p className="text-sm font-bold">
            3<sup>rd</sup> Party {data?.chargeTerms?.thirdParty ?? ''}
          </p>
        </div>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper className="min-h-12">
        <div className="flex items-center justify-around">
          <div className="flex flex-col">
            <input type="checkbox" checked={data?.masterBillOfLanding} />
            <p className="text-xs">(check box)</p>
          </div>

          <p className="text-sm">
            Master Bill of Landing: with attached underlying Bills of Lading
          </p>
        </div>
      </BillOfLandingWrapper>
    </div>
  );
}

export default BillOfLandingOtherInfo;
