import React from 'react';
import BillOfLandingWrapper from './wrapper';

type Props = {
  data?: {
    shipFrom?: {
      name?: string;
      address?: string;
      city?: string;
      sid?: string;
      fob?: boolean;
    };
    shipTo?: {
      name?: string;
      address?: string;
      city?: string;
      cid?: string;
      location?: string;
      fob?: boolean;
    };
    thirdParty?: {
      name?: string;
      address?: string;
      city?: string;
      specialInstructions?: string;
    };
  };
  className?: string;
};

function BillOfLandingContactInfo({ data, className }: Props) {
  return (
    <div className={`${className}`}>
      <BillOfLandingWrapper title="Ship from">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p>Name: {data?.shipFrom?.name ?? ''}</p>
            <p>Address: {data?.shipFrom?.address ?? ''}</p>
            <p>City/State/Zip: {data?.shipFrom?.city ?? ''}</p>
            <p>SID#: {data?.shipFrom?.sid ?? ''}</p>
          </div>
          <div className="self-end">
            <div className="space-x-1">
              <span>FOB: </span>
              <input type="checkbox" checked={data?.shipFrom?.fob} />
            </div>
          </div>
        </div>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper title="Ship to">
        <div className="flex justify-between">
          <div className="space-y-1">
            <p>Name: {data?.shipTo?.name ?? ''}</p>
            <p>Address: {data?.shipTo?.address ?? ''}</p>
            <p>City/State/Zip: {data?.shipTo?.city ?? ''}</p>
            <p>CID#: {data?.shipTo?.cid ?? ''}</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-x-1">
              <p>Location #: {data?.shipTo?.location ?? ''}</p>
            </div>

            <div className="self-end justify-self-end space-x-1">
              <span>FOB</span>
              <input type="checkbox" checked={data?.shipTo?.fob} />
            </div>
          </div>
        </div>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper title="Third party freight charges bill to">
        <div className="flex items-center">
          <div className="space-y-1">
            <p>Name: {data?.thirdParty?.name ?? ''}</p>
            <p>Address: {data?.thirdParty?.address ?? ''}</p>
            <p>City/State/Zip: {data?.thirdParty?.city ?? ''}</p>
          </div>
          <div className="flex"></div>
        </div>
      </BillOfLandingWrapper>

      <BillOfLandingWrapper className="min-h-32">
        <p>
          SPECIAL INSTRUCTIONS: {data?.thirdParty?.specialInstructions ?? ''}
        </p>
      </BillOfLandingWrapper>
    </div>
  );
}

export default BillOfLandingContactInfo;
