"use client";
import React, { useState } from "react";
import "./im-ex-license.css";
interface FormData {
  companyName: string;
  address: string;
  phone: string;
  fax: string;
  businessLicense: string;
  issuedBy: string;
  issuedDate: string;
  importExportPurpose: string;
  port: string;
  transportConditions: string;
  estimatedTime: string;
  executionTimes: string;
  expiryDate: string;
}

const ImportExportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    address: "",
    phone: "",
    fax: "",
    businessLicense: "",
    issuedBy: "",
    issuedDate: "",
    importExportPurpose: "",
    port: "",
    transportConditions: "",
    estimatedTime: "",
    executionTimes: "",
    expiryDate: "",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto p-6 max-w-screen-lg">
      <div
        className="border rounded shadow-lg p-6 max-h-[80vh] overflow-y-auto"
        style={{
          maxWidth: "1000px",
        }}
      >
        <div className="text-center mb-4">
          <h1 className="font-bold uppercase text-lg">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </h1>
          <h3 className="font-semibold">Độc lập - Tự do - Hạnh phúc</h3>
          <hr className="my-2 border-black" />
        </div>

        {/* Thủ trưởng */}
        <div className="text-center mb-4">
          <h2>Thủ trưởng ...................</h2>
        </div>

        <div className="mb-4">
          <p>Căn cứ Luật Phòng, chống ma túy ngày 30 tháng 3 năm 2021;</p>
          <p>
            Căn cứ Nghị định số 105/2021/NĐ-CP ngày 4 tháng 12 năm 2021 của
            Chính phủ quy định chi tiết và hướng dẫn thi hành một số điều của
            Luật Phòng, chống ma túy:
          </p>

          <p>
            Căn cứ Quyết định số:{" "}
            <input
              type="text"
              value={formData.businessLicense}
              onChange={(e) => handleChange("businessLicense", e.target.value)}
              className="input-underline"
              placeholder="123/QĐ-TTg"
            />
            ngày{" "}
            <input
              type="date"
              value={formData.issuedDate}
              onChange={(e) => handleChange("issuedDate", e.target.value)}
              className="input-underline"
            />
          </p>
        </div>

        <h3 className="font-bold mb-2">QUYẾT ĐỊNH:</h3>
        <h4 className="font-semibold mb-2">Điều 1:</h4>

        {/* Điều 1 */}
        <div className="mb-4">
          <p>
            1. Công ty{" "}
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className="input-underline"
              placeholder="Tên công ty"
            />{" "}
            trụ sở tại:{" "}
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="input-underline"
              placeholder="Địa chỉ"
            />
            , điện thoại:{" "}
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="input-underline"
              placeholder="Số điện thoại"
            />
            , số fax:{" "}
            <input
              type="text"
              value={formData.fax}
              onChange={(e) => handleChange("fax", e.target.value)}
              className="input-underline"
              placeholder="Số fax"
            />
          </p>
        </div>

        <h4 className=" mb-2">
          2. Mục đích nhập khẩu (xuất khẩu):{" "}
          <input
            type="text"
            value={formData.importExportPurpose}
            onChange={(e) =>
              handleChange("importExportPurpose", e.target.value)
            }
            className="input-underline"
            placeholder="Nhập mục đích"
          />
        </h4>

        <h4 className=" mb-2">
          3. Cửa khẩu nhập khẩu (xuất khẩu):{" "}
          <input
            type="text"
            value={formData.port}
            onChange={(e) => handleChange("port", e.target.value)}
            className="input-underline"
            placeholder="Tên cửa khẩu"
          />
        </h4>

        <h4 className=" mb-2">
          4. Phương tiện và điều kiện vận chuyển:{" "}
          <input
            type="text"
            value={formData.transportConditions}
            onChange={(e) =>
              handleChange("transportConditions", e.target.value)
            }
            className="input-underline"
            placeholder="Điều kiện"
          />
        </h4>

        <h4 className=" mb-2">
          5. Thời gian thực hiện nhập khẩu (xuất khẩu) dự kiến:{" "}
          <input
            type="date"
            value={formData.estimatedTime}
            onChange={(e) => handleChange("estimatedTime", e.target.value)}
            className="input-underline"
          />
        </h4>

        <h4 className=" mb-2">
          6. Số lần thực hiện nhập khẩu (xuất khẩu):{" "}
          <input
            type="number"
            value={formData.executionTimes}
            onChange={(e) => handleChange("executionTimes", e.target.value)}
            className="input-underline"
            placeholder="Số lần"
          />
        </h4>

        {/* Các điều khác */}
        <h4 className="font-semibold mb-2">Điều 2:</h4>
        <p>
          Công ty {formData.companyName || "........."} có trách nhiệm thực hiện
          đúng quy định của Luật Phòng, chống ma túy.
        </p>

        <h4 className="font-semibold mb-2">Điều 3:</h4>
        <div className="mb-4">
          <p>
            Giấy phép này có giá trị đến hết ngày{" "}
            <input
              type="date"
              value={formData.expiryDate}
              onChange={(e) => handleChange("expiryDate", e.target.value)}
              className="input-underline"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportExportForm;
