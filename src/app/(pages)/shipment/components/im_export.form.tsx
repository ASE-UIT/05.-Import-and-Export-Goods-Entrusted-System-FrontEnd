import React, { useState } from "react";

const ImportExportForm = () => {
  const [formData, setFormData] = useState({
    documentNumber: "",
    issueDate: "",
    organizationName: "",
    licenseType: "",
    lawReference: "",
    decreeReference: "",
    decisionReference: "",
    suggestion: "",
    applicationInfo: "",
    proposedOrganization: "",
    companyName: "",
    companyAddress: "",
    companyPhone: "",
    companyFax: "",
    businessLicense: "",
    businessLicenseDate: "",
    importPurpose: "",
    importPort: "",
    transportConditions: "",
    importTime: "",
    importFrequency: "",
    import_export: "",
    companyResponsibility: "",
    expirationDate: "",
    decreeDate: "",
    companyNameForResponsibility: "",
    decreeNumber: "",
    decreeDetails: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-6">
      <div
        className="overflow-y-auto h-[70vh] border rounded shadow-lg p-5"
        style={{
          maxHeight: "90vh",
          maxWidth: "100vw",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="font-bold uppercase">
            Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam
          </h2>
          <h5 className="font-semibold">Độc lập - Tự do - Hạnh phúc</h5>
          <hr className="my-2 border-black" />
        </div>

        <div className="flex justify-between mb-4">
          <div className="w-1/2">
            <label>Số:</label>
            <input
              name="documentNumber"
              className="border-dotted border-b-2 w-full py-1 outline-none"
              value={formData.documentNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 text-right">
            <label>Hà Nội, ngày:</label>
            <input
              name="issueDate"
              type="date"
              className="border-dotted border-b-2 py-1 outline-none"
              value={formData.issueDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <h3 className="text-center font-bold mb-4">
          GIẤY PHÉP NHẬP KHẨU (XUẤT KHẨU)
        </h3>

        <div className="mb-4">
          <label>Thủ trưởng:</label>
          <input
            name="organizationName"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.organizationName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>
            Căn cứ Luật Phòng, chống ma túy ngày 30 tháng 3 năm 2021
          </label>
          <input
            name="lawReference"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.lawReference}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Căn cứ Nghị định:</label>
          <input
            name="decreeReference"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.decreeReference}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Căn cứ Quyết định:</label>
          <input
            name="decisionReference"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.decisionReference}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label>Theo đề nghị của:</label>
          <input
            name="suggestion"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.suggestion}
            onChange={handleInputChange}
          />
        </div>

        <h3 className="font-bold mb-2">QUYẾT ĐỊNH:</h3>
        <h4 className="font-semibold mb-2">Điều 1:</h4>

        <div className="mb-4">
          <label>1. Công ty:</label>
          <input
            name="companyName"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Địa chỉ:</label>
          <input
            name="companyAddress"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.companyAddress}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Điện thoại:</label>
          <input
            name="companyPhone"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.companyPhone}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Số fax:</label>
          <input
            name="companyFax"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.companyFax}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Số giấy phép kinh doanh:</label>
          <input
            name="businessLicense"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.businessLicense}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Cấp ngày:</label>
          <input
            name="businessLicenseDate"
            type="date"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.businessLicenseDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>1. Nhập khẩu/xuất khẩu:</label>
          <input
            name="import_export"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.import_export}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>2. Mục đích nhập khẩu/xuất khẩu:</label>
          <input
            name="importPurpose"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.importPurpose}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>3. Cửa khẩu nhập khẩu/xuất khẩu:</label>
          <input
            name="importPort"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.importPort}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>4. Phương tiện và điều kiện vận chuyển:</label>
          <input
            name="transportConditions"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.transportConditions}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>5. Thời gian thực hiện:</label>
          <input
            name="importTime"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.importTime}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>6. Số lần thực hiện:</label>
          <input
            name="importFrequency"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.importFrequency}
            onChange={handleInputChange}
          />
        </div>
        {/* Điều 2 */}
        <h4 className="font-semibold mb-2">Điều 2:</h4>
        <div className="mb-4">
          <label>
            Công ty có trách nhiệm thực hiện đúng quy định của Luật Phòng, chống
            ma túy:
          </label>
          <input
            name="companyNameForResponsibility"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            placeholder="Nhập tên công ty"
            value={formData.companyNameForResponsibility}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label>Số Nghị định:</label>
          <input
            name="decreeNumber"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            placeholder="Nhập số nghị định"
            value={formData.decreeNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label>Ngày Nghị định:</label>
          <input
            name="decreeDate"
            type="date"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.decreeDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label>Chi tiết Nghị định:</label>
          <input
            name="decreeDetails"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            placeholder="Nhập chi tiết nghị định"
            value={formData.decreeDetails}
            onChange={handleInputChange}
          />
        </div>

        {/* Điều 3 */}
        <h4 className="font-semibold mb-2">Điều 3:</h4>
        <div className="mb-4">
          <label>Giấy phép này có giá trị đến hết ngày:</label>
          <input
            name="expirationDate"
            type="date"
            className="border-dotted border-b-2 w-full py-1 outline-none"
            value={formData.expirationDate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => {
            const confirm = window.confirm(
              "Bạn có chắc chắn muốn gửi yêu cầu?"
            );
            if (confirm) {
              console.log("Form Data:", formData);
              // Thêm xử lý gửi dữ liệu ở đây
              alert("Yêu cầu đã được gửi thành công!");
            } else {
              alert("Hủy gửi yêu cầu.");
            }
          }}
        >
          Gửi Yêu Cầu
        </button>
      </div>
    </div>
  );
};

export default ImportExportForm;
