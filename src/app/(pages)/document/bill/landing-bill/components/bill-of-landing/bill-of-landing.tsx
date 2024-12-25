import React from "react";
import BillOfLandingWrapper from "./wrapper";
import BillOfLandingHeader from "./header";
import BillOfLandingContactInfo from "./contact-info";
import BillOfLandingOtherInfo from "./other-info";
import BillOfLandingCustomerOrder from "./customer-order";
import BillOfLandingCarrierInfo from "./carrier-info";
import BillOfLandingOtherNotes from "./other-notes";

const billOfLanding = {
  "contact": {
    "shipFrom": {
      "name": "string",
      "address": "string",
      "city": "string",
      "sid": "string",
      "fob": true
    },
    "shipTo": {
      "name": "string",
      "address": "string",
      "city": "string",
      "cid": "string",
      "location": "string",
      "fob": true
    },
    "thirdParty": {
      "name": "string",
      "address": "string",
      "city": "string",
      "specialInstructions": "string"
    }
  },
  "otherInfo": {
    "billOfLandingNumber": 0,
    "carrier": {
      "name": "string",
      "trailerNumber": 0,
      "sealNumber": 0
    },
    "scac": "string",
    "proNumber": 0,
    "chargeTerms": {
      "prepaid": "string",
      "collect": "string",
      "thirdParty": "string"
    },
    "masterBillOfLanding": true
  },
  "orderInfo": {
    "info": [
      {
        "orderNumber": "001",
        "pkgs": 11,
        "weight": 10,
        "pallet": false,
        "shipperInfo": ""
      }
    ],
    "total": {
      "pkgs": 11,
      "weight": 10
    }
  },
  "carrierInfo": {
    "info": [
      {
        "handling": {
          "qty": 10,
          "type": "ABC"
        },
        "package": {
          "qty": 10,
          "type": "ABC"
        },
        "weight": 100,
        "hm": "CDE",
        "desc": "Lorem ipsum...",
        "ltl": {
          "nmfc": "FGH",
          "class": "IJK"
        }
      }
    ],
    "total": {
      "unitQty": 10,
      "packageQty": 10,
      "weight": 100
    }
  },
  "otherNotes": {
    "codAmount": "10000",
    "feeTerms": {
      "collect": true,
      "prepaid": true,
      "customerCheck": true
    },
    "trailerLoaded": {
      "shipper": true,
      "driver": true
    },
    "freightCounted": {
      "shipper": true,
      "driverPallets": true,
      "driverPieces": true
    }
  }
};

type Props = {};

function BillOfLanding({}: Props) {
  return (
    <div className="w-[80vw]">
      <BillOfLandingWrapper>
        <BillOfLandingHeader date={new Date()} title="Bill of landing" />
      </BillOfLandingWrapper>

      <div className="grid grid-cols-[3fr,2fr]">
        <BillOfLandingContactInfo data={billOfLanding.contact} />

        <BillOfLandingOtherInfo data={billOfLanding.otherInfo} />
      </div>

      <BillOfLandingCustomerOrder data={billOfLanding.orderInfo} />

      <BillOfLandingCarrierInfo data={billOfLanding.carrierInfo} />

      <BillOfLandingOtherNotes data={billOfLanding.otherNotes} />
    </div>
  );
}

export default BillOfLanding;
