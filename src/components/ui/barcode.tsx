"use client";

export default function Barcode() {
  return (
    <div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Quicksand");
          .custom-kontakt .barcode-box {
            width: fit-content;
            height: fit-content;
            margin-left: auto;
            margin-right: auto;
          }
          .custom-kontakt .barcode-box .barcode-stripes .stripe-1 {
            display: block;
            height: 50px;
            width: 3px;
            float: left;
            border-right: thin solid #000;
            border-left: thin solid #000;
            border-top-color: #fff;
            border-bottom-color: #fff;
          }
          .custom-kontakt .barcode-box .barcode-stripes .stripe-2 {
            display: block;
            height: 50px;
            width: 5px;
            float: left;
            margin-left: 1px;
            margin-right: 1px;
            border-right: thick solid #000;
            border-left: thick solid #000;
            border-top-color: #fff;
            border-bottom-color: #fff;
          }
          .custom-kontakt .barcode-box .barcode-stripes .stripe-3 {
            display: block;
            height: 50px;
            width: 5px;
            float: left;
            margin-left: 1px;
            margin-right: 1px;
            border-right: thick solid #000;
            border-left: thin solid #000;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig1,
          .custom-kontakt .barcode-box .barcode-stripes span.sig2,
          .custom-kontakt .barcode-box .barcode-stripes span.sig3,
          .custom-kontakt .barcode-box .barcode-stripes span.sig4,
          .custom-kontakt .barcode-box .barcode-stripes span.sig5,
          .custom-kontakt .barcode-box .barcode-stripes span.sig6,
          .custom-kontakt .barcode-box .barcode-stripes span.sig7,
          .custom-kontakt .barcode-box .barcode-stripes span.sig8,
          .custom-kontakt .barcode-box .barcode-stripes span.sig9 {
            color: #000;
            font-size: 12px;
            font-family: "Quicksand", sans-serif;
            float: left;
            margin-top: -10px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig1 {
            margin-right: 20px;
            margin-left: 7px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig2 {
            margin-right: 20px;
            margin-left: 7px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig3 {
            margin-right: 13px;
            margin-left: 5px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig4 {
            margin-right: 5px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig5 {
            margin-right: 15px;
            margin-left: 5px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig6 {
            margin-right: 15px;
            margin-left: 2px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig7 {
            margin-right: 15px;
            margin-left: 10px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig8 {
            margin-right: 15px;
            margin-left: 5px;
          }
          .custom-kontakt .barcode-box .barcode-stripes span.sig9 {
            margin-left: 12px;
          }
        `}
      </style>
      <section className="custom-kontakt">
        <div className="barcode-box">
          <div className="barcode-stripes">
            <span className="stripe-1"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-3"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-2"></span>
            <span className="stripe-3"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-3"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-3"></span>
            <span className="stripe-2"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
            <span className="stripe-1"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
