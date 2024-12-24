"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useDocument from "@/hooks/use-document";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DocumentDetails() {
  const router = useRouter();
  const { id: documentId } = useParams<{ id: string }>();

  const { data: documentData } = useDocument.useGetCustomerForwarderListById(documentId);

  const handleBack = () => {
    router.push("/document/contract/customer_forwarder"); 
  };

  if (!documentData) {
    return <div className="text-center mt-8">Document not found.</div>;
  }

  const fields = documentData?.data?.[0]?.fields;

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg border border-gray-200">
      
      <div className="mb-6">
        <Button
          onClick={handleBack}
          className="text-white px-5 py-2 rounded-md shadow transition-all"
        >
          Back
        </Button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Document Details
      </h1>
      
        <div className="mb-8 border border-gray-300 rounded-md p-4">
            <strong className="block text-lg font-semibold text-gray-800 mb-2">Doc Number</strong>
            <p className="text-lg text-gray-900 font-medium">{documentData?.data?.[0].docNumber}</p>   
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {fields && (
          <>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Tên Doanh nghiệp A</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_name}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Địa chỉ</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_address}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Điện thoại</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_phone}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Tài khoản</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_account}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Ngân hàng</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_bank}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Đại diện</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_represent}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Chức vụ</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_position}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Giấy ủy quyền số</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_authorNumber}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Viết ngày</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_authorDate}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Do chức vụ ký</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.A_signPosition}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Tên Doanh nghiệp B</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_name}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Địa chỉ</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_address}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Điện thoại</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_phone}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Tài khoản</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_account}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Ngân hàng</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_bank}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Đại diện</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_represent}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Chức vụ</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_position}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Giấy ủy quyền số</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_authorNumber}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Viết ngày</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_authorDate}</p>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md p-4">
              <strong className="text-gray-600">Do chức vụ ký</strong>
              <p className="text-lg text-gray-900 font-medium">{fields.B_signPosition}</p>
            </div>
          </>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rows</h2>
      <table className="w-full border-collapse table-auto border border-gray-300 rounded-md mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">STT</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Tên hàng</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Đơn vị tính</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Số lượng</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Đơn giá</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Thành tiền</th>
            <th className="p-4 text-left text-sm font-medium text-gray-600 border-b">Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {fields?.rows.map((row: any, index: number) => (
            <tr
              key={index}
              className={`transition hover:bg-gray-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="border p-4 text-sm text-gray-800">{row.productName}</td>
              <td className="border p-4 text-sm text-gray-800">{row.unitCalculation}</td>
              <td className="border p-4 text-sm text-gray-800">{row.quantity}</td>
              <td className="border p-4 text-sm text-gray-800">{row.price}</td>
              <td className="border p-4 text-sm text-gray-800">{row.total}</td>
              <td className="border p-4 text-sm text-gray-800">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-8 border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Cộng:</strong>
        <p className="text-gray-700">{fields?.sum}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Tổng giá trị hàng hóa (VND):</strong>
        <p className="text-gray-700">{fields?.vnd}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Tổng giá trị hàng hóa (Ngoại tệ):</strong>
        <p className="text-gray-700">{fields?.foreignCurrency}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Ngày chào hàng và xuất khẩu:</strong>
        <p className="text-gray-700">{fields?.exportDate}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Địa điểm vận chuyển hàng hóa:</strong>
        <p className="text-gray-700">{fields?.place}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Thời gian hàng hóa được vận chuyển đến:</strong>
        <p className="text-gray-700">{fields?.deliveryDate}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Thời gian giao dịch xuất khẩu (ngày):</strong>
        <p className="text-gray-700">{fields?.day}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Số tiền chi phí ủy thác mặt hàng 1 (đồng):</strong>
        <p className="text-gray-700">{fields?.price1}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Số tiền chi phí ủy thác mặt hàng 2 (đồng):</strong>
        <p className="text-gray-700">{fields?.price2}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Số tiền chi phí ủy thác mặt hàng 3 (đồng):</strong>
        <p className="text-gray-700">{fields?.price3}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Phương thức thanh toán:</strong>
        <p className="text-gray-700">{fields?.method}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Mức phạt trong trường hợp bên A chậm thanh toán (%):</strong>
        <p className="text-gray-700">{fields?.overdueRate}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Mức phạt cho bên không tuân thủ hợp đồng (%):</strong>
        <p className="text-gray-700">{fields?.penaltyRate}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Hiệu lực của hợp đồng đến ngày:</strong>
        <p className="text-gray-700">{fields?.contractDate}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Hợp đồng được lập thành (bản):</strong>
        <p className="text-gray-700">{fields?.version}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Chữ ký bên A:</strong>
        <p className="text-gray-700">{fields?.signA}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <strong className="block text-lg font-semibold text-gray-800 mb-2">Chữ ký bên B:</strong>
        <p className="text-gray-700">{fields?.signB}</p>
      </div>
    </div>
  );
}
